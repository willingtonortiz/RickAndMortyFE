import { State, Action, StateContext } from "@ngxs/store";

import { CharacterHttpService } from "src/app/core/services";
import { CharacterActions } from "./character.actions";

export interface CharacterStateModel {
	characters: Array<any>;
	info: {
		count: number;
		pages: number;
		next: any;
		prev: any;
	};
}

@State<CharacterStateModel>({
	name: "AppCharacters",
	defaults: {
		characters: [],
		info: {
			count: 0,
			pages: 0,
			next: 0,
			prev: 0
		}
	}
})
export class CharacterState {
	public constructor(private characterHttpService: CharacterHttpService) {}

	@Action(CharacterActions.FetchCharacters)
	public async fetchCharacters(
		{ patchState }: StateContext<CharacterStateModel>,
		{ page }: CharacterActions.FetchCharacters
	) {
		try {
			const data = await this.characterHttpService.getCharacters(page);
			const characters = data.characters;

			patchState({
				characters: characters.results,
				info: characters.info
			});
		} catch (error) {
			console.log("ERROR! ", error);
		}
	}
}
