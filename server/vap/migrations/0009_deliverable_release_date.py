# Generated by Django 2.1.3 on 2019-01-03 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0008_deliverable_pipeline'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliverable',
            name='release_date',
            field=models.DateField(blank=True, default='2000-01-01'),
        ),
    ]
