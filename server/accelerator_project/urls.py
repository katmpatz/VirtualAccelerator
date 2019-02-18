from django.contrib import admin
from django.urls import include, path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/', include('vap.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path(r'api/token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh'),
]
