import os

from .models import User, Team, TeamMember, Coach, Deliverable, TeamDeliverable, Comment, File
from .serializers import UserSerializer, CustomUserSerializer, TeamSerializer, TeamMemberSerializer, CoachSerializer, DeliverableSerializer, TeamDeliverableSerializer, AllTeamDeliverableSerializer, CommentSerializer
from django.contrib.auth.models import User as vap_user
from rest_framework import generics
from django.contrib.staticfiles import views
from rest_framework import permissions
from .serializers import ImageSerializer

# To upload a file
from rest_framework.views import APIView

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser

from rest_framework.request import Request
from rest_framework.response import Response

# OCR scripts
# from ocr import image, recognizer


def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')


class ImageList(generics.ListAPIView):

    'List all images'

    serializer_class = ImageSerializer
    queryset = File.objects.all()

class ImageDetail(generics.RetrieveAPIView):

    'Retrieve an image instance'

    serializer_class = ImageSerializer
    queryset =  File.objects.all()

class ImageCreate(generics.CreateAPIView):

    'Create a new image instance'

    serializer_class = ImageSerializer

    def post(self, request):

        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():

            # Save request image in the database
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class FileView(APIView):
#   parser_classes = (MultiPartParser, FormParser)
#   def post(self, request, *args, **kwargs):
#     file_serializer = FileSerializer(data=request.data)
#     if file_serializer.is_valid():
#       file_serializer.save()
#       return Response(file_serializer.data, status=status.HTTP_201_CREATED)
#     else:
#       return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
   # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = vap_user.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(user=user_id)
        return queryset

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = vap_user.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TeamList(generics.ListCreateAPIView):
    serializer_class = TeamSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Team.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TeamMemberList(generics.ListCreateAPIView):
    serializer_class = TeamMemberSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamMember.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id)
        return queryset


class TeamMemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AllTeamMemberList(generics.ListCreateAPIView):
    serializer_class = TeamMemberSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamMember.objects.all()
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)
        return queryset


class AllTeamMemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CoachList(generics.ListCreateAPIView):
    serializer_class = CoachSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Coach.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        return queryset

class CoachDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class TeamDeliverableList(generics.ListCreateAPIView):
    serializer_class = TeamDeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamDeliverable.objects.all()
        team_id = self.kwargs.get('team_id', None)
        if team_id is not None:
            queryset = queryset.filter(team=team_id).order_by('deadline')
        return queryset

    def post(self, request):

        serializer = TeamDeliverableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeamDeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamDeliverable.objects.all()
    serializer_class = TeamDeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class AllTeamDeliverableList(generics.ListCreateAPIView):
    serializer_class = AllTeamDeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = TeamDeliverable.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = queryset.order_by('deadline')
        return queryset.order_by('deadline')


class AllTeamDeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamDeliverable.objects.all()
    serializer_class = AllTeamDeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)



class DeliverableList(generics.ListCreateAPIView):
    serializer_class = DeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Deliverable.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=name)
        return queryset

class DeliverableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deliverable.objects.all()
    serializer_class = DeliverableSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Comment.objects.all()
        teamdeliverable_id = self.kwargs.get('teamdeliverable_id', None)
        if teamdeliverable_id is not None:
            queryset = queryset.filter(teamdeliverable=teamdeliverable_id).order_by('-date')
        return queryset

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
