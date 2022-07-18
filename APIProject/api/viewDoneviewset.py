from django.shortcuts import get_object_or_404, render, HttpResponse
from .models import Articles
from .serializers import ArticlesSerializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets

# Create your views here.

class ArticleViewSet(viewsets.ViewSet):
    
    def list(self, request):
        articles =  Articles.objects.all()
        serializer = ArticlesSerializers(articles, many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer = ArticlesSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def retrieve(self, request, pk=None):
        queryset= Articles.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticlesSerializers(article)
        return Response(serializer.data)
    
    def update(self, request, pk=None):
        article= Articles.objects.get(pk=pk)
        
        serializer = ArticlesSerializers(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk=None):
        article= Articles.objects.get(pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    