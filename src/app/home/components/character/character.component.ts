import { Component, OnInit, Input } from "@angular/core";
import Character from "../../models/character.model";

@Component({
	selector: "app-character",
	templateUrl: "./character.component.html",
	styleUrls: ["./character.component.scss"]
})
export class CharacterComponent implements OnInit {
	@Input() character: Character = {};

	constructor() {
		this.character = {};
	}

	ngOnInit() {
		// this.character = {
		// 	id: 1,
		// 	name: "Rick Sanchez",
		// 	image:
		// 		"https://cache.escapistmagazine.com/2019/03/14102836/RickDrooling.jpg",
		// 	species: "Human",
		// 	status: "Vivo",
		// 	gender: "Hombre",
		// 	created: "ayer",
		// 	type: "asdasd",
		// 	origin: { name: "Dimension 365" },
		// 	location: { name: "Dimención C-137" }
		// };
	}
}
