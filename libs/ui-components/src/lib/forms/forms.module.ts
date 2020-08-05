import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './components/input/input.component';
import {MatInputModule} from '@angular/material/input';
import {ButtonComponent} from './components/button/button.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [InputComponent, ButtonComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [InputComponent, ButtonComponent]
})
export class FormsModule {
}
