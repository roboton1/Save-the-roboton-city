//=============================================================================
// Keke_BattleEventPlus - バトルイベントプラス
// バージョン: 1.0.3
//=============================================================================
// Copyright (c) 2023 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc バトルイベント起動タイミングを増築
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.0.3】
 * 色々なタイミングでバトルイベントを起動できるようにする
 * 実質的にほぼバトル中いつでもバトルイベントの起動が可能
 * 
 * 具体的には以下のバトルイベント起動条件を追加
 * ◎アクター入力前
 * ◎アクター行動前
 * ◎アクター行動後
 * ◎敵キャラ入力前
 * ◎敵キャラ行動前
 * ◎敵キャラ行動後
 * ◎敵撃破
 * ◎勝利前
 * ◎勝利後
 * ◎敗北前
 * ◎敗北後
 * 
 * ● 使い方 ●
 * バトルイベントのページの“一番上”に「注釈」を置き、その中に
 * 
 * <条件: アクター入力前: (アクターID), (何回目の行動か)>
 * <条件: アクター行動前: (アクターID), (何回目の行動か)>
 * <条件: アクター行動後: (アクターID), (何回目の行動か)>
 * <条件: 敵キャラ入力前: (敵キャラのインデックス), (何回目の行動か)>
 * <条件: 敵キャラ行動前: (敵キャラのインデックス), (何回目の行動か)>
 * <条件: 敵キャラ行動後: (敵キャラのインデックス), (何回目の行動か)> 
 * <条件: 敵撃破: (敵キャラのインデックス)>
 * <条件: 勝利前> 
 * <条件: 勝利後> 
 * <条件: 敗北前> 
 * <条件: 敗北後> 
 * 
 * ★例)
 * <条件: アクター入力前: 1>
 * 　ID 1 のアクターの行動入力直前にイベント起動する
 * <条件: アクター入力前: 1, 2>
 * 　ID 1 のアクターの 2回目 の行動入力直前にイベント起動する
 * <条件: 敵キャラ入力前: 1>
 * 　インデックス 1 の敵キャラの行動入力直前にイベント起動する
 * <条件: アクター行動前: 1>
 * 　ID 1 のアクターの行動直前にイベント起動する
 * <条件: アクター行動後: 1>
 * 　ID 1 のアクターの行動直後にイベント起動する
 * <条件: 敵撃破: 1>
 * 　インデックス 1 の敵キャラが撃破された時にイベント起動する
 * <条件: 勝利前>
 * 　勝利リザルトの直前にイベント起動する
 * <条件: 勝利後>
 * 　勝利リザルトの後にイベント起動する
 * 
 * ※対象キャラはアクターは「ID」、敵キャラは「インデックス」で指定する
 * ※イベントページの「スパン」は1回だけ起動するなら『バトル』、
 * 　何回も起動するなら『モーメント』にするのが望ましい
 * 　『ターン』だとまれに起動しないことがあるので
 * 
 * 
 * ■【副次機能】条件分岐「スクリプト」でのデータ取得
 *   行動時(入力前、行動前、行動後)にイベント起動した時、
 * 『行動キャラ』『アクション』『何回目の行動か』を条件分岐の「スクリプト」で取得できる
 * これにより、行動キャラの状態やアクション、何回目の行動かで条件分岐することが可能
 * 
 * 行動キャラ: subject で取得
 * アクション: action で取得
 * アクションデータ: item で取得
 * 何回目の行動か: actCount で取得
 * 
 * ★例)
 * subject.hpRate() <= 0.5
 * 　行動キャラのHPが 50%以下 のとき
 * action.isSkill() && item.id == 10
 * 　行動キャラが ID 10 のスキルを使用したとき
 * action.isItem() && item.id == 10
 * 　行動キャラが ID 10 のアイテムを使用したとき
 * actCount == 2
 * 　行動キャラの 2回目 の行動のとき
 *  
 * 
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 * 
 * 
 * 
 * Make it possible to activate battle events at various times
 * More specifically, the following baddle event activation conditions 
 * have been added.
 * ◎ Before entering the actor
 * ◎ Before Actor Action
 * ◎ After the actor action
 * ◎ Before entering the enemy character
 * ◎ Before the enemy character's action
 * ◎ After enemy character action
 * ◎ Enemy Dead
 * ◎ Before Victory
 * ◎ After victory
 * ◎ Before defeat
 * ◎ After defeat
 *
 * ● How to use ●
 * Place a "note" at the "top" of the battle event page, and
 *
 * <condition: actorInput: (actorID), (How many actions)>
 * <condition: actorBefore: (actorID), (How many actions)>
 * <condition: actorAfter: (actorID), (How many actions)>
 * <condition: enemyInput: (enemyIndex), (How many actions)>
 * <condition: enemyBefore: (enemyIndex), (How many actions)>
 * <condition: enemyAfter: (enemyIndex), (How many actions)>
 * <condition: enemyDead: (enemyIndex)>
 * <condition: victoryBefore>
 * <condition: victoryAfter>
 * <condition: defeatBefore>
 * <condition: defeatAfter>
 *
 * ★example)
 * <condition: actorInput: 1>
 *   Trigger an event just before the action input of the actor with ID 1
 * <condition: actorInput: 1, 2>
 *   Trigger an event just before the actor with ID 1 enters his second action
 * <condition: enemyInput: 1>
 *   Trigger the event just before the action input of the enemy character 
 * with index 1
 * <condition: actorBefore: 1>
 *   Trigger an event just before the action of the actor with ID 1
 * <condition: actorAfter: 1>
 *   Trigger the event immediately after the action of the actor with ID 1
 * <condition: enemyDead: 1>
 *   Event triggered when the enemy character with index 1 is defeated
 * <condition: victoryBefore>
 * 　Start the event just before the victory result
 * <condition: victoryAfter>
 *   Start the event after the victory result
 *
 * ※ Target characters are specified by "ID" for actors and "Index" 
 *   for enemy characters.
 * ※ "Span" on the event page is "Battle" if it starts only once,
 *   If you want to start many times, it is desirable to use "Moment"
 *   Since it may not start in rare cases with "turn"
 *
 *
 * ■ [Secondary function] Data acquisition with conditional branch "script"
 *   When an event is activated during action 
 * (before input, before action, after action),
 * You can get "action character", "action", "how many actions" 
 * with conditional branch "script"
 * By doing this, it is possible to branch conditionally depending 
 * on the action character's state, action and how many actions
 *
 * action character: subject
 * action: action
 * action data: item
 * Action number: actCount
 *
 * ★example)
 * subject.hpRate() <= 0.5
 *   When the action character's HP is less than 50% of him
 * action.isSkill() && item.id == 10
 *   When an action character uses her ID 10 skill
 * action.isItem() && item.id == 10
 *   When the action character uses an item with ID 10
 * actCount == 2
 *   During his second action of the action character
 * 
 *
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 */
 
 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];



    //==================================================
    //--  バトルイベントの呼び出し機会を追加
    //==================================================

    //- ゲームバトラー/チャージ完了時の処理(処理追加)
    const _Game_Battler_finishTpbCharge = Game_Battler.prototype.finishTpbCharge;
    Game_Battler.prototype.finishTpbCharge = function() {
        _Game_Battler_finishTpbCharge.apply(this);
        // チャージ完了時にバトルイベントをセットアップ
        $gameTroop._battleEventRunKeBevp = false;
        // 行動カウントの加算
        addActCount(this);
        // バトラーの行動入力前フラグをオン
        this._inputBeforeKeBevp = true;
        // バトルイベントのセットアップ
        BattleManager._battleEventFlagKeBevp = true;
        $gameTroop.setupBattleEvent();
        BattleManager._battleEventFlagKeBevp = null;
        // バトラーの行動入力前フラグをオフ
        this._inputBeforeKeBevp = null;
    };


    //- バトルマネージャー/ターンの処理(処理追加)
    const _BattleManager_processTurn = BattleManager.processTurn;
    BattleManager.processTurn = function(timeActive) {
        // 行動前にバトルイベントをセットアップ
        $gameTroop._battleEventRunKeBevp = false;
        let delay = false;
        // 行動者が変更されたら
        if (this._subject && this._subject != this._preSubjectKeBevp && canAct(this._subject)) {
            const subject = this._subject;
            // バトラーの行動前フラグをオン
            subject._actionBeforeKeBevp = true;
            // バトルイベントのセットアップ
            BattleManager._battleEventFlagKeBevp = true;
            $gameTroop.setupBattleEvent();
            BattleManager._battleEventFlagKeBevp = null;
            // バトラーの行動後フラグをオフ
            subject._actionBeforeKeBevp = null;
            // バトルイベントを開始したら行動ディレイ
            if ($gameTroop._battleEventRunKeBevp) { delay = true; }
        }
        // 前の行動者を保存
        this._preSubjectKeBevp = this._subject;
        if (!delay) {
            _BattleManager_processTurn.apply(this, arguments);
        }
    };


    //- バトルマネージャー/行動終了時の処理(処理追加)
    const _BattleManager_endBattlerActions = BattleManager.endBattlerActions;
    BattleManager.endBattlerActions = function(battler) {
        _BattleManager_endBattlerActions.apply(this, arguments);
        // 行動後にバトルイベントをセットアップ
        $gameTroop._battleEventRunKeBevp = false;
        // リアクション中は除外
        if (battler._doingReactionKe) { return; }
        // バトラーの行動後フラグをオン
        battler._actionAfterKeBevp = true;
        // バトルイベントのセットアップ
        BattleManager._battleEventFlagKeBevp = true;
        $gameTroop.setupBattleEvent();
        BattleManager._battleEventFlagKeBevp = null;
        // バトラーの行動後フラグをオフ
        battler._actionAfterKeBevp = null;
        // 前のサブジェクトを消去
        this._preSubjectKeBevp = null;
    };


    //- ゲームエネミー/コラプスの実行(処理追加)
    const _Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
    Game_Enemy.prototype.performCollapse = function() {
        // 敵撃破時にバトルイベントをセットアップ
        
        // ハンドラ実行中なら飛ばして本来の処理を実行
        if (!runningHandler) {
            $gameTroop._battleEventRunKeBevp = false;
            // イベント後ハンドラがあるならリターン
            //if ($gameTroop._eventAfterHandlerKeBevp) { return; }
            // 敵キャラの撃破フラグをオン
            this._isCrushedKeBevp = true;
            // バトルイベントのセットアップ
            BattleManager._battleEventFlagKeBevp = true;
            $gameTroop.setupBattleEvent();
            BattleManager._battleEventFlagKeBevp = null;
            // 敵キャラの撃破フラグをオフ
            this._isCrushedKeBevp = null;
            // バトルイベントを開始したらウェイト
            if ($gameTroop._battleEventRunKeBevp) {
                // このメソッドをイベント後ハンドラにセット
                $gameTroop._eventAfterHandlerKeBevp = this.performCollapse.bind(this);
                return;
            }
        }
        _Game_Enemy_performCollapse.apply(this);
    };


    //- バトルマネージャー/勝利の処理(処理追加)
    const _BattleManager_processVictory = BattleManager.processVictory;
    BattleManager.processVictory = function() {
        // 勝利前にバトルイベントをセットアップ
        $gameTroop._battleEventRunKeBevp = false;
        // すでにバトルイベント開始済みなら再実行しない
        if (!this._victoryBeforeStartedKeBevp) {
            // 勝利前フラグをオン
            this._victoryBeforeKeBevp = true;
            // バトルイベントのセットアップ
            BattleManager._battleEventFlagKeBevp = true;
            $gameTroop.setupBattleEvent();
            BattleManager._battleEventFlagKeBevp = null;
            // 勝利前フラグをオフ
            this._victoryBeforeKeBevp = null;
        }
        // バトルイベントを開始したらウェイト
        if ($gameTroop._battleEventRunKeBevp) {
            // 勝利前イベント開始済みフラグをオン
            this._victoryBeforeStartedKeBevp = true;
            return;
        }
        _BattleManager_processVictory.apply(this);
    };



    //- バトルマネージャー/敗北の処理(処理追加)
    const _BattleManager_processDefeat = BattleManager.processDefeat;
    BattleManager.processDefeat = function() {
        // 敗北前にバトルイベントをセットアップ
        $gameTroop._battleEventRunKeBevp = false;
        // すでにバトルイベント開始済みなら再実行しない
        if (!this._defeatBeforeStartedKeBevp) {
            // 敗北前フラグをオン
            this._defeatBeforeKeBevp = true;
            // バトルイベントのセットアップ
            BattleManager._battleEventFlagKeBevp = true;
            $gameTroop.setupBattleEvent();
            BattleManager._battleEventFlagKeBevp = null;
            // 敗北フラグをオフ
            this._defeatBeforeKeBevp = null;
        }
        // バトルイベントを開始したらウェイト
        if ($gameTroop._battleEventRunKeBevp) {
            // 敗北前イベント開始済みフラグをオン
            this._defeatBeforeStartedKeBevp = true;
            return;
        }
        _BattleManager_processDefeat.apply(this);
    };


    //- バトルマネージャー/バトル終了の更新(処理追加)
    const _BattleManager_updateBattleEnd = BattleManager.updateBattleEnd;
    BattleManager.updateBattleEnd = function() {
        // 勝利/敗北後にバトルイベントをセットアップ
        if (this._stopBattleEndKeBevp) { return; }
        $gameTroop._battleEventRunKeBevp = false;
        // すでにバトルイベント開始済みなら再実行しない
        const word = $gameParty.isAllDead() ? "defeat" : "victory";
        if (!this[`_${word}AfterStartedKeBevp`]) {
            // 勝利フラグをオン
            this[`_${word}AfterKeBevp`] = true;
            // バトルイベントのセットアップ
            BattleManager._battleEventFlagKeBevp = true;
            $gameTroop.setupBattleEvent();
            BattleManager._battleEventFlagKeBevp = null;
            // 勝利フラグをオフ
            this[`_${word}AfterKeBevp`] = null;
        }
        // バトルイベントを開始したらウェイト
        if ($gameTroop._battleEventRunKeBevp) {
             // 勝利後イベント開始済みフラグをオン
             this[`_${word}AfterStartedKeBevp`] = true;
            // バトル終了停止フラグをオン
            this._stopBattleEndKeBevp = true;
            return;
        }
        _BattleManager_updateBattleEnd.apply(this);
    };


    //- シーンバトル/終了(処理追加)
    const _Scene_Battle_terminate = Scene_Battle.prototype.terminate;
    Scene_Battle.prototype.terminate = function() {
        _Scene_Battle_terminate.apply(this);
        //- バトル終了時にバトルイベント開始済みフラグをオ
        if (SceneManager._nextScene && SceneManager._nextScene.constructor.name == "Scene_Map") {
            const bm = BattleManager;
            // 勝利前イベント開始済みフラグをオフ
            bm._victoryBeforeStartedKeBevp = null;
            // 敗北前イベント開始済みフラグをオフ
            bm._defeatBeforeStartedKeBevp = null;
            // 勝利後イベント開始済みフラグをオフ
            bm._victoryAfterStartedKeBevp = null;
            // 敗北後イベント開始済みフラグをオフ
            bm._defeatAfterStartedKeBevp = null;
            // バトル終了停止フラグをオン
            bm._stopBattleEndKeBevp = null;
        }
    };


    //- バトルマネージャー/イベントの更新
    const _BattleManager_updateEvent = BattleManager.updateEvent;
    BattleManager.updateEvent = function() {
        // バトル終了停止中はイベントを更新
        if (this._stopBattleEndKeBevp && this._phase == "battleEnd") {
            $gameTroop.updateInterpreter();
        }
        return _BattleManager_updateEvent.apply(this);
    };


    //- 行動可能か
    function canAct(battler) {
        return battler.isAppeared() && battler.isAlive() && !battler.isRestricted()
    };


    //==================================================
    //--  イベント終了時の追加処理
    //==================================================

    // ハンドラ実行中フラグ
    let runningHandler = false;

    //- ゲームトループ/インタープリターの更新
    const _Game_Troop_updateInterpreter = Game_Troop.prototype.updateInterpreter;
    Game_Troop.prototype.updateInterpreter = function() {
        const preRunning = this._interpreter.isRunning();
        _Game_Troop_updateInterpreter.apply(this);
        // イベント終了したら
        if (preRunning && !this._interpreter.isRunning()) {
            // イベント後ハンドラを実行
            if (this._eventAfterHandlerKeBevp) {
                runningHandler = true;
                this._eventAfterHandlerKeBevp();
                runningHandler = null;
                // ハンドラを消去
                this._eventAfterHandlerKeBevp = null;
            }
            // バトル終了停止フラグをオフ
            BattleManager._stopBattleEndKeBevp = null;
        }
    };



    //==================================================
    //--  メモ欄からのデータ取得
    //==================================================

    //- 条件の取得
    function getCondition(note, tage) {
        const metas = metaAll(note, ["条件", "condition"]);
        if (!metas || !metas.length) { return null; }
        const array = [];
        for (const str of metas.reverse()) {
            if (!str) { continue; }
            // アクター入力前
            if (tage == "アクター入力前") {
                const match = str.match(/(^|[,\s\n])(actorInput|アクター入力前|アクター入力|アクター行動入力):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // アクター行動前
            if (tage == "アクター行動前") {
                const match = str.match(/(^|[,\s\n])(actorBefore|actorStart|アクター行動前|アクター行動開始|アクター開始):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // アクター行動後
            if (tage == "アクター行動後") {
                const match = str.match(/(^|[,\s\n])(actorAfter|actorEnd|アクター行動後|アクター行動終了|アクター終了):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // 敵キャラ入力前
            if (tage == "敵キャラ入力前") {
                const match = str.match(/(^|[,\s\n])(enemyInput|敵キャラ入力前|敵キャラ入力|敵キャラ行動入力|エネミー入力前|エネミー入力|エネミー行動入力):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // 敵キャラ行動前
            if (tage == "敵キャラ行動前") {
                const match = str.match(/(^|[,\s\n])(enemyBefore|enemyStart|敵キャラ行動前|敵キャラ行動開始|敵キャラ開始|エネミー行動前|エネミー行動開始|エネミー開始):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // 敵キャラ行動後
            if (tage == "敵キャラ行動後") {
                const match = str.match(/(^|[,\s\n])(enemyAfter|enemyEnd|敵キャラ行動後|敵キャラ行動終了|敵キャラ終了|エネミー行動後|エネミー行動終了|エネミー終了):\s*(\-*\d+\.*\d*)\s*,*\s*(\-*\d*\.*\d*)/i);
                if (match && match[3]) {
                    return { id:Number(match[3]), count:Number(match[4]) };
                }
                continue;
            }
            // 敵撃破
            if (tage == "敵撃破") {
                const match = str.match(/(^|[,\s\n])(enemyDead|enemyDeath|enemyCrush|敵撃破|敵戦闘不能|敵死亡|敵キャラ撃破|敵キャラ戦闘不能|敵キャラ死亡):\s*(\-*\d+\.*\d*)/i);
                if (match && match[2]) {
                    return { id:Number(match[3])　};
                }
                continue;
            }
            // 勝利前
            if (tage == "勝利前") {
                const match = str.match(/(^|[,\s\n])(victoryBefore|勝利前)/i);
                if (match && match[2]) {
                    return true;
                }
                continue;
            }
            // 勝利後
            if (tage == "勝利後") {
                const match = str.match(/(^|[,\s\n])(victoryAfter|勝利後)/i);
                if (match && match[2]) {
                    return true;
                }
                continue;
            }
            // 敗北前
            if (tage == "敗北前") {
                const match = str.match(/(^|[,\s\n])(defeatBefore|敗北前|全滅前)/i);
                if (match && match[2]) {
                    return true;
                }
                continue;
            }
            // 敗北後
            if (tage == "敗北後") {
                const match = str.match(/(^|[,\s\n])(defeatAfter|敗北後|全滅後)/i);
                if (match && match[2]) {
                    return true;
                }
                continue;
            }
        }
        if (!array.length) { return 0; }
        return array;
    };



    //==================================================
    //--  バトルイベントの条件を追加
    //==================================================

    //- ゲームトループ/条件判定(処理追加)
    const _Game_Troop_meetsConditions = Game_Troop.prototype.meetsConditions;
    Game_Troop.prototype.meetsConditions = function(page) {
        // バトルイベントの条件判定を増築

        // バトルイベント起動フラグをオフ
        this._battleEventRunKeBevp = false;
        const result = _Game_Troop_meetsConditions.apply(this, arguments);
        // デフォルト条件があるか
        const beDefault = existDefaultCondition(page);
        // デフォルト条件がある上で false なら false
        if (beDefault && !result) { return false; }
        // 追加条件の取得
        const addConditions = getAddConditions(page);
        // 追加条件がない場合はデフォルト条件を適用
        if (!addConditions.length) { return result; }
        // 追加の条件判定
        const resultAdd = meetsConditionAdd(addConditions);
        // true ならバトルイベント起動フラグをオン
        if (resultAdd) {
            this._battleEventRunKeBevp = true;
        }
        return  resultAdd;
    };

    //- デフォルト条件があるか
    function existDefaultCondition(page) {
        const c = page.conditions;
        if (
            c.turnEnding ||
            c.turnValid ||
            c.enemyValid ||
            c.actorValid ||
            c.switchValid
        ) {
            return true;
        }
        return false;
    };

    //- 追加条件の取得
    function getAddConditions(page) {
        const addConditions = [];
        // 最初の注釈を取得
        const comment = getFirstComment(page);
        if (!comment) { return []; }
        // 『アクター入力前』の取得
        const actorInput = getCondition(comment, "アクター入力前");
        if (actorInput) {
            addConditions.push({ type:"actorInput", actorId:actorInput.id, count:actorInput.count })
        }
        // 『アクター行動前』の取得
        const actorStart = getCondition(comment, "アクター行動前");
        if (actorStart) {
            addConditions.push({ type:"actorStart", actorId:actorStart.id, count:actorStart.count })
        }
        // 『アクター行動後』の取得
        const actorEnd= getCondition(comment, "アクター行動後");
        if (actorEnd) {
            addConditions.push({ type:"actorEnd", actorId:actorEnd.id, count:actorEnd.count })
        }
        // 『敵キャラ入力前』の取得
        const enemyInput = getCondition(comment, "敵キャラ入力前");
        if (enemyInput) {
            addConditions.push({ type:"enemyInput", enemyIndex:enemyInput.id - 1, count:enemyInput.count })
        }
        // 『敵キャラ行動前』の取得
        const enemyStart = getCondition(comment, "敵キャラ行動前");
        if (enemyStart) {
            addConditions.push({ type:"enemyStart", enemyIndex:enemyStart.id - 1, count:enemyStart.count })
        }
        // 『敵キャラ行動後』の取得
        const enemyEnd = getCondition(comment, "敵キャラ行動後");
        if (enemyEnd) {
            addConditions.push({ type:"enemyEnd", enemyIndex:enemyEnd.id - 1, count:enemyEnd.count })
        }
        // 『敵撃破』の取得
        const enemyCrash = getCondition(comment, "敵撃破");
        if (enemyCrash) {
            addConditions.push({ type:"enemyCrash", enemyIndex:enemyCrash.id - 1 });
        }
        // 『勝利前』の取得
        const victoryBefore = getCondition(comment, "勝利前");
        if (victoryBefore) {
            addConditions.push({ type:"victoryBefore" });
        }
        // 『勝利後』の取得
        const victoryAfter = getCondition(comment, "勝利後");
        if (victoryAfter) {
            addConditions.push({ type:"victoryAfter" });
        }
        // 『敗北前』の取得
        const defeatBefore = getCondition(comment, "敗北前");
        if (defeatBefore) {
            addConditions.push({ type:"defeatBefore" });
        }
        // 『敗北後』の取得
        const defeatAfter = getCondition(comment, "敗北後");
        if (defeatAfter) {
            addConditions.push({ type:"defeatAfter" });
        }
        return addConditions;
    };

    //- 追加の条件判定
    function meetsConditionAdd(conditions) {
        if (!conditions || !conditions.length) { return false; }
        // 全ての条件を判定
        for (const condition of conditions) {
            const type = condition.type;
            const count = condition.count;
            // アクター入力前
            if (type == "actorInput") {
                const actor = $gameParty.aliveMembers().find(actor => actor._actorId == condition.actorId);
                if (!actor || !isBattlerInput(actor, count)) { return false; }
                saveSubject(actor);
            // アクター行動前
            } else if (type == "actorStart") {
                const actor = $gameParty.aliveMembers().find(actor => actor._actorId == condition.actorId);
                if (!actor || !isBattlerStart(actor, count)) { return false; }
                saveSubject(actor);
            // アクター行動後
            } else if (type == "actorEnd") {
                const actor = $gameParty.aliveMembers().find(actor => actor._actorId == condition.actorId);
                if (!actor || !isBattlerEnd(actor, count)) { return false; }
                saveSubject(actor);
            // 敵キャラ入力前
            } else if (type == "enemyInput") {
                const enemy = $gameTroop.aliveMembers().find(enemy => enemy.index() == condition.enemyIndex);
                if (!enemy || !isBattlerInput(enemy, count)) { return false; }
                saveSubject(enemy);
            // 敵キャラ行動前
            } else if (type == "enemyStart") {
                const enemy = $gameTroop.aliveMembers().find(enemy => enemy.index() == condition.enemyIndex);
                if (!enemy || !isBattlerStart(enemy, count)) { return false; }
                saveSubject(enemy);
            // 敵キャラ行動後
            } else if (type == "enemyEnd") {
                const enemy = $gameTroop.aliveMembers().find(enemy => enemy.index() == condition.enemyIndex);
                if (!enemy || !isBattlerEnd(enemy, count)) { return false; }
                saveSubject(enemy);
            // 敵撃破
            } else if (type == "enemyCrash") {
                const enemy = $gameTroop.members().find(enemy => enemy.index() == condition.enemyIndex);
                if (!enemy || !enemy._isCrushedKeBevp) { return false; }
            // 勝利前
            } else if (type == "victoryBefore") {
                if (!BattleManager._victoryBeforeKeBevp) { return false; }
            // 勝利後
            } else if (type == "victoryAfter") {
                if (!BattleManager._victoryAfterKeBevp) { return false; }
            // 敗北前
            } else if (type == "defeatBefore") {
                if (!BattleManager._defeatBeforeKeBevp) { return false; }
            // 敗北後
            } else if (type == "defeatAfter") {
                if (!BattleManager._defeatAfterKeBevp) { return false; }
            }
        };
        return true;
    };

    //- バトラー入力前か
    function isBattlerInput(battler, count) {
        if (BattleManager.isTpb()) {
            return battler._inputBeforeKeBevp && checkActCount(battler, count) && canAct(battler);
        } else {
            return BattleManager._phase == "start" && canAct(battler);
        }
    };

    //- バトラー行動前か
    function isBattlerStart(battler, count) {
        return battler._actionBeforeKeBevp && checkActCount(battler, count) && canAct(battler);
    };

    //- バトラー行動後か
    function isBattlerEnd(battler, count) {
        return battler._actionAfterKeBevp && checkActCount(battler, count) && canAct(battler);
    };

    //- 行動カウント判定
    function checkActCount(battler, count) {
        return !count || battler._actCountKeBevp == count;
    };

    //- 行動者を保存
    function saveSubject(battler) {
        $gameTemp._subjectKeBevp = battler;
    };


    //- ゲームトループ/バトルイベントのセットアップ(処理追加)
    const _Game_Troop_setupBattleEvent = Game_Troop.prototype.setupBattleEvent;
    Game_Troop.prototype.setupBattleEvent = function() {
        if (BattleManager._battleEventFlagKeBevp) {
            // 追加バトルイベントは必ず判定を実行
            const pages = this.troop().pages;
            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];
                if (this.meetsConditions(page) && !this._eventFlags[i]) {
                    this._interpreter.setup(page.list);
                    if (page.span <= 1) {
                        this._eventFlags[i] = true;
                    }
                    break;
                }
            }
            // バトルイベント起動したなら
            if (this._battleEventRunKeBevp) {
                // イベントを更新
                if (this._interpreter.isRunning()) { this.updateInterpreter(); }
            }
            return;
        }
        _Game_Troop_setupBattleEvent.apply(this);
    };



    //==================================================
    //-  行動カウント
    //==================================================

    //- ゲームバトラー/バトル開始時の処理(処理追加)
    const _Game_Battler_onBattleStart = Game_Battler.prototype.onBattleStart;
    Game_Battler.prototype.onBattleStart = function(advantageous) {
        _Game_Battler_onBattleStart.apply(this, arguments);
        // 行動カウントの初期化
        initActCount(this);
    };
    
    //- ゲームエネミー/バトル開始時の処理(処理追加)
    /*const _Game_Enemy_onBattleStart = Game_Enemy.prototype.onBattleStart;
    Game_Enemy.prototype.onBattleStart = function(advantageous) {
        _Game_Enemy_onBattleStart.apply(this, arguments);
        // 行動カウントの初期化
        initActCount(this);
    };*/

    //- 行動カウントの初期化
    function initActCount(battler) {
        battler._actCountKeBevp = 0;
    };


    //- 行動カウントの加算
    function addActCount(battler) {
        battler._actCountKeBevp += 1;
    };
    


    //==================================================
    //--  条件分岐スクリプトでのデータ取得
    //==================================================

    //- ゲームインタープリター/スクリプト(処理追加)
    const _Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
    Game_Interpreter.prototype.command111 = function(params) {
        // 条件分岐「スクリプト」での参照項目を追加

        // スクリプト内容を変換
        let params2 = null;
        if ($gameTroop.isEventRunning()) {
            if (params[0] == 12) {
                params2 = copyArray(params);
                const subject = $gameTemp._subjectKeBevp;
                if (subject) {
                    params2[1] = params2[1].replace(/(^|[^\w])subject([^\w]|$)/i, "$1$gameTemp._subjectKeBevp$2");
                    params2[1] = params2[1].replace(/(^|[^\w])actCount([^\w]|$)/i, "$1$gameTemp._subjectKeBevp._actCountKeBevp$2");
                    const action = subject.currentAction();
                    if (action) {
                        params2[1] = params2[1].replace(/(^|[^\w])action([^\w]|$)/i, "$1$gameTemp._subjectKeBevp.currentAction()$2");
                        const item = action.item();
                        if (item) {
                            params2[1] = params2[1].replace(/(^|[^\w])item([^\w]|$)/i, "$1$gameTemp._subjectKeBevp.currentAction().item()$2");
                        }
                    }
                }
            }
        }
        return _Game_Interpreter_command111.call(this, params2 || params);
    };



    //==================================================
    //--  配列基本 /ベーシック
    //==================================================
    
    //- ハッシュのディープコピー
    function copyHash(hash) {
        const copy = {};
        Object.keys(hash).forEach(k => {
            if (!hash[k]) { copy[k] = hash[k];  return; }
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
    
    //- 配列のディープコピー
    function copyArray(array) {
        const copy = [];
        array.forEach((v, i) => {
            if (v.constructor.name == "Object") {
                copy[i] = copyHash(v);
            } else if (v.constructor.name == "Array") {
                copy[i] = copyArray(v);
            } else {
                copy[i] = v;
            }
        });
        return copy;
    };



    //==================================================
    //-  イベント基本 /ベーシック
    //==================================================

    //- 最初の注釈を取得
    function getFirstComment(page) {
        let list = page ? page.list : [];
        if (!list.length) { return ""; }
        // 注釈を全て読み込み
        let comment = "";
        let i = 0;
        while (true) {
            const command = list[i];
            if (!command || !(command.code == 108 || command.code == 408)) { break; }
            comment += command.parameters[0] + "\n";
            i++;
        }
        return comment;
    };



    //==================================================
    //--  メタ取得 /ベーシック
    //==================================================
    
    //- 全取得メタ
    function metaAll(note, words, ratioIndex) {
        var result = [];
        words.forEach(word => {
            var regText = '\<\\s*' + word + '\\s*:([^\>]*)\>';
            var regExp_g = new RegExp(regText, 'g');
            var regExp = new RegExp(regText);
            var matches = note.match(regExp_g);
            if (matches) {
                matches.forEach(function(line) {
                    const match = line.match(regExp);
                    const vals = match[1].replace(/\s/g, "").split(",");
                    ratioIndexEx = ratioIndex - 1;
                    if (ratioIndex && vals[ratioIndexEx] && Math.randomInt(100) >= Number(vals[ratioIndexEx])) {
                        return;
                    }
                    result.push(match[1]);
                });
            }
        });
        return result;
    };
    
})();