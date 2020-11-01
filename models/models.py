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



class Post(models.Model):
    title=models.CharField(max_length=255)
    text=models.CharField(max_length=2000)
    description=models.CharField(max_length=255)
    imgSrc=models.CharField(max_length=255)
    username=models.CharField(max_length=200, default="DEFAULT VALUE")
    likes=models.IntegerField()
    tags=models.SlugField(max_length=50)
    created_at=models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return f'{self.title},{self.text},{self.description},{self.imgSrc},{self.username},{self.likes},{self.tags},{self.created_at}'