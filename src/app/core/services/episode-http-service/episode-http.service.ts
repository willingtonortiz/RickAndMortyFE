import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import gql from "graphql-tag";

@Injectable({
	providedIn: "root"
})
export class EpisodeHttpService {
	constructor(private apollo: Apollo) {}

	private findAllEpisodesQuery(page: number): any {
		return gql`
			{
				episodes(page: ${page}) {
					info {
						count
						pages
						next
						prev
					}
					results {
						id
						name
						air_date
						episode
						created
					}
				}
			}
		`;
	}

	private findOneEpisodeQuery(id: number): any {
		return gql`
			{
				episode(id: ${id}) {
					id
					name
					air_date
					episode
					created
					characters {
						id
						name
						image
					}
				}
			}
		`;
	}

	public findAllEpisodes(page: number): Promise<any> {
		return this.apollo
			.query({
				query: this.findAllEpisodesQuery(page)
			})
			.pipe(map(x => x.data))
			.toPromise<any>();
	}

	public findOneEpisode(id: number): Promise<any> {
		return this.apollo
			.query({
				query: this.findOneEpisodeQuery(id)
			})
			.pipe(map(x => x.data))
			.toPromise<any>();
	}
}
