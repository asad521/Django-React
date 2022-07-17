from django.db import models

# Create your models here.

class Articles(models.Model):
    title = models.CharField(max_length=400)
    description=models.TextField()
    
    def __str__(self):
        return self.title

 