# Generated by Django 2.1.3 on 2019-02-19 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0005_auto_20190218_2241'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teamdeliverable',
            name='file',
            field=models.FileField(blank=True, upload_to='teamdeliverables/'),
        ),
    ]