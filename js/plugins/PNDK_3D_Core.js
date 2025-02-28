import * as THREE from './PNDK_3D_three.module.min.js';
import { GLTFLoader } from './PNDK_3D_GLTFLoader.js';
import { FBXLoader } from './PNDK_3D_FBXLoader.js';
import * as SkeletonUtils from './PNDK_3D_SkeletonUtils.js';

const _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
	_Scene_Boot_start.apply(this);
	
	// Scene
	const Scene = new THREE.Scene();
	Scene.name = "_Scene";
	_3D.set("Scene", Scene);
	Scene.background = new THREE.Color("rgb(0, 128, 255)");

	// Cameras
	const Camera0 = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
	Camera0.name = "_Camera0";
	Scene.add(Camera0);
	_3D.set("Cameras", [Camera0]);

	// GameCanvas
	const GameCanvas = document.getElementById("GameCanvas") || document.getElementById("gameCanvas");
	_3D.set("GameCanvas", GameCanvas);
	
	// GameCanvas.addEventListener('pointermove', Evt => {
	GameCanvas.addEventListener('mousemove', Evt => {
		const X = _3D.get("movementX") || 0;
		const Y = _3D.get("movementY") || 0;
		_3D.set("movementX", X + Evt.movementX);
		_3D.set("movementY", Y + Evt.movementY);
	});
	
	// Renderer
	const Renderer = new THREE.WebGLRenderer();
	_3D.set("Renderer", Renderer);
	
	_3D.set("ColorSpace", THREE.SRGBColorSpace);
	THREE.ColorManagement.enabled = true;
	Renderer.outputColorSpace = _3D.get("ColorSpace");
	
	Renderer.setSize(GameCanvas.clientWidth, GameCanvas.clientHeight);
	document.body.appendChild(Renderer.domElement);

	const Resize3D = function () {
		Renderer.domElement.style.width = GameCanvas.style.width;
		Renderer.domElement.style.height = GameCanvas.style.height;
		Renderer.domElement.style.position = GameCanvas.style.position;
		Renderer.domElement.style.margin = GameCanvas.style.margin;
		Renderer.domElement.style.top = GameCanvas.style.top;
		Renderer.domElement.style.left = GameCanvas.style.left;
		Renderer.domElement.style.right = GameCanvas.style.right;
		Renderer.domElement.style.bottom = GameCanvas.style.bottom;
		//
		Camera0.aspect = GameCanvas.clientWidth / GameCanvas.clientHeight;
		Camera0.updateProjectionMatrix();
		Renderer.setSize(GameCanvas.clientWidth, GameCanvas.clientHeight);
	}
	_3D.set("Resize3D", Resize3D);
	Resize3D();
	window.addEventListener('resize', Resize3D);
	
	// AmbientLight
	const AmbientLight = new THREE.AmbientLight(0xffffff);
	AmbientLight.name = "_AmbientLight";
	_3D.set("AmbientLight", AmbientLight);
	Scene.add(AmbientLight);

	// DirectionalLight
	// const DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
	// DirectionalLight.position.set(-1, 1, 1);
	// _3D.set("DirectionalLight", DirectionalLight);
	// Scene.add(DirectionalLight);

	// AnimationMixer
	const Mixer = new THREE.AnimationMixer(Scene);
	_3D.set("Mixer", Mixer);
	
	// Clock
	const Clock = new THREE.Clock();
	_3D.set("Clock", Clock);
	
	// GLBLoader
	const GLBLoader = new GLTFLoader();
	_3D.set("GLBLoader", GLBLoader);
	
	// FbxLoader
	const FbxLoader = new FBXLoader();
	_3D.set("FbxLoader", FbxLoader);
	
	// Clips
	_3D.set("Clips", new Map());
	
	function Animate() {
		requestAnimationFrame(Animate);
		Mixer.update(Clock.getDelta());
		Renderer.render(Scene, Camera0);
	}
	Animate();
	_3D.set("Animate", Animate);
	
};

