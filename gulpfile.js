const {src,dest,watch} = require('gulp');
//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

//iMAGENES
const webp = require('gulp-webp');

function css(done){
    //1.-Identificar el archivo de sass
    //2.-Compilar el archivo sass
    //3.-Alamacenar en el disco duro
    
    //1                                  
    src('src/scss/**/*.scss')
    .pipe( plumber() )
    .pipe( sass() ) //2
    .pipe( dest('build/css') ); //3
    done();
}
function versionWebp(done){
    src()
    done();
}
function dev(done){
    watch('src/scss/**/*.scss',css);
    done();
}
exports.css = css;
exports.dev = dev;