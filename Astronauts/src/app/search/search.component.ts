import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes: any;
n: number=0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }
  findAstronauts(){
    this.http
    .get('http://api.open-notify.org/astros.json')
    .subscribe((response: any) => {
        
        this.heroes = response.people;
        this.n = this.heroes.length;
        console.log(this.heroes);
      });
  }
}
