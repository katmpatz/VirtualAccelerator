# Generated by Django 2.1.3 on 2019-02-24 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0013_auto_20190224_2006'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='remark',
        ),
    ]
