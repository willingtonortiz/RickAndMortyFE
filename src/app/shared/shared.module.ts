import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Angular Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";

// Components
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LayoutComponent } from "./pages/layout/layout.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatPaginatorModule
	],
	declarations: [NavbarComponent, LayoutComponent, PaginatorComponent],
	exports: [NavbarComponent, LayoutComponent, PaginatorComponent]
})
export class SharedModule {}
