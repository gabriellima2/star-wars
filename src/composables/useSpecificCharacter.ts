import { useFetch } from "./useFetch";
import { BASE_URL } from "../constants";

import type { CharacterData } from "../types";

type CharacterResponse = Omit<CharacterData, "url">

export function useSpecificCharacter(id: string) {
	const response = useFetch<CharacterResponse>(`${BASE_URL}/people/${id}/`);

	return { ...response };
}
