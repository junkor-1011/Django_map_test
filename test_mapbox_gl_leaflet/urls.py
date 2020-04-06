from django.urls import path
from . import views

app_name = 'test_mapbox_gl_leaflet' #django2.0から必要になったnamespace定義
urlpatterns = [
    path('', views.index, name='index'),
]
