import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties:Array<any>=[
  {
    "Id":1,
    "Name":"Birla house",
    "Type":"House",
    "Price":1200
  },
  {
    "Id":2,
    "Name":"Erose Villa",
    "Type":"House",
    "Price":14000
  },
  {
    "Id":3,
    "Name":"White House",
    "Type":"House",
    "Price":120000
  }
]
  constructor() { }

  ngOnInit() {
  }

}
