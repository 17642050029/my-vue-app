import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
	const userInfo = ref({
        token:''
    })
    const token =computed(()=>userInfo.value.token)
	const setUserInfo = (info:any) => {
		console.log(123123);
		
		userInfo.value = info
		localStorage.setItem('ms_username', userInfo.value.token);
	}
	return {
		userInfo,
        token,
		setUserInfo
	}
});
