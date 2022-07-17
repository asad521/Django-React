from django.shortcuts import render, HttpResponse
from .models import Articles
from .serializers import ArticlesSerializers
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


# def Index(request):
#     return HttpResponse("It is working")

@api_view(['GET','POST'])
def article_list(request):

    # get all articles
    if request.method == "GET":
        articles = Articles.objects.all()
        # print(articles)
        serializer = ArticlesSerializers(articles, many=True)
        # return JsonResponse(serializer.data, safe=False)
        # print("asdfasdfasdfasd")
        # print(articles)
        return Response(serializer.data)

    elif request.method == "POST":
        print("kkkkkkkkkkkk")
        serializer = ArticlesSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def article_details(request, pk):
    try:
        article = Articles.objects.get(pk=pk)

    except Articles.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ArticlesSerializers(article)
        return Response(serializer.data)

    elif request.method == "PUT":
            serializer = ArticlesSerializers(article,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":
        article.delete()
        return  Response(status=status.HTTP_204_NO_CONTENT)
    
    
        
        