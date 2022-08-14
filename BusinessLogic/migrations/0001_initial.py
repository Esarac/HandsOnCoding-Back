# Generated by Django 4.1 on 2022-08-14 07:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('programingLanguage', models.TextField(choices=[('PY', 'Python'), ('CPP', 'C++'), ('JAVA', 'Java'), ('JS', 'JavaScript'), ('CS', 'C#')])),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BusinessLogic.course')),
            ],
        ),
    ]
