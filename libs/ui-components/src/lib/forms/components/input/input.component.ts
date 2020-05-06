import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'task-management-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
