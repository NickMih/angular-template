import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { TarrifsComponent } from './tarrifs/tarrifs.component';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AboutComponent,
    TarrifsComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
