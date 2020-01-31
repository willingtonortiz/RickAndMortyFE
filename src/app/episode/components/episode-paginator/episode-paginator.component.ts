import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { PageEvent } from "@angular/material/paginator";
import { EpisodeActions } from "src/app/store/episodes/episode.actions";

@Component({
	selector: "app-episode-paginator",
	templateUrl: "./episode-paginator.component.html",
	styleUrls: ["./episode-paginator.component.scss"]
})
export class EpisodePaginatorComponent implements OnInit {
	@Select(state => state.AppEpisodes.info) info$: Observable<any>;

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

		this.store.dispatch([new EpisodeActions.FindAllEpisodes(page)]);
	}
}
