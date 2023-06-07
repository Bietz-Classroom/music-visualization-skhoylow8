import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent},
  { path: 'playlists/:id', component: PlaylistPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
