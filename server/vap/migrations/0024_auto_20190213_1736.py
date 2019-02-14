# Generated by Django 2.1.3 on 2019-02-13 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0023_teamdeliverable_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deliverable',
            name='template',
            field=models.FileField(blank=True, upload_to='deliverables/'),
        ),
        migrations.AlterField(
            model_name='team',
            name='photo',
            field=models.ImageField(blank=True, upload_to='img/'),
        ),
    ]