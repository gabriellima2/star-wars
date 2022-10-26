export interface Character {
	name: string;
	height: string;
	mass: string;
	gender: string
	created: string
	url: string
}

export interface Characters {
	next: string;
	previous: string;
	results: Character[]
}
