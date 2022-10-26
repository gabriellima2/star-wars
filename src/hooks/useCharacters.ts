import { useFetch } from "./useFetch";
import { BASE_URL } from "../constants";

import type { Characters } from "../types";

export function useCharacters() {
	const response = useFetch<Characters>(`${BASE_URL}/people/`);

	return { ...response };
}
