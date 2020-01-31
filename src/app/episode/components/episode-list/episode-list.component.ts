import { Component, OnInit } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { EpisodeActions } from "src/app/store/episodes/episode.actions";
import { Observable } from "rxjs";

@Component({
	selector: "app-episode-list",
	templateUrl: "./episode-list.component.html",
	styleUrls: ["./episode-list.component.scss"]
})
export class EpisodeListComponent implements OnInit {
	@Select(state => state.AppEpisodes.episodes) episodes$: Observable<any>;

	constructor(private store: Store) {}

	ngOnInit() {
		this.store.dispatch([new EpisodeActions.FindAllEpisodes(1)]);
	}
}
