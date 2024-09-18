import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrl: './seatselection.component.css'
})
export class SeatselectionComponent{
    private selectedSeats: Set<string> = new Set();
    private maxSeats: number = 4;  // Maximum number of seats that can be selected

    constructor(private router:Router) {
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', this.handleSeatSelection.bind(this));
        });
    }

    private handleSeatSelection(event: Event): void {
        const checkbox = event.target as HTMLInputElement;
        const seatValue = checkbox.value;

        if (checkbox.checked) {
            if (this.selectedSeats.size >= this.maxSeats) {
                checkbox.checked = false;
                alert(`You can only select up to ${this.maxSeats} seats.`);
            } else {
                this.selectedSeats.add(seatValue);
            }
        } else {
            this.selectedSeats.delete(seatValue);
        }

        this.updateUI();
    }

    private updateUI(): void {
        const submitButton = document.querySelector('input[type="submit"]') as HTMLInputElement;
        if (submitButton) {
            submitButton.disabled = this.selectedSeats.size === 0;
        }

        // You could add more UI updates here, like displaying the number of selected seats
    }

    private handleSubmit(event: Event): void {
        event.preventDefault();
        
        if (this.selectedSeats.size === 0) {
            alert('Please select at least one seat before booking.');
            return;
        }

        // Here you would typically send the selected seats to a server
        console.log('Booking seats:', Array.from(this.selectedSeats));
        alert(`Booking confirmed for seats: ${Array.from(this.selectedSeats).join(', ')}`);

        // Reset selection after booking
        this.resetSelection();
    }

    private resetSelection(): void {
        this.selectedSeats.clear();
        this.router.navigate(['/paymentdetails'])
        const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        this.updateUI();
    }
}
