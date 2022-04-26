const router = require('koa-router')()
const AdminController = require('../controller/admin.controller')
const { verifyParams, adminRequired } = require('../middleware')

router.prefix('/admin')

const loginParams = {
  ruleName: 'admin',
  required: ['username', 'password'],
  validateFields: ['username', 'password']
}
router.post('/login', verifyParams(loginParams), AdminController.login)

router.get('/list', adminRequired, AdminController.getList)

module.exports = router
