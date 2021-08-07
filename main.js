/*

2-2. 문자열 기본 ('', "", ``, typeof, escape)

*/

console.log("----- 2-2. 문자열 기본 ('', \"\", ``, typeof, escape) -----");

// '', "", `` 모두 문자열을 표현

// ``만 줄바꿈까지 인식
console.log(`안녕하세요?
줄바꿈했어요`);
/* 안녕하세요?
줄바꿈했어요 */

// \n : '', ""로 줄바꿈을 표현하기 위해 사용
console.log("안녕하세요?\n줄바꿈했어요");
/* 안녕하세요?
줄바꿈했어요 */

// typeof
console.log(typeof "문자열"); // string
console.log(
    typeof `문자열

`
); // string
console.log(typeof ""); // string
console.log(typeof ``); // string
console.log(typeof `      `); // string

console.log("" == ""); // true
console.log("" == "   "); // false
console.log("   " == "   "); // true

console.log('"'); // "
console.log("'"); // '
console.log(`'`); // '
// console.log(''');  // err
// console.log(""");  // err
// console.log(```);  // err

console.log('"정말" 그랬니?'); // "정말" 그랬니?
// console.log(""정말" 그랬니?");  // err

console.log("how're you?"); // how're you?
// console.log('how're you?');  // err
console.log("how're you?"); // how're you?
console.log("how\re you?"); // howe you?
console.log("how\\re you?"); // how\re you?

/*

2-4. 숫자 기본 (parseInt, NaN)

*/

console.log("----- 2-4. 숫자 기본 (parseInt, NaN) -----");

// 10진법
console.log(5e4); // 50000
console.log(5e-4); // 0.0005
console.log(typeof 5e4); // number

// NaN : Not a Number
console.log("바나나" - "사과"); // NaN
console.log(typeof NaN); // number

console.log(typeof 123); // number
console.log(typeof "123"); // string

// 문자열에 숫자를 더할 때 숫자가 문자열로 변환
console.log(123 + 5); // 128
console.log("123" + 5); // 1235
console.log(typeof ("123" + 5)); // string

// parseInt : 문자를 정수로 형 변환
console.log(typeof parseInt("123")); // number
console.log(parseInt("3.14")); // 3
console.log(parseInt("3월")); // 3

// parseFloat : 문자를 소수로 형 변환
console.log(typeof parseFloat("123")); // number
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3월")); // 3

// Number : 문자를 숫자로 형 변환
console.log(typeof Number("123")); // number
console.log(Number("3.14")); // 3.14
console.log(Number("3월")); // NaN

// str.substr(시작 인덱스, 추출 갯수)
console.log("123456".substr(0, 2)); // 12

// str.substring(시작 인덱스번호, 끝 인덱스번호)
console.log("123456".substring(0, 2)); // 12

// prompt() : 팝업 메세지창
// console.log(prompt());
// console.log(parseInt(prompt()));
// console.log(typeof parseInt(prompt())); // number

// ** : 거듭제곱
console.log(2 ** 3); // 8

// Infinity : 무한
console.log(2 / 0); // Infinity
console.log(-2 / 0); // -Infinity
console.log(typeof Infinity); // number
console.log(Infinity - 100); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(0 / 0); // NaN

console.log(parseInt("문자열")); // NaN
console.log(NaN - 0); // NaN
console.log("문자열" - 0); // NaN

// 문자열에서 숫자를 빼거나 곱하거나 나눌 때 문자열이 숫자로 형 변환
// 문자열에 기본적으로 Number 적용 (parseInt나 parseFloat가 아님)
console.log("3" - 0); // 3
console.log(typeof ("3" - 0)); // number
console.log("3월" - 0); // NaN
console.log(Number("3월")); // NaN
console.log(Number("3월") - 0); // NaN
console.log(parseInt("3월")); // 3
console.log(parseInt("3월") - 0); // 3

/*

2-6. 불 값 (boolean, 값들의 비교)

*/

console.log("----- 2-6. 불 값 (boolean, 값들의 비교) -----");

