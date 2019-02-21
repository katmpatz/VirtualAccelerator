from django.urls import re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'vap'

urlpatterns = [
    re_path('^users/?$', views.UserList.as_view()),
    re_path(r'^users/(?P<username>\w+)/?$', views.UserDetail.as_view()),
    re_path('^teams/?$', views.TeamList.as_view()),
    re_path(r'^teams/(?P<pk>\d+)/?$', views.TeamDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/?$',views.TeamMemberList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/(?P<pk>\d+)/?$',views.TeamMemberDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/?$',views.TeamDeliverableList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/(?P<pk>\d+)/?$',views.TeamDeliverableDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/(?P<teamdeliverable_id>[0-9]+)/comments/?$',views.CommentList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/(?P<teamdeliverable_id>[0-9]+)/comments/(?P<pk>\d+)/?$',views.CommentDetail.as_view()),
    re_path('^coaches/?$', views.CoachList.as_view()),
    re_path(r'^coaches/(?P<pk>\d+)/?$', views.CoachDetail.as_view()),
    re_path(r'^deliverables/?$', views.DeliverableList.as_view()),
    re_path(r'^deliverables/(?P<pk>\d+)/?$', views.DeliverableDetail.as_view()),
    re_path(r'^teammembers/?$',views.TeamMemberList.as_view()),
    re_path(r'^teammembers/(?P<pk>\d+)/?$',views.TeamMemberDetail.as_view()),
]+ static("/media/", document_root=settings.MEDIA_ROOT)
