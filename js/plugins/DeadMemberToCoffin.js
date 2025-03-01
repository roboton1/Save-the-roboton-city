//=============================================================================
// DeadMemberToCoffin.js (ver 1.6.0) 
//=============================================================================
// [更新履歴]
// 2017/06/20 Ver 1.0 初リリース
// 2017/08/20 Ver 1.2 ロード時のフォロワー表示バグ修正、棺桶の代わりにアニメ停止//                    にするオプションなどを追加
// 2017/12/13 Ver 1.3 生存している仲間同士の入替をプラグインコマンドで可能に。
// 2019/03/30 Ver 1.3.1 ３人以下でマップ上で全滅した時棺桶が一つ増えるバグ修正
// 2019/09/04 Ver 1.4 プレイヤーを足踏みONにした時フォロワーが足踏みしないのを修正
// 2021/01/18 Ver 1.5 ツクールMZに対応、「先頭アクターは戦闘不能でも通常表示」
// 「生死変化時にコモンイベント設定」オプション追加。
/// see https://forum.tkool.jp/index.php?threads/205
// 2021/01/19 Ver1.5.5 コモンイベントを生死変化の前後のいずれにするか設定可。
//  先頭のアクターが戦闘不能の時、並び替えを禁止するか設定可。
// 2021/01/19 Ver1.6.0 並べ替えで戦闘不能アクターをトップに置けない設定を追加

/*:
 * @target MV MZ
 * @plugindesc [Ver1.6.0]Put dead actors to the tail of followers, and become coffin on map.
 * @author Sasuke KANNAZUKI
 *
 * @param Is Dead Actor to Coffin
 * @desc 0:yes 1:no(anime off) 2:no(anime off && fix direction)
 * @type select
 * @option Yes
 * @value 0
 * @option No(anime off)
 * @value 1
 * @option No(anime off && fix direction)
 * @value 2
 * @default 0
 *
 * @param Coffin Character Name
 * @desc the characterName when the actor is dead
 * @default $CoffinVXAce
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param Coffin Character Index
 * @desc the characterIndex (0~7) when the actor is dead.
 * if the characterName starts with $, must set to be 0.
 * @type number
 * @max 7
 * @min 0
 * @default 0
 *
 * @param Does Dead Move To Tail
 * @desc 0:do nothing 1:dead actor's move to party's tail (only on map)
 * @type select
 * @option No. Not Change Order
 * @value 0
 * @option Yes. Dead Actor Let Go Tail
 * @value 1
 * @default 0
 *
 * @param Does Dead Can Be Leader
 * @parent Does Dead Move To Tail
 * @desc Can Dead Member Move To Top Position?
 * @type select
 * @option Yes
 * @value 0
 * @option No
 * @value 1
 * @default 0
 *
 * @param Leader Never Be Coffin
 * @desc Does leader doesn't coffin regardless dead of alive
 * @type select
 * @option No
 * @value 0
 * @option Yes
 * @value 1
 * @default 1
 *
 * @param Leader never be coffin
 * @desc Does leader doesn't coffin regardless dead of alive
 * @type select
 * @option No
 * @value 0
 * @option Yes
 * @value 1
 * @default 1
 *
 * @param Event At Change Life
 * @desc Common Event ID called when someone dead or alive.
 * @type common_event
 * @default 0
 *
 * @param Command Order
 * @parent Event At Change Life
 * @desc Is the common event invokes before or after change?
 * @type select
 * @option Before
 * @value 0
 * @option After
 * @value 1
 * @default 0
 *
 * @param Can Fix Dead Leader
 * @desc When leader is dead, the actor can change position or not
 * @type select
 * @option Yes
 * @value 1
 * @option No
 * @value 0
 * @default 0
 *
 * @help
 * This plugin runs under RPG Maker MV and MZ.
 *
 * [Summary]
 * - When there's any dead actors in the party, display the character tail of
 * the formation.
 * - Dead actor's character grapic is changed to the one specified in the
*    parameter. (default: Coffin)
 *
 * [Note]
 * - sometimes coffin is not displayed on the screen. for example...
 *  your party size is larger than map display actors number(default = 4).
 *  in this case, alive members' display is higher priority.
 *
 * [Advanced Option 1 : (MV Only) To use together other plugins]
 * This plugin can use following 2 formation manipulate plugins.
 * 1) TMFollowerEx.js by Tomoaky at Hikimoki.
 * DL: http://hikimoki.sakura.ne.jp/plugin/plugin_system.html#TMFollowerEx
 * This plugin extends the number of followers, header/footer NPC, and so on.
 * 2) MenuSubMember.js by Sasuke Kannazuki (**Ver1.2 or later only)
 * DL: http://www.moonwhistle.org/tkoolMV/MenuSubMember.zip
 * This Ver1.2 plugin enables to display sub members (max.4) as the follower.
 * NOTE: You can import either or both plugins with this plugin.
 * But, be sure to put following order:
 * (upper) TMFollowerEx.js -> MenuSubMember.js -> DeadMemberToCoffin.js (lower)
 *
 * [Advanced Option 2: (MV Only)swap living actors by plugin commnad ]
 * This function is added at ver.1.3
 * Execute following string as 'Plugin Commmand'.
 * MemberSwap 1 2
 * This swaps position party #1 and #2 if the both actors are alive.
 *
 * MemberSwap 1 4
 * This swaps position party #1 and #4 if the both actors are alive.
 * If #4 is dead, this plugin searches former follower,
 * and i #1 in dead, it searches latter follower.
 *
 * MemberSwap shift
 * Move top alive actor to the tail.
 *
 * MemberSwap unshift
 * Move tail alive actor to the top
 *
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 *
 * *Important notice for the attached character grapic:
 * The default coffin graphic is the converted RPG Maker VX Ace material.
 * So, Unless you've done user resistration for VX Ace, you cannot use this
 * material on your game or any other contents.
 */

