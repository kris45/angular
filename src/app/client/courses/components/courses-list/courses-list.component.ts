import { Component, OnInit } from '@angular/core';
import { COURSES } from '../../../../mock-data/mock-courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses = COURSES;
  constructor() { }

  ngOnInit() {
  }

}
