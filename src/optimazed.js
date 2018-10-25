const imagemin = require('imagemin-keep-folder');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

(async () => {
    await imagemin(['src/images/**/*.{jpg,png}'], {
        plugins: [
            imageminJpegRecompress({quality: 'high'}),
            imageminPngquant({quality: '65-80'})
        ],
        replaceOutputDir: output => {
            return output.replace('src/images/', 'build/images/')
        }
    });
})();