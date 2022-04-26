const jwt = require('jsonwebtoken')
const ResultModal = require('../utils/result')
const { CODE_TYPES } = require('../constant/errorCode')
const mysqlModel = require('../config/connect')
const { secretKey, expiresIn } = require('../config/index')

class AdminController {
  /**
   * 登录(重点)
   * @param {*} ctx 
   */
  async login(ctx) {
    const { username, password } = ctx.request.body
    const info = await mysqlModel.findUserInfo(username, password)
    if (!info?.[0]) {
      return ctx.body = ResultModal.error(CODE_TYPES.ERROR_OLD_PASSWORD, '账号或密码错误!!!')
    }
    // Level等级: 1-100
    // Role角色: JUNIOR、SENIOR、ROOT
    const token = jwt.sign({ username, level: 1, role: 'ROOT' }, secretKey, { expiresIn })
    ctx.body = ResultModal.success({ token })
  }

  async getList(ctx) {
    ctx.body = ResultModal.success({
        success: true,
        total: 22,
        data: [
            [
                {
                    "key": 99, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 99", 
                    "owner": "曲丽丽X", 
                    "desc": "这是一段描述", 
                    "callNo": 879, 
                    "status": 2, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 60
                }, 
                {
                    "key": 98, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 98", 
                    "owner": "曲丽丽Y", 
                    "desc": "这是一段描述", 
                    "callNo": 322, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 12
                }, 
                {
                    "key": 97, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 97", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 996, 
                    "status": 2, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 47
                }, 
                {
                    "key": 96, 
                    "disabled": true, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 96", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 566, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 62
                }, 
                {
                    "key": 95, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 95", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 421, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 8
                }, 
                {
                    "key": 94, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 94", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 811, 
                    "status": 2, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 71
                }, 
                {
                    "key": 93, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 93", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 168, 
                    "status": 3, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 61
                }, 
                {
                    "key": 92, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 92", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 345, 
                    "status": 2, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 73
                }, 
                {
                    "key": 91, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 91", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 708, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 98
                }, 
                {
                    "key": 90, 
                    "disabled": true, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 90", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 482, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 90
                }, 
                {
                    "key": 89, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 89", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 579, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 97
                }, 
                {
                    "key": 88, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 88", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 105, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 93
                }, 
                {
                    "key": 87, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 87", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 526, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 16
                }, 
                {
                    "key": 86, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 86", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 27, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 78
                }, 
                {
                    "key": 85, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 85", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 766, 
                    "status": 2, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 85
                }, 
                {
                    "key": 84, 
                    "disabled": true, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 84", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 582, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 61
                }, 
                {
                    "key": 83, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 83", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 394, 
                    "status": 0, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 43
                }, 
                {
                    "key": 82, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 82", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 190, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 12
                }, 
                {
                    "key": 81, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png", 
                    "name": "TradeCode 81", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 212, 
                    "status": 1, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 87
                }, 
                {
                    "key": 80, 
                    "disabled": false, 
                    "href": "https://ant.design", 
                    "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png", 
                    "name": "TradeCode 80", 
                    "owner": "曲丽丽", 
                    "desc": "这是一段描述", 
                    "callNo": 647, 
                    "status": 3, 
                    "updatedAt": "2022-04-25", 
                    "createdAt": "2022-04-25", 
                    "progress": 87
                }
            ]
        ]
    })
  }
}

module.exports = new AdminController()
