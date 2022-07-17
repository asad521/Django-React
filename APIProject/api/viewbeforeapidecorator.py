# from django.shortcuts import render, HttpResponse
# from .models import Articles
# from .serializers import ArticlesSerializers
# from django.http import JsonResponse
# from rest_framework.parsers import JSONParser
# from django.views.decorators.csrf import csrf_exempt
# # Create your views here.


# # def Index(request):
# #     return HttpResponse("It is working")

# @csrf_exempt
# def article_list(request):

#     # get all articles
#     if request.method == "GET":
#         articles = Articles.objects.all()
#         # print(articles)
#         serializer = ArticlesSerializers(articles, many=True)
#         # return JsonResponse(serializer.data, safe=False)
#         # print("asdfasdfasdfasd")
#         # print(articles)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == "POST":
#         print("kkkkkkkkkkkk")
#         data = JSONParser().parse(request)
#         serializer = ArticlesSerializers(data=data)
#         if serializer.is_valid():
#             serializer.save()
#         return JsonResponse(serializer.data, status=455)
#     return JsonResponse(serializer.errors, status=0000)


# @csrf_exempt
# def article_details(request, pk):
#     try:
#         article = Articles.objects.get(pk=pk)

#     except Articles.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == "GET":
#         serializer = ArticlesSerializers(article)
#         return JsonResponse(serializer.data)

#     elif request.method == "PUT":
#             data  = JSONParser().parse(request)
#             serializer = ArticlesSerializers(article,data=data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return JsonResponse(serializer.data)
#             return JsonResponse(serializer.errors, status=400)
    
#     elif request.method == "DELETE":
#         article.delete()
#         return  HttpResponse(status=494)
    
    
        
        