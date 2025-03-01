//=============================================================================
//  Keke_StatePopup - ステートポップアップ
// バージョン: 1.1.8
//=============================================================================
// Copyright (c) 2022 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc ステート等をポップアップする
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.1.8】
 * ステート等、各種情報をポップアップする
 * ◎ステートだけでなく強化・弱体・戦闘不能も
 * ◎ポップアップのデザインやテキストを自由に設定可能
 * 
 * 
 * ● 使い方 ●
 *
 * 【設定】ポップアップのデザインを設定
 * ◇プラグインパラメータ → 各ポップ設定
 * ◎ステート付与、戦闘不能など種目別にデザイン設定できる
 * 　面倒なら初期状態のままでもよい
 * ◎『ステート付与2』、『ステート付与3』は、
 * 　ステートのメモ欄から指定された時のみ使用される(後述)
 * 　ステートごとに別デザインにしたい場合に
 * ◎『テキスト-敵』は敵にのみ適用されるテキスト
 * 　敵と味方でポップテキストを変えたい場合に
 *
 *
 * 【機能】ステート別にポップアップ設定
 * ◇ステートのメモ欄に
 * 
 * <ステートポップ: コマンド, テキスト>
 *
 * ◎コマンド
 * 　0: ポップアップしない
 * 　1: 『ポップ設定-ステート付与1』を使用
 * 　2: 『ポップ設定-ステート付与2』を使用
 * 　3 『ポップ設定-ステート付与3』を使用
 * 
 * ◎テキスト
 * 　ポップアップのテキスト。省略可
 *
 * ★例)
 * <ステートポップ: 0>
 * 　ポップアップしない
 * <ステートポップ: 2>
 * 　『ポップ設定-ステート付与2』を使用
 * <ステートポップ: 1, 麻痺した！>
 * 　『ポップ設定-ステート付与1』を使用し、「麻痺した！」とポップアップする
 *
 *
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 *
 *
 *
 * Pop up state etc.
 * ◎ Not only states but also powerup, weakness, and death
 * ◎ Pop-up design and text can be freely set
 * 
 * 
 * ● How to use ●
 *
 * [Setting] Set popup design
 * ◇ Plugin parameters → PopConfigs
 * ◎ You can set the design for each type,
 *   If it's troublesome, you can leave it in the initial state
 * ◎ "StateAdd2" and "StateAdd3"
 *   Used only when specified from the memo field of the state
 *   (described later)
 *   If you want to have a different design for each state
 * ◎ "Text - Enemy" is a text that applies only to enemies
 *   If you want to change the pop text between enemies and allies
 *
 *
 * [Function] Popup setting for each state
 * Popup settings can be changed for each state
 * in the memo field of the state
 *
 * <statePop: command, text>
 *
 * ◎ command
 * 　0: Do not popup
 *   1: Use "popCfg-addState1"
 *   2: Use "popCfg-addState2"
 * 　3 Use "popCfg-addState3"
 *
 * ◎ text
 * 　The text of the popup. Optional
 *
 * ★ example)
 * <statePop: 0>
 *   Don't pop up
 * <statePop: 2>
 *   Use "PopSettings - addState2"
 * <StatePop: 1, Paralyzed! >
 *   Use "popCfg-addState1" to pop up "Paralyzed!"
 *
 *
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 * 
 * 
 * 
 * @param ポップ設定
 * 
 * @param ポップ設定-ステート付与
 * @parent ポップ設定
 * @desc popCfg-addState ステート付与のアップポップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+2","文字色":"255, 255, 0, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"飛び出る","効果音":""}
 *
 * @param ポップ設定-ステート付与2
 * @parent ポップ設定
 * @desc popCfg-addState2 ステート付与のポップアップ設定その2。ステートのメモ欄に <ステートポップ: 2> で採用
 * @type struct<popCfg>
 * @default {"テキスト":"","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+2","文字色":"128, 255, 255, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"飛び出る","効果音":""}
 *
 * @param ポップ設定-ステート付与3
 * @parent ポップ設定
 * @desc popCfg-addState3 ステート付与のポップアップ設定その3。ステートのメモ欄に <ステートポップ: 3> で採用
 * @type struct<popCfg>
 * @default {"テキスト":"","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":""}
 * 
 * @param ポップ設定-ステート解除
 * @parent ポップ設定
 * @desc popCfg-remState ステート解除のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"%2","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+4","文字色":"224, 255, 255, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"true","アイコン表示":"","出現アニメ":"","効果音":""}
 *
 * @param ポップ設定-強化
 * @parent ポップ設定
 * @desc popCfg-popwerup 強化のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"%2↑","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 192, 0, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":""}
 *
 * @param ポップ設定-弱体
 * @parent ポップ設定
 * @desc popCfg-powerdown 弱体のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"%2↓","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"96, 224, 255, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":""}
 *
 * @param ポップ設定-強化・弱体解除
 * @parent ポップ設定
 * @desc popCfg-remPowerup/down 強化・弱体解除のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"%2","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"224, 255, 255, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"true","アイコン表示":"","出現アニメ":"","効果音":""}
 *
 * @param ポップ設定-戦闘不能
 * @parent ポップ設定
 * @desc popCfg-dead 戦闘不能のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"n","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+2","文字色":"224, 0, 0, 1","縁取り幅":"","縁取り色":"255, 255, 0, 1","演出":"","表示時間":"","ポップクリア":"true","アイコン表示":"","出現アニメ":"大きく出る","効果音":""}
 *
 * @param ポップ設定-復活
 * @parent ポップ設定
 * @desc popCfg-revive 復活のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"n","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+2","文字色":"0, 255, 128, 1","縁取り幅":"","縁取り色":"","演出":"","表示時間":"","ポップクリア":"true","アイコン表示":"","出現アニメ":"大きく出る","効果音":""}
 * 
 * @param ポップ設定-クリティカル
 * @parent ポップ設定
 * @desc popCfg-remCritical クリティカルが発生した時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Critical!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+4","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"255, 0, 0","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"飛び出る-速","効果音":"[\"{\\\"ファイル\\\":\\\"Skill2\\\",\\\"音量\\\":\\\"140\\\",\\\"ピッチ\\\":\\\"100\\\",\\\"位相\\\":\\\"0\\\"}\",\"{\\\"ファイル\\\":\\\"Fire8\\\",\\\"音量\\\":\\\"130\\\",\\\"ピッチ\\\":\\\"150\\\",\\\"位相\\\":\\\"0\\\"}\"]"}
 * 
 * @param ポップ設定-弱点属性
 * @parent ポップ設定
 * @desc popCfg-weeknessElement 弱点属性を突かれた時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Weekness!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"255, 0, 0","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"大きく出る-遅","効果音":"[\"{\\\"ファイル\\\":\\\"Particles1\\\",\\\"音量\\\":\\\"130\\\",\\\"ピッチ\\\":\\\"120\\\",\\\"位相\\\":\\\"0\\\"}\"]"}
 * 
 * @param ポップ設定-耐性属性
 * @parent ポップ設定
 * @desc popCfg-resistElement 耐性属性で防いだ時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Resist!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"128, 0, 192, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"大きく出る-遅","効果音":"[\"{\\\"ファイル\\\":\\\"Evasion2\\\",\\\"音量\\\":\\\"130\\\",\\\"ピッチ\\\":\\\"100\\\",\\\"位相\\\":\\\"0\\\"}\"]"}
 * 
 * @param ポップ設定-防御
 * @parent ポップ設定
 * @desc popCfg-guard 防御した時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Guard!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"0, 0, 255, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":"[\"{\\\"ファイル\\\":\\\"Parry\\\",\\\"音量\\\":\\\"200\\\",\\\"ピッチ\\\":\\\"100\\\",\\\"位相\\\":\\\"0\\\"}\"]"}
 * 
 * @param ポップ設定-回避
 * @parent ポップ設定
 * @desc popCfg-avoid 回避した時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Avoid!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"0, 128, 0, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":"[\"{\\\"ファイル\\\":\\\"Evasion1\\\",\\\"音量\\\":\\\"100\\\",\\\"ピッチ\\\":\\\"120\\\",\\\"位相\\\":\\\"0\\\"}\"]"}
 * 
 * @param ポップ設定-キャンセル
 * @parent ポップ設定
 * @desc popCfg-cancel TPB時、行動キャンセルされた時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Cancel!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"+4","文字色":"0, 0, 0, 1","縁取り幅":"","縁取り色":"255, 255, 96, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"飛び出る-大","効果音":""}
 * 
 * @param ポップ設定-遅延
 * @parent ポップ設定
 * @desc popCfg-delay TPB時、行動遅延した時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"delay %2","テキスト-敵":"","無効":"true","フォント設定":"","フォント":"","文字サイズ":"","文字色":"208, 208, 255, 1","縁取り幅":"","縁取り色":"0, 0, 0, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":""}
 * 
 * @param ポップ設定-不発
 * @parent ポップ設定
 * @desc popCfg-misfire 行動がMP不足等で不発に終わった時のポップアップ設定
 * @type struct<popCfg>
 * @default {"テキスト":"Misfire!","テキスト-敵":"","無効":"","フォント設定":"","フォント":"","文字サイズ":"","文字色":"255, 255, 255, 1","縁取り幅":"","縁取り色":"255, 0, 0, 1","演出":"","表示時間":"","ポップクリア":"","アイコン表示":"","出現アニメ":"","効果音":""}
 * 
 * @param ポップアップアニメ
 * 
 * @param 出現アニメ登録
 * @parent ポップアップアニメ
 * @desc appearAnimeMaking 出現アニメーションを登録する。各ポップ設定から呼び出せる
 * @type struct<appearAnime>[]
 * @default ["{\"アニメ名\":\"小さく出る\",\"アニメ時間\":\"20\",\"ディレイ\":\"5\",\"上方レイヤー\":\"\",\"標準のアニメ無効\":\"false\",\"アニメ内容\":\"\",\"スケール\":\"0\",\"スケールターン\":\"\",\"フェードイン\":\"0\"}","{\"アニメ名\":\"大きく出る\",\"アニメ時間\":\"20\",\"ディレイ\":\"5\",\"上方レイヤー\":\"false\",\"標準のアニメ無効\":\"false\",\"アニメ内容\":\"\",\"スケール\":\"1.5\",\"スケールターン\":\"\",\"フェードイン\":\"\"}","{\"アニメ名\":\"大きく出る-遅\",\"アニメ時間\":\"30\",\"ディレイ\":\"20\",\"上方レイヤー\":\"false\",\"標準のアニメ無効\":\"\",\"アニメ内容\":\"\",\"スケール\":\"1.5\",\"スケールターン\":\"\",\"フェードイン\":\"\"}","{\"アニメ名\":\"飛び出る\",\"アニメ時間\":\"30\",\"ディレイ\":\"5\",\"上方レイヤー\":\"false\",\"標準のアニメ無効\":\"true\",\"アニメ内容\":\"\",\"スケール\":\"\",\"スケールターン\":\"1.5\",\"フェードイン\":\"\"}","{\"アニメ名\":\"飛び出る-速\",\"アニメ時間\":\"30\",\"ディレイ\":\"0\",\"上方レイヤー\":\"false\",\"標準のアニメ無効\":\"false\",\"アニメ内容\":\"\",\"スケール\":\"\",\"スケールターン\":\"1.8\",\"フェードイン\":\"0\"}","{\"アニメ名\":\"飛び出る-大\",\"アニメ時間\":\"30\",\"ディレイ\":\"0\",\"上方レイヤー\":\"true\",\"標準のアニメ無効\":\"true\",\"アニメ内容\":\"\",\"スケール\":\"\",\"スケールターン\":\"2\",\"フェードイン\":\"\"}"]
 * 
 * @param 基本の出現アニメ
 * @parent ポップアップアニメ
 * @desc appearAnimeBasic 個別指定しない場合のポップアップ出現時のアニメーション。出現アニメ登録したアニメ名を書く
 * @default 小さく出る
 * 
 * @param 標準のアニメ無効
 * @parent ポップアップアニメ
 * @desc noDefaultAnime 標準のダメージポップアニメを無効にする
 * @type boolean
 * @default false
 * 
 * @param ポップフォント設定
 * 
 * @param フォント
 * @parent ポップフォント設定
 * @desc font 使用するフォント。『Keke_CommonData』でフォント登録しそのフォント名を書く。空欄ならメインフォント
 * @default 
 * 
 * @param 文字サイズ
 * @parent ポップフォント設定
 * @desc fontSize ポップアップの文字サイズ。空欄ならデータベースで設定した文字サイズ。基本 28
 * @default 28
 *
 * @param 文字色
 * @parent ポップフォント設定
 * @desc fontColor ポップアップの文字色。赤, 緑, 青, 濃度。色0〜255、濃度0〜1。基本 255, 255, 255, 1
 * @default 255, 255, 255, 1
 *
 * @param 縁取り幅
 * @parent ポップフォント設定
 * @desc outWidth ポップアップの縁取り幅。5 なら 5ピクセル。基本 7
 * @default 7
 *
 * @param 縁取り色
 * @parent ポップフォント設定
 * @desc outColor ポップアップの縁取り色。赤, 緑, 青, 濃度。色0〜255、濃度0〜1。基本 0, 0, 0, 1
 * @default 0, 0, 0, 1
 *
 * @param ポップその他設定
 * 
 * @param ポップ表示時間
 * @parent ポップその他設定
 * @desc popShowTime ポップアップの表示時間。50 なら 50フレーム。基本 120
 * @default 120
 * 
 * @param ポップ行間調整
 * @parent ポップその他設定
 * @desc lineSpacePlus ポップアップの行間調整。5 なら 5ピクセル 広げ、-5 なら 5ピクセル 縮める。基本 5
 * @default 5
 * 
 * @param アイコン表示
 * @parent ポップその他設定
 * @desc showIcon ポップアップの左にステートアイコンを表示する。ステート以外には無効。基本 true
 * @type boolean
 * @default true
 *
 * @param アイコンサイズ
 * @parent ポップその他設定
 * @desc iconSize アイコンの大きさ。150 なら 150%、50 なら 50% の大きさになる。基本 80
 * @default 80
 */
 
 

