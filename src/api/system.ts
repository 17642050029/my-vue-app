import request from '../utils/request';

export const getSystemMenus = () => {
    return request({
        url: '/nms/itnms-server/sys-auth/api/auth/menu/user',
        method: 'get',
    });
};
