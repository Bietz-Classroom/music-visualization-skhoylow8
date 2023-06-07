import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistData } from 'src/app/data/playlist-data';
import { TrackData } from 'src/app/data/track-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {
    id: string = '';
    playlist: PlaylistData | null = null;
    tracks: TrackData[];

    constructor(private spotifyService:SpotifyService, private route: ActivatedRoute) { }

    async ngOnInit() {
        this.getActivatedRoute();
        await this.getPlaylist();
        // get every tracks feature data 
        console.log(this.playlist)
        this.tracks = this.playlist.tracks.map(item => new TrackData(item['track']));
        // this.playlist.tracks.forEach(item => console.log(item['track']))
    }

    getActivatedRoute() {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    async getPlaylist() {
        this.playlist = await this.spotifyService.getPlaylist(this.id);
        // this.tracks = this.playlist.tracks.map((track) => new TrackData(track));
    }
}