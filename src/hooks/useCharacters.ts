import { useFetch } from "./useFetch";
import { BASE_URL } from "../constants";

import type { CharactersResponse } from "../types";

export function useCharacters() {
	const response = useFetch<CharactersResponse>(`${BASE_URL}/people/`);

	return { ...response };
}
