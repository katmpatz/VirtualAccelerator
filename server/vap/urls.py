from django.urls import re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'vap'

urlpatterns = [
    re_path('^teams/?$', views.TeamList.as_view()),
    re_path(r'^teams/(?P<pk>\d+)/?$', views.TeamDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/?$',views.TeamMemberList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teammembers/(?P<pk>\d+)/?$',views.TeamMemberDetail.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/?$',views.TeamDeliverableList.as_view()),
    re_path(r'^teams/(?P<team_id>[0-9]+)/teamdeliverables/(?P<pk>\d+)/?$',views.TeamDeliverableDetail.as_view()),
    re_path('^coaches/?$', views.CoachList.as_view()),
    re_path(r'^coaches/(?P<pk>\d+)/?$', views.CoachDetail.as_view()),
    re_path(r'^deliverables/?$', views.DeliverableList.as_view()),
    re_path(r'^deliverables/(?P<pk>\d+)/?$', views.DeliverableDetail.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
