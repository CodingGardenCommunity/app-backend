module.exports = {
    extends: 'airbnb-base',
    plugins: ['jest', 'promise'],
    env: {
        'jest/globals': true
    },
    rules: {
        'promise/prefer-await-to-then': 'error'
    }
};