# Generated by Django 4.1 on 2022-08-10 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Encuesta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('age', models.CharField(max_length=2)),
                ('sex', models.CharField(max_length=1)),
                ('social_media', models.CharField(max_length=256)),
                ('time_face', models.DecimalField(decimal_places=2, max_digits=5)),
                ('time_what', models.DecimalField(decimal_places=2, max_digits=5)),
                ('time_twit', models.DecimalField(decimal_places=2, max_digits=5)),
                ('time_inst', models.DecimalField(decimal_places=2, max_digits=5)),
                ('time_tik', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
