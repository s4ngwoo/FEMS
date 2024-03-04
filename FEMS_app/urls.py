from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),  # 메인 페이지
    path('energy/', views.energy_overview, name='energy_overview'),  # 업종별 에너지 현황 메인 페이지
    path('energy/food/', views.food_energy, name='food_energy'),  # 식품업종 에너지 현황
    path('energy/paper/', views.paper_energy, name='paper_energy'),  # 제지업종 에너지 현황
    path('energy/biomed/', views.biomed_energy, name='biomed_energy'),  # 바이오의약 에너지 현황
    path('energy/melting/', views.melting_energy, name='melting_energy'),  # 용해업종 에너지 현황
    path('industrial/', views.industrial_overview, name='industrial_overview'),  # 업종별 산업동향 메인 페이지
    path('industrial/revenue/', views.sales_production_industrial, name='revenue'),  # 업종별 매출/생산액
    path('industrial/profitability/', views.profit_industrial, name='profitability'),  # 업종별 매출 영업이익률/당기순이익
    path('industrial/investment/', views.investment_industrial, name='investment'),  # 업종별 설비투자액/설비투자효율
    path('industrial/trends/', views.management_investment_industrial, name='trends'),  # 업종별 경영투자현황
    path('industrial/trends/energy', views.energy_trends_industrial, name='energy_trends'),  # 에너지 가격동향 
    path('optimized/', views.optimized_overview, name='optimized_overview'),  # 업종별 최적화 기술 메인 페이지
    path('optimized/food/', views.food_optimized, name='food_optimized'),  # 식품업종 최적화 기술
    path('optimized/paper/', views.paper_optimized, name='paper_optimized'),  # 제지업종 최적화 기술
    path('optimized/biomed/', views.biomed_optimized, name='biomed_optimized'),  # 바이오의약업종 최적화 기술
    path('optimized/melting/', views.melting_optimized, name='melting_optimized'),  # 용해업종 최적화 기술
    path('energy/food/food_map/seoul', views.food_seoul, name='food_seoul'),
    path('energy/paper/paper_map/seoul', views.paper_seoul, name='paper_seoul'),
    path('energy/melting/melting_map/seoul', views.melting_seoul, name='melting_seoul'),
    path('energy/biomed/biomed_map/seoul', views.biomed_seoul, name='biomed_seoul'),
    #path('energy/food/food_map/incheon', views.food_incheon, name='food_incheon'),
    #path('energy/<str:category_name>/<str:category_name>_map/<str:city_name>/', views.city_map, name='city_map'),
    #path('energy/food/food_map/<str:city_name>/', views.food_map, name='food_map'),
    #path('energy/paper/paper_map/<str:city_name>/', views.paper_map, name='paper_map'),
    #path('energy/melting/melting_map/<str:city_name>/', views.melting_map, name='melting_map'),
    #path('energy/biomed/biomed_map/<str:city_name>/', views.biomed_map, name='biomed_map'),
]
 