//==================================================
/*~struct~popCfg:
//==================================================
 *
 * @param テキスト
 * @desc text テキスト内容。空欄ならステート名を表示。%1:表示者 %2:ステート。n で無し
 *
 * @param テキスト-敵
 * @desc text-enemy 敵の場合のテキスト内容。空欄なら通常テキストと同じ。%1:表示者 %2:ステート。n で無し
 *
 * @param 無効
 * @desc invalid ポップアップを表示しない
 * @type boolean
 * 
 * @param フォント設定
 * 
 * @param フォント
 * @parent フォント設定
 * @desc font 使用するフォント。『Keke_CommonData』でフォント登録した名を書く
 * 
 * @param 文字サイズ
 * @parent フォント設定
 * @desc fontSize ポップアップの文字サイズ。空欄だと標準サイズ。+1 で標準サイズ + 1、-1 で標準サイズ - 1
 *
 * @param 文字色
 * @parent フォント設定
 * @desc fontColor ポップアップの文字色。赤, 緑, 青, 濃度。色0〜255、濃度0〜1
 *
 * @param 縁取り幅
 * @parent フォント設定
 * @desc outWidth ポップアップの縁取り幅。5 なら 5ピクセル。+1 で 標準 + 1ピクセル、-1 で 標準 - 1ピクセル 
 *
 * @param 縁取り色
 * @parent フォント設定
 * @desc outColor ポップアップの縁取り色。赤, 緑, 青。各0〜255、濃度0〜1
 * 
 * @param 演出
 * 
 * @param 表示時間 
 * @parent 演出
 * @desc showTime ポップアップの表示時間。50 なら 50フレーム
 * 
 * @param ポップクリア
 * @parent 演出
 * @desc popClear ポップアップを初期位置に戻す(だんだん上がっていくのを最初の位置に)
 * @type boolean
 * 
 * @param アイコン表示
 * @parent 演出
 * @desc showIcon ポップアップの左にステートアイコンを表示する。ステート以外には無効
 * @type boolean
 * 
 * @param 出現アニメ
 * @parent 演出
 * @desc appearAnime 実行する出現アニメーション。出現アニメ登録したアニメ名を書く
 * 
 * @param 効果音
 * @parent 演出
 * @desc se ポップアップ時に鳴らす効果音
 */