//プラグインコマンドの追加
// MV
if (Utils.RPGMAKER_NAME == "MV") {
	const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		script3d._pluginCommand(command, script3d._arrayParser(args));
	};
}
// MZ
if (Utils.RPGMAKER_NAME == "MZ") {
	PluginManager.registerCommand(_3D.get("PluginName"), "Background", args => {
		script3d._pluginCommand("3d", ["scene", "background", script3d._converter(args.file) + ".png"]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Pointer Lock", args => {
		script3d._pluginCommand("3d", ["scene", "pointerLock", args.mode]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Show 2D Map", args => {
		script3d._pluginCommand("3d", ["scene", "show2dMap", args.mode]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Clear Scene", args => {
		script3d._pluginCommand("3d", ["scene", "clear"]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Fog", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["scene", "fog", param.color, param.near, param.far]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Load Texture", args => {
		script3d._pluginCommand("3d", ["texture", "load", script3d._converter(args.file) + ".png"]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Translate Camera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "translate", param.camera, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Rotate Camera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "rotate", param.camera, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Camera Position", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "position", param.camera, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Camera Rotation", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "rotation", param.camera, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Camera Same As Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "sameAsModel", param.camera, param.name, param.position, param.rotation]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Camera Look At Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "lookAt", param.camera, param.name, param.angle]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Detach Camera", args => {
		script3d._pluginCommand("3d", ["camera", "detach", script3d._converter(args.camera)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Camera FOV", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "fov", param.camera, param.fov]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "EasyCamera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["camera", "easy", 0, param.mode, param.offset, param.rotation]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Load Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "load", param.file, param.name]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Create Box", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "create", "box", param.name, param.file + ".png", param.width, param.height, param.depth]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Create Plane", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "create", "plane", param.name, param.file + ".png", param.width, param.height, param.depth]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Translate Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "translate", param.name, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Rotate Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "rotate", param.name, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Position", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "position", param.name, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Rotation", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "rotation", param.name, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Scale", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "scale", param.name, param.x, param.y, param.z]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Same As Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "sameAsModel", param.name, param.target, param.position, param.rotation, param.scale]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Same As Camera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "sameAsCamera", param.name, param.camera, param.position, param.rotation]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Look At Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "lookAt", param.name, param.target, param.angle]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Look At Camera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "lookAt", param.name, "camera", param.camera, param.angle]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Animation Play", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "animation", param.name, "play", param.idx, param.loop]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Model Animation Pause", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "animation", param.name, "pause", param.bool]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Remove Model", args => {
		script3d._pluginCommand("3d", ["model", "remove", script3d._converter(args.name)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Check Collisions", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "checkCollisions", param.name, param.target]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Resolve Collisions", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "resolveCollisions", param.name, param.target]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Resolve Collisions With Map", args => {
		script3d._pluginCommand("3d", ["model", "resolveCollisionsWithMap", script3d._converter(args.name)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Resolve Collisions With ModelsList", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "resolveCollisionsWithModelsList", param.list, param.targetList]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Attach Model", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "attachModel", param.name, param.target]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Attach Camera", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "attachCamera", param.name, param.camera]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Detach Model", args => {
		script3d._pluginCommand("3d", ["model", "detach", script3d._converter(args.name)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Set ModelsList", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "setModelsList", param.list, param.parent, param.forward, param.deep]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Select First", args => {
		script3d._pluginCommand("3d", ["model", "selectFirst", script3d._converter(args.list)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Select Next", args => {
		script3d._pluginCommand("3d", ["model", "selectNext", script3d._converter(args.list)]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Selected Name", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "selectedName", param.list, param.variable]);
	});
	PluginManager.registerCommand(_3D.get("PluginName"), "Set ModelVariable", args => {
		const param = script3d._structureParser(args.param);
		script3d._pluginCommand("3d", ["model", "setModelVariable", param.name, param.variableName, param.operator, param.value]);
	});
}

// プラグインコマンド本体
script3d._pluginCommand = function(command, args) {
	const Scene = _3D.get("Scene");
	const Cameras = _3D.get("Cameras");
	const Mixer = _3D.get("Mixer");
	//
	if (command === '3d') {
		if (args[0] === "scene") {
			// シーン関連===============================================
			if (args[1] === "background") {
				if (!_3D.get("Textures").has(args[2])) {
					console.warn("Texture not loaded. テクスチャーが読み込まれていません。" + args[2]);
					return;
				}
				const T = _3D.get("Textures").get(args[2]).clone();
				T.mapping = THREE.EquirectangularReflectionMapping;
				T.magFilter = THREE.LinearFilter;
				T.minFilter = THREE.LinearMipmapLinearFilter;
				Scene.background = T;
			} else if (args[1] === "pointerLock") {
				if (args[2] === "true") {
					const GameCanvas = _3D.get("GameCanvas");
					GameCanvas.requestPointerLock({unadjustedMovement: true});// Linux ではエラーになるらしい
				} else if (document.pointerLockElement) {
					document.exitPointerLock();
				}
			} else if (args[1] === "show2dMap") {
				if (args[2] === "true") {
					_3D.get("BaseSprite").visible = true;
					_3D.set("BaseSpriteVisible", true);
				} else {
					_3D.get("BaseSprite").visible = false;
					_3D.set("BaseSpriteVisible", false);
				}
			} else if (args[1] === "clear") {
				script3d._removeAll(Scene);
				_3D.get("MapModels").clear();
				_3D.get("ModelsList").clear();
				_3D.get("ModelsListSelected").clear();
				script3d._pluginCommand("3d", ["scene", "fog", "", 0, 0]);
				script3d._pluginCommand("3d", ["scene", "pointerLock", "false"]);
				if (Scene.userData.ModelVariable) {
					Scene.userData.ModelVariable.clear();
				}
			} else if (args[1] === "fog") {
				const Color = args[2];
				const Near = Number(args[3]) || 0;
				const Far = Number(args[4]) || 0;
				if (Color === "") {
					Scene.fog = null;
				} else {
					Scene.fog = new THREE.Fog(Color, Near, Far);
				}
			}
		} else if (args[0] === "texture") {
			// テクスチャ関連===============================================
			if (args[1] === "load") {
				if (!_3D.get("Textures").has(args[2])) {
					const Texture = new THREE.TextureLoader().load(args[2], (T)=>{
						T.colorSpace = _3D.get("ColorSpace");
						T.wrapS = THREE.RepeatWrapping;
						T.wrapT = THREE.RepeatWrapping;
						T.magFilter = _3D.get("TextureMagFilter");
						T.minFilter = _3D.get("TextureMinFilter");
						_3D.get("Textures").set(args[2], T);
						console.log("Loaded", args[2]);
					});
				}
			} else if (args[1] === "???") {
			}
		} else if (args[0] === "camera") {
			// カメラ関連===============================================
			if (Number(args[2]) >= Cameras.length) {
				console.warn("Camera not found. カメラが見つかりません。" + args[2]);
				return;
			}
			const Cam = Cameras[Number(args[2])];
			if (args[1] === "translate") {
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Cam.translateX(X);
				Cam.translateY(Y);
				Cam.translateZ(Z);
			} else if (args[1] === "rotate") {
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Cam.rotateY(THREE.MathUtils.degToRad(Y));
				Cam.rotateX(THREE.MathUtils.degToRad(X));
				Cam.rotateZ(THREE.MathUtils.degToRad(Z));
			} else if (args[1] === "position") {
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Cam.position.set(X, Y, Z);
			} else if (args[1] === "rotation") {
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Cam.rotation.y = THREE.MathUtils.degToRad(Y);
				Cam.rotation.x = THREE.MathUtils.degToRad(X);
				Cam.rotation.z = THREE.MathUtils.degToRad(Z);
			} else if (args[1] === "sameAsModel") {
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[3]);
					return;
				}
				const P = Cam.parent;
				Scene.attach(Cam);
				if (args[4] == "true") {
					const WP = new THREE.Vector3();
					TargetObj.getWorldPosition(WP);
					Cam.position.copy(WP);
				}
				if (args[5] == "true") {
					const WQ = new THREE.Quaternion();
					TargetObj.getWorldQuaternion(WQ);
					Cam.quaternion.copy(WQ);
				}
				P.attach(Cam);
			} else if (args[1] === "lookAt") {
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[3]);
					return;
				}
				const WP = new THREE.Vector3();
				TargetObj.getWorldPosition(WP);
				const Q = Cam.quaternion.clone();
				const A = Number(args[4]) || 0;
				Cam.lookAt(WP);
				if (A != 0) {
					Q.rotateTowards(Cam.quaternion, THREE.MathUtils.degToRad(A));
					Cam.quaternion.copy(Q);
				}
			} else if (args[1] === "detach") {
				Scene.attach(Cam);
			} else if (args[1] === "fov") {
				const Fov = Number(args[3]) || 50;
				Cam.fov = Fov;
				Cam.updateProjectionMatrix ();
			} else if (args[1] === "easy") {
				if (args[3] === "first") {
					_3D.get("EasyCamera").Mode = 1;
				} else if (args[3] === "third") {
					_3D.get("EasyCamera").Mode = 2;
				} else {
					// off
					_3D.get("EasyCamera").Mode = 0;
				}
				_3D.get("EasyCamera").Offset = Number(args[4]) || 0;
				_3D.get("EasyCamera").Rotation = args[5] === "true";
			}
		} else if (args[0] === "model") {
			// モデル関連===============================================
			if (args[1] === "load") {
				const GLBLoader = _3D.get("GLBLoader");
				const FbxLoader = _3D.get("FbxLoader");
				const Models = _3D.get("Models");
				const Path = args[2];
				const Name = args[3];
				if (Models.has(Path)) {
					const NewModel = SkeletonUtils.clone(Models.get(Path));
					NewModel.name =  Name;
					Scene.add(NewModel);
				} else if (Path.toLowerCase().endsWith(".glb")) {
					GLBLoader.load(Path, function(GLTF){
						GLTF.scene.animations = GLTF.animations;
						Models.set(Path, GLTF.scene);
						const NewModel = SkeletonUtils.clone(GLTF.scene);
						NewModel.name = Name;
						Scene.add(NewModel);
						if (NewModel.animations.length > 0) {
							const action = Mixer.clipAction(NewModel.animations[0], NewModel);
							action.play();
							action.paused = true;
						}
					});
				} else if (Path.toLowerCase().endsWith(".fbx")) {
					FbxLoader.load(Path, function(FBX){
						Models.set(Path, FBX);
						const NewModel = SkeletonUtils.clone(FBX);
						NewModel.name = Name;
						Scene.add(NewModel);
						if (NewModel.animations.length > 0) {
							const action = Mixer.clipAction(NewModel.animations[0], NewModel);
							action.play();
							action.paused = true;
						}
					});
				}
			} else if (args[1] === "create") {
				if (args[2] == "box") {
					if (!_3D.get("Textures").has(args[4])) {
						console.warn("Texture not loaded. テクスチャーが読み込まれていません。" + args[4]);
						return;
					}
					const W = Number(args[5]) || 0;
					const H = Number(args[6]) || 0;
					const D = Number(args[7]) || 0;
					const Geometry = new THREE.BoxGeometry(W, H, D);
					Geometry.computeBoundingBox();
					let Material;
					if (W == H && H == D) {
						const T = _3D.get("Textures").get(args[4]).clone();
						T.repeat = new THREE.Vector2(W / T.image.width, H / T.image.height);
						Material = new THREE.MeshStandardMaterial({map:T});
						Material.alphaTest = 0.5;
						Material.transparent = true;
					} else {
						// Front Back
						const FrontBackT = _3D.get("Textures").get(args[4]).clone();
						FrontBackT.repeat = new THREE.Vector2(W / FrontBackT.image.width, H / FrontBackT.image.height);
						const FrontBackM = new THREE.MeshStandardMaterial({map:FrontBackT});
						FrontBackM.alphaTest = 0.5;
						FrontBackM.transparent = true;
						// Left Right
						const LeftRightT = _3D.get("Textures").get(args[4]).clone();
						LeftRightT.repeat = new THREE.Vector2(D / LeftRightT.image.width, H / LeftRightT.image.height);
						const LeftRightM = new THREE.MeshStandardMaterial({map:LeftRightT});
						LeftRightM.alphaTest = 0.5;
						LeftRightM.transparent = true;
						// Top Bottom
						const TopBottomT = _3D.get("Textures").get(args[4]).clone();
						TopBottomT.repeat = new THREE.Vector2(W / TopBottomT.image.width, D / TopBottomT.image.height);
						const TopBottomM = new THREE.MeshStandardMaterial({map:TopBottomT});
						TopBottomM.alphaTest = 0.5;
						TopBottomM.transparent = true;
						//
						Material = [LeftRightM, LeftRightM, TopBottomM, TopBottomM, FrontBackM, FrontBackM];
					}
					const Obj = new THREE.Mesh(Geometry, Material);
					Obj.name = args[3];
					Scene.add(Obj);
				} else if (args[2] == "plane") {
					if (!_3D.get("Textures").has(args[4])) {
						console.warn("Texture not loaded. テクスチャーが読み込まれていません。" + args[4]);
						return;
					}
					const T = _3D.get("Textures").get(args[4]).clone();
					const W = Number(args[5]) || 0;
					const H = Number(args[6]) || 0;
					const D = Number(args[7]) || 0;
					T.repeat = new THREE.Vector2(W / T.image.width, H / T.image.height);
					const Geometry = new THREE.PlaneGeometry(W, H);
					Geometry.computeBoundingBox();
					Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, D / 2));
					const Material = new THREE.MeshStandardMaterial({map:T});
					Material.alphaTest = 0.5;
					Material.transparent = true;
					Material.side = THREE.DoubleSide;
					const Obj = new THREE.Mesh(Geometry, Material);
					Obj.name = args[3];
					Scene.add(Obj);
				}
			} else if (args[1] === "translate") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Obj.translateX(X);
				Obj.translateY(Y);
				Obj.translateZ(Z);
			} else if (args[1] === "rotate") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Obj.rotateY(THREE.MathUtils.degToRad(Y));
				Obj.rotateX(THREE.MathUtils.degToRad(X));
				Obj.rotateZ(THREE.MathUtils.degToRad(Z));
			} else if (args[1] === "position") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Obj.position.set(X, Y, Z);
			} else if (args[1] === "rotation") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Obj.rotation.y = THREE.MathUtils.degToRad(Y);
				Obj.rotation.x = THREE.MathUtils.degToRad(X);
				Obj.rotation.z = THREE.MathUtils.degToRad(Z);
			} else if (args[1] === "scale") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const X = Number(args[3]) || 0;
				const Y = Number(args[4]) || 0;
				const Z = Number(args[5]) || 0;
				Obj.scale.set(X, Y, Z);
			} else if (args[1] === "sameAsModel") {
				const Obj = Scene.getObjectByName(args[2]);
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!Obj || !TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				const P = Obj.parent;
				Scene.attach(Obj);
				if (args[4] == "true") {
					const WP = new THREE.Vector3();
					TargetObj.getWorldPosition(WP);
					Obj.position.copy(WP);
				}
				if (args[5] == "true") {
					const WQ = new THREE.Quaternion();
					TargetObj.getWorldQuaternion(WQ);
					Obj.quaternion.copy(WQ);
				}
				if (args[6] == "true") {
					const WS = new THREE.Vector3();
					TargetObj.getWorldScale(WS);
					Obj.scale.copy(WS);
				}
				P.attach(Obj);
			} else if (args[1] === "sameAsCamera") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				if (Number(args[3]) >= Cameras.length) {
					console.warn("Camera not found. カメラが見つかりません。" + args[3]);
					return;
				}
				const TargetObj = Cameras[Number(args[3])];
				const P = Obj.parent;
				Scene.attach(Obj);
				if (args[4] == "true") {
					const WP = new THREE.Vector3();
					TargetObj.getWorldPosition(WP);
					Obj.position.copy(WP);
				}
				if (args[5] == "true") {
					const WQ = new THREE.Quaternion();
					TargetObj.getWorldQuaternion(WQ);
					Obj.quaternion.copy(WQ);
				}
				P.attach(Obj);
			} else if (args[1] === "lookAt") {
				const Obj = Scene.getObjectByName(args[2]);
				let TargetObj;
				let A;
				if (args[3] === "camera") {
					if (Number(args[4]) >= Cameras.length) {
						console.warn("Camera not found. カメラが見つかりません。" + args[4]);
						return;
					}
					TargetObj = Cameras[Number(args[4])];
					A = Number(args[5]) || 0;
				} else {
					TargetObj = Scene.getObjectByName(args[3]);
					A = Number(args[4]) || 0;
				}
				if (!Obj || !TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				const WP = new THREE.Vector3();
				TargetObj.getWorldPosition(WP);
				const Q = Obj.quaternion.clone();
				Obj.lookAt(WP);
				if (A != 0) {
					Q.rotateTowards(Obj.quaternion, THREE.MathUtils.degToRad(A));
					Obj.quaternion.copy(Q);
				}
			} else if (args[1] === "animation") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				if (args[3] === "play") {
					const AnimeIdx = Number(args[4]) || 0;
					if (Obj.animations.length <= 0 || AnimeIdx >= Obj.animations.length) {
						console.warn("Animation not found. アニメーションが見つかりません。" + AnimeIdx);
						return;
					}
					const Action = Mixer.clipAction(Obj.animations[AnimeIdx], Obj);
					// 既に再生中の場合はスキップ（フェードアウト中はポーズしているはずなのでスキップは回避される）
					if (Action.isRunning()) {
						return;
					}
					// 他のアニメをポーズしてフェードアウト
					for (const v of Obj.animations) {
						const exAct = Mixer.existingAction(v, Obj);
						if (exAct) {
							if (exAct.getClip().uuid !== Action.getClip().uuid) {
								exAct.paused = true;
								exAct.fadeOut(0.2);
							}
						}
					}
					//
					Action.clampWhenFinished = true;
					let Loop;
					if (args[5] == "once") {
						Loop = THREE.LoopOnce;
					} else if (args[5] == "pingpong") {
						Loop = THREE.LoopPingPong;
					} else {
						Loop = THREE.LoopRepeat;
					}
					Action.stop().setLoop(Loop, Infinity).play().fadeIn(0.2);
				} else if (args[3] === "pause") {
					for (const v of Obj.animations) {
						const exAct = Mixer.existingAction(v, Obj);
						if (exAct) {
							if (args[4] === "true") {
								exAct.paused = true;
							} else {
								exAct.paused = false;
							}
						}
					}
				}
			} else if (args[1] === "remove") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				script3d._removeAll(Obj);
			} else if (args[1] === "checkCollisions") {
				const Obj = Scene.getObjectByName(args[2]);
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!Obj || !TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				script3d._setCollisionResult(Obj, TargetObj);
			} else if (args[1] === "resolveCollisions") {
				const Obj = Scene.getObjectByName(args[2]);
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!Obj || !TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				const Res = script3d._setCollisionResult(Obj, TargetObj);
				const Move3 = new THREE.Vector3(Res.MoveX, Res.MoveY, Res.MoveZ);
				const WP = new THREE.Vector3();
				Obj.getWorldPosition(WP);
				WP.add(Move3);
				Obj.position.copy(Obj.parent.worldToLocal(WP));
			} else if (args[1] === "resolveCollisionsWithMap") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				for (const v of _3D.get("MapModels").values()) {
					const Res = script3d._setCollisionResult(Obj, v);
					const Move3 = new THREE.Vector3(Res.MoveX, Res.MoveY, Res.MoveZ);
					const WP = new THREE.Vector3();
					Obj.getWorldPosition(WP);
					WP.add(Move3);
					Obj.position.copy(Obj.parent.worldToLocal(WP));
				}
			} else if (args[1] === "resolveCollisionsWithModelsList") {
				const ListName = args[2] || "No Name";
				const TargetListName = args[3] || "No Name";
				if (!_3D.get("ModelsList").has(ListName) || !_3D.get("ModelsList").has(TargetListName)) {
					console.warn("ModelsList not found. モデルズリストが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				const ML = _3D.get("ModelsList").get(ListName);
				const TML = _3D.get("ModelsList").get(TargetListName);
				for (const mn of ML) {
					for (const tmn of TML) {
						const Obj = Scene.getObjectByName(mn);
						const TargetObj = Scene.getObjectByName(tmn);
						// 存在チェックは割愛
						const Res = script3d._setCollisionResult(Obj, TargetObj);
						const Move3 = new THREE.Vector3(Res.MoveX, Res.MoveY, Res.MoveZ);
						const WP = new THREE.Vector3();
						Obj.getWorldPosition(WP);
						WP.add(Move3);
						Obj.position.copy(Obj.parent.worldToLocal(WP));
					}
				}
			} else if (args[1] === "attachModel") {
				const Obj = Scene.getObjectByName(args[2]);
				const TargetObj = Scene.getObjectByName(args[3]);
				if (!Obj || !TargetObj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2] + " / " + args[3]);
					return;
				}
				Obj.attach(TargetObj);
			} else if (args[1] === "attachCamera") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				if (Number(args[3]) >= Cameras.length) {
					console.warn("Camera not found. カメラが見つかりません。" + args[3]);
					return;
				}
				const Cam = Cameras[Number(args[3])];
				Obj.attach(Cam);
			} else if (args[1] === "detach") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				Scene.attach(Obj);
			} else if (args[1] === "setModelsList") {
				let L = [];
				const ListName = args[2] || "No Name";
				const ParentName = args[3] || Scene.name;
				const NameForward = args[4];
				const Deep = args[5] == "true";
				//
				const Parent = Scene.getObjectByName(ParentName);
				if (!Parent) {
					console.warn("Model not found. モデルが見つかりません。" + ParentName);
					return;
				}
				script3d._allChildren(L, Parent, NameForward, Deep);
				_3D.get("ModelsList").set(ListName, L);
				_3D.get("ModelsListSelected").set(ListName, 0);
			} else if (args[1] === "selectFirst") {
				const ListName = args[2] || "No Name";
				_3D.get("ModelsListSelected").set(ListName, 0);
			} else if (args[1] === "selectNext") {
				const ListName = args[2] || "No Name";
				let N = _3D.get("ModelsListSelected").get(ListName) || 0;
				_3D.get("ModelsListSelected").set(ListName, N + 1);
			} else if (args[1] === "selectedName") {
				const ListName = args[2] || "No Name";
				if (!_3D.get("ModelsList").has(ListName)) {
					console.warn("ModelsList not found. モデルズリストが見つかりません。" + args[2]);
					return;
				}
				$gameVariables.setValue(Number(args[3]), _3D.get("ModelsList").get(ListName)[_3D.get("ModelsListSelected").get(ListName)]);
			} else if (args[1] === "setModelVariable") {
				const Obj = Scene.getObjectByName(args[2]);
				if (!Obj) {
					console.warn("Model not found. モデルが見つかりません。" + args[2]);
					return;
				}
				const VN = args[3];
				const O = args[4];
				const V = args[5];
				if (!Obj.userData.ModelVariable) {
					Obj.userData.ModelVariable = new Map();
					Obj.userData.ModelVariable.set(VN, "");
				}
				if (O == "=") {
					Obj.userData.ModelVariable.set(VN, V);
				} else if (O == "+") {
					Obj.userData.ModelVariable.set(VN, (Number(Obj.userData.ModelVariable.get(VN)) + Number(V)));
				} else if (O == "-") {
					Obj.userData.ModelVariable.set(VN, (Number(Obj.userData.ModelVariable.get(VN)) - Number(V)));
				} else if (O == "*") {
					Obj.userData.ModelVariable.set(VN, (Number(Obj.userData.ModelVariable.get(VN)) * Number(V)));
				} else if (O == "/") {
					Obj.userData.ModelVariable.set(VN, (Number(Obj.userData.ModelVariable.get(VN)) / Number(V)));
				} else if (O == "%") {
					Obj.userData.ModelVariable.set(VN, (Number(Obj.userData.ModelVariable.get(VN)) % Number(V)));
				}
			}
		} else if (args[0] === "object") {
		}
	}
};

