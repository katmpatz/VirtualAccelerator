# Generated by Django 2.1.3 on 2019-01-03 20:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0011_auto_20190103_2108'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='photo',
        ),
    ]
