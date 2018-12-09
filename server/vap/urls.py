from django.urls import re_path
from . import views


app_name = 'vap'

urlpatterns = [
    re_path('^teams/?$', views.TeamList.as_view()),
    re_path(r'^teams/(?P<pk>\d+)/?$', views.TeamDetail.as_view()),
    # path('', views.index, name='index'),
    # path('teams/<int:team_id>/', views.team, name='team'),
    # path('team/<int:team_id>/teamMember/<int:teamMember_id>', views.teamMember, name='teamMember'),
    # path('deliverables/<int:deliverable_id>/', views.deliverable, name='deliverable'),
    # path('teams/<int:team_id>/teamdeliverables/teamDeliverable_id', views.teamDeliverable, name='teamDeliverable'),
    # path('coach/<int:coach_id>/', views.coach, name='coach'),
]
