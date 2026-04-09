from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout

def login_user(request):
    username = request.POST.get("username")
    password = request.POST.get("password")
    user = authenticate(username=username, password=password)
    
    if user:
        login(request, user)
        return JsonResponse({"status": "Logged in"})
    return JsonResponse({"status": "Failed"})

def logout_user(request):
    logout(request)
    return JsonResponse({"status": "Logged out"})

def analyze_review(request):
    text = request.GET.get("text", "")

    if "good" in text or "fantastic" in text:
        sentiment = "positive"
    else:
        sentiment = "negative"

    return JsonResponse({"sentiment": sentiment})
def home(request):
    return JsonResponse({"message": "Cars Dealership App Running"})