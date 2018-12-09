from rest_framework import serializers
from .models import Team, Coach, TeamMember

class TeamSerializer(serializers.ModelSerializer):
    teammembers = serializers.StringRelatedField(many=True)
    class Meta:
        model = Team
        fields = ('name', 'pipeline', 'coaches', 'teammembers')
        depth = 1

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'