//==================================================
/*~struct~appearAnime:
//==================================================
 * @param アニメ名
 * @desc animeName アニメーションの名前。各ポップ設定からの呼び出しに使う
 *
 * @param アニメ時間
 * @desc animeTime アニメの実行時間。5 なら 5フレーム
 * @default 15
 * 
 * @param ディレイ
 * @desc delay アニメ開始を遅らせる。5 なら 5フレーム 待ってから開始
 * @default 
 * 
 * @param 上方レイヤー
 * @desc upperLayer 通常より上のレイヤーに配置する
 * @type boolean
 * @default 
 * 
 * @param 標準のアニメ無効
 * @desc noDefaultAnime 標準のダメージポップアニメ(少し跳ねるやつ)を無効にする
 * @type boolean
 * @default 
 * 
 * @param アニメ内容
 * 
 * @param スケール
 * @parent アニメ内容
 * @desc scale 拡縮アニメ。2 なら サイズ2倍→1倍、0.5 なら サイズ0.5倍→1倍
 * @default 
 * 
 * @param スケールターン
 * @parent アニメ内容
 * @desc scaleTurn 拡縮アニメ-往復。2 なら サイズ1倍→2倍→1倍。0.5 なら サイズ1倍→0.5倍→1倍
 * @default 
 * 
 * @param フェードイン
 * @parent アニメ内容
 * @desc fadeIn 不透明度アニメ。50 なら 不透明度50→255
 * @default
 */
 


