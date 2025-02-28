 /*:
 * @plugindesc Extension to improve SRD's Character Creator EX.
 * @author YoraeRasante
 * @target MZ
 * 
 * @param exitConfirmText
 * @text CCEx Exit Confirm Text
 * @type text
 * @desc The confirmation text for when exiting the character creator
 * @default Yes
 * 
 * @param exitCancelText
 * @text CCEx Exit Cancel Text
 * @type text
 * @desc The cancelation text for when exiting the character creator
 * @default No
 * 
 * @help
 * CCEX Enhancements Expansion
 * SumRndmDde's Character Creator Ex is great... but it is not perfect.
 * While the idea is solid, some of the execution was a bit flawed.
 * Thus I am fixing some of those flaws.
 * 
 * Things added:
 * - ADDITION: extension to use CCEx on Rpg Maker MZ (if using Fossil)
 * - ADDITION: ability to choose options when exiting creator scene
 * - FIX: auto-saving customization of new piece types on the json file
 *   (you needed to change the json file by hand before)
 * - FIX: fixing stretch issue of custom faces vs crop of default ones
 * - ADDITION: you can set an event's custom char through comments on
 *   the page, instead of being forced to use only the event's notebox.
 *   Also, you can change them during runtime with a script call.
 * - FIX: Color Options for pieces now loop both directions.
 * - ADDITION: Color Options for pieces can go both directions on touch.
 * - ADDITION: Color options now saved when returning from another type.
 * 
 * - ADDITION: extension to use the CCEx extensions without GameUpgrade.
 * 
 * - FIX: CCEX_MessageFaces extension's \CCReset is working properly,
 *   showing the default custom face set for the page instead of the
 *   latest custom emotion face to be made. Also, Face 0 is now default.
 * 
 *  - ADDITION: CharacterCreatorEx is made compatible with MV3D, and MZ3D
 *    CCEX_DynamicActors does not break this compatibility either
 * 
 * 
 * 
 * Detailed explanations
 * 
 * The first big thing of v2 is the compatibility with Fossil to use on MZ.
 * As it used to be, even with Fossil CCEx was not compatible with MZ.
 * While I was able to make most of the changes in this extension, which
 * goes bellow SRD_CharacterCreatorEX on the plugin manager, there is also
 * a CCEx_Fossil plugin that NEEDS to be put between Fossil and CCEx, since
 * some of the functions CCEx uses need to be called before it yet Fossil
 * itself does not have them yet.
 * My version itself does not give them usability, they just "exist".
 * Which is all CCEx needs from them in MZ with Fossil and this extension.
 * 
 * 
 * The original CCEx does not let you change the options for when you are
 * exiting the scene, to confirm or deny exiting. You are stuck with the
 * default options regardless of your language, and to make things worse
 * it is not even "Yes" or "No", it is "Yes!" or "Nope".
 * This extension allows you to change this at will, the default texts
 * being "Yes" and "No"... or you can leave them blank, in which case the
 * original "Yes!" and "Nope" text returns.
 * 
 * 
 * First main issue of CCEx, Pieces Sections.
 * Originally, to add a new section you needed to not only set them on the
 * plugin itself and on SuperTools, the SuperTools settings would only be
 * saved if you editted the json by hand.
 * That means
 * With this plugin, you just need to change things once with the plugin
 * installed and it will be added automatically.
 * 
 * 
 * Another main issue of CCEx was that, when used somewhere the faces were
 * not a perfect square, the custom faces were stretched to fit the new
 * shape, unlike the original faces that cropped the sides until it fits
 * (if you pay attention, the faces that come with a new project, and the
 * generator ones, are made so the eyes are in the middle, to take advantage
 * of this. Make it thin enough and the eyes are all that is shown)
 * 
 * 
 * Originally, to make an event take the image of a custom character you had
 * no other option than putting it in the event's notebox. This affected
 * every page of the event, meaning the only way to stop, or change their
 * character or position from standing to "dead", was with hiding the event
 * in favor of another.
 * Now, you can also set this on each page, inside a comment. Same code as
 * for the notebox. You can still use it on the notebox field, but that one
 * cannot be removed, being the one used in every page without a comment set,
 * if a page has a different setting the page's one takes preference.
 * If you also want a page to NOT use a custom character, but there is a
 * setting on the notebox, you can use the comment notetag
 *      <no custom character>
 * 
 * You can also change an event's custom image with a script call now.
 * They basically work the same as the notetags, but with no need to change
 * the page, and if you exit the map it goes back to normal.
 * If you consider "event" as however you get a pointer to the event:
 *      event.setCustomCharacter(id)
 *          Makes the event use the walking sprite of actor (id)
 *      event.setDeadCustomCharacter(id)
 *          Makes the event use the dead sprite of actor (id)
 *      event.removeCustomCharacter()
 *          Makes the event stop using a custom character
 * 
 * 
 * The color options not looping do not seem like a big deal at first.
 * You can just go on the other direction if needed.
 * But touch controls could only go one direction in CCEx, meaning that
 * without being able to loop the colors around it was one way only.
 * That has been fixed, and now on both directions even.
 * 
 * 
 * That said, the window's touch was changed, now touching the middle of
 * the window confirms it and touching the sides will change choices.
 * 
 * 
 * Originally, when choosing a color, going to another folder of pieces
 * and back meant you would need to choose the color again.
 * It is noW "saved" when confirmed, you don't need to re-select the old
 * color if you ever change the piece.
 * 
 * 
 * About the Extensions:
 * They usually require also the use of SRD's GameUpgrade plugin.
 * As I never use much of it by itself, plus not sure if FOSSIL makes it
 * compatible with MZ, I made a small extra plugin to make them not need it.
 * It however needs to pretend to be it, to stop the warning messages.
 * Thus it needs to be put above Supertools.
 * While it has been tested and SuperTools, CCEx and both CCEX extensions
 * work perfectly fine with it instead, even through FOSSIL, I make no
 * guarantees about any other GameUpgrade-related plugins.
 *  
 * 
 * When using the CCEX_MessageFaces extension, the text command \CCReset
 * does not work as advertised. Instead of the original face, as it was
 * said it would, it instead shows the latest-used \CCFace<id, exp> of
 * that actor.
 * On the same vein, using \CCFace<id, 0> is now the "default" expression
 * while the old one did not have this choice, leaving just a blank.
 * 
 * 
 * And finally, CCEx was made compatible with MV3D.
 * Or, if you are using it with MZ, MZ3D.
 * But for that to work this needs to be put under CCEx, the extensions,
 * AND MV3D(/MZ3D)
 * ...and that's it, no more changes needed.
 * 
*/

