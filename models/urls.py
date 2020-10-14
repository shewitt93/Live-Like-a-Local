from django.urls import path, include

from .views import current_user, UserList, ChangePasswordView

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('change-password/', ChangePasswordView.as_view()),
    path('password_reset/', include('django_rest_passwordreset.urls')),
  
]