// NaN과의 비교는 NaN !== NaN 빼고 모두 false
console.log(NaN == NaN); // false
console.log(NaN !== NaN); // true

// true는 1, false는 0라고 생각하면 됨
console.log(true > false); // true
console.log("0" < true); // true

// 문자열은 사전순으로 생각하면 됨
console.log("a" < "b"); // true
console.log("a" < "ab"); // true
console.log("ab" < "ad"); // true
console.log("a".charCodeAt()); // 97
console.log("b".charCodeAt()); // 98
console.log("&".charCodeAt()); // 38

// 문자열이 숫자로 형 변환
console.log("3" < 5); // true
console.log("abc" < 5); // false  // "abc"는 NaN이므로 NaN과의 비교는 NaN !== NaN 빼고 모두 false

// ==와 ===의 차이

// == : 형 변환 O
console.log("1" == 1); // true
console.log(1 == true); // true
console.log("1" != 1); // false

// === : 형 변환 X
console.log("1" === 1); // false
console.log(1 === true); // false
console.log("1" !== 1); // true

/*

2-7. 논리 연산자

*/

console.log("----- 2-7. 논리 연산자 -----");

// 10은 5보다 크고, 6은 8보다 작다
console.log(10 > 5 && 6 < 8); // true

// 10은 5보다 크거나, 6은 8보다 작다
console.log(10 < 5 || 6 > 8); // false

// ! : 반대
console.log(!true); // false
console.log(!false); // true

// Boolean : 불 값으로 형 변환
console.log(Boolean("a")); // true

// !! : 불 값으로 형 변환
console.log(!!"a"); // true
console.log(!!" "); // true

// false인 7가지 암기 (나머지는 모두 true)
// 그렇지만 false가 나온다고 false를 뺀 다른 6가지 값들이 false와 같진 않음
console.log(!!false); // false
console.log(!!""); // false
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!document.all); // false

console.log(!(2 < 0)); // true
console.log(!2 < 0); // false

/*

2-8. undefined와 null

*/

console.log("----- 2-8. undefined와 null -----");

// undefined : 기본값, 빈값
console.log(typeof undefined); // undefined
console.log(!!undefined); // false
console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false

// null : 의도적인 빈 값
console.log(typeof null); // object  // 유명한 버그  // 원래는 null이 나와야함
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(!!null); // false

/*

2-9. 변수 선언하기 (let)

*/

console.log("----- 2-9. 변수 선언하기 (let) -----");

// 초기화 : 변수를 선언함과 동시에 값을 대입하는 행위
// 변수 선언은 항상 결과값이 undefined
let variable = 5 + 5;
console.log(variable); // 10

// console.log는 undefined
console.log(console.log(variable)); // 10

/*

2-10. 변수 이름짓기

*/

console.log("----- 2-10. 변수 이름짓기 -----");

// 변수명으로 첫 글자는 숫자 불가
/* let 2variable = 77;
console.log(2variable); // err */

// 뛰어쓰기 불가

/*

2-11. 변수 수정하기

*/

console.log("----- 2-11. 변수 수정하기 -----");

let variable2 = "수정해라";
console.log(variable2); // 수정해라

variable2 = "수정했다";
console.log(variable2); // 수정했다

/*

2-12. 상수(const)와 var

*/

console.log("----- 2-12. 상수(const)와 var -----");

// const

// 초기화 필수
// const variable3 // err
const variable3 = "const";
console.log(variable3);

// 변수 값 수정 불가
const variable4 = "변경해라";
console.log(variable4);

/* variable4 = "변경했다"
console.log(variable4); */

// var

// 같은 변수명으로 다시 선언 가능 (let과의 차이)
var variable5 = 7;
console.log(variable5);

var variable5 = 77;
console.log(variable5);

var variable5 = 777;
console.log(variable5);

// 예약어나 다름없는 이름을 변수명으로 사용 가능
var undefined = "undefined";
console.log(undefined);

