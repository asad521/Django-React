from unittest.util import _MAX_LENGTH
from rest_framework import serializers
from .models import Articles


class ArticlesSerializers(serializers.ModelSerializer):
        # title = serializers.CharField(max_length=400)
        # description = serializers.CharField(max_length=400)

        # def create(self, validated_data):
        #      return Articles.objects.create(validated_data)
        
        # def update(self, instance, validated_data):
        #     instance.title = validated_data.get('title',instance.title)
        #     instance.description = validated_data.get('description',instance.description)
        
        class Meta: 
            model = Articles
            fields = ['id','title','description'] 