/*:
@plugindesc RPGツクールMV・MZで3Dゲームを作れるようにします。
@author PANDAKO（パンダコ）
@target MZ
@url https://pandako.itch.io/
@help
Version: 0.4.0

- Script
script3d.exist(model name):Boolean
script3d.notExist(model name):Boolean
script3d.loaded(texture file path or model file path):Boolean
script3d.notLoaded(texture file path or model file path):Boolean
script3d.pointerLock():Boolean
script3d.movementX():Number
script3d.movementY():Number
script3d.cameraPosition(0, "x" or "y" or "z"):Number
script3d.cameraRotation(0, "x" or "y" or "z"):Number
script3d.modelPosition(model name, "x" or "y" or "z"):Number
script3d.modelRotation(model name, "x" or "y" or "z"):Number
script3d.checkCollisions(model name, target model name):Boolean
script3d.collisionResult("Hit" or "CenterX" or "CenterY" or "CenterZ" or "SizeX" or "SizeY" or "SizeZ" or "MoveX" or "MoveY" or "MoveZ"):Boolean or Number
script3d.parentName(model name or camera id):String
script3d.modelsList(list name, index):String
script3d.modelsListLength(list name):Number
script3d.modelsListSelected(list name):String
script3d.modelsListReachedEnd(list name):Boolean
script3d.modelVariable(model name, variable name):String or Number

- Control characters
\M[model name,variable name]

- Plugin command help for MV
3d scene background [file path]
3d scene pointerLock [true or false]
3d scene show2dMap [true or false]
3d scene clear
3d scene fog [rgb(255,255,255)] [near] [far]
3d texture load [file path]
3d camera translate [camera id] [x] [y] [z]
3d camera rotate [camera id] [x] [y] [z]
3d camera position [camera id] [x] [y] [z]
3d camera rotation [camera id] [x] [y] [z]
3d camera sameAsModel [camera id] [model name] [true or false (position)] [true or false (rotation)]
3d camera lookAt [camera id] [model name] [angular speed]
3d camera detach [camera id]
3d camera fov [camera id] [fov]
3d camera easy [camera id] [off or first or third] [offset] [true or false (rotation)]
3d model load [file path] [model name]
3d model create [box or plane] [model name] [texture file path] [width] [height] [depth]
3d model translate [model name] [x] [y] [z]
3d model rotate [model name] [x] [y] [z]
3d model position [model name] [x] [y] [z]
3d model rotation [model name] [x] [y] [z]
3d model scale [model name] [x] [y] [z]
3d model sameAsModel [model name] [target model name] [true or false (position)] [true or false (rotation)] [true or false (scale)]
3d model sameAsCamera [model name] [camera id] [true or false (position)] [true or false (rotation)]
3d model lookAt [model name] [target model name] [angular speed]
3d model lookAt [model name] camera [camera id] [angular speed]
3d model animation [model name] play [animation index] [once or repeat or pingpong]
3d model animation [model name] pause [true or false]
3d model remove [model name]
3d model checkCollisions [model name] [target model name]
3d model resolveCollisions [model name] [target model name]
[Experimental] 3d model resolveCollisionsWithMap [model name]
3d model resolveCollisionsWithModelsList [list name] [target list name]
3d model attachModel [model name] [target model name]
3d model attachCamera [model name] [camera id]
3d model detach [model name]
3d model setModelsList [list name] [parent model name] [forward match of child model name] [true or false (include descendants)]
3d model selectFirst [list name]
3d model selectedName [list name] [variable id]
3d model selectNext [list name]
3d model setModelVariable [model name] [variable name] [= or + or - or * or / or %] [value]

- License
The MIT License (MIT)
https://opensource.org/license/mit/
Copyright (c) 2023 PANDAKO

External libraries used by this plugin.
three.js is distributed under the MIT license.


@command Background
	@text Background 背景を設定
	@desc Equirectangular texture with an image ratio of 2:1 is recommended. 正距円筒図法で比率が2:1の画像がおすすめです。

	@arg file
	@type file
	@text Texture File テクスチャーファイル
	@desc Textures must be preloaded. 事前に読み込まれている必要があります。

@command Pointer Lock
	@text Pointer Lock ポインターロック
	@desc For security reasons, this can only be done under player control. セキュリティの関係上、プレイヤーが操作したときのみ実行できます。

	@arg mode
	@type boolean

@command Show 2D Map
	@text Show 2D Map 2Dマップの表示・非表示

	@arg mode
	@type boolean

@command Clear Scene
	@text Clear Scene シーンの初期化

@command Fog
	@text Fog 霧
	@desc Disabled with blank color. 色を空白にすると無効化されます。

	@arg param
	@type struct<ColorNearFar>
	@text Parameter

@command Load Texture
	@text Load Texture テクスチャーを読み込み
	@desc Asynchronous. 非同期処理です。テクスチャーは読み込みが完了してから使用してください。

	@arg file
	@type file
	@text Texture File テクスチャーファイル

@command Translate Camera
	@text Translate Camera カメラを移動

	@arg param
	@type struct<CameraXYZ>
	@text Parameter

@command Rotate Camera
	@text Rotate Camera カメラを回転
	@desc Rotate in order of YXZ. YXZの順に回転。

	@arg param
	@type struct<CameraXYZ>
	@text Parameter

@command Camera Position
	@text Camera Position カメラの位置

	@arg param
	@type struct<CameraXYZ>
	@text Parameter

@command Camera Rotation
	@text Camera Rotation カメラの角度
	@desc Rotate in order of YXZ. YXZの順に回転。

	@arg param
	@type struct<CameraXYZ>
	@text Parameter

@command Camera Same As Model
	@text Camera Same As Model カメラの位置と角度をモデルと同じにする

	@arg param
	@type struct<NameCameraPosRot>
	@text Parameter

@command Camera Look At Model
	@text Camera Look At Model カメラをモデルの方へ向ける

	@arg param
	@type struct<NameCameraAngle>
	@text Parameter

@command Detach Camera
	@text Detach Camera カメラを親から切り離す

	@arg camera
	@text Camera ID カメラID
	@type number
	@desc only 0 so far. 現状0のみ。

@command Camera FOV
	@text Camera FOV カメラの視野角
	@desc Field of View

	@arg param
	@type struct<CameraFov>
	@text Parameter

@command EasyCamera
	@text EasyCamera 簡単カメラ

	@arg param
	@type struct<CameraModeOffsetRotation>
	@text Parameter

@command Load Model
	@text Load Model モデルを読み込む
	@desc Asynchronous. 非同期処理です。モデルは読み込みが完了してから操作してください。
	
	@arg param
	@type struct<NameFile>
	@text Parameter

@command Create Box
	@text Create Box ボックスを作成
	
	@arg param
	@type struct<NameFileWHD>
	@text Parameter

@command Create Plane
	@text Create Plane プレーンを作成
	@desc Depth is used for collision. 奥行きは衝突で利用されます。
	
	@arg param
	@type struct<NameFileWHD>
	@text Parameter

@command Translate Model
	@text Translate Model モデルを移動

	@arg param
	@type struct<NameXYZ>
	@text Parameter

@command Rotate Model
	@text Rotate Model モデルを回転
	@desc Rotate in order of YXZ. YXZの順に回転。

	@arg param
	@type struct<NameXYZ>
	@text Parameter

@command Model Position
	@text Model Position モデルの位置

	@arg param
	@type struct<NameXYZ>
	@text Parameter

@command Model Rotation
	@text Model Rotation モデルの角度
	@desc Rotate in order of YXZ. YXZの順に回転。

	@arg param
	@type struct<NameXYZ>
	@text Parameter

@command Model Scale
	@text Model Scale モデルの拡大縮小
	@desc Original size: 1 原寸：1

	@arg param
	@type struct<NameXYZ>
	@text Parameter

@command Model Same As Model
	@text Model Same As Model モデルの位置や角度などを対象モデルと同じにする

	@arg param
	@type struct<NameTargetPosRotSca>
	@text Parameter

@command Model Same As Camera
	@text Model Same As Camera モデルの位置と角度をカメラと同じにする

	@arg param
	@type struct<NameCameraPosRot>
	@text Parameter

@command Model Look At Model
	@text Model Look At Model モデルを別のモデルの方へ向ける

	@arg param
	@type struct<NameTargetAngle>
	@text Parameter

@command Model Look At Camera
	@text Model Look At Camera モデルをカメラの方へ向ける

	@arg param
	@type struct<NameCameraAngle>
	@text Parameter

@command Model Animation Play
	@text Model Animation Play モデルのアニメーションを再生
	@desc Play the animation from the beginning. アニメーションを最初から再生します。

	@arg param
	@type struct<NameIdxLoop>
	@text Parameter

@command Model Animation Pause
	@text Model Animation Pause モデルのアニメーションの一時停止
	@desc Turn it OFF to resume. OFFにすることで再開されます。

	@arg param
	@type struct<NameBool>
	@text Parameter

@command Remove Model
	@text Remove Model モデルを削除

	@arg name
	@text Model Name モデル名

@command Check Collisions
	@text Check Collisions モデル間の衝突を確認
	@desc Update collisionResult. collisionResultが更新されます。

	@arg param
	@type struct<NameTarget>
	@text Parameter

@command Resolve Collisions
	@text Resolve Collisions モデル間の衝突を解決
	@desc Target model does not move. Update collisionResult. 対象モデルは動きません。collisionResultが更新されます。

	@arg param
	@type struct<NameTarget>
	@text Parameter

@command Resolve Collisions With Map
	@text [Experimental] Resolve Collisions With Map 【実験的】マップとモデル間の衝突を解決
	@desc Update collisionResult. collisionResultが更新されます。

	@arg name
	@text Model Name モデル名

@command Resolve Collisions With ModelsList
	@text Resolve Collisions With ModelsList モデルズリスト間の衝突を解決
	@desc Target model does not move. Update collisionResult. 対象モデルは動きません。collisionResultが更新されます。

	@arg param
	@type struct<ListTargetlist>
	@text Parameter

@command Attach Model
	@text Attach Model モデルを子として追加

	@arg param
	@type struct<NameTarget>
	@text Parameter

@command Attach Camera
	@text Attach Camera カメラを子として追加

	@arg param
	@type struct<NameCamera>
	@text Parameter

@command Detach Model
	@text Detach Model モデルを親から切り離す

	@arg name
	@text Model Name モデル名

@command Set ModelsList
	@text Set ModelsList モデルズリストを設定
	@desc Store the list of model names in a special array variable. 特別な配列変数にモデル名のリストを格納します。

	@arg param
	@type struct<ListParentForwardDeep>
	@text Parameter

@command Select First
	@text Select First 最初のモデルを選択
	@desc Select first model in ModelsList. モデルズリストの最初のモデルを選択します。

	@arg list
	@text ModelsList Name モデルズリスト名

@command Select Next
	@text Select Next 次のモデルを選択
	@desc Select next model in ModelsList. モデルズリストの次のモデルを選択します。

	@arg list
	@text ModelsList Name モデルズリスト名

@command Selected Name
	@text Selected Name 選択モデル名を変数へ代入
	@desc Store model name selected in ModelsList to variable. モデルズリストで選択中のモデル名を変数に代入します。

	@arg param
	@type struct<ListVariable>
	@text Parameter

@command Set ModelVariable
	@text Set ModelVariable モデル変数へ代入
	@desc Set values to variables specific to each model. 各モデルが保持する変数へ値をセットします。

	@arg param
	@type struct<NameVariablenameOperatorValue>
	@text Parameter


@param Texture
@text Texture テクスチャーの設定
@type select
@option ---
@default ---

@param Antialiasing
@text Antialiasing アンチエイリアス
@parent Texture
@type boolean
@default false

@param Title
@text Title タイトルの設定
@type select
@option ---
@default ---

@param TitleModelFile
@text Title Model File (.glb .fbx) モデルファイル
@parent Title
@type file
@desc Please add an extension! 拡張子をつけてください！

@param TitleModelScale
@text Title Model Scale モデルの拡大縮小
@parent Title
@default 1
@desc Original size: 1 原寸：1

@param TitleModelAnimationIndex
@text Title Model Animation Index 再生するモデルのアニメーション番号
@parent Title
@type number
@default 0
@desc　0 <=

@param TitleModelAnimationLoop
@text Title Model Animation Loop ループ設定
@parent Title
@type select
@option once
@option repeat
@option pingpong
@desc　once：一度だけ　repeat：繰り返す　pingpong：往復
@default repeat

@param CameraParentModelName
@text Camera Parent Model Name カメラの親のモデル名
@parent Title
@type string

@param CameraFov
@text Camera FOV カメラの視野角
@desc This is the default setting and this value is carried over to the game. 初期値です。ゲームにも引き継がれます。
@parent Title
@type number
@default 50
@min 1
@max 179

 */

