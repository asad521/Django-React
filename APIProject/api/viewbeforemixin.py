from django.shortcuts import render, HttpResponse
from .models import Articles
from .serializers import ArticlesSerializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ArticleList(APIView):
    
    def get(self,request):
        articles = Articles.objects.all()
        serializer = ArticlesSerializers(articles, many=True)
        return Response(serializer.data)
        
        
    
    def post(self,request):
        serializer =ArticlesSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    

class ArticleDetails(APIView):
    def get_object(self,id):
        try:
            print("MMMMMMMMMMMMMMMMMMMMMMMMM")
            return  Articles.objects.filter(id=id)
        except Articles.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        
    def get(self, request, id, format=None):
        print("4444444444444")
        article = self.get_object(id)
        serializer = ArticlesSerializers(article, many=True)
        return Response(serializer.data)

    def put(self, request ,id, format=None):
        # article = self.get_object.get(id=id)
        # get_object method was giving error that bcz filter return query set
        # queryset is iterable ,& not instance. hence serialze.save() not work.
        # serializer need only one object instance not query set.
        article=Articles.objects.get(id=id)
        serializer  = ArticlesSerializers(article,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)