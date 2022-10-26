export function sliceUrl(value: string, word: string) {
	const wordIndex = value.indexOf(word);
	return value.slice(wordIndex);
}
