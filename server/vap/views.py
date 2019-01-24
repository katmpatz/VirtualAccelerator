#from django.shortcuts import render, get_object_or_404
from .models import Team
from .models import TeamMember
from .models import Coach
from .models import Deliverable
from .models import TeamDeliverable
from .models import Milestone
from .models import Question
from .models import Answer
from .models import Comment
from .models import CommentAnswer

from .serializers import TeamSerializer, TeamMemberSerializer, CoachSerializer
from .serializers import DeliverableSerializer, MilestoneSerializer, QuestionSerializer, TeamDeliverableSerializer, AnswerSerializer, CommentSerializer, CommentAnswerSerializer
from rest_framework import generics

from django.contrib.staticfiles import views

def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')

class TeamList(generics.ListCreateAPIView):
    serializer_class = TeamSerializer

    def get_queryset(self):
        queryset = Team.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class TeamMemberList(generics.ListCreateAPIView):
    serializer_class = TeamMemberSerializer

    def get_queryset(self):
        queryset = TeamMember.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id)
        return queryset

class TeamMemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class CoachList(generics.ListCreateAPIView):
    serializer_class = CoachSerializer

    def get_queryset(self):
        queryset = Coach.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class CoachDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

class DeliverableList(generics.ListCreateAPIView):
    serializer_class = DeliverableSerializer

    def get_queryset(self):
        queryset = Deliverable.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class DeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deliverable.objects.all()
    serializer_class = DeliverableSerializer

class MilestoneList(generics.ListCreateAPIView):
    serializer_class = MilestoneSerializer

    def get_queryset(self):
        queryset = Milestone.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class MilestoneDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer

class QuestionList(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class TeamDeliverableList(generics.ListCreateAPIView):
    serializer_class = TeamDeliverableSerializer

    def get_queryset(self):
        queryset = TeamDeliverable.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id)
        return queryset

class TeamDeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamDeliverable.objects.all()
    serializer_class = TeamDeliverableSerializer

class AnswerList(generics.ListCreateAPIView):
    serializer_class = AnswerSerializer

    def get_queryset(self):
        queryset = Answer.objects.all()
        question_id = self.kwargs.get('question_id', None)
        if question_id is not None:
            queryset = queryset.filter(question=question_id)
        return queryset

class AnswerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        queryset = Comment.objects.all()
        answer_id = self.kwargs.get('answer_id', None)
        if answer_id is not None:
            queryset = queryset.filter(answer=answer_id)
        return queryset

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentAnswerList(generics.ListCreateAPIView):
    serializer_class = CommentAnswerSerializer

    def get_queryset(self):
        queryset = CommentAnswer.objects.all()
        comment_id = self.kwargs.get('comment_id', None)
        if comment_id is not None:
            queryset = queryset.filter(comment=comment_id)
        return queryset

class CommentAnswerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommentAnswer.objects.all()
    serializer_class = CommentAnswerSerializer


# def index(request):
#     available_teams = Team.objects.all()
#     available_deliverables = Deliverable.objects.all()
#     context = {'available_teams': available_teams, 'available_deliverables': available_deliverables}
#     return render(request, 'vap/index.html', context)
#
# def team(request, team_id):
#     team = get_object_or_404(Team, pk=team_id)
#     return render(request, 'vap/team.html', {'team': team})
#
# def teamMember(request, teamMember_id):
#     teamMember = get_object_or_404(TeamMember, pk=teamMember_id)
#     return render(request, 'vap/teamMember.html', {'teamMember': teamMember})
#
# def coach(request, coach_id):
#     coach = get_object_or_404(Coach, pk=coach_id)
#     return render(request, 'vap/coach.html', {'coach': coach})
#
# def deliverable(request, deliverable_id):
#     deliverable = get_object_or_404(Deliverable, pk=deliverable_id)
#     return render(request, 'vap/deliverable.html', {'deliverable': deliverable})
#
# def teamDeliverable(request, teamDeliverable_id):
#     teamdeliverable = get_object_or_404(TeamDeliverable, pk=teamDeliverable_id)
#     return render(request, 'vap/teamdeliverable.html', {'teamdeliverable': teamdeliverable})
