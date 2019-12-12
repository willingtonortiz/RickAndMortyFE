export namespace CharacterActions {
	export class FetchCharacters {
		static readonly type = "[Character] Fetch Characters";

		constructor(public page: number) {}
	}
}
