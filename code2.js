gdjs.RoolsCode = {};
gdjs.RoolsCode.localVariables = [];
gdjs.RoolsCode.GDButton_9595backToMenuObjects1= [];
gdjs.RoolsCode.GDButton_9595backToMenuObjects2= [];
gdjs.RoolsCode.GDBG_9595RoolsObjects1= [];
gdjs.RoolsCode.GDBG_9595RoolsObjects2= [];


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


};gdjs.RoolsCode.eventsList1 = function(runtimeScene) {

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


};

gdjs.RoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolsCode.GDButton_9595backToMenuObjects1.length = 0;
gdjs.RoolsCode.GDButton_9595backToMenuObjects2.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;

gdjs.RoolsCode.eventsList1(runtimeScene);
gdjs.RoolsCode.GDButton_9595backToMenuObjects1.length = 0;
gdjs.RoolsCode.GDButton_9595backToMenuObjects2.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects1.length = 0;
gdjs.RoolsCode.GDBG_9595RoolsObjects2.length = 0;


return;

}

gdjs['RoolsCode'] = gdjs.RoolsCode;
