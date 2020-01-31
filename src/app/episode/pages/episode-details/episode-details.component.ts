import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-episode-details",
	templateUrl: "./episode-details.component.html",
	styleUrls: ["./episode-details.component.scss"]
})
export class EpisodeDetailsComponent implements OnInit {
	constructor(private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params.id;
	}
}
