import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('system', () => {
	const language = ref<string>('en')
	const changeLanguage = (lang:string) => {
		language.value = lang
	}
	return {
		language,
		changeLanguage
	}
});
