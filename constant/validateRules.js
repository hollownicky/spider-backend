module.exports = {
    admin: {
        oldPassword: {
            type: 'string',
            min: 6
        },
        newPassword: {
            type: 'string',
            min: 6
        },
        password: {
            type: 'string',
            min: 6
        },
        username: {
            type: 'string',
            required: true
        }
    }
}