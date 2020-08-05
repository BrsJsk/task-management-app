import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'task-management-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input() disabled: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

}
