import { ProfileData } from './profile-data';
import { ResourceData } from './resource-data';
import { TrackData } from './track-data';

export class PlaylistData extends ResourceData {
    owner: ProfileData[];
	tracks: TrackData[] | null = null;

	constructor(objectModel:{}) {
		super(objectModel);
		this.category = 'playlist';
        this.owner = objectModel['owner'];
		this.tracks = objectModel['tracks']['items'];
	}
}