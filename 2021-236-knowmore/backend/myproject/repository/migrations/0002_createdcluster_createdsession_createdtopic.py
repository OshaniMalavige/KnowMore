# Generated by Django 3.2.7 on 2021-10-04 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('repository', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CreatedCluster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clustername', models.CharField(blank=True, max_length=250, null=True)),
                ('schoolid', models.IntegerField(blank=True, null=True)),
                ('allids', models.CharField(blank=True, max_length=250, null=True)),
                ('teachersid', models.CharField(blank=True, max_length=250, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Createdtopic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topicname', models.CharField(blank=True, max_length=250, null=True)),
                ('schoolid', models.IntegerField(blank=True, null=True)),
                ('clusterid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='repository.createdcluster')),
            ],
        ),
        migrations.CreateModel(
            name='CreatedSession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('schoolid', models.IntegerField(blank=True, null=True)),
                ('sessionname', models.CharField(blank=True, max_length=250, null=True)),
                ('clusterid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='repository.createdcluster')),
                ('topicid', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='repository.createdtopic')),
            ],
        ),
    ]