/*:ja
 * @target MV MZ
 * @plugindesc [Ver1.6.0]戦闘不能のアクターを隊列の最後尾に、棺桶の形で表示します。
 * @author 神無月サスケ
 *
 * @param Is Dead Actor to Coffin
 * @text 戦闘不能キャラを棺桶で表示？
 * @desc 戦闘不能キャラを棺桶で表示するか。0:する 1:しない(アニメOFF) 2:しない(アニメOFF + 向き固定)
 * @type select
 * @option する
 * @value 0
 * @option しない(アニメOFF)
 * @value 1
 * @option しない(向きも固定)
 * @value 2
 * @default 0
 *
 * @param Coffin Character Name
 * @text 棺桶キャラ画像名
 * @desc 戦闘不能のアクターのキャラクター画像のファイル名です。
 * @default $CoffinVXAce
 * @require 1
 * @dir img/characters/
 * @type file
 *
 * @param Coffin Character Index
 * @text 棺桶キャラ画像インデックス
 * @desc 戦闘不能のアクターのキャラクタ画像のインデックス(0～7)です。
 * ファイル名に$で始まるファイルを指定した場合、必ず0にしてください。
 * @type number
 * @max 7
 * @min 0
 * @default 0
 *
 * @param Does Dead Move To Tail
 * @text 戦闘不能時位置移動？
 * @desc マップ上で戦闘不能になったアクターをパーティ最後尾に移動させるか(0:しない, 1:する)
 * @type select
 * @option しない
 * @value 0
 * @option する
 * @value 1
 * @default 0
 *
 * @param Does Dead Can Be Leader
 * @parent Does Dead Move To Tail
 * @text 戦闘不能キャラ先頭禁止？
 * @desc 並び替えで戦闘不能アクターを先頭に置けなくするか。
 * @type select
 * @option 置ける
 * @value 0
 * @option 置けない
 * @value 1
 * @default 0
 *
 * @param Leader Never Be Coffin
 * @text 先頭キャラ棺桶禁止？
 * @desc 先頭キャラは戦闘不能でも棺桶にならず先頭のまま？
 * @type select
 * @option いいえ
 * @value 0
 * @option はい
 * @value 1
 * @default 1
 *
 * @param Event At Change Life
 * @text 変化時コモンイベント
 * @desc 誰かの生死がマップ上で変化した時呼び出されるコモンイベントIDです。
 * @type common_event
 * @default 0
 *
 * @param Command Order
 * @text コマンド実行タイミング
 * @parent Event At Change Life
 * @desc コマンド実行は並び順変化の前？後？
 * @type select
 * @option 実行前
 * @value 0
 * @option 実行後
 * @value 1
 * @default 0
 *
 * @param Can Fix Dead Leader
 * @text 戦闘不能リーダー固定？
 * @desc 先頭のアクターが戦闘不能の場合、並び替えを禁止するか
 * @type select
 * @option 禁止する
 * @value 1
 * @option 禁止しない
 * @value 0
 * @default 0
 *
 * @help
 * このプラグインは、ツクールMVおよびツクールMZに対応しています。
 *
 * ■概要
 * ・戦闘不能のアクターがいても必ずしも棺桶が表示されるとは限りません。
 * 隊列アクターの最大表示数はデフォルトでは4ですが、
 * 例えば、パーティーが5人で、ひとりだけ戦闘不能になった場合、生存メンバーが
 * 優先して表示されます。
 *
 * ■他プラグインとの連携(注：MVでのみ有効)
 * このプラグインは、以下の２つのプラグインと併用可能です。
 * ◆１．TMFollowerEx.js by ひきも記　tomoaky様
 * DL: http://hikimoki.sakura.ne.jp/plugin/plugin_system.html#TMFollowerEx
 * 隊列歩行の最大人数を増やしたり、先頭や末尾にNPCを追加できます。
 * ◆２．MenuSubMember.js (注：Ver1.2以降のみ) by 神無月サスケ 
 * DL: http://www.moonwhistle.org/tkoolMV/MenuSubMember.zip
 * 同行者を最大４人までメニューと隊列（アクター達の後）に表示します。
 * (注：なお、KADOKAWA公式やRPGツクールMVパッケージでの公開版は
 *  Ver.1.0であり、未対応であることに注意)
 * ◆プラグイン配置の順番について
 * 上記の２つのプラグインのいずれか、または両方を入れる場合、下記の順番に上から
 * 登録してください。
 * TMFollowerEx.js → MenuSubMember.js → DeadMemberToCoffin.js(このプラグイン)
 *
 * ■その他の注意点
 * ・仕様の都合上、先頭から決められた人数だけがマップ上に表示されます。
 * ただし、５人以上のパーティーで、先頭４人が全滅した場合、５人目のアクターが
 * 姿を現しますが、この状態で戦闘に入ると即敗北します。
 * 　この仕様が問題だと感じる場合、オプションの「戦闘不能時位置移動？」を
 * 0 から 1 に変更してください。戦闘不能アクターが自動的に最後尾に移動します。
 * 
 * ■追加機能(at ver 1.3) 生存アクターの入れ替え
 * MV方式のプラグインコマンドで以下のようにしてください
 * (MZ方式のプラグインコマンドは提供しておりません）)：
 * MemberSwap 1 2
 * この場合、パーティーの１番と２番が双方生存している場合、
 * 画面上のみならず、実際の配置が置き換わります。
 *
 * MemberSwap 1 4
 * この場合、パーティーの１番と４番が双方生存している場合、
 * 実際の配置が置き換わりますが、１番が戦闘不能の場合２番から順に後方に、
 * ４番が戦闘不能の場合、３番から順に前方に検索した結果、
 * 最も相応しいアクターの入れ替えを行います。
 *
 * MemberSwap shift
 * 先頭のアクターを生存アクターの末尾に移動します。
 *
 * MemberSwap unshift
 * 生存アクターの中で末尾のキャラを先頭に移動します。
 *
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 *
 * ◆添付画像に関する注意
 * 本プラグインに添付の棺桶画像は、RPGツクールVX Aceの素材を変更したものです。
 * このため、RPGツクールVX Aceにユーザー登録をしている人に限って、
 * ゲームへの使用や再配布が認めらていることに注意してください。
 */

