gdjs.SubmitScreenCode = {};
gdjs.SubmitScreenCode.localVariables = [];
gdjs.SubmitScreenCode.GDNewSprite2Objects1= [];
gdjs.SubmitScreenCode.GDNewSprite2Objects2= [];
gdjs.SubmitScreenCode.GDSubmitObjects1= [];
gdjs.SubmitScreenCode.GDSubmitObjects2= [];
gdjs.SubmitScreenCode.GDNameEntryObjects1= [];
gdjs.SubmitScreenCode.GDNameEntryObjects2= [];
gdjs.SubmitScreenCode.GDTelegramEntryObjects1= [];
gdjs.SubmitScreenCode.GDTelegramEntryObjects2= [];
gdjs.SubmitScreenCode.GDsendObjects1= [];
gdjs.SubmitScreenCode.GDsendObjects2= [];
gdjs.SubmitScreenCode.GDbgInputObjects1= [];
gdjs.SubmitScreenCode.GDbgInputObjects2= [];
gdjs.SubmitScreenCode.GDbgInput2Objects1= [];
gdjs.SubmitScreenCode.GDbgInput2Objects2= [];
gdjs.SubmitScreenCode.GDprivate_9595policyObjects1= [];
gdjs.SubmitScreenCode.GDprivate_9595policyObjects2= [];
gdjs.SubmitScreenCode.GDNewSprite3Objects1= [];
gdjs.SubmitScreenCode.GDNewSprite3Objects2= [];
gdjs.SubmitScreenCode.GDNewSprite4Objects1= [];
gdjs.SubmitScreenCode.GDNewSprite4Objects2= [];


gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.SubmitScreenCode.GDSubmitObjects1});
gdjs.SubmitScreenCode.asyncCallback20422908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}gdjs.SubmitScreenCode.localVariables.length = 0;
}
gdjs.SubmitScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SubmitScreenCode.asyncCallback20422908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SubmitScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameEntry"), gdjs.SubmitScreenCode.GDNameEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("TelegramEntry"), gdjs.SubmitScreenCode.GDTelegramEntryObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.SubmitScreenCode.GDNameEntryObjects1.length === 0 ) ? "" :gdjs.SubmitScreenCode.GDNameEntryObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("name").setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("score").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("telegramNick").setString((( gdjs.SubmitScreenCode.GDTelegramEntryObjects1.length === 0 ) ? "" :gdjs.SubmitScreenCode.GDTelegramEntryObjects1[0].getText()));
}{gdjs.evtTools.network.sendAsyncRequest("https://mts-game.ru/addscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(4)), "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.SubmitScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.SubmitScreenCode.GDNewSprite3Objects1});
gdjs.SubmitScreenCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScreen", false);
}}

}


};gdjs.SubmitScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NameEntry"), gdjs.SubmitScreenCode.GDNameEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.SubmitScreenCode.GDSubmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("TelegramEntry"), gdjs.SubmitScreenCode.GDTelegramEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("bgInput"), gdjs.SubmitScreenCode.GDbgInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("bgInput2"), gdjs.SubmitScreenCode.GDbgInput2Objects1);
gdjs.copyArray(runtimeScene.getObjects("send"), gdjs.SubmitScreenCode.GDsendObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "bg_sound.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDbgInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDbgInputObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDbgInput2Objects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDbgInput2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDsendObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDsendObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDSubmitObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDSubmitObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDTelegramEntryObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTelegramEntryObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.SubmitScreenCode.GDNameEntryObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDNameEntryObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.SubmitScreenCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDSubmitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.SubmitScreenCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.SubmitScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SubmitScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects1.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects2.length = 0;
gdjs.SubmitScreenCode.GDNameEntryObjects1.length = 0;
gdjs.SubmitScreenCode.GDNameEntryObjects2.length = 0;
gdjs.SubmitScreenCode.GDTelegramEntryObjects1.length = 0;
gdjs.SubmitScreenCode.GDTelegramEntryObjects2.length = 0;
gdjs.SubmitScreenCode.GDsendObjects1.length = 0;
gdjs.SubmitScreenCode.GDsendObjects2.length = 0;
gdjs.SubmitScreenCode.GDbgInputObjects1.length = 0;
gdjs.SubmitScreenCode.GDbgInputObjects2.length = 0;
gdjs.SubmitScreenCode.GDbgInput2Objects1.length = 0;
gdjs.SubmitScreenCode.GDbgInput2Objects2.length = 0;
gdjs.SubmitScreenCode.GDprivate_9595policyObjects1.length = 0;
gdjs.SubmitScreenCode.GDprivate_9595policyObjects2.length = 0;
gdjs.SubmitScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.SubmitScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite4Objects2.length = 0;

gdjs.SubmitScreenCode.eventsList3(runtimeScene);
gdjs.SubmitScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects1.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects2.length = 0;
gdjs.SubmitScreenCode.GDNameEntryObjects1.length = 0;
gdjs.SubmitScreenCode.GDNameEntryObjects2.length = 0;
gdjs.SubmitScreenCode.GDTelegramEntryObjects1.length = 0;
gdjs.SubmitScreenCode.GDTelegramEntryObjects2.length = 0;
gdjs.SubmitScreenCode.GDsendObjects1.length = 0;
gdjs.SubmitScreenCode.GDsendObjects2.length = 0;
gdjs.SubmitScreenCode.GDbgInputObjects1.length = 0;
gdjs.SubmitScreenCode.GDbgInputObjects2.length = 0;
gdjs.SubmitScreenCode.GDbgInput2Objects1.length = 0;
gdjs.SubmitScreenCode.GDbgInput2Objects2.length = 0;
gdjs.SubmitScreenCode.GDprivate_9595policyObjects1.length = 0;
gdjs.SubmitScreenCode.GDprivate_9595policyObjects2.length = 0;
gdjs.SubmitScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.SubmitScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.SubmitScreenCode.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['SubmitScreenCode'] = gdjs.SubmitScreenCode;
