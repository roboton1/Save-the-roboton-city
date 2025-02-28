//=============================================================================
// Keke_ParamOverLimit - パラメータ限界突破
// バージョン: 1.0.8
//=============================================================================
// Copyright (c) 2023 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc レベルや能力値を限界突破&表示調整
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.0.8】
 * レベルや能力値を限界突破できる & 表示調整
 * 
 * ■能力値限界突破
 * ◎敵も味方もデータベースの最大値を突破可能
 * ◎レベル100以上でも能力値曲線を活かした自然な成長と必要経験値
 * ◎レベル100以上でもスキル習得
 * ◎ゲーム中に最大レベル変更
 * ◎最大レベルをメニューに表示
 * ◎能力値の桁の増加に対応した位置調整
 * ◎HPの桁が多い場合は丸める。100000000 → 1億 など
 * ◎HPMPを無限にできる
 * 
 * ■表示調整
 * ◎レベルの表示調整
 * ◎HPMPTPの表示調整
 * ◎能力値の表示調整
 * 
 * ● 使い方 ●
 * 
 * ■【機能1】限界突破した能力値を設定
 * ◎アクター、職業、スキル、アイテム、装備、敵キャラ、ステート のメモ欄に
 *   <能力値: 0:  1:  2:  3:  4:  5:  6:  7:  >
 *   0: 最大HP
 *   1: 最大MP
 *   2: 攻撃力
 *   3: 防御力
 *   4: 魔法力
 *   5: 魔法防御
 *   6: 敏捷性
 *   7: 運
 *   もしくは
 *   <能力値: 最大HP:  最大MP:  攻撃力:  防御力:  魔法力:  魔法防御:  
 *     敏捷性:  運:  >
 * ※データベースで設定した用語も使用可能
 *   例えば攻撃力を「アタック」にしていたらそう書いても通る
 *  ※最大HPと最大MPは「無限」にできる
 * ★例)
 * <能力値: 0:10000000>
 *  最大HPを 1000万 にする
 * <能力値: 最大HP:無限>
 *  最大HPを 無限 にする
 * <能力値: 攻撃力:5000000>
 *  攻撃力を 500万 にする
 * <能力値: アタック:5000000>
 *  攻撃力を 500万 にする
 *  攻撃力を用語で「アタック」にしている場合はこのような書き方もできる
 * <能力値: 最大HP:10000000  攻撃力:5000000  防御力:5000000>
 * 　と、まとめて設定することも可能
 * 
 * 
 * ■【補足1】無限とは
 * 　HPとMPを無限にすることが可能。その特徴は
 * ◎ステータスには「無限」(変更可能)と表示される
 * ◎ダメージは受けるがHPは減らない
 * ◎MPコストは消費されない
 * ◎ダメージはいくら受けても死なないが戦闘不能ステートでは死ぬ
 * ◎無限が解除されると元の最大HP(MP)の全快状態になる
 * 
 * 
 * ■【機能2】キャラごとに最大レベル等を設定
 * ◎アクター、職業、スキル、アイテム、装備、敵キャラ、ステート のメモ欄に
 * 　<レベル: max:  init:  grow:>
 * ★例)
 * <レベル: max:200>
 * 　最大レベルを 200 にする
 * <レベル: init:120>
 * 　初期レベルを 120 にする
 * <レベル: grow:平均>
 * 　超過成長タイプを 平均 にする
 * 　超過成長タイプは「繰り返し」「平均」「最後」の三種
 * 　詳しくは後述
 * <レベル: max:200  init:120  grow:最後>
 *  と、まとめて設定することも可能
 * 
 * 
 * ■【補足2】超過成長タイプとは
 * 　レベル100以降の能力値成長方式
 * ◎繰り返し
 * 　データベースで設定したレベル1～99の成長曲線を繰り返す
 * 　レベル110 → 111 ならレベル10 → 11 と同じに、
 * 　レベル255 → 256 ならレベル55 → 56 と同じだけ成長するということ
 * 　レベル100以降も晩成型で尻上がりに伸びるといった、
 * 　成長曲線の形を活かせるのが長所
 * ◎平均
 * 　レベル1～99の平均成長値で成長する
 * 　レベル1～99で1レベルあたり平均 5 成長するなら、
 * 　レペル100以降も 5ずつ成長するということ
 * 　成長曲線の形は無意味になる
  * ◎最後
 * 　レベル94～99の間の平均成長値で成長する
 * 　レベル94 → 99 で平均 10 成長するなら、
 * 　レペル100以降も 10 ずつ成長するということ
 * 　成長曲線の形は無意味になる
 * 　性質上、晩成型の場合はレベル100以降の成長率が非常に高く、
 * 　早熟型の場合は低くなるのでそのへんは注意
 * 
 * 
 * ■【補足3】成長インフレ率とは
 * 　高レベルになるほど成長率が上がるようになる。その上昇度合
 * ◎1レベルアップで能力が 10 上がるとして、成長インフレ率が 50% なら、
 * 　レペル100～199の成長率が 15(150%)
 * 　レベル200～299の成長率が 20(200%)
 * 　レベル300～399の成長率が 25(250%)
 * 成長インフレ率が 100% なら、
 * 　レペル100～199の成長率が 20(200%)
 * 　レベル200～299の成長率が 30(300%)
 * 　レベル300～399の成長率が 40(400%)
 * 
 * 
 * ■【機能3】レベル100以降のスキル習得レベルを設定
 * ◎職業 → 習得するスキルのメモ欄に
 *  <レベル: ***>
 * ★例)
 * <レベル: 120>
 * 　そのスキルをレベル 120　で習得
 *
 * 
 * ■【機能4】ゲーム中に最大レベルを変更
 * 　プラグインコマンド → 最大レベル変更
 * ◎対象アクターを決めて、変更値を入力する
 * 
 * 
 * ■【機能5】メニュー画面に最大レベルを表示
 * 　プラグインパラメータ → 最大レベル表示
 * ◎「最大レベル表示」を true にする
 * ◎表示位置も調整可能
 *
 *
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 *
 *
 * 
 * You can break through the limits of your level and param
 * ◎ Enemies and actors can break through the maximum value of the database
 * ◎ Natural growth and necessary experience points using the param curve 
 *   even at level 100 or higher
 * ◎ Skill acquisition even at level 100 or higher
 * ◎ maxLevel change during the game
 * ◎ Display maxLevel in the menu
 * ◎ Position adjustment corresponding to the increase 
 *   in the digits of ability values
 * ◎ If the ability value is excessive, round it off. 
 *   100000000 → 100 million etc.
 * ◎ HPMP can be infinity
 *
 * ● How to use ●
 *
 * ■ [Function 1] Set the param that exceeded the limit
 * ◎ In the memo column of 
 *   Actor, Class, Skill, Item, Equipment, Enemy Character, and State
 *   <param: 0: 1: 2: 3: 4: 5: 6: 7: >
 *   0: maxHp
 *   1: maxMp
 *   2: atk
 *   3: def
 *   4: mat
 *   5: mdf
 *   6: agi
 *   7: luc
 *   or
 *   <param: mhp:  mmp:  atk:  def:  mat:  mdf:
 *   agi:  luc: >
 * ※ Terms set in the database can also be used
 *     For example, if you set atk to "attack", you can write it like that
 * ※ maxHp and maxMp can be "infinite"
 * ★example)
 * <param: 0:10000000>
 *   Makes maxHp his 10,000,000
  * <param: mhp:Infinity>
  * Make max HP infinite
 * <param: atk:5000000>
 *   Makes atk to his 5,000,000
 * <param: attack:5000000>
 *  Makes atk to his 5,000,000
 *   If you use the term "attack" for atk, you can also write like this
 * <param: maxHp:10000000  atk:5000000  def:5000000>
 *   It is also possible to set all together
 * 
 * 
 * ■ [Supplement 1] What is infinity?
 * It is possible to make HP and MP infinite. Its characteristics are
 * ◎ The status is displayed as "Infinite" (can be changed)
 * ◎ Damage is received but HP does not decrease
 * ◎ MP cost is not consumed
 * ◎ You will not die no matter how much damage you receive, 
 *   but you will die in the deathState.
 * ◎ When infinity is canceled, the original maximum HP (MP) will be full.
 * 
 * 
 * ■ [Function 2] Set the maxLevel etc. for each character
 * ◎ In the memo column of 
 *   Actor, Class, Skill, Item, Equipment, Enemy Character, and State
 *   <level: max: init: grow:>
 * ★example)
 * <level: max:200>
 *   Set maxLevel to 200
 * <level: init:120>
 *   Set the initial level to 120
 * <level: grow:average>
 *   Set the overgrowth type to average
 *   There are three types of overgrowth: "repeat", "average", and "last"
 *   See below for details
 * <level: max:200  init:120  grow:last>
 *   can also be set together
 *
 *
 * ■ [Supplement 2] What is overgrowth type?
 *   param growth method after level 100
 * ◎ repeat
 *   Repeat the growth curve of levels 1 to 99 set in the database
 *   Level 110 → 111 is the same as level 10 → 11,
 *   It means that level 255 → 256 will grow by the same amount as 55 → 56
 *   Even after level 100, it grows late and rises,
 *   The advantage is that the shape of the growth curve can be utilized
 * ◎ average
 *   Grow with average growth value from level 1 to 99
 *   If you grow an average of 5 per level from 1 to 99,
 *   He grows by 5 even after level 100
 *   The shape of the growth curve becomes meaningless
 * ◎Last
 *   Grow with an average growth value between levels 94 and 99
 *   If you grow by an average of 10 at level 94 → 99,
 *   It means that even after level 100, it will grow by 10
 *   The shape of the growth curve becomes meaningless
 *   Due to its nature, 
 *   the growth rate after level 100 is very high in the case of late maturing,
 *   Please note that it will be lower in the case of precocious type.
 * 
 * 
 * ■ [Supplement 3] What is the growth inflation rate?
  *   The higher the level, the higher the growth rate. degree of increase
  * ◎Assuming that param grow by 10 with each level up, if the growth inflation rate is 50%, then
  *   Growth rate of level 100 to 199 is 15 (150%)
  *   Growth rate for levels 200 to 299 is 20 (200%)
  *   Growth rate for levels 300 to 399 is 25 (250%)
  * If the growth inflation rate is 100%, then
  *   Growth rate of level 100 to 199 is 20 (200%)
  *   Growth rate for levels 200 to 299 is 30 (300%)
  *   Growth rate for levels 300 to 399 is 40 (400%)
 *
 *
 * ■ [Function 3] Set skill acquisition level after level 100
 * ◎ Occupation → In the memo column of the skill to be acquired
 * <level: ***>
 * ★example)
 * <level: 120>
 *   Learn the skill at level 120
 *
 *
 * ■ [Function 4] Change the maxLevel during the game
 *   Plugin command → changeMaxLevel
 * ◎ Determine the target actor and enter the change value
 *
 *
 * ■ [Function 5] Display the maxLevel on the menu screen
 *   Plugin parameter → showMaxLevel
 * ◎ Set "showMaxLevel" to true
 * ◎ The display position can also be adjusted.
 * 
 * 
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 * 
 * 
 * 
 * @param レベルの設定
 * 
 * @param 超過成長タイプ
 * @parent レベルの設定
 * @desc overGrowthType レベル99を超えた先の能力値の成長タイプ。繰り返しはレベル99までの成長曲線を繰り返す
 * @type select
 * @option 繰り返し
 * @option 平均
 * @option 最後
 * @default 繰り返し
 * 
 * @param …成長インフレ率
 * @parent レベルの設定
 * @desc  growthInflationRate 100レベルごとに成長率が上がっていく。50 なら +50, +100, +150 と増加
 * @default 50
 * 
 * @param 最大レベルを表示
 * @parent レベルの設定
 * @desc showMaxLevel メニュー画面等で最大レベルを表示する
 * @type boolean
 * @default true
 * 
 * @param レベル表示の調整
 * 
 * @param レベル全体の横幅
 * @parent レベル表示の調整
 * @desc labelTotalW レベル表示全体の横幅。50 なら 50ピクセル。基本 140
 * @default 140
 * 
 * @param ラベルの横幅
 * @parent レベル表示の調整
 * @desc labelWidth レベルのラベルの横幅。50 なら 50ピクセル。基本 48
 * @default 48
 * 
 * @param ラベルの文字サイズ
 * @parent レベル表示の調整
 * @desc labelFontSize レベル値の文字サイズ。26 なら 26、-2 なら 標準サイズ -2、0 なら基本サイズ。基本 0
 * @default 0
 * 
 * @param レベルの文字サイズ
 * @parent レベル表示の調整
 * @desc lavelFontSize レベル値の文字サイズ。26 なら 26、-2 なら 標準サイズ -2、0 なら基本サイズ。基本 0
 * @default 0
 * 
 * @param 最大レベルの文字サイズ
 * @parent レベル表示の調整
 * @desc maxLevelFontSize 最大レベル値の文字サイズ。26 なら 26、-2 なら 標準サイズ -2、0 なら基本サイズ。基本 -3
 * @default -3
 * 
 * @param 能力値表示の調整
 * 
 * @param ステータス能力値欄の横幅
 * @parent 能力値表示の調整
 * @desc statusParamWindow_Width ステータス画面の能力値のウインドウの横幅。50 なら 50ピクセル。基本 300
 * @default 300
 * 
 * @param ステータス能力値の横幅
 * @parent 能力値表示の調整
 * @desc statusParam_Width ステータス画面の能力値の数値部分の横幅。50 なら 50ピクセル。空欄なら自動調整。基本 空欄
 * 
 * @param 装備能力値欄の横幅
 * @parent 能力値表示の調整
 * @desc equipParam_width 装備画面の能力値のウインドウの横幅。50 なら 50ピクセル。基本 312
 * @default 312
 * 
 * @param 装備能力値の横幅
 * @parent 能力値表示の調整
 * @desc equipParam_width 装備画面の能力値の数値部分の横幅。50 なら 50ピクセル。空欄なら自動調整。基本 空欄
 * 
 * @param 簡易ステータスのずらしX
 * @parent 能力値表示の調整
 * @desc simpleStatus_offsetX 簡易ステータスのゲージ等の部分を横にずらす。レベル表示が伸びて入りきらなくなった場合に。基本 0
 * @default 0
 * 
 * @param その他設定
 * 
 * @param HPを丸める
 * @parent その他設定
 * @desc hpAbbreviation HPやMPの桁が多い場合は丸める。100000000 → 1億 など。基本 true
 * @type boolean
 * @default true
 * 
 * @param 能力値を丸める
 * @parent その他設定
 * @desc paramAbbreviation 能力値の桁が多い場合は丸める。100000000 → 1億 など。基本 true
 * @type boolean
 * @default true
 * 
 * @param 無限ワード
 * @parent その他設定
 * @desc infinityWord HPやMPが無限の場合に表示する文字列。基本 無限
 * @default 無限
 *
 *
 *
 * @command 最大レベル変更
 * @desc changeMaxLevel アクターの最大レベルを変更する
 *
 * @arg 対象アクター
 * @desc actor 最大レベルの変更するアクター
 * @type actor
 * 
 * @arg 最大レベル
 * @desc maxLevel 最大レベルの変更値。50 なら最大レベルが 50 になり、+5 なら元の値の +5、-5 なら -5 になる
 */
 
 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];



    //==================================================
    //--  公開メソッド
    //==================================================

    //- ゲームテンプ/初期化(処理追加)
    const _Game_Temp_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function() {
        _Game_Temp_initialize.apply(this);
        // 無限とする値
        this._infinityValueKe = InfinityValue;
        // 無限ワード
        this._infinityWordKe = keke_infinityWord;
    };

    //- 最大レペルの取得(公開)
    Game_Temp.prototype.getMaxLevelKe = function(actor) {
        return getLevelCfgByMemo(actor, "最大レベル")
    };



    //==================================================
    //--  ファイル変数
    //==================================================

    // 無限とする値
    const InfinityValue = 77777777777777777777;
    


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

    //- レペルの設定
    const keke_overGrouthType = parameters["超過成長タイプ"];
    const keke_growthInflationRate = parameters["…成長インフレ率"];
    const keke_showMaxLevel = toBoolean(parameters["最大レベルを表示"]);

    //- レベル表示の調整
    const keke_levelTotalW = Number(parameters["レベル全体の横幅"]);
    const keke_labelW = Number(parameters["ラベルの横幅"]);
    const keke_labelSize = parameters["ラベルの文字サイズ"];
    const keke_levelSize = parameters["レベルの文字サイズ"];
    const keke_maxLevelSize = parameters["最大レベルの文字サイズ"];

    //- 能力値表示の調整
    const keke_statusParamWindowW = Number(parameters["ステータス能力値欄の横幅"]);
    const keke_statusParamW = Number(parameters["ステータス能力値の横幅"]);
    const keke_equipParamWindowW = Number(parameters["装備能力値欄の横幅"]);
    const keke_equipParamW = Number(parameters["装備能力値の横幅"]);
    const keke_simpleStatusOffsetX = Number(parameters["簡易ステータスのずらしX"]);
    
    //- その他設定
    const keke_hpAbbreviation = toBoolean(parameters["HPを丸める"]);
    const keke_paramAbbreviation = toBoolean(parameters["能力値を丸める"]);
    const keke_infinityWord = parameters["無限ワード"];

    parameters = null;
    
    
    
    //==================================================
    //--  プラグインコマンド
    //==================================================
    
    //- 最大レベル変更
    PluginManager.registerCommand(pluginName, "最大レベル変更", args => {
        const actorId = Number(args["対象アクター"]);
        if (!actorId) { return; }
        const actor = $gameParty.allMembers().find(actor => actor._actorId == actorId);
        if (!actor) { return; }
        const maxLevel = args["最大レベル"];
        if (!maxLevel) { return; }
        // 最大レベルの変更
        changeMaxLevel(actor, maxLevel)
    });


    //- 最大レベルの変更
    function changeMaxLevel(actor, maxLevel) {
        // 値を取得
        const match = maxLevel.match(/\d+/)
        const val = match ? Number(match[0]) : null;
        if (!val) { return; }
        if (maxLevel.includes("+")) {
            actor._maxLevelKe += val;
        } else if (maxLevel.includes("-")) {
            actor._maxLevelKe -= val;
        } else {
            actor._maxLevelKe = val;
        }
    };
    
    
    
    //==================================================
    //--  能力値限界突破
    //==================================================

    //- ゲーム・バトラーベース/基礎能力値プラス(処理追加)
    const _Game_BattlerBase_paramBasePlus = Game_BattlerBase.prototype.paramBasePlus;
    Game_BattlerBase.prototype.paramBasePlus = function(paramId) {
        // 通常能力値をメモ欄から取得
        const val = getParam(this, paramId);
        if (val != null) { return val; }
        return _Game_BattlerBase_paramBasePlus.apply(this, arguments);
    };

    //- 能力値の取得
    function getParam(battler, paramId) {
        const metas = bundleAllMeta_array(battler, ["能力値", "param"], null, true);
        if (!metas || !metas.length) { return; }
        // 全てメタを検索
        for (const meta of metas.reverse()) {
            // 数字マッチ
            let matches = meta.match(/\d+\s*:\s*([^\s,]+)/ig) || [];
            for (const match of matches) {
                const strs = match.split(":");
                const id = Number(strs[0]);
                if (id == paramId) {
                    return getInfinity(strs[1], paramId) || Number(strs[1]);
                }
            };
            // 名前マッチ
            matches = meta.match(/[^\s,:]+\s*:\s*([^\s,]+)/ig) || [];
            for (const match of matches) {
                const strs = match.split(":");
                const name = strs[0].replace(/\s/g, "");
                // 名前とパラムIDの照合
                if (meetsNameAndparamId(name, paramId)) {
                    return getInfinity(strs[1], paramId) || Number(strs[1]);
                }
            };
            // 用語マッチ
            matches = meta.match(/[^\s,:]+\s*:\s*([^\s,]+)/ig) || [];
            for (const match of matches) {
                const strs = match.split(":");
                const name = strs[0].replace(/\s/g, "");
                // 用語とパラムIDの照合
                const paramName = TextManager.param(paramId);
                if (name == paramName) {
                    return getInfinity(strs[1], paramId) || Number(strs[1]);
                }
            };
        }
    };
    
    //- 名前とパラムIDの照合
    function meetsNameAndparamId(name, paramId) {
        if (!name) { return false; }
        let id = null;
        if (name.match(/最大HP|maxHp|mhp/i)) { id = 0; } else
        if (name.match(/最大MP|maxMp|mmp/i)) { id = 1; } else
        if (name.match(/攻撃力|attack|atk/i)) { id = 2; } else
        if (name.match(/防御力|defence|def/i)) { id = 3; } else
        if (name.match(/魔法力|magicAttack|mat/i)) { id = 4; } else
        if (name.match(/魔法防御|magicDefence|mdf/i)) { id = 5; } else
        if (name.match(/敏捷性|agility|agi/i)) { id = 6; } else
        if (name.match(/運|luck|luk/i)) { id = 7; }
        return id == paramId;
    };

    //- 無限の取得
    function getInfinity(str, paramId) {
        if (!(paramId == 0 || paramId == 1)) { return; }
        if (str.match(/無限|infinity/i)) {
            return InfinityValue;
        }
        return false;
    };


    //- ゲーム・バトラーベース/リフレッシュ(処理追加)
    const _Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
    Game_BattlerBase.prototype.refresh = function() {
        // 無限時はリフレッシュで全回復
        if (isInfinityState(this, "hp")) { this._hp = this.mhp; }
        if (isInfinityState(this, "mp")) { this._mp = this.mmp; }
        _Game_BattlerBase_refresh.apply(this);
    };

    //- 無限状態か
    function isInfinityState(battler, type) {
        const paramId = getParamId(type);
        if (paramId == null) { return false; }
        return battler.paramBasePlus(paramId) == $gameTemp._infinityValueKe;
    };
    


    //==================================================
    //--  最大レベル限界突破
    //==================================================

    //- ゲームアクター/セットアップ(処理追加)
    const _Game_Actor_setup = Game_Actor.prototype.setup;
    Game_Actor.prototype.setup = function(actorId) {
        _Game_Actor_setup.apply(this, arguments);
        // 最大レベルの初期化
        initMaxLevel(this);
        // メモ欄からの初期レベル取得
        getInitLevelByMemo(this);
    };

    //- 最大レベルの初期化
    function initMaxLevel(actor) {
        let maxLevel = actor.actor().maxLevel;
        // メモ欄からの最大レベル取得
        const memoMax = getLevelCfgByMemo(actor, "最大レベル");
        if (memoMax) {
            maxLevel = memoMax;
        }
        actor._maxLevelKe = maxLevel;
    };

    //- メモ欄からの初期化レベル取得
    function getInitLevelByMemo(actor) {
        const initLevel = getLevelCfgByMemo(actor, "初期レベル");
        if (initLevel) {
            actor._level = initLevel.clamp(0, actor._maxLevelKe);
            actor.initExp();
            actor.initSkills();
            actor.recoverAll();
        }
    };

    //- メモ欄からのレベル設定の取得
    function getLevelCfgByMemo(battler, tage) {
        const metas = bundleAllMeta_array(battler, ["レベル", "level"], null, true);
        if (!metas || !metas.length) { return; }
        // 全てメタを検索
        for (const meta of metas.reverse()) {
            // 最大レベル
            if (tage == "最大レベル") {
                let match = meta.match(/(max|limit|最大|限界)\s*:\s*(\d+)/i);
                if (match) {
                    return Number(match[2]);
                }
            }
            // 初期レベル
            if (tage == "初期レベル") {
                let match = meta.match(/(init|start|初期|開始)\s*:\s*(\d+)/i);
                if (match) {
                    return Number(match[2]);
                }
            }
            // 成長タイプ
            if (tage == "成長タイプ") {
                let match = meta.match(/(grow|growType|成長|成長タイプ)\s*:\s*([^\s,]+)/i);
                if (match) {
                    return match[2];
                }
            }
        }
        return null;
    };


    //- ゲームアクター/最大レベル(処理追加)
    const _Game_Actor_maxLevel = Game_Actor.prototype.maxLevel;
    Game_Actor.prototype.maxLevel = function() {
        // 独自の最大レベルを適用
        if (this._maxLevelKe) {
            return this._maxLevelKe;
        }
        _Game_Actor_maxLevel.apply(this);
    };


    //- ゲームアクター/基礎能力値(処理追加)
    const _Game_Actor_paramBase = Game_Actor.prototype.paramBase;
    Game_Actor.prototype.paramBase = function(paramId) {
        // 超過レベルでのパラメータの取得
        const newParam = getExceedLevelParam(this, paramId);
        if (newParam) {
            return newParam;
        }
        return _Game_Actor_paramBase.apply(this, arguments);
    };

    //- 超過レベルでのパラメータの取得
    function getExceedLevelParam(actor, paramId) {
        if (actor._level < 100) { return null; }
        const params = actor.currentClass().params[paramId];
        const level = actor._level;
        const maxParam = params[99];
        const minParam = params[1];
        const lastUp = maxParam - params[98];
        const totalUp = (maxParam - minParam) + lastUp * 2;
        const growType = getOverGrouthType(actor);
        const hundred = Math.floor(level / 100);
        let param = params[99];
        // 成長タイプ「繰り返し」
        if (growType.match(/repeat|繰り返し/i)) {
            // 百の位の数だけ繰り返す
            for (let i = 1; i <= hundred; i++) {
                // レベル帯インフレ率の取得
                const leveZoneInfrationRate = getLevelZoneInflationRate(i);
                // 途中の位は全て加算
                if (i < hundred) {
                    param += Math.floor(totalUp * leveZoneInfrationRate);
                // 現在の位は能力値曲線から取得
                } else {
                    param += Math.floor(getParamCurve(actor, level, params, lastUp, minParam) * leveZoneInfrationRate);
                }
            }
        // 成長タイプ「平均」
        } else if (growType.match(/averate|平均/i)) {
            const averageUp = Math.floor((params[99] - params[1]) / 98);
            // 百の位の数だけ繰り返す
            for (let i = 1; i <= hundred; i++) {
                // レベル帯インフレ率の取得
                const leveZoneInfrationRate = getLevelZoneInflationRate(i);
                const rest = level % 100 + 1;
                // 途中の位は全て加算
                if (i < hundred) {
                    param += Math.floor(averageUp * 100 * leveZoneInfrationRate);
                // 現在の位は能力値曲線から取得
                } else {
                    param += Math.floor(averageUp * rest * leveZoneInfrationRate);
                }
            };
        // 成長タイプ「最後」
        } else if (growType.match(/last|最後/i)) {
            // 百の位の数だけ繰り返す
            for (let i = 1; i <= hundred; i++) {
                // レベル帯インフレ率の取得
                const leveZoneInfrationRate = getLevelZoneInflationRate(i);
                const rest = level % 100 + 1;
                // 途中の位は全て加算
                if (i < hundred) {
                    param += Math.floor(lastUp * 100 *  leveZoneInfrationRate);
                // 現在の位は能力値曲線から取得
                } else {
                    param += Math.floor(lastUp * rest *  leveZoneInfrationRate);
                }
            };
        }
        return param;
    };

    //- レベル帯インフレ率を取得
    function getLevelZoneInflationRate(levelZone) {
        const inflationRate = keke_growthInflationRate;
        if (!inflationRate) { return 1;}
        return 1 + (inflationRate * levelZone) / 100;
    };

    //- 能力値曲線の取得
    function getParamCurve(actor, level, params, lastUp, minParam) {
        const rest = level % 100;
        let param = lastUp;
        // 十の位以下の残りを計算
        if (rest >= 1) {
            param += lastUp;
            param += params[rest] - minParam;
        }
        return param;
    };

    //- 超過成長タイプの取得
    function getOverGrouthType(actor) {
        // メモ欄からの成長タイプ取得
        const growType = getLevelCfgByMemo(actor, "成長タイプ");
        if (growType) {
            return growType;
        }
        return keke_overGrouthType;
    };



    //==================================================
    //--  最大レベル限界突破 /経験値
    //==================================================

    //- ゲームアクター/レベルアップのための経験値(処理追加)
    const _Game_Actor_expForLevel = Game_Actor.prototype.expForLevel;
    Game_Actor.prototype.expForLevel = function(level) {
        // 超過レベル経験値の取得
        const newExp = getExceedLevelExp(this, level);
        if (newExp) {
            return newExp;
        }
        return _Game_Actor_expForLevel.apply(this, arguments);
    };

    //- 超過レベル経験値の取得
    function getExceedLevelExp(actor, level) {
        if (level < 100) { return null; }
        const maxExp = expForLevel(actor, 99);
        const minExp = expForLevel(actor, 1);
        const lastUp = maxExp - expForLevel(actor, 98);
        const totalUp = (maxExp - minExp) + lastUp * 2;
        let exp = maxExp;
        let increase = 0;
        const increaseType = "repeat";
        // 増加タイプ「繰り返し」
        if (increaseType.match(/repeat|繰り返し/i)) {
            const hundred = Math.floor(level / 100);
            const rest = level % 100;
            // 百の位の数だけ繰り返す
            for (let i = 1; i <= hundred; i++) {
                // 突破した位は全て加算
                if (i < hundred) {
                    exp += totalUp;
                    exp += increase * 100;
                    increase += lastUp;
                // 現在の位は経験値曲線から取得
                } else {
                    exp += getExpCurve(actor, level, lastUp, minExp);
                    exp += increase * rest;
                }
            }
        }
        // 基本の増加
        exp += (level - 99) * lastUp;
        return exp;
    };

    //- 経験値曲線の取得
    function getExpCurve(actor, level, lastUp, minExp) {
        const rest = level % 100;
        let exp = 0;
        // 十の位以下の残りを計算
        exp += lastUp;
        if (rest >= 1) {
            exp += lastUp;
            exp += expForLevel(actor, rest) - minExp;
        }
        return exp;
    };

    //- そのレベルに必要な経験値
    function expForLevel(actor, level) {
        const c = actor.currentClass();
        const basis = c.expParams[0];
        const extra = c.expParams[1];
        const acc_a = c.expParams[2];
        const acc_b = c.expParams[3];
        return Math.round(
            (basis * Math.pow(level - 1, 0.9 + acc_a / 250) * level * (level + 1)) /
                (6 + Math.pow(level, 2) / 50 / acc_b) +
                (level - 1) * extra
        );
    };



    //==================================================
    //--  最大レベル限界突破 /スキル習得
    //==================================================

    //- ゲームアクター/スキルの初期化(処理追加)
    const _Game_Actor_initSkills = Game_Actor.prototype.initSkills;
    Game_Actor.prototype.initSkills = function() {
        _Game_Actor_initSkills.apply(this);
        // スキルの超過レペルの習得
        learnSkillExceedLevel(this);
    };

    //- ゲームアクター/レベルアップ(処理追加)
    const _Game_Actor_levelUp = Game_Actor.prototype.levelUp;
    Game_Actor.prototype.levelUp = function() {
        _Game_Actor_levelUp.apply(this);
        // スキルの超過レペルの習得
        learnSkillExceedLevel(this);
    };

    //- スキルの超過レベルの習得
    function learnSkillExceedLevel(actor) {
        for (const learning of actor.currentClass().learnings) {
            // メモから習得レベルを取得
            let learnLevel = null;
            const match = learning.note.match(/<(レベル|level)\s*:\s*(\d+)\s*>/i)
            if (match) {
                learnLevel = Number(match[2]);
            }
            if (!learnLevel) { continue; }
            const skillId = learning.skillId;
            // 習得レベルに達したら習得
            if (actor.level == learnLevel) {
                actor.learnSkill(skillId)
            // 達していなかったら忘れる
            } else if (actor.isLearnedSkill(skillId) && actor.level < learnLevel) {
                actor.forgetSkill(skillId);

            }
        };
    };



    //==================================================
    //--  レベル表示の調整
    //==================================================

    //- ウインドウ・ステータスベース/アクターレベルの描画(処理追加)
    const _Window_StatusBase_drawActorLevel = Window_StatusBase.prototype.drawActorLevel;
    Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
        // レベル表示を改造
        if (keke_showMaxLevel) {
            const mainSize = this.contents.fontSize;
            const valueW = keke_levelTotalW - keke_labelW - 2;
            // ラベル
            this.changeTextColor(ColorManager.systemColor());
            this.contents.fontSize = getFontSize(keke_labelSize, mainSize);
            const labelW = keke_labelW;
            this.drawText(TextManager.levelA, x, y, labelW);
            // 最大レベル
            x += labelW;
            this.resetTextColor();
            this.contents.fontSize = getFontSize(keke_maxLevelSize, mainSize);
            const maxLevelStr = " / " + actor.maxLevel();
            const maxLevelW = Math.min(valueW / 2 + 5, this.textWidth(maxLevelStr));
            const levelW = valueW - maxLevelW;
            this.drawText(maxLevelStr, x + levelW, y, maxLevelW, "right");
            // レベル
            this.contents.fontSize = getFontSize(keke_levelSize, mainSize);
            this.drawText(actor.level, x, y, levelW, "right");
            // 文字サイズを戻す
            this.contents.fontSize = mainSize;
            return;
        }
        _Window_StatusBase_drawActorLevel.apply(this, arguments);
    };

    //- 文字サイズの取得
    function getFontSize(size, mainSize) {
        mainSize = mainSize || $gameSystem.mainFontSize();
        if (!Number(size)) { return mainSize; }
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


    //- ウインドウ・ステータスベース/シンプルステータスの描画(処理追加)
    const _Window_StatusBase_drawActorSimpleStatus = Window_StatusBase.prototype.drawActorSimpleStatus;
    Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
        // 簡易ステータスのX位置を調整
        this._simpleStatusOffsetXKeProl = keke_simpleStatusOffsetX;
        _Window_StatusBase_drawActorSimpleStatus.apply(this, arguments);
        this._simpleStatusOffsetXKeProl = null;
    };

    //- ウインドウ・ステータスベース/職業の描画(処理追加)
    const _Window_StatusBase_drawActorClass = Window_StatusBase.prototype.drawActorClass;
    Window_StatusBase.prototype.drawActorClass= function(actor, x, y) {
        // 職業のX位置を調整
        if (this._simpleStatusOffsetXKeProl) {
            x += this._simpleStatusOffsetXKeProl;
        }
        _Window_StatusBase_drawActorClass.call(this, actor, x, y);
    };

    //- ウインドウ・ステータスベース/基本ゲージの配置(処理追加)
    const _Window_StatusBase_placeBasicGauges = Window_StatusBase.prototype.placeBasicGauges;
    Window_StatusBase.prototype.placeBasicGauges = function(actor, x, y) {
        // ゲージのX位置を調整
        if (this._simpleStatusOffsetXKeProl) {
            x += this._simpleStatusOffsetXKeProl;
        }
        _Window_StatusBase_placeBasicGauges.call(this, actor, x, y);
    };



    //==================================================
    //--  能力値表示の調整
    //==================================================

    //- スブライトゲージ/数値の描画(処理追加)
    const _Sprite_Gauge_drawValue = Sprite_Gauge.prototype.drawValue;
    Sprite_Gauge.prototype.drawValue = function() {
        // 数値丸め・無限に対応した描画
        if (keke_hpAbbreviation) {
            const currentValue = this.currentValue();
            const currentValueAbb = abbreviationValue(currentValue, this._battler, this._statusType);
            const width = this.bitmapWidth();
            const height = this.textHeight();
            this.setupValueFont();
            this.bitmap.drawText(currentValueAbb, 0, 0, width, height, "right");
            return;
        }
        _Sprite_Gauge_drawValue.apply(this);
    };


    //- ウインドウ・ステータスベース/項目の描画(処理追加)
    const _Window_StatusParams_drawItem  = Window_StatusParams.prototype.drawItem ;
    Window_StatusParams.prototype.drawItem = function(index) {
        // 能力値の横幅・数値丸めに対応した描画
        if (keke_statusParamW || keke_paramAbbreviation) {
            const rect = this.itemLineRect(index);
            const paramId = index + 2;
            const name = TextManager.param(paramId);
            const param = this._actor.param(paramId);
            const value = keke_paramAbbreviation ? abbreviationValue(param) : param;
            // ウインドウの大きさに応じて横幅を変更
            const paramW = keke_statusParamW || 60 + ((keke_statusParamWindowW || 300) - 300);
            this.changeTextColor(ColorManager.systemColor());
            this.drawText(name, rect.x, rect.y, 160);
            this.resetTextColor();
            this.drawText(value, 160, rect.y, paramW, "right");
            return;
        }
        _Window_StatusParams_drawItem.apply(this, arguments);
    };

    //- シーンステータス/ステータス能力値の横幅(処理追加)
    const _Scene_Status_statusParamsWidth = Scene_Status.prototype.statusParamsWidth;
    Scene_Status.prototype.statusParamsWidth = function() {
        return keke_statusParamWindowW || _Scene_Status_statusParamsWidth.apply(this);
    };


    //- ウインドウ・エクイップステータス/現在の能力値の描画(処理追加)
    const _Window_EquipStatus_drawCurrentParam = Window_EquipStatus.prototype.drawCurrentParam;
    Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
        // 数値丸めに対応した描画
        if (keke_paramAbbreviation) {
            const value = this._actor.param(paramId);
            const valueAbb = keke_paramAbbreviation ? abbreviationValue(value) : value;
            const paramWidth = this.paramWidth();
            this.resetTextColor();
            this.drawText(valueAbb, x, y, paramWidth, "right");
            return;
        }
        _Window_EquipStatus_drawCurrentParam.apply(this);
    };

    //- ウインドウ・エクイップステータス/新しい能力値の描画(処理追加)
    const _Window_EquipStatus_drawNewParam = Window_EquipStatus.prototype.drawNewParam;
    Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
        // 数値丸めに対応した描画
        if (keke_paramAbbreviation) {
            const paramWidth = this.paramWidth();
            const newValue = this._tempActor.param(paramId);
            const newValueAbb = keke_paramAbbreviation ? abbreviationValue(newValue) : newValue;
            const diffvalue = newValue - this._actor.param(paramId);
            this.changeTextColor(ColorManager.paramchangeTextColor(diffvalue));
            this.drawText(newValueAbb, x, y, paramWidth, "right");
            return
        }
        _Window_EquipStatus_drawNewParam.apply(this);
    };

    //- シーンエクイップ/ステータス横幅(処理追加)
    const _Scene_Equip_statusWidth = Scene_Equip.prototype.statusWidth;
    Scene_Equip.prototype.statusWidth = function() {
        return keke_equipParamWindowW || _Scene_Equip_statusWidth.apply(this);
    };

    //- ウインドウ・エクイップステータス/能力値の横幅(処理追加)
    const _Window_EquipStatus_paramWidth = Window_EquipStatus.prototype.paramWidth;
    Window_EquipStatus.prototype.paramWidth = function() {
        // ウインドウの大きさに応じて横幅を変更
        return keke_equipParamW || _Window_EquipStatus_paramWidth.apply(this) + ((keke_statusParamWindowW || 312) - 312);
    };

    //- ウインドウ・エクイップステータス/能力値X(処理追加)
    const _Window_EquipStatus_paramX = Window_EquipStatus.prototype.paramX;
    Window_EquipStatus.prototype.paramX = function() {
        let result = _Window_EquipStatus_paramX.apply(this);
        // ウインドウの大きさに応じてX位置を変更
        if (keke_statusParamWindowW) { result -= ((keke_statusParamWindowW || 312) - 312); }
        return result;
    };



    //==================================================
    //--  計算基本 /ベーシック
    //==================================================

    //- 数値を丸める
    function abbreviationValue(value, battler, type) {
        if (!value) { return value; }
        const str = value.toString();
        const length = str.length;
        // 無限とする値か判定
        if (battler) {
            const infinity = checkInfinityValue(battler, type);
            if (infinity) { return infinity; }
        }
        // 桁数に応じた判定
        if (length >= 13) {
            const cutEnd = length - 12;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}兆`
        } else if (length >= 9) {
            const cutEnd = length - 8;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}億`
        } else if (length >= 7) {
            const cutEnd = length - 4;
            let head = str.slice(0, cutEnd);
            const restTop = str.slice(cutEnd, cutEnd + 1);
            if (Number(restTop) >= 5) { head = Number(head) + 1; }
            return `${head}万`
        }
        return `${value}`
    };

    //- 無限とする値か判定
    function checkInfinityValue(battler, type) {
        const gt = $gameTemp;
        // 無限に関する設定がなければリターン
        if (!gt._infinityValueKe || !gt._infinityWordKe) { return null; }
        // 無限にする値か判定
        if (getBaseParam(battler, type) == gt._infinityValueKe) {
            return gt._infinityWordKe;
        }
        return null;
    };

    //- ベースパラムの取得
    function getBaseParam(battler, type) {
        if (type.match(/hp|mp/i)) {
            return battler.paramBasePlus(getParamId(type));
        } else {
            return battler.maxTp();
        }
    };

    //- パラムIDの取得
    function getParamId(type) {
        if (type.match(/hp/i)) { return 0; } else
        if (type.match(/mp/i)) { return 1; } else
        { return null; }
    };



    //==================================================
    //--  メタ取得 /ベーシック
    //==================================================
    
    //- 全てのメタ配列の合算
    function bundleAllMeta_array(battler, words, action, noDelSpace) {
        let data = null
        let array = [];
        // バトラー値
        data = battler._actorId ? battler.actor() : battler.enemy();
        if (data) { metaAll(data.note, words).forEach(e => array.push(e)); }
        if (battler._actorId) {
            // 職業値
            data = battler.currentClass();
            if (data) { metaAll(data.note, words).forEach(e => array.push(e)); }
            // 装備値
            battler._equips.forEach(equip => {
                data = equip.object();
                if (data) { metaAll(data.note, words).forEach(e => array.push(e)); }
            });
        }
        // ステート値
        battler._states.forEach(stateId => {
            data = $dataStates[stateId];
            if (data) { metaAll(data.note, words).forEach(e => array.push(e)); }
        });
        // アクション値
        if (action) {
            data = action.item();
            if (data) { metaAll(data.note, words).forEach(e => array.push(e)); }
        }
        // スペースを削除
        if (!noDelSpace) { array = array.map(e => e.replace(/\s/g, "")); }
        // 空の要素は削除
        array = array.filter(e => e);
        return array;
    };

    //- 全取得メタ
    function metaAll(note, words) {
        var result = [];
        words.forEach(word => {
            var regText = '\<' + word + ':([^\>]*)\>';
            var regExp_g = new RegExp(regText, 'gi');
            var regExp = new RegExp(regText, 'i');
            var matches = note.match(regExp_g);
            if (matches) {
                matches.forEach(function(line) {
                    const match = line.match(regExp);
                    result.push(match[1]);
                });
            }
        });
        return result;
    };
    
})();