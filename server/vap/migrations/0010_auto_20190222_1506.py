# Generated by Django 2.1.3 on 2019-02-22 13:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0009_auto_20190220_2350'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='teamdeliverable',
            unique_together={('deliverable', 'team')},
        ),
    ]