// スクリプトの追加
script3d.exist = function(Name) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	return Obj ? true : false;
};
script3d.notExist = function(Name) {
	return !script3d.exist(Name);
};
script3d.loaded = function(file) {
	const T = _3D.get("Textures").has(file) || _3D.get("Textures").has(file + ".png");
	const G = _3D.get("Models").has(file) || _3D.get("Models").has(file + ".glb");
	const F = _3D.get("Models").has(file) || _3D.get("Models").has(file + ".fbx");
	return T || G || F;
};
script3d.notLoaded = function(file) {
	return !script3d.loaded(file);
};
script3d.pointerLock = function() {
	return document.pointerLockElement ? true : false;
};
script3d.movementX = function() {
	return _3D.get("movementX");
};
script3d.movementY = function() {
	return _3D.get("movementY");
};
script3d.cameraPosition = function(Id, Axis) {
	const Cameras = _3D.get("Cameras");
	if (typeof Id != "number" || Id < 0 || Id >= Cameras.length) {
		console.warn("Camera not found. カメラが見つかりません。" + Id);
		return;
	}
	const Cam = Cameras[Id];
	if (Axis == "x") {
		return Cam.position.x;
	} else if (Axis == "y") {
		return Cam.position.y;
	} else {
		return Cam.position.z;
	}
};
script3d.cameraRotation = function(Id, Axis) {
	const Cameras = _3D.get("Cameras");
	if (typeof Id != "number" || Id < 0 || Id >= Cameras.length) {
		console.warn("Camera not found. カメラが見つかりません。" + Id);
		return;
	}
	const Cam = Cameras[Id];
	if (Axis == "x") {
		return THREE.MathUtils.radToDeg(Cam.rotation.x);
	} else if (Axis == "y") {
		return THREE.MathUtils.radToDeg(Cam.rotation.y);
	} else {
		return THREE.MathUtils.radToDeg(Cam.rotation.z);
	}
};
script3d.modelPosition = function(Name, Axis) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	if (!Obj) {
		console.warn("Model not found. モデルが見つかりません。" + Name);
		return;
	}
	if (Axis == "x") {
		return Obj.position.x;
	} else if (Axis == "y") {
		return Obj.position.y;
	} else {
		return Obj.position.z;
	}
};
script3d.modelRotation = function(Name, Axis) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	if (!Obj) {
		console.warn("Model not found. モデルが見つかりません。" + Name);
		return;
	}
	if (Axis == "x") {
		return THREE.MathUtils.radToDeg(Obj.rotation.x);
	} else if (Axis == "y") {
		return THREE.MathUtils.radToDeg(Obj.rotation.y);
	} else {
		return THREE.MathUtils.radToDeg(Obj.rotation.z);
	}
};
script3d.checkCollisions = function(Name, Target) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	const TargetObj = Scene.getObjectByName(Target);
	if (!Obj || !TargetObj) {
		console.warn("Model not found. モデルが見つかりません。" + Name + " / " + Target);
		return;
	}
	script3d._setCollisionResult(Obj, TargetObj);
	return script3d.collisionResult("Hit")
};
script3d.collisionResult = function(ResultType) {
	const rt = ResultType.toLowerCase();
	const CollisionResult = _3D.get("CollisionResult");
	if (rt == "hit") {
		return CollisionResult.Hit;
	} else if (rt == "centerx") {
		return CollisionResult.CenterX;
	} else if (rt == "centery") {
		return CollisionResult.CenterY;
	} else if (rt == "centerz") {
		return CollisionResult.CenterZ;
	} else if (rt == "sizex") {
		return CollisionResult.SizeX;
	} else if (rt == "sizey") {
		return CollisionResult.SizeY;
	} else if (rt == "sizez") {
		return CollisionResult.SizeZ;
	} else if (rt == "movex") {
		return CollisionResult.MoveX;
	} else if (rt == "movey") {
		return CollisionResult.MoveY;
	} else if (rt == "movez") {
		return CollisionResult.MoveZ;
	} else if (rt == "landed") {
		return CollisionResult.MoveY > 0;
	}
	return 0;
};
script3d.parentName = function(Name) {
	let Obj;
	if (typeof Name == "number") {
		const Cameras = _3D.get("Cameras");
		if (Name < 0 || Name >= Cameras.length) {
			console.warn("Camera not found. カメラが見つかりません。" + Name);
			return;
		}
		Obj = Cameras[Name];
	} else {
		const Scene = _3D.get("Scene");
		Obj = Scene.getObjectByName(Name);
		if (!Obj) {
			console.warn("Model not found. モデルが見つかりません。" + Name);
			return;
		}
	}
	return Obj.parent.name;
};
script3d.modelsList = function(List, Idx) {
	return _3D.get("ModelsList").get(List || "No Name")[Number(Idx)];
};
script3d.modelsListLength = function(List) {
	return _3D.get("ModelsList").get(List || "No Name").length;
};
script3d.modelsListSelected = function(List) {
	const L = List || "No Name";
	if (_3D.get("ModelsListSelected").get(L) < _3D.get("ModelsList").get(L).length) {
		return _3D.get("ModelsList").get(L)[_3D.get("ModelsListSelected").get(L)];
	} else {
		return "";
	}
};
script3d.modelsListReachedEnd = function(List) {
	return _3D.get("ModelsListSelected").get(List || "No Name") >= _3D.get("ModelsList").get(List || "No Name").length;
};
script3d.modelVariable = function(Name, VName) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	let T = "";
	if (Obj) {
		if (Obj.userData.ModelVariable) {
			if (Obj.userData.ModelVariable.has(VName)) {
				T = Obj.userData.ModelVariable.get(VName);
			}
		}
	}
	return T;
};

