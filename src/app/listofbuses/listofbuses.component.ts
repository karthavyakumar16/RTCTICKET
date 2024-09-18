import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofbuses',
  templateUrl: './listofbuses.component.html',
  styleUrl: './listofbuses.component.css'
})
export class ListofbusesComponent {

    searchTerm: string = '';
    searchPerformed: boolean = false;
  constructor(private router:Router){

  }
    // Sample data for bus details
    busData = [
      { number: '101', route: 'hyderabad - vijawada', timing: '9:00 AM - 6:00 PM' },
      { number: '102', route: 'City Center - Airport', timing: '10:00 AM - 8:00 PM' },
      { number: '103', route: 'Suburbs - University', timing: '7:00 AM - 5:00 PM' },
      { number: '104', route: 'Suburbs - Airport', timing: '6:00 AM - 4:00 PM' }
    ];
  
    filteredBuses: any[] = [];
  
    onSearch() {
      this.searchPerformed = true;
      this.router.navigate(['/seatselection'])
      const searchLower = this.searchTerm.toLowerCase();
      
      this.filteredBuses = this.busData.filter(bus =>
        bus.number.toLowerCase().includes(searchLower) ||
        bus.route.toLowerCase().includes(searchLower)
       
      );
    }
  }

