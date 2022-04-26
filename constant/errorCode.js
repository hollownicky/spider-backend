exports.CODE_TYPES = {
    ERROR_PARAMS: {
        code: `100000`,
        defaultMsg: `参数错误`
    },
    ERROR_NO_LOGIN: {
        code: `100001`,
        defaultMsg: `用户未登录`
    },
    ERROR_NO_AUTH: {
        code: `100002`,
        defaultMsg: `用户无权限`
    },
    ERROR_SYSTEM: {
        code: `200001`,
        defaultMsg: `系统错误`
    },
    ERROR_OLD_PASSWORD: {
        code: `200002`,
        defaultMsg: `原密码错误`
    },
    ERROR_INVALID_TOKEN: {
        code: `200003`,
        defaultMsg: `无效Token`
    },
    ERROR_EXPIRED_TOKEN: {
        code: `200004`,
        defaultMsg: `过期Token`
    },
    ERROR_NO_PERMISSION: {
        code: `200005`,
        defaultMsg: `无此操作权限`
    }
}