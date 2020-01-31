import { Component, OnInit, Input } from "@angular/core";
import Episode from "src/app/core/models/episode.model";
import { Router } from "@angular/router";

@Component({
	selector: "app-episode",
	templateUrl: "./episode.component.html",
	styleUrls: ["./episode.component.scss"]
})
export class EpisodeComponent implements OnInit {
	@Input() episode: Episode;

	constructor(private readonly router: Router) {
		this.episode = {};
	}

	ngOnInit() {}

	public showCharacters(id: number) {
		this.router.navigate(["episodes", id, "characters"]);
	}
}
