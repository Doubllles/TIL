//main.js , vue, NumberBaseball.vue 3개를 main.js가 한번에 합쳐줌
 
//모듈시스템:  package.json에 설치한 vue("vue": "^2.6.11")를 가져와서 사용할거다
import Vue from 'vue';

// 현재파일의 main.js와 NumberBaseball.vue 과 연결시켜줌
// main.js 제일 중요한 파일이므로 다른 파일들을 모아야함
import NumberBaseball from './NumberBaseball.vue'; 
// el과 같은 역할 ,뷰의 인스턴스!
//import vue에 적어놓은 것으로 이제 명시적으로 vue를 사용할수있게된다.
new Vue(NumberBaseball).$mount('#root');
