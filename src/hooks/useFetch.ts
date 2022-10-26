import { onMounted, ref } from "vue";

export function useFetch<Data>(url: string) {
	const data = ref<Data | undefined>();
	const error = ref<string | undefined>();
	const loading = ref<boolean>(true);

	onMounted(async () => {
		try {
			const response: Data = await (await fetch(url)).json();
			data.value = response;
		} catch (err) {
			error.value = "Desculpe, verifique sua conexão e recarregue a página.";
		} finally {
			loading.value = false;
		}
	});

	return {
		data,
		error,
		loading
	};
}