/*~struct~NameFile:
@param name
@text Model Name モデル名

@param file
@type file
@text Model File (.glb .fbx) モデルファイル
@desc Please add an extension! 拡張子をつけてください！
*/

/*~struct~NameFileWHD:
@param name
@text Model Name モデル名

@param file
@type file
@text Texture File テクスチャーファイル
@desc Textures must be preloaded. 事前に読み込まれている必要があります。

@param width
@text Width 幅

@param height
@text Height 高さ

@param depth
@text Depth 奥行き
*/

/*~struct~NameXYZ:
@param name
@text Model Name モデル名

@param x
@text X
@default 0

@param y
@text Y
@default 0

@param z
@text Z
@default 0
*/

/*~struct~CameraXYZ:
@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。

@param x
@text X
@default 0

@param y
@text Y
@default 0

@param z
@text Z
@default 0
*/

/*~struct~CameraFov:
@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。

@param fov
@text FOV 視野角
@type number
@default 50
@min 1
@max 179
*/

/*~struct~CameraModeOffsetRotation:
@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。

@param mode
@type select
@option off
@option first
@option third
@text Mode モード
@desc　off:オフ first:一人称カメラ third:ふかんカメラ
@default off

@param offset
@text Offset 補正値
@type number
@default 0
@desc Recommended value 推奨値: first=0 (Y-axis offset) / third=240(distance)

@param rotation
@text Automatic Rotation of Events イベントの自動回転
@type boolean
@default true
@desc Automatically rotate 3D models of events. イベントのモデルを自動的に回転させます。
*/

