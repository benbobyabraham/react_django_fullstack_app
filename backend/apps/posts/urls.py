from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostList.as_view(), name='post_list'),
    path('add/', views.PostAdd.as_view(), name='post_add'),
    path('delete/<int:pk>/', views.PostDelete.as_view(), name='post_delete'),
]
