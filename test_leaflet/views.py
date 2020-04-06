from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

# import setting
from .settings import access_token


def index(request):
    template = loader.get_template('test_leaflet/main.html')
    context = {
        "title": "test leaflet",
        "accessToken": access_token,
    }
    return HttpResponse(template.render(context, request))
