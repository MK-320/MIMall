import Mock from 'mockjs'

Mock.mock('/api/user/login', {

    "status": 0,
    "data": {
        "id|10-3": 0,
        "username": "@cname",
        "password": "123456",
        "email": "@email",
        "phone":null,
        "role":0,
        "createTime": "1652401356546",
        "updateTime": "1652409999999",

    }

})
