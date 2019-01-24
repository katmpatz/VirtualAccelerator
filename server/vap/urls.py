from django.urls import re_path
from . import views


app_name = 'vap'

urlpatterns = [
    re_path('^teams/?$', views.TeamList.as_view()),
    re_path(r'^teams/(?P<pk>\d+)/?$', views.TeamDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/?$',views.TeamMemberList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/(?P<pk>\d+)/?$',views.TeamMemberDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/?$',views.TeamMemberDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/(?P<pk>\d+)/?$',views.TeamDeliverableDetail.as_view()),
    re_path('^coaches/?$', views.CoachList.as_view()),
    re_path(r'^coaches/(?P<pk>\d+)/?$', views.CoachDetail.as_view()),
    # re_path('^teammembers/?$', views.TeamMemberList.as_view()),
    # re_path(r'^teammembers/(?P<pk>\d+)/?$', views.TeamMemberDetail.as_view()),
    re_path(r'^deliverables/?$', views.DeliverableList.as_view()),
    re_path(r'^deliverables/(?P<pk>\d+)/?$', views.DeliverableDetail.as_view()),
    # path('', views.index, name='index'),
    # path('teams/<int:team_id>/', views.team, name='team'),
    # path('team/<int:team_id>/teamMember/<int:teamMember_id>', views.teamMember, name='teamMember'),
    # path('deliverables/<int:deliverable_id>/', views.deliverable, name='deliverable'),
    # path('teams/<int:team_id>/teamdeliverables/teamDeliverable_id', views.teamDeliverable, name='teamDeliverable'),
    # path('coach/<int:coach_id>/', views.coach, name='coach'),
]
