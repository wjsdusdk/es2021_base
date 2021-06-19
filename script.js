// 기본 데이터 타입(값 자체), 숫자, 문자열

var a = 100;
a = "ㅋㅋㅋ";
console.log(a); // ㅋㅋㅋ

자바스크립트 = 20000;
console.log(자바스크립트); // 20000
console.log(a, 자바스크립트); // ㅋㅋㅋ 20000

massage1 = '"엄마가 그런 짓 하면 안돼!" 라고 하셨어요.';
massage2 = '"엄마가 그런 짓 하면 안돼!" 라고 하셨어요.';
console.log(massage1); // "엄마가 그런 짓 하면 안돼!" 라고 하셨어요.
console.log(massage2); // "엄마가 그런 짓 하면 안돼!" 라고 하셨어요.

console.log(typeof 자바스크립트); // numbe
console.log(typeof massage); // string

var a = 100;
var b = a;
a = 200;
console.log(a, b); // 200 100

// undefined(정의되있지 않은 값이라 못씀, 없는 값), null(값이 없음), NaN *에러는 아님

var b;
console.log(b); // undefined

// boolean (true, false)

console.log(1 > 100); // false
console.log(1 < 100); // true

// 배열

var b = "비";
var a = [1, 2, b, 4, 5];
console.log(a); // (5) [1,2,b,4,5]
console.log(a[2]); // 비 *0부터 시작
console.log(a.length); // 5

a.push("하하하"); // 추가
console.log(a); // (6) [1,2,"비",4,5,"하하하"]

var a = [];
console.log(a); // []

a.push(1);
a.push(3);
console.log(a); // [1,3]

var a = [];
console.log(a); // []

a[0] = 111;
a[1] = 222;
console.log(a); // [111,222]

// 산술연산자

var a = 100;
var b = 200;
console.log(a + b); // 300
console.log(a - b); // -100
console.log(a * b); // 20000
console.log(a / b); // 0.5

var message1 = "안녕? 내 이름은 ";
var message2 = "토순이";
console.log(message1 + message2); // 안녕? 내 이름은 토순이

var message1 = "안녕? 내 이름은 ";
var message2 = "토순이고, 나이는 ";
var age = 7;
console.log(message1 + message2 + age + "살 이야"); // 안녕? 내 이름은 토순이고, 나이는 7살 이야

var a = 1;
a = a + 1;
console.log(a); // 2

var a = 1;
a += 1;
console.log(a); // 2

var a = 1;
a++;
console.log(a); // 2

var a = 1;
++a;
console.log(a); // 2

var a = 1;
console.log(a++); // 1

var a = 1;
console.log(++a); // 2

// 비교연산자

var a = 100;
var b = 200;
var c = 100;
console.log(a > b); // false
console.log(a <= b); // true
console.log(a == c); // true
console.log(a != c); // false

var a = 100;
var b = "100";
console.log(a == b); // true
console.log(a != b); // false
console.log(a === b); // false // 엄격하게 비교
console.log(a !== b); // true // 엄격하게 비교

var a = 100;
var b = "100";
var result;
if (a === b) {
    result = "참";
} else {
    result = "거짓";
}
console.log(result); // 거짓

// 논리연산자 (그리고, 또는)

var a = 100;
var b = 200;
console.log(a < 200 && a == 100); // true
console.log(a < 200 && a == 200); // false
console.log(a < 200 || a == 200); // true

// 부정연산자

console.log(false); // false
console.log(!false); // true

console.log(100 > 200); // false
console.log(!(100 > 200)); // true
console.log(!!(100 > 200)); // false

// 조건문

var age = 100;
if (age > 18) {
    console.log("성인");
} else if (age > 13) {
    console.log("청소년");
} else if (age > 7) {
    console.log("어린이");
} else {
    console.log("유아");
} // 성인

// 반복문 for(초기조건; 조건체크; 조건변경)

for (var i = 0; i < 10; i++) {
    console.log(i);
} // 0~9

var i = 0;
for (; i < 10; i++) {
    console.log(i);
} // 0~9

var movies = ["극한직업", "어벤저스", "오펀", "강시", "나 홀로 집에", "내부자들"];
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
} // 극한직업~내부자들
console.log(movies[movies.length - 1]); // 내부자들 // 마지막꺼

// 함수

function sample() {
    console.log("ㅋㅋㅋㅋ");
}
sample(); // ㅋㅋㅋㅋ *함수 호출

function 더하기(a, b) {
    console.log(a + b);
} // a와 b는 더하기 함수의 매개변수(parameter)
더하기(1, 100); // 101

function 인사(이름) {
    console.log("안녕? 나는 " + 이름 + "야.");
}
인사("토순이"); // 안녕? 나는 토순이야.

var a = 100;
function sample2() {
    console.log("1111");
    if (a > 0) {
        return;
    } // 함수 중단
    console.log("2222");
}
sample2(); // 1111

