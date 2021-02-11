
window.onload = ()=>{

  // コマンドで一部置き換えたいところをclass="replace-text1"または"replace-text2"のspanタグで囲う
  let replaceElements1 = document.getElementsByClassName('replace-text1');
  let replaceElements2 = document.getElementsByClassName('replace-text2');

  let copyTextElements = document.getElementsByClassName('copy-text');
  let commandTextElements = document.getElementsByClassName('command-text');

  // copy用input要素の中身を更新する
  const updateCopyText = function(){
    for( let i=0; i<copyTextElements.length; i++) {
      copyTextElements[i].value = document.getElementsByClassName('command-text')[i].textContent;
    }
  }
  // commandを書いているところは非表示にしてInputに同じ内容を入れる
  // 文字列置換えにDOM操作を利用しているため
  for (let i=0; i<commandTextElements.length; i++) {
    commandTextElements[i].hidden = true;
    copyTextElements[i].value = document.getElementsByClassName('command-text')[i].textContent;
  }

  // commandリプレイス文字列1個目
  document.getElementById('input-replace-text1').oninput = ()=>{
    let inputMessage1 = document.getElementById('input-replace-text1').value;

    for( let i=0; i<replaceElements1.length; i++) {
      replaceElements1[i].innerHTML = inputMessage1;
    }

    updateCopyText();
  }

  // commandリプレイス文字列2個目
  document.getElementById('input-replace-text2').oninput = ()=>{
    let inputMessage2 = document.getElementById('input-replace-text2').value;

    for( let i=0; i<replaceElements2.length; i++) {
      replaceElements2[i].innerHTML = inputMessage2;
    }

    updateCopyText();
  }

  // コピーボタン
  // この書き方はよろしくないらしい（ブラウザ開発ツールでエラーが出る）
  // でも動く
  let copyBtnElements = document.getElementsByClassName('copy-btn');
  for (let i=0; copyBtnElements.length; i++) {
    copyBtnElements[i].onclick = ()=>{
      let copyTarget = copyTextElements[i]; 
      // コピー対象のテキストを選択する
      copyTarget.select();

      // 選択しているテキストをクリップボードにコピーする
      document.execCommand("Copy");
    }
  }
};


  