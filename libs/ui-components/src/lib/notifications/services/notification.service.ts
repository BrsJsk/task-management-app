import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root"
})
export class NotificationService {
    constructor(private _snackBar: MatSnackBar) {
    }

    public show(value: string): void {
        this._snackBar.open(value, "Close", {duration: 10000});
    }
}
