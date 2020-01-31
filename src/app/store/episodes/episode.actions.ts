export namespace EpisodeActions {
	export class FindAllEpisodes {
		static readonly type = "[Episode] Find All";

		public constructor(public page: number) {}
	}

	export class FindOneById {
		static readonly type = "[Episode] Find One By Id";

		public constructor(public id: number) {}
	}
}
