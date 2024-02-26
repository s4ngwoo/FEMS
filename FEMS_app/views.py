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

def sales_production_industrial(request):
    # Render the sales production page template
    return render(request, 'industrial/detail/sales_production.html')

def profit_industrial(request):
    # Render the profit page template
    return render(request, 'industrial/detail/profit.html')

def investment_industrial(request):
    # Render the investment page template
    return render(request, 'industrial/detail/investment.html')

def management_investment_industrial(request):
    # Render the management investment page template
    return render(request, 'industrial/detail/management_investment.html')

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

