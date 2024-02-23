from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),  # 메인 페이지
    path('energy/', views.energy_overview, name='energy_overview'),  # 업종별 에너지 현황 메인 페이지
    path('energy/food/', views.food_energy, name='food_energy'),  # 식품업종 에너지 현황
    path('energy/paper/', views.paper_energy, name='paper_energy'),  # 제지업종 에너지 현황
    path('energy/pharma/', views.pharma_energy, name='pharma_energy'),  # 바이오의약 에너지 현황
    path('energy/solvent/', views.solvent_energy, name='solvent_energy'),  # 용해업종 에너지 현황
    path('trends/', views.trends_overview, name='trends_overview'),  # 업종별 산업동향 메인 페이지
    path('trends/sales-production/', views.sales_production, name='sales_production'),  # 업종별 매출/생산액
    path('trends/profit/', views.profit, name='profit'),  # 업종별 매출 영업이익률/당기순이익
    path('trends/investment/', views.investment, name='investment'),  # 업종별 설비투자액/설비투자효율
    path('trends/management-investment/', views.management_investment, name='management_investment'),  # 업종별 경영투자현황
    path('technology/', views.technology_overview, name='technology_overview'),  # 업종별 최적화 기술 메인 페이지
    path('technology/food/', views.food_technology, name='food_technology'),  # 식품업종 최적화 기술
    path('technology/paper/', views.paper_technology, name='paper_technology'),  # 제지업종 최적화 기술
    path('technology/pharma/', views.pharma_technology, name='pharma_technology'),  # 바이오의약업종 최적화 기술
    path('technology/solvent/', views.solvent_technology, name='solvent_technology'),  # 용해업종 최적화 기술
]
 
