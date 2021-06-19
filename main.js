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
// console.log('''); // err
// console.log("""); // err
// console.log(```); // err

console.log('"정말" 그랬니?'); // "정말" 그랬니?
// console.log(""정말" 그랬니?"); // err

console.log("how're you?"); // how're you?
// console.log('how're you?'); // err
console.log("how're you?"); // how're you?
console.log("how\re you?"); // howe you?
console.log("how\\re you?"); // how\re you?

/*

2-3. 문자열 합치기 (연산자)

*/

console.log("----- 2-3. 문자열 합치기 (연산자) -----");

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

// parseInt : 문자를 정수로 변환
console.log(typeof parseInt("123")); // number
console.log(parseInt("3.14")); // 3
console.log(parseInt("3월")); // 3

// parseFloat : 문자를 소수로 변환
console.log(typeof parseFloat("123")); // number
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("3월")); // 3

// Number : 문자를 숫자로 변환
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

// 문자열에서 숫자를 빼거나 곱하거나 나눌 때 문자열이 숫자로 변환
// 문자열에 기본적으로 Number 적용 (parseInt나 parseFloat가 아님)
console.log("3" - 0); // 3
console.log(typeof ("3" - 0)); // number
console.log("3월" - 0); // NaN
console.log(Number("3월")); // NaN
console.log(Number("3월") - 0); // NaN
console.log(parseInt("3월")); // 3
console.log(parseInt("3월") - 0); // 3
