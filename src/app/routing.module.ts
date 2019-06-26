import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { TarrifsComponent } from './tarrifs/tarrifs.component';


const routes: Routes = [
  { path: 'about' , component: AboutComponent },
  { path: 'tarrifs', component: TarrifsComponent},
  { path: '', component: ContentComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