var a = -100;
function sample2() {
    console.log("1111");
    if (a > 0) {
        return;
    } // 함수 중단
    console.log("2222");
}
sample2(); // 1111, 2222

function 더하기2(a, b) {
    return a + b;
} // 리턴값 : 함수 중단하면서 뱉어내는 값
console.log(더하기2(100, 200));

function 더하기3(a, b) {
    document.write(a + b);
}
var h = 더하기3(100, 200);
console.log(h); // undefined

function 더하기4(a, b) {
    document.write(a + b);
    return a + b;
}
var h = 더하기4(200, 500);
console.log(h); // 700
document.querySelector("h1").style.height = h + "px";

// 변수의 유효범위(Scope) - 전역변수, 지역변수

var a = 100; // 전역변수
function sample3() {
    var d = 200; // 지역변수 : 함수호출이 되는 순간 없어짐
    console.log("sample3에서 출력한 " + a);
    console.log("sample3에서 출력한 " + d);
}
// console.log(d); // 에러 - 유효범위 밖에 있어서
sample3(); // 100, 200
// console.log(d); // 에러 - 유효범위 밖에 있어서

function sample4() {
    var a = 400;
    console.log("sample4에서 출력한 " + a);
}
sample4(); // 400 //지역변수가 우선순위

function sample5() {
    var a = 400;
    var b = 800;
    console.log("sample5에서 출력한 " + a);

    function sample6() {
        console.log("sample6에서 출력한 " + b);
    }
    sample6();
}
sample5();

// 전역변수 줄이는 법
var jejudo = {
    a: 100,
    b: 200,
    c: 300,

    configMap: {
        deviceSize: null,
        total: 0,
    },
};

console.log(jejudo); // {a: 100, b: 200, c: 300, configMap: {deviceSize: null, total: 0}}
console.log(jejudo.c); // 300
console.log(jejudo.configMap.total); // 0

// 객체

var person1 = {};
person1.username = "홍길동"; // 속성(property)
person1.age = 12;
person1.introduce = function () {
    console.log("안녕? 나는 " + this.username + "야. 나이는 " + this.age + "살이야.");
}; // 메서드(method)
person1.introduce();

var person2 = {
    username: "Zena",
    age: 20,
    introduce: function () {
        console.log("안녕? 나는 " + this.username + "야. 나이는 " + this.age + "살이야.");
    },
};
person2.introduce();

// 생성자
function Person(username, age) {
    this.username = username;
    this.age = age;
    this.introduce = function () {
        console.log("안녕? 나는 " + this.username + "야. 나이는 " + this.age + "살이야.");
    };
}

// 인스턴스(instance)
var p1 = new Person("홍길동", 20);
var p2 = new Person("토순이", 3);

p1.introduce();
p2.introduce();


// DOM

// onload vs load vs DOMContentLoaded -> DOMContentLoaded 주로 사용
window.onload = function () {
    var title = document.getElementById("main-title");
    console.log(title);
}; // 모든 이미지 데이터 등이 로드된 후 함수 실행

window.addEventListener("load", function () {
    var title = document.getElementById("main-title");
    console.log(title);
}); // 모든 이미지 데이터 등이 로드된 후 함수 실행

window.addEventListener("DOMContentLoaded", function () {
    var title = document.getElementById("main-title");
    var titleSpan = title.getElementsByTagName("span");
    console.log(title);
    console.log(titleSpan); // [span, span, span]
    console.log(titleSpan[0]); // <span>hello 0</span>
    console.log(titleSpan[2]); // <span>hello 2</span>
}); // DOM의 객체들(태그들)만 로드되면 함수 실행

// getElementById vs querySelector & querySelectorAll -> querySelector & querySelectorAll 주로 사용
var mailTitle = document.querySelector('#main-title small');
console.log(mailTitle); // <small>small</small>
var rabbit = document.querySelector('.rabbit'); // 첫번째꺼만 가져옴
console.log(rabbit);
var rabbitAll = document.querySelectorAll('.rabbit'); // 모두 가져옴
console.log(rabbitAll); // [li.rabbit, li.rabbit, li.rabbit]
console.log(rabbitAll[1]); // <li class="rabbit" style="border: 1px solid red;"><img src="images/02.png"></li>

// style.border : border 적용하기
for (var i = 0; i < rabbitAll.length; i++) {
    rabbitAll[i].style.border = '1px solid red';
}

// getAttribute & setAttribute
var link = document.querySelector('.rabbit a');
console.log(link); // <a class="special" href="https://studiomeal.com">Google</a>
console.log(link.getAttribute('href')); // https://www.google.com // getAttribute는 리턴값이 있음
console.log(link.getAttribute('class')); // link-google1
link.setAttribute('href', 'https://studiomeal.com')
console.log(link.getAttribute('href')); // https://studiomeal.com
console.log(link.setAttribute('href', 'https://studiomeal.com')); // undefined - setAttribute는 리턴할 필요가 없는 함수라 리턴값이 없어서

