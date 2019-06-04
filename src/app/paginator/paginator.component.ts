import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
 @Input() numberofpages;
 pages : number[]
 @Output() pagenumberclick = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    this.pages= new Array(this.numberofpages);
  }
  pagenumberclicked(pagenumber){
    this.pagenumberclick.emit(pagenumber);
    console.log(pagenumber);
  }
}
