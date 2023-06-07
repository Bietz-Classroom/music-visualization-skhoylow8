import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VegaVizComponent } from './components/vega-viz/vega-viz.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackListComponent,
    HomePageComponent,
    PlaylistPageComponent,
    VegaVizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
