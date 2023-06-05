import { ProfileData } from './profile-data';
import { ResourceData } from './resource-data';

export class PlaylistData extends ResourceData {
    owner: ProfileData[];

	constructor(objectModel:{}) {
		super(objectModel);
		this.category = 'playlist';
        this.owner = objectModel['owner'];
	}
}