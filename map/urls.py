from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.map_view, name='map'),
    url(r'^json', views.json_view, name='json'),
]