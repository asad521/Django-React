from django.contrib import admin
from .models import Articles
# Register your models here.


# admin.site.register(Articles)

@admin.register(Articles)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display= ('title', 'description','id')



