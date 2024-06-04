gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNinjaObjects1= [];
gdjs.Untitled_32sceneCode.GDNinjaObjects2= [];
gdjs.Untitled_32sceneCode.GDBGObjects1= [];
gdjs.Untitled_32sceneCode.GDBGObjects2= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1= [];
gdjs.Untitled_32sceneCode.GDSmallCloudObjects2= [];
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects1= [];
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects2= [];
gdjs.Untitled_32sceneCode.GDCloud8Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud8Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects2= [];
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects1= [];
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects2= [];
gdjs.Untitled_32sceneCode.GDBG2Objects1= [];
gdjs.Untitled_32sceneCode.GDBG2Objects2= [];
gdjs.Untitled_32sceneCode.GDLightObjects1= [];
gdjs.Untitled_32sceneCode.GDLightObjects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

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
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeInProgress.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("dash");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveRight", (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointY("")), "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__IsSwipeInProgress.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("dash");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveLeft", (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointY("")), "linear", 0.1, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.Untitled_32sceneCode.GDCloud1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.Untitled_32sceneCode.GDCloud2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud8"), gdjs.Untitled_32sceneCode.GDCloud8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.Untitled_32sceneCode.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallCloud"), gdjs.Untitled_32sceneCode.GDSmallCloudObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud8Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].getY() - (7));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].getY() - (5));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].getY() - (6));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].setY(gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].getY() - (8));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLightObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLightObjects1[i].setPosition((( gdjs.Untitled_32sceneCode.GDCloud8Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCloud8Objects1[0].getPointX("Light")),(( gdjs.Untitled_32sceneCode.GDCloud8Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCloud8Objects1[0].getPointY("Light")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.Untitled_32sceneCode.GDCloud1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCloud1Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].getY() < -(200) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCloud1Objects1[k] = gdjs.Untitled_32sceneCode.GDCloud1Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCloud1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCloud1Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].setPosition(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),1280);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.Untitled_32sceneCode.GDCloud2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCloud2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].getY() < -(200) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCloud2Objects1[k] = gdjs.Untitled_32sceneCode.GDCloud2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCloud2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCloud2Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].setPosition(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),1280);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallCloud"), gdjs.Untitled_32sceneCode.GDSmallCloudObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].getY() < -(200) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[k] = gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSmallCloudObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].setPosition(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),1280);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud8"), gdjs.Untitled_32sceneCode.GDCloud8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCloud8Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].getY() < -(200) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCloud8Objects1[k] = gdjs.Untitled_32sceneCode.GDCloud8Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCloud8Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCloud8Objects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud8Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].setPosition(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),1280);
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
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
