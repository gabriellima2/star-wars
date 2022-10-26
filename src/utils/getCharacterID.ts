// Pega o ID da url do personagem: https://swapi.dev/api/people/"1"/ -> 1
export function getCharacterID(url: string) {
	const urlLength = url.length - 1;
	const urlWithoutLastSlash = url.slice(0, urlLength);
	const slashIndexBeforeID = urlWithoutLastSlash.lastIndexOf("/");

	return url.slice(slashIndexBeforeID + 1, urlLength);
}
