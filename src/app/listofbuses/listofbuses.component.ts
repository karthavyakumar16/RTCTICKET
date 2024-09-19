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
      { number: '101', route: 'hyderabad - vijawada', timing: '9:00 AM - 01:00 PM' },
      { number: '102', route: 'hyderabad - vijawada', timing: '10:00 AM - 02:00 PM' },
      { number: '103', route: 'hyderabad - vijawada', timing: '11:00 AM - 03:00 PM' },
      { number: '104', route: 'hyderabad - vijawada', timing: '01:00 pm - 06:00 PM' }
    ];
  
    filteredBuses: any[] = [];
  
    onSearch() {
      this.searchPerformed = true;
      this.router.navigate(['/listofbuses'])
      const searchLower = this.searchTerm.toLowerCase();
      
      this.filteredBuses = this.busData.filter(bus =>
        bus.number.toLowerCase().includes(searchLower) ||
        bus.route.toLowerCase().includes(searchLower)
       
      );
    }
  }

