import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Store } from "@ngxs/store";
import { CharacterActions } from "../../../store/characters/character.actions";

@Component({
	selector: "app-paginator",
	templateUrl: "./paginator.component.html",
	styleUrls: ["./paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {
	public data = {
		length: 100,
		pageSize: 20
	};

	constructor(private store: Store) {}

	ngOnInit() {
		// this.pageEvent.
	}

	pageChanged(event: PageEvent) {
		const page = event.pageIndex + 1;

		this.store.dispatch([new CharacterActions.FetchCharacters(page)]);
	}
}
