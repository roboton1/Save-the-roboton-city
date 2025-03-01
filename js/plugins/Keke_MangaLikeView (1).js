//=============================================================================
// Keke_MangaLikeView - マンガライクビュー
// バージョン: 2.4.0
//=============================================================================
// Copyright (c) 2021 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ 
 * @plugindesc マンガ的表現のバトルビュー
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.2.4.0】
 * マンガ的な躍動感あるバトルビュー
 * 技名表示したりセリフを喋らせたり
 *
 * ● 特徴 ●
 *
 * 変幻自在なフキダシ
 * ◎フキダシの形や色などをビューごとに自由に変えられる
 * ◎文字の大きさや色も自在に変えられる
 *
 * 技名表示
 * ◎キャラの近くに技名を表示できる
 * ◎同時に何個でも表示できる
 *
 * セリフ表示
 * ◎行動時、ダメージ時、勝利時など、色々な状況でのセリフを設定できる
 * ◎セリフを複数パターン設定したり、条件設定もでき
 * ◎セリフを各キャラ同時もしくは続けて発することができる
 * ◎効果音・ボイスを鳴らせる
 *
 *
 * ● 使い方 ●
 *
 * 推奨プラグイン
 * フロントビュー戦闘で使う場合は、
 * 『Keke_FrontViewPlus.js』との併用をお勧めしています
 * (併用しないと味方側のビューが表示されない)
 * DL先: https://www.kekeelabo.com/?i=32
 * 
 * 
 * スタイルとは
 * 大きさや色、形などのデザイン上の設定を『スタイル』と呼ぶ
 * スタイルには2種類ある
 * ◎テキストスタイル
 *   テキストのデザイン設定
 * ◎ベーススタイル
 *   テキスト背景(フキダシ)のデザイン設定
 *
 *
 * コモンスタイル
 * => プラグインパラメータ → ●コモンスタイル
 *   共用スタイル。ここでスタイルを作り、各セリフに適用していく
 * ◎適用のしかた
 *   コモンスタイルの名前をスタイル欄に書く
 *
 *
 * 基本スタイル
 * => プラグインパラメータ → ●基本スタイル
 * 　セリフ種類毎に基本となるスタイルを設定する
 * 　例)
 *   戦闘開始セリフのテキストスタイルを『基本』にしたい場合
 * 　  開始セリフ → 開始テキストスタイル → 基本
 * 
 * 
 * 小窓スタイル
 * => プラグインパラメータ → ●小窓スタイル
 *   小窓のスタイルを設定する
 * 　小窓とはセリフの周りに小さく表示される部分のことで、
 * 　キャラ名や技名を表示できる
 * ◎小窓の表示内容はどこで設定するか
 *   テキストスタイル → 小窓表示
 *
 *
 * スキル/アイテム/バトラー個別にスタイルを設定
 * 　スキル/アイテム/アクター/敵キャラのメモ欄に
 * <マンガスタイル: (テキストスタイル), (ベーススタイル)>
 * 例:)
 * <マンガスタイル: 大技, ギザギザ>
 * 　テキストスタイルが『大技』、ベーススタイルが『ギザギザ』になる
 * 
 * 
 * スキル/アイテム/バトラーのビュー表示をなくす
 * 　スキル/アイテム/アクター/敵キャラのメモ欄に
 * <マンガスタイル: なし>
 * 　と書くとビューが表示されなくなる
 *
 *
 * キャラのセリフを作成
 * => プラグインパラメータ → スキルパック登録
 * 　セリフパックとはセリフの詰め合わせ
 * 　ここでセリフパックを作り、各キャラに適用していく
 * 
 * ●セリフ設定項目
 * ◎パック名
 * 　セリフパックの名前。パックの呼び出しに使う
 * ◎各セリフ内容
 * 　以下詳しく説明。必要なものだけ設定すればよい
 *
 * 【セリフ内容】
 * ◎スキルID/アイテムID
 * 　スキルセリフ/アイテムセリフ時のみ。セリフを適用する行動のID
 * 　空だとスキルなら全てのスキルに、アイテムなら全てのアイテムに適用する
 * 　まとめて指定もできる
 * 　詳しくは後述の『スキル/アイテムIDをまとめて指定』を参照
 * ◎テキスト
 * 　セリフのテキスト内容。独自の制御文字がある。詳しくは後述
 * ◎テキストスタイル、ベーススタイル
 * 　適用したいコモンスタイルの名前を記入。空欄なら基本スタイルが適用される
 * ◎表示時間
 * 　セリフの表示時間。空欄なら基本の表示時間が適用される
 * ◎ウェイト
 * 　セリフを発する前のウェイト
 * ◎効果音
 * 　効果音を鳴らす。ボイスも鳴らせる
 * ◎フラッシュ
 * 　画面をフラッシュさせる
 * ◎連結セリフ
 * 　連続して発生するセリフ
 * 　他のキャラを同時に喋らせたり、続けて別のセリフを喋らせたりするのに使う
 * 　空欄ダブルクリックで追加し、IDで対象を指定
 * 　あとは普通にセリフを入力する
 * 　※連結セリフのウェイトは * を付けると変動ウェイトになる
 * 　変動ウェイトとは、連結セリフの順番によって値が変わるウェイト
 * 　変動ウェイトが *30 で 2番目 の連結セリフなら、30×2=60 のウェイトがかかる
 * ◎適用確率
 * 　セリフが採用される確率
 * ◎適用条件
 * 　セリフを言う条件。JS式で好きな条件を記述できる
 * ◎表示方向
 * 　セリフをキャラの上に表示するか、下に表示するか
 * 　空欄ならプラグインパラメータの設定に従う
 * 
 * ●セリフパックをキャラに適用
 * 　アクター、敵キャラのメモ欄に
 * <セリフパック: (パック名)>
 * 例)
 * <セリフパック: プリシア>
 * 　名が『プリシア』のセリフパックを適用する
 * 
 * ●ゲーム中にセリフパックを変更
 * => プラグインコマンド → セリフパック変更
 * 　セリフをパックごと、つまりまとめて変更する
 * 
 * ●ゲーム中にセリフ内容を変更
 * => プラグインコマンド → セリフ変更
 * 　セリフを項目ごとに変更できる
 * 　開始セリフだけ変更、スキルセリフだけ変更など
 *
 *
 * 【補足1】スキル/アイテムIDをまとめて指定
 * 1, 2, 3
 * => 1, 2, 3 を指定
 * 1~3, 4, 5
 * => 1, 2, 3, 4, 5 を指定
 *
 *
 * 【補足2】セリフ制御文字
 * \fs[値]
 * 　文字サイズ。24 なら文字サイズ 24、+2 なら基本のサイズ + 2
 * 　空欄なら基本サイズ
 * \c[色番号] もしくは \c[赤, 緑, 青, 濃度] 
 * 　文字色。17 なら 17番 の色を使用。0, 0, 0, 1 なら 赤0、緑0、青0、濃度 1
 * 　空欄なら基本色。色は 0〜255、濃度は 0〜1
 * \fb[0/1]
 * 　フォントボールド。1 でボールド有効、0 で無効
 * \fi[0/1]
 * 　フォントイタリック。1 でイタリック有効、0 で無効
 * \ow[値]
 * 　縁取り幅。5 なら縁取り幅 5、+2 なら基本の縁取り幅 + 2
 * 　空欄なら基本サイズ。ow は outWidth の略
 * \oc[赤, 緑, 青, 濃度]
 * 　縁取り色。17 なら 17番 の色を使用。0, 0, 0, 1 なら 赤0、緑0、青0、濃度 1
 * 　空欄なら基本色。色は 0〜255、濃度は 0〜1。oc は outColorの略
 * \cl
 * 　フォントクリア。文字サイズや文字色など、全てのフォント設定を基本値に戻す
 * \act
 * 　スキル/アイテムの名前を取得する
 * 　\actを使う！ でポーションを使った場合「ポーションを使う！」
 * \self
 * 　セリフの喋り手の名前を取得する
 * 　この\self様が！ をプリシアが喋った場合「このプリシア様が！」
 * \n
 * 　改行
 * 
 * 
 * 【補足3】セリフ条件式 
 * a
 * セリフを発するバトラー
 * s[番号]
 * スイッチ。s[1] なら 1番 のスイッチ
 * v[番号]
 * 変数の値。v[1] なら 1番 の変数
 * 
 *
 * 【補足4】複数パターンのセリフを設定
 * 条件式 \rd[値] を使う
 * 開始セリフを3パターン用意する場合
 * 「いくぞ！」　条件: \rd[33]
 * 「雑魚が！」　条件: \rd[33]
 * 「滅ぼす！」
 * 33%の確率 で「いくぞ！」になり、ならなかった場合、
 * 33%の確率で「雑魚が！」になり、ならなかった場合、
 * 「滅ぼす！」になる
 * 
 * 
 * 【補足5】行動セリフの一括設定
 * ◎ID0 だと全てのスキル/アイテムにセリフが適用される
 * ◎\act でスキル/アイテム名を取得できる
 * これらを利用し、たとえばアイテムセリフに
 * ID0　「\actを使うわ！」
 * と入力すると、ポーションを使えば
 * 「ポーションを使うわ！」
 * スライミュラントを使えば
 * 「スライミュラントを使うわ！」
 * となり、まとめてセリフを設定することができる
 *
 * 個別に設定したいセリフもある場合は、一括設定より上に入力する
 * ID15　「エリクサー使っちゃう！」
 * ID0　「\actを使うわ！」
 * ID15のアイテムの場合は上、それ以外は下となる
 * ※セリフは上から走査されるため、
 * 　一番上に一括設定を置くと全てそれが採用されるので注意
 *
 *
 * 即時セリフ
 * => プラグインコマンド → 次のセリフ
 * 　セリフを即座に喋らせることができる
 * 
 * 
 * 次のセリフ
 * => プラグインコマンド → 次のセリフ
 * 　次の行動時のセリフを指定できる
 * 
 *
 * ● 利用規約 ●
 * MITライセンスのもと、好きに使ってくれて大丈夫です
 *
 *
 *
 * Manga-like lively battle view
 * Display technique names and speak lines
 *
 * ● Features ●
 *
 *  Phantasmagoric balloons
 * ◎ You can freely change the shape and color of the balloon for each view.
 * ◎ You can freely change the size and color of the characters.
 *
 *  Technique name display
 * ◎ You can display the name of the technique near the character
 * ◎ You can display any number of items at the same time.
 *
 *  Dialogue display
 * ◎ You can set lines for various situations such as action, damage,
 *   and victory.
 * ◎ You can set multiple patterns of lines and set conditions.
 * ◎ Lines can be issued for each character at the same time
 *   or in succession.
 * ◎ Sound effects and voices can be played
 *
 *
 * ● How to use ●
 *
 * What is Style?
 * Design settings such as size, color, and shape are called "styles"
 * There are two types of styles
 * ◎ Text style
 *   Text design settings
 * ◎ Base style
 *   Text background (balloon) design settings
 *
 *
 *  Recommended plug-ins
 * When used in front view combat,
 * Recommended to use with "Keke_FrontViewPlus.js"
 * (If you don't use it together,
 *  you won't be able to see the friendly side view)
 * DL destination: https://www.kekeelabo.com/?i=32
 * 
 * 
 *  Common style
 * => plug-in parameter → common style
 *   Shared style. Create a style here and apply it to each line
 * ◎ How to apply
 *   Write the name of the common style in the style column
 *
 *
 *  Basic style
 * => Plugin parameters → Basic style
 *   Set the basic style for each serif type
 * Example)
 * If you want the text style of the battle start line to be "basic"
 *   Start serif → Start text style → Basic
 *
 *
 *  Small window style
 * => Plugin parameter → Small window style
 *   set the style of the window
 *   A small window is the part that is displayed small around the dialogue,
 *   Character name and technique name can be displayed
 * ◎Where to set the display contents of the small window?
 *   Text style → small window display
 *
 *
 *  Set the style for each skill/item/batter
 *   In the skill/item/actor/enemy memo field
 * <mangaStyle: (text style), (base style)>
 * example: 
 * <mangaStyle: Owaza, Jagged>
 * 　The text style is "Owaza" and the base style is "Jagged"
 *
 *
 *  Remove skill/item/battler view display
 * In the skill/item/actor/enemy memo field
 * <mangaStyle: none>
 *   If you write, the view will not be displayed
 * 
 * 
 *  Create character lines
 * => plugin parameters → skill pack registration
 *   A line pack is an assortment of lines
 *   Create a dialogue pack here and apply it to each character
 *
 * ●Dialogue setting items
 * ◎ packName
 *   The name of the dialogue pack. used to call the pack
 * ◎ Contents of each line
 *   Detailed explanation below. Set only what you need
 *
 * [Dialogue content]
 * ◎Skill ID/Item ID
 *   Only during skill lines/item lines.
 *   ID of the action to apply the dialogue to
 *   If empty, apply to all skills for skills, and to all items for items
 * 　Can also be specified collectively.
 *   For details, see "Specify skill/item IDs together" below.
 * ◎ Text
 * 　Text content of dialogue. Has its own control characters.
 *   See below for details
 * ◎ Text style, base style
 *   Write the name of the common style you want to apply.
 *   If blank, the basic style will be applied.
 * ◎ Display time
 *   Display time of lines. If blank, default display time will be applied
 * ◎ Weight
 * 　Wait before issuing a line
 * ◎ Sound effects
 *   Play a sound effect. You can also have a voice
 * ◎ Flash
 *   Flash the screen
 * ◎ Concatenated lines
 *   Consecutive dialogue
 * 　Used to make other characters speak at the same time,
 *   or to make other characters speak in succession
 *   Add by double-clicking the blank and specify the target by ID
 *   After that, enter the lines normally
 * 　※ The weight of the concatenated dialogue becomes a variable weight
 *     by adding
 * 　　A variable weight is a weight whose value changes depending
 *     on the order of connected lines
 * 　　If the variable weight is *30 and it is the second connected serif,
 *     it will take a weight of 30 × 2 = 60
 * ◎ Applicability probability
 *   Probability that the dialogue will be adopted
 * ◎ Applicable conditions
 * 　Conditions for saying lines.
 *   You can write your favorite conditions in JS expressions
 * 　There is a unique conditional expression. See below for details
 * ◎ Display direction
 * 　Whether to display the lines above or below the character
 *   If blank, follow the plug-in parameter setting
 *
 * ● Apply the dialogue pack to the character
 * 　In the memo field of the actor and the enemy character
 * <serifPack: (Pack Name)>
 * example)
 * <serifPack: Priscilla>
 *   Applies a dialogue pack whose first name is "Priccia"
 *
 * ● Change dialogue pack during game
 * => Plugin command → change dialogue pack
 *   Change lines for each pack, that is, all at once
 *
 * ●Change the lines during the game
 * => plug-in command → change dialogue
 *   You can change the dialogue for each item
 *   Change only the opening line, change only the skill line, etc.
 *
 *
 * [Supplement 1] Specify all skill/item IDs
 * one two three
 *   => specify 1, 2, 3
 * 1~3, 4, 5
 *   => specify 1, 2, 3, 4, 5
 *
 *
 * [Supplement 2] Serif control characters
 * \fs[value]
 *   font size. 24 means font size 24, +2 means base size + 2
 *   Basic size if left blank
 * \c[color number] or \c[red, green, blue, density]
 *   Letter color. If it's 17, use the 17th color.
 *   If 0, 0, 0, 1 then red 0, green 0, blue 0, density 1
 * 　Basic color if blank. Color is 0-255, Density is 0-1
 * \fb[0/1]
 * 　Font Bold. 1 enables bold, 0 disables
 * \fi[0/1]
 * 　Font italic. 1 to enable italic, 0 to disable
 * \ow[value]
 *   Border width. 5 is border width 5, +2 is base border width + 2
 *   Basic size if left blank. ow stands for outWidth
 * \oc[red, green, blue, intensity]
 *   Border color. If it's 17, use the 17th color.
 *   If 0, 0, 0, 1 then red 0, green 0, blue 0, density 1
 *   Basic color if blank.Color is 0-255, Density is 0-1. oc stands for outColor
 * \cl
 * 　Font clear. Restores all font settings, such as font size and font color
 *   to their default values.
 * \act
 *   Acquire the name of the skill/item
 *   Use \act! If you use a potion with "Use a potion!"
 * \self
 *   Acquire the name of the speaker of the dialogue
 *   This \self-sama! When Priscilla speaks, "This Priscilla-sama!"
 * \n
 *   new line
 *
 *
 * [Supplement 3] Dialogue conditional expression
 * a
 *   Battler speaking dialogue
 * s[number]
 *   switch. s[1] is switch number 1
 * v[number]
 * 　Variable value. v[1] is the 1st variable
 *
 *
 * [Supplement 4] Set multiple patterns of lines
 * use conditional expression \rd[value]
 * When preparing 3 patterns of opening lines
 * "Let's go!" Condition: \rd[33]
 * "Minor fish!" Condition: \rd[33]
 * "Destroy!"
 * 33% chance of "Let's go!"
 * There is a 33% chance of getting "Minor fish!
 * "Become "Destroy!"
 *
 *
 * [Supplement 5] Batch setting of action lines
 * ◎ With ID 0, lines are applied to all skills/items
 * ◎ You can get the skill/item name with \act
 * Using these, for example, in item dialogue
 * ID0 "I'll use \act!"
 * If you type * , using the potion will
 * "Use potions!"
 * With Slei Mullant
 * "I'll use the Slei Mullant!"
 * , and you can set the lines all at once
 *
 * If there are lines that you want to set individually,
 *   enter them above the batch setting
 * ID15 "I'm going to use the elixir!"
 * ID0 "I'll use \act!"
 * Top for items with ID 15, bottom otherwise
 * ※ Because the lines are scanned from above,
 *   Note that if you put a batch setting at the top, it will all be adopted
 *
 *
 *  Immediate lines
 * => plugin command → next line
 * 　The line can be made to speak immediately
 *
 *
 *  Next lines
 * => plugin command → next line
 * 　You can specify the dialogue for the next action
 *
 *
 * ● Terms of Use ●
 * Feel free to use it however you like under the MIT license.
 * 
 * 
 * 
 * @param セリフパック登録
 * @desc serifPackMaking セリフパックを登録する。登録したパック名で呼び出せる
 * @type struct<serifPack>[]
 * @default []
 *
 * @param スタイル登録
 *
 * @param テキストスタイル登録
 * @parent スタイル登録
 * @desc textStyleMaking テキストスタイルを登録する。登録したスタイル名で呼び出せる
 * @type struct<textStyle>[]
 * @default ["{\"スタイル名\":\"基本\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"28\",\"文字色\":\"255, 255, 255, 1\",\"縁取り幅\":\"7\",\"縁取り色\":\"0, 0, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"強め\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"30\",\"文字色\":\"255, 255, 255, 1\",\"縁取り幅\":\"8\",\"縁取り色\":\"0, 0, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"強調\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"30\",\"文字色\":\"0, 0, 0, 1\",\"縁取り幅\":\"8\",\"縁取り色\":\"255, 255, 96, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"叫び\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"32\",\"文字色\":\"0, 0, 0, 1\",\"縁取り幅\":\"8\",\"縁取り色\":\"255, 255, 96, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"怖い\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"28\",\"文字色\":\"255, 255, 255, 1\",\"縁取り幅\":\"8\",\"縁取り色\":\"192, 0, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"行動\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"30\",\"文字色\":\"255, 255, 160, 1\",\"縁取り幅\":\"7\",\"縁取り色\":\"48, 0, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"回復\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"30\",\"文字色\":\"0, 255, 224, 1\",\"縁取り幅\":\"7\",\"縁取り色\":\"0, 0, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"ダメージ\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"28\",\"文字色\":\"192, 0, 0, 1\",\"縁取り幅\":\"7\",\"縁取り色\":\"255, 255, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"戦闘不能\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"30\",\"文字色\":\"192, 0, 0, 1\",\"縁取り幅\":\"7\",\"縁取り色\":\"255, 255, 0, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"超必殺\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"36\",\"文字色\":\"255, 0, 0, 1\",\"縁取り幅\":\"10\",\"縁取り色\":\"255, 255, 255, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}","{\"スタイル名\":\"必殺\",\"有効\":\"true\",\"フォント\":\"\",\"文字サイズ\":\"32\",\"文字色\":\"255, 0, 0, 1\",\"縁取り幅\":\"8\",\"縁取り色\":\"255, 255, 255, 1\",\"揃え\":\"left\",\"小窓表示\":\"キャラ名\",\"アイコン表示\":\"true\",\"語頭\":\"\",\"語尾\":\"！\"}"]
 *
 * @param ベーススタイル登録
 * @parent スタイル登録
 * @desc baseStyleMaking ベーススタイルを登録する。登録したスタイル名で呼び出せる
 * @type struct<baseStyle>[]
 * @default ["{\"スタイル名\":\"ノーマル\",\"有効\":\"true\",\"余白X\":\"8\",\"余白Y\":\"8\",\"不透明度\":\"192\",\"カラー\":\"128, 128, 128\",\"縁取り幅\":\"2\",\"縁取り色\":\"0, 0, 0, 1\",\"フォーム\":\"スクエア\",\"変形\":\"24\",\"吹き出しツノ\":\"8\",\"…ツノずらしX\":\"\",\"…ツノずらしY\":\"\",\"ずらしX\":\"\",\"ずらしY\":\"\",\"スキン\":\"\"}","{\"スタイル名\":\"シャウト\",\"有効\":\"true\",\"余白X\":\"20\",\"余白Y\":\"15\",\"不透明度\":\"192\",\"カラー\":\"128, 128, 128\",\"縁取り幅\":\"5\",\"縁取り色\":\"0, 0, 0, 1\",\"フォーム\":\"ギザギザ\",\"変形\":\"0\",\"吹き出しツノ\":\"\",\"…ツノずらしX\":\"\",\"…ツノずらしY\":\"\",\"ずらしX\":\"\",\"ずらしY\":\"\",\"スキン\":\"\"}","{\"スタイル名\":\"ダイヤ\",\"有効\":\"true\",\"余白X\":\"30\",\"余白Y\":\"15\",\"不透明度\":\"192\",\"カラー\":\"128, 128, 128\",\"縁取り幅\":\"3\",\"縁取り色\":\"0, 0, 0, 1\",\"フォーム\":\"ダイヤ\",\"変形\":\"0\",\"吹き出しツノ\":\"\",\"…ツノずらしX\":\"\",\"…ツノずらしY\":\"\",\"ずらしX\":\"\",\"ずらしY\":\"-8\",\"スキン\":\"\"}"]
 *
 * @param 基本スタイル設定
 * @parent スタイル登録
 * @desc styleBasicCfg セリフ種目ごとの基本スタイル。個別にスタイルを指定しない場合これが適用される
 * @type struct<serifBasicCfg>
 * @default {"開始":"","開始テキストスタイル":"基本","開始ベーススタイル":"ノーマル","開始無効":"false","入力":"","入力テキストスタイル":"基本","入力ベーススタイル":"ノーマル","入力無効":"true","行動":"","行動テキストスタイル":"行動","行動ベーススタイル":"ノーマル","行動無効":"","ダメージ":"","ダメテキストスタイル":"ダメージ","ダメベーススタイル":"ノーマル","ダメージ無効":"true","回復":"","回復テキストスタイル":"回復","回復ベーススタイル":"ノーマル","回復無効":"true","戦闘不能":"","倒れテキストスタイル":"戦闘不能","倒れベーススタイル":"ノーマル","倒れ無効":"","ステート":"","STテキストスタイル":"基本","STベーススタイル":"ノーマル","ステート無効":"true","勝利":"","勝利テキストスタイル":"基本","勝利ベーススタイル":"ノーマル","勝利無効":"","連結":"","連結テキストスタイル":"行動","連結ベーススタイル":"ノーマル","連結無効":""}
 *
 * @param 小窓スタイル
 *
 * @param 小窓テキストスタイル
 * @parent 小窓スタイル
 * @desc miniWindowTextStyle 小窓のテキストスタイル
 * @type struct<miniTextStyle>
 * @default {"有効":"true","フォント":"","文字サイズ":"24","文字色":"96, 255, 255, 1","縁取り幅":"4","縁取り色":"0, 0, 0, 1","揃え":"center","語頭":"","語尾":""}
 *
 * @param 小窓ベーススタイル
 * @parent 小窓スタイル
 * @desc miniWindowBaseStyle 小窓のベーススタイル
 * @type struct<miniBaseStyle>
 * @default {"有効":"true","余白X":"0","余白Y":"0","不透明度":"192","カラー":"128, 128, 128","縁取り幅":"","縁取り色":"0, 0, 0, 1","フォーム":"縦アーモンド","変形":"0","配置方向":"左上","ずらしX":"","ずらしY":"","スキン":""}
 *
 * @param 表示時間/表示位置
 *
 * @param 表示時間設定
 * @parent 表示時間/表示位置
 * @desc showTimeCfg セリフ種目ごとの表示時間。個別に時間を指定しなければこれが適用される
 * @type struct<viewTimeCfg>
 * @default {"開始":"120","開始ディレイ":"30","行動":"0","ダメージ":"40","回復":"40","戦闘不能":"80","ステート":"60","連結":"60"}
 *
 * @param 表示位置-味方
 * @parent 表示時間/表示位置
 * @desc showPos-party 味方のビューの表示位置設定
 * @type struct<posCfg>
 * @default {"表示方向":"上","ずらしX":"","ずらしY":"","ツノなし":""}
 *
 * @param 表示位置-敵
 * @parent 表示時間/表示位置
 * @desc showPos-troop 敵のビューの表示位置設定
 * @type struct<posCfg>
 * @default {"表示方向":"上","ずらしX":"","ずらしY":"","ツノなし":""}
 *
 * @param 表示位置-勝利
 * @parent 表示時間/表示位置
 * @desc showPos-victory 勝利時のビューの表示位置設定
 * @type struct<posCfg>
 * @default {"表示方向":"上","ずらしX":"","ずらしY":"","ツノなし":""}
 *
 * @param 表示その他設定
 *
 * @param バトラーと移動
 * @parent 表示その他設定
 * @desc viewMove ビューをバトラーに合わせて移動させるか
 * @type boolean
 * @default true
 * 
 * @param 防御は表示しない
 * @parent 表示その他設定
 * @desc guardNoView 防御時はビューを表示しない
 * @type boolean
 * @default true
 * 
 * @param 開閉アニメ
 * @parent 表示その他設定
 * @desc openCloseAnime ビューの開閉アニメ
 * @type struct<viewAnime>
 * @default {"時間":"5","方向":"横"}
 *
 * @param アイコン位置
 * @parent 表示その他設定
 * @desc iconPos アイコンの位置ずらし。5 なら右に 5ピクセル ずらす
 * @type struct<pos>
 * @default {"X":"-4","Y":""}
 *
 * @param 非表示範囲
 * @parent 表示その他設定
 * @desc noShowScope ビューを表示しない範囲。下50 なら、画面下端から 50ピクセル の範囲には表示しない
 * @type struct<noShowScope>
 * @default {"上":"0","下":"0","左":"0","右":"0"}
 *
 * @param 技名ビュー
 * 
 * @param 技名ビュー設定
 * @parent 技名ビュー
 * @desc skillNameView 技名ビューの接待
 * @type struct<nameViewCfg>
 * @default {}
 * 
 * @param その他
 *
 * @param 音量一括
 * @parent その他
 * @desc volumeLump 効果音の音量を一括で調整する。50 なら全ての効果音の音量が +50 される。基本 0
 * @default 0
 *
 * @param ピッチ一括
 * @parent その他
 * @desc pitchLump 効果音のピッチを一括で調整する。50 なら全ての効果音のピッチが +50 される。基本 0
 * @default 0
 *
 * @param 位相一括
 * @parent その他
 * @desc panLump 効果音の位相を一括で調整する。50 なら全ての効果音の位相が +50 される。基本 0
 * @default 0
 *
 *
 *
 * @command flashSerif
 * @text 即時セリフ
 * @desc instantSerif 即座に表示されるセリフ
 *
 * @arg tag
 * @text タグ
 * @desc tag 何を書いてもいい欄
 *
 * @arg actorId
 * @text アクターID
 * @desc actorId セリフセットを適用するアクターのID
 * @type actor
 *
 * @arg enemyId
 * @text 敵キャラID
 * @desc enemyId セリフセットを適用する敵キャラのID
 * @type enemy
 * 
 * @arg enemyIndex
 * @text 敵キャラインデックス
 * @desc enemyIndex セリフセットを適用する敵キャラのインデックス
 *
 * @arg serif
 * @text セリフ
 * @desc serif 表示するセリフの内容
 * @type struct<normalSerif>
 *
 *
 *
 * @command nextSerif
 * @text 次のセリフ
 * @desc nextSerif 次の行動時or勝利時に表示されるセリフ
 *
 * @arg tag
 * @text タグ
 * @desc tag 何を書いてもいい欄
 *
 * @arg actorId
 * @text アクターID
 * @desc actorId セリフセットを適用するアクターのID
 * @type actor
 * 
 * @arg enemyId
 * @text 敵キャラID
 * @desc enemyId セリフセットを適用する敵キャラのID
 * @type enemy
 *
 * @arg enemyIndex
 * @text 敵キャラインデックス
 * @desc enemyIndex セリフセットを適用する敵キャラのインデックス
 * 
 * @arg serif
 * @text セリフ
 * @desc serif 表示するセリフの内容
 * @type struct<normalSerif>
 *
 *
 *
 * @command changeSerifPack
 * @text セリフパック変更
 * @desc changeSerifPack キャラのセリフパックを変更する
 *
 * @arg actorId
 * @text アクターID
 * @desc actorId セリフパックを適用するアクターのID
 * @type actor
 *
 * @arg enemyId
 * @text 敵キャラID
 * @desc enemyId セリフパックを適用する敵キャラのID
 * @type enemy
 *
 * @arg serifPack
 * @text セリフパック
 * @desc serifPack 適用するセリフパック。セリフパック登録したパック名を記入
 *
 *
 *
 * @command serifChange
 * @text セリフ変更
 * @desc changeSerif キャラのセリフを変更する
 *
 * @arg tag
 * @text タグ
 * @desc tag 何を書いてもいい欄
 *
 * @arg actorId
 * @text アクターID
 * @desc actorId セリフセットを適用するアクターのID
 * @type actor
 *
 * @arg enemyId
 * @text 敵キャラID
 * @desc enemyId セリフセットを適用する敵キャラのID
 * @type enemy
 *
 * @arg openSerifs
 * @text 開始セリフ
 * @desc openSerifs 戦闘開始時のセリフ
 * @type struct<normalSerif>[]
 *
 * @arg inputSerifs
 * @text 入力セリフ
 * @desc inputSerifs コマンド入力時のセリフ
 * @type struct<normalSerif>[]
 *
 * @arg skillSerifs
 * @text スキルセリフ
 * @desc skillSerifs スキル使用時のセリフ
 * @type struct<skillSerif>[]
 *
 * @arg itemSerifs
 * @text アイテムセリフ
 * @desc itemSerifs アイテム使用時のセリフ
 * @type struct<itemSerif>[]
 *
 * @arg damageSerifs
 * @text ダメージセリフ
 * @desc damageSerifs ダメージ時のセリフ
 * @type struct<normalSerif>[]
 *
 * @arg healSerifs
 * @text 回復セリフ
 * @desc healSerifs 回復時のセリフ
 * @type struct<normalSerif>[]
 *
 * @arg deadSerifs
 * @text 戦闘不能セリフ
 * @desc deadSerifs 戦闘不能時のセリフ
 * @type struct<normalSerif>[]
 *
 * @arg stateSerifs
 * @text ステートセリフ
 * @desc stateSerifs 特定のステートにかかった時のセリフ
 * @type struct<stateSerif>[]
 *
 * @arg victorySerifs
 * @text 勝利セリフ
 * @desc victorySerifs 戦闘勝利時のセリフ
 * @type struct<normalSerif>[]
 */
 
 

