import { Component } from '@angular/core';
import { Searchbus } from '../model/Searchbus';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  search:Searchbus={
    source: '',
    destination: '',
    startdate: new Date(),
    enddate: new Date()


  }

  constructor(private searchservice:SearchService){
    
  }
  searchBus(){
    console.log('searching...' + JSON.stringify(this.search))

    this.searchservice.searchBus(this.search).subscribe(
      data=>
        console.log("Search Bus" +JSON.stringify(this.search))
    )
  }
}
