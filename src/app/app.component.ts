import { Component } from '@angular/core';
import { CovidService } from './service/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidTracker';
  countries: any = [];
  country: any;
  data: any;
  deaths: any;
  cases: any;
  recovered: any;

  currentDate:any;


  constructor(private service: CovidService) { }

  ngOnInit() {
    this.service.getCountry().subscribe(data => {
      console.log(data);
      this.countries = data;
      this.currentDate=new Date;
    });
  }

  getCountry(c: any) {
    console.log(c);
    this.country = c;
  }

  getDetails() {
    this.service.getData(this.country).subscribe(data => {

      this.data = data;
      this.cases = this.data.cases;
      this.recovered = this.data.recovered;
      this.deaths = this.data.deaths;
    })
  }
}
