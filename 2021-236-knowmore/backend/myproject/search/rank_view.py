import ast

from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core import serializers
from search.models import Searchdb


@api_view(['GET'])
def keywordsearch(request, keyword=None, usid=None):
    keyword = request.GET.get('keyword')
    stuid = request.GET.get('usid')

    queryset = Searchdb.objects.filter(rank_label='High')

    print('Inside Search')

    if keyword is None:
        return queryset

    output = []

    for i in queryset:
        print(i)
        print(i.keywordS)
        det = i.keywordS

        print('det printing')

        print(det)

        if det == None:
            break

        k_list = ast.literal_eval(det)
        print(k_list[0])

        print('\n')

        if keyword is not None:
            for j in k_list:
                if j == keyword:
                    print('ddd')
                    print(i.userid)
                    print(stuid)
                    if i.userid != stuid:
                        print('xx')
                        output.append(i)

    # return output
    data = serializers.serialize('json', output)
    # return HttpResponse(data, content_type="application/json")
    return JsonResponse({'paragraphobjects': data})

    # queryset = ModelOutput.objects.filter(sessionid=sessionid)
    # data = serializers.serialize('json', queryset1)
    # return HttpResponse(data, content_type="application/json")
    # return JsonResponse({'mostactive': data})


##Own Booking -------- Consider only Keywords
@api_view(['GET'])
def keywordsearchforonestudent(request, keyword=None, userid=None):
    keyword = request.GET.get('keyword')

    stid = request.GET.get('userid')

    queryset = Searchdb.objects.filter(userid=stid)

    print('Inside Search')

    if keyword is None:
        return queryset

    output = []

    for i in queryset:
        print(i)
        print(i.keywordS)
        det = i.keywordS

        print('det printing')

        print(det)

        if det == None:
            break

        k_list = ast.literal_eval(det)
        print(k_list[0])

        print('\n')

        if keyword is not None:
            for j in k_list:
                if j == keyword:
                    print('ddd')
                    output.append(i)

    # return output
    data = serializers.serialize('json', output)
    # return HttpResponse(data, content_type="application/json")
    return JsonResponse({'paragraphobjects': data})






