import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'task-management-add-task',
  template: `
  <div id="inputs_wrapper">
  <task-management-input placeholder="Title" [value]="form?.get('title')?.value" (onValueChanged)="titleChanged($event)"></task-management-input>
  <task-management-input placeholder="Description" [value]="form?.get('description')?.value" (onValueChanged)="descriptionChanged($event)"></task-management-input>
</div>
  `,
  styles: [
    `
    #inputs_wrapper {
      display: flex;
      flex-direction: column;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  public titleChanged(value: string): void {
    this.form.controls.title.setValue(value);
  }

  public descriptionChanged(value: string): void {
    this.form.controls.description.setValue(value);
  }

}
