import Location from "./location.model";
import Episode from "./episode.model";

export default interface Character {
	id?: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
	origin?: Location;
	location?: Location;
	image?: string;
	episode?: Episode;
	created?: string;
}
