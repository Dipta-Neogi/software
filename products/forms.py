from django import forms
from .models import Customer, PaymentInformation



class CheckoutForm(forms.Form):
    name_and_surname = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'placeholder': 'John Doe'}))
    phone_number = forms.CharField(max_length=15, widget=forms.TextInput(attrs={'placeholder': '+1 234 5678'}))
    address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Elton St 21 22-145'}))
    card_number = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Card Number'}))
    expiry_month = forms.CharField(max_length=2, widget=forms.TextInput(attrs={'placeholder': 'MM'}))
    expiry_year = forms.CharField(max_length=4, widget=forms.TextInput(attrs={'placeholder': 'YYYY'}))
    cvv = forms.CharField(max_length=3, widget=forms.TextInput(attrs={'placeholder': 'CVV'}))

