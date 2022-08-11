from django.db import models

# Create your models here.
class Encuesta(models.Model):
    email = models.EmailField(max_length=254)
    age = models.CharField(max_length=2)
    sex = models.CharField(max_length=1)
    social_media = models.CharField(max_length=256)
    time_face = models.DecimalField(max_digits=5,decimal_places=2)
    time_what = models.DecimalField(max_digits=5,decimal_places=2)
    time_twit = models.DecimalField(max_digits=5,decimal_places=2)
    time_inst = models.DecimalField(max_digits=5,decimal_places=2)
    time_tik = models.DecimalField(max_digits=5,decimal_places=2)

    def __str__(self):
        return str(self.email)