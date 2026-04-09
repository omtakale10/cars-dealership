from django.contrib import admin
from django.urls import path
from djangoapp import views   # ✅ FIX HERE

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', views.login_user),
    path('logout', views.logout_user),
    path('analyze', views.analyze_review),
]