//This parameter check does not need the file's name to get the parameters
//Feel free to rename it as you wish
var params = PluginManager.parameters(/([^\/]+)\.js$/.exec(document.currentScript.src)[1]);
SRD.CharacterCreatorEX.exitConfirmText = String(params['exitConfirmText']) || "Yes!";
SRD.CharacterCreatorEX.exitCancelText = String(params['exitCancelText']) || "Nope";


if (!SRD || !SRD.CharacterCreatorEX) {
    alert("YR_CCEX_Enhanced_v2 is an expansion for the 'SRD_CharacterCreatorEX' plugin. As such, said plugin needs to be above it on the plugin manager.");
} else {
    if (Utils.RPGMAKER_NAME == "MZ") {

        //Currently, Fossil does not work for WindowCommand that does not give any arguments, so I copied the original here and just gave them 0,0
        //As you can't set a window as bigger than its initial size at creation anymore, I also make them as big as the game and resize afterwards
        Window_CharacterCreator_FolderList.prototype.initialize = function(mandatories) {
            this._combines = {};
            this._mandatories = mandatories;
            Window_Command.prototype.initialize.call(this,0,0,Graphics.boxWidth,Graphics.boxHeight);
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            this.refresh();
        };
        Window_CharacterCreator_FileList.prototype.initialize = function(folderWindow) {
            this._folderWindow = folderWindow;
            this._folder = this._folderWindow.currentFolder();
            this._combinedMode = false;
            this._createStuff();
            Window_Command.prototype.initialize.call(this,0,0,Graphics.boxWidth,Graphics.boxHeight);
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            this.refresh();
        };
        Window_HueSelector.prototype.initialize = function(x, y, fileWindow, scene) {
            this._colorIndex = 0;
            Window_Command.prototype.initialize.call(this,x,y,Graphics.boxWidth,Graphics.boxHeight);
            this.select(-1);
            this._fileWindow = fileWindow;
            this._characterCreator = scene;
            this._colors = $dataCharacterCreator[this._fileWindow.currentSectionNoPart()].colors;
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            this.refresh();
        };
    
        //Fossil makes WindowCommands use the number of visible rows as height when none is set, and with 7 as a base value.
        //As the exit confirmation only has two options, I am setting that as the max value.
        Window_CharacterCreatorConfirmation.prototype.windowHeight = function() {
            return this.fittingHeight(2);
        };
    
        //In MZ, what was contentsHeight() in MV is innerHeight, while MZ's contentsHeight() uses itemHeight() to calculate its value.
        //You can imagine the problem that woud happen in a function where itemHeight returns contentsHeight.
        Window_HueSelector.prototype.itemHeight = function() {
            return this.lineHeight() + 16;
        };
        //windowHeight expects fittingHeight to use the MV method using lineHeight as a basis, not MZ's which uses itemHeight.
        //To make itemHeight fit the whole window, windowHeight needs to be changed
        Window_HueSelector.prototype.windowHeight = function() {
            return this.fittingHeight(1);
        };
    
        //Unlike MV, MZ does not set so selection is automatically made visible on the window for every selection
        const YR_CCEX_MZ_FileList_update = Window_CharacterCreator_FileList.prototype.update;
        Window_CharacterCreator_FileList.prototype.update = function() {
            if(this._folder !== this._folderWindow.currentFolder()) {
               var scrollUp = true;
            }
            YR_CCEX_MZ_FileList_update.apply(this, arguments);
            if (scrollUp) this.scrollTo(0,0);
        };
    
        //MZ uses itemSpacing for selection items, CCEx uses the old spacing for calculations (the one Fossil uses) but lets MZ actually draw them.
        //Results are... weird. So I changed it to use MZ's in everything
        Window_CharacterCreator_FileList.prototype.windowWidth = function() {
            return (this.itemWidth() * this.maxCols()) + ($gameSystem.windowPadding() * 2);
        };
        Window_CharacterCreator_FileList.prototype.itemWidth = function() {
            return this._allInfo[3] + this.colSpacing();
        };
        Window_CharacterCreator_FileList.prototype.itemHeight = function() {
            return this._allInfo[4] + this.rowSpacing();
        };
        const MZ_CC_FileList_createtuff = Window_CharacterCreator_FileList.prototype._createStuff;
        Window_CharacterCreator_FileList.prototype._createStuff = function() {
            MZ_CC_FileList_createtuff.call(this);
            this._allInfo[5] = -this.colSpacing();
        };
    
        //Since SRD used a Message Window here, MZ expects it to subindows linked to it. Thus I am giving it them, invisible though.
        //Sincerely, I'd rather make it a new window using message as prototype, an dummy out  subwindows, but this is just an extension not a remake so...
        const YR_CCEX_createMessageWindow_nameWindow = Scene_CharacterCreator.prototype.createMessageWindow
        Scene_CharacterCreator.prototype.createMessageWindow = function() {
            this._messageWindow = new Window_Message(Scene_Message.prototype.messageWindowRect.call(this));
            this.addWindow(this._messageWindow);
            this._goldWindow = new Window_Gold(new Rectangle(Graphics.boxWidth - this.mainCommandWidth(), 0, this.mainCommandWidth(), this.calcWindowHeight(1, true)));
            this._goldWindow.openness = 0;
            this._nameBoxWindow = new Window_NameBox();
            this._nameBoxWindow.openness = 0;
            this._choiceListWindow = new Window_ChoiceList();
            this._choiceListWindow.openness = 0;
            this._numberInputWindow = new Window_NumberInput();
            this._numberInputWindow.openness = 0;
            this._eventItemWindow = new Window_EventItem(new Rectangle(0, 0, Graphics.boxWidth, this.calcWindowHeight(4, true)));
            this._eventItemWindow.openness = 0;
            this.addWindow(this._goldWindow);
            this.addWindow(this._nameBoxWindow);
            this.addWindow(this._choiceListWindow);
            this.addWindow(this._numberInputWindow);
            this.addWindow(this._eventItemWindow);
            this._messageWindow.setGoldWindow(this._goldWindow);
            this._messageWindow.setNameBoxWindow(this._nameBoxWindow);
            this._messageWindow.setChoiceListWindow(this._choiceListWindow);
            this._messageWindow.setNumberInputWindow(this._numberInputWindow);
            this._messageWindow.setEventItemWindow(this._eventItemWindow);
            this._nameBoxWindow.setMessageWindow(this._messageWindow);
            this._choiceListWindow.setMessageWindow(this._messageWindow);
            this._numberInputWindow.setMessageWindow(this._messageWindow);
            this._eventItemWindow.setMessageWindow(this._messageWindow);
        };
    
        //Graphics._renderer is accessed differently in MZ.
        Bitmap.snapSprite = function(stage, width, height) {
            const bitmap = new Bitmap(width, height);
            const renderTexture = PIXI.RenderTexture.create(width, height);
            if (stage) {
                const renderer = Graphics.app.renderer;
                renderer.render(stage, renderTexture);
                stage.worldTransform.identity();
                const canvas = renderer.extract.canvas(renderTexture);
                bitmap.context.drawImage(canvas, 0, 0);
                canvas.width = 0;
                canvas.height = 0;
            }
            renderTexture.destroy({ destroyBase: true });
            bitmap.baseTexture.update();
            return bitmap;
        };

        //Unless saved as System files, MZ's image cache is emptied, for example, in the transition from title screen to map.
        //Thus creating a new cache - and access to it - just for CCEx files is the better solution
        ImageManager._CCExCache = {};
        SRD.CharacterCreatorEX.loadImage = function(filename) {
            const key = filename;
            const cache = ImageManager._CCExCache;
            if(!cache[key]) {
                const url = this.path + Utils.encodeURI(filename) + ".png";
                cache[key] = Bitmap.load(url);
            }
            return cache[key];
        };
        SRD.CharacterCreatorEX.loadImageWPath = function(path, filename) {
            const key = filename + path;
            const cache = ImageManager._CCExCache;
            if(!cache[key]) {
                const url = path + Utils.encodeURI(filename) + ".png";
                cache[key] = Bitmap.load(url);
            }
            return cache[key];
        };
    
        //Empty sprites are set as invisible on MZ, which makes them not be shown.
        //But CCEx can make empty sprites become the custom char too
        const YR_CCEX_MZ_Sprite_Character_isEmptyCharacter = Sprite_Character.prototype.isEmptyCharacter;
        Sprite_Character.prototype.isEmptyCharacter = function() {
            return (YR_CCEX_MZ_Sprite_Character_isEmptyCharacter.call(this) && !this._character.hasSetImage());
        };
    
        //In MZ, drawActorFace is on Window_StatusBase instead of Window_Base.
        //While Fossil can make any call for Window_Base's call Window_StatusBase's, it is understandable the opposite does not happen.
        const YR_CCEX_MZ_Window_StatusBase_drawActorFace = Window_StatusBase.prototype.drawActorFace;
        Window_StatusBase.prototype.drawActorFace = function(
            actor, x, y, width, height
        ) {
            if(actor.hasSetImage()) {
                this.drawCustomFace(actor, x, y, width, height);
            } else {
                YR_CCEX_MZ_Window_StatusBase_drawActorFace.apply(this, arguments);
            }
        };
    };

    //In the older version this was an optional, but I do not see why someone would deactivate it
    //In the original CCEx, if you edit settings about a piece section not pre-made in the json, you would need to edit it to add
    //Now, if some setting is changed it will be saved, and added to the json if it is not there yet.
    DataManagerEX.saveCurrentCharacterCreator = function() {
        const doc = MakerManager.document;
        const data = $dataCharacterCreator[this._characterCreatorSection];
        if(data) {
            data.label = doc.getElementById('label').value;
            data.source = doc.getElementById('source').value;
            data.direction = parseInt(doc.getElementById('direction').value || '0');
            data.condition = doc.getElementById('condition').value;
            data.colors = JSON.parse('[' + doc.getElementById('colors').value + ']');
            FileManager.saveData($dataCharacterCreator, "CharacterCreator.json");
        } else {
            var newdata = {};
            newdata.label = doc.getElementById('label').value;
            newdata.source = doc.getElementById('source').value;
            newdata.direction = parseInt(doc.getElementById('direction').value || '0');
            newdata.condition = doc.getElementById('condition').value;
            newdata.colors = JSON.parse('[' + doc.getElementById('colors').value + ']');
            $dataCharacterCreator[this._characterCreatorSection] = newdata;
            FileManager.saveData($dataCharacterCreator, "CharacterCreator.json");
        }
    };

    //In the older version this was an optional, but I do not see why someone would deactivate it
    //In the original CCEx, the face was taken as a whole piece and stretched to fit their requested position regardless of proportions,
    //unlike the original MV faces (and MZ) which are cropped if the proportion would end up not being a square
    Window_Base.prototype.drawFaceFromBitmap = function(bitmap, x, y, w, h) {
        if (Utils.RPGMAKER_NAME == "MZ") {
            var pw = ImageManager.faceWidth;
            var ph = ImageManager.faceHeight;
        } else {
            var pw = Window_Base._faceWidth;
            var ph = Window_Base._faceHeight;
        }
        w = w || pw;
        h = h || ph;
        var width = Math.min(w, pw);
        var height = Math.min(h, ph);
        var dx = Math.floor(x + Math.max(w - pw, 0) / 2);
        var dy = Math.floor(y + Math.max(h - ph, 0) / 2);
        if(!bitmap) {
            bitmap = _.loadImage('CustomFace', 0);
        }
        this.contents.blt(bitmap, 0, 0, width, height, dx, dy);
    };
    Window_Base.prototype.drawCustomFace = function(actor, x, y, w, h) {
        if (Utils.RPGMAKER_NAME == "MZ") {
            var pw = ImageManager.faceWidth;
            var ph = ImageManager.faceHeight;
        } else {
            var pw = Window_Base._faceWidth;
            var ph = Window_Base._faceHeight;
        }
        w = w || pw;
        h = h || ph;
        var width = Math.min(w, pw);
        var height = Math.min(h, ph);
        var dx = Math.floor(x + Math.max(w - pw, 0) / 2);
        var dy = Math.floor(y + Math.max(h - ph, 0) / 2);
        var sx = (pw - width) / 2;
        var sy = (ph - height) / 2;
        const bitmap = this.getCustomFace(actor);
        this.contents.blt(bitmap, sx, sy, width, height, dx, dy);
    };
    if(Imported.YEP_BattleStatusWindow) {
        Window_BattleStatus.prototype.drawCustomFace = function(actor, x, y, w, h) {
            if (Utils.RPGMAKER_NAME == "MZ") {
                var pw = ImageManager.faceWidth;
                var ph = ImageManager.faceHeight;
            } else {
                var pw = Window_Base._faceWidth;
                var ph = Window_Base._faceHeight;
            }
            w = w || pw;
            h = h || ph;
            var width = Math.min(w, pw);
            var height = Math.min(h, ph);
            var dx = Math.floor(x + Math.max(w - pw, 0) / 2);
            var dy = Math.floor(y + Math.max(h - ph, 0) / 2);
            const bitmap = this.getCustomFace(actor);
            this._faceContents.bitmap.blt(bitmap, 0, 0, width, height, dx, dy);
        };
    };

       //Setting a cache of each actor's custom images, so it is not recreated at every new appearence and making it run easier on the machine
       //Other plugins will also have an easier time loading the image, as it is already saved somewhere
        Game_Temp.prototype.createAllCustomCharImg = function() {
            $gameTemp._actorCustomCharImg = [];
            for (let actor of $gameActors._data) {
                this.createCustomCharImg(actor);
            }
        };
        Game_Temp.prototype.createCustomCharImg = function(actor) {
            if (!actor) return;
            let id = actor.actorId();
            if (!$gameCharacterCreations.hasInfo(id)) {
                $gameTemp._actorCustomCharImg[id] = [null,null,null,null];
                return;
            }
            let char = $gameCharacterCreations.buildBitmap(id);
            let dead = $gameCharacterCreations.buildBitmapDead(id);
            let face = $gameCharacterCreations.buildBitmapFace(id);
            let sv = $gameCharacterCreations.buildBitmapSv(id);
            $gameTemp._actorCustomCharImg[id] = [char, dead, face, sv];
        };
        const YR_CCEX_EnX2_terminate = Scene_CharacterCreator.prototype.terminate;
        Scene_CharacterCreator.prototype.terminate = function() {
            const actor = $gameActors._data[$gameCharacterCreations._tempActorId];
            $gameTemp.createCustomCharImg(actor);
            YR_CCEX_EnX2_terminate.apply(this, arguments);
        };
        Game_Actor.prototype.getCreatorBitmap = function() {
            return $gameTemp._actorCustomCharImg[this.actorId()][3];
        };
        Game_Actor.prototype.getCreatorBitmapChar = function() {
            return $gameTemp._actorCustomCharImg[this.actorId()][0];
        };
        Game_Actor.prototype.getCreatorBitmapDead = function() {
            return $gameTemp._actorCustomCharImg[this.actorId()][1];
        };
        Game_Actor.prototype.getCreatorBitmapFace = function() {
            return $gameTemp._actorCustomCharImg[this.actorId()][2];
        };
        const YR_CCEX_EnX2_createGameObjects = DataManager.createGameObjects;
        DataManager.createGameObjects = function() {
            YR_CCEX_EnX2_createGameObjects.apply(this, arguments);
            $gameTemp.createAllCustomCharImg();
        };
        const YR_CCEX_EnX2_extractSaveContents = DataManager.extractSaveContents
        DataManager.extractSaveContents = function(contents) {
            YR_CCEX_EnX2_extractSaveContents.apply(this, arguments);
            $gameTemp.createAllCustomCharImg();
        };
        Window_Base.prototype.getCustomFace = function(actor) {
            if(actor.hasSetImage()) {
                return actor.getCreatorBitmapFace();
            } else {
                return _.loadImage('CustomFace', 0);
            }
        };

    //Setting up so you can use the notetags also on comments, so they only affect that page.
    const YR_CCEX_EnX2_GE_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        YR_CCEX_EnX2_GE_setupPageSettings.apply(this, arguments);
        this._isCustomDeadCharacter = false;
        this.setupCustomCharacter();
        this.setupPageCustomCharacter();
    };
    Game_Event.prototype.setupPageCustomCharacter = function() {
        var comment = this.page().list.filter(function(list) {
            return list.code === 108 || list.code === 408;
        }).map(function(list) {
            return list.parameters;
        }).toString();
        if(comment.match(/<Custom[ ]?(Dead[ ]?|)Character[ ]?:\s*(\d+)\s*>/im)) {
            this._customCharacterId = parseInt(RegExp.$2);
            this._customCharacterActor = $gameActors.actor(this._customCharacterId);
            this._isCustomDeadCharacter = !!(RegExp.$1);
            this._needsCustomCharacterUpdate = true;
        } else if (comment.match(/<No[ ]?Custom[ ]?Character>/im)) {
            this._customCharacterId = undefined;
            this._customCharacterActor = undefined;
            this._isCustomDeadCharacter = false;
            this._needsCustomCharacterUpdate = true;
        }
        if(typeof mv3d != "undefined") this._needs3dCustomUpdate = this._needsCustomCharacterUpdate;
    };

    //Setting up so you can change the image of an event with a custom character without needing to change the page, either
    Game_Event.prototype.setCustomCharacter = function(actorId) {
        this._customCharacterId = actorId;
        this._customCharacterActor = $gameActors.actor(this._customCharacterId);
        this._isCustomDeadCharacter = false;
        this._needsCustomCharacterUpdate = true;
        if(typeof mv3d != "undefined") this._needs3dCustomUpdate = true;
    }
    Game_Event.prototype.setDeadCustomCharacter = function(actorId) {
        this._customCharacterId = actorId;
        this._customCharacterActor = $gameActors.actor(this._customCharacterId);
        this._isCustomDeadCharacter = true;
        this._needsCustomCharacterUpdate = true;
        if(typeof mv3d != "undefined") this._needs3dCustomUpdate = true;
    }
    Game_Event.prototype.removeCustomCharacter = function() {
        this._customCharacterId = undefined;
        this._customCharacterActor = undefined;
        this._isCustomDeadCharacter = false;
        this._needsCustomCharacterUpdate = true;
        if(typeof mv3d != "undefined") this._needs3dCustomUpdate = true;
    }

    //Making it so that the colors loop when choosing among them
    const YR_CCEX_EnX2_HueSel_cursorRight = Window_HueSelector.prototype.cursorRight;
    Window_HueSelector.prototype.cursorRight = function() {
        if(this._colorIndex < this._colors.length - 1) {
            YR_CCEX_EnX2_HueSel_cursorRight.apply(this, arguments);
            return;
        }
            this._colorIndex = 0;
            this.refreshEveything();
		    SoundManager.playCursor();

    };
    const YR_CCEX_EnX2_HueSel_cursorLeft = Window_HueSelector.prototype.cursorLeft;
    Window_HueSelector.prototype.cursorLeft = function() {
        if(this._colorIndex > 0) {
            YR_CCEX_EnX2_HueSel_cursorLeft.apply(this, arguments);
            return;
        }
            this._colorIndex = this._colors.length - 1;
            this.refreshEveything();
		    SoundManager.playCursor();
    };

    //Not resetting colors when changing lists
    const YR_CCEX_EnX2_onFileListOK = Scene_CharacterCreator.prototype.onFileListOK;
    Scene_CharacterCreator.prototype.onFileListOK = function() {
        YR_CCEX_EnX2_onFileListOK.apply(this, arguments);
        if(this.getHueUsage()) this._hueWindow._colorIndex = ($gameSystem.colorIndexSaves()[this._fileList.currentSection()] || 0);
    };
    const YR_CCEX_EnX2_onHueWindowOk = Scene_CharacterCreator.prototype.onHueWindowOk;
    Scene_CharacterCreator.prototype.onHueWindowOk = function() {
        YR_CCEX_EnX2_onHueWindowOk.apply(this, arguments);
        $gameSystem.colorIndexSaves()[this._fileList.currentSection()] = this._hueWindow._colorIndex;
    };

    //Setting it so clicking on the sides of the Color Window will change the color.
    Window_HueSelector.prototype.update = function() {
        Window_Command.prototype.update.apply(this, arguments);
    };
    Window_HueSelector.prototype.processTouch = function() {
        if (this.isOpenAndActive()) {
            if (TouchInput.isCancelled() && this.isCancelEnabled()) {
                this.processCancel();
                return;
            }
            if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
                this._touching = true;
                this.onTouch(true);
            }
            if (this._touching) {
                if (TouchInput.isPressed()) {
                    this.onTouch(false);
                } else {
                    this._touching = false;
                }
            }
        } else {
            this._touching = false;
        }
    };
    Window_HueSelector.prototype.onTouch = function(triggered) {
        if (Utils.RPGMAKER_NAME == "MZ") {
            const touchPos = new Point(TouchInput.x, TouchInput.y);
            const localPos = this.worldTransform.applyInverse(touchPos);
            var x = localPos.x;
        } else var x = this.canvasToLocalX(TouchInput.x);
        var leftWidth = Math.max((this.windowWidth()/5),(this.textWidth('<  ') + this.standardPadding()));
        var rightWidth = Math.max((this.windowWidth()/5),(this.textWidth('  >') + this.standardPadding()));
        if (x >= leftWidth && x <= (this.windowWidth() - rightWidth)) {
            if (triggered) {
                this.processOk();
            }
        } else {
            if (triggered || this._stayCount >= 10) {
                (x > leftWidth) ? this.cursorRight() : this.cursorLeft();
                this._stayCount = 0;
            } else if(Utils.RPGMAKER_NAME == "MZ") this._stayCount++;
        }
    };

    //Changing the text on the "confirm you are leaving" choice.
    //As they could not be changed in the original
    Window_CharacterCreatorConfirmation.prototype.makeCommandList = function() {
        this.addCommand(SRD.CharacterCreatorEX.exitConfirmText,   'yes');
        this.addCommand(SRD.CharacterCreatorEX.exitCancelText,   'no');
    };

    //Compatibility with DynamicActorsEX
    if (typeof SRD.DynamicActorsEX != "undefined") {
        Game_Actor.prototype.setDynChangedChar = function() {
            $gameTemp.createCustomCharImg(this);
            if(typeof mv3d != "undefined") {
                $gamePlayer.setAllNeedsCustomUpdate();
                const actorId = this.actorId();
                for (const event of $gameMap.events()) {
                    if (event._customCharacterId === actorId) event._needs3dCustomUpdate = true;
                }
            }
        };
        const YR_CCEX_EnX2_DynAct_changeClass = Game_Actor.prototype.changeClass;
        Game_Actor.prototype.changeClass = function(classId, keepExp) {
            YR_CCEX_EnX2_DynAct_changeClass.apply(this, arguments);
            this.setDynChangedChar();
        };
        const YR_CCEX_EnX2_DynAct_changeEquip = Game_Actor.prototype.changeEquip;
        Game_Actor.prototype.changeEquip = function(slotId, item) {
            YR_CCEX_EnX2_DynAct_changeEquip.apply(this, arguments);
            this.setDynChangedChar();
        };
        const YR_CCEX_EnX2_DynAct_forceChangeEquip = Game_Actor.prototype.forceChangeEquip;
        Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
            YR_CCEX_EnX2_DynAct_forceChangeEquip.apply(this, arguments);
            this.setDynChangedChar();
        };
    };

    //Compatibility with MessageFacesEX
    if (typeof SRD.CCEXFaces != "undefined") {
        const YR_CCEX_EnX2_MessFace_getCustomFaceThatIsCustom = Window_Base.prototype.getCustomFaceThatIsCustom;
        Window_Base.prototype.getCustomFaceThatIsCustom = function(actor, faceId) {
            if (faceId == 0) return this.getCustomFace(actor);
            return YR_CCEX_EnX2_MessFace_getCustomFaceThatIsCustom.apply(this, arguments);
        };
        const YR_CCEX_EnX2_MessFace_drawMessageFace = Window_Message.prototype.drawMessageFace;
        Window_Message.prototype.drawMessageFace = function() {
            const text = (this._textState) ? this._textState.text : '';
            if(text.match(/<CC\s?Face:\s*(\d+)\s*>/i)) {
                const id = parseInt(RegExp.$1);
                this._defaultCCFace = this.getCustomFace($gameActors.actor(id));
            }
            YR_CCEX_EnX2_MessFace_drawMessageFace.apply(this, arguments);
        };
    }

    //Compatibility with MV3D
    if(typeof mv3d != "undefined") {
        const YR_CCEX_MV3D_updateCharacter = mv3d.Character.prototype.updateCharacter;
        mv3d.Character.prototype.updateCharacter = function() {
            this._character._needs3dCustomUpdate = false;
            if (!this._character.hasSetImage()) return YR_CCEX_MV3D_updateCharacter.apply(this, arguments);
            this.needsPositionUpdate = true;
            this._tilesetId = $gameMap.tilesetId();
            this._tileId = this._character._tileId;
            this._characterName = this._character.characterName();
            this._characterIndex = this._character.characterIndex();
            this._isBigCharacter = true;
            this._texture_symbol = this.getConfig('texture_symbol');
            this.isEmpty = false;
            this.isComplex = this.model.isComplexMesh();
            this.model.setEnabled(true);
            this.dontCrop = false;
            delete this.textureRect;
            if (this._character._isCustomDeadCharacter) this.setMaterial(this._character.getCreatorBitmapDead().canvas.toDataURL());
            else this.setMaterial(this._character.getCreatorBitmap().canvas.toDataURL());
        };

        const YR_CCEX_MV3D_isImageChanged = mv3d.Character.prototype.isImageChanged;
        mv3d.Character.prototype.isImageChanged = function() {
            return YR_CCEX_MV3D_isImageChanged.apply(this, arguments) || this._character._needs3dCustomUpdate;
        };
        const YR_CCEX_MV3D_GP_setNeedsCustomUpdate = Game_Player.prototype.setNeedsCustomUpdate;
        Game_Player.prototype.setNeedsCustomUpdate = function(update) {
            YR_CCEX_MV3D_GP_setNeedsCustomUpdate.apply(this, arguments);
            if (!!update) this._needs3dCustomUpdate = true;
        };
        const YR_CCEX_MV3D_GF_setNeedsCustomUpdate = Game_Follower.prototype.setNeedsCustomUpdate;
        Game_Follower.prototype.setNeedsCustomUpdate = function(update) {
            YR_CCEX_MV3D_GF_setNeedsCustomUpdate.apply(this, arguments);
            if (!!update) this._needs3dCustomUpdate = true;
        };
        const YR_CCEX_MV3D_terminate = Scene_CharacterCreator.prototype.terminate;
        Scene_CharacterCreator.prototype.terminate = function() {
            const actorId = $gameCharacterCreations._tempActorId;
            for (const event of $gameMap.events()) {
                if (event._customCharacterId === actorId) event._needs3dCustomUpdate = true;
            }
            YR_CCEX_MV3D_terminate.apply(this, arguments);
        };
        const YR_CCEX_MV3D_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function(command, args) {
            YR_CCEX_MV3D_pluginCommand.apply(this, arguments);
            if ((command.trim().toLowerCase() === 'disablecharactercreatorimages')
               || (command.trim().toLowerCase() === 'enablecharactercreatorimages')) {
                const actorId = parseInt(args[0]);
                for (const event of $gameMap.events()) {
                    if (event._customCharacterId === actorId) event._needs3dCustomUpdate = true;
                }
            }
        };
    };
};