
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core import serializers

from knowledgebase_add.models import KnowledgeMain
from search.models import Searchdb

# bookmarked content
@api_view(['GET'])
def bookmarked(request, userid=None):
    stid = request.GET.get('userid')

    queryset = Searchdb.objects.filter(userid=stid)

    print('Inside Bookmark')

    if queryset is not None:
        data = serializers.serialize('json', queryset)

        return JsonResponse({'bookmark': data})


# my knowledgebases
def reteive_user_my_knowledgebase(request, student_id=None):
    stid2 = request.GET.get('student_id')

    queryset = KnowledgeMain.objects.filter(student_id=stid2)

    print('Inside My Knowledgebase')

    if queryset is not None:
        data = serializers.serialize('json', queryset)

        return JsonResponse({'contents': data})