// className : 기존 class 모두 삭제하고 class 추가하기 -> 거의 안씀
var link1 = document.querySelector('.link-google1');
link1.className = 'special';

// classList.add : class 추가하기
var link2 = document.querySelector('.link-google2');
link2.classList.add('special', 'foo')

// classList.remove : class 삭제하기 + setTimeout(몇 초 후 실행)
setTimeout(function() {
    link2.classList.remove('link-google2', 'foo');
}, 2000);

// classList.contains : contains(true, false) : 특정 class 포함하고 있는지
console.log(link.classList.contains('special')) // true

// createElement : Element 만들기 (태그 만들기)
var listElem = document.createElement('li');
listElem.innerHTML = '<span>토순이</span>';
console.log(listElem); // <li><span>토순이</span></li>

// appendChild : Element 위치 정하기 (태그 위치 정하기)
var rabbitMom = document.querySelector('.rabbit-mom')
rabbitMom.appendChild(listElem);



// addEventListener 이벤트

// 방법 1 addEventListener -> 주로 사용 (기능이 더 많아서)
var btn1 = document.querySelector('.btn1');
var mainTitle = document.querySelector('#main-title');

function btnClickHandler1() {
    mainTitle.style.background = 'dodgerblue';
}

btn1.addEventListener('click', btnClickHandler1);

// 방법 2 onclick -> 주로 사용 안함 (기능이 더 적어서)
var btn2 = document.querySelector('.btn2');
var mainTitle = document.querySelector('#main-title');

function btnClickHandler2() {
    mainTitle.style.background = 'blue';
}

btn2.onclick = btnClickHandler2;

// 클릭 이벤트 - 탭

// 방법 1 for -> 가장 비효율적
var menuLinks1 = document.querySelectorAll('.menu-link1');

function clickMenuHandler1() {
    for (var i = 0; i < menuLinks1.length; i++) {
        menuLinks1[i].classList.remove('menu-active1');
    }
    this.classList.add('menu-active1');
}

for (var i = 0; i < menuLinks1.length; i++) {
    menuLinks1[i].addEventListener('click', clickMenuHandler1);
}

// 방법 2 activeMenu -> 비효율적
var menuLinks2 = document.querySelectorAll('.menu-link2');

function clickMenuHandler2() {
    var activeMenu = document.querySelector('.menu-active2');
    if (activeMenu) {
        activeMenu.classList.remove('menu-active2');
    } // if를 사용한 이유 : 처음에 .menu-active가 없을 경우에 에러가 나서
    this.classList.add('menu-active2');
}

for (var i = 0; i < menuLinks2.length; i++) {
    menuLinks2[i].addEventListener('click', clickMenuHandler2);
}

// 방법 3 currentMenu1 -> 효율적
var currentMenu1; // 현재 활성화된 메뉴를 담을 변수
var menuLinks3 = document.querySelectorAll('.menu-link3');

function clickMenuHandler3() {
    if (currentMenu1) {
        currentMenu1.classList.remove('menu-active3');
    } // if를 사용한 이유 : 처음에 .menu-active가 없을 경우에 에러가 나서
    this.classList.add('menu-active3');
    currentMenu1 = this;
}

for (var i = 0; i < menuLinks3.length; i++) {
    menuLinks3[i].addEventListener('click', clickMenuHandler3);
}

// 방법 4 e.target 이벤트 위임 -> 효율적 // 부모 Element에 이벤트를 걸어줌
var currentMenu2;
var menu1 = document.querySelector('.menu1');

function clickHandler1(e) {
    /* console.log(this); // menu...
    console.log(e.currentTarget); // menu...
    console.log(e.target); // menu-link... */

    if (currentMenu2) {
        currentMenu2.classList.remove('menu-active4');
    }
    e.target.classList.add('menu-active4');
    currentMenu2 = e.target;
} // e : 이벤트에 관한 많은 정보들을 담고 있는 객체

menu1.addEventListener('click', clickHandler1);

// 방법 5 -> 가장 효율적 (기능별로 분리하면 코드는 더 길지만 부분적으로 수정하거나 추가하기가 용이, 따로 호출 가능, 구조도 더 바람직)
var currentMenu3;
var menu2 = document.querySelector('.menu2');

function activate(elem) {
    elem.classList.add('menu-active5');
    currentMenu3 = elem;
}

function inactivate(elem) {
    elem.classList.remove('menu-active5');
}

function clickHandler2(e) {
    if (currentMenu3) {
        inactivate(currentMenu3);
    }
    activate(e.target);
}

menu2.addEventListener('click', clickHandler2);

activate(document.querySelectorAll('.menu-link5')[0]); // 처음부터 활성화