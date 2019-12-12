import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxsModule } from "@ngxs/store";
// import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

import { GraphQLModule } from "./graphql.module";

import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";

// States
import { CharacterState } from "./store/characters/character.state";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		GraphQLModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([CharacterState]),
		NgxsReduxDevtoolsPluginModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
