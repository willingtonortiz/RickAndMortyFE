import { State, Action, StateContext } from "@ngxs/store";
import { CharacterHttpService } from "src/app/core/services";
import { CharacterActions } from "./character.actions";

export interface CharacterStateModel {
	characters: Array<any>;
}

@State<CharacterStateModel>({
	name: "characters",
	defaults: {
		characters: []
	}
})
export class CharacterState {
	public constructor(private characterHttpService: CharacterHttpService) {}

	@Action(CharacterActions.FetchCharacters)
	public async fetchCharacters(
		{ getState, patchState, setState }: StateContext<CharacterStateModel>,
		{ page }: CharacterActions.FetchCharacters
	) {
		// const state = getState();

		try {
			const data = await this.characterHttpService.getCharacters(page);
			patchState({
				characters: data.characters.results
			});
		} catch (error) {
			console.log("ERROR! ", error);
		}
	}
}
