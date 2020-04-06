from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
#from django.templatetags.static import static

# import setting
from .settings import access_token


def index(request):
    #url_index_js = static('index.js')
    #url_index_css = static('index.css')
    template = loader.get_template('test_mapbox/main.html')
    context = {
        "title": "test1 mapbox",
        "accessToken": access_token,
        #"url_index_css": url_index_css,
        #"url_index_js": url_index_js,
    }
    return HttpResponse(template.render(context, request))
