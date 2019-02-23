from rest_framework import serializers
from .models import User, Team, Coach, TeamMember, Deliverable, TeamDeliverable, Comment
from django.contrib.auth.models import User as vap_user



class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user', 'name', 'email', 'phone', 'is_coach', 'is_team_member')

    # For post
    # def to_representation(self, instance):
    #     self.fields['user'] =  UserSerializer(read_only=True)
    #     return super(CustomUserSerializer, self).to_representation(instance)

class UserSerializer(serializers.ModelSerializer):

    profile =  CustomUserSerializer(many=False, read_only=True)

    class Meta:
        model = vap_user
        fields = ('id','username', 'password', 'profile')
        lookup_field='username'


class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'teamdeliverable', 'coach', 'text', 'date')

    # For post
    def to_representation(self, instance):
        self.fields['coach'] =  CoachSerializer(read_only=False)
        return super(CommentSerializer, self).to_representation(instance)



class DeliverableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deliverable
        fields = '__all__'
        depth = 1


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'
        depth = 1

class TeamDeliverableSerializer(serializers.ModelSerializer):
    # deliverable = DeliverableSerializer(many=False, read_only=True)

    class Meta:
        model = TeamDeliverable
        fields = ('id', 'deliverable', 'team', 'deadline', 'delivery_day', 'status', 'file' )

    # For post
    def to_representation(self, instance):
        self.fields['deliverable'] =  DeliverableSerializer(read_only=False)
        return super(TeamDeliverableSerializer, self).to_representation(instance)

class AllTeamDeliverableSerializer(serializers.ModelSerializer):
    # deliverable = DeliverableSerializer(many=False, read_only=True)

    class Meta:
        model = TeamDeliverable
        fields = '__all__'
        depth = 2


class TeamMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = TeamMember
        fields = ('user', 'team', 'name', 'email', 'phone', 'field', 'role' )

    # For post
    def to_representation(self, instance):
        self.fields['team'] =  TeamSerializer(read_only=False)
        return super(TeamMemberSerializer, self).to_representation(instance)
