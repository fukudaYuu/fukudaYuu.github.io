/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
//22fi096　福田結有


class ThreeJSContainer {
    scene;
    light;
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする
        //カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        //机
        let drawDesk1 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.2, 2.7);
            shape.lineTo(3.2, 2.8);
            shape.lineTo(10, 2.8);
            shape.lineTo(10, 2.7);
            return shape;
        };
        let deskExtrudeSettings1 = {
            steps: 2,
            depth: 4,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk1(), deskExtrudeSettings1);
        deskGeometry1.translate(0, 0, 5);
        let deskMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 250, 250)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let deskGroup1 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskGroup1.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry1, deskMaterial));
        this.scene.add(deskGroup1);
        //机右
        let drawDesk2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(10, 0);
            shape.lineTo(10, 5.5);
            shape.lineTo(9.9, 5.5);
            shape.lineTo(9.9, 0);
            return shape;
        };
        let deskExtrudeSettings2 = {
            steps: 2,
            depth: 4,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk2(), deskExtrudeSettings2);
        deskGeometry2.translate(0, 0, 5);
        let deskGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry2, deskMaterial));
        this.scene.add(deskGroup2);
        //机左１
        let drawDesk3 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.2, 0);
            shape.lineTo(3.2, 5.5);
            shape.lineTo(3.3, 5.5);
            shape.lineTo(3.3, 0);
            return shape;
        };
        let deskExtrudeSettings3 = {
            steps: 2,
            depth: 2,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk3(), deskExtrudeSettings3);
        deskGeometry3.translate(0, 0, 7);
        let deskGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskGroup3.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry3, deskMaterial));
        this.scene.add(deskGroup3);
        //机左２
        let drawDesk4 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.2, 0);
            shape.lineTo(3.2, 2.8);
            shape.lineTo(3.3, 2.8);
            shape.lineTo(3.3, 0);
            return shape;
        };
        let deskExtrudeSettings4 = {
            steps: 2,
            depth: 4,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry4 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk4(), deskExtrudeSettings4);
        deskGeometry4.translate(0, 0, 5);
        let deskGroup4 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskGroup4.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry4, deskMaterial));
        this.scene.add(deskGroup4);
        //机後ろ
        let drawDesk5 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.2, 0);
            shape.lineTo(3.2, 5.5);
            shape.lineTo(10, 5.5);
            shape.lineTo(10, 0);
            return shape;
        };
        let deskExtrudeSettings5 = {
            steps: 1,
            depth: 0.1,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry5 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk5(), deskExtrudeSettings5);
        deskGeometry5.translate(0, 0, 8.9);
        let deskGroup5 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskGroup5.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry5, deskMaterial));
        this.scene.add(deskGroup5);
        //机棚
        let drawDesk6 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.2, 3.8);
            shape.lineTo(3.2, 3.7);
            shape.lineTo(10, 3.7);
            shape.lineTo(10, 3.8);
            return shape;
        };
        let deskExtrudeSettings6 = {
            steps: 2,
            depth: 2,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskGeometry6 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDesk6(), deskExtrudeSettings6);
        deskGeometry6.translate(0, 0, 7);
        let deskGroup6 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        let deskMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(122, 153, 207)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        deskGroup6.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskGeometry6, deskMaterial2));
        this.scene.add(deskGroup6);
        //机引き出し
        let drawDeskChest = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(7, 2.6);
            shape.lineTo(7, 0);
            shape.lineTo(9.8, 0);
            shape.lineTo(9.8, 2.6);
            return shape;
        };
        let deskChestExtrudeSettings = {
            steps: 2,
            depth: 3.7,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskChestGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDeskChest(), deskChestExtrudeSettings);
        deskChestGeometry.translate(0, 0, 5.2);
        let deskChestGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskChestGroup.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskChestGeometry, deskMaterial));
        this.scene.add(deskChestGroup);
        let drawDeskChest2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(8, 1);
            shape.lineTo(8, 0.9);
            shape.lineTo(8.8, 0.9);
            shape.lineTo(8.8, 1);
            return shape;
        };
        let deskChestExtrudeSettings2 = {
            steps: 2,
            depth: 0.3,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let deskChestGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDeskChest2(), deskChestExtrudeSettings2);
        deskChestGeometry2.translate(0, 0, 5);
        let deskChestGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskChestGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskChestGeometry2, deskMaterial2));
        this.scene.add(deskChestGroup2);
        let deskChestGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDeskChest2(), deskChestExtrudeSettings2);
        deskChestGeometry3.translate(0, 0.5, 5);
        let deskChestGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskChestGroup3.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskChestGeometry3, deskMaterial2));
        this.scene.add(deskChestGroup3);
        let deskChestGeometry4 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDeskChest2(), deskChestExtrudeSettings2);
        deskChestGeometry4.translate(0, 1, 5);
        let deskChestGroup4 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        deskChestGroup4.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(deskChestGeometry4, deskMaterial2));
        this.scene.add(deskChestGroup4);
        //椅子
        let drawChair1 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.5, 1.3);
            shape.lineTo(3.5, 1.4);
            shape.lineTo(6.5, 1.4);
            shape.lineTo(6.5, 1.3);
            return shape;
        };
        let chairExtrudeSettings1 = {
            steps: 2,
            depth: 3,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let chairGeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawChair1(), chairExtrudeSettings1);
        chairGeometry1.translate(0, 0, 3);
        let chairMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 250, 250)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let chairGroup1 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        chairGroup1.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry1, chairMaterial));
        this.scene.add(chairGroup1);
        //背もたれ
        let drawChair2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(3.5, 2);
            shape.lineTo(3.5, 3.6);
            shape.lineTo(6.5, 3.6);
            shape.lineTo(6.5, 2);
            return shape;
        };
        let chairExtrudeSettings2 = {
            steps: 2,
            depth: 0.1,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let chairGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawChair2(), chairExtrudeSettings2);
        chairGeometry2.translate(0, 0, 3.3);
        let chairMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(122, 153, 207)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let chairGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        chairGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry2, chairMaterial2));
        this.scene.add(chairGroup2);
        //椅子足
        let chairGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3.6, 32);
        chairGeometry3.translate(3.7, 1.8, 3.2);
        let chairGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry3, chairMaterial);
        this.scene.add(chairGroup3);
        let chairGeometry4 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3.6, 32);
        chairGeometry4.translate(6.3, 1.8, 3.2);
        let chairGroup4 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry4, chairMaterial);
        this.scene.add(chairGroup4);
        let chairGeometry5 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 1.4, 32);
        chairGeometry5.translate(6.3, 0.7, 5.8);
        let chairGroup5 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry5, chairMaterial);
        this.scene.add(chairGroup5);
        let chairGeometry6 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 1.4, 32);
        chairGeometry6.translate(3.7, 0.7, 5.8);
        let chairGroup6 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chairGeometry6, chairMaterial);
        this.scene.add(chairGroup6);
        //ベット
        let drawBed = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-10, 0);
            shape.lineTo(-3, 0);
            shape.lineTo(-3, 2.5);
            shape.lineTo(-10, 2.5);
            return shape;
        };
        let bedExtrudeSettings = {
            steps: 2,
            depth: 12,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed(), bedExtrudeSettings);
        bedGeometry.translate(0, 0, -4);
        let bedMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(240, 248, 255)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let bedGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry, bedMaterial));
        this.scene.add(bedGroup);
        let drawBed2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-10, 0);
            shape.lineTo(-3, 0);
            shape.lineTo(-3, 4);
            shape.lineTo(-10, 4);
            return shape;
        };
        let bedExtrudeSettings2 = {
            steps: 1,
            depth: 1,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed2(), bedExtrudeSettings2);
        bedGeometry2.translate(0, 0, 8);
        let bedMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 250, 250)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let bedGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry2, bedMaterial2));
        this.scene.add(bedGroup2);
        //掛け布団
        let drawBed3 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-10, 2.8);
            shape.lineTo(-10, 2.5);
            shape.lineTo(-2.9, 2.5);
            shape.lineTo(-2.9, 2.8);
            return shape;
        };
        let bedExtrudeSettings3 = {
            steps: 1,
            depth: 10,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed3(), bedExtrudeSettings3);
        bedGeometry3.translate(0, 0, -4);
        let bedMaterial3 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(122, 153, 207)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let bedGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup3.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry3, bedMaterial3));
        this.scene.add(bedGroup3);
        let drawBed4 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-3, 2.8);
            shape.lineTo(-3, 1);
            shape.lineTo(-2.7, 1);
            shape.lineTo(-2.7, 2.8);
            return shape;
        };
        let bedExtrudeSettings4 = {
            steps: 1,
            depth: 10,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry4 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed4(), bedExtrudeSettings4);
        bedGeometry4.translate(0, 0, -4);
        let bedGroup4 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup4.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry4, bedMaterial3));
        this.scene.add(bedGroup4);
        let drawBed5 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-10.4, 2.8);
            shape.lineTo(-10.4, 1);
            shape.lineTo(-2.7, 1);
            shape.lineTo(-2.7, 2.8);
            return shape;
        };
        let bedExtrudeSettings5 = {
            steps: 1,
            depth: 0.1,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry5 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed5(), bedExtrudeSettings5);
        bedGeometry5.translate(0, 0, -4.1);
        let bedGroup5 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup5.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry5, bedMaterial3));
        this.scene.add(bedGroup5);
        let drawBed6 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-10, 2.8);
            shape.lineTo(-10, 1);
            shape.lineTo(-10.4, 1);
            shape.lineTo(-10.4, 2.8);
            return shape;
        };
        let bedExtrudeSettings6 = {
            steps: 1,
            depth: 10,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry6 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed6(), bedExtrudeSettings6);
        bedGeometry6.translate(0, 0, -4);
        let bedGroup6 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup6.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry6, bedMaterial3));
        this.scene.add(bedGroup6);
        //枕
        let drawBed7 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-9, 2.8);
            shape.lineTo(-9, 2.5);
            shape.lineTo(-4, 2.5);
            shape.lineTo(-4, 2.8);
            return shape;
        };
        let bedExtrudeSettings7 = {
            steps: 1,
            depth: 1.5,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let bedGeometry7 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawBed7(), bedExtrudeSettings7);
        bedGeometry7.translate(0, 0, 6.3);
        let bedMaterial7 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 255, 255)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let bedGroup7 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        bedGroup7.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(bedGeometry7, bedMaterial7));
        this.scene.add(bedGroup7);
        //照明
        let lightPoints = [];
        let lightPointNum = 3;
        for (let i = 0; i < lightPointNum; ++i) {
            lightPoints.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(Math.exp(Math.sin(Math.PI / 2 * i / (lightPointNum - 1) - Math.PI / 2)), Math.sin(Math.PI / 2 * i / (lightPointNum - 1) - Math.PI / 2) * -2));
        }
        let lightLatheGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.LatheGeometry(lightPoints);
        lightLatheGeometry.translate(0, 9, 0);
        let lightLatheMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(128, 128, 128)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
        let lightLatheMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lightLatheGeometry, lightLatheMaterial);
        this.scene.add(lightLatheMesh);
        let lightPoints2 = [];
        let lightPointNum2 = 10;
        for (let i = 0; i < lightPointNum2; ++i) {
            lightPoints2.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(Math.cos(Math.PI / 2 * i / (lightPointNum - 1) - Math.PI / 2), Math.sin(Math.PI / 2 * i / (lightPointNum - 1) - Math.PI / 2)));
        }
        let lightLatheGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.LatheGeometry(lightPoints2);
        lightLatheGeometry2.scale(0.5, 0.5, 0.5);
        lightLatheGeometry2.translate(0, 9, 0);
        let lightLatheMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 255, 224)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
        let lightLatheMesh2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(lightLatheGeometry2, lightLatheMaterial2);
        this.scene.add(lightLatheMesh2);
        //棚
        let drawChest = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-2.8, 0.7);
            shape.lineTo(-2.8, 0.8);
            shape.lineTo(3, 0.8);
            shape.lineTo(3, 0.7);
            return shape;
        };
        let chestsExtrudeSettings = {
            steps: 2,
            depth: 2.5,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let chestsGeometry1 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawChest(), chestsExtrudeSettings);
        chestsGeometry1.translate(0, 0, 6.5);
        let chestsMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(122, 153, 207)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let chestsGroup1 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        chestsGroup1.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestsGeometry1, chestsMaterial));
        this.scene.add(chestsGroup1);
        let chestsGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawChest(), chestsExtrudeSettings);
        chestsGeometry2.translate(0, 1, 6.5);
        let chestsGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        chestsGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestsGeometry2, chestsMaterial));
        this.scene.add(chestsGroup2);
        let chestsGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawChest(), chestsExtrudeSettings);
        chestsGeometry3.translate(0, 2, 6.5);
        let chestsGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        chestsGroup3.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestsGeometry3, chestsMaterial));
        this.scene.add(chestsGroup3);
        //棚足
        let chestGeometry4 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3, 32);
        chestGeometry4.translate(2.8, 1.5, 8.8);
        let chestMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color(1, 1, 1) });
        let chestGroup4 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestGeometry4, chestMaterial2);
        this.scene.add(chestGroup4);
        let chestGeometry5 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3, 32);
        chestGeometry5.translate(-2.6, 1.5, 8.8);
        let chestGroup5 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestGeometry5, chestMaterial2);
        this.scene.add(chestGroup5);
        let chestGeometry6 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3, 32);
        chestGeometry6.translate(-2.6, 1.5, 6.8);
        let chestGroup6 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestGeometry6, chestMaterial2);
        this.scene.add(chestGroup6);
        let chestGeometry7 = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.1, 0.1, 3, 32);
        chestGeometry7.translate(2.8, 1.5, 6.8);
        let chestGroup7 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(chestGeometry7, chestMaterial2);
        this.scene.add(chestGroup7);
        //時計
        let drawClock = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(-7.7, 6.5);
            shape.lineTo(-7.7, 8.5);
            shape.lineTo(-5.7, 8.5);
            shape.lineTo(-5.7, 6.5);
            return shape;
        };
        let clockExtrudeSettings = {
            steps: 1,
            depth: 0.5,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let clockGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawClock(), clockExtrudeSettings);
        clockGeometry.translate(0, 0, 8.5);
        let clockMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 250, 255)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let clockGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        clockGroup.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(clockGeometry, clockMaterial));
        this.scene.add(clockGroup);
        //針
        let drawClock2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(0, 0);
            shape.lineTo(0.05, 0);
            shape.lineTo(0.05, 0.7);
            shape.lineTo(-0.05, 0.7);
            shape.lineTo(-0.05, 0);
            return shape;
        };
        let drawClock3 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(0, 0);
            shape.lineTo(0.05, 0);
            shape.lineTo(0.05, 0.7);
            shape.lineTo(-0.05, 0.7);
            shape.lineTo(-0.05, 0);
            return shape;
        };
        let clockExtrudeSettings2 = {
            steps: 1,
            depth: 0.2,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let clockGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawClock2(), clockExtrudeSettings2);
        let clockMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(0, 0, 0)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let clockGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        clockGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(clockGeometry2, clockMaterial2));
        let clockGeometry3 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawClock3(), clockExtrudeSettings2);
        let clockGroup3 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        clockGroup3.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(clockGeometry3, clockMaterial2));
        let lerp = (p0, p1, t) => {
            const result = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3((1.0 - t) * p0.x + t * p1.x, (1.0 - t) * p0.y + t * p1.y, (1.0 - t) * p0.z + t * p1.z);
            // const result = p0.multiplyScalar((1.0 - t)).add(p1.multiplyScalar((t)));
            return result;
        };
        const clock1 = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
        let t1 = 0;
        const clock2 = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
        let t2 = 0;
        let points = [];
        points.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-6.7, 7.5, 8.4));
        points.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-6.7, 7.5, 8.4));
        let clockUpdate = () => {
            requestAnimationFrame(clockUpdate);
            t1 += clock1.getDelta();
            if (t1 > 10) {
                t1 -= 10;
            }
            const pos = lerp(points[0], points[1], t1);
            clockGroup2.position.copy(pos);
            clockGroup2.rotation.z = Math.PI * 0.2 * t1;
        };
        clockUpdate();
        this.scene.add(clockGroup2);
        let clockUpdate2 = () => {
            requestAnimationFrame(clockUpdate2);
            t2 += clock2.getDelta();
            if (t2 > 40) {
                t2 -= 40;
            }
            const pos = lerp(points[0], points[1], t2);
            clockGroup3.position.copy(pos);
            clockGroup3.rotation.z = Math.PI * 0.05 * t2;
        };
        clockUpdate2();
        this.scene.add(clockGroup3);
        //ドア
        let drawDoor = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(9.8, 0);
            shape.lineTo(9.8, 0);
            shape.lineTo(10, 8);
            shape.lineTo(10, 8);
            return shape;
        };
        let doorExtrudeSettings = {
            steps: 1,
            depth: 4,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let doorGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDoor(), doorExtrudeSettings);
        doorGeometry.translate(0, 0, -8);
        let doorMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 250, 240)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let doorGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        doorGroup.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(doorGeometry, doorMaterial));
        this.scene.add(doorGroup);
        //ドアノブ
        let drawDoor2 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_1__.Shape();
            // 形状を定義
            shape.moveTo(9.7, 3.9);
            shape.lineTo(9.7, 3.9);
            shape.lineTo(10.2, 4.3);
            shape.lineTo(10.2, 4.3);
            return shape;
        };
        let doorExtrudeSettings2 = {
            steps: 1,
            depth: 1,
            bevelEnabled: false,
            bevelThickness: 4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let doorGeometry2 = new three__WEBPACK_IMPORTED_MODULE_1__.ExtrudeGeometry(drawDoor2(), doorExtrudeSettings2);
        doorGeometry2.translate(0, 0, -5.2);
        let doorMaterial2 = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(101, 113, 128)"), side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide, flatShading: true });
        let doorGroup2 = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
        doorGroup2.add(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(doorGeometry2, doorMaterial2));
        this.scene.add(doorGroup2);
        //カーペット
        const carpetVertices = new Float32Array([
            -1, 0.1, -6,
            9, 0.1, 3,
            9, 0.1, -6,
            9, 0.1, 3,
            -1, 0.1, -6,
            -1, 0.1, 3
        ]);
        const carpetGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
        carpetGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(carpetVertices, 3));
        const carpetMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(196, 216, 242)") });
        const carpetMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(carpetGeometry, carpetMaterial);
        this.scene.add(carpetMesh);
        //地面作成
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(20, 18);
        const planeColor = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(78, 69, 74)") });
        const planeMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry, planeColor);
        planeMesh.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面
        planeMesh.rotateX(-Math.PI / 2);
        this.scene.add(planeMesh);
        //壁作成
        const vertices = new Float32Array([
            -10, 0, -9,
            10, 0, -9,
            -10, 10, -9,
            10, 0, -9,
            10, 10, -9,
            -10, 10, -9,
            -10, 0, 9,
            -10, 0, -9,
            -10, 10, 9,
            -10, 10, 9,
            -10, 0, -9,
            -10, 10, -9,
            -10, 10, 9,
            10, 10, 9,
            10, 0, 9,
            -10, 10, 9,
            10, 0, 9,
            -10, 0, 9,
            10, 10, 9,
            10, 10, -9,
            10, 0, -9,
            10, 10, 9,
            10, 0, -9,
            10, 0, 9
        ]);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
        geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(vertices, 3));
        const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color(1, 1, 1) });
        const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);
        this.scene.add(mesh);
        //天井
        const topVertices = new Float32Array([
            -10, 10, -9,
            10, 10, -9,
            10, 10, 9,
            -10, 10, -9,
            10, 10, 9,
            -10, 10, 9
        ]);
        const topGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
        topGeometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(topVertices, 3));
        const topMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: new three__WEBPACK_IMPORTED_MODULE_1__.Color("rgb(255, 255, 255)") });
        const topMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(topGeometry, topMaterial);
        this.scene.add(topMesh);
        // // グリッド表示
        // const gridHelper = new THREE.GridHelper( 20,);
        // this.scene.add( gridHelper );
        // // 軸表示
        // const axesHelper = new THREE.AxesHelper( 5 );
        // this.scene.add( axesHelper );
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xfaebd7);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 2, 0).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        // this.light2 = new THREE.DirectionalLight(0xfaebd7, 0.5);
        // const lvec2 = new THREE.Vector3(0, 0.5, 0).normalize();
        // this.light2.position.set(lvec2.x, lvec2.y, lvec2.z);
        // this.scene.add(this.light2);
        let Ambientlight1 = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0x404040, 1.5);
        this.scene.add(Ambientlight1);
        let pointLight = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(0xffffff, 0.5);
        pointLight.position.set(0, 9, 0);
        this.scene.add(pointLight);
        let update = (time) => {
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-15, 15, -15));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_examples_jsm_controls_OrbitControls_js"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksR0FBRyw2Q0FBZ0IsQ0FBQyxDQUFDLEtBQUs7UUFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFMUIsS0FBSztRQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO1lBQzlCLENBQUMsRUFBRSxFQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDWCxFQUFFLEVBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDWCxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVYLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNWLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVYLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1YsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ1QsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDVixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDUixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUVULEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FB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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8yMmZpMDk244CA56aP55Sw57WQ5pyJXG5cblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xuICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkxpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICAvLyDnlLvpnaLpg6jliIbjga7kvZzmiJAo6KGo56S644GZ44KL5p6g44GU44Go44GrKSpcbiAgICBwdWJsaWMgY3JlYXRlUmVuZGVyZXJET00gPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbWVyYVBvczogVEhSRUUuVmVjdG9yMykgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4NDk1ZWQpKTtcbiAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlOyAvL+OCt+ODo+ODieOCpuODnuODg+ODl+OCkuacieWKueOBq+OBmeOCi1xuXG4gICAgICAgIC8v44Kr44Oh44Op44Gu6Kit5a6aXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2lkdGggLyBoZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvcyk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xuXG4gICAgICAgIGNvbnN0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICAgICAgLy8g5q+O44OV44Os44O844Og44GudXBkYXRl44KS5ZG844KT44Gn77yMcmVuZGVyXG4gICAgICAgIC8vIHJlcWVzdEFuaW1hdGlvbkZyYW1lIOOBq+OCiOOCiuasoeODleODrOODvOODoOOCkuWRvOOBtlxuICAgICAgICBjb25zdCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJAo5YWo5L2T44GnMeWbnilcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgLy/mnLpcbiAgICAgICAgbGV0IGRyYXdEZXNrMSA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKDMuMiwgMi43KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLjIsIDIuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAsIDIuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAsIDIuNyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNrRXh0cnVkZVNldHRpbmdzMSA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAyLFxuICAgICAgICAgICAgZGVwdGg6IDQsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0dlb21ldHJ5MSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Rlc2sxKCksIGRlc2tFeHRydWRlU2V0dGluZ3MxKTtcbiAgICAgICAgZGVza0dlb21ldHJ5MS50cmFuc2xhdGUoMCwgMCwgNSk7XG4gICAgICAgIGxldCBkZXNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigyNTUsIDI1MCwgMjUwKVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgbGV0IGRlc2tHcm91cDEgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZGVza0dyb3VwMS5hZGQobmV3IFRIUkVFLk1lc2goZGVza0dlb21ldHJ5MSwgZGVza01hdGVyaWFsKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGRlc2tHcm91cDEpO1xuXG4gICAgICAgIC8v5py65Y+zXG4gICAgICAgIGxldCBkcmF3RGVzazIgPSAoKT0+IHtcbiAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4gICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyDlvaLnirbjgpLlrprnvqlcbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbygxMCwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAsIDUuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oOS45LCA1LjUpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDkuOSwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNrRXh0cnVkZVNldHRpbmdzMiA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAyLFxuICAgICAgICAgICAgZGVwdGg6IDQsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0dlb21ldHJ5MiA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Rlc2syKCksIGRlc2tFeHRydWRlU2V0dGluZ3MyKTtcbiAgICAgICAgZGVza0dlb21ldHJ5Mi50cmFuc2xhdGUoMCwgMCwgNSk7XG4gICAgICAgIGxldCBkZXNrR3JvdXAyID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGRlc2tHcm91cDIuYWRkKG5ldyBUSFJFRS5NZXNoKGRlc2tHZW9tZXRyeTIsIGRlc2tNYXRlcmlhbCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrR3JvdXAyKTtcblxuICAgICAgICAvL+acuuW3pu+8kVxuICAgICAgICBsZXQgZHJhd0Rlc2szID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMy4yLCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLjIsIDUuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMy4zLCA1LjUpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDMuMywgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNrRXh0cnVkZVNldHRpbmdzMyA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAyLFxuICAgICAgICAgICAgZGVwdGg6IDIsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0dlb21ldHJ5MyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Rlc2szKCksIGRlc2tFeHRydWRlU2V0dGluZ3MzKTtcbiAgICAgICAgZGVza0dlb21ldHJ5My50cmFuc2xhdGUoMCwgMCwgNyk7XG4gICAgICAgIGxldCBkZXNrR3JvdXAzID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGRlc2tHcm91cDMuYWRkKG5ldyBUSFJFRS5NZXNoKGRlc2tHZW9tZXRyeTMsIGRlc2tNYXRlcmlhbCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrR3JvdXAzKTtcblxuICAgICAgICAvL+acuuW3pu+8klxuICAgICAgICBsZXQgZHJhd0Rlc2s0ID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMy4yLCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLjIsIDIuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMy4zLCAyLjgpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDMuMywgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNrRXh0cnVkZVNldHRpbmdzNCA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAyLFxuICAgICAgICAgICAgZGVwdGg6IDQsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0dlb21ldHJ5NCA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Rlc2s0KCksIGRlc2tFeHRydWRlU2V0dGluZ3M0KTtcbiAgICAgICAgZGVza0dlb21ldHJ5NC50cmFuc2xhdGUoMCwgMCwgNSk7XG4gICAgICAgIGxldCBkZXNrR3JvdXA0ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGRlc2tHcm91cDQuYWRkKG5ldyBUSFJFRS5NZXNoKGRlc2tHZW9tZXRyeTQsIGRlc2tNYXRlcmlhbCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrR3JvdXA0KTtcblxuICAgICAgICAvL+acuuW+jOOCjVxuICAgICAgICBsZXQgZHJhd0Rlc2s1ID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMy4yLCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLjIsIDUuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAsIDUuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAsIDApO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVza0V4dHJ1ZGVTZXR0aW5nczUgPSB7XG4gICAgICAgICAgICBzdGVwczogMSxcbiAgICAgICAgICAgIGRlcHRoOiAwLjEsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0dlb21ldHJ5NSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Rlc2s1KCksIGRlc2tFeHRydWRlU2V0dGluZ3M1KTtcbiAgICAgICAgZGVza0dlb21ldHJ5NS50cmFuc2xhdGUoMCwgMCwgOC45KTtcbiAgICAgICAgbGV0IGRlc2tHcm91cDUgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZGVza0dyb3VwNS5hZGQobmV3IFRIUkVFLk1lc2goZGVza0dlb21ldHJ5NSwgZGVza01hdGVyaWFsKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGRlc2tHcm91cDUpO1xuXG4gICAgICAgIC8v5py65qOaXG4gICAgICAgIGxldCBkcmF3RGVzazYgPSAoKT0+IHtcbiAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4gICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyDlvaLnirbjgpLlrprnvqlcbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbygzLjIsIDMuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMy4yLCAzLjcpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDEwLCAzLjcpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDEwLCAzLjgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVza0V4dHJ1ZGVTZXR0aW5nczYgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAyLFxuICAgICAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWxTaXplOiAyLFxuICAgICAgICAgICAgYmV2ZWxTZWdtZW50czogM1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlc2tHZW9tZXRyeTYgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdEZXNrNigpLCBkZXNrRXh0cnVkZVNldHRpbmdzNik7XG4gICAgICAgIGRlc2tHZW9tZXRyeTYudHJhbnNsYXRlKDAsIDAsIDcpO1xuICAgICAgICBsZXQgZGVza0dyb3VwNiA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlc2tNYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigxMjIsIDE1MywgMjA3KVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgZGVza0dyb3VwNi5hZGQobmV3IFRIUkVFLk1lc2goZGVza0dlb21ldHJ5NiwgZGVza01hdGVyaWFsMikpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrR3JvdXA2KTtcblxuICAgICAgICAvL+acuuW8leOBjeWHuuOBl1xuICAgICAgICBsZXQgZHJhd0Rlc2tDaGVzdCA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKDcsIDIuNik7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oNywgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oOS44LCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyg5LjgsIDIuNik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNrQ2hlc3RFeHRydWRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAzLjcsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0NoZXN0R2VvbWV0cnkgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdEZXNrQ2hlc3QoKSwgZGVza0NoZXN0RXh0cnVkZVNldHRpbmdzKTtcbiAgICAgICAgZGVza0NoZXN0R2VvbWV0cnkudHJhbnNsYXRlKDAsIDAsIDUuMik7XG4gICAgICAgIGxldCBkZXNrQ2hlc3RHcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBkZXNrQ2hlc3RHcm91cC5hZGQobmV3IFRIUkVFLk1lc2goZGVza0NoZXN0R2VvbWV0cnksIGRlc2tNYXRlcmlhbCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrQ2hlc3RHcm91cCk7XG5cbiAgICAgICAgbGV0IGRyYXdEZXNrQ2hlc3QyID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oOCwgMSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oOCwgMC45KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyg4LjgsIDAuOSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oOC44LCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlc2tDaGVzdEV4dHJ1ZGVTZXR0aW5nczIgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAwLjMsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVza0NoZXN0R2VvbWV0cnkyID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3RGVza0NoZXN0MigpLCBkZXNrQ2hlc3RFeHRydWRlU2V0dGluZ3MyKTtcbiAgICAgICAgZGVza0NoZXN0R2VvbWV0cnkyLnRyYW5zbGF0ZSgwLCAwLCA1KTtcbiAgICAgICAgbGV0IGRlc2tDaGVzdEdyb3VwMiA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBkZXNrQ2hlc3RHcm91cDIuYWRkKG5ldyBUSFJFRS5NZXNoKGRlc2tDaGVzdEdlb21ldHJ5MiwgZGVza01hdGVyaWFsMikpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrQ2hlc3RHcm91cDIpO1xuXG4gICAgICAgIGxldCBkZXNrQ2hlc3RHZW9tZXRyeTMgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdEZXNrQ2hlc3QyKCksIGRlc2tDaGVzdEV4dHJ1ZGVTZXR0aW5nczIpO1xuICAgICAgICBkZXNrQ2hlc3RHZW9tZXRyeTMudHJhbnNsYXRlKDAsIDAuNSwgNSk7XG4gICAgICAgIGxldCBkZXNrQ2hlc3RHcm91cDMgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZGVza0NoZXN0R3JvdXAzLmFkZChuZXcgVEhSRUUuTWVzaChkZXNrQ2hlc3RHZW9tZXRyeTMsIGRlc2tNYXRlcmlhbDIpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZGVza0NoZXN0R3JvdXAzKTtcblxuICAgICAgICBsZXQgZGVza0NoZXN0R2VvbWV0cnk0ID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3RGVza0NoZXN0MigpLCBkZXNrQ2hlc3RFeHRydWRlU2V0dGluZ3MyKTtcbiAgICAgICAgZGVza0NoZXN0R2VvbWV0cnk0LnRyYW5zbGF0ZSgwLCAxLCA1KTtcbiAgICAgICAgbGV0IGRlc2tDaGVzdEdyb3VwNCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBkZXNrQ2hlc3RHcm91cDQuYWRkKG5ldyBUSFJFRS5NZXNoKGRlc2tDaGVzdEdlb21ldHJ5NCwgZGVza01hdGVyaWFsMikpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkZXNrQ2hlc3RHcm91cDQpO1xuXG4gICAgICAgIC8v5qSF5a2QXG4gICAgICAgIGxldCBkcmF3Q2hhaXIxID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMy41LCAxLjMpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDMuNSwgMS40KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyg2LjUsIDEuNCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oNi41LCAxLjMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hhaXJFeHRydWRlU2V0dGluZ3MxID0ge1xuICAgICAgICAgICAgc3RlcHM6IDIsXG4gICAgICAgICAgICBkZXB0aDogMyxcbiAgICAgICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBiZXZlbFRoaWNrbmVzczogNCxcbiAgICAgICAgICAgIGJldmVsU2l6ZTogMixcbiAgICAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjaGFpckdlb21ldHJ5MSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0NoYWlyMSgpLCBjaGFpckV4dHJ1ZGVTZXR0aW5nczEpO1xuICAgICAgICBjaGFpckdlb21ldHJ5MS50cmFuc2xhdGUoMCwgMCwgMyk7XG4gICAgICAgIGxldCBjaGFpck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjpuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMjU1LCAyNTAsIDI1MClcIiksIHNpZGU6VEhSRUUuRG91YmxlU2lkZSxmbGF0U2hhZGluZzp0cnVlfSk7XG4gICAgICAgIGxldCBjaGFpckdyb3VwMSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBjaGFpckdyb3VwMS5hZGQobmV3IFRIUkVFLk1lc2goY2hhaXJHZW9tZXRyeTEsIGNoYWlyTWF0ZXJpYWwpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hhaXJHcm91cDEpO1xuXG4gICAgICAgIC8v6IOM44KC44Gf44KMXG4gICAgICAgIGxldCBkcmF3Q2hhaXIyID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMy41LCAyKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLjUsIDMuNik7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oNi41LCAzLjYpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDYuNSwgMik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGFpckV4dHJ1ZGVTZXR0aW5nczIgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAwLjEsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgY2hhaXJHZW9tZXRyeTIgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdDaGFpcjIoKSwgY2hhaXJFeHRydWRlU2V0dGluZ3MyKTtcbiAgICAgICAgY2hhaXJHZW9tZXRyeTIudHJhbnNsYXRlKDAsIDAsIDMuMyk7XG4gICAgICAgIGxldCBjaGFpck1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6bmV3IFRIUkVFLkNvbG9yKFwicmdiKDEyMiwgMTUzLCAyMDcpXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgY2hhaXJHcm91cDIgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgY2hhaXJHcm91cDIuYWRkKG5ldyBUSFJFRS5NZXNoKGNoYWlyR2VvbWV0cnkyLCBjaGFpck1hdGVyaWFsMikpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjaGFpckdyb3VwMik7XG5cbiAgICAgICAgLy/mpIXlrZDotrNcbiAgICAgICAgbGV0IGNoYWlyR2VvbWV0cnkzID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4xLCAwLjEsIDMuNiwgMzIpO1xuICAgICAgICBjaGFpckdlb21ldHJ5My50cmFuc2xhdGUoMy43LCAxLjgsIDMuMik7XG4gICAgICAgIGxldCBjaGFpckdyb3VwMyA9IG5ldyBUSFJFRS5NZXNoKGNoYWlyR2VvbWV0cnkzLCBjaGFpck1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hhaXJHcm91cDMpO1xuXG4gICAgICAgIGxldCBjaGFpckdlb21ldHJ5NCA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMSwgMC4xLCAzLjYsIDMyKTtcbiAgICAgICAgY2hhaXJHZW9tZXRyeTQudHJhbnNsYXRlKDYuMywgMS44LCAzLjIpO1xuICAgICAgICBsZXQgY2hhaXJHcm91cDQgPSBuZXcgVEhSRUUuTWVzaChjaGFpckdlb21ldHJ5NCwgY2hhaXJNYXRlcmlhbCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNoYWlyR3JvdXA0KTtcblxuICAgICAgICBsZXQgY2hhaXJHZW9tZXRyeTUgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjEsIDAuMSwgMS40LCAzMik7XG4gICAgICAgIGNoYWlyR2VvbWV0cnk1LnRyYW5zbGF0ZSg2LjMsIDAuNywgNS44KTtcbiAgICAgICAgbGV0IGNoYWlyR3JvdXA1ID0gbmV3IFRIUkVFLk1lc2goY2hhaXJHZW9tZXRyeTUsIGNoYWlyTWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjaGFpckdyb3VwNSk7XG5cbiAgICAgICAgbGV0IGNoYWlyR2VvbWV0cnk2ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4xLCAwLjEsIDEuNCwgMzIpO1xuICAgICAgICBjaGFpckdlb21ldHJ5Ni50cmFuc2xhdGUoMy43LCAwLjcsIDUuOCk7XG4gICAgICAgIGxldCBjaGFpckdyb3VwNiA9IG5ldyBUSFJFRS5NZXNoKGNoYWlyR2VvbWV0cnk2LCBjaGFpck1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hhaXJHcm91cDYpO1xuXG4gICAgICAgIC8v44OZ44OD44OIXG4gICAgICAgIGxldCBkcmF3QmVkID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oLTEwLCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMywgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTMsIDIuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEwLCAyLjUpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVkRXh0cnVkZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgc3RlcHM6IDIsXG4gICAgICAgICAgICBkZXB0aDogMTIsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZEdlb21ldHJ5ID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3QmVkKCksIGJlZEV4dHJ1ZGVTZXR0aW5ncyk7XG4gICAgICAgIGJlZEdlb21ldHJ5LnRyYW5zbGF0ZSgwLCAwLCAtNCk7XG4gICAgICAgIGxldCBiZWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6bmV3IFRIUkVFLkNvbG9yKFwicmdiKDI0MCwgMjQ4LCAyNTUpXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgYmVkR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgYmVkR3JvdXAuYWRkKG5ldyBUSFJFRS5NZXNoKGJlZEdlb21ldHJ5LCBiZWRNYXRlcmlhbCkpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChiZWRHcm91cCk7XG5cbiAgICAgICAgXG4gICAgICAgIGxldCBkcmF3QmVkMiA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKC0xMCwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTMsIDApO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0zLCA0KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMTAsIDQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVkRXh0cnVkZVNldHRpbmdzMiA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAxLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZEdlb21ldHJ5MiA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0JlZDIoKSwgYmVkRXh0cnVkZVNldHRpbmdzMik7XG4gICAgICAgIGJlZEdlb21ldHJ5Mi50cmFuc2xhdGUoMCwgMCwgOCk7XG4gICAgICAgIGxldCBiZWRNYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigyNTUsIDI1MCwgMjUwKVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgbGV0IGJlZEdyb3VwMiA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBiZWRHcm91cDIuYWRkKG5ldyBUSFJFRS5NZXNoKGJlZEdlb21ldHJ5MiwgYmVkTWF0ZXJpYWwyKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGJlZEdyb3VwMik7XG5cbiAgICAgICAgLy/mjpvjgZHluIPlm6NcbiAgICAgICAgbGV0IGRyYXdCZWQzID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oLTEwLCAyLjgpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0xMCwgMi41KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMi45LCAyLjUpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0yLjksIDIuOCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiZWRFeHRydWRlU2V0dGluZ3MzID0ge1xuICAgICAgICAgICAgc3RlcHM6IDEsXG4gICAgICAgICAgICBkZXB0aDogMTAsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZEdlb21ldHJ5MyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0JlZDMoKSwgYmVkRXh0cnVkZVNldHRpbmdzMyk7XG4gICAgICAgIGJlZEdlb21ldHJ5My50cmFuc2xhdGUoMCwgMCwgLTQpO1xuICAgICAgICBsZXQgYmVkTWF0ZXJpYWwzID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHtjb2xvcjpuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMTIyLCAxNTMsIDIwNylcIiksIHNpZGU6VEhSRUUuRG91YmxlU2lkZSxmbGF0U2hhZGluZzp0cnVlfSk7XG4gICAgICAgIGxldCBiZWRHcm91cDMgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgYmVkR3JvdXAzLmFkZChuZXcgVEhSRUUuTWVzaChiZWRHZW9tZXRyeTMsIGJlZE1hdGVyaWFsMykpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChiZWRHcm91cDMpO1xuXG4gICAgICAgIGxldCBkcmF3QmVkNCA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKC0zLCAyLjgpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0zLCAxKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMi43LCAxKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMi43LCAyLjgpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmVkRXh0cnVkZVNldHRpbmdzNCA9IHtcbiAgICAgICAgICAgIHN0ZXBzOiAxLFxuICAgICAgICAgICAgZGVwdGg6IDEwLFxuICAgICAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWxTaXplOiAyLFxuICAgICAgICAgICAgYmV2ZWxTZWdtZW50czogM1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZWRHZW9tZXRyeTQgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdCZWQ0KCksIGJlZEV4dHJ1ZGVTZXR0aW5nczQpO1xuICAgICAgICBiZWRHZW9tZXRyeTQudHJhbnNsYXRlKDAsIDAsIC00KTtcbiAgICAgICAgbGV0IGJlZEdyb3VwNCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBiZWRHcm91cDQuYWRkKG5ldyBUSFJFRS5NZXNoKGJlZEdlb21ldHJ5NCwgYmVkTWF0ZXJpYWwzKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGJlZEdyb3VwNCk7XG5cbiAgICAgICAgbGV0IGRyYXdCZWQ1ID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oLTEwLjQsIDIuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEwLjQsIDEpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0yLjcsIDEpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC0yLjcsIDIuOCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiZWRFeHRydWRlU2V0dGluZ3M1ID0ge1xuICAgICAgICAgICAgc3RlcHM6IDEsXG4gICAgICAgICAgICBkZXB0aDogMC4xLFxuICAgICAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWxTaXplOiAyLFxuICAgICAgICAgICAgYmV2ZWxTZWdtZW50czogM1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZWRHZW9tZXRyeTUgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdCZWQ1KCksIGJlZEV4dHJ1ZGVTZXR0aW5nczUpO1xuICAgICAgICBiZWRHZW9tZXRyeTUudHJhbnNsYXRlKDAsIDAsIC00LjEpO1xuICAgICAgICBsZXQgYmVkR3JvdXA1ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGJlZEdyb3VwNS5hZGQobmV3IFRIUkVFLk1lc2goYmVkR2VvbWV0cnk1LCBiZWRNYXRlcmlhbDMpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoYmVkR3JvdXA1KTtcblxuICAgICAgICBsZXQgZHJhd0JlZDYgPSAoKT0+IHtcbiAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4gICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyDlvaLnirbjgpLlrprnvqlcbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbygtMTAsIDIuOCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEwLCAxKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMTAuNCwgMSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEwLjQsIDIuOCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiZWRFeHRydWRlU2V0dGluZ3M2ID0ge1xuICAgICAgICAgICAgc3RlcHM6IDEsXG4gICAgICAgICAgICBkZXB0aDogMTAsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZEdlb21ldHJ5NiA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0JlZDYoKSwgYmVkRXh0cnVkZVNldHRpbmdzNik7XG4gICAgICAgIGJlZEdlb21ldHJ5Ni50cmFuc2xhdGUoMCwgMCwgLTQpO1xuICAgICAgICBsZXQgYmVkR3JvdXA2ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGJlZEdyb3VwNi5hZGQobmV3IFRIUkVFLk1lc2goYmVkR2VvbWV0cnk2LCBiZWRNYXRlcmlhbDMpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoYmVkR3JvdXA2KTtcblxuICAgICAgICAvL+aelVxuICAgICAgICBsZXQgZHJhd0JlZDcgPSAoKT0+IHtcbiAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4gICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAvLyDlvaLnirbjgpLlrprnvqlcbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbygtOSwgMi44KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtOSwgMi41KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtNCwgMi41KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtNCwgMi44KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJlZEV4dHJ1ZGVTZXR0aW5nczcgPSB7XG4gICAgICAgICAgICBzdGVwczogMSxcbiAgICAgICAgICAgIGRlcHRoOiAxLjUsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZEdlb21ldHJ5NyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0JlZDcoKSwgYmVkRXh0cnVkZVNldHRpbmdzNyk7XG4gICAgICAgIGJlZEdlb21ldHJ5Ny50cmFuc2xhdGUoMCwgMCwgNi4zKTtcbiAgICAgICAgbGV0IGJlZE1hdGVyaWFsNyA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6bmV3IFRIUkVFLkNvbG9yKFwicmdiKDI1NSwgMjU1LCAyNTUpXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgYmVkR3JvdXA3ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGJlZEdyb3VwNy5hZGQobmV3IFRIUkVFLk1lc2goYmVkR2VvbWV0cnk3LCBiZWRNYXRlcmlhbDcpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoYmVkR3JvdXA3KTtcblxuICAgICAgICAvL+eFp+aYjlxuICAgICAgICBsZXQgbGlnaHRQb2ludHM6VEhSRUUuVmVjdG9yMltdID0gW107XG4gICAgICAgIGxldCBsaWdodFBvaW50TnVtID0gMztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpZ2h0UG9pbnROdW07ICsraSkge1xuICAgICAgICAgICAgbGlnaHRQb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMihNYXRoLmV4cChNYXRoLnNpbihNYXRoLlBJIC8gMiAqIGkgLyAobGlnaHRQb2ludE51bSAtIDEpIC0gTWF0aC5QSSAvIDIpKSAsICBNYXRoLnNpbihNYXRoLlBJIC8gMiAqIGkgLyAobGlnaHRQb2ludE51bSAtIDEpIC0gTWF0aC5QSSAvIDIpICogLTIpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlnaHRMYXRoZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkobGlnaHRQb2ludHMpO1xuICAgICAgICBsaWdodExhdGhlR2VvbWV0cnkudHJhbnNsYXRlKDAsIDksIDApO1xuICAgICAgICBsZXQgbGlnaHRMYXRoZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogbmV3IFRIUkVFLkNvbG9yKFwicmdiKDEyOCwgMTI4LCAxMjgpXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGV9KTtcbiAgICAgICAgbGV0IGxpZ2h0TGF0aGVNZXNoID0gbmV3IFRIUkVFLk1lc2gobGlnaHRMYXRoZUdlb21ldHJ5LCBsaWdodExhdGhlTWF0ZXJpYWwpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChsaWdodExhdGhlTWVzaCk7XG5cbiAgICAgICAgbGV0IGxpZ2h0UG9pbnRzMjpUSFJFRS5WZWN0b3IyW10gPSBbXTtcbiAgICAgICAgbGV0IGxpZ2h0UG9pbnROdW0yID0gMTA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaWdodFBvaW50TnVtMjsgKytpKSB7XG4gICAgICAgICAgICBsaWdodFBvaW50czIucHVzaChuZXcgVEhSRUUuVmVjdG9yMihNYXRoLmNvcyhNYXRoLlBJIC8gMiAqIGkgLyAobGlnaHRQb2ludE51bSAtIDEpIC0gTWF0aC5QSSAvIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnNpbihNYXRoLlBJIC8gMiAqIGkgLyAobGlnaHRQb2ludE51bSAtIDEpIC0gTWF0aC5QSSAvIDIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGxpZ2h0TGF0aGVHZW9tZXRyeTIgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShsaWdodFBvaW50czIpO1xuICAgICAgICBsaWdodExhdGhlR2VvbWV0cnkyLnNjYWxlKDAuNSwgMC41LCAwLjUpO1xuICAgICAgICBsaWdodExhdGhlR2VvbWV0cnkyLnRyYW5zbGF0ZSgwLCA5LCAwKTtcbiAgICAgICAgbGV0IGxpZ2h0TGF0aGVNYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe2NvbG9yOiBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMjU1LCAyNTUsIDIyNClcIiksIHNpZGU6VEhSRUUuRG91YmxlU2lkZX0pO1xuICAgICAgICBsZXQgbGlnaHRMYXRoZU1lc2gyID0gbmV3IFRIUkVFLk1lc2gobGlnaHRMYXRoZUdlb21ldHJ5MiwgbGlnaHRMYXRoZU1hdGVyaWFsMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxpZ2h0TGF0aGVNZXNoMik7XG5cbiAgICAgICAgLy/mo5pcbiAgICAgICAgbGV0IGRyYXdDaGVzdCA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKC0yLjgsIDAuNyk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTIuOCwgMC44KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygzLCAwLjgpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDMsIDAuNyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjaGVzdHNFeHRydWRlU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAyLjUsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBsZXQgY2hlc3RzR2VvbWV0cnkxID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3Q2hlc3QoKSwgY2hlc3RzRXh0cnVkZVNldHRpbmdzKTtcbiAgICAgICAgY2hlc3RzR2VvbWV0cnkxLnRyYW5zbGF0ZSgwLCAwLCA2LjUpO1xuICAgICAgICBsZXQgY2hlc3RzTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigxMjIsIDE1MywgMjA3KVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgbGV0IGNoZXN0c0dyb3VwMSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBjaGVzdHNHcm91cDEuYWRkKG5ldyBUSFJFRS5NZXNoKGNoZXN0c0dlb21ldHJ5MSwgY2hlc3RzTWF0ZXJpYWwpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hlc3RzR3JvdXAxKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjaGVzdHNHZW9tZXRyeTIgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdDaGVzdCgpLCBjaGVzdHNFeHRydWRlU2V0dGluZ3MpO1xuICAgICAgICBjaGVzdHNHZW9tZXRyeTIudHJhbnNsYXRlKDAsIDEsIDYuNSk7XG4gICAgICAgIGxldCBjaGVzdHNHcm91cDIgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgY2hlc3RzR3JvdXAyLmFkZChuZXcgVEhSRUUuTWVzaChjaGVzdHNHZW9tZXRyeTIsIGNoZXN0c01hdGVyaWFsKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNoZXN0c0dyb3VwMik7XG5cbiAgICAgICAgbGV0IGNoZXN0c0dlb21ldHJ5MyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0NoZXN0KCksIGNoZXN0c0V4dHJ1ZGVTZXR0aW5ncyk7XG4gICAgICAgIGNoZXN0c0dlb21ldHJ5My50cmFuc2xhdGUoMCwgMiwgNi41KTtcbiAgICAgICAgbGV0IGNoZXN0c0dyb3VwMyA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBjaGVzdHNHcm91cDMuYWRkKG5ldyBUSFJFRS5NZXNoKGNoZXN0c0dlb21ldHJ5MywgY2hlc3RzTWF0ZXJpYWwpKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hlc3RzR3JvdXAzKTtcblxuICAgICAgICAvL+ajmui2s1xuICAgICAgICBsZXQgY2hlc3RHZW9tZXRyeTQgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjEsIDAuMSwgMywgMzIpO1xuICAgICAgICBjaGVzdEdlb21ldHJ5NC50cmFuc2xhdGUoMi44LCAxLjUsIDguOCk7XG4gICAgICAgIGxldCBjaGVzdE1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6IG5ldyBUSFJFRS5Db2xvcigxLCAxLCAxKX0pO1xuICAgICAgICBsZXQgY2hlc3RHcm91cDQgPSBuZXcgVEhSRUUuTWVzaChjaGVzdEdlb21ldHJ5NCwgY2hlc3RNYXRlcmlhbDIpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjaGVzdEdyb3VwNCk7XG5cbiAgICAgICAgbGV0IGNoZXN0R2VvbWV0cnk1ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4xLCAwLjEsIDMsIDMyKTtcbiAgICAgICAgY2hlc3RHZW9tZXRyeTUudHJhbnNsYXRlKC0yLjYsIDEuNSwgOC44KTtcbiAgICAgICAgbGV0IGNoZXN0R3JvdXA1ID0gbmV3IFRIUkVFLk1lc2goY2hlc3RHZW9tZXRyeTUsIGNoZXN0TWF0ZXJpYWwyKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2hlc3RHcm91cDUpO1xuXG4gICAgICAgIGxldCBjaGVzdEdlb21ldHJ5NiA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMSwgMC4xLCAzLCAzMik7XG4gICAgICAgIGNoZXN0R2VvbWV0cnk2LnRyYW5zbGF0ZSgtMi42LCAxLjUsIDYuOCk7XG4gICAgICAgIGxldCBjaGVzdEdyb3VwNiA9IG5ldyBUSFJFRS5NZXNoKGNoZXN0R2VvbWV0cnk2LCBjaGVzdE1hdGVyaWFsMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNoZXN0R3JvdXA2KTtcblxuICAgICAgICBsZXQgY2hlc3RHZW9tZXRyeTcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjEsIDAuMSwgMywgMzIpO1xuICAgICAgICBjaGVzdEdlb21ldHJ5Ny50cmFuc2xhdGUoMi44LCAxLjUsIDYuOCk7XG4gICAgICAgIGxldCBjaGVzdEdyb3VwNyA9IG5ldyBUSFJFRS5NZXNoKGNoZXN0R2VvbWV0cnk3LCBjaGVzdE1hdGVyaWFsMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNoZXN0R3JvdXA3KTtcblxuICAgICAgICAvL+aZguioiFxuICAgICAgICBsZXQgZHJhd0Nsb2NrID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oLTcuNywgNi41KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtNy43LCA4LjUpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKC01LjcsIDguNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTUuNywgNi41KTtcblxuICAgICAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsb2NrRXh0cnVkZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgc3RlcHM6IDEsXG4gICAgICAgICAgICBkZXB0aDogMC41LFxuICAgICAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWxTaXplOiAyLFxuICAgICAgICAgICAgYmV2ZWxTZWdtZW50czogM1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjbG9ja0dlb21ldHJ5ID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3Q2xvY2soKSwgY2xvY2tFeHRydWRlU2V0dGluZ3MpO1xuICAgICAgICBjbG9ja0dlb21ldHJ5LnRyYW5zbGF0ZSgwLCAwLCA4LjUpO1xuICAgICAgICBsZXQgY2xvY2tNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6bmV3IFRIUkVFLkNvbG9yKFwicmdiKDI1NSwgMjUwLCAyNTUpXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgY2xvY2tHcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBjbG9ja0dyb3VwLmFkZChuZXcgVEhSRUUuTWVzaChjbG9ja0dlb21ldHJ5LCBjbG9ja01hdGVyaWFsKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGNsb2NrR3JvdXApO1xuXG4gICAgICAgIC8v6YedXG4gICAgICAgIGxldCBkcmF3Q2xvY2syID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMC4wNSwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMC4wNSwgMC43KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMC4wNSwgMC43KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMC4wNSwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkcmF3Q2xvY2szID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMC4wNSwgMCk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMC4wNSwgMC43KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMC4wNSwgMC43KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMC4wNSwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbG9ja0V4dHJ1ZGVTZXR0aW5nczIgPSB7XG4gICAgICAgICAgICBzdGVwczogMSxcbiAgICAgICAgICAgIGRlcHRoOiAwLjIsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDQsXG4gICAgICAgICAgICBiZXZlbFNpemU6IDIsXG4gICAgICAgICAgICBiZXZlbFNlZ21lbnRzOiAzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNsb2NrR2VvbWV0cnkyID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3Q2xvY2syKCksIGNsb2NrRXh0cnVkZVNldHRpbmdzMik7XG4gICAgICAgIGxldCBjbG9ja01hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7Y29sb3I6bmV3IFRIUkVFLkNvbG9yKFwicmdiKDAsIDAsIDApXCIpLCBzaWRlOlRIUkVFLkRvdWJsZVNpZGUsZmxhdFNoYWRpbmc6dHJ1ZX0pO1xuICAgICAgICBsZXQgY2xvY2tHcm91cDIgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgY2xvY2tHcm91cDIuYWRkKG5ldyBUSFJFRS5NZXNoKGNsb2NrR2VvbWV0cnkyLCBjbG9ja01hdGVyaWFsMikpO1xuXG4gICAgICAgIGxldCBjbG9ja0dlb21ldHJ5MyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoZHJhd0Nsb2NrMygpLCBjbG9ja0V4dHJ1ZGVTZXR0aW5nczIpO1xuICAgICAgICBsZXQgY2xvY2tHcm91cDMgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgY2xvY2tHcm91cDMuYWRkKG5ldyBUSFJFRS5NZXNoKGNsb2NrR2VvbWV0cnkzLCBjbG9ja01hdGVyaWFsMikpO1xuXG4gICAgICAgIGxldCBsZXJwID0gKHAwOiBUSFJFRS5WZWN0b3IzLCBwMTogVEhSRUUuVmVjdG9yMywgdDogbnVtYmVyKSA6IChUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVEhSRUUuVmVjdG9yMygoMS4wIC0gdCkgKiBwMC54ICsgdCAqIHAxLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMS4wIC0gdCkgKiBwMC55ICsgdCAqIHAxLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMS4wIC0gdCkgKiBwMC56ICsgdCAqIHAxLnopO1xuICAgICAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gcDAubXVsdGlwbHlTY2FsYXIoKDEuMCAtIHQpKS5hZGQocDEubXVsdGlwbHlTY2FsYXIoKHQpKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xvY2sxID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgICAgIGxldCB0MSA9IDA7XG4gICAgICAgIGNvbnN0IGNsb2NrMiA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgICAgICBsZXQgdDIgPSAwO1xuXG4gICAgICAgIGxldCBwb2ludHMgOiBUSFJFRS5WZWN0b3IzW10gPSBbXVxuICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNi43LCA3LjUsIDguNCkpO1xuICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtNi43LCA3LjUsIDguNCkpO1xuXG4gICAgICAgIGxldCBjbG9ja1VwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjbG9ja1VwZGF0ZSk7XG4gICAgICAgICAgICB0MSArPSBjbG9jazEuZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgIGlmKHQxID4gMTApIHtcbiAgICAgICAgICAgICAgICB0MSAtPSAxMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGxlcnAocG9pbnRzWzBdLCBwb2ludHNbMV0sIHQxKTtcbiAgICAgICAgICAgIGNsb2NrR3JvdXAyLnBvc2l0aW9uLmNvcHkocG9zKTtcblxuICAgICAgICAgICAgY2xvY2tHcm91cDIucm90YXRpb24ueiA9IE1hdGguUEkgKiAwLjIgKiB0MTtcbiAgICAgICAgfVxuICAgICAgICBjbG9ja1VwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjbG9ja0dyb3VwMik7XG5cbiAgICAgICAgbGV0IGNsb2NrVXBkYXRlMiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjbG9ja1VwZGF0ZTIpO1xuICAgICAgICAgICAgdDIgKz0gY2xvY2syLmdldERlbHRhKCk7XG4gICAgICAgICAgICBpZih0MiA+IDQwKSB7XG4gICAgICAgICAgICAgICAgdDIgLT0gNDA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBsZXJwKHBvaW50c1swXSwgcG9pbnRzWzFdLCB0Mik7XG4gICAgICAgICAgICBjbG9ja0dyb3VwMy5wb3NpdGlvbi5jb3B5KHBvcyk7XG5cbiAgICAgICAgICAgIGNsb2NrR3JvdXAzLnJvdGF0aW9uLnogPSBNYXRoLlBJICogMC4wNSAqIHQyO1xuICAgICAgICB9XG4gICAgICAgIGNsb2NrVXBkYXRlMigpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChjbG9ja0dyb3VwMyk7XG5cbiAgICAgICAgLy/jg4njgqJcbiAgICAgICAgbGV0IGRyYXdEb29yID0gKCk9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8g5b2i54q244KS5a6a576pXG4gICAgICAgICAgICBzaGFwZS5tb3ZlVG8oOS44LCAwKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyg5LjgsIDApO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDEwLCA4KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygxMCwgOCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkb29yRXh0cnVkZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgc3RlcHM6IDEsXG4gICAgICAgICAgICBkZXB0aDogNCxcbiAgICAgICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBiZXZlbFRoaWNrbmVzczogNCxcbiAgICAgICAgICAgIGJldmVsU2l6ZTogMixcbiAgICAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgZG9vckdlb21ldHJ5ID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3RG9vcigpLCBkb29yRXh0cnVkZVNldHRpbmdzKTtcbiAgICAgICAgZG9vckdlb21ldHJ5LnRyYW5zbGF0ZSgwLCAwLCAtOCk7XG4gICAgICAgIGxldCBkb29yTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigyNTUsIDI1MCwgMjQwKVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgbGV0IGRvb3JHcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgICAgICBkb29yR3JvdXAuYWRkKG5ldyBUSFJFRS5NZXNoKGRvb3JHZW9tZXRyeSwgZG9vck1hdGVyaWFsKSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGRvb3JHcm91cCk7XG5cbiAgICAgICAgLy/jg4njgqLjg47jg5ZcbiAgICAgICAgbGV0IGRyYXdEb29yMiA9ICgpPT4ge1xuICAgICAgICAgICAgLy8gVEhSRUUuU2hhcGXjgpLkvZzmiJBcbiAgICAgICAgICAgIGxldCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIOW9oueKtuOCkuWumue+qVxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKDkuNywgMy45KTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbyg5LjcsIDMuOSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMTAuMiwgNC4zKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygxMC4yLCA0LjMpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZG9vckV4dHJ1ZGVTZXR0aW5nczIgPSB7XG4gICAgICAgICAgICBzdGVwczogMSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGJldmVsVGhpY2tuZXNzOiA0LFxuICAgICAgICAgICAgYmV2ZWxTaXplOiAyLFxuICAgICAgICAgICAgYmV2ZWxTZWdtZW50czogM1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBkb29yR2VvbWV0cnkyID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkcmF3RG9vcjIoKSwgZG9vckV4dHJ1ZGVTZXR0aW5nczIpO1xuICAgICAgICBkb29yR2VvbWV0cnkyLnRyYW5zbGF0ZSgwLCAwLCAtNS4yKTtcbiAgICAgICAgbGV0IGRvb3JNYXRlcmlhbDIgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe2NvbG9yOm5ldyBUSFJFRS5Db2xvcihcInJnYigxMDEsIDExMywgMTI4KVwiKSwgc2lkZTpUSFJFRS5Eb3VibGVTaWRlLGZsYXRTaGFkaW5nOnRydWV9KTtcbiAgICAgICAgbGV0IGRvb3JHcm91cDIgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgZG9vckdyb3VwMi5hZGQobmV3IFRIUkVFLk1lc2goZG9vckdlb21ldHJ5MiwgZG9vck1hdGVyaWFsMikpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChkb29yR3JvdXAyKTtcblxuICAgICAgICAvL+OCq+ODvOODmuODg+ODiFxuICAgICAgICBjb25zdCBjYXJwZXRWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgLTEsIDAuMSwgLTYsXG4gICAgICAgICAgICA5LCAwLjEsIDMsXG4gICAgICAgICAgICA5LCAwLjEsIC02LFxuXG4gICAgICAgICAgICA5LCAwLjEsIDMsXG4gICAgICAgICAgICAtMSwgMC4xLCAtNixcbiAgICAgICAgICAgIC0xLCAwLjEsIDNcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGNhcnBldEdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAgIGNhcnBldEdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSggY2FycGV0VmVydGljZXMsIDMgKSApO1xuICAgICAgICBjb25zdCBjYXJwZXRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKFwicmdiKDE5NiwgMjE2LCAyNDIpXCIpIH0gKTtcbiAgICAgICAgY29uc3QgY2FycGV0TWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBjYXJwZXRHZW9tZXRyeSwgY2FycGV0TWF0ZXJpYWwgKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY2FycGV0TWVzaCk7XG5cbiAgICAgICAgLy/lnLDpnaLkvZzmiJBcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDIwLCAxOCk7XG4gICAgICAgIGNvbnN0IHBsYW5lQ29sb3IgPSAgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoNzgsIDY5LCA3NClcIikgfSApO1xuICAgICAgICBjb25zdCBwbGFuZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZUNvbG9yKTtcbiAgICAgICAgcGxhbmVNZXNoLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlOyAvLyDkuKHpnaJcbiAgICAgICAgcGxhbmVNZXNoLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoKTtcblxuICAgICAgICAvL+WjgeS9nOaIkFxuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgLTEwLCAgMCwgLTksIC8vMeOBpOebruOBrumggueCueW6p+aomVxuICAgICAgICAgICAgMTAsICAwLCAtOSwgLy8y44Gk55uu44Gu6aCC54K55bqn5qiZXG4gICAgICAgICAgICAtMTAsIDEwLCAtOSwgLy8z44Gk55uu44Gu6aCC54K55bqn5qiZXG4gICAgICAgICAgICAxMCwgMCwgLTksXG4gICAgICAgICAgICAxMCwgMTAsIC05LFxuICAgICAgICAgICAgLTEwLCAxMCwgLTksXG5cbiAgICAgICAgICAgIC0xMCwgMCwgOSxcbiAgICAgICAgICAgIC0xMCwgMCwgLTksXG4gICAgICAgICAgICAtMTAsIDEwLCA5LFxuICAgICAgICAgICAgLTEwLCAxMCwgOSxcbiAgICAgICAgICAgIC0xMCwgMCwgLTksXG4gICAgICAgICAgICAtMTAsIDEwLCAtOSxcblxuICAgICAgICAgICAgLTEwLCAxMCwgOSxcbiAgICAgICAgICAgIDEwLCAxMCwgOSxcbiAgICAgICAgICAgIDEwLCAwLCA5LFxuICAgICAgICAgICAgLTEwLCAxMCwgOSxcbiAgICAgICAgICAgIDEwLCAwLCA5LFxuICAgICAgICAgICAgLTEwLCAwLCA5LFxuXG4gICAgICAgICAgICAxMCwxMCwgOSxcbiAgICAgICAgICAgIDEwLCAxMCwgLTksXG4gICAgICAgICAgICAxMCwgMCwgLTksXG4gICAgICAgICAgICAxMCwgMTAsIDksXG4gICAgICAgICAgICAxMCwgMCwgLTksXG4gICAgICAgICAgICAxMCwgMCwgOVxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIHZlcnRpY2VzLCAzICkgKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoIHsgY29sb3I6IG5ldyBUSFJFRS5Db2xvcigxLCAxLCAxKSB9ICk7XG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG1lc2gpO1xuXG4gICAgICAgIC8v5aSp5LqVXG4gICAgICAgIGNvbnN0IHRvcFZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgICAgICAtMTAsIDEwLCAtOSxcbiAgICAgICAgICAgIDEwLCAxMCwgLTksXG4gICAgICAgICAgICAxMCwgMTAsIDksXG5cbiAgICAgICAgICAgIC0xMCwgMTAsIC05LFxuICAgICAgICAgICAgMTAsIDEwLCA5LFxuICAgICAgICAgICAgLTEwLCAxMCwgOVxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgdG9wR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgICAgdG9wR2VvbWV0cnkuc2V0QXR0cmlidXRlKCAncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKCB0b3BWZXJ0aWNlcywgMyApICk7XG4gICAgICAgIGNvbnN0IHRvcE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiBuZXcgVEhSRUUuQ29sb3IoXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIikgfSApO1xuICAgICAgICBjb25zdCB0b3BNZXNoID0gbmV3IFRIUkVFLk1lc2goIHRvcEdlb21ldHJ5LCB0b3BNYXRlcmlhbCApO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0b3BNZXNoKTtcblxuICAgICAgICAvLyAvLyDjgrDjg6rjg4Pjg4nooajnpLpcbiAgICAgICAgLy8gY29uc3QgZ3JpZEhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKCAyMCwpO1xuICAgICAgICAvLyB0aGlzLnNjZW5lLmFkZCggZ3JpZEhlbHBlciApO1xuXG4gICAgICAgIC8vIC8vIOi7uOihqOekulxuICAgICAgICAvLyBjb25zdCBheGVzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoIDUgKTtcbiAgICAgICAgLy8gdGhpcy5zY2VuZS5hZGQoIGF4ZXNIZWxwZXIgKTtcbiAgICAgICAgXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZhZWJkNyk7XG4gICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAyLCAwKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgICAgIC8vIHRoaXMubGlnaHQyID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmYWViZDcsIDAuNSk7XG4gICAgICAgIC8vIGNvbnN0IGx2ZWMyID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMC41LCAwKS5ub3JtYWxpemUoKTtcbiAgICAgICAgLy8gdGhpcy5saWdodDIucG9zaXRpb24uc2V0KGx2ZWMyLngsIGx2ZWMyLnksIGx2ZWMyLnopO1xuICAgICAgICAvLyB0aGlzLnNjZW5lLmFkZCh0aGlzLmxpZ2h0Mik7XG5cbiAgICAgICAgbGV0IEFtYmllbnRsaWdodDEgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwLCAxLjUpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChBbWJpZW50bGlnaHQxKTtcblxuICAgICAgICBsZXQgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuICAgICAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgwLCA5LCAwKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbiAgICAgICAgbGV0IHVwZGF0ZTogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAodGltZSkgPT4ge1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICB9XG4gICAgXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gbmV3IFRocmVlSlNDb250YWluZXIoKTtcblxuICAgIGxldCB2aWV3cG9ydCA9IGNvbnRhaW5lci5jcmVhdGVSZW5kZXJlckRPTSg2NDAsIDQ4MCwgbmV3IFRIUkVFLlZlY3RvcjMoLTE1LCAxNSwgLTE1KSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3RocmVlX2V4YW1wbGVzX2pzbV9jb250cm9sc19PcmJpdENvbnRyb2xzX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9