//==================================================
/*~struct~serifPack:
//==================================================
 * @param パック名
 * @desc packName セリフパックの名前。セリフ呼び出しに使う
 *
 * @param 開始セリフ
 * @desc openSerifs 戦闘開始時のセリフ
 * @type struct<normalSerif>[]
 *
 * @param 入力セリフ
 * @desc inputSerifs コマンド入力時のセリフ
 * @type struct<normalSerif>[]
 *
 * @param スキルセリフ
 * @desc skillSerifs スキル使用時のセリフ
 * @type struct<skillSerif>[]
 *
 * @param アイテムセリフ
 * @desc itemSerifs アイテム使用時のセリフ
 * @type struct<itemSerif>[]
 *
 * @param ダメージセリフ
 * @desc damageSerifs ダメージ時のセリフ
 * @type struct<normalSerif>[]
 *
 * @param 回復セリフ
 * @desc healSerifs 回復時のセリフ
 * @type struct<normalSerif>[]
 *
 * @param 戦闘不能セリフ
 * @desc deadSerifs 戦闘不能時のセリフ
 * @type struct<normalSerif>[]
 *
 * @paramステートセリフ
 * @desc stateSerifs 特定のステートにかかった時のセリフ
 * @type struct<stateSerif>[]
 *
 * @param 勝利セリフ
 * @desc victorySerifs 戦闘勝利時のセリフ
 * @type struct<normalSerif>[]
 * 
 * @param 音量一括
 * @desc volumeLump パックの効果音の音量を一括で調整する。50 なら全ての効果音の音量が +50 される。基本 0
 * @default 0
 */
 
 
 
//==================================================
/*~struct~textStyle:
//==================================================
 * @param スタイル名
 * @desc styleName スタイルの名前。呼び出しに使う
 *
 * @param 有効
 * @desc valid テキストを有効にするか。無効なら表示しない
 * @type boolean
 * @default true
 * 
 * @param フォント
 * @desc font 使用するフォント。『Keke_CommonData』でフォント登録した名を記入
 * 
 * @param 文字サイズ
 * @desc fontSize テキストの文字サイズ。空欄だと標準サイズ。+1 で標準サイズ + 1、-1 で標準サイズ - 1。基本 24
 * @default 24
 * 
 * @param 文字色
 * @desc textColor テキストの色。(赤、緑、青、不透明度)。色0〜255、不透明度0〜1。基本 255, 255, 255, 1
 * @default 255, 255, 255, 1
 *
 * @param 縁取り幅
 * @desc outWidth テキストの縁取りの厚さ。基本 6
 * @default 6
 *
 * @param 縁取り色
 * @desc outColor テキストの縁取り色。(赤、緑、青、不透明度)。色0〜255、不透明度0〜1。基本 0, 0, 0, 1
 * @default 0, 0, 0, 1
 *
 * @param 揃え
 * @desc align テキストを中央揃えにするか、左揃えにするか、右揃えにするか。基本 left
 * @type select
 * @option left
 * @option center
 * @option right
 * @default left
 *
 * @param 小窓表示
 * @desc miniWindowShow 小窓ウインドウに何を表示するか。何も表示しないか、キャラ名か、技名か。基本 キャラ名
 * @type select
 * @option 表示しない
 * @option キャラ名
 * @option 技名
 * @default 表示しない
 * 
 * @param 小窓文字サイズ
 * @desc miniWindowFontSize 小窓ウインドウの文字サイズ。空欄だと標準サイズ。+1 で標準サイズ + 1、-1 で標準サイズ - 1。基本 キャラ
 *
 * @param アイコン表示
 * @desc showIcon 技のアイコンを表示するか
 * @type boolean
 * @default true
 *
 * @param 語頭
 * @desc headText 語頭につけるテキスト
 *
 * @param 語尾
 * @desc endText 語尾につけるテキスト
 * @default ！
 */
 
 
 
//==================================================
/*~struct~baseStyle:
//==================================================
 * @param スタイル名
 * @desc styleName スタイルの名前。呼び出しに使う
 *
 * @param 有効
 * @desc valid ベースを有効にするか。無効なら表示しない
 * @type boolean
 * @default true
 *
 * @param 余白X
 * @desc paddingX ベースの左右余白。基本 8
 * @default 8
 *
 * @param 余白Y
 * @desc paddingY ベースの上下余白。基本 8
 * @default 8
 *
 * @param 不透明度
 * @desc opacity ベースの濃度。0〜255。数値を増やすほど濃くなる。0 だと透明。基本 255
 * @default 255
 *
 * @param カラー
 * @desc color ベースの色。(赤、緑、青)。各色0〜255。基本 128, 128, 128
 * @default 128, 128, 128
 *
 * @param 縁取り幅
 * @desc outWidth ベースの縁取り幅。基本 2
 * @default 2
 *
 * @param 縁取り色
 * @desc outColor ベースの縁取り色。(赤、緑、青、濃度)。色0〜255、濃度0〜1 。基本 0, 0, 0, 1
 * @default 0, 0, 0, 1
 * 
 * @param フォーム
 * @desc form ベースの形状。スクエア・ダイヤ・ギザギザは『変形』で形を調整できる。基本 スクエア
 * @type select
 * @option スクエア
 * @option 横アーモンド
 * @option 縦アーモンド
 * @option ギザギザ
 * @option ダイヤ
 * @default スクエア
 *
 * @param 変形
 * @desc transform フォームの変形量。スクエア:角を丸く ギザギザ:0-直線 1-曲線 ダイヤ:辺を曲げる。基本 24
 * @default 24
 *
 * @param 吹き出しツノ
 * @desc baloonHorn 吹き出しのツノのサイズ。5 なら 5ピクセル。0 だと出ない。出るのはスクエアの時のみ。基本 8
 * @default 8
 * 
 * @param …ツノずらしX
 * @desc hornOffsetX ツノのXずらし幅。5 なら右に 5ピクセル ずれる
 * 
 * @param …ツノずらしY
 * @desc hornOffsetY ツノのYずらし幅。5 なら下に 5ピクセル ずれる
 *
 * @param ずらしX
 * @desc offsetX ベースのX位置ずらし。5 なら右に 5ピクセル ずれる
 *
 * @param ずらしY
 * @desc offsetY ベースのY位置ずらし。5 なら下に 5ピクセル ずれる
 *
 * @param スキン
 * @desc skin 使用するスキンとその設定
 * @type struct<skin>
 * @default {}
 */



//==================================================
/*~struct~serifBasicCfg:
//==================================================
 * @param 開始
 *
 * @param 開始テキストスタイル
 * @parent 開始
 * @desc textStyle_open 開始セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 開始ベーススタイル
 * @parent 開始
 * @desc baseStyle_open 開始セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 * 
 * @param 開始無効
 * @parent 開始
 * @desc 開始セリフを表示しない
 * @type boolean
 *
 * @param 入力
 *
 * @param 入力テキストスタイル
 * @parent 入力
 * @desc textStyle_input 入力セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 入力ベーススタイル
 * @parent 入力
 * @desc baseStyle_input 入力セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param 入力無効
 * @parent 入力
 * @desc invalid_input 入力セリフを表示しない
 * @type boolean
 *
 * @param 行動
 *
 * @param 行動テキストスタイル
 * @parent 行動
 * @desc textStyle_act 行動セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 行動ベーススタイル
 * @parent 行動
 * @desc baseStyle_act 行動セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param 行動無効
 * @parent 行動
 * @desc invalid_act 行動セリフを表示しない
 * @type boolean
 *
 * @param ダメージ
 *
 * @param ダメテキストスタイル
 * @parent ダメージ
 * @desc textStyle_damage ダメージセリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param ダメベーススタイル
 * @parent ダメージ
 * @desc baseStyle_damage ダメージセリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param ダメージ無効
 * @parent ダメージ
 * @desc invalid_damage ダメージセリフを表示しない
 * @type boolean
 *
 * @param 回復
 *
 * @param 回復テキストスタイル
 * @parent 回復
 * @desc textStyle_heal 回復セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 回復ベーススタイル
 * @parent 回復
 * @desc baseStyle_heal 回復セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param 回復無効
 * @parent 回復
 * @desc invalid_heal 回復セリフを表示しない
 * @type boolean
 *
 * @param 戦闘不能
 *
 * @param 倒れテキストスタイル
 * @parent 戦闘不能
 * @desc textStyle_dead 戦闘不能セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 倒れベーススタイル
 * @parent 戦闘不能
 * @desc baseStyle_dead 戦闘不能セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param 倒れ無効
 * @parent 戦闘不能
 * @desc invalid_dead 戦闘不能セリフを表示しない
 * @type boolean
 *
 * @param ステート
 *
 * @param STテキストスタイル
 * @parent ステート
 * @desc textStyle_state ステートセリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param STベーススタイル
 * @parent ステート
 * @desc baseStyle_state ステートセリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param ステート無効
 * @parent ステート
 * @desc invalid_state ステートセリフを表示しない
 * @type boolean
 *
 * @param 勝利
 *
 * @param 勝利テキストスタイル
 * @parent 勝利
 * @desc textStyle_victory 勝利セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 基本
 *
 * @param 勝利ベーススタイル
 * @parent 勝利
 * @desc baseStyle_victory 勝利セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 *
 * @param 勝利無効
 * @parent 勝利
 * @desc invalid_victory 勝利セリフを表示しない
 * @type boolean
 *
 * @param 連結
 *
 * @param 連結テキストスタイル
 * @parent 連結
 * @desc textStyle_chain 連結セリフの基本テキストスタイル。個別にスタイルを指定しない場合これが適用される
 * @default 行動
 *
 * @param 連結ベーススタイル
 * @parent 連結
 * @desc baseStyle_chain 連結セリフの基本ベーススタイル。個別にスタイルを指定しない場合これが適用される
 * @default スクエア
 * 
 * @param 連結無効
 * @parent 連結
 * @desc invalid_chain 連結セリフを表示しない
 * @type boolean
 */
  
  
  
//==================================================
/*~struct~miniTextStyle:
//==================================================
 * @param  有効
 * @desc valid 小窓のテキストを有効にするか。無効なら表示しない
 * @type boolean
 * @default true
 * 
 * @param フォント
 * @desc font 使用するフォント。『Keke_CommonData』でフォント登録した名を記入
 * 
 * @param 文字サイズ
 * @desc fontSize テキストの文字サイズ。空欄だと標準サイズ。+1 で標準サイズ + 1、-1 で標準サイズ - 1。基本 22
 * @default 22
 *
 * @param 文字色
 * @desc textColor テキストの色。(赤、緑、青、不透明度)。色0〜255、不透明度0〜1。基本 96, 255, 255, 1
 * @default 96, 255, 255, 1
 * 
 * @param 縁取り幅
 * @desc outWidth テキストの縁取りの厚さ。基本 4
 * @default 4
 *
 * @param 縁取り色
 * @desc outColor テキストの縁取り色。(赤、緑、青、不透明度)。色0〜255、不透明度0〜1。基本 0, 0, 0, 1
 * @default 0, 0, 0, 1
 * 
 * @param 揃え
 * @desc align テキストを中央揃えにするか、左揃えにするか、右揃えにするか。基本 center 
 * @type select
 * @option left
 * @option center
 * @option right
 * @default center
 *
 * @param 語頭
 * @desc headText 語頭につけるテキスト
 *
 * @param 語尾
 * @desc endText 語尾につけるテキスト
 */
 
 
 
