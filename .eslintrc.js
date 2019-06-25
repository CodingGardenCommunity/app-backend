module.exports = {
    extends: ['airbnb-base', 'prettier'],
    plugins: ['jest', 'promise', 'prettier'],
    env: {
        'jest/globals': true
    },
    rules: {
        'promise/prefer-await-to-then': 'error',
        'prettier/prettier': 'error'
    }
};
