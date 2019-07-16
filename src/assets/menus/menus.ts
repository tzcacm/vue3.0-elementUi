export const menu = [
    { title: '首页', index: '1', class: 'el-icon-menu', path: '/home/index', unfold: false },
    { title: '列表管理', index: '2', class: 'el-icon-umbrella', unfold: true, data: [{ title: '列表', index: '2-1', path: '/home/list' }] },
    { title: '富文本编辑', index: '3', class: 'el-icon-suitcase', unfold: true, data: [{ title: '富文本', index: '3-1', path: '/home/rich' }] },
    { title: '财务管理', index: '4', class: 'el-icon-brush', unfold: true, data: [{ title: '财务报表', index: '4-1', path: '/home/finance' }] },
    { title: 'rxjs', index: '5', class: 'el-icon-s-flag', path: '/home/observable', unfold: false },
    { title: '系统设置', index: '6', class: 'el-icon-setting', unfold: true, data: [{ title: '修改密码', index: '6-1', path: '/home/password' }] },
]

