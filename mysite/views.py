from django.shortcuts import render

def home(request):
    return render(request, 'index.html')  # Ensure 'home.html' is a template you have configured