var Infinity = 0;
console.log(Infinity);

var let = "const";
console.log(let);

/*

2-13. 조건문 (if)

*/

console.log("----- 2-13. 조건문 (if) -----");

// if (조건식) {동작문}

// 10 > number > 1 이런 문법 사용 불가

/*

2-14. else, else if, switch

*/

console.log("----- 2-14. else, else if, switch -----");

// else
// if (조건식) {조건식이 참일 경우 동작문} else {조건식이 거짓일 경우 동작문}

// else if
// if (조건식) {동작문} else if (조건식) {동작문} else {동작문}

// switch
// switch (조건식) {case 비교조건식: 동작문}

let condition = "switch";

// switch () 조건식의 값이 case의 비교 조건식 값과 일치(===)하면 실행
switch (condition) {
    case "switch":
        console.log("condition1");
        console.log("condition2");
}

// 조건이 일치하는 줄 이하는 무조건 실행
switch (condition) {
    case "switch0":
        console.log("switch1");
    case "switch":
        console.log("switch2");
    case "switch2":
        console.log("switch3");
}

// break : 조건이 일치하는 것만 실행
switch (condition) {
    case "switch0":
        console.log("switch1");
        break;
    case "switch":
        console.log("switch2");
        break;
    case "switch2":
        console.log("switch3");
        break;
}

// default : 아무것도 일치하지 않을 경우
switch (condition) {
    case "switch0":
        console.log("switch1");
        break;
    case "switch1":
        console.log("switch2");
        break;
    case "switch2":
        console.log("switch3");
        break;
    default:
        console.log("아무것도 일치하지 않음");
}

/*

2-15. 조건부 연산자 (삼항 연산자)

*/

console.log("----- 2-15. 조건부 연산자 (삼항 연산자) -----");

// 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식
// 조건문이 아니라 조건식이기 때문에 결과값이 나옴

7 > 0 ? console.log("참") : console.log("거짓"); // 참

let condition2 = 7 < 0 ? "참" : "거짓";
console.log(condition2); // 거짓

// 중첩 조건부 연산자
let true_ = true;
let false_ = false;

let reiteration = true_ ? (false_ ? "둘 다 참" : "true_만 참") : "true_이 거짓";
console.log(reiteration);

let reiteration2 = false_ ? "false_만 참" : true_ ? "true_만 참" : "둘 다 거짓";
console.log(reiteration2);

/*

2-16. 반복문 (while)

*/

console.log("----- 2-16. 반복문 (while) -----");

// while (조건식) {동작문}

// 무한반복 (무한반복은 하면 안됨)
/* while (true) {
    console.log("while");
} */

let repeat = 0;
while (repeat < 10) {
    console.log("while");
    repeat++;
}

/*

2-17. 반복문 (for)

*/

console.log("----- 2-17. 반복문 (for) -----");

// for (시작; 조건식; 종료식) {동작문}

for (let i = 0; i < 10; i++) {
    console.log("for");
}

// 시작, 조건식, 종료식 생략 가능 (조건식 생략시 true -> 무한반복)
/* for (;;) {} */

for (let i = 0; i < 10; i = i + 2) {
    console.log(i + 1);
}

/*

2-18. break와 continue

*/

console.log("----- 2-18. break와 continue -----");

// break : 멈추기
let break_ = 0;
while (true) {
    if (break_ === 5) break;
    break_++;
}
console.log(break_);

// continue : 건너뛰기
let continue_ = 0;
while (continue_ < 10) {
    continue_++;
    if (continue_ % 2 === 0) {
        continue;
    }
    console.log(continue_);
}

/*

2-19. 중첩 반복문

*/

console.log("----- 2-19. 중첩 반복문 -----");

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
        if (j % 2 === 0) continue;
        for (let k = 0; k < 5; k++) {
            if (k % 2 === 0) continue;
            console.log(i, j, k);
        }
    }
}

/*

2-20. 별찍기 숙제

*/

console.log("----- 2-20. 별찍기 숙제 -----");

