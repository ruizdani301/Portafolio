from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path("", index.as_view()),
    path("index/", index.as_view()),

]
