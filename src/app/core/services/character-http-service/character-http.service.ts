import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class CharacterHttpService {
	constructor(private readonly apollo: Apollo) {}

	private getQuery(page: number): any {
		return gql`
			{
				characters(page: ${page}) {
					info{
						count
						pages
						next
						prev
					}
					results {
						id
						name
						status
						species
						type
						gender
						image
						origin{
							name
						}
						location{
							name
						}
					}
				}
			}
		`;
	}

	public getCharacters(page: number): Promise<any> {
		return this.apollo
			.query({
				query: this.getQuery(page)
			})
			.pipe(map(x => x.data))
			.toPromise<any>();
	}
}