//==================================================
/*~struct~miniBaseStyle:
//==================================================
 * @param  有効
 * @desc valid 小窓のベースを有効にするか。無効なら表示しない
 * @type boolean
 * @default true
 *
 * @param 余白X
 * @desc paddingX ベースの左右余白。基本 0
 * @default 0
 *
 * @param 余白Y
 * @desc paddingY ベースの上下余白。基本 0
 * @default 0
 *
 * @param 不透明度
 * @desc opacity ベースの濃度。0〜255。数値を増やすほど濃くなる。0 だと透明。基本 192
 * @default 192
 *
 * @param カラー
 * @desc color ベースの色。(赤、緑、青)。各色0〜255。基本 128, 128, 128
 * @default 128, 128, 128
 *
 * @param 縁取り幅
 * @desc outWidth ベースの縁取りの厚さ。空欄なら本体のベース縁取り幅の半分。基本 空欄
 * @default 
 *
 * @param 縁取り色
 * @desc outColor ベースの縁取り色。(赤、緑、青、不透明度)。色0〜255、不透明度0〜1。基本 0, 0, 0, 1
 * @default  0, 0, 0, 1
 * 
 * @param フォーム
 * @desc form ベースの形状。スクエア・ギザギザ・ダイヤは『変形』で形を調整できる。基本 縦アーモンド
 * @type select
 * @option スクエア
 * @option 横アーモンド
 * @option 縦アーモンド
 * @option ギザギザ
 * @option ダイヤ
 * @default 縦アーモンド
 *
 * @param 変形
 * @desc transform フォームの変形量。スクエア:角を丸く ギザギザ:0-直線 1-曲線 ダイヤ:辺を曲げる。基本 0
 * @default 0
 *
 * @param 配置方向
 * @desc putDirection 名前の配置方向。左上、左下、右上、右下のどれか。基本 左上
 * @type select
 * @option 左上
 * @option 左下
 * @option 右上
 * @option 右下
 * @default 左上
 *
 * @param ずらしX
 * @desc offsetX ベースのX位置ずらし。5 なら右に 5ピクセル ずれる
 *
 * @param ずらしY
 * @desc offsetY ベースのY位置ずらし。5 なら下に 5ピクセル ずれる
 *
 * @param スキン
 * @desc skin 使用するスキンとその設定
 * @type struct<skin>
 */
  
  

//==================================================
/*~struct~normalSerif:
//==================================================
 * @param タグ
 * @desc tag 何を書いてもいい欄
 *
 * @param テキスト
 * @desc text セリフのテキスト内容
 * \self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキストスタイル
 * @desc textStyle セリフのテキストスタイル
 *
 * @param ベーススタイル
 * @desc baseStyle セリフのベーススタイル
 *
 * @param 表示時間
 * @desc showTime セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示。w を付けるとセリフ表示終了までウェイト
 *
 * @param ウェイト
 * @desc wait セリフを発する前のウェイト。5 なら 5フレーム 待つ
 *
 * @param 効果音
 * @desc SE セリフと共に鳴らす効果音。ボイスも鳴らせる
 * @type struct<se>[]
 *
 * @param フラッシュ
 * @desc flash 画面をフラッシュさせる
 * @type struct<flash>
 *
 * @param 連結セリフ
 * @desc chainSerif 連続して発生するセリフ。空欄ダブルクリックで追加、IDで対象指定してセリフを入力する
 * @type struct<chainSerif>[]
 *
 * @param 適用確率
 * @desc appltRate セリフが適用される確率。50 なら 50%。基本 100
 *
 * @param 適用条件
 * @desc applyCondition セリフが適用される条件。js式で記述
 * a:話者 s:スイッチ v:変数 
 * @type multiline_string
 * 
 * @param 表示方向
 * @desc putDirection セリフをキャラの上に表示するか、下に表示するか。基本 上
 * @type select
 * @option 上
 * @option 下
 */
  
  
  
//==================================================
/*~struct~skillSerif:
//==================================================
 * @param タグ
 * @desc tag 何を書いてもいい欄
 *
 * @param スキルID
 * @desc skillId セリフを適用するスキルのID。1,2 と複数指定、1~3 とまとめて指定も可能
 * @type skill
 *
 * @param テキスト
 * @desc text セリフのテキスト内容
 * \self:喋り手名　\n:改行
 * @type multiline_string
 * 
 * @param テキスト(カットイン)
 * @desc text カットイン時のセリフのテキスト内容。『keke_MangaLikeCutin』が必要。\self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキストスタイル
 * @desc textStyle セリフのテキストスタイル
 *
 * @param ベーススタイル
 * @desc baseStyle セリフのベーススタイル
 *
 * @param 表示時間
 * @desc showTime セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示。w を付けるとセリフ表示終了までウェイト
 *
 * @param ウェイト
 * @desc wait セリフを発する前のウェイト。5 なら 5フレーム 待つ
 *
 * @param 効果音
 * @desc SE セリフと共に鳴らす効果音。ボイスも鳴らせる
 * @type struct<se>[]
 *
 * @param フラッシュ
 * @desc flash 画面をフラッシュさせる
 * @type struct<flash>
 *
 * @param 連結セリフ
 * @desc chainSerif 連続して発生するセリフ。空欄ダブルクリックで追加、IDで対象指定してセリフを入力する
 * @type struct<chainSerif>[]
 *
 * @param 適用確率
 * @desc appltRate セリフが適用される確率。50 なら 50%。基本 100
 *
 * @param 適用条件
 * @desc applyCondition セリフが適用される条件。js式で記述
 * a:話者 s:スイッチ v:変数 
 * @type multiline_string
 * 
 * @param 表示方向
 * @desc putDirection セリフをキャラの上に表示するか、下に表示するか。基本 上
 * @type select
 * @option 上
 * @option 下
 */
  
  
  
//==================================================
/*~struct~itemSerif:
//==================================================
 * @param タグ
 * @desc tag 何を書いてもいい欄
 *
 * @param アイテムID
 * @desc itemId セリフを適用するアイテムのID。1,2 と複数指定、1~3 とまとめて指定も可能
 * @type item
 *
 * @param テキスト
 * @desc text セリフのテキスト内容
 * \self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキスト(カットイン)
 * @desc text カットイン時のセリフのテキスト内容。『keke_MangaLikeCutin』が必要。\self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキストスタイル
 * @desc textStyle セリフのテキストスタイル
 *
 * @param ベーススタイル
 * @desc baseStyle セリフのベーススタイル
 *
 * @param 表示時間
 * @desc showTime セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示。w を付けるとセリフ表示終了までウェイト
 *
 * @param ウェイト
 * @desc wait セリフを発する前のウェイト。5 なら 5フレーム 待つ
 *
 * @param 効果音
 * @desc SE セリフと共に鳴らす効果音。ボイスも鳴らせる
 * @type struct<se>[]
 *
 * @param フラッシュ
 * @desc flash 画面をフラッシュさせる
 * @type struct<flash>
 *
 * @param 連結セリフ
 * @desc chainSerif 連続して発生するセリフ。空欄ダブルクリックで追加、IDで対象指定してセリフを入力する
 * @type struct<chainSerif>[]
 *
 * @param 適用確率
 * @desc appltRate セリフが適用される確率。50 なら 50%。基本 100
 *
 * @param 適用条件
 * @desc applyCondition セリフが適用される条件。js式で記述
 * a:話者 s:スイッチ v:変数 
 * @type multiline_string
 * 
 * @param 表示方向
 * @desc putDirection セリフをキャラの上に表示するか、下に表示するか。基本 上
 * @type select
 * @option 上
 * @option 下
 */
 
 
 
//==================================================
/*~struct~stateSerif:
//==================================================
 * @param タグ
 * @desc tag 何を書いてもいい欄
 *
 * @param ステートID
 * @desc stateId セリフを適用するステートのID。1,2 と複数指定、1~3 とまとめて指定も可能
 * @type state
 *
 * @param テキスト
 * @desc text セリフのテキスト内容
 * \self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキストスタイル
 * @desc textStyle セリフのテキストスタイル
 *
 * @param ベーススタイル
 * @desc baseStyle セリフのベーススタイル
 *
 * @param 表示時間
 * @desc showTime セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示。w を付けるとセリフ表示終了までウェイト
 *
 * @param ウェイト
 * @desc wait セリフを発する前のウェイト。5 なら 5フレーム 待つ
 *
 * @param 効果音
 * @desc SE セリフと共に鳴らす効果音。ボイスも鳴らせる
 * @type struct<se>[]
 *
 * @param フラッシュ
 * @desc flash 画面をフラッシュさせる
 * @type struct<flash>
 *
 * @param 連結セリフ
 * @desc chainSerif 連続して発生するセリフ。空欄ダブルクリックで追加、IDで対象指定してセリフを入力する
 * @type struct<chainSerif>[]
 *
 * @param 適用確率
 * @desc appltRate セリフが適用される確率。50 なら 50%。基本 100
 *
 * @param 適用条件
 * @desc applyCondition セリフが適用される条件。js式で記述
 * a:話者 s:スイッチ v:変数 
 * @type multiline_string
 * 
 * @param 表示方向
 * @desc putDirection セリフをキャラの上に表示するか、下に表示するか。基本 上
 * @type select
 * @option 上
 * @option 下
 */
 
 
 
//==================================================
/*~struct~chainSerif:
//==================================================
 * @param タグ
 * @desc tag 何を書いてもいい欄
 *
 * @param アクターID
 * @desc actorId セリフを発するアクターのID。1,2 と複数指定したり、1~3 とまとめて指定することも可能
 * @type actor
 *
 * @param 敵キャラID
 * @desc enemyId セリフを発する敵キャラのID。1,2 と複数指定したり、1~3 とまとめて指定することも可能
 * @type enemy
 * 
 * @param 敵キャラインデックス
 * @desc enemyIndex セリフセットを適用する敵キャラのインデックス。1,2 と複数指定したり、1~3 とまとめて指定することも可能
 *
 * @param テキスト
 * @desc text セリフのテキスト内容
 * \self:喋り手名　\n:改行
 * @type multiline_string
 *
 * @param テキストスタイル
 * @desc textStyle セリフのテキストスタイル
 *
 * @param ベーススタイル
 * @desc baseStyle セリフのベーススタイル
 *
 * @param 表示時間
 * @desc showTime セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示。w を付けるとセリフ表示終了までウェイト
 *
 * @param ウェイト
 * @desc wait セリフを発する前のウェイト。5 なら 5フレーム 待つ
 *
 * @param 効果音
 * @desc SE セリフと共に鳴らす効果音。ボイスも鳴らせる
 * @type struct<se>[]
 *
 * @param フラッシュ
 * @desc flash 画面をフラッシュさせる
 * @type struct<flash>
 *
 * @param 連結セリフ
 * @desc chainSerif 連続して発生するセリフ。空欄ダブルクリックで追加、IDで対象指定してセリフを入力する
 * @type struct<chainSerif>[]
 *
 * @param 適用確率
 * @desc appltRate セリフが適用される確率。50 なら 50%。基本 100
 *
 * @param 適用条件
 * @desc applyCondition セリフが適用される条件。js式で記述
 * a:話者 s:スイッチ v:変数 
 * @type multiline_string
 * 
 * @param 表示方向
 * @desc putDirection セリフをキャラの上に表示するか、下に表示するか。基本 上
 * @type select
 * @option 上
 * @option 下
 */
  
  
  
//==================================================
/*~struct~se:
//==================================================
 * @param ファイル
 * @desc file 効果音ファイル 。セリフセットの場合は使用ファイルにならないため非推奨
 * @type file
 * @dir audio/se
 *
 * @param /名前
 * @desc name 効果音の名前。『Keke_CommonData』か『MaterialBase』から呼び出し
 *
 * @param 音量
 * @desc volume 効果音の音量。基本 100
 * @default 100
 *
 * @param ピッチ
 * @desc pitch 効果音のピッチ。基本 100
 * @default 100
 *
 * @param 位相
 * @desc pan 効果音の位相。基本 0
 * @default 0
 */
 
 
 
//==================================================
/*~struct~flash:
//==================================================
 * @param 時間
 * @desc time フラッシュ時間。5 なら 5フレーム かけてフラッシュ。基本 30
 * @default 30
 *
 * @param 赤
 * @desc red フラッシュの赤み。0〜255。基本 255
 * @default 255
 *
 * @param 緑
 * @desc green フラッシュの緑み。0〜255。基本 255
 * @default 255
 *
 * @param 青
 * @desc blue フラッシュの青み。0〜255。基本 255
 * @default 255
 *
 * @param 濃度
 * @desc opacity フラッシュの濃度。0〜255。基本 255
 * @default 255
 */
 
 
 
//==================================================
/*~struct~skin:
//==================================================
 * @param 画像
 * @desc image スキンとして使う画像。picturesフォルダに入れる
 * @type file
 * @dir img/pictures
 *
 * @param ずらしX
 * @desc offsetX スキンのX位置ずらし。5 なら 5ピクセル 右へ
 *
 * @param ずらしY
 * @desc offsetY スキンのY位置ずらし。5 なら 5ピクセル 下へ
 *
 * @param スケールX
 * @desc scaleX スキンのX拡大率。1.5 なら横幅 1.5倍。基本 1
 *
 * @param スケールY
 * @desc scaleY スキンのY拡大率。1.5 なら縦高 1.5倍。基本 1
 *
 * @param 横幅+
 * @desc widthplus スキン横幅の増減幅。5 なら横に 5ピクセル 拡大
 *
 * @param 高さ+
 * @desc heightPlus スキン縦高の増減幅。5 なら縦に 5ピクセル 拡大
 * 
 * @param テキスト比率X
 * @desc textAdjustX 横幅をテキストサイズの何倍にするか。0 なら合わせない。基本 1
 * @default 1
 *
 * @param テキスト比率Y
 * @desc textAdjustY 縦幅をテキストサイズの何倍にするか。0 なら合わせない。基本 1
 * @default 1
 *
 * @param 不透明度
 * @desc opacity スキンの不透明度。0〜255。値を増やすほど濃くなる。基本 255
 *
 * @param カラートーン
 * @desc colorTone スキンのカラートーン。赤(-255〜255), 緑(-255〜255), 青(-255〜255), グレー(0〜255)。基本 0, 0, 0, 0
 * @default 0, 0, 0, 0
 *
 * @param レイヤー
 * @desc layer スキンを配置するレイヤー。ベースより上か下か。基本 ベースより下
 * @type select
 * @option ベースより下
 * @option ベースより上
 * @default ベースより下
 * 
 * @param ベース消去
 * @desc basehide ベースを消去する。ツノのみ残すことも可能。基本 消去しない
 * @type select
 * @option 消去しない
 * @option ツノ以外消去
 * @option すべて消去
 * @default 消去しない
 * 
 * @param 上下反転
 * @desc upDownReverse ビューを下方向に表示した時、スキンを上下反転する
 * @type boolean
 */



//==================================================
/*~struct~viewTimeCfg:
//==================================================
 * @param 開始
 * @desc start 開始セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 120
 * @default 80
 * 
 * @param 開始ディレイ
 * @desc startDelay 開始セリフの遅延時間。50 なら 50フレーム 経ってから表示。0 ならずっと表示 基本値 30
 * @default 30
 *
 * @param 行動
 * @desc act 行動セリフ/ビューの表示時間。50 なら 50フレーム間 表示。0 なら行動終了まで表示 基本値 0
 * @default 0
 *
 * @param ダメージ
 * @desc damage ダメージセリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 40
 * @default 40
 *
 * @param 回復
 * @desc heal 回復セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 40
 * @default 40
 *
 * @param 戦闘不能
 * @desc dead 戦闘不能セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 80
 * @default 80
 *
 * @param ステート
 * @desc state ステートセリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 60
 * @default 60
 *
 * @param 連結
 * @desc chain 連結セリフの表示時間。50 なら 50フレーム間 表示。0 ならずっと表示 基本値 60
 * @default 60
 */

 

//==================================================
/*~struct~posCfg:
//==================================================
 * @param 表示方向
 * @desc putDirection ビューの表示方向。下or中央or上。基本 舌
 * @type select
 * @option 上
 * @option 中央
 * @option 下
 * @default 下
 * 
 * @param ずらしX
 * @desc 合計ダメージのX位置ずらし。5 なら 5ピクセル 右へ
 * 
 * @param ずらしY
 * @desc 合計ダメージのY位置ずらし。5 なら 5ピクセル 下へ
 * 
 * @param ツノなし
 * @desc 吹き出しツノを表示しない
 * @type boolean
 */



//==================================================
/*~struct~viewAnime:
//==================================================
 * @param 時間
 * @desc time アニメの動作時間。5 なら 5フレーム かけてアニメする。基本 5
 * @default 5
 *
 * @param 方向
 * @desc vector アニメの動く方向。横方向か、縦方向か、縦横両方か。基本 横
 * @type select
 * @option 横
 * @option 縦
 * @option 縦横
 * @default 横
 */



//==================================================
/*~struct~pos:
//==================================================
 * @param X
 * @desc offsetX X位置。5 なら右に 5ピクセル ずれる
 *
 * @param Y
 * @desc offsetY Y位置。5 なら下に 5ピクセル ずれる
 */



//==================================================
/*~struct~noShowScope:
//==================================================
 * @param 上
 * @desc up 上側の非表示範囲。50 なら 画面上端から 50ピクセル の範囲には表示しない
 * 
 * @param 下
 * @desc down 下側の非表示範囲。50 なら 画面下端から 50ピクセル の範囲には表示しない
 *
 * @param 左
 * @desc left 左側の非表示範囲。50 なら 画面左端から 50ピクセル の範囲には表示しない
 *
 * @param 右
 * @desc right 右側の非表示範囲。50 なら 画面右端から 50ピクセル の範囲には表示しない
 */



