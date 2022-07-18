from django.urls import path , include
# from .views import  ArticleDetails, ArticleList
from .views import  ArticleViewSet ,UserViewSet
from rest_framework.routers import DefaultRouter





router = DefaultRouter()
router.register('articles',ArticleViewSet, basename='articles')
router.register('users',UserViewSet)

urlpatterns = [
    # path('', Index)
    # path('articles/', article_list),
    # path('articles/<int:pk>/',article_details)
    # path('articles/',ArticleList.as_view()),
    # path('articles/<int:id>/',ArticleDetails.as_view())
    path('api/', include(router.urls))
]
