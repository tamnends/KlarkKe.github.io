gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNinjaObjects1= [];
gdjs.Untitled_32sceneCode.GDNinjaObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "MiniMacro Sound - The Ninja Gaiden Soundtrack as Interpreted by MiniMacro Sound - 24 Swift Ninja II.mp3", true, 100, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getTouchX(runtimeScene, 0, "", 0));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getTouchY(runtimeScene, 0, "", 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, 0);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getTouchX(runtimeScene, 0, "", 0));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getTouchX(runtimeScene, 0, "", 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("right");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() > 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("left");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() > 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("roll");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() > 50);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("sp_atk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "left";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "right";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNinjaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNinjaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCloudObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
