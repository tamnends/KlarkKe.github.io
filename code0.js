gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNinjaObjects1= [];
gdjs.Untitled_32sceneCode.GDNinjaObjects2= [];
gdjs.Untitled_32sceneCode.GDNinjaObjects3= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects3= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].setX(gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getX() + (100));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Animation").setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].setX(gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getX() + (-(100)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Animation").setAnimationName("roll");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("sp_atk");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
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
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 50;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNinjaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNinjaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNinjaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBGObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCloudObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallCloudObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
