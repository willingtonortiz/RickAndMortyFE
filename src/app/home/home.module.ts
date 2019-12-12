import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Modules
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { MatCardModule } from "@angular/material/card";

// Components
import { HomeContainerComponent } from "./pages";
import { CharacterComponent } from "./components";
import { CharacterListComponent } from './components/character-list/character-list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
	imports: [CommonModule, HomeRoutingModule, SharedModule, MatCardModule],
	declarations: [HomeContainerComponent, CharacterComponent, CharacterListComponent, SearchComponent],
	exports: []
})
export class HomeModule {}
