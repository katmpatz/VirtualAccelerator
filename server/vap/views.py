#from django.shortcuts import render, get_object_or_404
from .models import Team, TeamMember, Coach, Deliverable, TeamDeliverable, Comment
from .serializers import TeamSerializer, TeamMemberSerializer, CoachSerializer, DeliverableSerializer, TeamDeliverableSerializer, CommentSerializer

from rest_framework import generics

from django.contrib.staticfiles import views

from rest_framework import permissions


def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')

class TeamList(generics.ListCreateAPIView):
    serializer_class = TeamSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Team.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TeamMemberList(generics.ListCreateAPIView):
    serializer_class = TeamMemberSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamMember.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id)
        return queryset

class TeamMemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CoachList(generics.ListCreateAPIView):
    serializer_class = CoachSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Coach.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class CoachDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TeamDeliverableList(generics.ListCreateAPIView):
    serializer_class = TeamDeliverableSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamDeliverable.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id)
        return queryset

class TeamDeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamDeliverable.objects.all()
    serializer_class = TeamDeliverableSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class DeliverableList(generics.ListCreateAPIView):
    serializer_class = DeliverableSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Deliverable.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=name)
        return queryset

class DeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deliverable.objects.all()
    serializer_class = DeliverableSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Comment.objects.all()
        answer_id = self.kwargs.get('answer_id', None)
        if answer_id is not None:
            queryset = queryset.filter(answer=answer_id)
        return queryset

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
