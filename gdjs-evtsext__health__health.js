
gdjs.evtsExt__Health__Health = gdjs.evtsExt__Health__Health || {};

/**
 * Behavior generated from Health
 */
gdjs.evtsExt__Health__Health.Health = class Health extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Health__Health.Health.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Health = behaviorData.Health !== undefined ? behaviorData.Health : Number("100") || 0;
    this._behaviorData.DamageCooldown = behaviorData.DamageCooldown !== undefined ? behaviorData.DamageCooldown : Number("0") || 0;
    this._behaviorData.MaxHealth = behaviorData.MaxHealth !== undefined ? behaviorData.MaxHealth : Number("100") || 0;
    this._behaviorData.IsJustDamaged = false;
    this._behaviorData.CooldownActive = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Health !== newBehaviorData.Health)
      this._behaviorData.Health = newBehaviorData.Health;
    if (oldBehaviorData.DamageCooldown !== newBehaviorData.DamageCooldown)
      this._behaviorData.DamageCooldown = newBehaviorData.DamageCooldown;
    if (oldBehaviorData.MaxHealth !== newBehaviorData.MaxHealth)
      this._behaviorData.MaxHealth = newBehaviorData.MaxHealth;
    if (oldBehaviorData.IsJustDamaged !== newBehaviorData.IsJustDamaged)
      this._behaviorData.IsJustDamaged = newBehaviorData.IsJustDamaged;
    if (oldBehaviorData.CooldownActive !== newBehaviorData.CooldownActive)
      this._behaviorData.CooldownActive = newBehaviorData.CooldownActive;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Health: this._behaviorData.Health,
    DamageCooldown: this._behaviorData.DamageCooldown,
    MaxHealth: this._behaviorData.MaxHealth,
    IsJustDamaged: this._behaviorData.IsJustDamaged,
    CooldownActive: this._behaviorData.CooldownActive,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Health !== undefined)
      this._behaviorData.Health = networkSyncData.props.Health;
    if (networkSyncData.props.DamageCooldown !== undefined)
      this._behaviorData.DamageCooldown = networkSyncData.props.DamageCooldown;
    if (networkSyncData.props.MaxHealth !== undefined)
      this._behaviorData.MaxHealth = networkSyncData.props.MaxHealth;
    if (networkSyncData.props.IsJustDamaged !== undefined)
      this._behaviorData.IsJustDamaged = networkSyncData.props.IsJustDamaged;
    if (networkSyncData.props.CooldownActive !== undefined)
      this._behaviorData.CooldownActive = networkSyncData.props.CooldownActive;
  }

  // Properties:
  
  _getHealth() {
    return this._behaviorData.Health !== undefined ? this._behaviorData.Health : Number("100") || 0;
  }
  _setHealth(newValue) {
    this._behaviorData.Health = newValue;
  }
  _getDamageCooldown() {
    return this._behaviorData.DamageCooldown !== undefined ? this._behaviorData.DamageCooldown : Number("0") || 0;
  }
  _setDamageCooldown(newValue) {
    this._behaviorData.DamageCooldown = newValue;
  }
  _getMaxHealth() {
    return this._behaviorData.MaxHealth !== undefined ? this._behaviorData.MaxHealth : Number("100") || 0;
  }
  _setMaxHealth(newValue) {
    this._behaviorData.MaxHealth = newValue;
  }
  _getIsJustDamaged() {
    return this._behaviorData.IsJustDamaged !== undefined ? this._behaviorData.IsJustDamaged : false;
  }
  _setIsJustDamaged(newValue) {
    this._behaviorData.IsJustDamaged = newValue;
  }
  _toggleIsJustDamaged() {
    this._setIsJustDamaged(!this._getIsJustDamaged());
  }
  _getCooldownActive() {
    return this._behaviorData.CooldownActive !== undefined ? this._behaviorData.CooldownActive : false;
  }
  _setCooldownActive(newValue) {
    this._behaviorData.CooldownActive = newValue;
  }
  _toggleCooldownActive() {
    this._setCooldownActive(!this._getCooldownActive());
  }
}

/**
 * Shared data generated from Health
 */
gdjs.evtsExt__Health__Health.Health.SharedData = class HealthSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Health__Health.Health.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Health_HealthSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Health_HealthSharedData = new gdjs.evtsExt__Health__Health.Health.SharedData(
      initialData
    );
  }
  return instanceContainer._Health_HealthSharedData;
}

// Methods:
gdjs.evtsExt__Health__Health.Health.prototype.HitContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.HitContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].timerElapsedTime("DamageCooldown", (gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDamageCooldown())) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[k] = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCooldownActive()) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[k] = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1_1final, gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DamageValue")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].resetTimer("DamageCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCooldownActive(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustDamaged(true);
}
}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.Hit = function(DamageValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "DamageValue") return DamageValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HitContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HitContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.IsDead = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsDeadContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustDamaged(false);
}
}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJustDamaged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamaged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.IsJustDamagedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Health__Health.Health.prototype.HealContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.HealContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("HealValue")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(Math.min((gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()), (gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth())));
}
}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.Heal = function(HealValue, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "HealValue") return HealValue;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HealContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[k] = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHealth(Math.min((gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()), (gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxHealth())));
}
}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.SetHealth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.SetHealthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext = {};
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1= [];
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects2= [];


gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHealth()); }}}

}


};

gdjs.evtsExt__Health__Health.Health.prototype.Health = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Health"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Health"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Health__Health.Health.prototype.HealthContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("Health::Health", gdjs.evtsExt__Health__Health.Health);
