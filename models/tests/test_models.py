from django.test import TestCase

# Create your tests here.
from ..models import Post


class PostTest(TestCase):
    """ Test module for Puppy model """

    def setUp(self):
        Post.objects.create(
            title='Casper', country='h', region='Bull Dog', blog='Black', username='simon', created_at='')
        

    def test_post(self):
        post_casper = Post.objects.get(title='Casper')
        
        self.assertEqual(str(post_casper), post_casper.title,post_casper.country)