import { Component, OnInit } from '@angular/core';

//  Importing Libraries
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import { PictureDialogueComponent } from '../picture-dialogue/picture-dialogue.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  // Dialogue Variables
  confirm_Delete: boolean = false;
  image_path: string = "../../assets/images/14_57_01_2_file.jpg"

  constructor(private dialogue: MatDialog) {}

  ngOnInit() {}

  /**
   * This method confirms whether user wants to delete the item or not.
   */
  onDelete() {
    const dialogue_Box = this.dialogue.open(ConfirmDialogueComponent, {
      width: '500px'
    });

    dialogue_Box.afterClosed().subscribe(data => {
      this.confirm_Delete = data;
    });
  }

  /**
   * This method opens a dialogue box with the image in a larger view.
   */
  onPopOut() {
    const dialogue_Pic = this.dialogue.open(PictureDialogueComponent, {
      width: 'fit-content',
      height: 'auto',
      data: { path: this.image_path }
    });
  }

}