// 関数
script3d._getTileData = function(MapX, MapY) {
	let TileId = 0;
	// タイルが配置されている一番上のレイヤーにあるタイルのIDを取得
	// for (const V of $gameMap.allTiles(MapX, MapY)) {
	for (const V of $gameMap.layeredTiles(MapX, MapY)) {
		if (V != 0) {
			TileId = V;
			break;
		}
	}
	const D = script3d._getTileDataById(TileId);
	D.push($gameMap.regionId(MapX, MapY))
	return D;
};
script3d._getTileDataById = function(TileId) {
	const TilesetId = $gameMap.tilesetId();
	const TilesetNames = $dataTilesets[TilesetId].tilesetNames;
	let TilesetIndex = 0;
	// IDからタイルの種類とローカルなIDを取得
	if (Tilemap.isTileA1(TileId)) {
		TileId -= Tilemap.TILE_ID_A1;
		TilesetIndex = 0;
	} else if (Tilemap.isTileA2(TileId)) {
		TileId -= Tilemap.TILE_ID_A2;
		TilesetIndex = 1;
	} else if (Tilemap.isTileA3(TileId)) {
		TileId -= Tilemap.TILE_ID_A3;
		TilesetIndex = 2;
	} else if (Tilemap.isTileA4(TileId)) {
		TileId -= Tilemap.TILE_ID_A4;
		TilesetIndex = 3;
	} else if (Tilemap.isTileA5(TileId)) {
		TileId -= Tilemap.TILE_ID_A5;
		TilesetIndex = 4;
	} else if (TileId >= Tilemap.TILE_ID_B && TileId < Tilemap.TILE_ID_C) {
		TilesetIndex = 5;
	} else if (TileId >= Tilemap.TILE_ID_C && TileId < Tilemap.TILE_ID_D) {
		TileId -= Tilemap.TILE_ID_C;
		TilesetIndex = 6;
	} else if (TileId >= Tilemap.TILE_ID_D && TileId < Tilemap.TILE_ID_E) {
		TileId -= Tilemap.TILE_ID_D;
		TilesetIndex = 7;
	} else if (TileId >= Tilemap.TILE_ID_E) {
		TileId -= Tilemap.TILE_ID_E;
		TilesetIndex = 8;
	}
	const X = ((Math.floor(TileId / 128) % 2) * 8 + (TileId % 8)) * $gameMap.tileWidth();
	const Y = (Math.floor((TileId % 256) / 8) % 16) * $gameMap.tileHeight();
	return ["img/tilesets/" + TilesetNames[TilesetIndex] + ".png", X, Y];
};

