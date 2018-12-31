from rest_framework import serializers
from .models import Team, Coach, TeamMember, Deliverable, Milestone

class TeamSerializer(serializers.ModelSerializer):
    teammembers = serializers.StringRelatedField(many=True)
    class Meta:
        model = Team
        fields = '__all__'
        depth = 1

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'
        depth = 1

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'

class DeliverableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deliverable
        fields = '__all__'

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = '__all__'
