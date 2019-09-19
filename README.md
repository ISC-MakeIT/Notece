<img src="https://uploda1.ysklog.net/eee1d71487629b9e9785d8ce46866d3f.png">

***
# ディレクトリ構造
rootはブランチと同じ名前にしてください(workは含めずに)

<img src="https://uploda1.ysklog.net/1d8ce29b857e00e110e5e2a44dd20899.png">

***
# コーディング規約
|設定|詳細|
|----|---|
|改行コード|CRLF|
|スペース | 4 |

* その他の設定はprettierを準拠
* 詳細は```./.vscode/setting.json```を参照

***
## CSS
### プロパティ
アルファベット順に記述する
```css
/*sample*/
#hoge {
  align-text: center;
  background: #2b2b2b;
  color: #000;
}
```
### ファイルの分割
コンテンツごとに分ける<br>
htmlにimportする時はstyle.cssにまとめてからstyle.cssのみimportする<br>
//例=>style.css, header.css, main.css, footer.css<br>

### 使用単位
相対単位のみとする<br>
絶対単位は使用禁止
***
## JS
### 多分動くと思うからリリースしようぜ
とりあえず言われた機能を実装することを意識してください<br>
コードはいくら綺麗に書いても動かなければ意味はありません。<br>
リファクタリングは動いてからやりましょう。<br>

***
# GitHub
## ブランチ
ページごとに作る<br>
//NewNote<br>
//NewNote-work =>　作業用
## コミット粒度
コミット=セーブです<br>
1タスクごとにコミットしましょう　事故を減らします。<br>
例えばADDとFIXを一緒にコミットメッセージに書かなければいけなくなったとしたらそれはもうアウトです。<br>
ゲームでもルート分岐がある時はセーブするでしょう？それと一緒です。
## コミットメッセージ
### 構文
表の順番に当てはめていくこと

|-|操作|種類|対象名|
|-|-|-|-|
|例|ADD|file|index.html|
### 対象
| | | |
|-|-|-|
|ファイル:file|定数:constant|変数:variable|
|フォルダー:directory|関数:method|構造:structure|

### 接頭辞
#### ADD
>なにかを追加した<br>
//例=>ADD directory / XXX.拡張子,　ADD method / changeColor
#### CHANGE
>なにかに変更/調整を加えた<br>
//例=>CHANGE directory structure,　CHANGE method / changeColor
#### DELETE
>なにかを削除した<br>
//例=>DELETE directory / XXX.拡張子,DELETE method / changeColor
#### OPEN
>なにかのエラーやバグが残っていてなおかつ解決できる見込みがない<br>
//例=>OPEN directory / XXX.拡張子 / エラー内容(コピペで可)
基本的に起きた時点で対処するのが望ましいけれど時間ない時はコミットメッセージに残しましょう
#### CLOSE
>OPENが解決した
//例=>CLOSE directory / XXX.拡張子 /　エラー内容
