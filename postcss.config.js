module.exports = {
    plugins: [
        require('cssnano')({
            preset: ['advanced', { discardComments: false }]
        }),
    ],
};