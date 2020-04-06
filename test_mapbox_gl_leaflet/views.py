from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader

# import setting
from .settings import access_token


def index(request):
    template = loader.get_template('test_mapbox_gl_leaflet/main.html')
    context = {
        "title": "mapbox_gl_leaflet test",
        "accessToken": access_token,
    }
    return HttpResponse(template.render(context, request))
