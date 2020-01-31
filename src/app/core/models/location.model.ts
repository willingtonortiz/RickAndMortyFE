import Character from "./character.model";

export default interface Location {
	id?: string;
	name?: string;
	type?: string;
	dimension?: string;
	residents?: Character[];
	created?: string;
}
