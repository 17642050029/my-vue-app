import request from '../utils/request';

export const getSystemMenus = (data: any) => {
    return request({
        url: '/auth-external-microservice/v1/account/listFuns',
        method: 'post',
        data
    });
};
