from django.db import models

from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail  


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.username,
        'email': reset_password_token.user.email,
      
    }

    email_plaintext_message = " {} Hello {}, please follow this link to reset your password localhost:3000/token/{}".format(reverse('password_reset:reset-password-request'),reset_password_token.user, reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Live like a local"),
        # message:
        email_plaintext_message,
        # from:
        "shewitt@live.co.uk",
        # to:
        [reset_password_token.user.email]
    )
