from __future__ import unicode_literals

from django.db import models
from jsonfield import JSONField

# Create your models here.
class SentinelStore(models.Model):
	foldername = models.CharField(max_length = 200)
	filename = models.CharField(max_length = 200)
	date = models.DateTimeField()
	image = models.ImageField(upload_to='media/')
	ww3 = JSONField()

	def __str__(self):
		return self.filename
