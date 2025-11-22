const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");

  const character = characters[i];

  console.log(`名前は${character.name}です`);

  // if文を追加してください
 if (character.age === undefined){
  console.log("年齢は秘密です");
 }else{
  console.log(`${character.age}歳です`);
 }
}


const cafe = {
  name: "Progateカフェ",
  businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening:"10:00(AM)",
    closing:"8:00(PM)"
  }
};

// 「店名:〇〇」を出力してください
console.log(`店名:${cafe.name}`);

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);


const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus:["コーヒー","紅茶","チョコレートケーキ"]
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i++){
  console.log(cafe.menus[i]);
}
