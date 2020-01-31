import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";

import { Observable } from "rxjs";

import { CharacterActions } from "../../../store/characters/character.actions";

@Component({
	selector: "app-character-list",
	templateUrl: "./character-list.component.html",
	styleUrls: ["./character-list.component.scss"]
})
export class CharacterListComponent implements OnInit {
	@Select(state => state.AppCharacters.characters) characters$: Observable<
		any
	>;

	constructor(private store: Store) {}

	ngOnInit() {
		this.store.dispatch([new CharacterActions.FetchCharacters(1)]);
	}
}