for (let i = 0; i < 5; i++) {
    console.log("*".repeat(i + 1));
}

for (let i = 5; i > 0; i--) {
    console.log("#".repeat(i));
}

for (let i = 0; i < 5; i++) {
    console.log("*".repeat(5 - i));
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log("#".repeat(i));
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log("*".repeat(10 - i));
}

for (let i = 0; i < 5; i++) {
    console.log(" ".repeat(i) + "#".repeat(5 - i));
}

for (let i = 0; i < 5; i++) {
    console.log(" ".repeat(4 - i) + "*".repeat(i + 1));
}

for (let i = 0; i < 5; i++) {
    console.log(" ".repeat(i) + "#".repeat(5 - i));
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(" ".repeat((9 - i) / 2) + "*".repeat(i));
}

/* for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(" ".repeat(Math.abs((6 - i) / 2)) + "#".repeat(Math.abs(2*i-i)));
} */

/* for (let i = 1; i < 6; i++) {
    console.log(" ".repeat(Math.abs((6 - i) / 2)) + "#".repeat(Math.abs(2*i-5)));
} */

/*

2-21. 배열 기본

*/

console.log("----- 2-21. 배열 기본 -----");

const array = ["apple", "orange", "pear", "strawberry"];
console.log(array[0]); // apple

// 배열 요소로 배열 가능
const arrayOfArray = [
    [1, 2, 3],
    [4, 5],
];
console.log(arrayOfArray[0]); // (3) [1, 2, 3]

// 배열 요소로 변수 가능
const a = 10;
const b = 20;
const variableArray = [a, b, 30];
console.log(variableArray[0]); // 10

// 배열 요소로 여러개의 중복되는 값 가능
const duplicated = ["가", "가", "가", "가"];

// 배열 요소가 없어도 가능
const empty = [];

// 배열 요소로 빈 값도 가능
const emptyValue = [null, undefined, false, "", NaN];
console.log(emptyValue.length); // 5
console.log(emptyValue[emptyValue.length - 1]); // NaN

// 배열 요소 추가
const array2 = ["b", "d"];

array2[2] = "d";
console.log(array2); // (3) ["b", "d", "d"]

// 배열 마지막 자리에 요소 추가
array2[array2.length] = "e";
console.log(array2); // (4) ["b", "d", "d", "e"]

array2.push("f");
console.log(array2); // (5) ["b", "d", "d", "e", "f"]

// 배열 첫번째 자리에 요소 추가
array2.unshift("a");
console.log(array2); // (6) ["a", "b", "d", "d", "e", "f"]

// const는 값을 바꾸지(재할당) 못하지만 객체 내부의 속성이나 배열 요소는 수정 가능
const array3 = ["ㄱ", "ㄴ"];
/* array3 = ["ㄷ", "ㄹ"]; // 불가능 */
array3[0] = "ㅁ"; // 가능
console.log(array3); // (2) ["ㅁ", "ㄴ"]

/*

2-22. 배열 메서드 (수정, 조회)

*/

console.log("----- 2-22. 배열 메서드 (수정, 조회) -----");

// 배열 요소 수정
array2[2] = "c";
console.log(array2); // (6) ["a", "b", "c", "d", "e", "f"]

// 배열 마지막 요소 제거
array2.pop();
console.log(array2); // (5) ["a", "b", "c", "d", "e"]

// 배열 첫번째 요소 제거
array2.shift();
console.log(array2); // (4) ["b", "c", "d", "e"]

// 배열 중간 요소 제거
const array4 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ"];

array4.splice(1, 1);
console.log(array4); // (7) ["ㄱ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ"]

array4.splice(2, 2);
console.log(array4); // (5) ["ㄱ", "ㄷ", "ㅂ", "ㅅ", "ㅇ"]

array4.splice(3);
console.log(array4); // (3) ["ㄱ", "ㄷ", "ㅂ"]

array4.splice(0, 2, "a", "b", "c");
console.log(array4); // (4) ["a", "b", "c", "ㅂ"]

