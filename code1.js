gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDButton_9595PlayObjects1= [];
gdjs.MainMenuCode.GDButton_9595PlayObjects2= [];
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
gdjs.MainMenuCode.GDNewVideoObjects1= [];
gdjs.MainMenuCode.GDNewVideoObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
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


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "фоновая-музыка-2_mixdown.aac", true, 100, 1);
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


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDButton_9595PlayObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595PlayObjects2.length = 0;
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
gdjs.MainMenuCode.GDNewVideoObjects1.length = 0;
gdjs.MainMenuCode.GDNewVideoObjects2.length = 0;

gdjs.MainMenuCode.eventsList4(runtimeScene);
gdjs.MainMenuCode.GDButton_9595PlayObjects1.length = 0;
gdjs.MainMenuCode.GDButton_9595PlayObjects2.length = 0;
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
gdjs.MainMenuCode.GDNewVideoObjects1.length = 0;
gdjs.MainMenuCode.GDNewVideoObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
