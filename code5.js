gdjs.ChooseCharacterCode = {};
gdjs.ChooseCharacterCode.localVariables = [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1= [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2= [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3= [];
gdjs.ChooseCharacterCode.GDCharacter1Objects1= [];
gdjs.ChooseCharacterCode.GDCharacter1Objects2= [];
gdjs.ChooseCharacterCode.GDCharacter1Objects3= [];
gdjs.ChooseCharacterCode.GDCharacter2Objects1= [];
gdjs.ChooseCharacterCode.GDCharacter2Objects2= [];
gdjs.ChooseCharacterCode.GDCharacter2Objects3= [];
gdjs.ChooseCharacterCode.GDCharacter3Objects1= [];
gdjs.ChooseCharacterCode.GDCharacter3Objects2= [];
gdjs.ChooseCharacterCode.GDCharacter3Objects3= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3= [];
gdjs.ChooseCharacterCode.GDBGObjects1= [];
gdjs.ChooseCharacterCode.GDBGObjects2= [];
gdjs.ChooseCharacterCode.GDBGObjects3= [];
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1= [];
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects2= [];
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects3= [];
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1= [];
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects2= [];
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects3= [];
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects1= [];
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects2= [];
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects3= [];
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1= [];
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects2= [];
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects3= [];
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1= [];
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects2= [];
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects3= [];
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1= [];
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects2= [];
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects3= [];
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1= [];
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects2= [];
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects3= [];


gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1});
gdjs.ChooseCharacterCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0).getAsNumber() - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


};gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRightArrowButtonObjects1Objects = Hashtable.newFrom({"RightArrowButton": gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1});
gdjs.ChooseCharacterCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0).getAsNumber() + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) > 3 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDButton_95959595ChooseObjects1Objects = Hashtable.newFrom({"Button_Choose": gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects1});
gdjs.ChooseCharacterCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "button-11.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(((gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(((gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


};gdjs.ChooseCharacterCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChooseCharacterCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRightArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChooseCharacterCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AntonDescriptionFrame"), gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character1"), gdjs.ChooseCharacterCode.GDCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character2"), gdjs.ChooseCharacterCode.GDCharacter2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character3"), gdjs.ChooseCharacterCode.GDCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("EgorDescriptionFrame"), gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("KarinaDescriptionFrame"), gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_AntonKodenko"), gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_EgorTechlid"), gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_KarinaBoss"), gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter1Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter2Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter3Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AntonDescriptionFrame"), gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character1"), gdjs.ChooseCharacterCode.GDCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character2"), gdjs.ChooseCharacterCode.GDCharacter2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character3"), gdjs.ChooseCharacterCode.GDCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("EgorDescriptionFrame"), gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("KarinaDescriptionFrame"), gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_AntonKodenko"), gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_EgorTechlid"), gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_KarinaBoss"), gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter2Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter1Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter3Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AntonDescriptionFrame"), gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Character1"), gdjs.ChooseCharacterCode.GDCharacter1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character2"), gdjs.ChooseCharacterCode.GDCharacter2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Character3"), gdjs.ChooseCharacterCode.GDCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("EgorDescriptionFrame"), gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("KarinaDescriptionFrame"), gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_AntonKodenko"), gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_EgorTechlid"), gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name_KarinaBoss"), gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter3Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter1Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacter2Objects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacter2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_Choose"), gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDButton_95959595ChooseObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChooseCharacterCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.ChooseCharacterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects1.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects2.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects3.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects3.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects1.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects2.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects3.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects3.length = 0;

gdjs.ChooseCharacterCode.eventsList3(runtimeScene);
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter1Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter2Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacter3Objects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects1.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects2.length = 0;
gdjs.ChooseCharacterCode.GDBGObjects3.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDAntonDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595AntonKodenkoObjects3.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects1.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects2.length = 0;
gdjs.ChooseCharacterCode.GDButton_9595ChooseObjects3.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDKarinaDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects1.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects2.length = 0;
gdjs.ChooseCharacterCode.GDEgorDescriptionFrameObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595KarinaBossObjects3.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects1.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects2.length = 0;
gdjs.ChooseCharacterCode.GDName_9595EgorTechlidObjects3.length = 0;


return;

}

gdjs['ChooseCharacterCode'] = gdjs.ChooseCharacterCode;