script3d._converter = function(EscapeCharacter) {
	// 制御文字処理
	return Window_Base.prototype.convertEscapeCharacters(EscapeCharacter);
};

script3d._arrayParser = function(arr) {
	// 配列解析(MZ)からの制御文字処理
	let params = arr;
	if (typeof arr == "string") {
		params = JSON.parse(arr);
	}
	for (let i = 0; i < params.length; ++i) {
		params[i] = script3d._converter(params[i]);
	}
	return params;
};

script3d._structureParser = function(structure) {
	// MZ用構造体解析からの制御文字処理
	const params = JSON.parse(structure);
	for (const k of Object.keys(params)) {
		params[k] = script3d._converter(params[k]);
	}
	return params;
};

script3d._removeAll = function(Obj) {
	// 全て削除
	//
	// マテリアル削除
	if (Obj.material){
		if (Array.isArray(Obj.material)) {
			for (const v of Obj.material) {
				//テクスチャ削除
				if (v.map) {
					v.map.dispose();
				}
				v.dispose();
			}
		} else {
			//テクスチャ削除
			if (Obj.material.map) {
				Obj.material.map.dispose();
			}
			Obj.material.dispose();
		}
	}
	// ジオメトリ削除
	if (Obj.geometry){
		Obj.geometry.dispose();
	}
	// アニメーション削除
	const Mixer = _3D.get("Mixer");
	for (const v of Obj.animations) {
		const exAct = Mixer.existingAction(v, Obj);
		if (exAct) {
			exAct.stop();
			const Clip = exAct.getClip();
			Mixer.uncacheClip(Clip);
			Mixer.uncacheRoot(Obj);
			Mixer.uncacheAction(Clip, Obj);
		}
	}
	// ライト初期化または削除
	if (Obj.isLight) {
		Obj.color.set(0xffffff);
		Obj.intensity = 1.0;
		if (Obj.isAmbientLight) {
			_3D.get("Scene").add(Obj);
		} else if (Obj.isDirectionalLight) {
			_3D.get("Scene").add(Obj);
		} else {
			Obj.dispose();
		}
	}
	// カメラ初期化
	if (Obj.isCamera) {
		_3D.get("Scene").add(Obj);
		Obj.fov = 50;
		Obj.position.set(0, 0, 0);
		Obj.rotation.set(0, 0, 0);
	}
	// 背景（シーンのみ）初期化
	if (Obj.background) {
		if (Obj.background.isTexture) {
			Obj.background.dispose();
		}
		Obj.background = new THREE.Color("rgb(0, 128, 255)");
	}
	// 子へ
	for (let i = Obj.children.length - 1; i >= 0; --i) {
		script3d._removeAll(Obj.children[i]);
	}
	// 親から離脱（シーンとカメラと特定ライト以外）
	if (!Obj.isScene && !Obj.isCamera && !Obj.isAmbientLight && !Obj.isDirectionalLight) {
		Obj.removeFromParent();
	}
};

script3d._patternWidth = function(isB, T) {
    if (isB) {
        return T.image.width / 3;
    } else {
        return T.image.width / 12;
    }
};

script3d._patternHeight = function(isB, T) {
    if (isB) {
        return T.image.height / 4;
    } else {
        return T.image.height / 8;
    }
};

script3d._characterBlockX = function(isB, idx) {
    if (isB) {
        return 0;
    } else {
        return (idx % 4) * 3;
    }
};

script3d._characterBlockY = function(isB, idx) {
    if (isB) {
        return 0;
    } else {
        return Math.floor(idx / 4) * 4;
    }
};

script3d._characterPatternY = function(d) {
    return (d - 2) / 2;
};