//==================================================
/*~struct~nameViewCfg:
//==================================================
 * @param 有効
 * @desc valid 技名ビューを表示する
 * @type boolean
 * @default false
 *
 * @param テキストスタイル
 * @desc textStyle 技名ビューのテキストスタイル
 * @default 技名
 * 
 * @param ベーススタイル
 * @desc baseStyle 技名ビューのベーススタイル
 * @default 技名-味方
 * 
 *
 * @param テキストスタイル(敵)
 * @desc textStyleEnemy 敵キャラの技名ビューのテキストスタイル。空欄なら味方のテキストスタイルと同じ
 * @default 技名
 * 
 * @param ベーススタイル(敵)
 * @desc baseStyleEnemy 敵キャラの技名ビューのベーススタイル。空欄なら味方のベーススタイルと同じ
 * @default 技名-敵
 * 
 * @param 位置X 
 * @desc posX 技名ビューを表示するX座標。50 なら画面左端から 50ビクセル の位置。演算可。gw:画面横幅
 * @default gw / 2
 * 
 * @param 位置Y 
 * @desc posY 技名ビューを表示するY座標。50 なら画面上端から 50ビクセル の位置。演算可。gw:画面横幅
 * @default 0
 */
  
  
  
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];



    //==================================================
    //--  公開メソッド
    //==================================================

    //- マンガビューの起動(公開)
    Game_Temp.prototype.runMangaViewKe = function(...args) {
        startMangaView(...args);
    };

    //- マンガビューの停止
    Game_Temp.prototype.stopMangaViewKe = function(...args) {
        stopMangaView(...args);
    };

    
    
    
    //==================================================
    //--  他プラグインとの連携メソッド
    //==================================================

    //- フルアニメステータスASIの取得
    function getFullAnimeStatusAsi(battler) {
        // サイドビュー時はバトグラに表示
        if ($gameSystem.isSideView()) { return null; }
        if (!$gameTemp._fullAnimeStatusKe) { return null; }
        const asi = $gameTemp.getFullAnimeStatusAsiKe(battler);
        // 顔アイコンがなければバトグラに表示
        if (!asi || !asi.faceBaseSprite || !asi.faceBaseSprite.visible) { return null; }
        return asi;
    };

    //- スピードスターバトルか
    function isSpeedStar() {
        const gs = $gameSystem;
        return gs._speedStarInitedKe && !gs._noSpeedStarKe;
    };



    //==================================================
    //--  外部プラグインの存在判定
    //==================================================

    const MPP_Pseudo3DBattle = PluginManager._scripts.some(n => n == "MPP_Pseudo3DBattle");



    //==================================================
    //--  スプライト追加 /ベーシック
    //==================================================
    
    //- 破棄付きスプライト
    function SpriteKeMglv() {
        this.initialize(...arguments);
    }

    SpriteKeMglv.prototype = Object.create(Sprite.prototype);
    SpriteKeMglv.prototype.constructor = SpriteKeMglv;

    SpriteKeMglv.prototype.destroy = function() {
        if (this.bitmap && !this.bitmap._url) { this.bitmap.destroy(); }
        Sprite.prototype.destroy.apply(this);
    };



    //==================================================
    //--  動的関数 /ベーシック
    //==================================================

    let funcs = {};

    //- ニューファンク
    function newFunc(str, a, s, v) {
        if (!funcs[str]) {
            funcs[str] = new Function("a", "s", "v", "return " + str);
            return funcs[str](a, s, v);
        } else {
            return funcs[str](a, s, v);
        }
    };

    //- ニューファンク-画面幅の演算
    function newFunc_screenW(str) {
        if (!str) { return null; }
        str = str.toString();
        if (!str.match(/(\d|gw|gh)/)) { return str; }
        str = str.replace(/(\d)[a-z]+/gi, "$1");
        str = str.replace(/[a-z]+(\d)/gi, "$1");
        const gw = Graphics.width;
        const gh = Graphics.height;
        if (!funcs[str]) {
            funcs[str] = new Function("gw", "gh", "return " + str);
            return Math.round(funcs[str](gw, gh));
        } else {
            return Math.round(funcs[str](gw, gh));
        }
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
        for (let key in strs) {
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
    
    const keke_serifPackList = strToList(parameters["セリフパック登録"]);
    
    //- スタイル登録
    const keke_textStyleList = strToList(parameters["テキストスタイル登録"]);
    const keke_baseStyleList = strToList(parameters["ベーススタイル登録"]);
    const keke_styleBasicCfg = strToHash(parameters["基本スタイル設定"]);
    
    //- 小窓スタイル
    const keke_miniTextStyle = strToHash(parameters["小窓テキストスタイル"]);
    const keke_miniBaseStyle = strToHash(parameters["小窓ベーススタイル"]);
    
    //- 表示設定1
    const keke_viewTimeCfg = strToHash(parameters["表示時間設定"]);
    const keke_posCfgActor = strToHash(parameters["表示位置-味方"]);
    const keke_posCfgEnemy = strToHash(parameters["表示位置-敵"]);
    const keke_posCfgVictory = strToHash(parameters["表示位置-勝利"]);
    
    //- 表示設定2
    const keke_moveWithBattler = toBoolean(parameters["バトラーと移動"]);
    const keke_guardNoShow = toBoolean(parameters["防御は表示しない"]);
    const keke_viewAnime = strToHash(parameters["開閉アニメ"]);
    const keke_iconPos = strToHash(parameters["アイコン位置"]);
    const keke_noShowScope = strToHash(parameters["非表示範囲"]);

    //- 技名ビュー
    const keke_nameViewCfg = strToHash(parameters["技名ビュー設定"]);

    //- その他
    const keke_volumeLump = Number(parameters["音量一括"]);
    const keke_pitchLump = Number(parameters["ピッチ一括"]);
    const keke_panLump = Number(parameters["位相一括"]);

    parameters = null;
    
    
    
    //==================================================
    //--  プラグインコマンド
    //==================================================
    
    //- 即時セリフ
    PluginManager.registerCommand(pluginName, "flashSerif", args => {
        const serif = strToHash(args.serif);
        getBattlerList(args.actorId, args.enemyId, args.enemyIndex).forEach(battler => {
            doSerifFlash(battler, serif);
        });
    });
    
    //- 即時セリフの実行
    function doSerifFlash(battler, serifData) {
        const pack = { wait:0, type:"" };
        pack.serifData = serifData;
        if (!battler._mangaViewPacksKe) { battler._mangaViewPacksKe = []; }
        // セリフデータがあるとき
        if (serifData) {
            // ウェイトを設定
            if (serifData["ウェイト"]) { pack.wait += serifData["ウェイト"]; }
            // 連結セリフのセット
            setChainSerif(serifData, pack);
        }
        // セリフウェイト
        pack.waited = waitForSerif(serifData);
        // パックを先頭にセット
        battler._mangaViewPacksKe.unshift(pack);
        // 即時セリフフラグをオン
        pack.isFlashSerif = true;
    };

    //- セリフウェイト
    function waitForSerif(serifData, count) {
        serifData = serifData || {};
        count = count || (serifData["表示時間"]) || -1000;
        if (!count || !count.toString().includes("w")) { return; }
        count = Number(count.replace(/w/g, ""));
        let waited = false;
        // イベント中の場合
        if ($gameTroop.isEventRunning()) {
            if (count == 0) {
                $gameTroop._interpreter.wait(1000000);
            } else {
                $gameTroop._interpreter.wait(count);
            }
            waited = true;
        // バトル中の場合
        } else {
            $gameTroop._waitForSerifKeMglv = count == 0 ? -1 : count;
            waited = true;
        }
        return waited;
    };

    
    //- 次のセリフ
    PluginManager.registerCommand(pluginName, "nextSerif", args => {
        if (!$gameTemp._nextSerifsKe) { $gameTemp._nextSerifsKe = []; }
        const serifData = strToHash(args.serif);
        getBattlerList(args.actorId, args.enemyId, args.enemyIndex).forEach(battler => {
            // 次のセリフをセット
            $gameTemp._nextSerifsKe.push({ battler:battler, serifData:serifData })
        });
    });
    
    
    //- セリフパックの変更
    PluginManager.registerCommand(pluginName, "changeSerifPack", args => {
        const actorId = args.actorId;
        const enemyId = args.enemyId;
        const serifPack = args.serifPack;
        if ((!actorId && !enemyId) || !serifPack) { return; }
        if (actorId) {
            const actor = $gameActors.actor(actorId);
            if (actor) { actor._serifPackNameKe = serifPack; }
        }
        if (enemyId && $gameParty.inBattle()) {
            const enemies = $gameTroop.members().filter(enemy => enemy._enemyId == enemyId);
            if (enemies.length) { enemies.forEach(enemy => enemy._serifPackNameKe = serifPack); }
        }
    });
    
    
    //- セリフ変更
    PluginManager.registerCommand(pluginName, "serifChange", args => {
        const set_ = {};
        const actorId = args.actorId;
        const enemyId = args.enemyId;
        if (!actorId && !enemyId) { return; }
        set_.type = actorId ? "actionor" : "enemy";
        set_.id = actorId || enemyId;
        // タイプリスト
        const typeList = ["open", "input", "skill", "item", "damage", "heal", "dead", "victory"];
        // タイプごとにセリフ変更のセット
        for (const type of typeList) {
            set_[type+"Serifs"] = strToList(args[type+"Serifs"]);
            setSerifChange(set_, type);
        }
    });
    
    //- セリフ変更のセット
    function setSerifChange(set_, type) {
        const gs = $gameSystem;
        if (!set_[type+"Serifs"] || !set_[type+"Serifs"].length) { return; }
        if (!gs[type+"SerifsKe"]) { gs[type+"SerifsKe"] = {}; }
        const key = set_.type + set_.id;
        gs[type+"SerifsKe"][key] = set_[type+"Serifs"];
    };
    

    
    //================================================== 
    //--  共通開始
    //==================================================
    
    //- ゲームバトラー/変数の初期化(処理追加)
    const _Game_Battler_initMembers = Game_Battler.prototype.initMembers;
    Game_Battler.prototype.initMembers = function() {
        // マンガビューの初期化
        initMangaView(this);
        _Game_Battler_initMembers.apply(this);
    };

    //- マンガビューの初期化
    function initMangaView(battler) {
        battler._mangaViewPacksKe = [];
        battler._mangaViewTypeKe = "";
        battler._mangaViewCountKe = null;
        battler._mangaSerifActTimeKe = null;
    };
    
    
    //- スプライトバトラー/初期化(処理追加)
    const _Sprite_Battler_initialize = Sprite_Battler.prototype.initialize;
    Sprite_Battler.prototype.initialize = function(battler) {
        _Sprite_Battler_initialize.apply(this, arguments);
        this._toCreateMangaView3Ke = [];
        this._mangaViewSpritesKe = [];
        this._mangaViewAnimeKe = { on:false }
    };
    
    
    
    //==================================================
    //--  共通更新
    //==================================================
    
    //- スプライトバトラー/更新(処理追加)
    const _Sprite_Battler_update = Sprite_Battler.prototype.update;
    Sprite_Battler.prototype.update = function() {
        _Sprite_Battler_update.apply(this);
        if (this._battler && this._battler._mangaViewPacksKe) {
            // マンガビューの形成
            createMangaView(this);
            // マンガビューの形成3
            createMangaView3(this);
            // マンガビューの位置更新
            updateMangaViewPos(this);
            // マンガビューのツノ更新
            updateMangaViewTsuno(this);
            // マンガビューのスケール
            scaleMangaView(this);
            // マンガビューの終了
            endMangaView(this);
        }
    };
    
    
    
    //==================================================
    //--  共通終了
    //==================================================
    
    //- スプライトセット・バトル/破棄(処理追加)
    const _Spriteset_Battle_destroy = Spriteset_Battle.prototype.destroy;
    Spriteset_Battle.prototype.destroy = function(options) {
        // スプライトの全破棄
        destroySpriteAll(this);
        _Spriteset_Battle_destroy.apply(this, arguments);
    };
    
    //- スプライトの全破棄
    function destroySpriteAll(spriteset) {
        const battlerSprites = spriteset.battlerSprites();
        battlerSprites.forEach(charaSprite => {
            if (!charaSprite._mangaViewSpritesKe) { return; }
            charaSprite._mangaViewSpritesKe.forEach(sprite => {
                destroySprite(sprite);
            });
            charaSprite._mangaViewSpritesKe = null;
        });
    };
    
    //- スプライトの破棄
    function destroySprite(sprite) {
        if (!sprite) { return; }
        sprite.children.forEach(s => destroySprite(s));
        if (sprite.bitmap && !sprite.bitmap._url) { sprite.bitmap.destroy(); }
        if (sprite._texture) { sprite.destroy(); }
    };


    //- バトルマネージャー/バトル終了(処理追加)
    const _BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
    BattleManager.updateBattleEnd = function() {
        _BattleManager_updateBattleEnd.apply(this);
        // セリフウェイトを初期化
        $gameTroop._waitForSerifKeMglv = null;
        // 次のセリフを初期化
        $gameTemp._nextSerifsKe = null;
    };
    
    
    
    //==================================================
    //--  共通処理
    //==================================================
    
    //- シーンバトル/全ウインドウの形成(処理追加)
    const _Scene_Battle_createAllWindows  = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function() {
        _Scene_Battle_createAllWindows.apply(this);
        // マンガライクレイヤーを作成
        const layer = new SpriteKeMglv();
        this._windowLayer.addChild(layer);
        this._mangaLikeLayerKe = layer;
    };


    //- バトルマネージャー/実行中か(処理追加)
    const _BattleManager_isBusy = BattleManager.isBusy;
    BattleManager.isBusy = function() {
        let busy = _BattleManager_isBusy.apply(this);
        // セリフウェイトがあるならウェイト
        const wait = $gameTroop._waitForSerifKeMglv;
        if (!busy && wait) {
            busy = true;
            // カウントを減らす
            if (wait >= 0) { $gameTroop._waitForSerifKeMglv--; }
        }
        return busy;
    };


    //- テキストスタイルの取得
    function getTextStyle(styleName) {
        if (!styleName) { return null; }
        return keke_textStyleList.find(style => style["スタイル名"] == styleName);
    };

    //- ベーススタイルの取得
    function getBaseStyle(styleName) {
        if (!styleName) { return null; }
        return keke_baseStyleList.find(style => style["スタイル名"] == styleName);
    };

    //- セリフデータの取得
    function getSerifData(battler, type, id = null) {
        // セリフ変更の取得
        let datas = getSerifChange(battler, type);
        // セリフセットの取得
        if (!datas) {
            datas = getSerifSet(battler, type);
        }
        if (!datas) { return; }
        let serif = null;
        // セリフを取得
        for (const data of datas) {
            const ids = data["スキルID"] || data["アイテムID"] || data["ステートID"];
            if (ids == null || strToNumList(ids.toString()).includes(id)) {
                // 適用確率
                const per = data["適用確率"] != null ? data["適用確率"] : 100;
                if (Math.randomInt(100) >= per) { continue; }
                // 適用条件
                const condition = data["適用条件"];
                const a = battler;
                const s = $gameSwitches._data;
                const v = $gameVariables._data;
                if (condition && !newFunc(condition, a, s, v)) { continue; }
                serif = data;
                break;
            }
        }
        if (serif && !Object.keys(serif).length) { serif = null; }
        return serif;
    };
    
    //- セリフ変更の取得
    function getSerifChange(battler, type) {
        const gs = $gameSystem;
        if (!gs[type+"SerifsKe"]) { return; }
        // サブジェクトキー取得
        const subject = battler._actorId ? "actionor" : "enemy";
        const subjeId = battler._actorId ? battler._actorId : battler._enemyId;
        const key = subject + subjeId;
        // セリフリスト取得
        let datas = gs[type+"SerifsKe"][key];
        return datas;
    };
    
    //- セリフセットの取得
    function getSerifSet(battler, type) {
        // セリフパックの取得
        const pack = getSerifPack(battler);
        if (!pack) { return; }
        // タイプの変換
        const word = convertType(type);
        // セリフセットを取得
        return pack[word+"セリフ"];
    };

    //- セリフパックの取得
    function getSerifPack(battler) {
        let name = null;
        // プラグインコマンドでのパック名を取得
        name = battler._serifPackNameKe;
        // なければメモ欄からパック名を取得
        if (!name) {
            const object = battler._actorId ? battler.actor() : battler.enemy();
            name = object.meta["セリフパック"] || object.meta["serifPack"];
            if (name) { name = name.replace(/\s/g, ""); }
        }
        if (!name) { return; }
        // セリフパックを取得
        return keke_serifPackList.find(pack => pack["パック名"].includes(name));
    };
    
    //- タイプの変換
    function convertType(type) {
        if (type == "open") { return "開始"; } else
        if (type == "input") { return "入力"; } else
        if (type == "skill") { return "スキル"; } else
        if (type == "item") { return "アイテム"; } else
        if (type == "damage") { return "ダメージ"; } else
        if (type == "heal") { return "回復"; } else
        if (type == "dead") { return "戦闘不能"; } else
        if (type == "state") { return "ステート"; } else
        if (type == "victory") { return "勝利"; }
    };
    
    //- 次のセリフの取得
    function getNextSerif(battler, search) {
        const nextSerifs = $gameTemp._nextSerifsKe;
        if (!nextSerifs || !nextSerifs.length) { return; }
        let serifData = null;
        let i = -1;
        for (const nextSerif of nextSerifs) {
            i++;
            if (nextSerif.battler == battler) {
                serifData = nextSerif.serifData;
                if (!search) { nextSerifs[i] = null; }
                break;
            }

        };
        if (serifData) {
            $gameTemp._nextSerifsKe = nextSerifs.filter(s => s);
        }
        return serifData;
    };


    //- バトラーリストの取得
    function getBattlerList(actorId, enemyId, enemyIndex) {
        const list = [];
        const actorIds = strToNumList(actorId);
        const enemyIds = strToNumList(enemyId);
        const enemyIndexs = strToNumList(enemyIndex);
        actorIds.forEach(id => $gameParty.allMembers().forEach(b => b._actorId == id ? list.push(b) : 0));
        enemyIndexs.forEach(index => $gameTroop.members().forEach(b => b.index() == index - 1 ? list.push(b) : 0));
        enemyIds.forEach(id => $gameTroop.members().forEach(b => b._enemyId == id ? list.push(b) : 0));
        return list;
    };


    //- レイヤーの取得
    function getLayer(battler) {
        const scene = SceneManager._scene;
        const isFrontActor = !$gameSystem.isSideView() && battler._actorId;
        const fast = $gameTemp._fullAnimeStatusKe;
        const asi = getFullAnimeStatusAsi(battler);
        return asi ? fast._layers[fast._messageLayer] : MPP_Pseudo3DBattle && !isFrontActor ? scene._spriteset._effectsContainer : scene._mangaLikeLayerKe;
    };
    
    
    
    //==================================================
    //--  マンガビューの呼び出し
    //==================================================
    
    //- マンガビューのセット(公開)
    function setMangaView(...args) {
        const logWindow = SceneManager._scene._logWindow;
        logWindow.push("runMangaViewKe", ...args);
    };
    
    //- マンガビューの起動
    Window_BattleLog.prototype.runMangaViewKe = function(...args) {
        startMangaView(...args);
    };


    //- バトルマネージャー/バトルの開始(処理追加)
    const _BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function() {
        _BattleManager_startBattle.apply(this);
        // 開始ビューの呼び出し
        callOpenMangaView();  
    };
    
    //- 開始ビューの呼び出し
    function callOpenMangaView() {
        // マンガビューの初期化
        $gameParty.allMembers().forEach(actor => initMangaView(actor));
        // ディレイ時間を取得
        const delay = keke_viewTimeCfg ? keke_viewTimeCfg["開始ディレイ"] || 0 : 0;
        // 味方主体を取得
        const party = $gameParty.aliveMembers().filter(actor => getSerifData(actor, "open"));
        const actor = party.length ? party[Math.randomInt(party.length)] : null;
        // 味方マンガビューのセット(開始)
        if (actor) {
            setMangaView(actor, "open", { wait:delay });
        }
        // 敵主体を取得
        const troop = $gameTroop.aliveMembers().filter(enemy => getSerifData(enemy, "open"));
        const enemy = troop.length ? troop[Math.randomInt(troop.length)] : null;
        // 敵マンガビューのセット(開始)
        if (enemy) {
            setMangaView(enemy, "open", { wait:delay + 2 });
        }
    };
    
    
    //- シーンバトル/アクターコマンド選択の開始(処理追加)
    const _Scene_Battle_startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
    Scene_Battle.prototype.startActorCommandSelection = function() {
        _Scene_Battle_startActorCommandSelection.apply(this);
        // 入力ビューの呼び出し
        const actor = BattleManager.actor();
        if (!actor) { return; }
        // 開始マンガビューの停止 - 全体
        stopMangaViewAll("open");
        // マンガビューのセット(入力)
        setMangaView(actor, "input");
    };
    
    //- バトルマネージャー/アクター入力の終了(処理追加)
    const _BattleManager_finishActorInput = BattleManager.finishActorInput;
    BattleManager.finishActorInput = function() {
        _BattleManager_finishActorInput.apply(this);
        if (!this._currentActor) { return; }
        // 入力ビューを消す
        const actor = this._currentActor;
        if (actor._mangaViewTypeKe.match(/input/)) {
            actor._mangaViewCountKe = 1;
        }
    };
    
    //- バトマネージャー/アクター入力のキャンセル(処理追加)
    const _BattleManager_cancelActorInput = BattleManager.cancelActorInput;
    BattleManager.cancelActorInput = function() {
        _BattleManager_cancelActorInput.apply(this);
        if (!this._currentActor) { return; }
        // 入力ビューを消す
        const actor = this._currentActor;
        if (actor._mangaViewTypeKe.match(/input/)) {
            actor._mangaViewCountKe = 1;
        }
    };
    
    
    //- バトルマネージャー/スタートアクション(処理追加)
    const _BattleManager_startAction = BattleManager.startAction;
    BattleManager.startAction = function() {
        // 行動ビューの呼び出し
        const subject = this._subject;
        const action = subject.currentAction();
        // マンガビューのセット(行動)
        setMangaView(subject, "action", { action:action });
        // マンガビューのセット(技名)
        setMangaView(subject, "action", { action:action, isNameView:true });
        // ファイナルアクターを保存
        if (subject._actorId) { this._finalActorKeMglv = subject; }
        // ファイナルエネミーを保存
        if (subject._enemyId) { this._finalEnemyKeMglv = subject; }
        _BattleManager_startAction.apply(this);
    };

    //- バトルマネージャー/アクションの強制(処理追加)
    const _BattleManager_forceAction = BattleManager.forceAction;
    BattleManager.forceAction = function(battler) {
        // 本来のサブジェクトを保存
        this._subjectOriKeMglv = this._subjectOriKeMglv || this._subject;
        _BattleManager_forceAction.apply(this, arguments);
    };
    
    //- バトルマネージャー/エンドアクション(処理追加)
    const _BattleManager_endAction = BattleManager.endAction;
    BattleManager.endAction = function() {
        // 行動ビューの終了

        // スピードスターバトル時のみ、セリフ延長時間のセット
        if (isSpeedStar()) {
            setActViewTime(this._subject);
            if (this._subjectOriKeMglv) { setActViewTime(this._subjectOriKeMglv); }
        // それ以外は消す
        } else {
            this._subject._mangaViewCountKe = 1;
            if (this._subjectOriKeMglv) { this._subjectOriKeMglv._mangaViewCountKe = 1; }
        }
        this._subjectOriKeMglv = null;
        _BattleManager_endAction.apply(this);
    };
    
    //- セリフ延長時間のセット
    function setActViewTime(battler) {
        // ストップの処理
        if (battler._mangaViewTypeKe && !battler._mangaViewTypeKe.match(/skill|item|act/)) {
            battler._mangaSerifActTimeKe = null;
            return;
        }
        // カウントをセット
        battler._mangaViewCountKe = (battler._mangaSerifActTimeKe != null ?  battler._mangaSerifActTimeKe : keke_viewTimeCfg["行動"]) || -1000;
        const packs = battler._mangaViewPacksKe;
        if (packs) {
            packs.forEach(pack => {
                if (!pack || !pack.type.match(/skill|item|act/)) { return; }
                pack.count = battler._mangaViewCountKe;
            });
        }
    };
    
    
    //- バトルマネージャー/インヴォークアクション(処理追加)
    const _BattleManager_invokeAction = BattleManager.invokeAction;
    BattleManager.invokeAction = function(subject, target) {
        const preHp = target._hp;
        _BattleManager_invokeAction.apply(this, arguments);
        // ダメージ / 回復ビューの呼び出し
        if (target.isDead()) { return; }
        let viewType = null;
        // HPが変動したら
        if (target._hp < preHp) { viewType = "damage"; }
        if (target._hp > preHp) { viewType = "heal"; }
        if (viewType && !target._inDamageViewKe) {
            // マンガビューのセット(ダメージ・回復)
            setMangaView(target, viewType);
            //startMangaView(target, viewType, { wait:1 });
            // スピードスターバトルでは、ダメージビュー中フラグをオン
            if (isSpeedStar()) {
                target._inDamageViewKe = true;
            }
        }
        // ダメージビュー中フラグの解除
        if (isSpeedStar()) {
            setTimeout(remInDamageView, 0, target);
        }
    };

    //- ダメージビュー中フラグの解除
    function remInDamageView(target) {
        // ポップウェイト終了していたら解除
        if (!target._inPopWaitKe) {
            target._inDamageViewKe = null;
        }
    };
    
    
    //- ゲームバトラー/ステートの付与(処理追加)
    const _Game_Battler_addState = Game_Battler.prototype.addState;
    Game_Battler.prototype.addState = function(stateId) {
        const deaded = this.isDead();
        _Game_Battler_addState.apply(this, arguments);
        if (!$gameParty.inBattle()) { return; }
        // 戦闘不能ビューの呼び出し
        if (stateId == this.deathStateId()) {
            // マンガビューのセット(戦闘不能)
            if (!deaded) { setMangaView(this, "dead"); }
        // ステートビューの呼び出し
        } else {
            // マンガビューのセット(ステート)
            setMangaView(this, "state", { stateId:stateId });
        }
    };
    
    
    //- バトルマネージャー/勝利の処理(処理追加)
    const _BattleManager_processVictory = BattleManager.processVictory;
    BattleManager.processVictory = function() {
        // 勝利ビューの呼び出し
        _BattleManager_processVictory.apply(this);
        // 勝利ビューを発するアクターを取得
        let subject = this._finalActorKeMglv;
        if (!subject || !isExistSerif(subject, "victory")) {
            const party = $gameParty.aliveMembers().filter(actor => isExistSerif(actor, "victory"));
            subject = party.length ? party[Math.randomInt(party.length)] : null;
        }
        // マンガビューのセット(勝利)
        if (subject) {
             setMangaView(subject, "victory");
        }
    };
    
    //- バトルマネージャー/敗北の処理(処理追加)
    const _BattleManager_processDefeat = BattleManager.processDefeat;
    // 勝利ビューの呼び出し-敵
    BattleManager.processDefeat = function() {
        _BattleManager_processDefeat.apply(this);
        // 勝利ﾋﾞｭーを発する敵キャラを取得
        let subject = this._finalEnemyKeMglv;
        if (!subject || !isExistSerif(subject, "victory")) {
            const troop = $gameTroop.aliveMembers().filter(enemy => isExistSerif(enemy, "victory"));
            subject = troop.length ? troop[Math.randomInt(troop.length)] : null;
        }
        // マンガビューのセット(勝利)
        if (subject) {
            setMangaView(subject, "victory");
        }
    };

    //- セリフがあるか
    function isExistSerif(battler, type) {
        if (getSerifData(battler, type)) { return true; }
        if (type.match(/act|skill|item|victory/i) && getNextSerif(battler, true)) { return true;}
        return false;
    };
    
    
    
    //==================================================
    //--  マンガビューの開始
    //==================================================
    
    //- マンガビューの開始
    function startMangaView(battler, type, cmd = { action:null, wait:0, stateId:null }) {
        if (cmd.isNameView && !keke_nameViewCfg["有効"]) { return; }
        const nowCount = battler._mangaViewCountKe;
        const preType = battler._mangaViewTypeKe;
        const nowOpen = nowCount > 0 && preType == "open";
        const times = keke_viewTimeCfg;
        if (!battler._mangaViewPacksKe) { battler._mangaViewPacksKe = []; }
        // パック作成
        const pack = {};
        pack.textStyleName = cmd.textStyle;
        pack.baseStyleName = cmd.baseStyle;
        pack.wait = cmd.wait || 0;
        // 技名ビューとカットインフラグを取得
        pack.isNameView = cmd.isNameView;
        pack.isCutin = cmd.isCutin;
        // フルアニメステータスからのデータを取得
        const asi = getFullAnimeStatusAsi(battler);
        if (asi) {
            if (asi.serifWait) {
                pack.wait += asi.serifWait;
                asi.serifWait = 0;
            }
            if (asi.serifUdReverse) {
                pack.serifUdReverse = asi.serifUdReverse;
                asi.serifUdReverse = false;
            }
        }
        // タイプに応じて処理
        switch (type) {
            // 開始
            case "open":
                pack.type = type;
                pack.count = times["開始"] || -1000;
                break;
            // 入力
            case "input":
                pack.type = type;
                pack.count = -1000;
                break;
            // 行動
            case "action":
                const action = cmd.action || BattleManager._action;
                const item = action ? action.item() : null;
                if (item) {
                    type = action.isSkill() ? "skill" : "item";
                    pack.type = type;
                    pack.id = item.id;
                    pack.action = action;
                    pack.item = item;
                    // 防御は表示しない
                    if (keke_guardNoShow && item.id == battler.guardSkillId()) { pack.type = null; }
                    pack.count = times["行動"] ? times["行動"] : -1000;
                }
                break;
            // ダメージ
            case "damage":
                pack.type = type;
                pack.count = times["ダメージ"] || -1000;
                break;
            // 回復
            case "heal":
                pack.type = type;
                pack.count = times["回復"] || -1000;
                break;
            // 戦闘不能
            case "dead":
                pack.type = type;
                pack.count = times["戦闘不能"] || -1000;
                break;
            // ステート
            case "state":
                pack.type = type;
                pack.id = cmd.stateId;
                pack.count = times["ステート"] || -1000;
                break;
            // 勝利
            case "victory":
                pack.type = type;
                pack.count = -1000;
                break;
        }
        // セリフデータの取得
        let serifData = getSerifData(battler, type, pack.id);
        // 次のセリフを取得
        if (type == "skill" || type == "item" || type == "victory") {
            const nextSerif = getNextSerif(battler);
            if (nextSerif) {
                serifData = nextSerif;
            }
        }
        pack.serifData = serifData;
        // セリフデータがあるとき
        if (serifData) {
            // セリフの表示時間を適用
            const serifCount = serifData["表示時間"];
            if (serifCount != null) {
                pack.count = serifCount <= 0 ? -1000 : serifCount;
            }
            // ウェイトを設定
            if (serifData["ウェイト"]) { pack.wait += serifData["ウェイト"]; }
            // 連結セリフのセット
            if (!nowOpen) { setChainSerif(serifData, pack); }
        }
        // 技名ビューとカットインは終了まで表示
        if (cmd.isNameView || cmd.isCutin) {
            pack.count = -1000;
        }
        // ビューパックをセット
        if (pack.type) {
            battler._mangaViewPacksKe = battler._mangaViewPacksKe.filter(pack => pack);
            battler._mangaViewPacksKe.push(pack);
        }
    };
    
    //- 連結セリフのセット
    function setChainSerif(serifData, oriPack) {
        if (!serifData) { return; }
        const chainSerifs = serifData["連結セリフ"];
        if (!chainSerifs) { return; }
        if (!chainSerifs.length) { return; }
        const type = "chain";
        // ひとつずつ処理
        let n = 1;
        chainSerifs.forEach((serif, i) => {
            // ターゲットを取得
            let targets = getBattlerList(serif["アクターID"], serif["敵キャラID"], serif["敵キャラインデックス"]);
            // パック作成
            const pack = {};
            pack.count = serif["表示時間"] == 0 ? -1000 : serif["表示時間"] || keke_viewTimeCfg["連結"] || -1000;
            pack.serifData = serif;
            pack.type = type;
            pack.id = oriPack.id;
            pack.action = oriPack.action;
            pack.item = oriPack.item;
            // ウェイト
            const wait = serif["ウェイト"];
            const waitStr = wait ? wait.toString() : "";
            if (waitStr.includes("*")) {
                pack.wait = Number(waitStr.replace(/\*/g, "")) * n;
            } else {
                pack.wait = Number(wait);
            }
            // ターゲット全てにセリフをセット
            targets.forEach((battler, i) => {
                if (!battler) { return; }
                // 出さない条件
                //if (battler._mangaViewCountKe > 0 && battler._mangaViewTypeKe == "open") { return; }
                // ビューパックをセット
                battler._mangaViewPacksKe.push(pack);
            });
            if (targets.length) { n++ }
        });
    };
    
    
    
    //==================================================
    //--  マンガビューの作成
    //==================================================
    
    //- マンガビューの形成
    function createMangaView(charaSprite) {
        const battler = charaSprite._battler;
        if (!battler._mangaViewPacksKe.length) { return; }
        // ビューパックをひとつずつ処理
        let packs = battler._mangaViewPacksKe;
        packs.forEach((pack, i) => {
            if (!pack) { return; }
            // パックウェイト
            if (pack.wait) {
                pack.wait--;
                return;
            }
            // マンガビューの形成2
            createMangaView2(charaSprite, pack);
            packs[i] = null;
        });
        packs = packs.filter(pack => pack);
    };


    //- マンガビューの形成2
    function createMangaView2(charaSprite, pack) {
        const battler = charaSprite._battler;
        let text = "";
        let typeName = "";
        // パックを展開
        const type = pack.type;
        const item = pack.item;
        const serifData = pack.serifData;
        // タイプ名の取得
        typeName = getTypeName(type);
        // パックのスタイル
        const packTextStyle = pack.textStyleName ? keke_textStyleList.find(d => d["スタイル名"] == pack.textStyleName) : null;
        const packBaseStyle = pack.baseStyleName ? keke_baseStyleList.find(d => d["スタイル名"] == pack.baseStyleName) : null;
        // 技名のスタイル
        const enemyWord = battler._enemyId ? "(敵)" : "";
        const nameTextStyle = pack.isNameView ? getTextStyle(keke_nameViewCfg["テキストスタイル"+enemyWord]) : null;
        const nameBaseStyle = pack.isNameView ? getBaseStyle(keke_nameViewCfg["ベーススタイル"+enemyWord]) : null;
        // セリフデータの展開
        const serifData2 = openSerifData(battler, type, item, serifData, pack);
        text = !pack.isNameView ? serifData2.text : "";
        let viewDire = serifData2.viewDire;
        // メモからのスタイル取得
        const charaObje = battler._actorId ? battler.actor() : battler.enemy();
        memoData = getStyleByNote(item, charaObje);
        if (memoData.none) { return; }
        // 基本スタイルの取得
        basicData = getStyleBasic(typeName);
        if (basicData.invalid) {
            return;
        }
        // スタイルを取得
        const textStyle = packTextStyle || nameTextStyle || serifData2.textStyle || memoData.textStyle || basicData.textStyle;
        const baseStyle = packBaseStyle || nameBaseStyle || serifData2.baseStyle || memoData.baseStyle || basicData.baseStyle;
        // テキストがないならスキル・アイテムの場合のみ名前を取得
        if (!text && (type == "skill" || type == "item")) {
            text = (textStyle["語頭"] || "") + item.name + (textStyle["語尾"] || "");
        }
        // テキストがなければリターン
        if (!text) { return; }
        // マンガビューの消去(技名ビュー以外)
        if (!pack.isNameView) { deleteMangaView(charaSprite); }
        // マンガビューの形成3フラグ
        charaSprite._toCreateMangaView3Ke.push({ text:text, textStyle:textStyle, baseStyle:baseStyle, pack:pack, type:type, item:item, viewDire:viewDire });
    };
    
    //- タイプ名の取得
    function getTypeName(type) {
        // タイプ名を取得
        let name = "";
        switch (type) {
            case "open":
                name = "開始";
                break;
            case "input":
                name = "入力";
                break;
            case "skill":
            case "item":
                name = "行動";
                break;
            case "damage":
                name = "ダメ";
                break;
            case "heal":
                name = "回復";
                break;
            case "dead":
                name = "倒れ";
                break;
            case "state":
                name = "ST";
                break;
            case "victory":
                name = "勝利";
                break;
            case "chain":
                name = "連結";
                break;
        }
        return name;
    };

    //- セリフデータの展開
    function openSerifData(battler, type, item, serifData, pack) {
        if (!serifData) { return { text:"" }; }
        let text = "";
        let textStyle = null;
        let baseStyle = null;
        let viewDire = null;
        // テキスト(カットイン時はカットイン用テキストを優先)
        text = pack.isCutin ? (serifData["テキスト(カットイン)"] || serifData["テキスト"]) : serifData["テキスト"];
        // 行動時の制御文字
        if (item && text) {
            // 制御文字
            text = text.replace(/\\act/, item.name);
            text = text.replace(/\\self/, battler.name());
        }
        // スタイル
        textStyle = getTextStyle(serifData["テキストスタイル"]);
        baseStyle = getBaseStyle(serifData["ベーススタイル"]);
        // 表示時間
        if (serifData["表示時間"] != null) {
            if (type == "skill" || type == "item") {
                battler._mangaSerifActTimeKe = serifData["表示時間"] || -1000;
            } else {
                pack.count = serifData["表示時間"] || -1000;
            }
        }
        // 演出系は技名ビューとカットイン直後は省く
        if (!pack.isNameView && !battler._isCutinedKe) {
            // 効果音
            if (serifData["効果音"]) {
                // キャラの音量一括の取得
                const volumeLumpChara = getVolumeLumpChara(battler);
                serifData["効果音"].forEach(se => {
                    let name = se["ファイル"];
                    if (!name && PluginManager._scripts.some(n => n == "Keke_CommonData")) {
                        name = $gameTemp.getSeFileKe(se["/名前"]);
                    }
                    if (!name && PluginManager._scripts.some(n => n == "MaterialBase")) {
                        name = $gameSystem.getMaterialAudio(se["/名前"]);
                    }
                    AudioManager.playSe({ name:name, volume:Math.max(se["音量"] + keke_volumeLump + volumeLumpChara, 0), pitch:se["ピッチ"] + keke_pitchLump, pan:se["位相"] + keke_panLump });
                });
                // フラッシュ
                if (serifData["フラッシュ"] && serifData["フラッシュ"]["時間"]) {
                    const flash = serifData["フラッシュ"];
                    const duration = flash["時間"];
                    const color = [flash["赤"], flash["緑"], flash["青"], flash["濃度"]];
                    $gameScreen.startFlash(color, duration);
                }
            }
        }
        // 表示方向
        if (serifData["表示方向"]) {
            viewDire = serifData["表示方向"];
        }
        return { text:text, textStyle:textStyle, baseStyle:baseStyle, viewDire:viewDire }
    };

    //- キャラの音量一括の取得
    function getVolumeLumpChara(battler) {
        // セリフパックの取得
        const serifPack = getSerifPack(battler);
        if (!serifPack) { return 0; }
        // 音量一括を取得
        return serifPack["音量一括"] || 0;
    };
    
    //- メモからのスタイル取得
    function getStyleByNote(item, charaObje) {
        let textStyle = null;
        let baseStyle = null;
        const itemNote = item ? (item.meta["マンガスタイル"] || item.meta["ビュースタイル"] || item.meta["mangaStyle"] || item.meta["viewStyle"]) : null;
        const charaNote = charaObje ? (charaObje.meta["マンガスタイル"] || charaObje.meta["ビュースタイル"] || charaObje.meta["mangaStyle"] || charaObje.meta["viewStyle"]) : null;
        let note = charaNote || itemNote;
        if (!note) { return { textStyle:null, baseStyle:null }; }
        // 文字列の空欄を削除
        note = note.replace(/\s/g, "");
        // なし判定
        if (note.match(/^(なし|無し|無効|no|none|nothing)$/)) {
            return { textStyle:null, baseStyle:null, none:true };
        }
        // 文字列を分割
        note = note.replace(/\s/g, "").split(",");
        // スタイルをメモ欄から検索
        if (note) {
            textStyle = getTextStyle(note[0]);
            baseStyle = getBaseStyle(note[1]);
        }
        return { textStyle:textStyle, baseStyle:baseStyle, typeName:name }
    };
    
    //- 基本スタイルの取得
    function getStyleBasic(typeName) {
        let textStyle = null;
        let baseStyle = null;
        if (!typeName) {
            textStyle = keke_textStyleList[0];
            baseStyle = keke_baseStyleList[0];
        } else {
            textStyle = getTextStyle(keke_styleBasicCfg[`${typeName}テキストスタイル`]);
            baseStyle = getBaseStyle(keke_styleBasicCfg[`${typeName}ベーススタイル`]);
        }
        typeName = typeName == "ダメ" ? "ダメージ"　: typeName == "ST" ? "ステート" : typeName;
        return { textStyle:textStyle, baseStyle:baseStyle, invalid:keke_styleBasicCfg[`${typeName}無効`] }
    };


    //- マンガビューの形成3
    function createMangaView3(charaSprite) {
        if (!charaSprite._toCreateMangaView3Ke || !charaSprite._toCreateMangaView3Ke.length) { return; }
        if (charaSprite._toCreateMangaView3Ke[0].wait) {
            charaSprite._toCreateMangaView3Ke[0].wait--;
            return;
        }
        // 1からデータ受け取り
        const _1 = charaSprite._toCreateMangaView3Ke.shift();
        if (!_1 || !_1.text) { return; }
        const text = _1.text;
        const textStyle = _1.textStyle;
        const baseStyle = _1.baseStyle;
        const pack = _1.pack;
        const type = _1.type;
        const item = _1.item;
        const battler = charaSprite._battler;
        // 表示位置設定を取得
        const posCfg = pack.type == "victory" && battler._actorId ? keke_posCfgVictory : 
        battler._enemyId ? keke_posCfgEnemy : keke_posCfgActor;
        let viewDire = posCfg["表示方向"];
        if (pack.serifUdReverse) { viewDire = viewDire == "上" ? "下" : viewDire == "下" ? "上" : viewDire; }
        if (_1.viewDire) { viewDire = _1.viewDire};
        const rel = viewDire == "上" ? "up" : viewDire == "下" ? "down" : "";
        const offsetX = posCfg["ずらしX"] || 0;
        const offsetY = posCfg["ずらしY"] || 0;
        const noTsuno = pack.isCutin ? true : posCfg["ツノなし"];
        // 小窓内容の取得
        const minis = {};
        if (textStyle["小窓表示"] != "表示しない") {
            if (textStyle["小窓表示"] == "キャラ名") {
                minis.text = charaSprite._actor ? charaSprite._actor.name() : charaSprite._enemy.name();
            } else if (textStyle["小窓表示"] == "技名") {
                if (type == "skill" || type == "item" || type == "chain") {
                    minis.text = item.name;
                } else {
                    minis.text = charaSprite._actor ? charaSprite._actor.name() : charaSprite._enemy.name();
                }
            }
            minis.textStyle = copyHash(keke_miniTextStyle);
            minis.baseStyle = copyHash(keke_miniBaseStyle);
            // 本体テキストスタイルの小窓文字サイズを適用
            if (textStyle["小窓文字サイズ"]) { minis.textStyle["文字サイズ"] = getFontSize(textStyle["小窓文字サイズ"], minis.textStyle["文字サイズ"]); }
            // ベース縁取り幅が空欄なら本体に合わせる
            if (minis.baseStyle["縁取り幅"] == null) { minis.baseStyle["縁取り幅"] = Math.ceil(baseStyle["縁取り幅"] / 2) || 0; }
        }
        // アイコンスプライトの形成
        const icons = {};
        const iconIndex = item ? item.iconIndex : null;
        if (iconIndex && textStyle["アイコン表示"]) {
            icons.sprite = createIconSprite(iconIndex);
            icons.sprite._isIcon = true;
            icons.posX = keke_iconPos["X"];
            icons.posY = keke_iconPos["Y"];
            icons.posW = -0.5;
        }
        // フルアニメステータスASIの取得
        const asi = getFullAnimeStatusAsi(battler);
        // 表示位置を取得
        let x = 0;
        let y = 0;
        // 技名ビューの場合(何もしない)
        if (pack.isNameView) {
           x = newFunc_screenW(keke_nameViewCfg["X位置"]);
           y = newFunc_screenW(keke_nameViewCfg["Y位置"]);
        // フルアニメステータスの場合
        } else if (asi) {
            if (!asi.faceBaseSprite || !asi.faceBaseSprite.parent) { return; }
            const faceX = asi.faceBaseSprite.x;
            const faceY = asi.faceBaseSprite.y;
            x = faceX;
            y = faceY;
        // 通常の場合
        } else {
            if (!charaSprite || !charaSprite.parent) { return; }
            x = charaSprite._homeX + charaSprite._offsetX;
            y = charaSprite._homeY + charaSprite._offsetY;
            // アクターの場合の位置補正
            if (charaSprite._actor) {
                y += !$gameSystem.isSideView() ? 8 : -8;
            }
        }
        // テキストボックス設定を取得
        const cfgs = { rel:rel, noScopes:keke_noShowScope, noTsuno:noTsuno };
        // 技名ビューの場合
        if (pack.isNameView) {
            cfgs.noTsuno = true;
        // フルアニメステータスの場合
        } else if (asi) {
            cfgs.oriSpriteX = asi.faceBaseSprite.x;
            cfgs.oriSpriteY = asi.faceBaseSprite.y;
        } else {
            cfgs.oriSpriteX = charaSprite.x;
            cfgs.oriSpriteY = charaSprite.y;
        }
        // カットインの場合は方向補正なし
        if (pack.isCutin) { cfgs.rel = ""; }
        // テキストボックスの形成
        const boxData = createTextBox(text, x, y, textStyle, baseStyle, cfgs, minis, icons);
        // ボックスデータ受け取り
        const textSprite = boxData.textSprite;
        textSprite._isText = true;
        const baseSprite = boxData.baseSprite;
        const tsunoSprite = boxData.tsunoSprite;
        const miniTextSprite = boxData.miniTextSprite;
        const miniBaseSprite = boxData.miniBaseSprite;
        const skinSprite = boxData.skinSprite;
        const allBase = boxData.allBase;
        // レイヤーを取得
        const layer = getLayer(battler);
        // チルド & 変数にセット
        const skin = baseStyle["スキン"];
        const skinOver = skin && skin["レイヤー"] == "ベースより上";
        const views = [];
        // オールベースをチルド
        layer.addChild(allBase);
        // 各スプライトをチルド
        if (skinOver) { allBase.addChild(baseSprite); } 
        if (skinSprite) {
            allBase.addChild(skinSprite);
            views.push(skinSprite);
        }
        if (!skinOver) { allBase.addChild(baseSprite); } 
        views.push(baseSprite);
        allBase.addChild(textSprite);
        views.push(textSprite);
        if (icons.sprite) {
            allBase.addChild(icons.sprite);
            views.push(icons.sprite);
        }
        if (tsunoSprite) {
            allBase.addChild(tsunoSprite);
            views.push(tsunoSprite);
        }
        if (miniBaseSprite) {
            allBase.addChild(miniBaseSprite);
            views.push(miniBaseSprite);
        }
        if (miniTextSprite) {
            allBase.addChild(miniTextSprite);
            views.push(miniTextSprite);
        }
        // オールベースをセット
        views.push(allBase);
        // 少し後に再チルド
        //setTimeout(rechildView, 100, views, battler);
        // スプライトに各種データを保存
        views.forEach(sprite => {
            //相対位置を保存
            sprite._relPosXKe = sprite.x;
            sprite._relPosYKe = sprite.y;
            // フルアニメステータスかを保存
            sprite._isAsiKe = asi ? true : false;
            // 技名ビューかを保存
            sprite._isNameView = pack.isNameView;
            // プラグイン『MPP_Pseudo3DBattle』に対応
            sprite._pseudo3dType = "";
        });
        // スブライト群を変数に追加
        charaSprite._mangaViewSpritesKe = [...charaSprite._mangaViewSpritesKe, ...views];
        // 位置データを保存
        const topSprite = views[0];
        topSprite._offsetXKe = offsetX;
        topSprite._offsetYKe = offsetY;
        topSprite._relKe = rel;
        // スケールのセット-スキン以外
        if (keke_viewAnime["時間"]) {
            views.forEach(sprite => {
                if (sprite._isSkin) { return; }
                setScale(sprite);
            });
        };
        // セリフウェイトの処理
        if (!pack.waited) {
            waitForSerif(null, pack.count);
        }
        // カウントを取得して開始
        let count = cutControlChar(pack.count != null ? pack.count : battler._mangaViewCountKe);
        battler._mangaViewCountKe = count;
        // タイプに即時セリフフラグを追加
        if (pack.isFlashSerif) { pack.type += "_flash"; }
        // カットイン時の処理
        if (pack.isCutin) {
            // タイプにカットインフラグを追加
            pack.type += "_cutin";
            // いったん見えない化
            views.forEach(sprite => sprite ? sprite.visible = false : null);
        }
        // カットイン済みフラグを更新
        battler._isCutinedKe = pack.isCutin;
        // 表示中のタイプを保存
        if (pack.type) { battler._mangaViewTypeKe = pack.type; }
        allBase._mangaViewTypeKe = pack.type;
        // マンガビューの位置更新
        updateMangaViewPos(charaSprite, true);
        // マンガビューのツノ更新
        updateMangaViewTsuno(charaSprite, true);
    };

    //- 制御文字のカット
    function cutControlChar(num) {
        if (!num) { return 0; }
        const str = num.toString();
        if (!str.match(/[a-z]/)) { return num; }
        return Number(str.replace(/[a-z]/g, "")) || -1000;
    };

    //- ビューの再チルド
    function rechildView(views, battler) {
        const layer = getLayer(battler);
        if (!layer || !layer.parent) { return; }
        const allBase = views.find(sprite => sprite._isAllBase && !sprite._isNameView);
        const allBaseNm = views.find(sprite => sprite._isAllBase && sprite._isNameView);
        views.forEach(sprite => {
            if (!sprite || !sprite.parent) { return; }
            if (sprite._isAllBase) { return; }
            if (sprite._isAllBase) { layer.addChild(sprite);  return; }
            if (sprite._isNameView) {
                if (aAllBaseNm && allBaseNm.parent) { allBaseNm.addChild(sprite); }
            } else {
                if (allBase && allBase.parent) { allBase.addChild(sprite); }
            }
        });
    };

    //- スケールのセット
    function setScale(sprite) {
        const duraMax = keke_viewAnime["時間"];
        sprite._scaleKeMglv = { duraMax:duraMax, duration:0, x:sprite.scale.x, y:sprite.scale.y, spdX:sprite.scale.x / duraMax, spdY:sprite.scale.y / duraMax };
        if (keke_viewAnime["方向"].includes("横")) { sprite.scale.x = 0; }
        if (keke_viewAnime["方向"].includes("縦")) { sprite.scale.y = 0; }
    };
    
    
    
    //==================================================
    //--  マンガビューの位置更新とスケール
    //==================================================
    
    //- マンガビューの位置更新
    function updateMangaViewPos(charaSprite, force) {
        if (!charaSprite._mangaViewSpritesKe || !charaSprite._mangaViewSpritesKe.length) { return; }
        const battler = charaSprite._battler;
        const nowType = battler._mangaViewTypeKe;
        const topSprite = charaSprite._mangaViewSpritesKe[0];
        // カットインの時はリターン
        if (nowType.includes("cutin")) { return; }
        const rel = topSprite._relKe || "";
        const views = charaSprite._mangaViewSpritesKe;
        // 表示位置設定を取得
        const posCfg = nowType == "victory" && battler._actorId ? keke_posCfgVictory : 
        battler._enemyId ? keke_posCfgEnemy : keke_posCfgActor;
        const offsetX = posCfg["ずらしX"] || 0;
        const offsetY = posCfg["ずらしY"] || 0;
        // フルアニメステータスASIの取得
        const asi = getFullAnimeStatusAsi(battler);
        // 位置を取得
        let x = 0;
        let y = 0;
        // フルアニメステータスの場合
        if (asi && asi.faceBaseSprite && asi.faceBaseSprite.parent) {
            const faceX = asi.faceBaseSprite.x;
            const faceY = asi.faceBaseSprite.y;
            const faceH = asi.faceOriH * asi.faceBaseSprite.scale.y;
            x = faceX + offsetX;
            y = Math.round(faceY + (rel == "up" ? -faceH / 2 : rel == "down" ? faceH / 2 : 0)) + offsetY;
        // 通常の場合
        } else if (charaSprite && charaSprite.parent) {
            const charaH = charaSprite._frame.height * charaSprite.scale.y;
            x = charaSprite.x + offsetX;
            y = charaSprite.y + (rel == "up" ? -charaH : rel == "down" ? 0 : -charaH / 2) + offsetY;
            if (battler._enemyId || $gameSystem.isSideView()) { y -= 16; }
        }
        // 位置を設定
        views.forEach(sprite => {
            if (!force && !keke_moveWithBattler && !sprite._isNameView) { return; }
            if (sprite._isAllBase) {
                if (sprite._isNameView) {
                    sprite.x = newFunc_screenW(keke_nameViewCfg["位置X"]);
                    sprite.y = newFunc_screenW(keke_nameViewCfg["位置Y"]) + sprite._totalH;
                } else {
                    sprite.x = x;
                    sprite.y = y;
                }
            } else {
                sprite.x = sprite._relativeX;
                sprite.y = sprite._relativeY;
            }
        });
        // 画面外に出さない
        const allBase = views.find(sprite => sprite._isAllBase && !sprite._isNameView);
        const baseSprite = views.find(sprite => sprite._isBase && !sprite._isNameView);
        if (allBase) {
            noOutScreen(battler, allBase, baseSprite, allBase._leftEdge, allBase._rightEdge, allBase._upEdge, allBase._downEdge);
        }
        // 画面外に出さない(技名ビュー)
        /*const allBaseNm = views.find(sprite => sprite._isAllBase && sprite._isNameView);
        const baseSpriteNm = views.find(sprite => sprite._isBase && sprite._isNameView);
        if (allBaseNm) {
            noOutScreen(battler, allBaseNm, baseSpriteNm, allBaseNm._leftEdge, allBaseNm._rightEdge, allBaseNm._upEdge, allBaseNm._downEdge);
        }*/
        // ビューの再チルド
        //rechildView(views, battler);
    };

    //- 画面外に出さない
    function noOutScreen(battler, allBase, baseSprite, left, right, up, down) {
        // 3Dバトルの偏りを取得
        const offset3D = get3DBattleOffset(battler, allBase);
        const overL = allBase.x + left + offset3D.x;
        const overR = allBase.x + right - Graphics.width + offset3D.x;
        const overU = allBase.y + up + offset3D.y;
        const overD = allBase.y + down - Graphics.height + offset3D.y;
        if (overL < 0) { allBase.x -= overL; } else
        if (overR > 0) { allBase.x -= overR; }
        if (overU < 0) { allBase.y -= overU; } else
        if (overD > 0) { allBase.y -= overD; }
        return { l:overL, r:overR, u:overU, d:overD };
    };

    //- 3Dバトルの偏りを取得
    function get3DBattleOffset(battler, allBase) {
        const isFrontActor = !$gameSystem.isSideView() && battler._actorId;
        if (!(MPP_Pseudo3DBattle && !isFrontActor) || allBase._isAsiKe) { return { x:0, y:0 }; }
        const spriteset = SceneManager._scene._spriteset;
        if (!spriteset) { return { x:0, y:0 }; }
        const backSprite = spriteset._back1Sprite || spriteset._back2Sprite;
        if (!backSprite) { return { x:0, y:0 }; }
        const expand = 1.3;
        let x = Math.round((backSprite.x - Graphics.width / 2) * expand);
        let y = 0; //Math.round((backSprite.y - Graphics.height / 2) * expand);
        return { x:x, y:y };
    };
    
    
    //- マンガビューのツノ更新
    function updateMangaViewTsuno(charaSprite, isInit) {
        if (!charaSprite._mangaViewSpritesKe || !charaSprite._mangaViewSpritesKe.length) { return; }
        const views = charaSprite._mangaViewSpritesKe;
        const tsunoSprite = views.find(sprite => sprite._isTsunoKe);
        if (!tsunoSprite) { return; }
        // フルアニメステータスの場合
        const asi = getFullAnimeStatusAsi(charaSprite._battler);
        if (asi) {
            if (asi.faceBaseSprite.x < tsunoSprite.x) { tsunoSprite.scale.x = 1; }
            if (asi.faceBaseSprite.x > tsunoSprite.x) { tsunoSprite.scale.x = -1; }
        // 通常の場合
        } else {
            if (charaSprite.x < tsunoSprite.x) { tsunoSprite.scale.x = 1; }
            if (charaSprite.x > tsunoSprite.x) { tsunoSprite.scale.x = -1; }
        }
    };


    //- マンガビューのスケール
    function scaleMangaView(charaSprite) {
        // ビューがないならリターン
        if (!charaSprite._mangaViewSpritesKe || !charaSprite._mangaViewSpritesKe.length) { return; }
        let del = false;
        // 全てのビューを処理
        charaSprite._mangaViewSpritesKe.forEach((sprite, i) => {
            // 拡大がないなら次へ
            if (!sprite || !sprite.transform || !sprite._scaleKeMglv) { return; }
            // 拡大取得
            let scale = sprite._scaleKeMglv;
            // 拡大
            if (keke_viewAnime["方向"].includes("横")) { sprite.scale.x += scale.spdX; }
            if (keke_viewAnime["方向"].includes("縦")) { sprite.scale.y += scale.spdX; }
            // 時間を足す
            scale.duration++;
            // 終了
            if (scale.duration >= scale.duraMax) {
                sprite.scale.x = scale.x;
                sprite.scale.y = scale.y;
                // スプライトを破棄
                if (scale.del) {
                    destroySprite(sprite);
                    charaSprite._mangaViewSpritesKe[i] = null;
                    del = true;
                }
                // 拡大削除
                sprite._scaleKeMglv= null;
            }
        });
        // null を消去
        if (del) {
            charaSprite._mangaViewSpritesKe = charaSprite._mangaViewSpritesKe.filter(sprite => sprite);
            // マンガビューの消去
            if (!charaSprite._mangaViewSpritesKe.length) {
                deleteMangaView(charaSprite);
            }
        }
    };
    
    
    
    //==================================================
    //--  マンガビューの終了
    //==================================================
    
    //- マンガビューの終了
    function endMangaView(charaSprite, force = null) {
        // マンガビューがないならリターン
        if (!charaSprite._mangaViewSpritesKe || !charaSprite._mangaViewSpritesKe.length) { return; }
        // バトラーがいないならリターン
        const battler = charaSprite._battler;
        if (!battler) { return; }
        // 強制ならすぐ消去
        if (force == 1) {
            deleteMangaView(charaSprite);
            return;
        }
        // サブ強制ならすぐフェード開始
        if (force == 2) { battler._mangaViewCountKe = 0; }
        let del = true;
        // カウントが null なら消去しない
        if (battler._mangaViewCountKe == null || battler._mangaViewCountKe < -100) { del = false; }
        // カウント処理。カウントが残っていたら消去しない
        if (battler._mangaViewCountKe > 0) {
            battler._mangaViewCountKe--;
            del = false;;
        }
        // セリフのキー更新。キーが押されたら消去
        if (updateSerifKey(battler,)) { del = true; }
        // 行動中は消去しない
        //if (isActing(battler)) { del = false;; }
        // 消去判定。消去しないならリターン
        if (!del) { return; }
        // カウント削除
        battler._mangaViewCountKe = null;
        // 縮小アニメのセット
        if (keke_viewAnime["時間"]) {
            const duraMax = keke_viewAnime["時間"];
            charaSprite._mangaViewSpritesKe.forEach(charaSprite => {
                charaSprite._scaleKeMglv = { duraMax:duraMax, duration:0, x:0, y:0, spdX:-charaSprite.scale.x / duraMax, spdY:-charaSprite.scale.y / duraMax, del:true };
            });
        } else {
            // マンガビューの消去
            deleteMangaView(charaSprite);
        }
    };

    //- セリフのキー更新
    function updateSerifKey(battler) {
        const type = battler._mangaViewTypeKe;
        if (!type.includes("flash")) { return false; }
        // キー押し判定
        let ok = false;
        if (Input.isRepeated("ok") || Input.isRepeated("cancel") || Input.isRepeated("shift")|| TouchInput.isRepeated()) { ok = true; }
        if (!ok) { return false; }
        // ウェイトを削除
        const interpreter = $gameTroop._interpreter;
        interpreter._waitCount = 1;
        $gameTroop._waitForSerifKeMglv = null;
        return true;
    };

    //- 行動中か
    function isActing(battler) {
        if (BattleManager._phase == "battleEnd") { return false; }
        return battler.isActing() || isActingSpeedStar(battler);
    };

    //- 行動中か(スピードスター)
    function isActingSpeedStar(battler) {
        if (!isSpeedStar()) { return false; }
        const subject = BattleManager._action ? BattleManager._action.subject() : null;
        if (!subject) { return false; }
        return BattleManager._battleWaitKe && subject == battler;
    };
    
    //- マンガビューの消去
    function deleteMangaView(charaSprite) {
        // マンガビューがないならリターン
        if (!charaSprite._mangaViewSpritesKe.length) { return; }
        const battler = charaSprite._battler;
        // 破棄
        charaSprite._mangaViewSpritesKe.forEach(sprite => {
            destroySprite(sprite);
        });
        // 変数を初期化
        battler._mangaViewCountKe = null;
        battler._mangaViewTypeKe = null;
        charaSprite._mangaViewSpritesKe = [];
    };


    //- マンガビューの停止
    function stopMangaView(battler, type) {
        const currentType = battler._mangaViewTypeKe;
        if (!currentType) { return; }
        if (type && !currentType.includes(type)) { return; }
        battler._mangaViewCountKe = 0;
    };

    //- マンガビューの停止 - 全体
    function stopMangaViewAll(type) {
        const members = [...$gameParty.members(), ...$gameTroop.members()];
        members.forEach(battler => {
            // マンガビューの停止
            stopMangaView(battler, type);
        });
    };



    //==================================================
    //--  文字列基本 /ベーシック
    //==================================================
    
    //- 文字列の数字リスト化
    function strToNumList(str) {
        if (!str) { return []; }
        str = str.toString();
        const list = [];
        str = str.replace(/\[/g, "");
        str = str.replace(/\]/g, "");
        const strs = str.split(",");
        let s2 = null;
        for (let s of strs) {
            s2 = s.split("~");
            if (s2.length >= 2) {
                s2 = s2.map(s => Number(s));
                if (s2[1] >= s2[0]) {
                    for (let i = s2[0]; i <= s2[1]; i++) { list.push(i); }
                } else {
                    for (let i = s2[1]; i <= s2[0]; i++) { list.push(i); }
                }
            } else {
                list.push(Number(s));
            }
        };
        return list;
    };



    //==================================================
    //--  配列基本 /ベーシック
    //==================================================
    
    //- ハッシュのディープコピー
    function copyHash(hash) {
        const copy = {};
        Object.keys(hash).forEach(k => {
            if (hash[k].constructor.name == "Object") {
                copy[k] = copyHash(hash[k]);
            } else if (hash[k].constructor.name == "Array") {
                copy[k] = copyArray(hash[k]);
            } else {
                copy[k] = hash[k];
            }
        });
        return copy;
    };

    
    
    //==================================================
    //--  比較基本 /ベーシック
    //==================================================
    
    //- 同じバトラーか
    function isSameBattler(a, b) {
        if (!a) { return !b; }
        if (!b) { return !a; }
        if (a._actorId) {
            if (!b._actorId) { return; }
            return a._actorId == b._actorId;
        }
        if (a._enemyId) {
            if (!b._enemyId) { return; }
            return a.index() == b.index();
        }
    };    
    
    
    
    //==================================================
    //--  テキストボックスの形成
    //==================================================
    
    //- テキストボックスの形成
    function createTextBox(text, x, y, textStyle, baseStyle, cfgs = {}, minis = {}, icons = {}, handler) {
        const form = baseStyle["フォーム"];
        const marginX = baseStyle["余白X"] || 0;
        const marginY = baseStyle["余白Y"] || 0;
        const baseOutW = baseStyle["縁取り幅"] || 0;
        const iconSprite = icons.sprite;
        let allSprites = [];
        // テキストスプライトの形成
        const textData = createTextSprite(text, x, y, textStyle, {}, handler);
        // テキストデータ受け取り
        const textSprite = textData.sprite;
        let textW = textData.width || 0;
        let textH = textData.height || 0;
        const textOutW = textData.outW || 0;
        const textLines = textData.lines;
        allSprites.push(textSprite);
        textOriY = textSprite.y;
        // 縦揃えの処理
        if (cfgs.hAlign && cfgs.hAlign == "down") {
            const h = textLines.h.reduce((a, c, i) => {
                if (i > 0) { c /= 2; }
                return a + c;
            }, 0);
            y -= h;
            textSprite.y -= h;
        }
        // アイコンスプライトの計算
        const iconData = calcIconSprite(icons, textStyle, textLines);
        const iconW = iconData.width;
        const iconH = iconData.height;
        textW += iconW;
        if (!textH) { textH = iconH; }
        // ベーススプライトの形成
        const baseData = createBaseSprite(x, y, textW, textH, baseStyle, cfgs, handler, iconW);
        // ベースデータ受け取り
        const baseSprite = baseData.sprite;
        let baseW = baseData.width || 0;
        let baseH = baseData.height || 0;
        const tsunoSprite = baseData.tsunoSprite;
        const tsunoW = baseData.tsunoW || 0;
        const tsunoAppo = baseData.tsunoAppo;
        allSprites.push(baseSprite);
        if (tsunoSprite) {
            tsunoSprite._tsunoAppoKe = tsunoAppo;
            allSprites.push(tsunoSprite);
        }
        // ギザギザ時は元の幅に
        baseW = form == "ギザギザ" ? textW + marginX * 2 + baseOutW : baseW;
        baseH = form == "ギザギザ" ? textH + marginY * 2 + baseOutW : baseH;
        // スキンの形成
        const skinData = createSkin(x - iconW / 2, y, textW, textH, baseStyle, cfgs);
        const skinSprite = skinData.sprite;
        const skinW = skinData.skinW || 0;
        const skinH = skinData.skinH || 0;
        if (skinSprite) {
            allSprites.push(skinSprite);
        }
        // ベース消去
        const delBase = skinData.delBase || "";
        if (delBase && delBase != "消去しない") {
            baseSprite.visible = false;
            if (delBase == "すべて消去") {
                tsunoSprite.visible = false;
            }
        }
        // ベースとスキンの合計サイズ
        const totalW = Math.max(textW + textOutW, baseW + baseOutW, skinW);
        const totalH = Math.max(textH + textOutW, baseH + baseOutW, skinH);
        // ミニテキストスプライト形成
        const miniTextData = createMiniTextSprite(minis, textSprite, baseSprite, textW, textLines, totalW, totalH, iconW);
        const miniTextSprite = miniTextData.textSprite;
        const miniBaseSprite = miniTextData.baseSprite;
        const miniMaxs = miniTextData.maxs || {};
        if (miniTextSprite) {
            allSprites.push(miniTextSprite);
            allSprites.push(miniBaseSprite);
        }
        // アイコンスプライトのセット
        if (iconSprite) {
            allSprites.push(iconSprite);
        }
        // オールベースを形成
        const allBase = new SpriteKeMglv();
        allSprites.push(allBase); 
        // スプライト判別フラグ
        textSprite._isText = true;
        baseSprite._isBase = true;
        allBase._isAllBase = true;
        if (miniTextSprite) {
            miniTextSprite._isMiniText = true;
            miniBaseSprite._isMiniBase = true;
        }
        if (iconSprite) { iconSprite._isIcon = true; }
        // Xずらし
        const offsetX = baseStyle["ずらしX"] || 0;
        const iconOffsetX = iconW / 2;
        allSprites.forEach(sprite => sprite.x += offsetX + iconOffsetX);
        // Yずらし
        const offsetY = baseStyle["ずらしY"] || 0;
        let textOffsetY = 0;
        if (cfgs.rel == "up") {
            textOffsetY -= textH / 2;
        } else if (cfgs.rel == "down") {
            textOffsetY += textH / 2;
        }
        allSprites.forEach(sprite => sprite.y += offsetY + textOffsetY);
        // 全てのスプライトを処理
        allSprites.forEach(sprite => {
            // オールベース以外は中心からの相対位置を保存
            if (!sprite._isAllBase) {
                sprite._relativeX = sprite.x - (cfgs.oriSpriteX || 0);
                sprite._relativeY = sprite.y - (cfgs.oriSpriteY || 0);
                //sprite._relativeXPure = sprite._relativeX;
                //sprite._relativeYPure = sprite._relativeY - textOffsetY;
            // オールベースはサイズを保存
            } else {
                const noScopes = cfgs.noScopes;
                sprite._leftEdge = baseSprite._relativeX + Math.min(miniMaxs.left || 0, -totalW / 2) + (noScopes["左"] || 0);
                sprite._rightEdge = baseSprite._relativeX + Math.max(miniMaxs.right || 0, totalW / 2) + (noScopes["右"] || 0);
                sprite._upEdge = baseSprite._relativeY + Math.min(miniMaxs.up || 0, -totalH / 2 - baseOutW) + (noScopes["上"] || 0);
                sprite._downEdge = baseSprite._relativeY + Math.max(miniMaxs.down || 0, totalH / 2 + baseOutW)  + (noScopes["下"] || 0);
                sprite._totalW = sprite._rightEdge - sprite._leftEdge;
                sprite._totalH = sprite._downEdge - sprite._upEdge;
            }
        });
        // ツノの位置設定
        setTimeout(posSetTsuno, 0, tsunoSprite, tsunoAppo, tsunoW, baseSprite, baseW, baseStyle);
        return { textSprite:textSprite, baseSprite:baseSprite, tsunoSprite:tsunoSprite, miniTextSprite:miniTextSprite, miniBaseSprite:miniBaseSprite, skinSprite:skinSprite, allBase:allBase, iconW:iconW, iconH:iconH };
    };
    
    //- ツノの位置設定
    function posSetTsuno(tsunoSprite, tsunoAppo, tsunoW, baseSprite, baseW, baseStyle) {
        if (!tsunoSprite || !tsunoAppo || !baseSprite.parent) { return; }
        const t = tsunoAppo;
        // フキダシからはみ出さない
        const baseR = baseSprite.x + baseW / 2 - baseStyle["変形"];
        const tsunoR = tsunoSprite.x + tsunoW / 2;
        let outOx = 0;
        if (tsunoR > baseR) { outOx = tsunoR - baseR }
        const baseL = baseSprite.x - baseW / 2 + baseStyle["変形"];
        const tsunoL = tsunoSprite.x - tsunoW / 2;
        if (tsunoL < baseL) { outOx = tsunoL - baseL; }
        if (outOx) {
            tsunoSprite.x -= outOx;
            t.tsuno.o -= outOx;
        }
        // ベース外枠を描画
        if (t.form == "スクエア") {
            strokeSquare(t.bitmap, t.x, t.y, t.width, t.height, t.outColor, t.outW, t.shape, "", t.tsuno, t.rel);
        }
    };
    
    //- アイコンスプライトの計算
    function calcIconSprite(icons, textStyle, textLines) {
        if (!icons.sprite) { return { width:0, height:0 } }
        const iconSprite = icons.sprite;
        let iconW = icons.faceW || ImageManager.iconWidth;
        let iconH = icons.faceH || ImageManager.iconHeight;
        const iconScale = icons.faceH || icons.faceH ? textStyle["顔グラ拡大率"] || textStyle["アイコン拡大率"] || 1  : textStyle["アイコン拡大率"] || 1;
        // 最大幅のラインを取得
        let maxW = 0;
        let m = 0;
        textLines.w.forEach((w, i) => {
            if (w > maxW) {
                maxW = w;
                m = i;
            } 
        });
        // ラインに応じた拡大
        iconSprite.scale.y = (textLines.h[m] || iconH) / iconH * iconScale;
        iconSprite.scale.x = iconSprite.scale.y;
        iconW *= iconSprite.scale.x;
        iconH *= iconSprite.scale.y;
        //  ラインに応じた位置
        iconSprite.x = textLines.x[0] + (icons.faceH ? textStyle["顔グラX"] || 0 : textStyle["アイコンX"] || 0);
        iconSprite.y = textLines.y[0] + (icons.faceH ? textStyle["顔グラY"] || 0 : textStyle["アイコンY"] || 0);
        // 位置補正
        iconSprite.x += (icons.posX || 0) + iconW * (icons.posW || 0);
        iconSprite.y += (icons.posY || 0) + iconH * (icons.posH || 0);
        // 基本の拡大率を保存
        iconSprite._oriScaleX = iconSprite.scale.x;
        iconSprite._oriScaleY = iconSprite.scale.y;
        return { width:iconW, height:iconH };
    };
    
    //- ミニテキストスプライトの形成
    function createMiniTextSprite(minis, textSprite, baseSprite, textW, textLines, totalW, totalH, iconW) {
        if (!minis.text) { return {}; }
        if (!minis.textStyle["有効"]) {
            minis.text = "";
            return {};
        }
        // ミニテキスト形成
        const miniTextData = createTextSprite(minis.text, 0, 0, minis.textStyle);
        miniTextSprite = miniTextData.sprite;
        const miniTextMaxW = miniTextData.width;
        const miniTextTotalH = miniTextData.height;
        // ミニベース形成
        const miniBaseData = createBaseSprite(0, 0, miniTextMaxW, miniTextTotalH, minis.baseStyle);
        const miniBaseSprite = miniBaseData.sprite;
        const miniBaseW = miniBaseData.width;
        const miniBaseH = miniBaseData.height;
        const miniOutW = miniBaseData.outW;
        // ミニテキスト位置設定
        const miniMaxH = Math.max(miniTextTotalH, miniBaseH, textLines.h[0]);
        const miniMap = minis.baseStyle["配置方向"];
        let miniX = minis.baseStyle["ずらしX"] || 0;
        let miniY = minis.baseStyle["ずらしY"] || 0;
        const miniMaxs = { left:0, right:0, up:0, down:0 }
        if (miniMap.includes("左")) {
            miniX = textSprite.x - textW / 2 + miniTextMaxW / 2 + miniX - (iconW ? iconW / 2 : 0);
            miniMaxs.left = -Math.max(totalW / 2, baseSprite.x - miniX + miniBaseW / 2 + miniOutW);
        }
        if (miniMap.includes("右")) {
            miniX = textSprite.x + textW / 2 - miniTextMaxW / 2 + miniX;
            miniMaxs.right = Math.max(totalW / 2, miniX - baseSprite.x + miniBaseW / 2 + miniOutW);
        }
        if (miniMap.includes("上")) {
            miniY = textLines.y[0] - miniMaxH + miniY;
            miniMaxs.up = -Math.max(totalH / 2, baseSprite.y - miniY + miniBaseH /  + miniOutW);
        }
        if (miniMap.includes("下")) {
            miniY = (textLines.y[textLines.y.length - 1] || 0) + (textLines.h[textLines.h.length - 1] || 0) + miniY;
            miniMaxs.down = Math.max(totalH / 2, miniY - baseSprite.y + miniBaseH / 2 + miniOutW);
        }
        miniTextSprite.x = miniX;
        miniTextSprite.y = miniY
        miniBaseSprite.x = miniX;
        miniBaseSprite.y = miniY;
        return { textSprite:miniTextSprite, baseSprite:miniBaseSprite, width:miniBaseW, height:miniMaxH, maxs:miniMaxs };
    };
    
    //- スキンの形成
    function createSkin(x, y, textW, textH, style, cfgs) {
        if (!style["スキン"]) { return {}; }
        const skin = style["スキン"];
        if (!skin["画像"]) { return {}; }
        const textRateX = skin["テキスト比率X"] != null ? skin["テキスト比率X"] : 1;
        const textRateY = skin["テキスト比率Y"] != null ? skin["テキスト比率Y"] : 1;
        // ビットマップ形成
        const bitmap = ImageManager.loadPicture(skin["画像"]);
        if (!bitmap) { return { sprite:null }; }
        // スプライト形成 & チルド
        const sprite = new SpriteKeMglv(bitmap);
        // アンカー
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        // 拡大率
        sprite._scaleXKe = skin["スケールX"] || 1;
        sprite._scaleYKe = (skin["スケールY"] || 1) * (skin["上下反転"] && cfgs.rel == "down" ? -1 : 1);
        // 幅の増減
        textW += skin["横幅+"] || 0;
        textH += skin["高さ+"] || 0;
        // 不透明度
        sprite.opacity = skin["不透明度"] != null ? skin["不透明度"] : 255;
        // カラートーン
        sprite.setColorTone(skin["カラートーン"] || [0, 0, 0, 0]);
        // 位置
        sprite.x = x + (skin["ずらしX"] || 0);
        sprite.y = y + (skin["ずらしY"] || 0);
        // スキンサイズ
        const skinW = textW * sprite._scaleXKe;
        const skinH = textH * sprite._scaleYKe;
        // スキンフラグ
        sprite._isSkin = true;
        // テキストサイズに合わせる
        bitmap.addLoadListener(function() {
            //- テキストサイズに合わせる
            adjustTextSize(sprite, bitmap, textW * textRateX, textH * textRateY);
        }.bind(this));
        return { sprite:sprite, delBase:skin["ベース消去"], skinW:skinW, skinH:skinH };
    };

    //- テキストサイズに合わせる
    function adjustTextSize(sprite, bitmap, textW, textH) {
        if (textW) {
            const width = textW;
            sprite.scale.x = width / bitmap.width * sprite._scaleXKe;
            sprite._oriScaleX = sprite.scale.x;
        }
        if (textH) {
            const height = textH;
            sprite.scale.y = height / bitmap.height * sprite._scaleYKe;
            sprite._oriScaleY = sprite.scale.y;
        }
        // スケールのセット-スキン
        if (keke_viewAnime["時間"]) { setScale(sprite); }
    };
    
    
    
    //==================================================
    //--  テキストスプライト /ベーシック
    //==================================================
    
    //- テキストスプライトの形成
    function createTextSprite(text, x, y, textStyle, fontData = {}, handler) {
        if  (!text) { return { sprite:new SpriteKeMglv(), lines:{ x:[0], y:[0], w:[0], h:[0] } }; }
        const oriText = text;
        let lines = { x:[0], y:[0], w:[0], h:[0] }
        let textMaxW = 0;
        let textTotalH = 0;
        // 計算用ビットマップを作成
        const calcBitmap = new Bitmap(10, 10);
        // 画面から出ないように文字サイズを調整
        let fontSize = fontData.fontsize || getFontSize(textStyle["文字サイズ"]);
        fontSize = adjustFontSizeInsideScreen(text, calcBitmap, fontSize);
        // 基本のフォントデータを取得
        const oriFonts = {};
        oriFonts.fontSize = fontSize;
        oriFonts.fontBold = fontData.fontBold || textStyle["フォントボールド"];
        oriFonts.fontItalic = fontData.fontItalic || textStyle["フォントイタリック"];
        oriFonts.textColor = fontData.textColor || textStyle["文字色"] || "rgba(0, 0, 0, 1)";
        oriFonts.outlineColor = fontData.outlineColor || textStyle["縁取り色"] || "rgba(0, 0, 0, 1)";
        oriFonts.outlineWidth = fontData.outlineWidth || textStyle["縁取り幅"] || "3";
        let outW = oriFonts.outlineWidth;
        // フォントスタイルのセット
        setFontStyle(calcBitmap, textStyle, fontData, oriFonts.fontSize);
        // テキストデータの取得
        const textData = getTextData(text, calcBitmap, textStyle, oriFonts, fontSize, outW);
        lines = textData.lines;
        textMaxW = textData.textMaxW;
        textTotalH = textData.textTotalH;
        // 計算用ビットマップを破棄
        calcBitmap.destroy();
        // テキストスプライト形成
        const textSprite = new Sprite_Clickable(handler);
        // 有効でないなら非表示
        if (textStyle["有効"] != null && !textStyle["有効"]) { textSprite.visible = false; }
        // アンカー
        textSprite.anchor.x = 0.5;
        textSprite.anchor.y = 0.5;
        // テキストビットマップ形成
        const textBitmap = new Bitmap(textMaxW, textTotalH);
        textSprite.bitmap = textBitmap;
        // フォントスタイルのセット
        setFontStyle(textBitmap, textStyle, fontData, oriFonts.fontSize);
        // 一文字ずつテキスト描画
        text = oriText;
        fontSize = oriFonts.fontSize;
        let lineX = lines.x[0];
        let lineY = lines.y[0];
        let i = 0;
        while (text) {
            // 改行
            if (text.startsWith("\\n") || text.startsWith("\n")) {
                text = text.startsWith("\\n") ? text.slice(2) : text.slice(1);
                i++;
                lineX = lines.x[i];
                lineY = lines.y[i];
            // 制御文字の読み取り
            } else if (text[0] == "\\") {
                scan = scanControlChar(text, fontSize, oriFonts, textBitmap);
                text = scan.text;
                fontSize = scan.fontSize;
            // 1文字ずつ描画 
            } else {
                const char = text[0];
                text = text.slice(1);
                const charW = textBitmap.measureTextWidth(char);//strWidth(char, fontSize);
                const charH = fontSize + outW;
                const offY = charH < lines.h[i] ? (lines.h[i] - charH) / 2 : 0
                textBitmap.drawText(char, lineX, lineY + offY, charW, charH);
                lineX += charW;
            }
        }
        // 位置を設定
        textSprite.x = x;
        textSprite.y = y;
        lines.x = lines.x.map(x => x + textSprite.x - textMaxW / 2);
        lines.y = lines.y.map(y => y + textSprite.y - textTotalH / 2 + lines.h[0] / 2);
        return { sprite:textSprite, width:textMaxW, height:textTotalH, lines:lines, outW:outW };
    };

    //- 画面から出ないように文字サイズを調整
    function adjustFontSizeInsideScreen(text, calcBitmap, fontSize) {
        calcBitmap.fontSize = fontSize;
        // 最も文字数が多いラインを取得
        const textLines = text.split("\n");
        let maxLine = "";
        let maxLineW = 0;
        textLines.forEach(line => {
            line += " ";
            const lineW = calcBitmap.measureTextWidth(line);
            if (lineW > maxLineW) {
                maxLine = line;
                maxLineW = lineW;
            }
        });
        // 画面からはみ出ない文字サイズまで減らす
        const gw = Graphics.width;
        while (maxLineW > gw) {
            calcBitmap.fontSize--;
            if (calcBitmap.fontSize <= $gameSystem.mainFontSize()) { break; }
            maxLineW = calcBitmap.measureTextWidth(maxLine);
        }
        return calcBitmap.fontSize;
    };

    //- テキストデータの取得
    function getTextData(text, calcBitmap, textStyle, oriFonts, fontSize, outW) {
        const align = textStyle["揃え"];
        let lines = { x:[0], y:[0], w:[0], h:[0] }
        let textMaxW = 0;
        let textTotalH = 0;
        let i = 0;
        // テキストをスキャン
        while (text) {
            // 改行
            if (text.startsWith("\\n") || text.startsWith("\n")) {
                text = text.startsWith("\\n") ? text.slice(2) : text.slice(1);
                textMaxW = Math.max(lines.w[i], textMaxW);
                textTotalH += lines.h[i];
                i++;
                lines.y[i] = textTotalH;
            // 制御文字の読み取り
            } else if (text[0] == "\\") {
                preFontSize = fontSize;
                const scan = scanControlChar(text, fontSize, oriFonts, calcBitmap);
                text = scan.text;
                fontSize = scan.fontSize;
            // 1文字ずつ描画 
            } else {
                const char = text[0];
                text = text.slice(1);
                const charW = calcBitmap.measureTextWidth(char);
                const charH = fontSize + outW;
                if (!lines.w[i]) { lines.w[i] = 0; }
                if (!lines.h[i]) { lines.h[i] = 0; }
                lines.w[i] += charW;
                lines.h[i] = Math.max(charH, lines.h[i]);
            }
        }
        // 最後の行のサイズを加算
        if (lines.w[i]) { textMaxW = Math.max(lines.w[i], textMaxW); }
        if (lines.h[i]) { textTotalH += lines.h[i]; }
        // 最大横幅に縁取り幅を追加
        textMaxW += outW;
        // ラインの座標Xを取得
        lines.w.forEach((w, i) => {
            const diffX = textMaxW - w;
            lines.x[i] = align == "left" ? 0 : align == "center" ? diffX / 2 : diffX;
        });
        return { lines:lines, textMaxW:textMaxW, textTotalH:textTotalH };
    };
    
    //- フォントスタイルのセット
    function setFontStyle(bitmap, style, fontData = {}, fontSize) {
        bitmap.fontFace = fontData.face || style["フォント"] || $gameSystem.mainFontFace();
        bitmap.fontSize = getFontSize(fontSize || style["文字サイズ"], fontData.size);
        bitmap.fontBold = fontData.bold || style["フォントボールド"];
        bitmap.fontItalic = fontData.italic || style["フォントイタリック"];
        bitmap.textColor = fontData.color || style["文字色"] || "rgba(255, 255, 255, 1)";
        bitmap.outlineWidth =  fontData.outW || style["縁取り幅"] || 4;
        bitmap.outlineColor =  fontData.outColor || style["縁取り色"] || "rgba(0, 0, 0, 1)";
    };
    
    //- 制御文字の読み取り
    function scanControlChar(text, fontSize, oriFonts, bitmap = null) {
        let matched = false;
        // テキストコモン
        match = text.match(/^[\x1b\\]cm\[([^\]]*)\]/);
        if (match) {
            let common =  $gameSystem._textCommonKe ? $gameSystem._textCommonKe[match[1]] || "" : "";
            text = text.replace("\\cm[" + match[1] + "]", common);
        }
        // 文字サイズ
        match = text.match(/^[\x1b\\]fs\[([^\]]*)\]/);
        if (match) {
            fontSize = getFontSize(match[1], oriFonts.fontSize)
            if (bitmap) { bitmap.fontSize = fontSize; }
            text = text.replace(match[0], "");
            matched = true;
        }
        // 文字色
        match = text.match(/^[\x1b\\]c\[([^\]]*)\]/);
        if (match) {
            if (bitmap) { bitmap.textColor = getTextColor(match[1], oriFonts); }
            text = text.replace(match[0], "");
            matched = true;
        }
        // フォントボールド
        match = text.match(/^[\x1b\\]fb\[([^\]]*)\]/);
        if (match) {
            if (bitmap) { bitmap.fontBold = !match[1] ? oriFonts.fontBold : Number(match[1]) ? true : false; }
            text = text.replace(match[0], "");
            matched = true;
        }
        // フォントイタリック
        match = text.match(/^[\x1b\\]fi\[([^\]]*)\]/);
        if (match) {
            if (bitmap) { bitmap.fontItalic = !match[1] ? oriFonts.fontItalic : Number(match[1]) ? true : false; }
            text = text.replace(match[0], "");
            matched = true;
        }
        // 縁取り幅
        match = text.match(/^[\x1b\\]ow\[([^\]]*)\]/);
        if (match) {
            if (bitmap) { bitmap.outlineWidth = getOutWidth(match[1], oriFonts.outlineWidth); }
            text = text.replace(match[0], "");
            matched = true;
        }
        // 縁取り色
        match = text.match(/^[\x1b\\]oc\[([^\]]*)\]/);
        if (match) {
            if (bitmap) { bitmap.outlineColor = getTextColor(match[1], oriFonts); }
            text = text.replace(match[0], "");
            matched = true;
        }
        // フォントクリア
        match = text.match(/^[\x1b\\]cl/);
        if (match) {
            fontSize = oriFonts.fontSize;
            if (bitmap) {
                bitmap.textColor = ColorManager.normalColor();
                bitmap.fontBold = false;
                bitmap.fontItalic = false;
                bitmap.outlineWidth = oriFonts.outlineWidth;
                bitmap.outlineColor = oriFonts.outlineColor;
            }
            text = text.replace(match[0], "");
            matched = true;
        }
        // マッチしなかったら \ だけ消去
        if (!matched) { text = text.replace(/^[\x1b\\]/, ""); }
        return { text:text, fontSize:fontSize };
    };

    //- 文字サイズの取得
    function getFontSize(size, baseSize) {
        const mainSize = baseSize || $gameSystem.mainFontSize();
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
    
    //- 文字色の取得
    function getTextColor(str) {
        if (!str) { return oriFonts.textColor || ColorManager.normalColor(); }
        str = str.toString();
        if (!str.match(",")) { return ColorManager.textColor(Number(str)); }
        const strs = str.replace(/\s/g, "").split(",");
        const c = [0, 0, 0, 0].map((v, i) => strs[i] ? strs : i == 3 ? 1 : 0);
        return `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`
    };

    //- 縁取り幅の取得
    function getOutWidth(size, baseSize) {
        const mainSize = baseSize || 3;
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
    //--  ベーススプライト /ベーシック
    //==================================================
    
    //- ベーススプライトの形成
    function createBaseSprite(x, y, width, height, baseStyle, cfgs = {}, handler, iconW) {
        const form = baseStyle["フォーム"];
        const marginX = baseStyle["余白X"];
        const marginY = baseStyle["余白Y"];
        const opacity = baseStyle["不透明度"];
        const color = baseStyle["カラー"];
        const outColor =  baseStyle["縁取り色"];
        const outW = baseStyle["縁取り幅"];
        // ベーススプライト形成
        const baseSprite = new Sprite_Clickable(handler);
        // 有効でないなら非表示
        if (baseStyle["有効"] != null && !baseStyle["有効"]) { baseSprite.visible = false; }
        // アンカー
        baseSprite.anchor.x = 0.5;
        baseSprite.anchor.y = 0.5;
        // 不透明度
        baseSprite.opacity = opacity != null ? opacity : 255;
        // 幅データ
        let baseW = width + marginX * 2;
        let baseH = height+ marginY * 2;
        // ギザギザ時のベース拡大
        if (form == "ギザギザ" && !cfgs.isFace) {
            baseW = (width > 800 ? width + 160 : width * 1.2) + marginX * 2;
            baseH = (height > 280 ? height + 160 : height * 1.6) + marginY * 2;
        }
        // ベースビットマップ形成
        const baseBitmap = new Bitmap(baseW + outW * 2, baseH + outW * 2);
        baseSprite.bitmap = baseBitmap;
        // ツノが必要か
        const isTsuno = baseStyle["吹き出しツノ"] && !cfgs.noTsuno;
        // スタイルに応じたビットマップ描画
        const tsunoAppo = drawBitmapByStyle(baseBitmap, outW / 2, outW / 2, baseW + outW, baseH + outW, baseStyle, cfgs.rel, isTsuno);
        // X座標
        baseSprite.x = x - iconW / 2;
        // Y座標
        baseSprite.y = y;
        // ツノが必要なら形成
        const tsunoSize = baseStyle["吹き出しツノ"];
        let tsunoSprite = null;
        let tsunoW = 0;
        let tsunoH = 0;
        let tsunoOy = 0;
        if (isTsuno) {
            // スプライト形成
            tsunoSprite = new SpriteKeMglv();
            tsunoSprite.anchor.x = 0.5;
            tsunoSprite.anchor.y = 0.5;
            // ビットマップ形成
            const shut = form != "スクエア";
            const tsunoPlus = shut ? 1.25 : 1;
            tsunoW = tsunoSize + outW;
            tsunoH = tsunoSize + outW;
            const tsunoBitmap = new Bitmap(tsunoW + outW, tsunoH + outW);
            fillTsuno(tsunoBitmap, outW / 2, outW / 2, tsunoW, tsunoH * tsunoPlus, color, shut);
            strokeTsuno(tsunoBitmap, outW / 2, outW / 2, tsunoW, tsunoH * tsunoPlus, outColor, outW, shut);
            tsunoSprite.bitmap = tsunoBitmap;
            // 位置設定
            tsunoSprite.x = baseSprite.x + (baseStyle["…ツノずらしX"] || 0);
            const offsetY = baseStyle["…ツノずらしY"] || 0;
            if (cfgs.rel == "up") {
                tsunoOy = -tsunoBitmap.height;
                tsunoSprite.y = baseSprite.y + baseBitmap.height / 2 + tsunoBitmap.height / 2 - outW + offsetY;
            } else if (cfgs.rel == "down") {
                tsunoOy = tsunoBitmap.height;
                tsunoSprite.y = baseSprite.y - baseBitmap.height / 2 - tsunoBitmap.height / 2 + outW - offsetY;
                tsunoSprite.scale.y *= -1;
            }
            // ツノフラグ
            tsunoSprite._isTsunoKe = true;
        }
        return { sprite:baseSprite, width:baseW, height:baseH, outW:outW, tsunoSprite:tsunoSprite, tsunoOy:tsunoOy, tsunoW:tsunoW, tsunoAppo:tsunoAppo, outW:outW };
    };
    
    //- スタイルに応じたビットマップ描画
    function drawBitmapByStyle(bitmap, x, y, width, height, style, rel = null, isTsuno) {
        const form = style["フォーム"];
        const color = style["カラー"];
        const outColor = style["縁取り色"];
        const outW = style["縁取り幅"];
        const shape = style["変形"];
        const tsuno = { o:0, w:!isTsuno ? 0 : style["吹き出しツノ"] };
        let tsunoAppo = null;
        // フォームごとの描画
        if (form == "スクエア") {
            fillSquare(bitmap, x, y, width, height, color, shape);
            if (outW) {
                if (isTsuno) {
                    tsunoAppo = { form:form, bitmap:bitmap, x:x, y:y, width:width, height:height, outColor:outColor, outW:outW, shape:shape, tsuno:tsuno, rel:rel }
                } else {
                    strokeSquare(bitmap, x, y, width, height, outColor, outW, shape, "", tsuno, rel);
                }
            }
        } else if (form == "横アーモンド") {
            fillAlmond(bitmap, x, y, width, height, color, "x");
            if (outW) { strokeAlmond(bitmap, x, y, width, height, outColor, outW, "x"); }
        } else if (form == "縦アーモンド") {
            fillAlmond(bitmap, x, y, width, height, color, "y");
            if (outW) { strokeAlmond(bitmap, x, y, width, height, outColor, outW, "y"); }
        } else if (form == "ダイヤ") {
            fillDiya(bitmap, x, y, width, height, color, shape);
            if (outW) { strokeDiya(bitmap, x, y, width, height, outColor, outW, shape); }
        } else if (form == "ギザギザ") {
            gizaOuts = [];
            fillGiza(bitmap, x, y, width, height, color, shape);
            if (outW) { strokeGiza(bitmap, x, y, width, height, outColor, outW, shape); }
        }
        return tsunoAppo;
    };
    
    //- スタイルに応じたビットマップ切り取り
    /*function cutBitmapByStyle(bitmap, x, y, width, height, style) {
        const form = style["フォーム"];
        const shape = style["変形"];
        // フォームごとの描画
        if (form == "スクエア") {
            designSquare(bitmap, x, y, width, height, shape);
        } else if (form == "横アーモンド") {
            designAlmond(bitmap, x, y, width, height, "x");
        } else if (form == "縦アーモンド") {
            designAlmond(bitmap, x, y, width, height, "y");
        } else if (form == "ダイヤ") {
            designDiya(bitmap, x, y, width, height, shape);
        } else if (form == "ギザギザ") {
            designGiza(bitmap, x, y, width, height, shape);
        }
        bitmap.context.clip();
    };*/
    
    
    
    //==================================================
    //--  アイコンスプライト /ベーシック
    //==================================================
    
    //- アイコンスプライトの形成
    function createIconSprite(iconIndex, anchorX = 0.5, anchorY = 0.5) {
        const sprite = new SpriteKeMglv();
        sprite.anchor.x = anchorX;
        sprite.anchor.y = anchorY;
        const bitmap = ImageManager.loadSystem("IconSet");
        sprite.bitmap = bitmap;
        const pw = ImageManager.iconWidth;
        const ph = ImageManager.iconHeight;
        const sx = (iconIndex % 16) * pw;
        const sy = Math.floor(iconIndex / 16) * ph;
        sprite.setFrame(sx, sy, pw, ph);
        return sprite;
    };
    
    
    
    //==================================================
    //--  図形描画 /ベーシック
    //==================================================
    
     // スクエアの塗り潰し
    function fillSquare(bitmap, x, y, width, height, color = "rgba(0,0,0,1)",  round = 0, corner = "") {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designSquare(bitmap, x, y, width, height,  round, corner);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- スクエアの線画
    function strokeSquare(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1,  round = 0, corner = "", tsuno = {}, rel = "") {
        const context = bitmap.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designSquare(bitmap, x, y, width, height,  round, corner, tsuno, rel, lineW);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- スクエアのデザイン
    function designSquare(bitmap, x, y, width, height,  round = 0, corner = "", tsuno = {}, rel = "", lineW = 0) {
        const context = bitmap.context;
        context.beginPath();
        const c1 = corner.includes("1") ? 0 : round;    // 左上
        const c2 = corner.includes("2") ? 0 : round;    // 左下
        const c3 = corner.includes("3") ? 0 : round;    // 右上
        const c4 = corner.includes("4") ? 0 : round;    // 右下
        context.moveTo(x +  c1, y);
        if (tsuno.w && rel == "down") {
            context.lineTo(x + width / 2 + tsuno.o - tsuno.w / 2, y);
            context.moveTo(x + width / 2 + tsuno.o + tsuno.w / 2, y);
        }
        context.lineTo(x + width -  c3, y);
        context.quadraticCurveTo(x + width, y, x + width, y +  c3);
        context.lineTo(x + width, y + height -  c4);
        context.quadraticCurveTo(x + width, y + height, x + width -  c4, y + height);
        if (tsuno.w && rel == "up") {
            context.lineTo(x + width / 2 + tsuno.o + tsuno.w / 2, y + height);
            context.moveTo(x + width / 2 + tsuno.o - tsuno.w / 2, y + height);
        }
        context.lineTo(x +  c2, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height -  c2);
        context.lineTo(x, y + c1);
        if (c1) {
            context.quadraticCurveTo(x, y, x + c1, y);
        } else {
            context.lineTo(x, y - lineW / 2);
        }
    };
    
    //- アーモンドの塗り潰し
    function fillAlmond(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", way = "x") {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designAlmond(bitmap, x, y, width, height, way);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- アーモンドの線画
    function strokeAlmond(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1, way = "x") {
        const context = bitmap.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designAlmond(bitmap, x, y, width, height, way);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- アーモンドのデザイン
    function designAlmond(bitmap, x, y, width, height, way = "x") {
        const context = bitmap.context;
        context.beginPath();
        if (way == "x") {
            context.moveTo(x, y + height / 2);
            context.quadraticCurveTo(x + width / 2, y - height / 2, x + width, y + height / 2);
            context.quadraticCurveTo(x + width / 2, y + height * 1.5, x , y + height / 2);
        } else if (way == "y") {
            context.moveTo(x + width / 2, y);
            context.quadraticCurveTo(x - width / 2, y + height / 2, x + width / 2, y + height);
            context.quadraticCurveTo(x + width * 1.5, y + height / 2, x + width / 2 , y);
        }
    };
    
    //- ギザギザの塗り潰し
    function fillGiza(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", shape = 1) {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designGiza(bitmap, x, y, width, height, shape);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ギザギザの線画
    function strokeGiza(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1, shape = 1) {
        const context = bitmap.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designGiza(bitmap, x, y, width, height, shape);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ギザギザのデザイン
    let gizaXNum = null;
    let gizaOuts = [];
    
    function designGiza(bitmap, x, y, width, height, shape = 1) {
        const context = bitmap.context;
        context.beginPath();
        const outs = gizaOuts;
        let rand = null;
        width -= x * 2;
        height -= y * 2;
        const xOut = Math.min(width / 9, 80);
        const yOut = Math.min(height / 6, 80);
        rand = gizaXNum ? gizaXNum : 50 + Math.randomInt(50);
        const xNum = Math.max(Math.floor((width - xOut * 2) / 100), 2);
        gizaXNum = rand;
        const yNum = Math.max(Math.floor((height - yOut * 2) / 50), 2);
        const r1 = 0.5;
        const r2 = 0.5;
        const xDiv = (width - xOut * 2) / xNum;
        const yDiv = (height - yOut * 2) / yNum;
        let nowX = x + xOut + xDiv / 2;
        let nowY = y + yOut;
        let newRandoms = [];
        context.moveTo(nowX, nowY);
        if (!shape) {
            // 上
            for (let i = 0; i < xNum - 1; i++) {
                rand = outs.length ? outs.shift() : yOut * r1 + Math.randomInt(yOut * r2);
                context.lineTo(nowX + xDiv / 2, nowY - rand);
                context.lineTo(nowX + xDiv, nowY);
                nowX += xDiv;
                newRandoms.push(rand);
            }
            // 右上
            context.lineTo(nowX + xDiv / 2 + xOut / 3, nowY - yOut / 3);
            context.lineTo(nowX + xDiv / 2, nowY + yDiv / 2);
            nowX += xDiv / 2;
            nowY += yDiv / 2;
            // 右
            for (let i = 0; i < yNum - 1; i++) {
                rand = outs.length ? outs.shift() : xOut * r1 + Math.randomInt(xOut * r2);
                context.lineTo(nowX + rand, nowY + yDiv / 2);
                context.lineTo(nowX, nowY + yDiv);
                nowY += yDiv;
                newRandoms.push(rand);
            }
            // 右下
            context.lineTo(nowX + xOut / 3, nowY + yDiv / 2 + yOut / 3);
            context.lineTo(nowX - xDiv / 2, nowY + yDiv / 2);
            nowX -= xDiv / 2;
            nowY += yDiv / 2;
            // 下
            for (let i = 0; i < xNum - 1; i++) {
                rand = outs.length ? outs.shift() : yOut * r1 + Math.randomInt(yOut * r2);
                context.lineTo(nowX - xDiv / 2, nowY + rand);
                context.lineTo(nowX - xDiv, nowY);
                nowX -= xDiv;
                newRandoms.push(rand);
            }
            // 左下
            context.lineTo(nowX - xDiv / 2 - xOut / 3, nowY + yOut / 3);
            context.lineTo(nowX - xDiv / 2, nowY - yDiv / 2);
            nowX -= xDiv / 2;
            nowY -= yDiv / 2;
            // 左
            for (let i = 0; i < yNum - 1; i++) {
                rand = outs.length ? outs.shift() : xOut * r1 + Math.randomInt(xOut * r2);
                context.lineTo(nowX - rand, nowY - yDiv / 2);
                context.lineTo(nowX, nowY - yDiv);
                nowY -= yDiv;
                newRandoms.push(rand);
            }
            // 左上
            context.lineTo(nowX - xOut / 3, nowY - yDiv / 2 - yOut / 3);
            context.lineTo(nowX + xDiv / 2, nowY - yDiv / 2);
            nowX += xDiv / 2;
            nowY -= yDiv / 2;
            gizaOuts = newRandoms;
            return
        }
        // 上
        for (let i = 0; i < xNum - 1; i++) {
            rand = outs.length ? outs.shift() : yOut / 2 + Math.randomInt(yOut / 2);
            context.quadraticCurveTo(nowX + xDiv / 2, nowY - yOut, nowX + xDiv / 2, nowY - rand);
            context.quadraticCurveTo(nowX + xDiv / 2, nowY, nowX + xDiv, nowY);
            nowX += xDiv;
        }
        // 右上
        context.quadraticCurveTo(nowX + xOut / 2, nowY + yDiv / 2 - yOut / 2, nowX + xDiv / 2 + xOut / 3, nowY - yOut / 3);
        context.quadraticCurveTo(nowX + xDiv / 2, nowY + yDiv / 2, nowX + xDiv / 2, nowY + yDiv / 2);
        nowX += xDiv / 2;
        nowY += yDiv / 2;
        // 右
        for (let i = 0; i < yNum - 1; i++) {
            rand = outs.length ? outs.shift() : xOut / 2 + Math.randomInt(xOut / 2);
            context.quadraticCurveTo(nowX + rand, nowY + yDiv / 2, nowX + xOut, nowY + yDiv / 2);
            context.quadraticCurveTo(nowX, nowY + yDiv, nowX, nowY + yDiv);
            nowY += yDiv;
        }
        // 右下
        context.quadraticCurveTo(nowX + xOut / 2, nowY + yOut / 2, nowX + xOut / 3, nowY + yDiv / 2 + yOut / 3);
        context.quadraticCurveTo(nowX, nowY + yDiv / 2, nowX - xDiv / 2, nowY + yDiv / 2);
        nowX -= xDiv / 2;
        nowY += yDiv / 2;
        // 下
        for (let i = 0; i < xNum - 1; i++) {
            rand = outs.length ? outs.shift() : yOut / 2 + Math.randomInt(yOut / 2);
            context.quadraticCurveTo(nowX - xDiv / 2, nowY + yOut, nowX - xDiv / 2, nowY + rand);
            context.quadraticCurveTo(nowX - xDiv / 2, nowY, nowX - xDiv, nowY);
            nowX -= xDiv;
        }
        // 左下
        context.quadraticCurveTo(nowX - xOut / 2, nowY - yDiv / 2 + yOut / 2, nowX - xDiv / 2 - xOut / 3, nowY + yOut / 3);
        context.quadraticCurveTo(nowX - xDiv / 2, nowY - yDiv / 2, nowX - xDiv / 2, nowY - yDiv / 2);
        nowX -= xDiv / 2;
        nowY -= yDiv / 2;
        // 左
        for (let i = 0; i < yNum - 1; i++) {
            rand = outs.length ? outs.shift() : xOut / 2 + Math.randomInt(xOut / 2);
            context.quadraticCurveTo(nowX - xOut, nowY - yDiv / 2, nowX - rand, nowY - yDiv / 2);
            context.quadraticCurveTo(nowX, nowY - yDiv, nowX, nowY - yDiv);
            nowY -= yDiv;
        }
        // 左上
        context.quadraticCurveTo(nowX - xOut / 2, nowY - yOut / 2, nowX - xOut / 3, nowY - yDiv / 2 - yOut / 3);
        context.quadraticCurveTo(nowX, nowY - yDiv / 2, nowX + xDiv / 2, nowY - yDiv / 2);
        nowX += xDiv / 2;
        nowY -= yDiv / 2;
        gizaOuts = newRandoms;
    };
    
    //- ダイヤの塗り潰し
    function fillDiya(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", round = 0, corner = "") {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designDiya(bitmap, x, y, width, height, round, corner);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ダイヤの線画
    function strokeDiya(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1, round = 0, corner = "") {
        const context = bitmap.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designDiya(bitmap, x, y, width, height, round, corner);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ダイヤのデザイン
    function designDiya(bitmap, x, y, width, height, round = 0, corner = "") {
        const context = bitmap.context;
        context.beginPath();
        const c1 = corner.includes("1");    // 左上
        const c2 = corner.includes("2");    // 左下
        const c3 = corner.includes("3");    // 右上
        const c4 = corner.includes("4");    // 右下
        if (c1) {
            context.moveTo(x, y);
            context.lineTo(x + width / 2, y);
        } else {
            context.moveTo(x + width / 2, y);
        }
        if (c3) {
            context.lineTo(x + width, y);
            context.lineTo(x + width, y + height / 2);
        } else {
            context.quadraticCurveTo(x + width * 3/4 + round, y + height * 1/4 - round, x + width, y + height / 2);
        }
        if (c4) {
            context.lineTo(x + width, y + height);
            context.lineTo(x + width / 2, y + height);
        } else {
            context.quadraticCurveTo(x + width * 3/4 + round, y + height * 3/4 + round, x + width / 2, y + height);
        }
        if (c2) {
            context.lineTo(x, y + height);
            context.lineTo(x, y + height / 2);
        } else {
            context.quadraticCurveTo(x + width * 1/4 - round, y + height * 3/4 + round, x, y + height / 2);
        }
        if (c1) {
            context.lineTo(x, y);
        } else {
            context.quadraticCurveTo(x + width * 1/4 - round, y + height * 1/4 - round, x + width / 2, y);
        }
    };
    
    //- ツノの塗り潰し
    function fillTsuno(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", shut) {
        const context = bitmap.context;
        context.save();
        context.fillStyle = color;
        designTsuno(bitmap, x, y, width, height, shut);
        context.fill();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ツノの線画
    function strokeTsuno(bitmap, x, y, width, height, color = "rgba(0,0,0,1)", lineW = 1, shut) {
        const context = bitmap.context;
        context.save();
        context.strokeStyle = color;
        context.lineWidth = lineW;
        designTsuno(bitmap, x, y, width, height, lineW, shut);
        context.stroke();
        context.restore();
        bitmap._baseTexture.update();
    };
    
    //- ツノのデザイン
    function designTsuno(bitmap, x, y, width, height, lineW = 0, shut) {
        const context = bitmap.context;
        context.beginPath();
        context.moveTo(x, y);
        context.quadraticCurveTo(x + width * 3/4 - lineW, y + height / 2, x + width / 2, y + height);
        context.quadraticCurveTo(x + width * 3/4 + lineW, y + height / 2, x + width, y);
        if (shut) { context.lineTo(x, y); }
    };
    
})();