import request from '../utils/request';

export const userLogin = (data: any) => {
    return request({
        url: '/login',
        method: 'post',
        data
    });
};