/*~struct~NameTarget:
@param name
@text Model Name モデル名

@param target
@text Target Model Name 対象モデル名
*/

/*~struct~NameTargetAngle:
@param name
@text Model Name モデル名

@param target
@text Target Model Name 対象モデル名

@param angle
@text Angular Speed 回転角度
@type number
@default 0
@desc 0 for immediate rotation. 0だと即時回転。
*/

/*~struct~NameTargetPosRotSca:
@param name
@text Model Name モデル名

@param target
@text Target Model Name 対象モデル名

@param position
@text Position 位置
@type boolean
@default true

@param rotation
@text Rotation 角度
@type boolean
@default true

@param scale
@text Scale 拡大縮小
@type boolean
@default true
*/

/*~struct~NameCameraPosRot:
@param name
@text Model Name モデル名

@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。

@param position
@text Position 位置
@type boolean
@default true

@param rotation
@text Rotation 角度
@type boolean
@default true
*/

/*~struct~ListParentForwardDeep:
@param list
@text ModelsList Name モデルズリスト名

@param parent
@text Parent Model Name 親モデル名
@desc
Leaving this blank sets the scene.
空白だとシーンが設定されます。

@param forward
@text Forward Match of Child Model Name 対象子モデル名（前方一致）
@desc
Leave this blank for no filtering.
空白だとすべての子が対象になります。

@param deep
@text Include descendants 子孫も含む
@type boolean
@default false
*/

