import { Component, OnInit } from '@angular/core';

//  Importing Libraries
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  confirm_Delete: boolean;

  constructor(private dialogue: MatDialog) { }

  ngOnInit() {
  }

  onDelete() {
    const dialogue_Box = this.dialogue.open(ConfirmDialogueComponent, {
      width: '500px'
    });

    dialogue_Box.afterClosed().subscribe(data => {
      this.confirm_Delete = data;
      // TEST
      console.log(`Data: ${this.confirm_Delete}`);
    });
  }

}
