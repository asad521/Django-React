from django.shortcuts import render, HttpResponse
from .models import Articles
from .serializers import ArticlesSerializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics

# Create your views here.

class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, 
                  mixins.CreateModelMixin):
    
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializers
    
    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)
    
class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializers   
    
    lookup_field='id'
    
    def get(self, request, id):
        return self.retrieve(request,id=id)
    
    def put(self, request, id):
        return self.update(request,id=id)
    
    def delete(self, request, id):
        return self.destroy(request, id=id) 

