/**
 * const、let等の変数宣言
 */

// var val1 = 'var変数';
// console.log(var1);

// // var変数は上書き可能
// val1 = 'var変数上書き';
// console.log('var1');

// //var変数は再宣言可能
// var val1 = 'var変数を再宣言';
// console.log(var1);

// let val2 = 'let変数';
// console.log('val2');

// //letは上書きが可能
// val2 = 'let変数の上書き';
// console.log(val2);

// //letは再宣言は不可
// let = val2 'let再宣言';
// console.log(val2);

// const val3 = 'const変数';
// console.log(val3);

// const宣言は上書き、再宣言ともに不可

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'マミー',
//   age: 27,
// };

// val4.name = 'カズ';
// val4.born = 1995;
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "マミー";
// const age = 27;
// //「私の名前はマミーです。年齢は27歳です。」

// //従来の記述方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(massage1);

// //テンプレート文字列を用いた記述方法
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
//変数に関数を定義することも可能
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "kaz",
//   age: 27
// };

// const massage = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massage);

// const { name, age } = myProfile;
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// const myProfile2 = ['mam',27];
// // const massage3 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// // console.log(massage3);

// const [name,age] = myProfile2;

// const massage3 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage3);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文　 [...]
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr7 =　[...arr4,...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "鈴木", "間宮"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index　+ 1}番目は${nameArr[index]}です`);
// }

//map
//リターンされた結果に基づいて新しい配列を生成する使い方
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//配列を処理してループする使い方
// nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です`));

//filter
//リターンで条件を書き当てはまるものだけ取り出せるような関数
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === '間宮') {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時　 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString()); //toLocaleString()は数値にだけ使う

// const formatteedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatteedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100以上です' : '大丈夫です';
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || '金額未設定です';
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);
