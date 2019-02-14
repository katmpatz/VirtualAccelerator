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


# class AnswerSerializer(serializers.ModelSerializer):
#     # comments = CommentSerializer(many=True)
#     class Meta:
#         model = Answer
#         fields = '__all__'
#
#     # def create(self, validated_data):
#     #     comments_data = validated_data.pop('comments')
#     #     answer = Answer.objects.create(**validated_data)
#     #     for comments_data in comments_data:
#     #         Comment.objects.create(album=answer, **comment_data)
#     #     return answer
#
# class QuestionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Question
#         fields = '__all__'
#
# class MilestoneSerializer(serializers.ModelSerializer):
#         # questions = QuestionSerializer(many=True)
#         class Meta:
#             model = Milestone
#             fields = '__all__'
#             depth = 1
#
#         # def create(self, validated_data):
#         #     questions_data = validated_data.pop('questions')
#         #     milestone = Milestone.objects.create(**validated_data)
#         #     for questions_data in questions_data:
#         #         Question.objects.create(album=milestone, **question_data)
#         #     return milestone

class DeliverableSerializer(serializers.ModelSerializer):
    # milestones = MilestoneSerializer(many=True)
    class Meta:
        model = Deliverable
        fields = '__all__'
        depth = 1

    # def create(self, validated_data):
    #     milestones_data = validated_data.pop('milestones')
    #     deliverable = Deliverable.objects.create(**validated_data)
    #     for milestones_data in milestones_data:
    #         Milestone.objects.create(album=deliverable, **milestone_data)
    #     return deliverable

class TeamDeliverableSerializer(serializers.ModelSerializer):
    # deliverable = DeliverableSerializer()
    # answers = AnswerSerializer(many=True)

    class Meta:
        model = TeamDeliverable
        fields = '__all__'
        depth = 1

    # def create(self, validated_data):
    #     answers_data = validated_data.pop('answers')
    #     teamdeliverable = TeamDeliverable.objects.create(**validated_data)
    #     for answers_data in answers_data:
    #         Answer.objects.create(album=teamdeliverable, **answer_data)
    #     return teamdeliverable

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'
        depth = 1

class TeamSerializer(serializers.ModelSerializer):
    # teammembers = TeamMemberSerializer(many=True)
    class Meta:
        model = Team
        fields = '__all__'
        depth = 1

    # def create(self, validated_data):
    #     teammembers_data = validated_data.pop('teammembers')
    #     team = Team.objects.create(**validated_data)
    #     for teammembers_data in teammembers_data:
    #         TeamMember.objects.create(album=team, **teammember_data)
    #     return team
