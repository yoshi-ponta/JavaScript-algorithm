const animals = ["dog","cat","sheep"];
console.log(animals);

// 配列の1つ目の要素を出力してください
console.log(animals[0]);

// 配列の3つ目の要素を出力してください
console.log(animals[2]);


const animals = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit";

// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]);



const animals = ["dog", "cat", "sheep"];

// for文を用いて、配列の値を順にコンソールに出力してください
for (let i = 0; i < 3; i ++){
  console.log(animals[i]);
}



const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}


const character = {name:"にんじゃわんこ", age:14};
console.log(character);

// characterのnameの値を出力してください
console.log(character.name);

// characterのageの値を「20」に更新してください
character.age = 20;

// characterをコンソールに出力してください
console.log(character);


const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];

// charactersの1つ目の要素をコンソールに出力してください
console.log(characters[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(characters[1].name);


const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

// for文を完成させてください
for (let i = 0; i < characters.length ; i ++) {
  console.log("--------------------");

  // 定数characterを定義してください
  const character = characters[i];

  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);

  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);
}



const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  // 要素を追加してください
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");

  const character = characters[i];

  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}