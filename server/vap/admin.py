from django.contrib import admin

from .models import User, Coach, Team, TeamMember, Deliverable, Milestone, Question, TeamDeliverable, Answer, Comment, CommentAnswer

class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['name', 'email','phone','photo', 'linkedin']}),
    ]
    list_display = ('name', 'email')

class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1

class MilestoneInline(admin.TabularInline):
    model = Milestone
    extra = 1

class MilestoneAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['deliverable', 'num', 'title']}),
    ]
    inlines = [QuestionInline]

class DeliverableAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['title', 'description']}),
    ]
    inlines = [MilestoneInline]


admin.site.register(User, UserAdmin)
admin.site.register(Coach)
admin.site.register(Team)
admin.site.register(TeamMember)
admin.site.register(Deliverable, DeliverableAdmin)
admin.site.register(Milestone, MilestoneAdmin)
admin.site.register(Question)
admin.site.register(TeamDeliverable)
admin.site.register(Answer)
admin.site.register(Comment)
admin.site.register(CommentAnswer)
