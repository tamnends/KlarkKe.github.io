var gdjs;(function(i){const o=new i.Logger("Video object PIXI renderer");class r{constructor(e,t){this._textureWasValid=!1;this._object=e,this._pixiObject=new PIXI.Sprite(t.getGame().getImageManager().getPIXIVideoTexture(this._object._videoResource)),t.getLayer("").getRenderer().addRendererObject(this._pixiObject,e.getZOrder()),this._pixiObject.anchor.x=.5,this._pixiObject.anchor.y=.5,this.updatePosition(),this.updateAngle(),this.updateOpacity(),this.updateVolume(),this.updateLoop()}getRendererObject(){return this._pixiObject}onDestroy(){this.stop(),this._pixiObject.destroy(!1)}ensureUpToDate(){!this._textureWasValid&&this._pixiObject.texture&&this._pixiObject.texture.valid&&(this.updatePosition(),this._textureWasValid=!0)}updatePosition(){this._pixiObject.position.x=this._object.x+this._pixiObject.width/2,this._pixiObject.position.y=this._object.y+this._pixiObject.height/2}updateLoop(){this._pixiObject._texture.baseTexture.resource.source.loop=this._object._loop}updateVolume(){this._pixiObject._texture.baseTexture.resource.source.volume=this._object._volume/100}updateAngle(){this._pixiObject.rotation=i.toRad(this._object.angle)}updateOpacity(){this._pixiObject.alpha=this._object._opacity/255}getWidth(){return this._pixiObject.width}getHeight(){return this._pixiObject.height}setWidth(e){this._pixiObject.width=e,this.updatePosition()}setHeight(e){this._pixiObject.height=e,this.updatePosition()}_getHTMLVideoElementSource(){if(!this._pixiObject.texture||!this._pixiObject.texture.baseTexture.resource.source)return null;const e=this._pixiObject.texture.baseTexture.resource.source;return e instanceof HTMLVideoElement?e:null}play(){const e=this._getHTMLVideoElementSource();if(!e)return;const t=e.play();t!==void 0&&t.then(()=>{}).catch(()=>{o.warn("The video did not start because: video is invalid or no interaction with the game has been captured before (this is blocked by the navigator: https://goo.gl/xX8pDD)")})}pause(){const e=this._getHTMLVideoElementSource();!e||e.pause()}stop(){const e=this._getHTMLVideoElementSource();!e||(e.pause(),e.currentTime=0)}setLoop(e){const t=this._getHTMLVideoElementSource();!t||(t.loop=e)}setMute(e){!this._getHTMLVideoElementSource()||(this._pixiObject._texture.baseTexture.resource.source.muted=e)}isMuted(){const e=this._getHTMLVideoElementSource();return e?e.muted:!1}setCurrentTime(e){const t=this._getHTMLVideoElementSource();!t||(t.currentTime=e)}setVolume(e){const t=this._getHTMLVideoElementSource();!t||(t.volume=e)}getVolume(){const e=this._getHTMLVideoElementSource();return e?e.volume:0}isPlayed(){const e=this._getHTMLVideoElementSource();return e?!e.paused&&!e.ended:!1}isLooped(){const e=this._getHTMLVideoElementSource();return e?e.loop:!1}getCurrentTime(){const e=this._getHTMLVideoElementSource();return e?e.currentTime:0}getDuration(){const e=this._getHTMLVideoElementSource();return e?e.duration:0}isEnded(){const e=this._getHTMLVideoElementSource();return e?e.ended:!1}setPlaybackSpeed(e){const t=this._getHTMLVideoElementSource();!t||(t.playbackRate=e)}getPlaybackSpeed(){const e=this._getHTMLVideoElementSource();return e?e.playbackRate:0}}i.VideoRuntimeObjectPixiRenderer=r,i.VideoRuntimeObjectRenderer=r})(gdjs||(gdjs={}));
//# sourceMappingURL=videoruntimeobject-pixi-renderer.js.map