array4.splice(3, 0, "c", "c");
console.log(array4); // (6) ["a", "b", "c", "c", "c", "ㅂ"]

// 배열에 요소가 있는지 없는지 찾기
console.log(array4.includes("c")); // true
console.log(array4.includes("d")); // false

// 배열의 앞에서부터 찾기
console.log(array4.indexOf("c")); // 2

// 배열의 뒤에서부터 찾기
console.log(array4.lastIndexOf("c")); // 4

// 배열에 요소가 없을 경우
console.log(array4.lastIndexOf("d")); // -1

// 배열 반복
let array5 = 0;

while (array5 < array4.length) {
    console.log(array4[array5]);
    array5++;
}

let array6 = "안녕하십니까";
let array7 = 0;

while (array7 < array6.length) {
    console.log(array6[array7]);
    array7++;
}

for (let i = 0; i < array6.length; i++) {
    console.log(array6[i]);
}

/*

2-23. 배열 메서드 응용하기

*/

console.log("----- 2-23. 배열 메서드 응용하기 -----");

const array8 = ["안", "ㅎ", "녕", "ㅎ", "하", "세", "ㅎ", "요"];

while (array8.indexOf("ㅎ") > -1) {
    array8.splice(array8.indexOf("ㅎ"), 1);
}
console.log(array8); // (5) ["안", "녕", "하", "세", "요"]

const array9 = ["안", "ㅎ", "녕", "ㅎ", "하", "세", "ㅎ", "요"];
let array9_index = array9.indexOf("ㅎ");

while (array9_index > -1) {
    array9.splice(array9_index, 1);
    array9_index = array9.indexOf("ㅎ"); // 꼭 적어줘야함
}
console.log(array9); // (5) ["안", "녕", "하", "세", "요"]

// 0은 false를 의미하기 때문에 오류 발생
const array10 = [1, 2, 3, 4, 5];

if (array10.indexOf(1)) {
    console.log("1 찾음");
} else {
    console.log("1 못찾음");
}

if (array10.indexOf(1) > -1) {
    console.log("1 찾음");
} else {
    console.log("1 못찾음");
}

/*

2-24. 함수 기본

*/

console.log("----- 2-24. 함수 기본 -----");

// function() {}
// () => {}

// 함수 이름 붙여주는 법

// 1. 함수 선언문
// function() a{}

// 2. 함수 표현식
// const a = function() {};

// 3. 화살표 함수
// const a = () => {};

// 함수 호출
// a();

function function_() {
    console.log("Hi");
    console.log("function");
}
function_();
function_();

// 익명 함수 : 이름 없는 함수
// 한번밖에 사용할 수 없고 다른 곳에서 사용 불가

// return

// 함수를 호출하지 않으면 undefined, 즉 반환값이 없음
function function1() {
    // return undefined; // return을 사용하지 않으면 기본적으로 생략되어 있음
}
function1();

function function2() {
    return console.log("반환값");
}
function2(); // 반환값

// 함수 안에 조건을 둬서 어디까지 실행되는지 정할 수 있음
function function3() {
    if (true) {
        return;
    }
    console.log("return");
}
function3();

function function4() {
    if (false) {
        return;
    }
    console.log("return");
}
function4(); // return

// return은 하나만 가능
function function5() {
    return 1, 5;
}
console.log(function5()); // 5

function function6() {
    return [1, 5];
}
console.log(function6()); // (2) [1, 5]

function function7() {
    console.log("Hi");
    return;
    console.log("return");
}
function7(); // Hi

/*

2-25. 매개변수와 인수

*/

console.log("----- 2-25. 매개변수와 인수 -----");

// parameter : 매개변수
// argument : 인수
// parameter, argument는 화살표 함수에서는 사용 불가

function function8(parameter) {
    console.log(parameter);
}
function8("argument"); // argument

function function9(w, x, y, z) {
    console.log(w, x, y, z); // a b c undefined
    console.log(arguments); // Arguments(3) ["a", "b", "c"]
}
function9("a", "b", "c");

