from django.shortcuts import render, redirect
from .forms import CheckoutForm

def checkout(request):
    if request.method == 'POST':
        form = CheckoutForm(request.POST)
        if form.is_valid():
            # Process the form data here, e.g., save it to the database or perform payment processing
            return redirect('success_url')  # Redirect to a new URL for confirmation
    else:
        form = CheckoutForm()

    return render(request, 'checkout.html', {'form': form})


from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'products/product_list.html', {'products': products})
