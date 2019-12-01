from django.contrib import admin
from django.urls import path
from . import views

from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.home,name='home'),
    path('register',views.register,name='register'),
    path('content',views.content,name='content'),
    path('upload',views.upload,name='upload'),
    path('store',views.store,name='store'),
    # path('edit',views.edit,name='edit'),

    path('play/<int:pk>',views.play,name='play')
    # path
]


if settings.DEBUG: 
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 