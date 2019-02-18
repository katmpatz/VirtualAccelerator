from django.db import models
from PIL import Image

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    photo = models.ImageField(upload_to = 'static/img/', blank=True)
    
    # linkedin = models.CharField(max_length=100, blank=True)
    #field = models.CharField(max_length=100)

    def __str__(self):
        return "%s" % (self.name)

class Coach(User):
    job_title = models.CharField(max_length=100, blank=True)
    organization = models.CharField(max_length=100, blank=True)
    field = models.CharField(max_length=100, blank=True)

class Team(models.Model):
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to = 'img/', blank=True)
    pipeline = models.CharField(max_length=100)
    research_stream = models.BooleanField(default=False)
    maturity_level = models.IntegerField()
    date_of_entry = models.DateField(auto_now=True)
    website = models.CharField(max_length=100, blank=True)
    coorporate_existance = models.BooleanField(default=False)
    coaches = models.ManyToManyField(Coach)
    tag_line = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

class TeamMember(User):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    role = models.CharField(max_length=100, default="", blank=True)
    field = models.CharField(max_length=100, default="", blank=True)

class Deliverable(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(default="")
    release_date = models.DateField(auto_now=True)
    pipeline = models.CharField(max_length=100, default="", blank=True)
    template = models.FileField(upload_to = 'deliverables/', blank=True)
    icon = models.CharField(max_length=100, default="group", blank=True)

    def __str__(self):
        return self.title

# class Milestone(models.Model):
#     deliverable = models.ForeignKey(Deliverable, related_name='milestones',on_delete=models.CASCADE)
#     num = models.IntegerField()
#     title = models.CharField(max_length=200, default="")
#
#     def __str__(self):
#         return "%d.%s" % (self.num, self.title)
#
# class Question(models.Model):
#     milestone = models.ForeignKey(Milestone,related_name='questions', on_delete=models.CASCADE)
#     num = models.IntegerField()
#     title = models.CharField(max_length=500)
#     #instructions = models.TextField(default="")
#
#     def __str__(self):
#         return "%s %d. %s" % (self.milestone, self.num, self.title)

class TeamDeliverable(models.Model):
    deliverable = models.ForeignKey(Deliverable, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    deadline = models.DateField(null=True, blank=True)
    delivery_day = models.DateField(null=True, blank=True)
    status = models.BooleanField(default=False)
    file = models.FileField(upload_to = 'media/deliverables/teams', blank=True)

    def __str__(self):
        return "%s %s" % (self.deliverable, self.team)

# class Answer(models.Model):
#     team_deliverable = models.ForeignKey(TeamDeliverable, related_name='answers', on_delete=models.CASCADE)
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     text = models.TextField(default="")
#     date = models.DateField()
#
#     def __str__(self):
#         return "%s %s %s" % (self.team_deliverable, self.question, self.text)

class Comment(models.Model):
    teamdeliverable = models.ForeignKey(TeamDeliverable,related_name='comments', on_delete=models.CASCADE, default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(default="")
    date = models.DateField()

    def __str__(self):
        return "%s %s %s" % (self.teamdeliverable, self.user, self.text)
