import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelfComponent } from './components/shelf/shelf.component';
import { WishComponent } from './components/wish/wish.component';

const routes: Routes = [
    { path: 'shelf', component: ShelfComponent},
    { path: 'wish', component: WishComponent},
    { path: '', redirectTo: '/shelf', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