/*~struct~ListVariable:
@param list
@text ModelsList Name モデルズリスト名

@param variable
@type variable
*/

/*~struct~ListTargetlist:
@param list
@text ModelsList Name モデルズリスト名

@param targetList
@text Target ModelsList Name 対象モデルズリスト名
*/

/*~struct~NameCamera:
@param name
@text Model Name モデル名

@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。
*/

/*~struct~NameCameraAngle:
@param name
@text Model Name モデル名

@param camera
@text Camera ID カメラID
@type number
@default 0
@desc
only 0 so far.
現状0のみ。

@param angle
@text Angular Speed 回転角度
@type number
@default 0
@desc 0 for immediate rotation. 0だと即時回転。
*/

/*~struct~NameIdxLoop:
@param name
@text Model Name モデル名

@param idx
@type number
@text Animation Index アニメーション番号
@desc　0 <=
@min 0
@default 0

@param loop
@type select
@option once
@option repeat
@option pingpong
@text Loop ループ設定
@desc　once：一度だけ　repeat：繰り返す　pingpong：往復
@default repeat
*/

/*~struct~NameBool:
@param name
@text Model Name モデル名

@param bool
@type boolean
@default false
*/

/*~struct~NameVariablenameOperatorValue:
@param name
@text Model Name モデル名

@param variableName
@text Variable Name 変数名

@param operator
@type select
@option =
@option +
@option -
@option *
@option /
@option %
@text Operator 演算子
@default =

@param value
@text Value 値
*/

