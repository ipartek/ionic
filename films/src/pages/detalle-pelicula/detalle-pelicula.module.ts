import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePeliculaPage } from './detalle-pelicula';

@NgModule({
  declarations: [
    DetallePeliculaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePeliculaPage),
  ],
  exports: [
    DetallePeliculaPage
  ]
})
export class DetallePeliculaPageModule {}
