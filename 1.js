const level = 12;

if (level > 10){
  console.log("レベルが10より大きいです");
}


const age = 24;

// 「age >= 20」を出力してください
console.log(age >= 20);

// 「age < 20」を出力してください
console.log(age < 20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください

if (age >= 20){
  console.log("私は20歳以上です");
}


const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if (password == "ninjawanko"){
  console.log("ログインに成功しました");
}



// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if (password != "ninjawanko"){
  console.log("パスワードが間違っています");
}


const age = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}


const age = 17;

// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else if(age >= 10){
  console.log("私は20歳未満ですが、10歳以上です");
}else {
  console.log("私は10歳未満です");
}


const age = 24;

// 指定された条件のif文を作成してください
if (age >= 20 && age < 30){
  console.log("私は20代です");
}


const n = 2;

switch (n) {
  case 1:
    console.log("大吉です");
    break;

  // nの値が2のcaseを追加してください
  case 2:
    console.log("吉です");
    break;

  // nの値が3のcaseを追加してください
  case 3:
    console.log("小吉です");
    break;
}


const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;
}

