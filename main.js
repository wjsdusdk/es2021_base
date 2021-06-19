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

// undefined
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
