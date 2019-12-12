import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContainerComponent } from "./pages/home-container/home-container.component";
import { CharacterListComponent } from "./components";

const routes: Routes = [
	{
		path: "",
		component: HomeContainerComponent
	},
	{
		path: "list",
		component: CharacterListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
