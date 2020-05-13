import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driver',
  templateUrl: './template-driver.component.html',
  styleUrls: ['./template-driver.component.scss']
})
export class TemplateDriverComponent implements OnInit {


  ageArray = [1, 2, 3, 4, 5, 16, 17, 18, 19];

  data = {
    name: '',
    age: 18
  };

  constructor() {
    // this.ageArray = [];
  }

  ngOnInit(): void {

  }

}
