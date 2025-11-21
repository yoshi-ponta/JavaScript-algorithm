let number = 1;
// while文を作成してください
while (number <= 100){
  console.log(number);
  number += 1;
}


for (let number = 1; number <= 100; number ++){
  console.log(number);
}


for (let number = 1; number <= 100; number ++) {

  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number % 3 === 0){
    console.log("3の倍数です");
  }else{
    console.log(number);
  }
}
