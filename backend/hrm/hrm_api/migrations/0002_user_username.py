# Generated by Django 3.0.7 on 2020-07-06 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hrm_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]