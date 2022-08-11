from django.urls import path 
from .views import getEstadicas,createEncuesta


urlpatterns=[

    path("",createEncuesta,name="estadisticas_creation"),
    path("estadisticas/",getEstadicas,name="estadisticas"),

]