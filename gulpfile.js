const {src,dest,watch} = require('gulp');
const sass = require("gulp-sass")(require("sass"));
function css(done){
    //1.-Identificar el archivo de sass
    //2.-Compilar el archivo sass
    //3.-Alamacenar en el disco duro
    
    //1                         //2          //3
    src('src/scss/**/*.scss').pipe( sass() ).pipe( dest('build/css') );
    done();
}
function dev(done){
    watch('src/scss/**/*.scss',css);
    done();
}
exports.css = css;
exports.dev = dev;