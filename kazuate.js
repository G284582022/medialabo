
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoso"]');
  let yoso=i.value;
  kaisu += 1;
  let k1 =document.querySelector('span#kaisu');
  k1.textContent =kaisu;
  let k2 =document.querySelector('span#answer');
  k2.textContent=yoso;
  console.log(kaisu + "回目の予想: " + yoso);
  let p =document.querySelector('p#result')
  if (kaisu > 3) {
    p.textContent=("答えは" + kotae +"でした．すでにゲームは終わっています");
  }else{
    if (yoso > kotae) {
      p.textContent=("まちがい。答えはもっと小さいですよ");
    }else if(yoso < kotae) {
      p.textContent=("まちがい。答えはもっと大きいですよ");
    }else{
      p.textContent=("正解です.おめでとう!");
    }
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}