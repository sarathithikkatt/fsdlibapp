import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  title:String = "Add an Author"

  constructor() { }

  ngOnInit(): void {
  }

}
