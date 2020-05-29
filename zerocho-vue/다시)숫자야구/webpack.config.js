const vueloaderplugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode:'development',
    devtool:'eval', 
    resolve:{
        extensions:['.js','.vue'],
    }, 
entry: {
    app: path.join(__dirname,'./main.js' ),
},
module:{
    rules: [{
        //파일명이 .vue로 끝나는 파일을뜻함 $=(정규표현식에서 끝을 뜻함)
        test:/\.vue$/,
        //template의 html파일을 'vue-loader'가 자바스크립트로 처리해줌
        //npm vue-loader -D 설치
        loader:'vue-loader',
    }],
},
plugins:[
    new vueloaderplugin(),
],
output:{
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
}, 
};