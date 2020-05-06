import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from './forms/forms.module';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FormsModule]
})
export class UiComponentsModule {}
