gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDLogoMTSObjects1= [];
gdjs.MainMenuCode.GDLogoMTSObjects2= [];
gdjs.MainMenuCode.GDText_9595MainScreenObjects1= [];
gdjs.MainMenuCode.GDText_9595MainScreenObjects2= [];
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1= [];
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2= [];
gdjs.MainMenuCode.GDButton_9595RulesObjects1= [];
gdjs.MainMenuCode.GDButton_9595RulesObjects2= [];
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects1= [];
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects2= [];
gdjs.MainMenuCode.GDintership2Objects1= [];
gdjs.MainMenuCode.GDintership2Objects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595ChooseCharacterObjects1Objects = Hashtable.newFrom({"Button_ChooseCharacter": gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseCharacter", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595LeaderBoardsObjects1Objects = Hashtable.newFrom({"Button_LeaderBoards": gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects1});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ShowLeaders", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595RulesObjects1Objects = Hashtable.newFrom({"Button_Rules": gdjs.MainMenuCode.GDButton_9595RulesObjects1});
gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rools", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDintership2Objects1Objects = Hashtable.newFrom({"intership2": gdjs.MainMenuCode.GDintership2Objects1});
gdjs.MainMenuCode.userFunc0x8d8208 = function GDJSInlineCode(runtimeScene) {
"use strict";
if (typeof Telegram !== 'undefined' && Telegram.WebApp && Telegram.WebApp.openLink) {
  Telegram.WebApp.openLink('https://job.mts.ru/programs/start');
} else {
  //window.location.href = 'https://job.mts.ru/programs/start';
  window.open('https://changellenge.com/event/bca-2025/', '_blank');
}
};
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainMenuCode.userFunc0x8d8208(runtimeScene);

}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}
{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_ChooseCharacter"), gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595ChooseCharacterObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_LeaderBoards"), gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595LeaderBoardsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Rules"), gdjs.MainMenuCode.GDButton_9595RulesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDButton_95959595RulesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("intership2"), gdjs.MainMenuCode.GDintership2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDintership2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainMenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDLogoMTSObjects1.length = 0;
gdjs.MainMenuCode.GDLogoMTSObjects2.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects1.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects2.length = 0;
gdjs.MainMenuCode.GDintership2Objects1.length = 0;
gdjs.MainMenuCode.GDintership2Objects2.length = 0;

gdjs.MainMenuCode.eventsList6(runtimeScene);
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDLogoMTSObjects1.length = 0;
gdjs.MainMenuCode.GDLogoMTSObjects2.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects1.length = 0;
gdjs.MainMenuCode.GDText_9595MainScreenObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595ChooseCharacterObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595RulesObjects2.length = 0;
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595LeaderBoardsObjects2.length = 0;
gdjs.MainMenuCode.GDintership2Objects1.length = 0;
gdjs.MainMenuCode.GDintership2Objects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
