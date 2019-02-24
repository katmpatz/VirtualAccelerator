from django.db import models
from PIL import Image
from django.contrib.auth.models import User as vap_user

class User(models.Model):
    user = models.OneToOneField(vap_user, on_delete = models.CASCADE, primary_key = True, related_name='profile')
    name = models.CharField(max_length=100, default="")
    email = models.CharField(max_length=100, default="", blank=True)
    phone = models.CharField(max_length=20, default="", blank=True)
    # photo = models.ImageField(upload_to = 'static/img/', blank=True)
    is_coach = models.BooleanField(default=False)
    is_team_member = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Coach(User):
    job_title = models.CharField(max_length=100, blank=True)
    organization = models.CharField(max_length=100, blank=True)
    field = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Team(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to = 'img/', blank=True)
    pipeline = models.CharField(max_length=100)
    research_stream = models.BooleanField(default=False)
    maturity_level = models.IntegerField()
    date_of_entry = models.DateField(auto_now=True)
    website = models.CharField(max_length=100, blank=True)
    coorporate_existance = models.BooleanField(default=False)
    tag_line = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class TeamMember(User):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    role = models.CharField(max_length=100, default="", blank=True)
    field = models.CharField(max_length=100, default="", blank=True)

    def __str__(self):
        return self.name


class Deliverable(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(default="")
    release_date = models.DateField(auto_now=True)
    pipeline = models.CharField(max_length=100, default="", blank=True)
    template = models.FileField(upload_to = 'deliverables/', blank=True)
    icon = models.CharField(max_length=100, default="group", blank=True)

    def __str__(self):
        return self.title

class TeamDeliverable(models.Model):
    deliverable = models.ForeignKey(Deliverable, on_delete=models.CASCADE, related_name='deliverable')
    team = models.ForeignKey(Team, on_delete=models.CASCADE, )
    deadline = models.DateField(null=True, blank=True)
    delivery_day = models.DateTimeField(null=True, blank=True)
    status = models.BooleanField(default=False)
    file = models.FileField(upload_to = 'teamdeliverables/', blank=True)

    class Meta:
        unique_together = ('deliverable', 'team',)

    def __str__(self):
        return "%s %s" % (self.deliverable, self.team)

class Comment(models.Model):
    teamdeliverable = models.ForeignKey(TeamDeliverable, related_name='comments', on_delete=models.CASCADE, default=1)
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    text = models.TextField(default="")
    date = models.DateField(auto_now=True)

    def __str__(self):
        return "%s %s %s" % (self.teamdeliverable, self.coach, self.text)

# class File(models.Model):
#   file = models.ImageField(blank=False, null=False)
#   remark = models.CharField(max_length=20)
#   timestamp = models.DateTimeField(auto_now_add=True)

class File(models.Model):
  file = models.FileField(blank=False, null=False)
  # remark = models.CharField(max_length=20)
  timestamp = models.DateTimeField(auto_now_add=True)
