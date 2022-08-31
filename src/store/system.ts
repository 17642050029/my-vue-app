import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSystemStore = defineStore('system', () => {
	const language = ref<string>('en-US')
	const setLanguage = (lang:string) => {
		language.value = lang
	}
	return {
		language,
		setLanguage
	}
},{persist: true});
