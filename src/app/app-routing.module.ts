import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "characters",
		pathMatch: "full"
	},
	{
		path: "characters",
		loadChildren: "./home/home.module#HomeModule"
	},
	{
		path: "episodes",
		loadChildren: "./episode/episode.module#EpisodeModule"
	},
	{
		path: "locations",
		loadChildren: "./location/location.module#LocationModule"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
