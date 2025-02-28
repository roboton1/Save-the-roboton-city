/*:
 * @target MZ
 * @plugindesc 常時ダッシュ禁止プラグイン
 * @author あなたの名前
 * 
 * @help
 * このプラグインは、常時ダッシュを禁止し、設定メニューから
 * 常時ダッシュを切り替える項目を削除し、手動でもダッシュができないようにします。
 * プレイヤーは歩くだけになります。
 * 
 * 利用規約など：
 * 著作権など、自由に利用してください。
 * 
 * @param DisableDashSetting
 * @text 常時ダッシュ禁止設定
 * @type boolean
 * @default true
 * @desc 常時ダッシュを禁止するかどうか。
 */

(() => {
    const parameters = PluginManager.parameters('DisableDash');
    const disableDashSetting = parameters['DisableDashSetting'] === 'true';

    // 常時ダッシュを無効化する処理
    const _Game_Player_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function() {
        if (disableDashSetting) {
            this._alwaysDash = false;  // 常時ダッシュを無効にする
        }
        _Game_Player_update.call(this);  // 他の更新処理を実行
    };

    // 設定メニューから「常時ダッシュ」を削除
    const _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function() {
        _Window_Options_addGeneralOptions.call(this);
        
        // 「常時ダッシュ」の設定を削除
        this._list = this._list.filter(option => option.symbol !== 'alwaysDash');
    };

    // ダッシュ操作を完全に無効化
    const _Game_Player_canDash = Game_Player.prototype.canDash;
    Game_Player.prototype.canDash = function() {
        return false;  // ダッシュできないようにする
    };

})();
