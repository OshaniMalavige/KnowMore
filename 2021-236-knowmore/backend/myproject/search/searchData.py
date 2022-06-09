from django.http import JsonResponse
from rest_framework.decorators import api_view

from .models import Searchdb


@api_view(['POST'])
def search_content(request):
    """ search function """
    query_name = request.POSt.get('name', None)
    results = Searchdb.objects.filter(name__contains=query_name)
    return JsonResponse({'msg': results})

