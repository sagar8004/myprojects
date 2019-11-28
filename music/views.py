from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import *
from django.contrib import messages
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate
from .forms import *
from django.conf import settings

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


def home(request):
    return render(request,'home.html')

def register(request):
    if request.method == 'POST':
        username=request.POST['username']
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        email=request.POST['email']
        password=request.POST['password']

        if User.objects.filter(username=username).exists():
            messages.info(request,'Already Taken')
            return redirect('register')
        else:
            customer=User(username=username,firstname=firstname,lastname=lastname,email=email,password=password)
            customer.save()
            return redirect('/')

    return render(request,'home1.html')

def content(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']

        cust = authenticate(request,username=username,password=password)
        data = Video.objects.all()


        if cust:
            return render(request,'home2.html', { 'data': data })
        else:
            messages.info(request,'invalid user')
            return redirect('/')
    else:    
        return render(request,'home.html')

def upload(request):
    return render(request,'upload.html')

def store(request):
    if request.method == 'POST':
        form = VideoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            data=Video.objects.all()
            return render(request, 'home2.html', {'data':data})
    else:
        form = VideoForm()
    return render(request, 'video.html', {'form': form})

def edit(request, id):
    data=Video.objects.get(id=id)
    form=VideoForm(request.POST, instance=data)
    if form.is_valid():
        form.save()
        return redirect('home')
    return render(request,'video.html', {'data':data})