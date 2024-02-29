from django.shortcuts import render

def landing(request):
    # Render the main page template
    return render(request, 'index.html')

def energy_overview(request):
    # Render the energy overview page template
    return render(request, 'energy/index.html')

def food_energy(request):
    # Render the food energy page template
    return render(request, 'energy/detail/food.html')

def paper_energy(request):
    # Render the paper energy page template
    return render(request, 'energy/detail/paper.html')

def biomed_energy(request):
    # Render the biomed energy page template
    return render(request, 'energy/detail/biomed.html')

def melting_energy(request):
    # Render the melting energy page template
    return render(request, 'energy/detail/melting.html')

def industrial_overview(request):
    # Render the industrial overview page template
    return render(request, 'industrial/index.html')

def sales_production_industrial(request): # 매출 생산액
    # Render the sales production page template
    return render(request, 'industrial/detail/revenue.html')

def profit_industrial(request): # 매출 영업이익률 · 당기순이익 
    # Render the profit page template 
    return render(request, 'industrial/detail/profitability.html')

def investment_industrial(request):  # 설비투자액 · 설비투자효율
    # Render the investment page template
    return render(request, 'industrial/detail/investment.html')

def management_investment_industrial(request): # 경영 투자 현황
    # Render the management investment page template
    return render(request, 'industrial/detail/trends.html')

def energy_trends_industrial(request):
    # Render the management investment page template
    return render(request, 'industrial/detail/energy_trends.html')

def optimized_overview(request):
    # Render the optimized overview page template
    return render(request, 'optimized/index.html')

def food_optimized(request):
    # Render the food optimized page template
    return render(request, 'optimized/detail/food.html')

def paper_optimized(request):
    # Render the paper optimized page template
    return render(request, 'optimized/detail/paper.html')

def biomed_optimized(request):
    # Render the biomed optimized page template
    return render(request, 'optimized/detail/biomed.html')

def melting_optimized(request):
    # Render the melting optimized page template
    return render(request, 'optimized/detail/melting.html')

