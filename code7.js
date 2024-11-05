gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDStartMenuObjects1= [];
gdjs.EndScreenCode.GDStartMenuObjects2= [];
gdjs.EndScreenCode.GDCheckUPObjects1= [];
gdjs.EndScreenCode.GDCheckUPObjects2= [];
gdjs.EndScreenCode.GDBGObjects1= [];
gdjs.EndScreenCode.GDBGObjects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDStartMenuObjects1Objects = Hashtable.newFrom({"StartMenu": gdjs.EndScreenCode.GDStartMenuObjects1});
gdjs.EndScreenCode.asyncCallback13081236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Preloader", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback13081236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDCheckUPObjects1Objects = Hashtable.newFrom({"CheckUP": gdjs.EndScreenCode.GDCheckUPObjects1});
gdjs.EndScreenCode.userFunc0x95e108 = function GDJSInlineCode(runtimeScene) {
"use strict";
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'https://changellenge.com/event/bca-2025/?utm_source=miniapp&utm_medium=mts&utm_campaign=mts';
  } else {
    window.open('https://changellenge.com/event/bca-2025/?utm_source=miniapp&utm_medium=mts&utm_campaign=mts', '_blank');
  }
};
gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.EndScreenCode.userFunc0x95e108(runtimeScene);

}


};gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{ //Subevents
gdjs.EndScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartMenu"), gdjs.EndScreenCode.GDStartMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDStartMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckUP"), gdjs.EndScreenCode.GDCheckUPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDCheckUPObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDStartMenuObjects1.length = 0;
gdjs.EndScreenCode.GDStartMenuObjects2.length = 0;
gdjs.EndScreenCode.GDCheckUPObjects1.length = 0;
gdjs.EndScreenCode.GDCheckUPObjects2.length = 0;
gdjs.EndScreenCode.GDBGObjects1.length = 0;
gdjs.EndScreenCode.GDBGObjects2.length = 0;

gdjs.EndScreenCode.eventsList4(runtimeScene);
gdjs.EndScreenCode.GDStartMenuObjects1.length = 0;
gdjs.EndScreenCode.GDStartMenuObjects2.length = 0;
gdjs.EndScreenCode.GDCheckUPObjects1.length = 0;
gdjs.EndScreenCode.GDCheckUPObjects2.length = 0;
gdjs.EndScreenCode.GDBGObjects1.length = 0;
gdjs.EndScreenCode.GDBGObjects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
