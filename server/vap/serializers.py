from rest_framework import serializers
from .models import Team, Coach, TeamMember, Deliverable, TeamDeliverable, Comment


class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        depth = 1


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

    class Meta:
        model = TeamDeliverable
        fields = ('id', 'deliverable', 'team', 'deadline', 'delivery_day', 'status', 'file' )

    # For post
    def to_representation(self, instance):
        self.fields['deliverable'] =  DeliverableSerializer(read_only=True)
        return super(TeamDeliverableSerializer, self).to_representation(instance)


class TeamMemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = TeamMember
        fields = ('id', 'team', 'name', 'email', 'phone', 'field', 'role' )

    # For post
    def to_representation(self, instance):
        self.fields['team'] =  TeamSerializer(read_only=True)
        return super(TeamMemberSerializer, self).to_representation(instance)
