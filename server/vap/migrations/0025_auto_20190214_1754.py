# Generated by Django 2.1.3 on 2019-02-14 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0024_auto_20190213_1736'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teamdeliverable',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]