(function() {

  //
  // process plugin commands
  //
  var _Game_Interpreter_pluginCommand =
   Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'MemberSwap') {
      if (args[0] === 'shift') {
        shiftAliveMembers();
      } else if (args[0] === 'unshift') {
        unshiftAliveMembers();
      } else {
        var a1 = +args[0];
        var a2 = +args[1];
        if (a1 && a2) {
          swapAliveMembers(a1, a2);
        }
      }
    }
  };

  var shiftAliveMembers = function () {
    var head = headOfAliveMembers();
    var tail = tailOfAliveMembers();
    if (head >=0 && tail >= 0) {
      var actorArray = $gameParty._actors.splice(head, 1);
      $gameParty._actors.splice(tail, 0, actorArray[0]);
      $gamePlayer.refresh();
      $gameMap.requestRefresh();
    }
  };

  var unshiftAliveMembers = function () {
    var head = headOfAliveMembers();
    var tail = tailOfAliveMembers();
    if (head >=0 && tail >= 0) {
      var actorArray = $gameParty._actors.splice(tail, 1);
      $gameParty._actors.splice(head, 0, actorArray[0]);
      $gamePlayer.refresh();
      $gameMap.requestRefresh();
    }
  };

  var headOfAliveMembers = function () {
    for (var i = 0; i < $gameParty.size(); i++) {
      if ($gameParty.members()[i].isAlive()) {
        break;
      }
    }
    return i !== $gameParty.size() ? i : -1;
  };

  var tailOfAliveMembers = function () {
    for (var i = $gameParty.size() - 1 ; i >= 0 ; i--) {
      if ($gameParty.members()[i].isAlive()) {
        break;
      }
    }
    return i;
  };

  var swapAliveMembers = function (subject, target) {
    var subjectIndex = subject - 1;
    var targetIndex = target - 1;
    for (;;) {
      if ($gameParty.members()[subjectIndex].isAlive()) {
        break;
      } else {
        if (!$gameParty.members()[++subjectIndex]) {
          subjectIndex = -1;
          break;
        }
      }
    }
    for (;;) {
      if ($gameParty.members()[targetIndex].isAlive()) {
        break;
      } else {
        if (--targetIndex < 0) {
          targetIndex = -1;
          break;
        }
      }
    }
    if (subjectIndex >= 0 && targetIndex >= 0) {
      $gameParty.swapOrder(subjectIndex, targetIndex);
    }
  };

  // ------------------------------------------------------------
  // Character graphic definition routine
  // ------------------------------------------------------------

  //
  // process parameters
  //
  var parameters = PluginManager.parameters('DeadMemberToCoffin');
  var isDeadToCoffin = Number(parameters['Is Dead Actor to Coffin'] || 0);
  var coffinCharName = parameters['Coffin Character Name'] || '';
  var coffinCharIndex = Number(parameters['Coffin Character Index'] || 0);
  var doesMoveDeadToTail = !!Number(parameters['Does Dead Move To Tail'] || 0);
  var leaderNeverCoffin = !!Number(parameters['Leader Never Be Coffin'] || 0);
  var commonIdAtChange = Number(parameters['Event At Change Life'] || 0);
  var CommandAfter = !!Number(parameters['Command Order'] || 0);
  var fixDeadLeader = !!Number(parameters['Can Fix Dead Leader'] || 0);
  var deadNeverLeader = !!Number(parameters['Does Dead Can Be Leader'] || 0);

  //
  // determine actors' characterName and chacterIndex
  //
  var _Game_Actor_characterName = Game_Actor.prototype.characterName;
  Game_Actor.prototype.characterName = function() {
    if (this.isAlive() || isDeadToCoffin !== 0) {
      return _Game_Actor_characterName.call(this);
    } else if (leaderNeverCoffin) {
      if (this.actorId() === $gameParty.leader().actorId()) {
        return _Game_Actor_characterName.call(this);
      } else {
        return coffinCharName;
      }
    } else {
      return coffinCharName;
    }
  };

  var _Game_Actor_characterIndex = Game_Actor.prototype.characterIndex;
  Game_Actor.prototype.characterIndex = function() {
    if (this.isAlive() || isDeadToCoffin !== 0) {
      return _Game_Actor_characterIndex.call(this);
    } else if (leaderNeverCoffin) {
      if (this.actorId() === $gameParty.leader().actorId()) {
        return _Game_Actor_characterIndex.call(this);
      } else {
        return coffinCharIndex;
      }
    } else {
      return coffinCharIndex;
    }
  };

  // ------------------------------------------------------------
  // Dead character animation routine
  // ------------------------------------------------------------

  var _Game_Player_hasWalkAnime = Game_Player.prototype.hasWalkAnime;
  Game_Player.prototype.hasWalkAnime = function() {
    if (_Game_Player_hasWalkAnime.call(this)) {
      if ($gameParty.leader().isAlive() || isDeadToCoffin === 0) {
        return true;
      }
    }
    return false;
  };

  var _Game_Player_hasStepAnime = Game_Player.prototype.hasStepAnime;
  Game_Player.prototype.hasStepAnime = function() {
    if (_Game_Player_hasStepAnime.call(this)) {
      if ($gameParty.leader().isAlive() || isDeadToCoffin === 0) {
        return true;
      }
    }
    return false;
  };

  var _Game_Player_isDirectionFixed = Game_Player.prototype.isDirectionFixed;
  Game_Player.prototype.isDirectionFixed = function() {
    if (!_Game_Player_isDirectionFixed.call(this)) {
      if ($gameParty.leader().isDead() && isDeadToCoffin === 2) {
        return true;
      }
      return false;
    }
    return true;
  };

  var _Game_Follower_update = Game_Follower.prototype.update;
  Game_Follower.prototype.update = function() {
    _Game_Follower_update.call(this);
    this.setWalkAnime(this.hasWalkAnime());
    this.setStepAnime(this.hasStepAnime());
    this.setDirectionFix(this.isDirectionFixed());
  };

  Game_Follower.prototype.hasWalkAnime = function() {
    if (_Game_Player_hasWalkAnime.call($gamePlayer)) {
      if (!this.actor()) {
        return true;
      } else if (this.actor().isDead() && isDeadToCoffin > 0) {
        return false;
      }
      return true;
    }
    return false;
  };


  Game_Follower.prototype.hasStepAnime = function() {
    if (_Game_Player_hasStepAnime.call($gamePlayer)) {
      if (!this.actor()) {
        return false;
      } else if (this.actor().isDead() && isDeadToCoffin > 0) {
        return false;
      }
      return true;
    }
    return false;
  };

  Game_Follower.prototype.isDirectionFixed = function() {
    if (!_Game_Player_isDirectionFixed.call($gamePlayer)) {
      if (!this.actor()) {
        return false;
      } else if (this.actor().isDead() && isDeadToCoffin === 2) {
        return true;
      }
      return false;
    }
    return true;
  };

  // ------------------------------------------------------------
  // Compatibility routine for other plugns
  // ------------------------------------------------------------

  //
  // initialize plugin import condition (called when loading save data)
  //
  Game_System.prototype.resetPluginImportCondition = function () {
    this._touchFollowerIncluded = null;
    this._subMemberIncluded = null;
  };

  var _Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
  Game_System.prototype.onAfterLoad = function() {
    this.resetPluginImportCondition();
    $gameTemp.needsSynchronizeFollower = true;
    _Game_System_onAfterLoad.call(this);
  };

  //
  // check if TMFollowerEx.js is imported or not
  //
  Game_System.prototype.TMFollowerIncluded = function() {
    if (this._touchFollowerIncluded == null) {
      this._touchFollowerIncluded = ("isTouchFollowerEnabled" in $gameSystem);
    }
    return this._touchFollowerIncluded;
  };

  var hasHeader = function () {
    return $gameSystem.TMFollowerIncluded() &&
     $gamePlayer.headerFollower() > 0;
  };

  //
  // check if MenuSubMember.js is imported or not
  //
  Game_System.prototype.SubMemberIncluded = function() {
    if (this._subMemberIncluded == null) {
      this._subMemberIncluded = ("createSubMembers" in $gamePlayer._followers);
    }
    return this._subMemberIncluded;
  };

  // ------------------------------------------------------------
  // synchronize followers after loaded
  // ------------------------------------------------------------

  var _Game_Temp_initialize = Game_Temp.prototype.initialize;
  Game_Temp.prototype.initialize = function() {
    _Game_Temp_initialize.call(this);
    this.needsSynchronizeFollower = false;
  };

  var _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function() {
    if ($gameTemp.needsSynchronizeFollower) {
      $gamePlayer._synchronizeFollower();
    }
    _Scene_Map_onMapLoaded.call(this);
  };

  Game_Player.prototype._synchronizeFollower = function () {
    this._followers.synchronize(this.x, this.y, this.direction());
    $gameTemp.needsSynchronizeFollower = false;
  };

  // ------------------------------------------------------------
  // Determine player and followers' actor
  // ------------------------------------------------------------

  var _Game_Party_leader = Game_Party.prototype.leader;
  Game_Party.prototype.leader = function() {
    if (hasHeader()) {
      return $gameActors.actor($gamePlayer.headerFollower());
    } else if (leaderNeverCoffin){
      return _Game_Party_leader.call(this);
    } else {
      var actor;
      for (var i = 0; i < $gameParty.size(); i++) {
	    if ((actor = $gameParty.members()[i]) && actor.isAlive()) {
          return actor;
  	    }
      }
      return _Game_Party_leader.call(this); // this must be coffin.
    }
  };

  var _Game_Follower_actor = Game_Follower.prototype.actor;
  Game_Follower.prototype.actor = function() {
    var originalIndex = this._memberIndex;
    var _deadMembers = [];
    // at the case of all dead
    if ($gameParty.isAllDead()) {
      return _Game_Follower_actor.call(this);
    }
    // find all dead leaders
    var i = leaderNeverCoffin ? 1 : 0;
    var leader = $gameParty.members()[i++];
    while (leader && leader.isDead()) {
      _deadMembers.push(leader);
      leader = $gameParty.members()[i++];
    }
    this._memberIndex = 1 + _deadMembers.length;
    // find dead/alive followers
    for (i = 1 ; i <= originalIndex; i++, this._memberIndex++) {
      // by plugin import condition, do different behaviour
      if (!$gameSystem.SubMemberIncluded() &&
       !$gameSystem.TMFollowerIncluded()) {
        var actor = $gameParty.members()[this._memberIndex];
      } else {
        var actor = _Game_Follower_actor.call(this);
      }
      if (actor == null) {
        actor = (_deadMembers.length > 0) ? _deadMembers.shift() : null;
      } else if (actor.isDead()) {
        _deadMembers.push(actor);
        i--;
      }
      if (i === originalIndex) {
        this._memberIndex = originalIndex;
        return actor;
      }
    }
  };

  // ------------------------------------------------------------
  // Display refresh routine
  // ------------------------------------------------------------

  var preDeadMembers = [];

  var deadMemberChanged = function () {
    var newDeadMembers = $gameParty.deadMembers();
    if (!newDeadMembers.equals(preDeadMembers)) {
      if (doesMoveDeadToTail) {
        moveDeadToTail(preDeadMembers, newDeadMembers);
      }
      preDeadMembers = newDeadMembers;
      return true;
    }
    return false;
  };

  var moveDeadToTail = function (alreadyDead, nowDead) {
    var newDeadMember = [];
    var actors = $gameParty.allMembers();
    var stayActorIds = [];
    var newDeadActorIds = [];
    for (var i = 0; i < actors.length; i++) {
      var actor = actors[i];
      if (!alreadyDead.contains(actor) && nowDead.contains(actor)) {
        newDeadActorIds.push(actor.actorId());
      } else {
        stayActorIds.push(actor.actorId());
      }
    }
    $gameParty._actors = stayActorIds.concat(newDeadActorIds);
  };

  var _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function() {
    _Scene_Map_update.call(this);
    if (deadMemberChanged()) {
      if (CommandAfter) {
        $gamePlayer.refresh();
        $gameTemp.reserveCommonEvent(commonIdAtChange);
      } else {
        $gameTemp.reserveCommonEvent(commonIdAtChange);
        $gameTemp.waitForCommon = 1;
      }
    } else if ($gameTemp.waitForCommon) {
      switch ($gameTemp.waitForCommon) {
      case 1:
        if (!$gameMap._interpreter.isRunning()) {
          $gameTemp.waitForCommon = 2;
        }
        break;
      case 2:
        $gamePlayer.refresh();
        $gameTemp.waitForCommon = 0;
        break;
      }
    }
  };

  // ------------------------------------------------------------
  // Dead Actor's Position Constraint
  // ------------------------------------------------------------

  var _Window_MenuStatus_isCurrentItemEnabled = 
    Window_MenuStatus.prototype.isCurrentItemEnabled;
  Window_MenuStatus.prototype.isCurrentItemEnabled = function() {
    if (!_Window_MenuStatus_isCurrentItemEnabled.call(this)) {
      return false;
    }
    var actor = this.actor(this.index());
    var actor2 = this.actor(this.pendingIndex());
    // When Dead Actor cannot be leader
    if (deadNeverLeader) {
      if (this.index() === 0 || this.pendingIndex() === 0) {
        if (!actor.isAlive() || (actor2 && !actor2.isAlive())) {
          return false;
        }
      }
    }
    // When Dead Leader cannot change position
    return (!fixDeadLeader || this.index() > 0 || actor.isAlive());
  };
})();
