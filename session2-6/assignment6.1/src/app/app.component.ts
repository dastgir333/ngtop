import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title:string;
  name: string;

  ngOnInit(){
    this.name = 'Welcome';
    this.title ='Sachin';
  }
}
