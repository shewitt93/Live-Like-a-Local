from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from .views import current_user, UserList, ChangePasswordView, PostViewSet

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('change-password/', ChangePasswordView.as_view()),
    path('password_reset/', include('django_rest_passwordreset.urls')),
    path('posts/', PostViewSet.as_view(), name= 'posts_list'),
    
  
]
# urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)