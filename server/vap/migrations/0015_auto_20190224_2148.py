# Generated by Django 2.1.3 on 2019-02-24 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vap', '0014_remove_file_remark'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teamdeliverable',
            name='delivery_day',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
