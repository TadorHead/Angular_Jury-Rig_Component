import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';
import { PictureDialogueComponent } from './picture-dialogue/picture-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ConfirmDialogueComponent,
    PictureDialogueComponent
  ],
  entryComponents: [ConfirmDialogueComponent, PictureDialogueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
