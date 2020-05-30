컴포넌트:

 화면의 영역을 코드별로 구분하여 개발하는것을 말함

​	코드의 반복을 줄이고 재사용성으로하여 최대한 많은 화면을 뽑아낼수있음.





전역컴포넌트

플러그인이나, 라이브러리나 전역으로 사용하는 컴포넌트만 Vue.component에 사용한다.

지역컴포넌트

싱글파일 컴포넌트의 체계로 했을때, 특정 컴포넌트 하단에 어떤 컴포넌트가 속성이 들어있는지 컴포넌츠를 통해 알수있다.



![스크린샷 2020-05-20 오후 3.19.14](/Users/doubllles_/Desktop/스크린샷 2020-05-20 오후 3.19.14.png)

- 상위에서 하위로는 데이터를 내려줌 (프롭스 속성)
- 하위에서 상위로는 이벤트를 올려줌 (이벤트 발생)



컴포넌트 통신 규칙이 필용한이유

특정 데이터의 상태가 바뀌었을때나 버그가 생겼을때 데이터의 흐름을 추적할 수 있다.

![스크린샷 2020-05-20 오후 3.26.00](/Users/doubllles_/Desktop/스크린샷 2020-05-20 오후 3.26.00.png)



props속성:

- 상위 컴포넌트로 부터 받은 데이터를 하위 컴포넌트가 프롭스로 받음

- 상위 컴포넌트의 데이터 내용을 바꿨을떄, 하위 컴포넌트도 리액티비티가 프롭스에도 반응이된다, 화면도 같이 반응된다.
- 컴포넌트는 각각으 데이터 존으로 보면된다(데이터의 유효범위도 마찬가지),
  - 컴포넌트의 내용 프롬스의 데이터내용도 마찬가지. 같은 프롭스 데이터 이름을 사용해도 된다 *props*: ['propsdata']

```
<div id="app">
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <!-- 상위 컴포넌트로 부터 받은 데이터를 하위 컴포넌트가 프롭스로 받음 -->
    <app-header v-bind:propsdata="message"></app-header>
    <app-content v-bind:propsdata="num"></app-content>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var appHeader = {
      template: '<h1>{{ propsdata }}</h1>',
      props: ['propsdata']
    }

    new Vue({
      el: '#app',
      components: {
        'app-header': appHeader,
        'app-content': appContent
      },
      data: {
        message: 'hi'
      }
    })
```



event Emit

- 하위 컴포넌트에서 상위 컴포넌트의 통신을 하려면 데이터를 다시올리는게 아니라 이벤트를 발생하게됨(상위로 올리게됨).
- 크롬의 작업도구의 events를 보면 이벤트 에밋에 대한 로그(이력)를 확인할 수 있다.



```
<div id="app">
    <!-- 웹으로부터 'data의 num값'을 보여줌 -->
    <p>{{ num }}</p>
    <!-- 하위 컴포넌트의 이벤트를 상위 컴포넌트가 받을수 있게 만들어줌 -->
    <!-- <app-header v-on:하위 컴포넌트에서 발생한 이벤트 이름="상위 컴포넌트의 메서드 이름"></app-header> -->
    <app-header v-on:pass="logText"></app-header>
    <app-content v-on:increase="increaseNumber"></app-content>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var appHeader = {
      //버튼을 클릭했을때 이벤트실행, passEvent라는 메서드를 상위컴포넌트인 root에 보냄
      template: '<button v-on:click="passEvent">click me</button>',
      methods: {
        passEvent: function() {
          // pass라는 이벤트를 보냄, 크롬의 events에
          this.$emit('pass');
        }
      }
    }
    var appContent = {
      template: '<button v-on:click="addNumber">add</button>',
      methods: {
        addNumber: function() {
          this.$emit('increase');
        }
      }
    }

    var vm = new Vue({
      el: '#app',
      components: {
        'app-header': appHeader,
        'app-content': appContent
      },
      methods: {
        logText: function() {
          console.log('hi');
        },
        increaseNumber: function() {
          this.num = this.num + 1;
        }
      },
      data: {
        num: 10
      }
    });
  </script>
</body>
</html>
```



같은 컴포넌트 레벨간의 통신방법

- 바로 통신할 수 없어서 상위 컴포넌트에 이벤트로 올렸다가 프롭스로 전송한다.

![스크린샷 2020-05-20 오후 6.35.50](/Users/doubllles_/Desktop/스크린샷 2020-05-20 오후 6.35.50.png)

![스크린샷 2020-05-20 오후 6.54.30](/Users/doubllles_/Desktop/스크린샷 2020-05-20 오후 6.54.30.png)

```

<body>
  <div id="app">
    <app-header v-bind:propsdata="num"></app-header>
    <app-content v-on:pass="deliverNum"></app-content>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var appHeader = {
      template: '<div>header</div>',
      props: ['propsdata']
    }
    var appContent = {
      // pass버튼을 눌렀을때 같은 라인의 컴포넌트에게 신호를발생시킴
      template: '<div>content<button v-on:click="passNum">pass</button></div>',
      methods: {
        passNum: function () {
          //콘솔의 events창에서 배열의 첫번쨰 인자가 10이됨(인자10을 root에 올려줌)
          // 컴포넌트 태그에 이벤트를올려줌!
          this.$emit('pass', 10);
        }
      }
    }

    new Vue({
      el: '#app',
      components: {
        'app-header': appHeader,
        'app-content': appContent
      },
      data: {
        num: 0
      },
      methods: {
        // 인자 10이 value로 정의할 수 있다
        deliverNum: function (value) {
          // this.num이라는 데이터 속성에 담는다 
          // data의 num: 0이 10으로 바뀐다 
          this.num = value;
        }
      }
    })
  </script>
</body>
```






====
인스턴스 몇개를 만들어도

전역컴포넌트는 따로 인스턴스를 등록하지않아도 기본적으로 다 생성되어있음

반면 지역컴포는트를 ,인스턴스마다 다 등록해야함,
		다른 new Vue인스턴스 안에  생성하게되면 나타나지않음



하위 컴포넌트의

Template: ' ' 의 값을 {{header}} 라고 웹에 보여지게 생성하지만, 내부적 상위컴포넌트나 하위컴포넌트의 값은 바뀌지않는다.

Template: ' ' 의 값을 데이터속성 이나 props속성을 넣었을때는 vue모드에서 값을 바꿨을때 웹화면에서도 바뀐다.



같은 컴포넌트라인끼리 의 값 주고받기

컴포넌트끼리 값을 주고 받을수 없기에

'컴포넌트A'에서 이벤트로 값을 'root'에 올려주고 '컴포넌트B'에서 props로 받게된다.