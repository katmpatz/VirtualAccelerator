# Generated by Django 2.1.3 on 2019-02-18 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0003_auto_20190218_1558'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='coaches',
        ),
    ]