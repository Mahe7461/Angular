# Generated by Django 2.2.5 on 2021-01-04 19:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20210104_2055'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='rates2',
        ),
        migrations.DeleteModel(
            name='PostsRates2',
        ),
    ]
