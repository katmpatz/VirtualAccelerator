from rest_framework import serializers
from .models import Team

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'photo', 'pipeline', 'research_stream', 'maturity_level',
        'date_of_entry', 'website', 'coorporate_existance', 'active', 'coaches', 'tagline')
