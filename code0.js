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
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects1= [];
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects2= [];
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects3= [];
gdjs.Untitled_32sceneCode.GDCloud8Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud8Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud8Objects3= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud1Objects3= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects1= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects2= [];
gdjs.Untitled_32sceneCode.GDCloud2Objects3= [];
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects1= [];
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects2= [];
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects3= [];
gdjs.Untitled_32sceneCode.GDBG2Objects1= [];
gdjs.Untitled_32sceneCode.GDBG2Objects2= [];
gdjs.Untitled_32sceneCode.GDBG2Objects3= [];
gdjs.Untitled_32sceneCode.GDLightObjects1= [];
gdjs.Untitled_32sceneCode.GDLightObjects2= [];
gdjs.Untitled_32sceneCode.GDLightObjects3= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2= [];
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects3= [];
gdjs.Untitled_32sceneCode.GDRainObjects1= [];
gdjs.Untitled_32sceneCode.GDRainObjects2= [];
gdjs.Untitled_32sceneCode.GDRainObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDNinjaObjects1, gdjs.Untitled_32sceneCode.GDNinjaObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Animation").setAnimationName("dash");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNinjaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("light_dash");
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDNinjaObjects1, gdjs.Untitled_32sceneCode.GDNinjaObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects2[i].getBehavior("Animation").setAnimationName("dash");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNinjaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("light_dash");
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLightObjects1Objects = Hashtable.newFrom({"Light": gdjs.Untitled_32sceneCode.GDLightObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNinjaObjects1Objects = Hashtable.newFrom({"Ninja": gdjs.Untitled_32sceneCode.GDNinjaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLightObjects1Objects = Hashtable.newFrom({"Light": gdjs.Untitled_32sceneCode.GDLightObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

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
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveRight", (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointX("")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointY("")), "linear", 0.08, false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

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
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Tween").addObjectPositionTween2("MoveLeft", (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointX("")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getPointY("")), "linear", 0.08, false);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

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
    gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].getY() - (8));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud1Objects1[i].getY() - (7));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].setY(gdjs.Untitled_32sceneCode.GDCloud2Objects1[i].getY() - (9));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallCloudObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].setY(gdjs.Untitled_32sceneCode.GDSmallCloudObjects1[i].getY() - (10));
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
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCloud8Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCloud8Objects1[i].setPosition(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),1280);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLightObjects1Objects, (( gdjs.Untitled_32sceneCode.GDCloud8Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCloud8Objects1[0].getPointX("Light")), (( gdjs.Untitled_32sceneCode.GDCloud8Objects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDCloud8Objects1[0].getPointY("Light")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.Untitled_32sceneCode.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ninja"), gdjs.Untitled_32sceneCode.GDNinjaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNinjaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDLightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDLightObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDNinjaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLightObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLightObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNinjaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNinjaObjects1[i].getBehavior("Animation").setAnimationName("light_dash");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

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
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHeartScrollBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCloud8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud8Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDCloud2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenHouse1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBG2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBasicExplosionEnergyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRainObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRainObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRainObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
