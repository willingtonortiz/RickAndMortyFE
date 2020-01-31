import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Store, Select } from "@ngxs/store";

// Actions
import { CharacterActions } from "../../../store/characters/character.actions";
import { Observable } from "rxjs";

@Component({
	selector: "app-paginator",
	templateUrl: "./paginator.component.html",
	styleUrls: ["./paginator.component.scss"]
})
export class PaginatorComponent implements OnInit {
	@Select(state => state.AppCharacters.info) info$: Observable<any>;

	public data = {
		length: 0,
		pageSize: 20
	};

	constructor(private store: Store) {}

	ngOnInit() {
		this.info$.subscribe(x => {
			this.data.length = x.count;
		});
	}

	pageChanged(event: PageEvent) {
		const page = event.pageIndex + 1;

		this.store.dispatch([new CharacterActions.FetchCharacters(page)]);
	}
}
