// var 후보군 = Array(45);
// var 필 = 후보군.fill();
// var 맵 = 필.map(function(요소,인덱스){
//     return 인덱스 + 1;
// }); 
// 위의 내용을 아래처럼 간단히 할 수 있음
var 후보군 = Array(45)
    .fill()
    .map(function (요소, 인덱스) {
        return 인덱스 + 1;
    });
console.log(후보군);

// for (var i = 0; i < 당첨숫자들.length; i += 1) {
//     var 공 = document.createElement('div');
//     공.textContent = 당첨숫자들[i];
//     결과창.appendChild(공);
// }
var 셔플 = [];
// 후보군.length 이 기준값인데 계속 줄면서 바뀌기 때문에 for문 사용 ㄴㄴ
// for (var i =0; i< 후보군.length; i+=1) { }
// Math.random() :정확한 수학적 알고리즘이 아님, 상용서비스 할때는 수학적 알고리즘의 랜덤을 사용하자 
while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
}
console.log(셔플);
var 보너스 = 셔플[셔플.length - 1];

//slice():배열을 자름, 0부터 6까지, 6은 포함안됨
var 당첨숫자들 = 셔플
    .slice(0, 6)
    .sort(function (p, c) { //앞의 숫자부터 차례로 정렬됨 ex) [1,25,28,31,42,5]
        return p - c; // (이전-현재숫자),올림차순 작은숫자부터 정렬, 뺀 결과가 0보다 크면 숫ㄴ서를 바꾼다.
    });
console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);

//html태그를 element라 부름 element를 id로 찾는다.
// var 결과창 = document.getElementById('결과창');
//querySelectorAll = 여러 태그 동시 선택할수있게해줌
// querySelector사용
var 결과창 = document.querySelector('#결과창');

function 공색칠하기(숫자, 결과창) {
    // 다른부분을 매개변수, 겹치는부분은 함수로!!!!!!
    // HTMl에서는 class사용, JS는 class가 중요한 의미라 className으로 대체사용
    // JS에서 id는 표시되는데 class는 안됨 ,className으로 해야함
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-black';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    공.className = '공아이디' + 숫자;
    공.style.fontSize = '12px';
    var 배경색;
    if (숫자 <= 10) {
        배경색 = 'red';
    } else if (숫자 <= 20) {
        배경색 = 'orange';
    } else if (숫자 <= 30) {
        배경색 = 'yellow';
    } else if (숫자 <= 40) {
        배경색 = 'blue';
    } else {
        배경색 = 'green';
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
}


setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[0], 결과창);
}, 1000) //밀리초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[1], 결과창);
}, 2000) //밀리초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[2], 결과창);
}, 3000) //밀리초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[3], 결과창);
}, 4000) //밀리초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[4], 결과창);
}, 5000) //밀리초
setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[5], 결과창);
}, 6000) //밀리초


setTimeout(function 비동기콜백함수() {
    // var 칸 = document.getElementsByClassName('보너스')[0];
    // querySelector사용 ([0]떼도됨)
    var 칸 = document.querySelector('보너스');
    공색칠하기(보너스, 칸);
}, 7000) //밀리초





// 칸들.forEach(function (줄){
//     줄.forEach(function (칸){
//         console.log(칸)
//     })
// });