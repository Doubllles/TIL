const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 노드가 만들어둔 모듈, 절대경로 적을때 힘든거를 'path'로 해결
const path = require('path');

// 노드의 모듈을 만든것,웹펙이 웹펙을 처리할때 사용 = 웹펙킹이라 정함
module.exports = {
    // 개발할때의 모드, 배포할때는 'production'
    mode: 'development',
    // 개발할때의 모드, 배포할때는 'hidden-source-map'
    devtool: 'eval',

    resolve: {
        // 확장자같은것을 생략가능하게 처리해준다. main.js안의 
        extensions: ['.js', '.vue'],
    },
    entry: {
        // app = 스크립트가 여러개면 힘드니깐 하나로 합쳐줄 파일의 이름 , 
        // 여러개의 스크립트를 하나로 뭉쳐서 만든 파일 ,main.js(제일중요한파일) 외 스크립트여러개가 나중에 app.js로 합쳐짐
       app: path.join(__dirname,'./main.js'),
    },
    // 웹펙의 핵심
    module: {
        // 여러개의 자바스크립트를 어떻게 합치고 처리할것인지 적는것
        //vue파일을 만났을때 'vue-loader가 처리하라고 한것임'
        rules: [{
            // 파일명이 .vue로 끝나는 파일
            test: /\.vue$/,
            // 'vue-loader' 는 남이 만든것이라 npm i vue-loader 로 다운받아야함
            loader:'vue-loader', 
        }]
    },
    // 부가적개념
    plugins: [
        new VueLoaderPlugin(),
    ],
    // main.js의 엮인 파일들이 output의 path로 나올수 있음 
    output: {
        // entry객체 안에 'app'이라고 적어 줬기에 [name].js로 써도됨, 혹은 'app.js'
        filename: '[name].js', 
        //  path안에 join이라는 메서드가 , 현재경로 = (__dirname) , 'dist' 파일과 합쳐준다. ,
        //  숫자야구라는 현재폴더 안의 'dist'와 현재의 폴더나 파일을 합쳐준다.
        path: path.join(__dirname,'dist' ),
    },
}