gdjs.PreloaderCode = {};
gdjs.PreloaderCode.localVariables = [];
gdjs.PreloaderCode.GDBGObjects1= [];
gdjs.PreloaderCode.GDBGObjects2= [];
gdjs.PreloaderCode.GDProgressBarkaObjects1= [];
gdjs.PreloaderCode.GDProgressBarkaObjects2= [];
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1= [];
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2= [];
gdjs.PreloaderCode.GDloaderObjects1= [];
gdjs.PreloaderCode.GDloaderObjects2= [];


gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
gdjs.copyArray(runtimeScene.getObjects("loader"), gdjs.PreloaderCode.GDloaderObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(0);
}
}{for(var i = 0, len = gdjs.PreloaderCode.GDloaderObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDloaderObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 9));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LoaderTimer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) <= 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(14).getAsNumber() / 7 * 301);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoaderTimer") > 7;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};

gdjs.PreloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreloaderCode.GDBGObjects1.length = 0;
gdjs.PreloaderCode.GDBGObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDloaderObjects1.length = 0;
gdjs.PreloaderCode.GDloaderObjects2.length = 0;

gdjs.PreloaderCode.eventsList0(runtimeScene);
gdjs.PreloaderCode.GDBGObjects1.length = 0;
gdjs.PreloaderCode.GDBGObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects1.length = 0;
gdjs.PreloaderCode.GDBG_9595ProgressBarObjects2.length = 0;
gdjs.PreloaderCode.GDloaderObjects1.length = 0;
gdjs.PreloaderCode.GDloaderObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
