# Generated by Django 2.1.3 on 2019-02-24 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0011_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.ImageField(upload_to=''),
        ),
    ]
