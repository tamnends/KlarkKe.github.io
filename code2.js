gdjs.RoolsCode = {};
gdjs.RoolsCode.localVariables = [];
gdjs.RoolsCode.GDNewSprite2Objects1= [];
gdjs.RoolsCode.GDNewSprite2Objects2= [];
gdjs.RoolsCode.GDNewSpriteObjects1= [];
gdjs.RoolsCode.GDNewSpriteObjects2= [];
gdjs.RoolsCode.GDNewTextObjects1= [];
gdjs.RoolsCode.GDNewTextObjects2= [];


gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.RoolsCode.GDNewSprite2Objects1});
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


};gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.RoolsCode.GDNewTextObjects1});
gdjs.RoolsCode.userFunc0xa4df38 = function GDJSInlineCode(runtimeScene) {
"use strict";
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'https://docs.google.com/document/d/1B_mwF2bDY8O92JtUbgPVR6Qvflemzb87TWc_FGYbERY/edit?usp=sharing';
  } else {
    window.open('https://docs.google.com/document/d/1B_mwF2bDY8O92JtUbgPVR6Qvflemzb87TWc_FGYbERY/edit?usp=sharing');
  }
};
gdjs.RoolsCode.eventsList1 = function(runtimeScene) {

{


gdjs.RoolsCode.userFunc0xa4df38(runtimeScene);

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

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.RoolsCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.RoolsCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.RoolsCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.RoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolsCode.GDNewSprite2Objects1.length = 0;
gdjs.RoolsCode.GDNewSprite2Objects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;
gdjs.RoolsCode.GDNewTextObjects1.length = 0;
gdjs.RoolsCode.GDNewTextObjects2.length = 0;

gdjs.RoolsCode.eventsList3(runtimeScene);
gdjs.RoolsCode.GDNewSprite2Objects1.length = 0;
gdjs.RoolsCode.GDNewSprite2Objects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;
gdjs.RoolsCode.GDNewTextObjects1.length = 0;
gdjs.RoolsCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['RoolsCode'] = gdjs.RoolsCode;
