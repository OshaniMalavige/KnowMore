from django.urls import include, path
from rest_framework import routers

from .rank_view import keywordsearch, keywordsearchforonestudent
from .retrivedata import bookmarked, reteive_user_my_knowledgebase
from .variblesretrieve import badgecount, retreive_citations
from .views import SearchdbViewSet, ShareKnowledgeViewSet

router = routers.DefaultRouter()
router.register('searchdb', SearchdbViewSet, 'searchdb')
router.register('ShareKnowledge', ShareKnowledgeViewSet, 'ShareKnowledge')

urlpatterns = [
    path('', include(router.urls)),
    path('ksearch', keywordsearch, name='ksearch'),
    path('ksearchBookmarking',  keywordsearchforonestudent, name='ksearchbookmarking'),
    path('bookmarks',  bookmarked, name='bookmarks'),
    path('badge_count',  badgecount, name='badge_count'),
    path('myownkmw',  reteive_user_my_knowledgebase, name='myownkmw'),
    path('citation_counts',  retreive_citations, name='citation_counts'),


]