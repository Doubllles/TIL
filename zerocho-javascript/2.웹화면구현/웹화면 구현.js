var 단어 = document.createElement('div');
단어.textContent='제로초';
document.body.append(단어);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
//폼안에 넣는거여서 document에서 폼으로 바뀐다.
//document.body.append(입력창);
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent='button';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);

폼.addEventListener('submit', function(e)
    {
    e.preventDefault();
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    }
        else {
            결과창.textContent = '땡'
            입력창.value = '';
            입력창.focus();
        }
    
})