import {Component} from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent {
  constructor(private matDialogRef: MatDialogRef<HelpComponent>) {

  }
  public close() {
    this.matDialogRef.close();
  }
}
