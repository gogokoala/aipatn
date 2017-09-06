import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalInstrumentsComponent } from './legal-instruments/legal-instruments.component';
import { PatentComponent } from './patent/patent.component';
import { SimpleComponent } from './simple/simple.component';
import { ComplexComponent } from './complex/complex.component';
import { PatentResultComponent } from './patent-result/patent-result.component';

const routes: Routes = [
  { path: '', redirectTo: '/patent', pathMatch: 'full' },
  { path: 'patent',  component: PatentComponent },
  { path: 'legalinstr', component: LegalInstrumentsComponent },
  { path: 'pat-simple',  component: SimpleComponent },
  { path: 'pat-complex', component: ComplexComponent },
  { path: 'pat-result',  component: PatentResultComponent },
//  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
