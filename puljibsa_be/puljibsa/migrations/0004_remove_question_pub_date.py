# Generated by Django 4.0.1 on 2022-02-10 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('puljibsa', '0003_alter_question_question_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='pub_date',
        ),
    ]