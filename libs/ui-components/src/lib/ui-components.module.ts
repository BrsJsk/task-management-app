import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "./forms/forms.module";
import {NotificationsModule} from "./notifications/notifications.module";

@NgModule({
    imports: [CommonModule, FormsModule, NotificationsModule],
    exports: [FormsModule, NotificationsModule]
})
export class UiComponentsModule {
}
