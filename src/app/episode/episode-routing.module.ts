import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EpisodeContainerComponent, EpisodeDetailsComponent } from "./pages";
import { EpisodeListComponent } from "./components";

const routes: Routes = [
	{
		path: "",
		component: EpisodeContainerComponent,
		children: [
			{
				path: "",
				component: EpisodeListComponent
			},
			{
				path: ":id/characters",
				component: EpisodeDetailsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EpisodeRoutingModule {}