script3d._setCollisionResult = function(Obj1, Obj2) {
	const CollisionResult = _3D.get("CollisionResult");
	CollisionResult.Hit = false;
	CollisionResult.CenterX = 0;
	CollisionResult.CenterY = 0;
	CollisionResult.CenterZ = 0;
	CollisionResult.SizeX = 0;
	CollisionResult.SizeY = 0;
	CollisionResult.SizeZ = 0;
	CollisionResult.MoveX = 0;
	CollisionResult.MoveY = 0;
	CollisionResult.MoveZ = 0;
	// geometryを持たない場合を回避。
	const Geo1 = Obj1.geometry;
	const Geo2 = Obj2.geometry;
	if (!Geo1 || !Geo2) {
		console.warn("Bounding box not found. バウンディングボックスが見つかりません。" + Obj1.name + " / " + Obj2.name);
		return CollisionResult;
	}
	//
	const Box1 = new THREE.Box3();
	const Box2 = new THREE.Box3();
	// Obj1.updateMatrixWorld(true);//必要
	// Obj2.updateMatrixWorld(true);//必要
	Obj1.updateWorldMatrix(true, false);//必要？
	Obj2.updateWorldMatrix(true, false);//必要？
	// 回転を考慮するバージョン
	/*
	Box1.copy(Geo1.boundingBox).applyMatrix4(Obj1.matrixWorld);
	Box2.copy(Geo2.boundingBox).applyMatrix4(Obj2.matrixWorld);
	*/
	// 回転を考慮しないバージョン
	const Obj1M = new THREE.Matrix4(); 
	const Obj2M = new THREE.Matrix4(); 
	const Obj1WP = new THREE.Vector3();
	const Obj2WP = new THREE.Vector3();
	const Obj1WS = new THREE.Vector3();
	const Obj2WS = new THREE.Vector3();
	const Quaternion0 = new THREE.Quaternion();
	Obj1.getWorldPosition(Obj1WP);
	Obj2.getWorldPosition(Obj2WP);
	Obj1.getWorldScale(Obj1WS);
	Obj2.getWorldScale(Obj2WS);
	Obj1M.compose(Obj1WP, Quaternion0, Obj1WS);
	Obj2M.compose(Obj2WP, Quaternion0, Obj2WS);
	Box1.copy(Geo1.boundingBox).applyMatrix4(Obj1M);
	Box2.copy(Geo2.boundingBox).applyMatrix4(Obj2M);
	//
	const HitBox = Box1.clone();
	HitBox.intersect(Box2);
	if (HitBox.isEmpty()) {
		return CollisionResult;
	}
	//
	const Box1Center = new THREE.Vector3();
	const Box2Center = new THREE.Vector3();
	const HitCenter = new THREE.Vector3();
	const HitSize = new THREE.Vector3();
	Box1.getCenter(Box1Center);
	Box2.getCenter(Box2Center);
	HitBox.getCenter(HitCenter);
	HitBox.getSize(HitSize);
	//
	let MoveValue = {x:0, y:0, z:0};
	if (HitSize.x <= HitSize.y && HitSize.x <= HitSize.z) {
		if (Box1Center.x > Box2Center.x) {
			MoveValue.x = HitSize.x;
		} else {
			MoveValue.x = HitSize.x * -1;
		}
	} else if (HitSize.y <= HitSize.x && HitSize.y <= HitSize.z) {
		if (Box1Center.y > Box2Center.y) {
			MoveValue.y = HitSize.y;
		} else {
			MoveValue.y = HitSize.y * -1;
		}
	} else if (HitSize.z <= HitSize.x && HitSize.z <= HitSize.y) {
		if (Box1Center.z > Box2Center.z) {
			MoveValue.z = HitSize.z;
		} else {
			MoveValue.z = HitSize.z * -1;
		}
	}
	//
	CollisionResult.Hit = true;
	CollisionResult.CenterX = HitCenter.x;
	CollisionResult.CenterY = HitCenter.y;
	CollisionResult.CenterZ = HitCenter.z;
	CollisionResult.SizeX = HitSize.x;
	CollisionResult.SizeY = HitSize.y;
	CollisionResult.SizeZ = HitSize.z;
	CollisionResult.MoveX = MoveValue.x;
	CollisionResult.MoveY = MoveValue.y;
	CollisionResult.MoveZ = MoveValue.z;
	return CollisionResult;
};

script3d._allChildren = function(List, Obj, NameForward, Deep) {
	if (NameForward != "") {
		for (const V of Obj.children) {
			if (V.name.startsWith(NameForward)) {
				List.push(V.name);
			}
			if (Deep) {
				script3d._allChildren(List, V, NameForward, Deep);
			}
		}
	} else {
		for (const V of Obj.children) {
			List.push(V.name);
			if (Deep) {
				script3d._allChildren(List, V, NameForward, Deep);
			}
		}
	}
};

