# Generated by Django 2.1.3 on 2019-02-24 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0017_auto_20190224_2207'),
    ]

    operations = [
        migrations.DeleteModel(
            name='File',
        ),
        migrations.RemoveField(
            model_name='teamdeliverable',
            name='delivery_day',
        ),
        migrations.AlterField(
            model_name='teamdeliverable',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='teamdeliverables/'),
        ),
    ]
