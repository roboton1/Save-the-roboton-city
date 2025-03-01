//=============================================================================
//  Keke_FrontViewPlus - フロントビュープラス
// バージョン: 1.0.2
//=============================================================================
// Copyright (c) 2022 ケケー
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @target MZ
 * @plugindesc フロントビュー戦闘の表示を強化
 * @author ケケー
 * @url https://kekeelabo.com
 * 
 * @help
 * 【ver.1.0.2】
 * フロントビュー戦闘で、味方側にもアニメーションとダメージポップを表示する
 *
 * ● 利用規約 ●
 * MITライセンスのもと、自由に使ってくれて大丈夫です
 * 
 * 
 * 
 * Animations and damage pops for allies in standard front-view combat
 *
 * ● Terms of Use ●
 * Feel free to use it under the MIT license.
 * 
 * 
 *
 * @param アニメーションX
 * @desc animationX フロントアクターのアニメーションのX位置ずらし。5 なら右に 5ピクセル ずらす。初期値 0
 * @default 0
 * 
 * @param アニメーションY
 * @desc animationY フロントアクターのアニメーションのY位置ずらし(ダメージポップの位置も変わる)。5 なら下に 5ピクセル ずらす。初期値 0
 * @default 0
 * 
 * @param アニメーションレイヤー
 * @desc animationLayer アニメーションの表示レイヤー。ウインドウより上か下か。初期値 ウインドウより上
 * @type select
 * @option ウインドウより上
 * @option ウインドウより下
 * @default ウインドウより上
 * 
 * @param ダメージポップX
 * @desc damagePosX フロントアクターのダメージポップのX位置ずらし。5 なら右に 5ピクセル ずらす。初期値 0
 * @default 0
 *
 * @param ダメージポップY
 * @desc damagePopY フロントアクターのダメージポップのY位置ずらし。5 なら下に 5ピクセル ずらす。初期値 0
 * @default 0
 */
 
 
 
