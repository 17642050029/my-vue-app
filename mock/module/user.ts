import Mock from 'mockjs' //导入mockjs
 
Mock.setup({
    timeout:'500-1000'
  })
const userList = {  //定义用户数据
    data: {
        total: 6,
        //前两个用户数据分别固定设为管理员和普通用户，为后续权限设置做准备，其他用户随机生成
        userinfo: [{  
            username: 'admin',
            password: '123456',
            roles: 'admin',
            name: '张三',
            age: 23,
            job: '前端工程师',
            token: '000111222333444555666',
            id: '100',
        }, {
            username: 'editor',
            password: '123456',
            roles: 'editor',
            name: '测试1',
            'age|20-30': 23,
            job: '前端工程师',
            token: '145145145123123123111',
            id: '101',
        }, {
            username: '@word(3, 5)',
            password: '123456',
            roles: 'editor',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
            token: '@guid()',
            id: '102',
        }, ],
        meta: {
            status: 200,
            message: 'success',
        }
    },
};
Mock.mock(/\/login/, 'post', (req: { body: string; }) => { //路径与请求方式
    console.log(1);
    
  const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
  for (let i = 0; i < userList.data.userinfo.length; i++) { 
      //判断userList中是否存在该用户并且用户密码是否正确
      if (username === userList.data.userinfo[i].username && password === userList.data.userinfo[i].password) {
          return {
              meta: {
                  msg: 'success',
                  status: 200
              },
              userInfo: userList.data.userinfo[i]
          }
      }
  }
  return {
      meta: {
          msg: 'error',
          status: 201
      }
  }
})
