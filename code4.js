gdjs.ShowLeadersCode = {};
gdjs.ShowLeadersCode.localVariables = [];
gdjs.ShowLeadersCode.GDBGObjects1= [];
gdjs.ShowLeadersCode.GDBGObjects2= [];
gdjs.ShowLeadersCode.GDNameEntryObjects1= [];
gdjs.ShowLeadersCode.GDNameEntryObjects2= [];
gdjs.ShowLeadersCode.GDSubmitObjects1= [];
gdjs.ShowLeadersCode.GDSubmitObjects2= [];
gdjs.ShowLeadersCode.GDNewTextObjects1= [];
gdjs.ShowLeadersCode.GDNewTextObjects2= [];
gdjs.ShowLeadersCode.GDPlayerNameTextObjects1= [];
gdjs.ShowLeadersCode.GDPlayerNameTextObjects2= [];
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects1= [];
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2= [];
gdjs.ShowLeadersCode.GDLeaderBoardObjects1= [];
gdjs.ShowLeadersCode.GDLeaderBoardObjects2= [];
gdjs.ShowLeadersCode.GDNewSprite2Objects1= [];
gdjs.ShowLeadersCode.GDNewSprite2Objects2= [];


gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ShowLeadersCode.GDNewSprite2Objects1});
gdjs.ShowLeadersCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.ShowLeadersCode.GDPlayerNameTextObjects2});
gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2});
gdjs.ShowLeadersCode.eventsList1 = function(runtimeScene) {

};gdjs.ShowLeadersCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.sendAsyncRequest("https://mts-game.ru/getscores", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ShowLeadersCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ShowLeadersCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(5));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.ShowLeadersCode.GDPlayerNameTextObjects2.length = 0;

gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 10;
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDPlayerNameTextObjects2Objects, 50, 200 + runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() * 100, "Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ShowLeadersCode.mapOfGDgdjs_9546ShowLeadersCode_9546GDPlayerScoreTextObjects2Objects, 600, 200 + runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() * 100, "Layer");
}{for(var i = 0, len = gdjs.ShowLeadersCode.GDPlayerNameTextObjects2.length ;i < len;++i) {
    gdjs.ShowLeadersCode.GDPlayerNameTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()).getChild("name").getAsString());
}
}{for(var i = 0, len = gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2.length ;i < len;++i) {
    gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(5).getChild(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber()).getChild("score").getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}
}

}


};

gdjs.ShowLeadersCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShowLeadersCode.GDBGObjects1.length = 0;
gdjs.ShowLeadersCode.GDBGObjects2.length = 0;
gdjs.ShowLeadersCode.GDNameEntryObjects1.length = 0;
gdjs.ShowLeadersCode.GDNameEntryObjects2.length = 0;
gdjs.ShowLeadersCode.GDSubmitObjects1.length = 0;
gdjs.ShowLeadersCode.GDSubmitObjects2.length = 0;
gdjs.ShowLeadersCode.GDNewTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDNewTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDPlayerNameTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDPlayerNameTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDLeaderBoardObjects1.length = 0;
gdjs.ShowLeadersCode.GDLeaderBoardObjects2.length = 0;
gdjs.ShowLeadersCode.GDNewSprite2Objects1.length = 0;
gdjs.ShowLeadersCode.GDNewSprite2Objects2.length = 0;

gdjs.ShowLeadersCode.eventsList2(runtimeScene);
gdjs.ShowLeadersCode.GDBGObjects1.length = 0;
gdjs.ShowLeadersCode.GDBGObjects2.length = 0;
gdjs.ShowLeadersCode.GDNameEntryObjects1.length = 0;
gdjs.ShowLeadersCode.GDNameEntryObjects2.length = 0;
gdjs.ShowLeadersCode.GDSubmitObjects1.length = 0;
gdjs.ShowLeadersCode.GDSubmitObjects2.length = 0;
gdjs.ShowLeadersCode.GDNewTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDNewTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDPlayerNameTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDPlayerNameTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.ShowLeadersCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.ShowLeadersCode.GDLeaderBoardObjects1.length = 0;
gdjs.ShowLeadersCode.GDLeaderBoardObjects2.length = 0;
gdjs.ShowLeadersCode.GDNewSprite2Objects1.length = 0;
gdjs.ShowLeadersCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['ShowLeadersCode'] = gdjs.ShowLeadersCode;
