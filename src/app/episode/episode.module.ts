import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Modules
import { EpisodeRoutingModule } from "./episode-routing.module";
import { SharedModule } from "../shared/shared.module";

// Pages
import { EpisodeContainerComponent } from "./pages";

// Components
import { EpisodeListComponent, EpisodeComponent } from "./components";
import { EpisodeDetailsComponent } from "./pages/episode-details/episode-details.component";
import { EpisodePaginatorComponent } from "./components/episode-paginator/episode-paginator.component";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
	imports: [
		CommonModule,
		EpisodeRoutingModule,
		SharedModule,
		MatPaginatorModule
	],
	declarations: [
		EpisodeContainerComponent,
		EpisodeComponent,
		EpisodeListComponent,
		EpisodeDetailsComponent,
		EpisodePaginatorComponent
	]
})
export class EpisodeModule {}
