import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalInstrumentsComponent } from './legal-instruments/legal-instruments.component';
import { PatentComponent } from './patent/patent.component';

const routes: Routes = [
  { path: '', redirectTo: '/patent', pathMatch: 'full' },
  { path: 'patent',  component: PatentComponent },
  { path: 'legalinstr', component: LegalInstrumentsComponent },
//  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
