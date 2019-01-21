import { Component, OnInit, Output, EventEmitter } from '@angular/core';

type FilterType = "all" | "done" | "not done" ;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  filterOptions: FilterType[];
  selectedFilter: FilterType;

  @Output() newFilter: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.filterOptions = [
      "all",
      "done",
      "not done"
    ];
    this.selectedFilter = this.filterOptions[0];
  }
  ngOnInit() {
    this.newFilter.emit(this.selectedFilter) 
  }

  changeFilter() {
    this.newFilter.emit(this.selectedFilter)
  }

}