/*~struct~ColorNearFar:
@param color
@text Color 色
@desc　Example: rgb(255, 0, 0) or rgb(100%, 0%, 0%)
@default rgb(255, 255, 255)

@param near
@text Near 開始距離
@type number
@default 1

@param far
@text Far 最大距離
@type number
@default 10000
*/

const _3D = new Map();
const script3d = {};
_3D.set("PluginName", "PNDK_3D");
_3D.set("Textures", new Map());
_3D.set("Models", new Map());
_3D.set("BaseSprite", null);
_3D.set("BaseSpriteVisible", false);
_3D.set("CollisionResult", {Hit: false, CenterX: 0, CenterY: 0, CenterZ: 0, SizeX: 0, SizeY: 0, SizeZ: 0, MoveX: 0, MoveY: 0, MoveZ: 0});
_3D.set("MapModels", new Map());
_3D.set("ModelsList", new Map());
_3D.set("ModelsListSelected", new Map());
_3D.set("TextureMagFilter", 0);
_3D.set("TextureMinFilter", 0);
_3D.set("EasyCamera", {Mode: 0, Offset: 0, Rotation: true});
_3D.set("MapId", 0);

(() => {
	
	// importmapはバージョンが古くて使えない
	/*
	var script = document.createElement('script');
	script.type = "importmap";
	script.textContent = '{"imports":{"three":"./js/plugins/three.module.min.js"}}';
	document.body.appendChild(script);
	*/

	let Script = document.createElement('script');
	Script.src = "./js/plugins/PNDK_3D_Core.js";
	Script.type = "module";
	document.body.appendChild(Script);

	// レンダラー設定上書き
	// MV
	if (Utils.RPGMAKER_NAME == "MV") {
		Graphics._createRenderer = function() {
			PIXI.dontSayHello = true;
			var width = this._width;
			var height = this._height;
			//var options = { view: this._canvas };
			var options = { view: this._canvas, backgroundAlpha: 0, backgroundColor:0x000000, useContextAlpha: true, transparent: true};//add
			try {
				switch (this._rendererType) {
				case 'canvas':
					this._renderer = new PIXI.CanvasRenderer(width, height, options);
					break;
				case 'webgl':
					this._renderer = new PIXI.WebGLRenderer(width, height, options);
					break;
				default:
					this._renderer = PIXI.autoDetectRenderer(width, height, options);
					break;
				}

				if(this._renderer && this._renderer.textureGC)
					this._renderer.textureGC.maxIdle = 1;

			} catch (e) {
				this._renderer = null;
			}
		};
	}
	// MZ
	if (Utils.RPGMAKER_NAME == "MZ") {
		Graphics._createPixiApp = function() {
			try {
				this._setupPixi();
				this._app = new PIXI.Application({
					view: this._canvas,
					backgroundAlpha: 0,//add
					backgroundColor:0x000000,//add
					transparent: true,//add
					autoStart: false
				});
				this._app.ticker.remove(this._app.render, this._app);
				this._app.ticker.add(this._onTick, this);
			} catch (e) {
				this._app = null;
			}
		};
	}

	// マップとキャラを非表示（_baseSpriteには_tilemapも含まれている）
	const _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
	Spriteset_Map.prototype.createLowerLayer = function() {
		_Spriteset_Map_createLowerLayer.apply(this);
		this._baseSprite.visible = _3D.get("BaseSpriteVisible");
		_3D.set("BaseSprite", this._baseSprite);
	};
	
	// 各種メニューのスクショ背景非表示（主にMVのため）
	const _Scene_MenuBase_createBackground = Scene_MenuBase.prototype.createBackground;
	Scene_MenuBase.prototype.createBackground = function() {
		_Scene_MenuBase_createBackground.apply(this);
		this._backgroundSprite.visible = _3D.get("BaseSpriteVisible");
		this.setBackgroundOpacity(255);//MZ
	};
	
	// ゲーム終了画面スクショ背景透明度
	const _Scene_GameEnd_createBackground = Scene_GameEnd.prototype.createBackground;
	Scene_GameEnd.prototype.createBackground = function() {
		_Scene_GameEnd_createBackground.apply(this);
		this.setBackgroundOpacity(255);
	};

	// 黒塗りつぶしを非表示（マップの下地とMZの戦闘）
	const _Spriteset_Base_createBaseSprite = Spriteset_Base.prototype.createBaseSprite;
	Spriteset_Base.prototype.createBaseSprite = function() {
		_Spriteset_Base_createBaseSprite.apply(this);
		// this._blackScreen.alpha = 0;// MV
		// this._blackScreen.opacity = 0;// MZ
		this._blackScreen.visible = _3D.get("BaseSpriteVisible");
	};
	
	// 戦闘の塗りつぶしと背景非表示
	const _Spriteset_Battle_createBackground = Spriteset_Battle.prototype.createBackground;
	Spriteset_Battle.prototype.createBackground = function() {
		_Spriteset_Battle_createBackground.apply(this);
		// this._backgroundSprite.opacity = 0;
		this._blackScreen.visible = false;
		this._backgroundSprite.visible = false;
	};

	// MZ フェード透過
	if (Utils.RPGMAKER_NAME == "MZ") {
		const _Scene_Base_startFadeIn = Scene_Base.prototype.startFadeIn;
		Scene_Base.prototype.startFadeIn = function(duration, white) {
			_Scene_Base_startFadeIn.apply(this);
			this.alpha = 0;
		};
		
		const _Scene_Base_updateFade = Scene_Base.prototype.updateFade;
		Scene_Base.prototype.updateFade = function() {
			_Scene_Base_updateFade.apply(this);
			this.alpha = (255 - this._fadeOpacity) / 255;
		};
		
		const _Scene_Base_updateColorFilter = Scene_Base.prototype.updateColorFilter;
		Scene_Base.prototype.updateColorFilter = function() {
			if (_3D.get("BaseSpriteVisible")) {
				_Scene_Base_updateColorFilter.apply(this);
			}
		};
	}
	
	// 一人称移動変換
	const _Game_Player_executeMove = Game_Player.prototype.executeMove;
	Game_Player.prototype.executeMove = function(direction) {
		const M = _3D.get("EasyCamera").Mode;
		if (M === 0 || M === 2) {
			// OFF or 俯瞰
			_Game_Player_executeMove.apply(this, [direction]);
		} else if (M === 1) {
			// 一人称
			if (direction == 2) {
				this.moveBackward();
			} else if (direction == 4 && Input.isTriggered("left")) {//isRepeated
				this.turnLeft90();
			} else if (direction == 6 && Input.isTriggered("right")) {//isTriggered
				this.turnRight90();
			} else if (direction == 8) {
				this.moveForward();
			}
		}
	};
	
	// ポインター移動量リセット
	const _SceneManager_updateMain = SceneManager.updateMain;
	SceneManager.updateMain = function() {
		_SceneManager_updateMain.apply(this);
		_3D.set("movementX", 0);
		_3D.set("movementY", 0);
	}
	
	// 少数を可能にする（上書き）
    Game_Variables.prototype.setValue = function(variableId, value) {
		if (variableId > 0 && variableId < $dataSystem.variables.length) {
			/* 
			// del
			if (typeof value === "number") {
				value = Math.floor(value);
			}
			*/
			this._data[variableId] = value;
			this.onChange();
		}
	};
	
})();
