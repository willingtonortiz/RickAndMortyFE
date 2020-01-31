import { State, Action, StateContext } from "@ngxs/store";
import { EpisodeHttpService } from "src/app/core/services";
import { EpisodeActions } from "./episode.actions";
import { CharacterStateModel } from "../characters/character.state";

export interface EpisodeStateModel {
	episodes: Array<any>;
	info: {
		count: number;
		pages: number;
	};
}

@State<EpisodeStateModel>({
	name: "AppEpisodes",
	defaults: {
		episodes: [],
		info: {
			count: 0,
			pages: 0
		}
	}
})
export class EpisodeState {
	public constructor(private episodeHttpService: EpisodeHttpService) {}

	@Action(EpisodeActions.FindAllEpisodes)
	public async findAll(
		{ patchState }: StateContext<EpisodeStateModel>,
		{ page }: EpisodeActions.FindAllEpisodes
	) {
		try {
			const data = await this.episodeHttpService.findAllEpisodes(page);
			const episodes = data.episodes;

			patchState({
				episodes: episodes.results,
				info: episodes.info
			});
		} catch (error) {
			console.log("ERROR!", error);
		}
	}
}
