# Create your views here.
from email import message
import stat
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Encuesta
from rest_framework import status

def average_social_media(data):
    cantidad_encuentas = len(list(data))
    face_time=0
    what_time=0
    twit_time=0
    inst_time=0
    tik_time=0

    for encuesta in list(data):
        face_time+= encuesta.time_face
        what_time+= encuesta.time_what
        twit_time+= encuesta.time_twit
        inst_time+= encuesta.time_inst
        tik_time+= encuesta.time_tik

    face_time=face_time/cantidad_encuentas
    what_time=what_time/cantidad_encuentas
    twit_time=twit_time/cantidad_encuentas
    inst_time=inst_time/cantidad_encuentas
    tik_time=tik_time/cantidad_encuentas
    social_network = [
        {"red":"facebook","time":float(face_time)},
        {"red":"whatsapp","time":float(what_time)},
        {"red":"twitter","time":float(twit_time)},
        {"red":"instagram","time":float(inst_time)},
        {"red":"tiktok","time":float(tik_time)}
    ]
    social_network.sort(key=sort_time,reverse=True)
    return social_network


def sort_time(social):
    return social.get('time')



@api_view(["POST"])
def createEncuesta(request):
    data = request.data
    try:
        encuesta = Encuesta.objects.create(
            email=str(data["email"]),
            age=str(data["age"]),
            sex=str(data["sex"]),
            social_media=data["social_media"],
            time_face=float(data["time_face"]),
            time_what=float(data["time_what"]),
            time_twit=float(data["time_twit"]),
            time_inst=float(data["time_inst"]),
            time_tik=float(data["time_tik"])
        )
        message={"details":"Encuesta creada"}
        return Response(message,status=status.HTTP_201_CREATED)
    except:
        message={"details":"error al crear la encuesta"}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def getEstadicas(request):
    data = Encuesta.objects.all()
    cantidad_encuentas = len(list(data))

    data_group_one = Encuesta.objects.all().filter(age="0")
    data_group_two = Encuesta.objects.all().filter(age="1")
    data_group_three = Encuesta.objects.all().filter(age="2")
    data_group_four = Encuesta.objects.all().filter(age="3")
    social_network_general = average_social_media(data)
    social_network_group_one = average_social_media(data_group_one)
    social_network_group_two = average_social_media(data_group_two)
    social_network_group_three = average_social_media(data_group_three)
    social_network_group_four = average_social_media(data_group_four)

    social_network_loved = social_network_general[0]["red"]
    social_network_dislike = social_network_general[4]["red"]
    group_one_social_prefer = social_network_group_one[0]["red"]
    group_two_social_prefer = social_network_group_two[0]["red"]
    group_three_social_prefer = social_network_group_three[0]["red"]
    group_four_social_prefer = social_network_group_four[0]["red"]
    
    response_data = {
        "numberEncuestas":cantidad_encuentas,
        "socialNetworkLove":social_network_loved,
        "socialNetworkDislike":social_network_dislike,
        "groupOneSocialNetworkLoved":group_one_social_prefer,
        "groupTwoSocialNetworkLoved":group_two_social_prefer,
        "groupThreeSocialNetworkLoved":group_three_social_prefer,
        "groupFourSocialNetworkLoved":group_four_social_prefer,
        f'time_average_{social_network_general[0]["red"]}':round(social_network_general[0]["time"],2),
        f'time_average_{social_network_general[1]["red"]}':round(social_network_general[1]["time"],2),
        f'time_average_{social_network_general[2]["red"]}':round(social_network_general[2]["time"],2),
        f'time_average_{social_network_general[3]["red"]}':round(social_network_general[3]["time"],2),
        f'time_average_{social_network_general[4]["red"]}':round(social_network_general[4]["time"],2)


    }
    return Response(response_data,status=status.HTTP_200_OK)


