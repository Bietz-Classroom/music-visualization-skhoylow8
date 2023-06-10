import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlaylistData } from 'src/app/data/playlist-data';
import { TrackData } from 'src/app/data/track-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {
    isLoading: boolean = true;
    isFetchingFeatures: boolean = true;
    id: string = '';
    playlist: PlaylistData | null = null;
    tracks: TrackData[];
    data: object[] = []; // stores data to pass to the data visualization tool

    constructor(private spotifyService:SpotifyService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        this.getActivatedRoute();
        this.getPlaylist();
    }

    getActivatedRoute() {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    getPlaylist() {
        this.spotifyService.getPlaylist(this.id).then((playlist) => {
            this.playlist = playlist;
            console.log(playlist)
            this.tracks = playlist.tracks.map(item => new TrackData(item['track']));

            this.tracks.forEach((track) => {
                let obj: object = {
                    "Track Name": track.name,
                    "Artist Name": track.artists[0].name,
                    "Album Name": track.album.name,
                    "Energy": 0,
                    "Danceability": 0
                };

                // get track features
                this.spotifyService.getAudioFeaturesForTrack(track.id).then((data) => {
                    obj["Energy"] = data[0]["percent"]*100;
                    obj["Danceability"] = data[1]["percent"]*100;
                    this.data.push(obj);
                })
                this.isFetchingFeatures = false;
            })
            this.isLoading = false;
        });
    }

    goBack(){
        this.location.back();
    }
} 