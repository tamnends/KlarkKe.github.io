gdjs.RoolsCode = {};
gdjs.RoolsCode.localVariables = [];
gdjs.RoolsCode.GDButton_9595backToMenuObjects1= [];
gdjs.RoolsCode.GDButton_9595backToMenuObjects2= [];
gdjs.RoolsCode.GDBG_9595RoolsObjects1= [];
gdjs.RoolsCode.GDBG_9595RoolsObjects2= [];
gdjs.RoolsCode.GDNewSpriteObjects1= [];
gdjs.RoolsCode.GDNewSpriteObjects2= [];


gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDButton_95959595backToMenuObjects1Objects = Hashtable.newFrom({"Button_backToMenu": gdjs.RoolsCode.GDButton_9595backToMenuObjects1});
gdjs.RoolsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.RoolsCode.GDNewSpriteObjects1});
gdjs.RoolsCode.userFunc0x83cf78 = function GDJSInlineCode(runtimeScene) {
"use strict";
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'https://drive.google.com/file/d/1CcLW5FD4_y9ukgpzZDh-kJiqhXiTfETS/view';
  } else {
    window.open('https://drive.google.com/file/d/1CcLW5FD4_y9ukgpzZDh-kJiqhXiTfETS/view', '_blank');
  }
};
gdjs.RoolsCode.eventsList1 = function(runtimeScene) {

{


gdjs.RoolsCode.userFunc0x83cf78(runtimeScene);

}


};gdjs.RoolsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{ //Subevents
gdjs.RoolsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.RoolsCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_backToMenu"), gdjs.RoolsCode.GDButton_9595backToMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDButton_95959595backToMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.RoolsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.RoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolsCode.GDButton_9595backToMenuObjects1.length = 0;
gdjs.RoolsCode.GDButton_9595backToMenuObjects2.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;

gdjs.RoolsCode.eventsList3(runtimeScene);
gdjs.RoolsCode.GDButton_9595backToMenuObjects1.length = 0;
gdjs.RoolsCode.GDButton_9595backToMenuObjects2.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['RoolsCode'] = gdjs.RoolsCode;
