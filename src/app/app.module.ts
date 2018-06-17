import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './Components/app.component';
import { ImageCollectionComponent } from './Components/image-collection/image-collection.component';
import { ImageItemComponent } from './Components/image-item/image-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCollectionComponent,
    ImageItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