function function10(x, y) {
    return console.log(x + y);
}
function10(5, 3); // 8

function function11(x, y) {
    console.log(x, y); // 5 undefined
    return console.log(x + y); // NaN
}
function11(5);

function function12(x, y) {
    return console.log(x, y); // a b
}
function12("a", "b", "c");

// {}와 return이 바로 이어서 나오면 {}와 return 생략 가능
const function13 = (x, y, z) => {
    return x * y * z;
};

const function14 = (x, y, z) => x * y * z;

// 함수 내부에서 변수나 상수 선언 가능
function function15(x, y) {
    const fff = 100;
    return console.log((x - y) * fff);
}
function15(4, 2); // 200

// 함수 외부의 변수나 상수 사용 가능
const fff = 100;
function function16(x, y) {
    return console.log((x - y) * fff);
}
function16(4, 2); // 200

/*

2-26. 객체 리터럴 기본

*/

console.log("----- 2-26. 객체 리터럴 기본 -----");

/* const 객체 = {
    속성1 이름: 속성1 값,
    속성2 이름: 속성2 값,
    속성3 이름: 속성3 값,
} */

const yeona = {
    name: "전연아",
    year: 1994,
    month: 10,
    date: 31,
    gender: "W",
};

console.log(yeona.name); // 전연아
console.log(yeona["year"]); // 1994

// []를 사용할 경우 ""를 꼭 써야함
const name = "???";
console.log(yeona[name]); // undefined  //  yeona["???"]와 같음

// 속성 이름에 "" 붙여줘야하는 경우
const literal = {
    ab: "a",
    "2ab": "b", // 첫글자 숫자인 경우
    "a b": "c", // 뛰어쓰기가 있는 경우
    "a-b": "d", // 특수문자가 있는 경우
};

// 속성 이름에 "" 붙여줘야하는 경우에는 []만 가능
console.log(literal.ab); // a
// console.log(literal.2ab); // err
console.log(literal["2ab"]); // b

// 객체 속성 추가
yeona.number = "010-1234-5678";
console.log(yeona.number); // 010-1234-5678

// 객체 속성 수정
yeona.month = "10월";
console.log(yeona.month); // 10월

// 객체 속성 제거
delete yeona.gender;
console.log(yeona.gender); // undefined

// 객체 리터럴 : {}를 사용해 만든 객체

// 배열과 함수가 객체인 이유 : 객체의 성질을 모두 사용할 수 있기 때문
function literal2() {}
literal2.a = "Hi";
console.log(literal2.a); // Hi

const literal3 = [];
literal3.a = "bye";
console.log(literal3.a); // bye

// 메서드 : 객체의 속성 값인 함수
// console.log : console이라는 객체의 log 메서드
const debug = {
    log: function (a) {
        console.log(a);
    },
};
debug.log("Hi"); // Hi

/*

2-27. 객체의 비교 (원시값과의 차이점)

*/

console.log("----- 2-27. 객체의 비교 (원시값과의 차이점) -----");

// 객체끼리 비교는 항상 false
console.log({} === {}); // false

const object = { a: "10" }; // 객체 리터럴
const object2 = [1, 2, object]; // 배열 리터럴

console.log(object === object2[2]); // true
console.log(object2 === [1, 2, object]); // false

// 같은 객체를 참조하는 객체는 함께 속성 값이 바뀜
const object3 = { a: 1 };
const object4 = object3;
console.log(object4); // {a: 1}

object3.a = 2;
console.log(object4); // {a: 2}

// 객체가 아닌 값 (문자열, 숫자, 불 값, null, undefined, 원시값)은 함께 바뀌지 않음
const object5 = "a";
const object6 = object5;
console.log(object6); // a

object5.a = 2;
console.log(object6); // a

const yeona2 = {
    name: {
        first: "연아",
        last: "전",
    },
    gender: "W",
};
console.log(yeona2.name.last); // 전
console.log(yeona2["name"]["last"]); // 전