(() => {
	// THREE import 後
	//
	// プラグインパラメータ
	const pluginParams = PluginManager.parameters("PNDK_3D");
	if (pluginParams.Antialiasing == "true") {
		_3D.set("TextureMagFilter", THREE.LinearFilter);
		_3D.set("TextureMinFilter", THREE.LinearMipmapLinearFilter);
	} else {
		_3D.set("TextureMagFilter", THREE.NearestFilter);
		_3D.set("TextureMinFilter", THREE.NearestMipmapNearestFilter);
	}
	//
	// 制御文字追加
	const _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
	Window_Base.prototype.convertEscapeCharacters = function(text) {
		text = _Window_Base_convertEscapeCharacters.apply(this, [text]);
		const Scene = _3D.get("Scene");
		text = text.replace(/\x1bM\[(.+?),(.+?)\]/gi, (_, p1, p2) => {
			const Obj = Scene.getObjectByName(p1);
			let T = "";
			if (Obj) {
				if (Obj.userData.ModelVariable) {
					if (Obj.userData.ModelVariable.has(p2)) {
						T = Obj.userData.ModelVariable.get(p2);
					}
				}
			}
			return T;
		});
		return text;
	};
	//
	// ロード済み画像からテクスチャ素材を作成
	const _Bitmap_onLoad = Bitmap.prototype._onLoad;
	Bitmap.prototype._onLoad = function() {
		_Bitmap_onLoad.apply(this);
		if (_3D.has("Renderer")) {
			if (!_3D.get("Textures").has(this._url) && this._image) {
				if (this._url.startsWith("img/animations/") ||
				this._url.startsWith("img/enemies/") ||
				this._url.startsWith("img/characters/") ||
				this._url.startsWith("img/faces/") ||
				this._url.startsWith("img/parallaxes/") ||
				this._url.startsWith("img/pictures/") ||
				this._url.startsWith("img/sv_actors/") ||
				this._url.startsWith("img/sv_enemies/") ||
				this._url.startsWith("img/tilesets/")) {
					const Texture = new THREE.Texture();
					Texture.image = this._image;
					Texture.needsUpdate = true;
					Texture.colorSpace = _3D.get("ColorSpace");
					Texture.wrapS = THREE.RepeatWrapping;
					Texture.wrapT = THREE.RepeatWrapping;
					Texture.magFilter = _3D.get("TextureMagFilter");
					Texture.minFilter = _3D.get("TextureMinFilter");
					//_3D.get("Renderer").initTexture(Texture);//効果なし
					const deUrl = decodeURIComponent(this._url);
					_3D.get("Textures").set(deUrl, Texture);
					console.log("Loaded", deUrl);
				}
			}
		}
	};
	//
	// タイトル3D対応
	const _Scene_Title_create = Scene_Title.prototype.create;
	Scene_Title.prototype.create = function() {
		_Scene_Title_create.apply(this);
		const Scene = _3D.get("Scene");
		const TitleObj = Scene.getObjectByName("_Title");
		script3d._pluginCommand("3d", ["camera", "fov", 0, pluginParams.CameraFov]);
		this._3d_initialized = true;
		if (!TitleObj) {
			_3D.set("MapId", 0);
			script3d._pluginCommand("3d", ["scene", "clear"]);
			const TitleModelFile = pluginParams.TitleModelFile.toLowerCase();
			if (TitleModelFile.endsWith(".glb") || TitleModelFile.endsWith(".fbx")) {
				script3d._pluginCommand("3d", ["model", "load", pluginParams.TitleModelFile, "_Title"]);
				this._3d_initialized = false;
				//console.log("Create Title Model");
			}
		}
		//console.log("Scene_Title.prototype.create");
	};
	const _Scene_Title_update = Scene_Title.prototype.update;
	Scene_Title.prototype.update = function() {
		_Scene_Title_update.apply(this);
		if (!this._3d_initialized) {
			const Scene = _3D.get("Scene");
			const TitleObj = Scene.getObjectByName("_Title");
			if (TitleObj) {
				const TitleModelScale = Number(pluginParams.TitleModelScale);
				const TitleModelAnimationIndex = Number(pluginParams.TitleModelAnimationIndex);
				const TitleModelAnimationLoop = pluginParams.TitleModelAnimationLoop;
				const CameraParentModelName = pluginParams.CameraParentModelName;
				script3d._pluginCommand("3d", ["model", "scale", "_Title", TitleModelScale, TitleModelScale, TitleModelScale]);
				if (TitleObj.animations.length > 0) {
					script3d._pluginCommand("3d", ["model", "animation", "_Title", "play", TitleModelAnimationIndex, TitleModelAnimationLoop]);
				}
				if (CameraParentModelName !== "") {
					const TargetObj = Scene.getObjectByName(CameraParentModelName);
					if (TargetObj) {
						const Cameras = _3D.get("Cameras");
						TargetObj.add(Cameras[0]);
					}
				}
				this._3d_initialized = true;
			}
		}
	};
	//
	// マップ自動3D化
	const _Scene_Map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		_Scene_Map_start.apply(this);
		if (_3D.get("MapId") !== $gameMap.mapId()) {
			script3d._pluginCommand("3d", ["scene", "clear"]);
			console.log("_Scene_Map_start", $gameMap.mapId());
		}
	};
	const _Game_Map_update = Game_Map.prototype.update;
	Game_Map.prototype.update = function(sceneActive) {
		_Game_Map_update.apply(this, [sceneActive]);
		if (_3D.get("MapId") !== this.mapId()) {
			_3D.set("MapId", this.mapId());
			// console.log("_Game_Map_update : FirstFrame : " + this.mapId());
			const Scene = _3D.get("Scene");
			const Textures = _3D.get("Textures");
			const MapModels = _3D.get("MapModels");
			for (let MY = 0; MY < this.height(); MY++) {
				for (let MX = 0; MX < this.width(); MX++) {
					const TDat = script3d._getTileData(MX, MY);
					const xH = TDat[3];
					if (xH != 0) {
						// 既存テクスチャクローンは画像単位での処理にとどまるが、既存テクスチャのinitTextureの効果がない（クローンごとに実行すれば効果はあるが負荷が高い）
						const T = Textures.get(TDat[0]).clone();
						const TileW = this.tileWidth();
						const TileH = this.tileHeight();
						const TileD = this.tileHeight();
						const TileHalfW = TileW / 2;
						const TileHalfH = TileH / 2;
						const TileHalfD = TileD / 2;
						const ImgW = T.image.width;
						const ImgH = T.image.height;
						const XPos = TDat[1];
						const YPos = TDat[2];
						T.offset = new THREE.Vector2(XPos / ImgW, 1 - ((YPos + TileD) / ImgH));
						T.repeat = new THREE.Vector2(TileW / ImgW, TileD / ImgH);
						const Geometry = new THREE.BoxGeometry(TileW, TileH, TileD);
						Geometry.computeBoundingBox();
						const Material = new THREE.MeshStandardMaterial({map:T});
						Material.alphaTest = 0.5;
						Material.transparent = true;
						// Material.needsUpdate = true;
						const Obj = new THREE.Mesh(Geometry, Material);
						Obj.name = "_Tile_" + MX + "_" + MY + "_1";
						Obj.position.set(TileHalfW + (MX * TileW), -TileHalfH, TileHalfD + (MY * TileD));
						Scene.add(Obj);
						MapModels.set(Obj.name, Obj);
						//
						for (let n = 1; n < xH; n++) {
							const ObjH = Obj.clone();
							ObjH.name = "_Tile_" + MX + "_" + MY + "_" + (n + 1);
							ObjH.position.y = -TileHalfH + (TileH * n);
							Scene.add(ObjH);
							MapModels.set(ObjH.name, ObjH);
						}
					}
				}
			}
			//背景
			if (this.parallaxName() !== "") {
				script3d._pluginCommand("3d", ["scene", "background", "img/parallaxes/" + this.parallaxName() + ".png"]);
			}
		}
	};
	//
	// プレイヤー自動3D化
	/*
	const _Game_Player_initialize = Game_Player.prototype.initialize;
	Game_Player.prototype.initialize = function() {
		_Game_Player_initialize.apply(this);
		console.log("_Game_Player_initialize");
	};
	*/
	const _Game_Player_update = Game_Player.prototype.update;
	Game_Player.prototype.update = function(sceneActive) {
		_Game_Player_update.apply(this, [sceneActive]);
		const Scene = _3D.get("Scene");
		const Textures = _3D.get("Textures");
		const MapX = this._realX;
		const MapY = this._realY;
		const TileW = $gameMap.tileWidth();
		const TileH = $gameMap.tileHeight();
		const TileHalfW = TileW / 2;
		const TileHalfH = TileH / 2;
		const FileName = this.characterName();
		const MapModels = _3D.get("MapModels");
		let Obj = MapModels.get("_Player");
		let T = Obj ? Obj.material.map : null;
		//
		if (FileName === "") {
			// 既存削除
			if (Obj) {
				MapModels.delete(Obj.name);
				script3d._removeAll(Obj);
			}
			return;
		}
		//
		if (this.isTile()) {
			// タイル画像はありえないはず
		} else {
			// キャラ画像			
			const CharacterIndex = this.characterIndex();
			const isObjectCharacter = this.isObjectCharacter();
			const Pattern = this.pattern();
			const Direction = this.direction();
			const FilePath = "img/characters/" + FileName + ".png";
			const isBigCharacter = ImageManager.isBigCharacter(FileName);
			if (T) {
				if (!T.source.data.src.endsWith(encodeURIComponent(FileName + ".png"))) {
					if (Textures.has(FilePath)) {
						// 画像変更
						const OldT = T;
						T = Textures.get(FilePath).clone();
						Obj.material.map = T;
						OldT.dispose();
					}
				}
			} else {
				T = Textures.get(FilePath).clone();
			}
			const ImgW = T.image.width;
			const ImgH = T.image.height;
			const W = script3d._patternWidth(isBigCharacter, T);
			const H = script3d._patternHeight(isBigCharacter, T);
			const HalfH = H / 2;
			const CharacterBlockX = script3d._characterBlockX(isBigCharacter, CharacterIndex);
			const CharacterBlockY = script3d._characterBlockY(isBigCharacter, CharacterIndex);
			const CharacterPatternX = Pattern;
			const CharacterPatternY = script3d._characterPatternY(Direction);
			const XPos = (CharacterBlockX + CharacterPatternX) * W;
			const YPos = (CharacterBlockY + CharacterPatternY) * H;
			T.offset = new THREE.Vector2(XPos / ImgW, 1 - ((YPos + H) / ImgH));
			T.repeat = new THREE.Vector2(W / ImgW, H / ImgH);
			if (Obj) {
				if (!Obj.parent) {
					Scene.add(Obj);
				}
			} else {
				const MapModels = _3D.get("MapModels");
				const Geometry = new THREE.PlaneGeometry(W, H);
				Geometry.computeBoundingBox();
				Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, TileHalfH));
				const Material = new THREE.MeshStandardMaterial({map:T});
				Material.alphaTest = 0.5;
				Material.transparent = true;
				Material.side = THREE.DoubleSide;
				Obj = new THREE.Mesh(Geometry, Material);
				Obj.name = "_Player";
				Scene.add(Obj);
				MapModels.set(Obj.name, Obj);
			}
			Obj.position.set(TileHalfW + (MapX * TileW), HalfH, TileHalfH + (MapY * TileH));
		}
		// 簡単カメラ
		const Cam = _3D.get("Cameras")[0];
		const M = _3D.get("EasyCamera").Mode;
		if (M === 0) {
			// OFF
		} else if (M === 1) {
			Scene.add(Cam);
			Cam.position.copy(Obj.position);
			Cam.translateY(_3D.get("EasyCamera").Offset);
			const TQ = new THREE.Quaternion();
			if (this.direction() == 2) {
				TQ.setFromEuler(new THREE.Euler( 0, THREE.MathUtils.degToRad(180), 0));
			} else if (this.direction() == 4) {
				TQ.setFromEuler(new THREE.Euler( 0, THREE.MathUtils.degToRad(90), 0));
			} else if (this.direction() == 6) {
				TQ.setFromEuler(new THREE.Euler( 0, THREE.MathUtils.degToRad(-90), 0));
			} else if (this.direction() == 8) {
				TQ.setFromEuler(new THREE.Euler( 0, 0, 0));
			}
			Cam.quaternion.slerp(TQ, 0.4);
		} else if (M === 2) {
			//Scene.add(Cam);
			Cam.position.copy(Obj.position);
			Cam.rotation.set(THREE.MathUtils.degToRad(-45), 0, 0);
			Cam.translateZ(_3D.get("EasyCamera").Offset);
		}
		// 簡単カメラによる自動回転
		if (_3D.get("EasyCamera").Mode == 2 && _3D.get("EasyCamera").Rotation){
			Obj.rotation.set(THREE.MathUtils.degToRad(-45), 0, 0);
		}
	};
	//
	// イベント自動3D化
	/*
	const _Game_Event_initialize = Game_Event.prototype.initialize;
	Game_Event.prototype.initialize = function(mapId, eventId) {
		_Game_Event_initialize.apply(this, [mapId, eventId]);
		console.log("_Game_Event_initialize");
	};
	*/
	const _Game_Event_update = Game_Event.prototype.update;
	Game_Event.prototype.update = function() {
		_Game_Event_update.apply(this);
		const Scene = _3D.get("Scene");
		const Textures = _3D.get("Textures");
		const MapX = this._realX;
		const MapY = this._realY;
		const TileW = $gameMap.tileWidth();
		const TileH = $gameMap.tileHeight();
		const TileHalfW = TileW / 2;
		const TileHalfH = TileH / 2;
		const TileId = this.tileId();
		const FileName = this.characterName();
		//this._3d_through = this.isThrough();
		const MapModels = _3D.get("MapModels");
		let Obj = MapModels.get("_Event" + this.eventId());
		let T = Obj ? Obj.material.map : null;
		//
		if (TileId === 0 && FileName === "") {
			// 既存削除
			if (Obj) {
				MapModels.delete(Obj.name);
				script3d._removeAll(Obj);
			}
			return;
		}
		//
		if (this.isTile()) {
			// タイル画像の場合
			const TDat = script3d._getTileDataById(TileId);
			const FilePath = TDat[0];
			if (T) {
				if (!T.source.data.src.endsWith(FilePath)) {
					if (Textures.has(FilePath)) {
						// 画像変更
						const OldT = T;
						T = Textures.get(FilePath).clone();
						Obj.material.map = T;
						OldT.dispose();
					}
				}
			} else {
				T = Textures.get(FilePath).clone();
			}
			const ImgW = T.image.width;
			const ImgH = T.image.height;
			const XPos = TDat[1];
			const YPos = TDat[2];
			T.offset = new THREE.Vector2(XPos / ImgW, 1 - ((YPos + TileH) / ImgH));
			T.repeat = new THREE.Vector2(TileW / ImgW, TileH / ImgH);
			if (!Obj) {
				const MapModels = _3D.get("MapModels");
				const Geometry = new THREE.PlaneGeometry(TileW, TileH);
				Geometry.computeBoundingBox();
				Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, TileHalfH));
				const Material = new THREE.MeshStandardMaterial({map:T});
				Material.alphaTest = 0.5;
				Material.transparent = true;
				Material.side = THREE.DoubleSide;
				Obj = new THREE.Mesh(Geometry, Material);
				Obj.name = "_Event" + this.eventId();
				Scene.add(Obj);
				MapModels.set(Obj.name, Obj);
			}
			Obj.position.set(TileHalfW + (MapX * TileW), TileHalfH, TileHalfH + (MapY * TileH));
		} else {
			// キャラ画像			
			const CharacterIndex = this.characterIndex();
			const isObjectCharacter = this.isObjectCharacter();
			const Pattern = this.pattern();//なにこれ？現在のフレームの画像番号？
			const Direction = this.direction();
			const FilePath = "img/characters/" + FileName + ".png";
			const isBigCharacter = ImageManager.isBigCharacter(FileName);
			if (T) {
				if (!T.source.data.src.endsWith(encodeURIComponent(FileName + ".png"))) {
					if (Textures.has(FilePath)) {
						// 画像変更
						const OldT = T;
						T = Textures.get(FilePath).clone();
						Obj.material.map = T;
						OldT.dispose();
					}
				}
			} else {
				T = Textures.get(FilePath).clone();
			}
			const ImgW = T.image.width;
			const ImgH = T.image.height;
			const W = script3d._patternWidth(isBigCharacter, T);
			const H = script3d._patternHeight(isBigCharacter, T);
			const HalfH = H / 2;
			const CharacterBlockX = script3d._characterBlockX(isBigCharacter, CharacterIndex);
			const CharacterBlockY = script3d._characterBlockY(isBigCharacter, CharacterIndex);
			const CharacterPatternX = Pattern;
			const CharacterPatternY = script3d._characterPatternY(Direction);
			const XPos = (CharacterBlockX + CharacterPatternX) * W;
			const YPos = (CharacterBlockY + CharacterPatternY) * H;
			T.offset = new THREE.Vector2(XPos / ImgW, 1 - ((YPos + H) / ImgH));
			T.repeat = new THREE.Vector2(W / ImgW, H / ImgH);
			if (!Obj) {
				const MapModels = _3D.get("MapModels");
				const Geometry = new THREE.PlaneGeometry(W, H);
				Geometry.computeBoundingBox();
				Geometry.boundingBox.expandByVector(new THREE.Vector3(0, 0, TileHalfH));
				const Material = new THREE.MeshStandardMaterial({map:T});
				Material.alphaTest = 0.5;
				Material.transparent = true;
				Material.side = THREE.DoubleSide;
				Obj = new THREE.Mesh(Geometry, Material);
				Obj.name = "_Event" + this.eventId();
				Scene.add(Obj);
				MapModels.set(Obj.name, Obj);
			}
			Obj.position.set(TileHalfW + (MapX * TileW), HalfH, TileHalfH + (MapY * TileH));
		}
		// 簡単カメラによる自動回転
		if (_3D.get("EasyCamera").Mode == 1 && _3D.get("EasyCamera").Rotation){
			Obj.rotation.copy(_3D.get("Cameras")[0].rotation);
		}
		if (_3D.get("EasyCamera").Mode == 2 && _3D.get("EasyCamera").Rotation){
			Obj.rotation.set(THREE.MathUtils.degToRad(-45), 0, 0);
		}
	};
	//
	// バトル
	const _Game_Enemy_setup = Game_Enemy.prototype.setup;
	Game_Enemy.prototype.setup = function(enemyId, x, y) {
		_Game_Enemy_setup.apply(this, [enemyId, x, y]);
		//
		//console.log("_Game_Enemy_setup", this, this.name(), this.enemy(), this.index());
		this._3d_obj = null;
		this._3d_name = "";
		this._3d_idle = Number(this.enemy().meta["3d_idle"]) || 0;
		this._3d_attack = Number(this.enemy().meta["3d_attack"]) || 0;
		this._3d_damage = Number(this.enemy().meta["3d_damage"]) || 0;
		this._3d_death = Number(this.enemy().meta["3d_death"]) || 0;
	};
	
	const _Game_Troop_setup = Game_Troop.prototype.setup;
	Game_Troop.prototype.setup = function(troopId) {
		_Game_Troop_setup.apply(this, [troopId]);
		//
		//console.log("_Game_Troop_setup", this);
		const Scene = _3D.get("Scene");
		for (const enemy of this.members()) {
			console.log("enemy", enemy, enemy.name(), enemy.enemy(), enemy.index());
			enemy._3d_name = "_Enemy" + enemy.index();
			enemy._3d_obj = Scene.getObjectByName(enemy._3d_name);
		}
	};
	
	const _Game_Enemy_performActionStart = Game_Enemy.prototype.performActionStart;
	Game_Enemy.prototype.performActionStart = function(action) {
		_Game_Enemy_performActionStart.apply(this, [action]);
		//
		//console.log("_Game_Enemy_performActionStart");
		if (this._3d_obj) {
			script3d._pluginCommand("3d", ["model", "animation", this._3d_name, "play", this._3d_attack, "once"]);
		}
	};
	
	const _Game_Enemy_performAction = Game_Enemy.prototype.performAction;
	Game_Enemy.prototype.performAction = function(action) {
		_Game_Enemy_performAction.apply(this, [action]);
		//
		//console.log("_Game_Enemy_performAction", this);
	};

	const _Game_Enemy_performActionEnd = Game_Enemy.prototype.performActionEnd;
	Game_Enemy.prototype.performActionEnd = function() {
		_Game_Enemy_performActionEnd.apply(this);
		//
		//console.log("_Game_Enemy_performActionEnd", this);
	};

	const _Game_Enemy_performDamage = Game_Enemy.prototype.performDamage;
	Game_Enemy.prototype.performDamage = function() {
		_Game_Enemy_performDamage.apply(this);
		//
		//console.log("_Game_Enemy_performDamage", this);
		if (this._3d_obj) {
			script3d._pluginCommand("3d", ["model", "animation", this._3d_name, "play", this._3d_damage, "once"]);
		}
	};
	
	const _Game_Enemy_performCollapse = Game_Enemy.prototype.performCollapse;
	Game_Enemy.prototype.performCollapse = function() {
		_Game_Enemy_performCollapse.apply(this);
		//
		//console.log("_Game_Enemy_performCollapse", this);
		if (this._3d_obj) {
			script3d._pluginCommand("3d", ["model", "animation", this._3d_name, "play", this._3d_death, "once"]);
		}
	};

})();

// 開発用
script3d._axesHelper = function(Name, Length) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	const AxesHelper = new THREE.AxesHelper(Length);
	Obj.add(AxesHelper);
};

script3d._box3Helper = function(Name) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	Obj.updateWorldMatrix(true, false);//必要
	const Box = new THREE.Box3();
	Box.copy(Obj.geometry.boundingBox).applyMatrix4(Obj.matrixWorld);
	const Box3Helper = new THREE.Box3Helper(Box, 0xffff00);
	Scene.add(Box3Helper);
};

script3d._model = function(Name) {
	const Scene = _3D.get("Scene");
	const Obj = Scene.getObjectByName(Name);
	return Obj;
};
script3d._camera = function(Num) {
	const Cameras = _3D.get("Cameras");
	const Cam = Cameras[Num];
	return Cam;
};

