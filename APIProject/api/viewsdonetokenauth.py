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
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ArticleViewSet(viewsets.ModelViewSet):
    queryset =  Articles.objects.all()
    serializer_class =  ArticlesSerializers
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    