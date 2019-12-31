const menus = [{
        path: '/',
        name: '首页',
        icon: 'el-icon-menu',
    },
    {
        path: '/listManage',
        name: '列表管理',
        icon: 'el-icon-umbrella',
        children: [{
            path: '/listManage/list',
            name: '列表'
        }],
    },
    {
        path: '/richEdit',
        name: '富文本编辑',
        icon: 'el-icon-suitcase',
        children: [{
            path: '/richEdit/rich',
            name: '富文本'
        }],
    },
    {
        path: '/financeManage',
        name: '财务管理',
        icon: 'el-icon-brush',
        children: [{
            path: '/financeManage/finance',
            name: '财务报表'
        }],
    },{
        path: '/setting',
        name: '系统设置',
        icon: 'el-icon-setting',
    }
]

export default menus;