(() => {
    //- プラグイン名
    const pluginName = document.currentScript.src.match(/^.*\/(.*).js$/)[1];

    
    //- ツクールMVか
    function isMv() {
        return typeof(ColorManager) == "undefined";
    };
    
    
    //- ツクールMZか
    function isMz() {
        return typeof(ColorManager) != "undefined";
    };


    //==================================================
    //--  パラメータ受け取り
    //==================================================

    let parameters = PluginManager.parameters(pluginName);
    
    const keke_animationX = Number(parameters["アニメーションX"]);
    const keke_animationY = Number(parameters["アニメーションY"]);
    const keke_animationLayer = parameters["アニメーションレイヤー"];
    const keke_damagePopX = Number(parameters["ダメージポップX"]);
    const keke_damagePopY = Number(parameters["ダメージポップY"]);

    parameters = null;


    
    //==================================================
    //--  フロントビュープラス
    //==================================================
    
    //- フロントビュー対応か
    function isFrontViewAdapt(sprite) {
        const statusWindow = SceneManager._scene._statusWindow;
        return ($dataSystem && !$gameSystem.isSideView()) && (sprite && sprite._actor) && (statusWindow && statusWindow.visible) && isMz();
    };


    //- スブライトセット・バトル/アクター群の形成(処理追加)
    const _Spriteset_Battle_createActors = Spriteset_Battle.prototype.createActors;
    Spriteset_Battle.prototype.createActors = function() {
        _Spriteset_Battle_createActors.apply(this);
        // フロントビュー時もアクタースプライトを形成
        if ($gameSystem.isSideView()) { return; }
        if (this._actorSprites.length) { return; }
        this._actorSprites = [];
        for (let i = 0; i < $gameParty.maxBattleMembers(); i++) {
            const sprite = new Sprite_Actor();
            this._actorSprites.push(sprite);
            this._battleField.addChild(sprite)
            sprite.visible = false;
       }
    };
    
    
    //- スプライトアクター/位置の更新(処理追加)(MZ)
    if (isMz()) {
    const _Sprite_Actor_updatePosition = Sprite_Actor.prototype.updatePosition;
    Sprite_Actor.prototype.updatePosition = function() {
        _Sprite_Actor_updatePosition.apply(this);
        // フロントアクターの位置更新
        updateFrontActorPos(this);
    };
    };
    
    //- フロントアクターの位置更新
    function updateFrontActorPos(sprite) {
        if (!isFrontViewAdapt(sprite)) { return; }
        const statusWindow = SceneManager._scene._statusWindow;
        $gameTemp.omitSupportMember = true;
        const i = $gameParty.battleMembers().indexOf(sprite._actor);
        const rect = statusWindow.faceRect(i);
        sprite._homeX = statusWindow.x + rect.x + rect.width / 2;
        sprite._homeY = statusWindow.y + rect.y;
        sprite._offsetX = 0;
        sprite._offsetY = 0;
    };
    
    
    //- スブライトセット・バトラー/ターゲットスプライトの作成(処理追加)
    const _Spriteset_Battle_makeTargetSprites = Spriteset_Battle.prototype.makeTargetSprites;
    Spriteset_Battle.prototype.makeTargetSprites = function(targets) {
        let targetSprites = _Spriteset_Battle_makeTargetSprites.apply(this, arguments);
        //- フロントビュー時のアニメーション表示条件を変更
        targetSprites = targetSprites.filter(sprite => {
            if (sprite._isAsFaceKe) { return true; }
            if (!sprite._battler) { return false; }
            if ($gameSystem.isSideView()) { return true; }
            if (sprite._enemy) { return true; }
           return isFrontViewAdapt(sprite);
        });
        return targetSprites;
    };


    //- スブライトバトラー/ダメージポップの更新(処理追加)
    const _Sprite_Battler_updateDamagePopup = Sprite_Battler.prototype.updateDamagePopup;
    Sprite_Battler.prototype.updateDamagePopup = function() {
        //- フロントビューでも味方側のダメージポップを形成する
        if (this._battler.isDamagePopupRequested()) {
            if (isFrontViewAdapt(this)) {
                this.createDamageSprite();
            }
        }
        _Sprite_Battler_updateDamagePopup.apply(this);
    };


    //- スブライトバトラー/ダメージポップX(処理追加)
    const _Sprite_Battler_damageOffsetX = Sprite_Battler.prototype.damageOffsetX;
    Sprite_Battler.prototype.damageOffsetX = function() {
        let result = _Sprite_Battler_damageOffsetX.apply(this);
        // ダメージポップのX位置を調整
        if (isFrontViewAdapt(this)) {
            const svActorOffsetXNo = !$gameSystem.isSideView() && this._actor ? 32 : 0;
            result += keke_damagePopX + svActorOffsetXNo;
        }
        return result;
    };

    //- スブライトバトラー/ダメージポップY(処理追加)
    const _Sprite_Battler_damageOffsetY = Sprite_Battler.prototype.damageOffsetY;
    Sprite_Battler.prototype.damageOffsetY = function() {
        let result = _Sprite_Battler_damageOffsetY.apply(this);
        // ダメージポップのY位置を調整
        if (isFrontViewAdapt(this)) {
            const statusWindow = SceneManager._scene._statusWindow;
            const rect = statusWindow.faceRect(0);
            result +=  keke_damagePopY + rect.height;
        }
        return result;
    };
    
    
    //- スブライトアクター/ダメージスプライトの形成(処理追加)(MZ)
    if (isMz()) {
    const _Sprite_Actor_createDamageSprite = Sprite_Actor.prototype.createDamageSprite;
    Sprite_Actor.prototype.createDamageSprite = function() {
        _Sprite_Actor_createDamageSprite.apply(this);
        // ダメージポップのレイヤーを変更
        if (!isFrontViewAdapt(this)) { return; }
        if (isFrontViewAdapt(this) && !$gameTemp._fullAnimeStatusKe) {
            const sprite = this._damages[this._damages.length - 1];
            SceneManager._scene.addWindow(sprite);
        }
    };
    };
    
    
    //- スプライトバトラー/ダメージポップのセットアップ(処理追加)(MV)
    if (isMv()) {
    const _Sprite_Battler_setupDamagePopup = Sprite_Battler.prototype.setupDamagePopup;
    Sprite_Battler.prototype.setupDamagePopup = function() {
        // ダメージポップ位置を補整
        const requested = this._battler.isDamagePopupRequested();
        const damages = this._damages.map(d => d);
        _Sprite_Battler_setupDamagePopup.apply(this);
        if (requested) {
            if (this._battler.isSpriteVisible()) {
                const last = damages[damages.length - 1];
                if (last && last.children.length) {
                    const cur = this._damages[this._damages.length - 1];
                    cur.x = last.x + 8;
                    cur.y = last.y - 16;
                }
            }
        }
    };
    }


    if (isMz()) {
    //- シーンバトル/アクターウインドウの形成(処理追加)(MZ)
    const _Scene_Battle_createActorWindow = Scene_Battle.prototype.createActorWindow;
    Scene_Battle.prototype.createActorWindow = function() {
        _Scene_Battle_createActorWindow.apply(this);
        // アニメーションレイヤーを形成
        if (keke_animationLayer == "ウインドウより上") {
            this._animationLayerKeFrvp = new Sprite();
            this.addWindow(this._animationLayerKeFrvp);
        }
    };


    //- スプライトセット・バトル/アニメーションスプライトの形成(処理追加)(MZ)
    if (Spriteset_Battle.prototype.createAnimationSprite == Spriteset_Base.prototype.createAnimationSprite) {
        Spriteset_Battle.prototype.createAnimationSprite = function(targets, animation, mirror, delay) {
            Spriteset_Base.prototype.createAnimationSprite.call(this, targets, animation, mirror, delay);
        };
    }
    const _Spriteset_Battle_createAnimationSprite = Spriteset_Battle.prototype.createAnimationSprite;
    Spriteset_Battle.prototype.createAnimationSprite = function(targets, animation, mirror, delay) {
        _Spriteset_Battle_createAnimationSprite.apply(this, arguments);
        // アニメーションをウインドウの上に表示
        const animationSprite = this._animationSprites[this._animationSprites.length - 1];
        if (isFrontViewAdapt(animationSprite._targets[0]) && keke_animationLayer == "ウインドウより上") {
            SceneManager._scene._animationLayerKeFrvp.addChild(animationSprite);
        }
    };
    }


    if (isMz()) {
    //- スブライトアニメーション/ターゲットスプライトの位置(処理追加)(MZ)
    const _Sprite_Animation_targetSpritePosition =  Sprite_Animation.prototype.targetSpritePosition;
    Sprite_Animation.prototype.targetSpritePosition = function(sprite) {
        const tPos = _Sprite_Animation_targetSpritePosition.apply(this, arguments);
        // アニメーションの位置を調整
        if (isFrontViewAdapt(this._targets[0])) {
            tPos.x += keke_animationX;
            tPos.y += keke_animationY;
        }
        return tPos;
    };

    //- スブライトアニメーションMV/位置の更新(処理追加)(MZ)
    const _Sprite_AnimationMV_updatePosition =  Sprite_AnimationMV.prototype.updatePosition;
    Sprite_AnimationMV.prototype.updatePosition = function() {
        _Sprite_AnimationMV_updatePosition.apply(this, arguments);
        // アニメーションの位置を調整
        if (isFrontViewAdapt(this._targets[0]) && this._animation.position != 3 && this._targets.length > 0) {
            this.x += keke_animationX;
            this.y += keke_animationY;
        }
    };
    }
    
})();