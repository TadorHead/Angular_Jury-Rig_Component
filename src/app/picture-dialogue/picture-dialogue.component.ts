import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-picture-dialogue',
  templateUrl: './picture-dialogue.component.html',
  styleUrls: ['./picture-dialogue.component.sass']
})
export class PictureDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
