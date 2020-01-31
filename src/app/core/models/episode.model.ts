import Character from "./character.model";

export default interface Episode {
	id?: number;
	name?: string;
	air_date?: string;
	episode?: string;
	characters?: Character[];
	created?: string;
}
