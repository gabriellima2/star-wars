export interface CharacterData {
	name: string;
	height: string;
	mass: string;
	gender: string
	created: string
	url: string
}

export type Characters = CharacterData[]

export interface CharactersResponse {
	next: string;
	previous: string;
	results: CharacterData[]
}
