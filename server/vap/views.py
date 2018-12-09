#from django.shortcuts import render, get_object_or_404
from .models import Team
from .models import TeamMember
from .models import Coach
from .models import Deliverable
from .models import TeamDeliverable
from .models import Milestone
from .models import Question

from .serializers import TeamSerializer
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
