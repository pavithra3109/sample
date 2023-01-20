import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { FreeRangeComponent } from './free-range/free-range.component';
import { PartnerComponent } from './partner/partner.component';
import { ContactComponent } from './contact /contact.component';

const routes: Routes = [

  { path: 'our-story', component: OurStoryComponent },
  { path: 'free-range', component: FreeRangeComponent },
  { path: 'partner', component:  PartnerComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
