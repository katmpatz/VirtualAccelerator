# Generated by Django 2.1.3 on 2019-02-14 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0025_auto_20190214_1754'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliverable',
            name='icon',
            field=models.CharField(blank=True, default='group', max_length=100),
        ),
    ]
