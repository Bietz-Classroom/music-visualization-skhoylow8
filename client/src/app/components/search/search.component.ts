import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  loading:boolean = false;
  searchString:string;
  searchCategory:string = 'playlist';
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data) => {
      this.resources = data;
      this.loading = false;
    });
  }

  textChanged() {
    this.searchString = this.searchString;
  }

}