//==================================================
/*~struct~se:
//==================================================
 * @param ファイル
 * @desc file 効果音ファイル
 * @type file
 * @dir audio/se
 *
 * @param 音量
 * @desc volume 効果音の音量
 * @default 100
 *
 * @param ピッチ
 * @desc pitch 効果音のピッチ
 * @default 100
 *
 * @param 位相
 * @desc pan 効果音の位相
 * @default 0
 */

 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];
    
    
    
    //==================================================
    //--  スプライト追加 /ベーシック
    //==================================================
    
    //- 破棄付きスプライト
    function SpriteKeStpp() {
        this.initialize(...arguments);
    }

    SpriteKeStpp.prototype = Object.create(Sprite.prototype);
    SpriteKeStpp.prototype.constructor = SpriteKeStpp;

    SpriteKeStpp.prototype.destroy = function() {
        if (this.bitmap && !this.bitmap._url) { this.bitmap.destroy(); }
        if (this._texture) { Sprite.prototype.destroy.apply(this); }
    };


    
    //==================================================
    //--  文字列オート変換 /ベーシック
    //==================================================
    
    //- 文字列のハッシュ化
    function strToHash(str) {
        if (!str || !str.length) { return {}; }
        let hash = {};
        const strs = JSON.parse(str);
        let val = null;
        let val2 = null;
        for (const key in strs) {
            val = strs[key];
            if (!key || !val) { continue; }
            val2 = strToAuto(val, key);
            hash[key] = val2;
        }
        return hash;
    };
    
    
    //- 文字列のリスト化
    function strToList(str) {
        if (!str || !str.length) { return []; }
        let array = JSON.parse(str);
        return array.map((val, i) => {
            return strToAuto(val);
        });
    };
    
    
    //- 文字列の自動処理
    function strToAuto(val, key = "") {
        let val2 = null;
        let match = null;
        let end = false;
        if (!end) {
            if (val[0] == "{") {
                val2 = strToHash(val);
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "[") {
                val2 = strToList(val);
                end = true;
            }
        }
        if (!end) { val = val + ","; }
        if (!end) {
            match = val.match(/^\s*(-?\d+,\s*-?\d+,\s*-?\d+,?\s*-?\d*\.?\d*)\s*,$/);
            if (match && !val.match(/[^\d\.\-,\s]/)) {
                if (key.match(/(カラー|色|塗り)/) && !key.includes("トーン") && !key.includes("ブレンド") && !key.includes("配色") && !key.includes("着色") &&  !key.includes("フラッシュ") && !key.includes("チェンジ") &&  !key.includes("選択")) {
                    val2 = "rgba(" +  match[1] + ")";
                } else {
                    val2 = JSON.parse("[" +  match[1] + "]");
                }
                end = true;
            }
        }
        if (!end) {
            match = val.match(/(-?\d+\.?\d*),\s*/g);
            if (match && match.length >= 2 && !val.match(/[^\d\.\-,\s]/)) {
                val2 = JSON.parse("[" + match.reduce((r, s) => r + s).replace(/,$/, "") + "]");
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(true|false)\s*,/);
            if (match) {
                val2 = match[1] == "true" ? true : false;
                end = true;
            }
        }
        if (!end) {
            match = val.match(/^(-?\d+\.?\d*)\s*,/);
            if (match && !val.match(/[a-z]/)) {
                val2 = Number(match[1]); end = true;
                end = true;
            }
        }
        if (!end) {
            if (val[0] == "\"") { val = val.slice(1); }
            val2 = val.slice(0, -1);
        }
        return val2;
    };
    
    
    
    //==================================================
    //--  パラメータ受け取り
    //==================================================
    
    //- 真偽化
    function toBoolean(str) {
        if (!str) { return false; }
        const str2 = str.toString().toLowerCase();
        if (str2 == "true" || str2 == "on") { return true; }
        if (str2 == "false" || str2 == "off") { return false; }
        return Number(str);
    };

    let parameters = PluginManager.parameters(pluginName);
    
    //- ポップ設定
    const keke_addStateCfg = strToHash(parameters["ポップ設定-ステート付与"]);
    const keke_addStateCfg2 = strToHash(parameters["ポップ設定-ステート付与2"]);
    const keke_addStateCfg3 = strToHash(parameters["ポップ設定-ステート付与3"]);
    const keke_remStateCfg = strToHash(parameters["ポップ設定-ステート解除"]);
    const keke_deathCfg = strToHash(parameters["ポップ設定-戦闘不能"]);
    const keke_revivalCfg = strToHash(parameters["ポップ設定-復活"]);
    const keke_buffCfg = strToHash(parameters["ポップ設定-強化"]);
    const keke_debuffCfg = strToHash(parameters["ポップ設定-弱体"]);
    const keke_remBuffCfg = strToHash(parameters["ポップ設定-強化・弱体解除"]);
    const keke_criticalCfg = strToHash(parameters["ポップ設定-クリティカル"]);
    const keke_weekCfg = strToHash(parameters["ポップ設定-弱点属性"]);
    const keke_resistCfg = strToHash(parameters["ポップ設定-耐性属性"]);
    const keke_guardCfg = strToHash(parameters["ポップ設定-防御"]);
    const keke_avoidCfg = strToHash(parameters["ポップ設定-回避"]);
    const keke_cancelCfg = strToHash(parameters["ポップ設定-キャンセル"]);
    const keke_delayCfg = strToHash(parameters["ポップ設定-遅延"]);
    const keke_misfireCfg = strToHash(parameters["ポップ設定-不発"]);

    //- ポップアップアニメ
    const keke_appearAnimeBasicList = strToList(parameters["出現アニメ登録"]);
    const keke_appearAnimeBasic = parameters["基本の出現アニメ"];
    const keke_noDefoAnime = toBoolean(parameters["標準のアニメ無効"]);

    //- ポップフォント設定
    const keke_fontFace = parameters["フォント"];
    const keke_fontSize = Number(parameters["文字サイズ"]);
    const keke_fontColor = "rgba(" + parameters["文字色"] + ")";
    const keke_outWidth = Number(parameters["縁取り幅"]);
    const keke_outColor = "rgba(" + parameters["縁取り色"] + ")";

    //- ポップその他設定
    const keke_popShowTime = Number(parameters["ポップ表示時間"]);
    const keke_paddingOffset = Number(parameters["ポップ行間調整"]);
    const keke_showIcon = toBoolean(parameters["アイコン表示"]);
    const keke_iconSize = Number(parameters["アイコンサイズ"]);

    parameters = null;
    
    

    //==================================================
    //--  公開
    //==================================================

    //- キャンセルポップの表示(公開)
    Game_Battler.prototype.showCancelPopKeStpp = function() {
        const cfg = keke_cancelCfg;
        // ポップスプライトの形成
        createPopSprite(this, cfg);
    };


    //- 不発ポップの表示(公開)
    Game_Battler.prototype.showMisfirePopKeStpp = function() {
        const cfg = keke_misfireCfg;
        // ポップスプライトの形成
        createPopSprite(this, cfg);
    };


    //- 遅延ポップの表示(公開)
    Game_Battler.prototype.showDelayPopKeStpp = function(val) {
        const cfg = keke_delayCfg;
        // ポップスプライトの形成
        createPopSprite(this, cfg, val);
    };


    
    //==================================================
    //--  ポップスプライト
    //==================================================
    
    let popText = "";
    let popIconIndex = null;
    let popFontFace = null;
    let popFontSize = null;
    let popFontColor = null;
    let popOutW = null;
    let popOutColor = null;
    let popPadding = null;
    let popTime = null;
    let popAnime = null;
    
    //- ポップスプライトの形成
    function createPopSprite(battler, cfg, stateText, iconIndex) {
        if (!cfg || cfg["無効"]) { return; }
        // テキストを取得
        let cfgText = "";
        if (battler._enemyId) { cfgText = cfg["テキスト-敵"] || cfg["テキスト"] } else { cfgText = cfg["テキスト"]; }
        const battlerName = battler._actorId ? battler._name : battler.enemy().name;
        text = cfgText ? (cfgText.toUpperCase() == "N" ? "" : cfgText.format(battlerName, stateText)) : stateText;
        if (!text) { return; }
        let viewer = null;
        let asi = getFullAnimeAsi(battler);
        let fast = getFullAnimeStatus();
        let lastPop = {};
        // フルアニメ
        if (asi) {
            viewer = asi;
            lastPop = asi.damages[asi.damages.length - 1] || {};
            // ダメージスプライトの破棄
            if (cfg["ポップクリア"] && !(lastPop && lastPop._isStatePopKe)) {
                viewer.damages.forEach(d => setDestroyDamage(fast, d, asi));
                viewer.damages = [];
            }
        // 通常
        } else {
            // バトラースプライトの取得
            viewer = searchSpriteBattler(battler);
            if (!viewer) { return; }
            lastPop = viewer._damages[viewer._damages.length - 1] || {};
            // ダメージスプライトの破棄
            if (cfg["ポップクリア"] && !(lastPop && lastPop._isStatePopKe)) {
                viewer._damages.forEach(d => setDestroyDamage(viewer, d));
                viewer._damages = [];
            }
        }
        // ダメージスプライトの形成
        popText = text;
        popIconIndex = iconIndex && isShowIcon(cfg) ? iconIndex : 0;
        popFontFace = cfg["フォント"] || keke_fontFace;
        const eachSize = getFontSize(cfg["文字サイズ"]);
        const baseSize = getFontSize(keke_fontSize);
        popFontSize = eachSize;
        popFontColor = cfg["文字色"] || keke_fontColor || "rgba(255, 255, 255, 1)";
        popOutW = getOutWidth(cfg["縁取り幅"]);
        popOutColor = cfg["縁取り色"] || keke_outColor || "rgba(0, 0, 0, 1)";
        const sizeOffset = eachSize && baseSize ? Math.max(eachSize - baseSize, 0) : 0;
        popPadding = popFontSize + keke_paddingOffset + sizeOffset;
        popTime = cfg["表示時間"] || keke_popShowTime;
        popAnime = cfg["出現アニメ"] || keke_appearAnimeBasic;
        // 効果音の再生
        playSe(cfg["効果音"]); 
        // フルアニメの形成
        let newPop = {};
        if (viewer.isAsi) {
            fast.createDamageSprite(battler, viewer);
            newPop = asi.damages[asi.damages.length - 1] || {};
        // 通常の形成
        } else {
            viewer.createDamageSprite();
            newPop = viewer._damages[viewer._damages.length - 1] || {};
            // 画面外に出さない
            const startX = viewer.x + viewer.damageOffsetX();
            const startY = viewer.y + viewer.damageOffsetY();
            noOutScreen(newPop, newPop._widthKe, newPop._heightKe, newPop.x, newPop.y, startX, startY);
        }
        popText = "";
        popIconIndex = null;
        popFontFace = null;
        popFontSize = null;
        popFontColor = null;
        popOutW = null;
        popOutColor = null;
        popPadding = null;
        popTime = null;
        popAnime = null;
        // 最初の位置を保存
        newPop._oriXKe = newPop.x;
        newPop._oriYKe = newPop.y;
    };


    //- 効果音の再生
    function playSe(ses) {
        if (!ses || !ses.length) { return; }
        ses.forEach(se => {
            if (!se) { return; }
            AudioManager.playSe({ name:se["ファイル"], volume:se["音量"], pitch:se["ピッチ"], pan:se["位相"] });
        });
        
    };


    //- アイコン表示するか
    function isShowIcon(cfg) {
        if (cfg && cfg["アイコン表示"] != null) { return cfg["アイコン表示"]; }
        return keke_showIcon;
    };


    // ダメージポップ破棄のセット
    function setDestroyDamage(body, damage, asi) {
        const time = Math.round(damage._duration / 60 * 1000);
        setTimeout(destroyDamage, time, body, damage, asi);
    }


    // ダメージポップの破棄
    function destroyDamage(body, damageSprite, asi) {
        if (!body || !body.parent) {
            damageSprite.destroy();
            return;
        }
        body.destroyDamageSprite(damageSprite, asi);
    }
    
    
    //- ポップアップの行間調整(コア追加)
    const _Sprite_Actor_createDamageSprite = Sprite_Actor.prototype.createDamageSprite;
    Sprite_Actor.prototype.createDamageSprite = function() {
        const lastPop = this._damages[this._damages.length - 1];
        _Sprite_Actor_createDamageSprite.apply(this);
        const curPop = this._damages[this._damages.length - 1];
        if (lastPop) {
            const padding = Math.max(curPop._popPaddingKeStpp, lastPop._popPaddingKeStpp);
            if (padding) {
                curPop.y += 16 - padding;
            }
        }
    };
    
    const _Sprite_Enemy_createDamageSprite = Sprite_Enemy.prototype.createDamageSprite;
    Sprite_Enemy.prototype.createDamageSprite = function() {
        const lastPop = this._damages[this._damages.length - 1];
        _Sprite_Enemy_createDamageSprite.apply(this);
        const curPop = this._damages[this._damages.length - 1];
        if (lastPop) {
            const padding = curPop._popPaddingKeStpp || lastPop._popPaddingKeStpp;
            if (padding) {
                curPop.y += 16 - padding;
            }
        }
    };
    
    
    //- スプライトダメージ・セットアップ(コア追加)
    const _Sprite_Damage_setup = Sprite_Damage.prototype.setup;
    Sprite_Damage.prototype.setup = function(target) {
        // テキストポップの形成
        if (popText) {
            if (popText == "none") { return; }
            createTextPop(this, popText);
            // 行間と表示時間を変更
            if (popPadding) { this._popPaddingKeStpp = popPadding; }
            if (popTime) { this._duration = popTime; }
            // 出現アニメの開始
            if (popAnime) {
                startAppearAnime(this, popAnime)
            }
            // ステートポップフラグをオン
            this._isStatePopKe = true;
            return;
        }
        // ミス表示済みの時は表示しない
        const result = target.result();
        if ((result.missed || result.evaded) && result.missShowedKe) { 
            return;
        }
        _Sprite_Damage_setup.apply(this, arguments);
    };


    //- スプライトダメージポップ・更新(コア追加)
    const _Sprite_Damage_update = Sprite_Damage.prototype.update;
    Sprite_Damage.prototype.update = function() {
        // バトル終了時はすぐ消す
        if (this._isStatePopKe && BattleManager._phase == "battleEnd") {
            this._duration = 1;
        }
        // 出現アニメの更新
        if (this._isStatePopKe && updateAppearAnime(this)) {
            return;
        }
        _Sprite_Damage_update.apply(this);
    };
    
    
    //- テキストポップの形成
    function createTextPop(popSprite, text) {
        const fontSize = popSprite.fontSize();
        const ow = popSprite.outlineWidth();
        const height = fontSize + ow * 2;
        let width = measureTextWidth(text, fontSize, popSprite.fontFace(), popSprite.bitmap) + ow * 2;
        // アイコンを形成
        let iconW = 0;
        let iconH = 0;
        if (popIconIndex) {
            const anchorX = popSprite._anchorXKe != null ?  popSprite._anchorXKe :  0.5;
            const iconSprite = createIconSprite(popIconIndex);
            iconH = Math.floor(height * keke_iconSize / 100);
            iconSprite.scale.y = iconH / ImageManager.iconHeight;
            iconSprite.scale.x = iconSprite.scale.y;
            iconW = Math.floor(ImageManager.iconWidth * iconSprite.scale.x);
            width += iconW;
            iconSprite.x = -width * anchorX + iconW / 2 + ow * (0.5 - anchorX);
            iconSprite.y = -40;
            iconSprite.ry = iconSprite.y;
            popSprite.addChild(iconSprite);
            iconSprite.dy = 0;
        }
        // テキストを形成
        const textSprite = popSprite.createChildSprite(width + ow, height);
        textSprite.bitmap.drawText(text, 0, ow / 2, width, height, "center");
        textSprite.dy = 0;
        if (iconW) { textSprite.x += iconW / 2; }
        // サイズを保存
        popSprite._widthKe = width + iconW;
        popSprite._heightKe = Math.max(height, iconH);
    };
    
    
    //- 画面外に出さない
    function noOutScreen(sprite, w, h, oriX, oriY, startX, startY) {
        const overL = oriX;
        const overR = oriX + w - Graphics.width;
        const overU = oriY;
        const overD = oriY + h - Graphics.height;
        if (overL < 0) { sprite.x = oriX - overL; } else
        if (overR > 0) { sprite.x = oriX - overR; }
        if (startX) {
            if (overU < 0 || overD > 0) {
                sprite.x = startX;
                sprite.y = startY;
            }
        } else {
            if (overU < 0) { sprite.y = oriY - overU; } else
            if (overD > 0) { sprite.y = oriY - overD; }
        }
        
    };


    //- テキストポップのフォント
    const _Sprite_Damage_fontFace = Sprite_Damage.prototype.fontFace;
    Sprite_Damage.prototype.fontFace = function() {
        if (popFontFace) { return popFontFace; }
        return _Sprite_Damage_fontFace.apply(this);
    };


    //- テキストポップの文字サイズ
    const _Sprite_Damage_fontSize = Sprite_Damage.prototype.fontSize;
    Sprite_Damage.prototype.fontSize = function() {
        if (popFontSize) { return popFontSize; }
        return _Sprite_Damage_fontSize.apply(this);
    };
    
    
    //- テキストポップの文字色
    const _Sprite_Damage_damageColor = Sprite_Damage.prototype.damageColor;
    Sprite_Damage.prototype.damageColor = function() {
        if (popFontColor) { return popFontColor; }
        return _Sprite_Damage_damageColor.apply(this);
    };
    
    
    //- テキストポップの縁取り幅
    const _Sprite_Damage_outlineWidth = Sprite_Damage.prototype.outlineWidth;
    Sprite_Damage.prototype.outlineWidth = function() {
        if (popOutW) { return popOutW; }
        return _Sprite_Damage_outlineWidth.apply(this);
    };
    
    
    //- テキストポップの縁取り色
    const _Sprite_Damage_outlineColor = Sprite_Damage.prototype.outlineColor;
    Sprite_Damage.prototype.outlineColor = function() {
        if (popOutColor) { return popOutColor; }
        return _Sprite_Damage_outlineColor.apply(this);
    };
    
    
    //- フルアニメステータスの取得
    function getFullAnimeStatus() {
        if ($gameSystem.isSideView()) { return null; }
        return $gameTemp._fullAnimeStatusKe;
    };
    
    
    //- フルアニメステータスASIの取得
    function getFullAnimeAsi(battler) {
        if ($gameSystem.isSideView()) { return null; }
        if (!getFullAnimeStatus()) { return null; }
        const asi = $gameTemp.getFullAnimeStatusAsiKe(battler);
        if (!asi || !asi.faceBaseSprite || !asi.visible) { return null; }
        return asi;
    };


    //- アイコンビットマップを破棄させない
    const _Sprite_Damage_destroy = Sprite_Damage.prototype.destroy;
    Sprite_Damage.prototype.destroy = function(options) {
        for (const child of this.children) {
            if (child.bitmap && child.bitmap._url) {
                child.destroy();
            }
        }
        if (!this._texture) { return; }
        _Sprite_Damage_destroy.apply(this, arguments);
    };


    
    //==================================================
    //--  各種ポップメッセージの表示
    //==================================================
    
    
    //- ウインドウバトルログ・かかったステートの表示(コア追加)
    const _Window_BattleLog_displayAddedStates = Window_BattleLog.prototype.displayAddedStates;
    Window_BattleLog.prototype.displayAddedStates = function(target) {
        _Window_BattleLog_displayAddedStates.apply(this, arguments);
        const result = target.result();
        const states = result.addedStateObjects();
        // ステートポップの表示
        showStatePop(target, states, "add");
    };


    //- ウインドウバトルログ・除いたステートの表示(コア追加)
    const _Window_BattleLog_displayRemovedStates = Window_BattleLog.prototype.displayRemovedStates;
    Window_BattleLog.prototype.displayRemovedStates = function(target) {
        _Window_BattleLog_displayRemovedStates.apply(this, arguments);
        const result = target.result();
        const states = result.removedStateObjects();
        // ステートポップの表示
        showStatePop(target, states, "rem");
    };


    //- スクリプト中か判定(コア追加)
    let inScript = false;

    const _Game_Interpreter_command355 = Game_Interpreter.prototype.command355;
    Game_Interpreter.prototype.command355 = function() {
        inScript = true;
        setTimeout(remInScript, 0);
        return _Game_Interpreter_command355.apply(this);
    };

    function remInScript() {
        inScript = false;
    };


    //- ゲームバトラー・ステートの付与(コア追加)
    const _Game_Battler_addState = Game_Battler.prototype.addState;
    Game_Battler.prototype.addState = function(stateId) {
        if (this.isStateAddable(stateId) && inScript) {
            // ステートポップの表示
            showStatePop(this, [$dataStates[stateId]], "add");
        }
        _Game_Battler_addState.apply(this, arguments);
    };


    //- ゲームバトラー・ステートの除去
    const _Game_Battler_removeState = Game_Battler.prototype.removeState;
    Game_Battler.prototype.removeState = function(stateId) {
        if (this.isStateAffected(stateId) && inScript) {
            // ステートポップの表示
            showStatePop(this, [$dataStates[stateId]], "rem");
        }
        _Game_Battler_removeState.apply(this, arguments);
    };
    
    
    //- ステートポップの表示
    function showStatePop(target, states, type) {
        for (const state of states) {
            // メモ欄からのデータ取得
            const meta = state.meta["ステートポップ"] || state.meta["statePop"];
            let cmd = null;
            let text = "";
            if (meta) {
                const ds = meta.replace(/\s/g, "").split(",");
                cmd = ds[0];
                text = ds[1];
            }
            // コマンド 0 なら表示しない
            if (cmd == "0") { continue; }
            // テキストを取得
            const stateText = text || state.name;
            if (!stateText) { continue; }
            // 設定を取得
            let cfg = null;
            if (state.id == target.deathStateId()) {
                // 戦闘不能
                if (type == "add") {
                    cfg = keke_deathCfg;
                // 復活
                } else {
                    cfg = keke_revivalCfg;
                }
            } else {
                // ステート付与
                if (type == "add") {
                    // 表示済みならリターン
                    if (isShowedPop(target, "state", state.id)) { return; }
                    cfg = !cmd || cmd == "1" ? keke_addStateCfg : cmd == "2" ? keke_addStateCfg2 : keke_addStateCfg3;
                    // 表示済みポップを記憶
                    saveShowedPop(target, "state", state.id);
                // ステート解除
                } else {
                    cfg = keke_remStateCfg;
                }
            }
            // アイコン番号
            let iconIndex = 0;
            if (isShowIcon(cfg)) {
                iconIndex = state.iconIndex;
            }
            // ポップスプライトの形成
            createPopSprite(target, cfg, stateText, iconIndex);
        }
    };
    
    
    //- ウインドウバトルログ・かかったステートの表示(コア追加)
    const _Window_BattleLog_displayChangedBuffs = Window_BattleLog.prototype.displayChangedBuffs;
    Window_BattleLog.prototype.displayChangedBuffs = function(target) {
        _Window_BattleLog_displayChangedBuffs.apply(this, arguments);
        const result = target.result();
        // 強化ポップの表示
        showBuffPop(target, result.addedBuffs, "buff");
        // 弱体ポップの表示
        showBuffPop(target, result.addedDebuffs, "debuff");
        // 強化解除ポップの表示
        showBuffPop(target, result.removedBuffs, "remBuff");
    };
    
    
    //- バフポップの表示
    function showBuffPop(target, buffs, type) {
        if (!buffs || !buffs.length) { return; }
        for (const paramId of buffs) {
            const paramText = TextManager.param(paramId);
            const cfg = type == "buff" ? keke_buffCfg : type == "debuff" ? keke_debuffCfg : keke_remBuffCfg;
            const iconIndex = type == "buff" ? target.buffIconIndex(2, paramId) : type == "debuff" ? target.buffIconIndex(-2, paramId) : 0;
            // ポップスプライトの形成
            createPopSprite(target, cfg, paramText, iconIndex);
        }
    };

    
    //- ゲームアクション・アプリー(コア追加)
    const _Game_Action_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _Game_Action_apply.apply(this, arguments);
        const result = target.result();
        // 仮アプリー時はリターン
        if (this._isTempApplyKe) { return; }
        // 防御/回避/クリティカルの表示
        show_Guard_Avoid_Critical(target, this, result);
        // 弱点/耐性属性の表示
        showElement_Week_Resist(target, this, result);
    };


    //- 防御/回避/クリティカルの表示
    function show_Guard_Avoid_Critical(battler, action, result) {
        if (action.isForFriend() || !result || !action.item().damage.type) { return; }
        // 回避の表示
        if (result.missed || result.evaded) {
            showPopup(battler, "avoid");
            // ミス表示済みフラグをオン
            result.missShowedKe = true;
        } else {
            // 防御の表示
            if (battler.isGuard()) {
                showPopup(battler, "guard");
            }
            // クリティカルの表示
            if (result.critical) {
                showPopup(battler, "critical");
            }
        }
    };


    //- 弱点/耐性属性の表示
    function showElement_Week_Resist(battler, action, result) {
        if (action.isForFriend() || !action.item().damage.type) { return; }
        if (result.missed || result.evaded) { return; }
        const elemResult = getElementResult(battler, action);
        // 弱点属性の表示
        if (elemResult > 0) {
            showPopup(battler, "week");
        // 耐性属性の表示
        } else if (elemResult < 0) {
            showPopup(battler, "resist");
        }
    };


    //- 属性結果を取得
    function getElementResult(battler, action) {
        const elemResult = battler._elementResultKeElfc;
        if (elemResult) {
            return elemResult;
        } else {
            const elemRate = action.calcElementRate(battler);
            return elemRate > 1 ? 1 : elemRate < 1 ? -1 : 0
        }
    };
    
    
    //- ポップアップの表示
    function showPopup(battler, type) {
        // 表示済みならリターン
        if (isShowedPop(battler, type)) { return; }
        const cfg = getPopupCfg(type);
        // 表示済みポップを記憶
        saveShowedPop(battler, type);
        // ポップスプライトの形成
        createPopSprite(battler, cfg);
    };


    //- ポップアップ設定の取得
    function getPopupCfg(type) {
        switch (type) {
            case "week":
                return keke_weekCfg;
            case "resist":
                return keke_resistCfg;
            case "guard":
                return keke_guardCfg;
            case "avoid":
                return keke_avoidCfg;
            case "critical":
                return keke_criticalCfg;
        }
    };


    //- 表示済みポップを記憶
    function saveShowedPop(battler, type, stateId) {
        if (!battler._showedPopKe) { battler._showedPopKe = { state:[] }; }
        const showed = battler._showedPopKe;
        // ステート
        if (type == "state") {
            showed.state[stateId] = true;
        // その他
        } else {
            showed[type] = true;
        }
    };


    //- 表示済みポップか
    function isShowedPop(battler, type, stateId) {
        if (!battler._showedPopKe) { return; }
        const showed = battler._showedPopKe;
        // ステート
        if (type == "state") {
            return showed.state[stateId];
        // その他
        } else {
            return showed[type];
        }
    };


    //- バトルマネージャー・スタートアクション(コア追加)
    const _BattleManager_startAction = BattleManager.startAction;
    BattleManager.startAction = function() {
        _BattleManager_startAction.apply(this);
        // 表示済みポップを初期化
        initShowedPop(this._targets)
    };


    //- 表示済みポップを初期化
    function initShowedPop(battlers) {
        if (!battlers || !battlers.length) { return; }
        battlers.forEach(battler => {
            battler._showedPopKe = null;
        });
    };
    
    
    
    //==================================================
    //--  出現アニメ
    //==================================================

    //- 出現アニメの開始
    function startAppearAnime(sprite, animeName) {
        if (!animeName) { return; }
        const drift = {};
        // パラメータ
        const d = keke_appearAnimeBasicList.filter(a => a["アニメ名"] == animeName)[0];
        if (!d || d["無効"]) { return; }
        const timeMax = d["アニメ時間"] || 0;
        if (!timeMax) { return; }
        const scale = d["スケール"];
        const scaleT = d["スケールターン"];
        const opacity = d["フェードイン"];
        const delay = d["ディレイ"];
        const easing = "EO";
        // アニメ時間
        drift.timeMax = timeMax;
        drift.duration = timeMax;
        // ディレイ
        if (delay) {
            drift.delay = delay;
        }
        // スケール
        if (scale != null && scale != 1) {
            // スケールX
            drift.scaleXs = makeDrift([{ val:1, easing:easing }], scale, timeMax, "スケールX");
            sprite.scale.x = scale;
            // スケールY
            drift.scaleYs = makeDrift([{ val:1, easing:easing }], scale, timeMax, "スケールY");
            sprite.scale.y = scale;
        }
        // スケールターン
        if (scaleT != null && scaleT != 1) {
            // スケールXターン
            drift.scaleXTs = makeDrift([{ val:scaleT, easing:"TN" }], 1, timeMax, "スケールXターン");
            // スケールYターン
            drift.scaleYTs = makeDrift([{ val:scaleT, easing:"TN" }], 1, timeMax, "スケールYターン");
        }
        // 不透明度
        if (opacity != null && opacity != 255) {
            drift.opacities = makeDrift([{ val:255, easing:easing }], opacity, timeMax, "不透明度");
            sprite.opacity = opacity;
        }
        // レイヤー
        if (d["上方レイヤー"]) {
            setTimeout(childUpperLayer, 0, sprite);
        }
        // 変数セット
        sprite._driftKe = drift;
        // 標準のアニメを無効
        const noDefoAnime = d["標準のアニメ無効"] != null ? d["標準のアニメ無効"] : keke_noDefoAnime;
        if (noDefoAnime) {
            sprite._noDefoAnimeKe = true;
            sprite.children.forEach(child => {
                child.y = 0;
            });
        }
    };


    //- 標準のダメージアニメを無効(コア追加)
    const _Sprite_Damage_updateChild = Sprite_Damage.prototype.updateChild;
    Sprite_Damage.prototype.updateChild = function(sprite) {
        if (this._noDefoAnimeKe) { return; }
        _Sprite_Damage_updateChild.apply(this, arguments);
    };


    //- 上方レイヤーへのチルド
    function childUpperLayer(sprite) {
        SceneManager._scene._windowLayer.addChild(sprite);
    };


    //- 変動の作成
    function makeDrift(datas, current, time, word) {
        if (!datas || !datas.length) { return; }
        if (word == "回転角") { current %= 360; }
        let ds = [];
        // データの数だけ処理
        datas.forEach(data => {
            if (data.val == null) { return; }
            const d = {};
            d.num = data.num || 1;
            d.datas = data.datas || ["", ""];
            const extra = data.extra || "";
            d.break = extra.includes("B");
            d.jump = extra.includes("J");
            d.direction = extra.includes("D");
            d.isCos = extra.includes("C");
            d.isRandom = d.datas[1].includes("~");
            d.easing = data.easing || "E";
            d.easingRate = data.easingRate || 1;
            d.timeMax = time / d.num;
            d.duration = d.timeMax;
            d.start = roundDecimal(current, 1000000);
            d.target = Number(data.val);
            d.vol = d.target - d.start;
            d.current = d.start;
            d.end = 0;
            // 終点
            if (d.easing == "TN" || d.easing == "RD") {
                d.end = d.start;
            } else {
                d.end = d.target;
            }
            ds.push(d);
        });
        return ds;
    };


    //- 出現アニメの更新
    function updateAppearAnime(sprite) {
        if (!sprite._driftKe) { return; }
        const drift = sprite._driftKe;
        let scaling = false;
        // ディレイ
        if (drift.delay) {
            drift.delay--;
            if (!drift.delay) {
                sprite.visible = true;
            }
            return true;
        }
        // スケールX
        if (drift.scaleXs && drift.scaleXs.length) {
            let scaleXs = updateDrift(drift.scaleXs, "スケールX");
            scaleXs.forEach(v => sprite.scale.x += v);
            scaling = true;
        }
        // スケールY
        if (drift.scaleYs && drift.scaleYs.length) {
            let scaleYs = updateDrift(drift.scaleYs, "スケールY");
            scaleYs.forEach(v => sprite.scale.y += v);
        }
        // スケールXターン
        if (drift.scaleXTs && drift.scaleXTs.length) {
            let scaleXTs = updateDrift(drift.scaleXTs, "スケールXターン");
            scaleXTs.forEach(v => sprite.scale.x += v);
            scaling = true;
        }
        // スケールYターン
        if (drift.scaleYTs && drift.scaleYTs.length) {
            let scaleYTs = updateDrift(drift.scaleYTs, "スケールYターン");
            scaleYTs.forEach(v => sprite.scale.y += v);
        }
        // 不透明度
        if (drift.opacities && drift.opacities.length) {
            let opacities = updateDrift(drift.opacities, "不透明度");
            opacities.forEach(v => sprite.opacity += v);
        }
        // カウントを減らす
        drift.duration--;
        // 終了
        if (!drift.duration) {
            sprite._driftKe = null;
        }
        // スケールアニメ中の位置補正
        /*if (scaling) {
            // Y位置補正
            sprite.y = sprite._oriYKe + (sprite._heightKe * (sprite.scale.y - 1)) / 2;
            // 画面外に出さない
            sprite.x = sprite._oriXKe;
            noOutScreen(sprite, sprite._widthKe * sprite.scale.x, sprite._heightKe * sprite.scale.y, sprite._oriXKe, sprite._oriYKe);
        }*/
        return true;
    };


    //- 変動の更新
    function updateDrift(ds, word) {
        let rs= []
        // データの数だけ処理
        ds.forEach(d => {
            // カウントを減らす
            d.duration--;
            let r = 0;
            next = applyEasing(d.current, d.start, d.target, d.duration, d.timeMax, d.easing, d.easingRate);
            r = next - d.current;
            d.current = next;
            // 終了
            if (d.duration <= 0) {
                // 終了値に合わせる
                r += roundDecimal(d.end - next, 1000000);
                d.num--;
                d.duration = d.timeMax;
            }
            if (r) { rs.push(r); }
        });
        return rs;
    };



    //==================================================
    //--  イージング
    //==================================================

    //- イージングの適用
    function applyEasing(current, start, target, duration, timeMax, easing, easingRate = 1) {
        // イージングの処理
        if (easing.match(/ei|eo|e/i)) {
            return processEasing(current, target, duration + 1, timeMax, easing, easingRate);
        }
        // カービング
        if (easing.match(/tn|cg|fk|cf|rd|bk/i)) {
            return processCurving(current, start, target, duration + 1, timeMax, easing, easingRate);
        }
    };
    
    
    //- イージングの処理
    function processEasing(current, target, duration, timeMax, easing, easingRate = 1) {
        const lt = calcEasing((timeMax - duration) / timeMax, easing, easingRate);
        const t = calcEasing((timeMax - duration + 1) / timeMax, easing, easingRate);
        const start = (current - target * lt) / (1 - lt);
        return start + (target - start) * t;
    };
    
    
    //- イージングの計算
    function calcEasing(t, easing, easingRate = 1) {
        const exponent = 2 * easingRate;
        switch (easing.toUpperCase()) {
            case "EI":
                return easeIn(t, exponent);
            case "EO":
                return easeOut(t, exponent);
            case "E":
                return easeInOut(t, exponent);
            default:
                return t;
        }
    };
    
    
    //- 各イージング処理
    function easeIn(t, exponent) {
        return Math.pow(t, exponent) || 0.001;
    };
    
    function easeOut(t, exponent) {;
        return 1 - (Math.pow(1 - t, exponent) || 0.001);
    };
    
    function easeInOut(t, exponent) {
        if (t < 0.5) {
            return easeIn(t * 2, exponent) / 2;
        } else {
            return easeOut(t * 2 - 1, exponent) / 2 + 0.5;
        }
    };
    
    
    //- カービングの処理
    function processCurving(current, start, target, duration, timeMax, easing, easingRate = 1) {
        // 0 の時の処理
        if (duration <= 0) { return easing.match(/tn|rd|bk/i) ? start : target; }
        let result = 0;
        // ターン
        if (easing.toUpperCase() == "TN") {
            result = processTurn(current, start, target, duration, timeMax, easingRate);
        // チャージ
        } else if (easing.toUpperCase() == "CG") {
            result = processCharge(current, start, target, duration, timeMax, easingRate);
        // フック
        } else if (easing.toUpperCase() == "FK") {
            result = processFook(current, start, target, duration, timeMax, easingRate);
        // チャージフック
        } else if (easing.toUpperCase() == "CF") {
            result = processChargeFook(current, start, target, duration, timeMax, easingRate);
        // ラウンド
        } else if (easing.toUpperCase() == "RD") {
            result = processRound(current, start, target, duration, timeMax, easingRate);
        // バック
        }  else if (easing.toUpperCase() == "BK") {
            result = processBack(current, start, target, duration, timeMax, easingRate);
        }
        return result;
    };
    
    
    //- ターンの処理
    function processTurn(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = Math.round(timeMax / 2);
        const d2 = timeMax - d1;
        if (duration > d2) {
            result = processEasing(current, target, duration - d2, d1, "eo", easingRate);
        } else {
            result = processEasing(current, start, duration, d2, "ei", easingRate);
        }
        return result;
    };
    
    
    //- チャージの処理
    function processCharge(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = Math.round(timeMax / 3);
        const d2 = timeMax - d1;
        if (duration > d2) {
            result = processEasing(current, start + (start - target) * easingRate, duration - d2, d1, "e");
        } else {
            result = processEasing(current, target, duration, d2, "e");
        }
        return result;
    };
    
    
    //- フックの処理
    function processFook(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = Math.round(timeMax * 2 / 3);
        const d2 = timeMax - d1;
        if (duration > d2) {
            result = processEasing(current, target + (target - start) * easingRate, duration - d2, d1, "e");
        } else {
            result = processEasing(current, target, duration, d2, "e");
        }
        return result;
    };
    
    
    //- チャージフックの処理
    function processChargeFook(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = Math.round(timeMax / 4);
        const d3 = Math.round(timeMax / 4);
        const d2 = timeMax - d1 - d3;
        if (duration > (d2 + d3)) {
            result = processEasing(current, start + (start - target) * easingRate, duration - d2 - d3, d1, "e");
        } else if (duration > d3) {
            result = processEasing(current, target + (target - start) * easingRate, duration - d3, d2, "e");
        } else {
            result = processEasing(current, target, duration, d3, "e");
        }
        return result;
    };
    
    
    //- ラウンドの処理
    function processRound(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = Math.round(timeMax / 4);
        const d2 = Math.round(timeMax / 2);
        const d3 = timeMax - d1 - d2;
        if (duration > (d2 + d3)) {
            result = processEasing(current, target, duration - d2 - d3, d1, "eo");
        } else if (duration > d3) {
            result = processEasing(current, start + (start - target) * easingRate, duration - d3, d2, "e");
        } else {
            result = processEasing(current, start, duration, d3, "ei");
        }
        return result;
    };
    
    
    //- バックの処理
    function processBack(current, start, target, duration, timeMax, easingRate) {
        let result = 0;
        const d1 = 1;
        const d2 = timeMax - d1;
        if (duration > d2) {
            result = processEasing(current, target, duration - d2, d1, "e", easingRate);
        } else {
            result = processEasing(current, start, duration, d2, "e", easingRate);
        }
        return result;
    };


    //- 小数点を丸める
    function roundDecimal(val, rate) {
        const newVal = Math.floor(val* rate) / rate
        return newVal;
    };



    //==================================================
    //--  テキスト基本 /ベーシック
    //==================================================
    
    //- テキスト横幅の測定
    function measureTextWidth(text, fontSize, fontFace, bitmap) {
        let useExistingBitmap = false;
        let oriFontFace = null;
        let oriFontSize = null;
        if (bitmap) {
            useExistingBitmap = true;
            oriFontFace = bitmap.fontFace;
            oriFontSize = bitmap.fontSize;
        } else {
            bitmap = new Bitmap(1, 1);
        }
        bitmap.fontSize = fontSize || $gameSystem.mainFontSize();
        bitmap.fontFace = fontFace || $gameSystem.mainFontFace();
        const width = bitmap.measureTextWidth(text);
        if (useExistingBitmap) {
            bitmap.fontFace = oriFontFace;
            bitmap.fontSize = oriFontSize;
        } else {
            bitmap.destroy();
        }
        return width;
    };
    
    
    //- テキストバイト数
    function textBytes(text) {
        let byte = 0;
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if ((c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
                byte += 1;
            } else {
                byte += 2;
            }
        }
        return byte;
    };
    
    
    //- フォントサイズの取得
    function getFontSize(size) {
        const mainSize = keke_fontSize || $gameSystem.mainFontSize();
        if (!size) { return mainSize; }
        const sizeStr = size.toString();
        if (sizeStr.includes("+")) {
            const plus = Number(sizeStr.replace("+", ""));
            size = mainSize + plus;
        } else if (sizeStr.includes("-")) {
            const minus = Number(sizeStr.replace("-", ""));
            size = mainSize - minus;
        }
        return Number(size);
    };


    //- 縁取り幅の取得
    function getOutWidth(size) {
        const mainSize = keke_outWidth || 3;
        if (!size) { return mainSize; }
        const sizeStr = size.toString();
        if (sizeStr.includes("+")) {
            const plus = Number(sizeStr.replace("+", ""));
            size = mainSize + plus;
        } else if (sizeStr.includes("-")) {
            const minus = Number(sizeStr.replace("-", ""));
            size = mainSize - minus;
        }
        return Number(size);
    };
    
    
    
    //==================================================
    //--  スプライト基本 /ベーシック
    //==================================================
    
    //- スプライトの検索-バトラー
    function searchSpriteBattler(battler) {
        const spriteset = SceneManager._scene._spriteset;
        let result = null;
        const sprites = battler._enemyId ? spriteset._enemySprites : spriteset._actorSprites;
        for (const sprite of sprites) {
            if(!sprite._battler) { continue; }
            if ((battler._actorId && sprite._battler._actorId == battler._actorId) || (battler._enemyId && sprite._battler.index() == battler.index())) {
                result = sprite;
                break;
            }
        }
        return result;
    };



    //==================================================
    //--  アイコンスプライト /ベーシック
    //==================================================
    
    //- アイコンスプライトの形成
    function createIconSprite(iconIndex) {
        const sprite = new SpriteKeStpp();
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 1;
        const bitmap = ImageManager.loadSystem("IconSet");
        sprite.bitmap = bitmap;
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        sprite.setFrame(sx, sy, pw, ph);
        return sprite;
    };
    
})();