import{b as to,c as eo,e as no,f as io,i as Ze,k as Ke}from"./chunk-QB6FLUPP.js";import{$a as ht,$b as Wt,A as pe,Ab as ve,B as Bi,Ba as Yi,Bb as Vt,Ca as $e,D as zi,Da as $i,E as mt,Eb as H,F as Ve,Fb as Gi,G as Pn,Gb as Bn,H as ji,Jb as Ht,L as Vi,Lb as yt,Mb as lt,N as He,Nb as U,O as Bt,Oa as kt,Ob as zn,Pb as Rt,Q,Qa as M,Qb as W,R as Ue,Rb as Y,V as f,Va as Z,Vb as Zi,W as k,Wa as K,Wb as Ut,Xa as rt,Xb as B,Y as g,Ya as St,Yb as Et,Z as ge,Zb as $,_ as s,_b as ye,a as D,ab as Ln,ac as tt,b as Dt,ba as ie,cc as Ki,d as ee,da as Hi,db as _,dc as qi,ea as Ui,eb as S,f as Be,fa as Nn,fb as h,fc as Qi,g as Ti,ga as Wi,h as p,ha as x,hb as Xi,i as ze,ia as y,ib as C,j as In,jb as ft,k as An,kc as jn,l as Tn,la as et,ma as I,mc as Xe,na as We,nc as Ji,o as q,ob as _e,p as Fi,pb as V,q as Fn,qa as xt,qb as at,qc as Yt,rb as st,rc as $t,s as z,t as ne,tc as N,ua as vt,uc as oe,v as Pi,va as j,vb as zt,w as je,wb as R,wc as Ge,x as Ni,xa as w,xb as E,y as Li,yb as jt,z as bt,za as Ye,zb as be}from"./chunk-WIMEJLBU.js";var jr=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(y)}),Vr=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function oo(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Vr.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var pt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=xt("ltr");change=new et;constructor(){let t=s(jr,{optional:!0});if(t){let e=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(oo(e||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vn;try{Vn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Vn=!1}var A=(()=>{class n{_platformId=s(Yi);isBrowser=this._platformId?io(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Vn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function we(n,o=0){return ro(n)?Number(n):arguments.length===2?o:0}function ro(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function gt(n){return n instanceof w?n.nativeElement:n}var ct=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(ct||{}),qe,Xt;function Qe(){if(Xt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Xt=!1,Xt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Xt=!0;else{let n=Element.prototype.scrollTo;n?Xt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):Xt=!1}}return Xt}function re(){if(typeof document!="object"||!document)return ct.NORMAL;if(qe==null){let n=document.createElement("div"),o=n.style;n.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),qe=ct.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,qe=n.scrollLeft===0?ct.NEGATED:ct.INVERTED),n.remove()}return qe}function Je(n){return n&&typeof n.connect=="function"&&!(n instanceof Ti)}var dt=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(dt||{}),tn=class{viewCacheSize=20;_viewCache=[];applyChanges(o,t,e,i,r){o.forEachOperation((a,l,c)=>{let u,d;if(a.previousIndex==null){let m=()=>e(a,l,c);u=this._insertView(m,c,t,i(a)),d=u?dt.INSERTED:dt.REPLACED}else c==null?(this._detachAndCacheView(l,t),d=dt.REMOVED):(u=this._moveView(l,c,t,i(a)),d=dt.MOVED);r&&r({context:u?.context,operation:d,record:a})})}detach(){for(let o of this._viewCache)o.destroy();this._viewCache=[]}_insertView(o,t,e,i){let r=this._insertViewFromCache(t,e);if(r){r.context.$implicit=i;return}let a=o();return e.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(o,t){let e=t.detach(o);this._maybeCacheView(e,t)}_moveView(o,t,e,i){let r=e.get(o);return e.move(r,t),r.context.$implicit=i,r}_maybeCacheView(o,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(o);else{let e=t.indexOf(o);e===-1?o.destroy():t.remove(e)}}_insertViewFromCache(o,t){let e=this._viewCache.pop();return e&&t.insert(e,o),e||null}};var X=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({})}return n})();var Hr=20,Ce=(()=>{class n{_ngZone=s(I);_platform=s(A);_renderer=s(rt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new p;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Hr){return this._platform.isBrowser?new Be(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(pe(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(bt(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_scrollableContainsElement(t,e){let i=gt(e),r=t.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Un=(()=>{class n{elementRef=s(w);scrollDispatcher=s(Ce);ngZone=s(I);dir=s(pt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new p;_renderer=s(St);_cleanupScroll;_elementScrolled=new p;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&re()!=ct.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),re()==ct.INVERTED?t.left=t.right:re()==ct.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Qe()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",i="right",r=this.elementRef.nativeElement;if(t=="top")return r.scrollTop;if(t=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?i:e:t=="end"&&(t=a?e:i),a&&re()==ct.INVERTED?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:a&&re()==ct.NEGATED?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Ur=20,Ot=(()=>{class n{_platform=s(A);_listeners;_viewportSize=null;_change=new p;_document=s(y);constructor(){let t=s(I),e=s(rt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[e.listen("window","resize",i),e.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),i=t.documentElement,r=i.getBoundingClientRect(),a=-r.top||t.body?.scrollTop||e.scrollY||i.scrollTop||0,l=-r.left||t.body?.scrollLeft||e.scrollX||i.scrollLeft||0;return{top:a,left:l}}change(t=Ur){return t>0?this._change.pipe(pe(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ao=new g("CDK_VIRTUAL_SCROLL_VIEWPORT");var Hn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({})}return n})(),De=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[X,Hn,X,Hn]})}return n})();var en=class{applyChanges(o,t,e,i,r){o.forEachOperation((a,l,c)=>{let u,d;if(a.previousIndex==null){let m=e(a,l,c);u=t.createEmbeddedView(m.templateRef,m.context,m.index),d=dt.INSERTED}else c==null?(t.remove(l),d=dt.REMOVED):(u=t.get(l),t.move(u,c),d=dt.MOVED);r&&r({context:u?.context,operation:d,record:a})})}detach(){}};var Xr=[[["caption"]],[["colgroup"],["col"]],"*"],Gr=["caption","colgroup, col","*"];function Zr(n,o){n&1&&U(0,2)}function Kr(n,o){n&1&&(R(0,"thead",0),H(1,1),E(),R(2,"tbody",0),H(3,2)(4,3),E(),R(5,"tfoot",0),H(6,4),E())}function qr(n,o){n&1&&H(0,1)(1,2)(2,3)(3,4)}var ut=new g("CDK_TABLE");var rn=(()=>{class n{template=s(K);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),an=(()=>{class n{template=s(K);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),co=(()=>{class n{template=s(K);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),ae=(()=>{class n{_table=s(ut,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(t){this._setNameInput(t)}_name;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(t){t!==this._stickyEnd&&(this._stickyEnd=t,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,i,r){if(e&1&&zn(r,rn,5)(r,an,5)(r,co,5),e&2){let a;W(a=Y())&&(i.cell=a.first),W(a=Y())&&(i.headerCell=a.first),W(a=Y())&&(i.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",N],stickyEnd:[2,"stickyEnd","stickyEnd",N]}})}return n})(),on=class{constructor(o,t){t.nativeElement.classList.add(...o._columnCssClassName)}},uo=(()=>{class n extends on{constructor(){super(s(ae),s(w))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[C]})}return n})();var mo=(()=>{class n extends on{constructor(){let t=s(ae),e=s(w);super(t,e);let i=t._table?._getCellRole();i&&e.nativeElement.setAttribute("role",i)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[C]})}return n})();var Yn=(()=>{class n{template=s(K);_differs=s($t);columns;_columnsDiffer;constructor(){}ngOnChanges(t){if(!this._columnsDiffer){let e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof ke?t.headerCell.template:this instanceof $n?t.footerCell.template:t.cell.template}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,features:[vt]})}return n})(),ke=(()=>{class n extends Yn{_table=s(ut,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(K),s($t))}ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",N]},features:[C,vt]})}return n})(),$n=(()=>{class n extends Yn{_table=s(ut,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(t){t!==this._sticky&&(this._sticky=t,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(K),s($t))}ngOnChanges(t){super.ngOnChanges(t)}hasStickyChanged(){let t=this._hasStickyChanged;return this.resetStickyChanged(),t}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",N]},features:[C,vt]})}return n})(),sn=(()=>{class n extends Yn{_table=s(ut,{optional:!0});when;constructor(){super(s(K),s($t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[C]})}return n})(),Gt=(()=>{class n{_viewContainer=s(ht);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Xn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,i){e&1&&H(0,0)},dependencies:[Gt],encapsulation:2})}return n})();var Gn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,i){e&1&&H(0,0)},dependencies:[Gt],encapsulation:2})}return n})(),ho=(()=>{class n{templateRef=s(K);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),so=["top","bottom","left","right"],Wn=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,t,e=!0,i=!0,r,a,l){this._isNativeHtmlTable=o,this._stickCellCss=t,this._isBrowser=e,this._needsPositionStickyOnElement=i,this.direction=r,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${t}-border-elem-top`,bottom:`${t}-border-elem-bottom`,left:`${t}-border-elem-left`,right:`${t}-border-elem-right`}}clearStickyPositioning(o,t){(t.includes("left")||t.includes("right"))&&this._removeFromStickyColumnReplayQueue(o);let e=[];for(let i of o)i.nodeType===i.ELEMENT_NODE&&e.push(i,...Array.from(i.children));Z({write:()=>{for(let i of e)this._removeStickyStyle(i,t)}},{injector:this._tableInjector})}updateStickyColumns(o,t,e,i=!0,r=!0){if(!o.length||!this._isBrowser||!(t.some(L=>L)||e.some(L=>L))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=o[0],l=a.children.length,c=this.direction==="rtl",u=c?"right":"left",d=c?"left":"right",m=t.lastIndexOf(!0),b=e.indexOf(!0),v,P,T;r&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...t],stickyEndStates:[...e]}),Z({earlyRead:()=>{v=this._getCellWidths(a,i),P=this._getStickyStartColumnPositions(v,t),T=this._getStickyEndColumnPositions(v,e)},write:()=>{for(let L of o)for(let G=0;G<l;G++){let te=L.children[G];t[G]&&this._addStickyStyle(te,u,P[G],G===m),e[G]&&this._addStickyStyle(te,d,T[G],G===b)}this._positionListener&&v.some(L=>!!L)&&(this._positionListener.stickyColumnsUpdated({sizes:m===-1?[]:v.slice(0,m+1).map((L,G)=>t[G]?L:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:b===-1?[]:v.slice(b).map((L,G)=>e[G+b]?L:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,t,e){if(!this._isBrowser)return;let i=e==="bottom"?o.slice().reverse():o,r=e==="bottom"?t.slice().reverse():t,a=[],l=[],c=[];Z({earlyRead:()=>{for(let u=0,d=0;u<i.length;u++){if(!r[u])continue;a[u]=d;let m=i[u];c[u]=this._isNativeHtmlTable?Array.from(m.children):[m];let b=this._retrieveElementSize(m).height;d+=b,l[u]=b}},write:()=>{let u=r.lastIndexOf(!0);for(let d=0;d<i.length;d++){if(!r[d])continue;let m=a[d],b=d===u;for(let v of c[d])this._addStickyStyle(v,e,m,b)}e==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,t){this._isNativeHtmlTable&&Z({write:()=>{let e=o.querySelector("tfoot");e&&(t.some(i=>!i)?this._removeStickyStyle(e,["bottom"]):this._addStickyStyle(e,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,t){if(!o.classList.contains(this._stickCellCss))return;for(let i of t)o.style[i]="",o.classList.remove(this._borderCellCss[i]);so.some(i=>t.indexOf(i)===-1&&o.style[i])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex="",this._needsPositionStickyOnElement&&(o.style.position=""),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,t,e,i){o.classList.add(this._stickCellCss),i&&o.classList.add(this._borderCellCss[t]),o.style[t]=`${e}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(o){let t={top:100,bottom:10,left:1,right:1},e=0;for(let i of so)o.style[i]&&(e+=t[i]);return e?`${e}`:""}_getCellWidths(o,t=!0){if(!t&&this._cachedCellWidths.length)return this._cachedCellWidths;let e=[],i=o.children;for(let r=0;r<i.length;r++){let a=i[r];e.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=e,e}_getStickyStartColumnPositions(o,t){let e=[],i=0;for(let r=0;r<o.length;r++)t[r]&&(e[r]=i,i+=o[r]);return e}_getStickyEndColumnPositions(o,t){let e=[],i=0;for(let r=o.length;r>0;r--)t[r]&&(e[r]=i,i+=o[r]);return e}_retrieveElementSize(o){let t=this._elemSizeCache.get(o);if(t)return t;let e=o.getBoundingClientRect(),i={width:e.width,height:e.height};return this._resizeObserver&&(this._elemSizeCache.set(o,i),this._resizeObserver.observe(o,{box:"border-box"})),i}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let t=new Set(o);for(let e of this._updatedStickyColumnsParamsToReplay)e.rows=e.rows.filter(i=>!t.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(e=>!!e.rows.length)}_updateCachedSizes(o){let t=!1;for(let e of o){let i=e.borderBoxSize?.length?{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize}:{width:e.contentRect.width,height:e.contentRect.height};i.width!==this._elemSizeCache.get(e.target)?.width&&Qr(e.target)&&(t=!0),this._elemSizeCache.set(e.target,i)}t&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let e of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(e.rows,e.stickyStartStates,e.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Qr(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(o=>n.classList.contains(o))}var xe=new g("STICKY_POSITIONING_LISTENER");var Zn=(()=>{class n{viewContainer=s(ht);elementRef=s(w);constructor(){let t=s(ut);t._rowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","rowOutlet",""]]})}return n})(),Kn=(()=>{class n{viewContainer=s(ht);elementRef=s(w);constructor(){let t=s(ut);t._headerRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),qn=(()=>{class n{viewContainer=s(ht);elementRef=s(w);constructor(){let t=s(ut);t._footerRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),Qn=(()=>{class n{viewContainer=s(ht);elementRef=s(w);constructor(){let t=s(ut);t._noDataRowOutlet=this,t._outletAssigned()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Jn=(()=>{class n{_differs=s($t);_changeDetectorRef=s(Yt);_elementRef=s(w);_dir=s(pt,{optional:!0});_platform=s(A);_viewRepeater;_viewportRuler=s(Ot);_injector=s(x);_virtualScrollViewport=s(ao,{optional:!0,host:!0});_positionListener=s(xe,{optional:!0})||s(xe,{optional:!0,skipSelf:!0});_document=s(y);_data;_renderedRange;_onDestroy=new p;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new p;_footerRowStickyUpdates=new p;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let t=this._elementRef.nativeElement.getAttribute("role");return t==="grid"||t==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}_trackByFn;get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&(this._switchDataSource(t),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new p;_dataStream=new p;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=t,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(t){this._fixedLayout=t,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new et;viewChange=new ze({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new Xe("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((e,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Q(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new tn:new en,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(t=>{t?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Je(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let t=this._dataDiffer.diff(this._renderRows);if(!t){this._updateNoDataRow(),this.contentChanged.next();return}let e=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,e,(i,r,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{i.operation===dt.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(i=>{let r=e.get(i.currentIndex);r.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}setNoDataRow(t){this._customNoDataRow=t}updateStickyHeaderRowStyles(){let t=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=lo(this._headerRowOutlet,"thead");i&&(i.style.display=t.length?"":"none")}let e=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,e,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let t=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=lo(this._footerRowOutlet,"tfoot");i&&(i.style.display=t.length?"":"none")}let e=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,e,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,e),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...t,...e,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),t.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{let a=[];for(let l=0;l<e.length;l++)this._renderRows[l].rowDef===r&&a.push(e[l]);this._addStickyColumnStyles(a,r)}),i.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}stickyColumnsUpdated(t){this._positionListener?.stickyColumnsUpdated(t)}stickyEndColumnsUpdated(t){this._positionListener?.stickyEndColumnsUpdated(t)}stickyHeaderRowsUpdated(t){this._headerRowStickyUpdates.next(t),this._positionListener?.stickyHeaderRowsUpdated(t)}stickyFooterRowsUpdated(t){this._footerRowStickyUpdates.next(t),this._positionListener?.stickyFooterRowsUpdated(t)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let e=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||e,this._forceRecalculateCellWidths=e,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let t=[],e=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let r=this._renderedRange.start;r<e;r++){let a=this._data[r],l=this._getRenderRowsForData(a,r,i.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<l.length;c++){let u=l[c],d=this._cachedRenderRowsMap.get(u.data);d.has(u.rowDef)?d.get(u.rowDef).push(u):d.set(u.rowDef,[u]),t.push(u)}}return t}_getRenderRowsForData(t,e,i){return this._getRowDefs(t,e).map(a=>{let l=i&&i.has(a)?i.get(a):[];if(l.length){let c=l.shift();return c.dataIndex=e,c}else return{data:t,rowDef:a,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),nn(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(e=>{this._columnDefsByName.has(e.name),this._columnDefsByName.set(e.name,e)})}_cacheRowDefs(){this._headerRowDefs=nn(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=nn(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=nn(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let t=this._rowDefs.filter(e=>!e.when);this._defaultRowDef=t[0]}_renderUpdatedColumns(){let t=(a,l)=>{let c=!!l.getColumnsDiff();return a||c},e=this._rowDefs.reduce(t,!1);e&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(t,!1);i&&this._forceRenderHeaderRows();let r=this._footerRowDefs.reduce(t,!1);return r&&this._forceRenderFooterRows(),e||i||r}_switchDataSource(t){this._data=[],Je(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;Je(this.dataSource)?t=this.dataSource.connect(this):Fn(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=q(this.dataSource)),this._renderChangeSubscription=ne([t,this.viewChange]).pipe(Q(this._onDestroy)).subscribe(([e,i])=>{this._data=e||[],this._renderedRange=i,this._dataStream.next(e),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,e){let i=Array.from(e?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),r=i.map(l=>l.sticky),a=i.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(t,r,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(t){let e=[];for(let i=0;i<t.viewContainer.length;i++){let r=t.viewContainer.get(i);e.push(r.rootNodes[0])}return e}_getRowDefs(t,e){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(e,t));else{let r=this._rowDefs.find(a=>a.when&&a.when(e,t))||this._defaultRowDef;r&&i.push(r)}return i.length,i}_getEmbeddedViewArgs(t,e){let i=t.rowDef,r={$implicit:t.data};return{templateRef:i.template,context:r,index:e}}_renderRow(t,e,i,r={}){let a=t.viewContainer.createEmbeddedView(e.template,r,i);return this._renderCellTemplateForItem(e,r),a}_renderCellTemplateForItem(t,e){for(let i of this._getCellTemplates(t))Gt.mostRecentCellOutlet&&Gt.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,e);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let t=this._rowOutlet.viewContainer;for(let e=0,i=t.length;e<i;e++){let a=t.get(e).context;a.count=i,a.first=e===0,a.last=e===i-1,a.even=e%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[e].dataIndex,a.renderIndex=e):a.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return!t||!t.columns?[]:Array.from(t.columns,e=>{let i=this._columnDefsByName.get(e);return t.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let t=(e,i)=>e||i.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let t=this._dir?this._dir.value:"ltr",e=this._injector;this._stickyStyler=new Wn(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,t,this,e),(this._dir?this._dir.change:q()).pipe(Q(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(t){let e=typeof requestAnimationFrame<"u"?Tn:An;this.viewChange.next({start:0,end:0}),t.renderedRangeStream.pipe(pe(0,e),Q(this._onDestroy)).subscribe(this.viewChange),t.attach({dataStream:this._dataStream,measureRangeSize:(i,r)=>this._measureRangeSize(i,r)}),ne([t.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Q(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l){let c=r.offsets[a],u=i!==0?Math.max(i-c,c):-c;for(let d of l)d.style.top=`${-u}px`}}}),ne([t.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Q(this._onDestroy)).subscribe(([i,r])=>{if(!(!r.sizes||!r.offsets||!r.elements))for(let a=0;a<r.elements.length;a++){let l=r.elements[a];if(l)for(let c of l)c.style.bottom=`${i+r.offsets[a]}px`}})}_getOwnDefs(t){return t.filter(e=>!e._table||e._table===this)}_updateNoDataRow(){let t=this._customNoDataRow||this._noDataRow;if(!t)return;let e=this._rowOutlet.viewContainer.length===0;if(e===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(e){let r=i.createEmbeddedView(t.templateRef),a=r.rootNodes[0];if(r.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...t._contentClassNames);let l=a.querySelectorAll(t._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...t._cellClassNames)}}else i.clear();this._isShowingNoDataRow=e,this._changeDetectorRef.markForCheck()}_measureRangeSize(t,e){if(t.start>=t.end||e!=="vertical")return 0;let i=this.viewChange.value,r=this._rowOutlet.viewContainer;t.start<i.start||t.end>i.end;let a=t.start-i.start,l=t.end-t.start,c,u;for(let b=0;b<l;b++){let v=r.get(b+a);if(v&&v.rootNodes.length){c=u=v.rootNodes[0];break}}for(let b=l-1;b>-1;b--){let v=r.get(b+a);if(v&&v.rootNodes.length){u=v.rootNodes[v.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),m=u?.getBoundingClientRect?.();return d&&m?m.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,i,r){if(e&1&&zn(r,ho,5)(r,ae,5)(r,sn,5)(r,ke,5)(r,$n,5),e&2){let a;W(a=Y())&&(i._noDataRow=a.first),W(a=Y())&&(i._contentColumnDefs=a),W(a=Y())&&(i._contentRowDefs=a),W(a=Y())&&(i._contentHeaderRowDefs=a),W(a=Y())&&(i._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,i){e&2&&B("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",N],fixedLayout:[2,"fixedLayout","fixedLayout",N],recycleRows:[2,"recycleRows","recycleRows",N]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[tt([{provide:ut,useExisting:n},{provide:xe,useValue:null}])],ngContentSelectors:Gr,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,i){e&1&&(lt(Xr),U(0),U(1,1),at(2,Zr,1,0),at(3,Kr,7,0)(4,qr,4,0)),e&2&&(M(2),st(i._isServer?2:-1),M(),st(i._isNativeHtmlTable?3:4))},dependencies:[Kn,Zn,Qn,qn],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function nn(n,o){return n.concat(Array.from(o))}function lo(n,o){let t=o.toUpperCase(),e=n.viewContainer.element.nativeElement;for(;e;){let i=e.nodeType===1?e.nodeName:null;if(i===t)return e;if(i==="TABLE")break;e=e.parentNode}return null}var fo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[De]})}return n})();function se(n){return Array.isArray(n)?n:[n]}function F(n){return n==null?"":typeof n=="string"?n:`${n}px`}function Il(n){return n!=null&&`${n}`!="false"}var Jr=[[["caption"]],[["colgroup"],["col"]],"*"],ta=["caption","colgroup, col","*"];function ea(n,o){n&1&&U(0,2)}function na(n,o){n&1&&(R(0,"thead",0),H(1,1),E(),R(2,"tbody",2),H(3,3)(4,4),E(),R(5,"tfoot",0),H(6,5),E())}function ia(n,o){n&1&&H(0,1)(1,3)(2,4)(3,5)}var $l=(()=>{class n extends Jn{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(e,i){e&2&&B("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[tt([{provide:Jn,useExisting:n},{provide:ut,useExisting:n},{provide:xe,useValue:null}]),C],ngContentSelectors:ta,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,i){e&1&&(lt(Jr),U(0),U(1,1),at(2,ea,1,0),at(3,na,7,0)(4,ia,4,0)),e&2&&(M(2),st(i._isServer?2:-1),M(),st(i._isNativeHtmlTable?3:4))},dependencies:[Kn,Zn,Qn,qn],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),Xl=(()=>{class n extends rn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","matCellDef",""]],features:[tt([{provide:rn,useExisting:n}]),C]})}return n})(),Gl=(()=>{class n extends an{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","matHeaderCellDef",""]],features:[tt([{provide:an,useExisting:n}]),C]})}return n})();var Zl=(()=>{class n extends ae{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[tt([{provide:ae,useExisting:n}]),C]})}return n})(),Kl=(()=>{class n extends uo{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[C]})}return n})();var ql=(()=>{class n extends mo{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[C]})}return n})();var Ql=(()=>{class n extends ke{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",N]},features:[tt([{provide:ke,useExisting:n}]),C]})}return n})();var Jl=(()=>{class n extends sn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[tt([{provide:sn,useExisting:n}]),C]})}return n})(),tc=(()=>{class n extends Xn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[tt([{provide:Xn,useExisting:n}]),C],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,i){e&1&&H(0,0)},dependencies:[Gt],encapsulation:2})}return n})();var ec=(()=>{class n extends Gn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[tt([{provide:Gn,useExisting:n}]),C],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,i){e&1&&H(0,0)},dependencies:[Gt],encapsulation:2})}return n})();var nc=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[fo,X]})}return n})();function Se(n){return n.buttons===0||n.detail===0}function Re(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}var ti;function po(){if(ti==null){let n=typeof document<"u"?document.head:null;ti=!!(n&&(n.createShadowRoot||n.attachShadow))}return ti}function ei(n){if(po()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function Ee(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let o=n.shadowRoot.activeElement;if(o===n)break;n=o}return n}function J(n){return n.composedPath?n.composedPath()[0]:n.target}var Oe;function go(){if(Oe==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Oe=!0}))}finally{Oe=Oe||!1}return Oe}function le(n){return go()?n:!!n.capture}var _o=new g("cdk-input-modality-detector-options"),bo={ignoreKeys:[18,17,224,91,16]},vo=650,ni={passive:!0,capture:!0},yo=(()=>{class n{_platform=s(A);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ze(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=J(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<vo||(this._modality.next(Se(t)?"keyboard":"mouse"),this._mostRecentTarget=J(t))};_onTouchstart=t=>{if(Re(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=J(t)};constructor(){let t=s(I),e=s(y),i=s(_o,{optional:!0});if(this._options=D(D({},bo),i),this.modalityDetected=this._modality.pipe(He(1)),this.modalityChanged=this.modalityDetected.pipe(Pn()),this._platform.isBrowser){let r=s(rt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[r.listen(e,"keydown",this._onKeydown,ni),r.listen(e,"mousedown",this._onMousedown,ni),r.listen(e,"touchstart",this._onTouchstart,ni)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Me=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(Me||{}),wo=new g("cdk-focus-monitor-default-options"),ln=le({passive:!0,capture:!0}),Ie=(()=>{class n{_ngZone=s(I);_platform=s(A);_inputModalityDetector=s(yo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(y);_stopInputModalityDetector=new p;constructor(){let t=s(wo,{optional:!0});this._detectionMode=t?.detectionMode||Me.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=J(t);for(let i=e;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,e=!1){let i=gt(t);if(!this._platform.isBrowser||i.nodeType!==1)return q();let r=ei(i)||this._document,a=this._elementInfo.get(i);if(a)return e&&(a.checkChildren=!0),a.subject;let l={checkChildren:e,subject:new p,rootNode:r};return this._elementInfo.set(i,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(t){let e=gt(t),i=this._elementInfo.get(e);i&&(i.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(i))}focusVia(t,e,i){let r=gt(t),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,e,c)):(this._setOrigin(e),typeof r.focus=="function"&&r.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Me.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Me.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?vo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,e){let i=this._elementInfo.get(e),r=J(t);!i||!i.checkChildren&&e!==r||this._originChanged(e,this._getFocusOrigin(r),i)}_onBlur(t,e){let i=this._elementInfo.get(e);!i||i.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(i,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,i=this._rootNodeFocusListenerCount.get(e)||0;i||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,ln),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,ln)}),this._rootNodeFocusListenerCount.set(e,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Q(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let i=this._rootNodeFocusListenerCount.get(e);i>1?this._rootNodeFocusListenerCount.set(e,i-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ln),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ln),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,i){this._setClasses(t,e),this._emitOrigin(i,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((i,r)=>{(r===t||i.checkChildren&&r.contains(t))&&e.push([r,i])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var cn=new WeakMap,nt=(()=>{class n{_appRef;_injector=s(x);_environmentInjector=s(ie);load(t){let e=this._appRef=this._appRef||this._injector.get(_e),i=cn.get(e);i||(i={loaders:new Set,refs:[]},cn.set(e,i),e.onDestroy(()=>{cn.get(e)?.refs.forEach(r=>r.destroy()),cn.delete(e)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(Ge(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var un=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),dn;function oa(){if(dn===void 0&&(dn=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(dn=n.trustedTypes.createPolicy("angular#components",{createHTML:o=>o}))}return dn}function Zt(n){return oa()?.createHTML(n)||n}function Co(n,o,t){let e=t.sanitize(kt.HTML,o);n.innerHTML=Zt(e||"")}var Do=new Set,Kt,mn=(()=>{class n{_platform=s(A);_nonce=s($i,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):aa}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ra(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ra(n,o){if(!Do.has(n))try{Kt||(Kt=document.createElement("style"),o&&Kt.setAttribute("nonce",o),Kt.setAttribute("type","text/css"),document.head.appendChild(Kt)),Kt.sheet&&(Kt.sheet.insertRule(`@media ${n} {body{ }}`,0),Do.add(n))}catch(t){console.error(t)}}function aa(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ae=(()=>{class n{_mediaMatcher=s(mn);_zone=s(I);_queries=new Map;_destroySubject=new p;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return xo(se(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=xo(se(t)).map(a=>this._registerQuery(a).observable),r=ne(i);return r=Pi(r.pipe(mt(1)),r.pipe(He(1),zi(0))),r.pipe(z(a=>{let l={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:u})=>{l.matches=l.matches||c,l.breakpoints[u]=c}),l}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),r={observable:new Be(a=>{let l=c=>this._zone.run(()=>a.next(c));return e.addListener(l),()=>{e.removeListener(l)}}).pipe(Bt(e),z(({matches:a})=>({query:t,matches:a})),Q(this._destroySubject)),mql:e};return this._queries.set(t,r),r}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xo(n){return n.map(o=>o.split(",")).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}var sa=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ko=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({providers:[sa]})}return n})();var ri=(()=>{class n{_platform=s(A);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return ca(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=la(_a(t));if(e&&(So(e)===-1||!this.isVisible(e)))return!1;let i=t.nodeName.toLowerCase(),r=So(t);return t.hasAttribute("contenteditable")?r!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!pa(t)?!1:i==="audio"?t.hasAttribute("controls")?r!==-1:!1:i==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return ga(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function la(n){try{return n.frameElement}catch{return null}}function ca(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function da(n){let o=n.nodeName.toLowerCase();return o==="input"||o==="select"||o==="button"||o==="textarea"}function ua(n){return ha(n)&&n.type=="hidden"}function ma(n){return fa(n)&&n.hasAttribute("href")}function ha(n){return n.nodeName.toLowerCase()=="input"}function fa(n){return n.nodeName.toLowerCase()=="a"}function Oo(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let o=n.getAttribute("tabindex");return!!(o&&!isNaN(parseInt(o,10)))}function So(n){if(!Oo(n))return null;let o=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(o)?-1:o}function pa(n){let o=n.nodeName.toLowerCase(),t=o==="input"&&n.type;return t==="text"||t==="password"||o==="select"||o==="textarea"}function ga(n){return ua(n)?!1:da(n)||ma(n)||n.hasAttribute("contenteditable")||Oo(n)}function _a(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var oi=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(o){this._enabled=o,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_enabled=!0;constructor(o,t,e,i,r=!1,a){this._element=o,this._checker=t,this._ngZone=e,this._document=i,this._injector=a,r||this.attachAnchors()}destroy(){let o=this._startAnchor,t=this._endAnchor;o&&(o.removeEventListener("focus",this.startAnchorListener),o.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(o)))})}focusFirstTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(o)))})}focusLastTabbableElementWhenReady(o){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(o)))})}_getRegionBoundary(o){let t=this._element.querySelectorAll(`[cdk-focus-region-${o}], [cdkFocusRegion${o}], [cdk-focus-${o}]`);return o=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(o){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(o),!!e}return t.focus(o),!0}return this.focusFirstTabbableElement(o)}focusFirstTabbableElement(o){let t=this._getRegionBoundary("start");return t&&t.focus(o),!!t}focusLastTabbableElement(o){let t=this._getRegionBoundary("end");return t&&t.focus(o),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=0;e<t.length;e++){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(i)return i}return null}_getLastTabbableElement(o){if(this._checker.isFocusable(o)&&this._checker.isTabbable(o))return o;let t=o.children;for(let e=t.length-1;e>=0;e--){let i=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(i)return i}return null}_createAnchor(){let o=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,o),o.classList.add("cdk-visually-hidden"),o.classList.add("cdk-focus-trap-anchor"),o.setAttribute("aria-hidden","true"),o}_toggleAnchorTabIndex(o,t){o?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(o){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(o,this._startAnchor),this._toggleAnchorTabIndex(o,this._endAnchor))}_executeOnStable(o){this._injector?Z(o,{injector:this._injector}):setTimeout(o)}},ai=(()=>{class n{_checker=s(ri);_ngZone=s(I);_document=s(y);_injector=s(x);constructor(){s(nt).load(un)}create(t,e=!1){return new oi(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mo=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Io=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),ba=0,si=(()=>{class n{_ngZone=s(I);_defaultOptions=s(Io,{optional:!0});_liveElement;_document=s(y);_sanitizer=s(Ke);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=s(Mo,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let i=this._defaultOptions,r,a;return e.length===1&&typeof e[0]=="number"?a=e[0]:[r,a]=e,this.clear(),clearTimeout(this._previousTimeout),r||(r=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:Co(this._liveElement,t,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),i=this._document.createElement("div");for(let r=0;r<e.length;r++)e[r].remove();return i.classList.add(t),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${ba++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<e.length;i++){let r=e[i],a=r.getAttribute("aria-owns");a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Mt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(Mt||{}),Ro="cdk-high-contrast-black-on-white",Eo="cdk-high-contrast-white-on-black",ii="cdk-high-contrast-active",Ao=(()=>{class n{_platform=s(A);_hasCheckedHighContrastMode=!1;_document=s(y);_breakpointSubscription;constructor(){this._breakpointSubscription=s(Ae).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Mt.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,i=e&&e.getComputedStyle?e.getComputedStyle(t):null,r=(i&&i.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Mt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Mt.BLACK_ON_WHITE}return Mt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ii,Ro,Eo),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===Mt.BLACK_ON_WHITE?t.add(ii,Ro):e===Mt.WHITE_ON_BLACK&&t.add(ii,Eo)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),li=(()=>{class n{constructor(){s(Ao)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[ko]})}return n})();function hn(n,...o){return o.length?o.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var ci={},it=class n{_appId=s(Ye);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,t=!1){return this._appId!=="ng"&&(o+=this._appId),ci.hasOwnProperty(o)||(ci[o]=0),`${o}${t?n._infix+"-":""}${ci[o]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var Fo=" ";function va(n,o,t){let e=pn(n,o);t=t.trim(),!e.some(i=>i.trim()===t)&&(e.push(t),n.setAttribute(o,e.join(Fo)))}function ya(n,o,t){let e=pn(n,o);t=t.trim();let i=e.filter(r=>r!==t);i.length?n.setAttribute(o,i.join(Fo)):n.removeAttribute(o)}function pn(n,o){return n.getAttribute(o)?.match(/\S+/g)??[]}var Po="cdk-describedby-message",fn="cdk-describedby-host",ui=0,fd=(()=>{class n{_platform=s(A);_document=s(y);_messageRegistry=new Map;_messagesContainer=null;_id=`${ui++}`;constructor(){s(nt).load(un),this._id=s(Ye)+"-"+ui++}describe(t,e,i){if(!this._canBeDescribed(t,e))return;let r=di(e,i);typeof e!="string"?(To(e,this._id),this._messageRegistry.set(r,{messageElement:e,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(e,i),this._isElementDescribedByMessage(t,r)||this._addMessageReference(t,r)}removeDescription(t,e,i){if(!e||!this._isElementNode(t))return;let r=di(e,i);if(this._isElementDescribedByMessage(t,r)&&this._removeMessageReference(t,r),typeof e=="string"){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${fn}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(fn);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let i=this._document.createElement("div");To(i,this._id),i.textContent=t,e&&i.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(di(t,e),{messageElement:i,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let r=0;r<e.length;r++)e[r].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(t),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(t){let e=pn(t,"aria-describedby").filter(i=>i.indexOf(Po)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let i=this._messageRegistry.get(e);va(t,"aria-describedby",i.messageElement.id),t.setAttribute(fn,this._id),i.referenceCount++}_removeMessageReference(t,e){let i=this._messageRegistry.get(e);i.referenceCount--,ya(t,"aria-describedby",i.messageElement.id),t.removeAttribute(fn)}_isElementDescribedByMessage(t,e){let i=pn(t,"aria-describedby"),r=this._messageRegistry.get(e),a=r&&r.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let i=e==null?"":`${e}`.trim(),r=t.getAttribute("aria-label");return i?!r||r.trim()!==i:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function di(n,o){return typeof n=="string"?`${o||""}/${n}`:n}function To(n,o){n.id||(n.id=`${Po}-${o}-${ui++}`)}function mi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ce,No=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function wd(){if(ce)return ce;if(typeof document!="object"||!document)return ce=new Set(No),ce;let n=document.createElement("input");return ce=new Set(No.filter(o=>(n.setAttribute("type",o),n.type===o))),ce}var Lo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var wa=new g("MATERIAL_ANIMATIONS"),Bo=null;function hi(){return s(wa,{optional:!0})?.animationsDisabled||s($e,{optional:!0})==="NoopAnimations"?"di-disabled":(Bo??=s(mn).matchMedia("(prefers-reduced-motion)").matches,Bo?"reduced-motion":"enabled")}function _t(){return hi()!=="enabled"}var ot=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(ot||{}),fi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ot.HIDDEN;constructor(o,t,e,i=!1){this._renderer=o,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},zo=le({passive:!0,capture:!0}),pi=class{_events=new Map;addHandler(o,t,e,i){let r=this._events.get(t);if(r){let a=r.get(e);a?a.add(i):r.set(e,new Set([i]))}else this._events.set(t,new Map([[e,new Set([i])]])),o.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,zo)})}removeHandler(o,t,e){let i=this._events.get(o);if(!i)return;let r=i.get(t);r&&(r.delete(e),r.size===0&&i.delete(t),i.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,zo)))}_delegateEventHandler=o=>{let t=J(o);t&&this._events.get(o.type)?.forEach((e,i)=>{(i===t||i.contains(t))&&e.forEach(r=>r.handleEvent(o))})}},Te={enterDuration:225,exitDuration:150},Ca=800,jo=le({passive:!0,capture:!0}),Vo=["mousedown","touchstart"],Ho=["mouseup","mouseleave","touchend","touchcancel"],Da=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),gn=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new pi;constructor(o,t,e,i,r){this._target=o,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=gt(e)),r&&r.get(nt).load(Da)}fadeInRipple(o,t,e={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=D(D({},Te),e.animation);e.centered&&(o=i.left+i.width/2,t=i.top+i.height/2);let a=e.radius||xa(o,t,i),l=o-i.left,c=t-i.top,u=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${l-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,e.color!=null&&(d.style.backgroundColor=e.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),b=m.transitionProperty,v=m.transitionDuration,P=b==="none"||v==="0s"||v==="0s, 0s"||i.width===0&&i.height===0,T=new fi(this,d,e,P);d.style.transform="scale3d(1, 1, 1)",T.state=ot.FADING_IN,e.persistent||(this._mostRecentTransientRipple=T);let L=null;return!P&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let G=()=>{L&&(L.fallbackTimer=null),clearTimeout(Ai),this._finishRippleTransition(T)},te=()=>this._destroyRipple(T),Ai=setTimeout(te,u+100);d.addEventListener("transitionend",G),d.addEventListener("transitioncancel",te),L={onTransitionEnd:G,onTransitionCancel:te,fallbackTimer:Ai}}),this._activeRipples.set(T,L),(P||!u)&&this._finishRippleTransition(T),T}fadeOutRipple(o){if(o.state===ot.FADING_OUT||o.state===ot.HIDDEN)return;let t=o.element,e=D(D({},Te),o.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",o.state=ot.FADING_OUT,(o._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let t=gt(o);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Vo.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ho.forEach(t=>{this._triggerElement.addEventListener(t,this,jo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===ot.FADING_IN?this._startFadeOutTransition(o):o.state===ot.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let t=o===this._mostRecentTransientRipple,{persistent:e}=o.config;o.state=ot.VISIBLE,!e&&(!t||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let t=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=ot.HIDDEN,t!==null&&(o.element.removeEventListener("transitionend",t.onTransitionEnd),o.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),o.element.remove()}_onMousedown(o){let t=Se(o),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ca;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!Re(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=o.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let t=o.state===ot.VISIBLE||o.config.terminateOnPointerUp&&o.state===ot.FADING_IN;!o.config.persistent&&t&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Vo.forEach(t=>n._eventManager.removeHandler(t,o,this)),this._pointerUpEventsRegistered&&(Ho.forEach(t=>o.removeEventListener(t,this,jo)),this._pointerUpEventsRegistered=!1))}};function xa(n,o,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),i=Math.max(Math.abs(o-t.top),Math.abs(o-t.bottom));return Math.sqrt(e*e+i*i)}var Uo=new g("mat-ripple-global-options");var ka={capture:!0},Sa=["focus","mousedown","mouseenter","touchstart"],gi="mat-ripple-loader-uninitialized",_i="mat-ripple-loader-class-name",Wo="mat-ripple-loader-centered",_n="mat-ripple-loader-disabled",Yo=(()=>{class n{_document=s(y);_animationsDisabled=_t();_globalRippleOptions=s(Uo,{optional:!0});_platform=s(A);_ngZone=s(I);_injector=s(x);_eventCleanups;_hosts=new Map;constructor(){let t=s(rt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Sa.map(e=>t.listen(this._document,e,this._onInteraction,ka)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(gi,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(_i))&&t.setAttribute(_i,e.className||""),e.centered&&t.setAttribute(Wo,""),e.disabled&&t.setAttribute(_n,"")}setDisabled(t,e){let i=this._hosts.get(t);i?(i.target.rippleDisabled=e,!e&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):e?t.setAttribute(_n,""):t.removeAttribute(_n)}_onInteraction=t=>{let e=J(t);if(e instanceof HTMLElement){let i=e.closest(`[${gi}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(_i)),t.append(e);let i=this._globalRippleOptions,r=this._animationsDisabled?0:i?.animation?.enterDuration??Te.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??Te.exitDuration,l={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(_n),rippleConfig:{centered:t.hasAttribute(Wo),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},c=new gn(l,this._ngZone,e,this._platform,this._injector),u=!l.rippleDisabled;u&&c.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:c,hasSetUpEvents:u}),t.removeAttribute(gi)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $o=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ra=["mat-icon-button",""],Ea=["*"],Oa=new g("MAT_BUTTON_CONFIG");function Xo(n){return n==null?void 0:oe(n)}var bi=(()=>{class n{_elementRef=s(w);_ngZone=s(I);_animationsDisabled=_t();_config=s(Oa,{optional:!0});_focusMonitor=s(Ie);_cleanupClick;_renderer=s(St);_rippleLoader=s(Yo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(nt).load($o);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,i){e&2&&(V("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Et(i.color?"mat-"+i.color:""),B("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",N],disabled:[2,"disabled","disabled",N],ariaDisabled:[2,"aria-disabled","ariaDisabled",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N],tabIndex:[2,"tabIndex","tabIndex",Xo],_tabindex:[2,"tabindex","_tabindex",Xo]}})}return n})(),Ma=(()=>{class n extends bi{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[C],attrs:Ra,ngContentSelectors:Ea,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,i){e&1&&(lt(),Vt(0,"span",0),U(1),Vt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Go=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[X]})}return n})();var Ia=["matButton",""],Aa=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ta=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),bn=(()=>{class n extends bi{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=Fa(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,i=this._appearance?Zo.get(this._appearance):null,r=Zo.get(t);i&&e.remove(...i),e.add(...r),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[C],attrs:Ia,ngContentSelectors:Ta,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,i){e&1&&(lt(Aa),Vt(0,"span",0),U(1),be(2,"span",1),U(3,1),ve(),U(4,2),Vt(5,"span",2)(6,"span",3)),e&2&&B("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Fa(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var vi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[Go,X]})}return n})();function Ko(n){return Error(`Unable to find icon with the name "${n}"`)}function Na(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function qo(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Qo(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var wt=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}},tr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,i,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace("",t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace("",t,e,i)}addSvgIconInNamespace(t,e,i,r){return this._addSvgIconConfig(t,e,new wt(i,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,r){let a=this._sanitizer.sanitize(kt.HTML,i);if(!a)throw Qo(i);let l=Zt(a);return this._addSvgIconConfig(t,e,new wt("",l,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new wt(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let r=this._sanitizer.sanitize(kt.HTML,e);if(!r)throw Qo(e);let a=Zt(r);return this._addSvgIconSetConfig(t,new wt("",a,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(kt.RESOURCE_URL,t);if(!e)throw qo(t);let i=this._cachedIconsByUrl.get(e);return i?q(vn(i)):this._loadSvgIconFromConfig(new wt(t,null)).pipe(Ue(r=>this._cachedIconsByUrl.set(e,r)),z(r=>vn(r)))}getNamedSvgIcon(t,e=""){let i=Jo(e,t),r=this._svgIconConfigs.get(i);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(i,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):Fi(Ko(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?q(vn(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(z(e=>vn(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return q(i);let r=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Bi(l=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(kt.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(u)),q(null)})));return Ni(r).pipe(z(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw Ko(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let r=e[i];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,t,r.options);if(l)return l}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Ue(e=>t.svgText=e),z(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?q(null):this._fetchIcon(t).pipe(Ue(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let l=this._svgElementFromString(Zt("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,i)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let i=e.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let e=this._svgElementFromString(Zt("<svg></svg>")),i=t.attributes;for(let r=0;r<i.length;r++){let{name:a,value:l}=i[r];a!=="id"&&e.setAttribute(a,l)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,r=i?.withCredentials??!1;if(!this._httpClient)throw Na();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(kt.RESOURCE_URL,e);if(!a)throw qo(e);let l=this._inProgressUrlFetches.get(a);if(l)return l;let c=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(z(u=>Zt(u)),ji(()=>this._inProgressUrlFetches.delete(a)),Vi());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Jo(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let r=this._resolvers[i](e,t);if(r)return La(r)?new wt(r.url,null,r.options):new wt(r,null)}}static \u0275fac=function(e){return new(e||n)(ge(Ze,8),ge(Ke),ge(y,8),ge(We))};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vn(n){return n.cloneNode(!0)}function Jo(n,o){return n+":"+o}function La(n){return!!(n.url&&n.options)}var Ba=["*"],za=new g("MAT_ICON_DEFAULT_OPTIONS"),ja=new g("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(y),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),er=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Va=er.map(n=>`[${n}]`).join(", "),Ha=/^url\(['"]?#(.*?)['"]?\)$/,Tu=(()=>{class n{_elementRef=s(w);_iconRegistry=s(tr);_location=s(ja);_errorHandler=s(We);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ee.EMPTY;constructor(){let t=s(new Xe("aria-hidden"),{optional:!0}),e=s(za,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((i,r)=>{i.forEach(a=>{r.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Va),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)er.forEach(a=>{let l=e[r],c=l.getAttribute(a),u=c?c.match(Ha):null;if(u){let d=i.get(l);d||(d=[],i.set(l,d)),d.push({name:a,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(mt(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${e}:${i}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,i){e&2&&(V("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Et(i.color?"mat-"+i.color:""),B("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",N],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Ba,decls:1,vars:0,template:function(e,i){e&1&&(lt(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Fu=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[X]})}return n})();var Fe=class{_attachedHost=null;attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;o!=null&&(this._attachedHost=null,o.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},Ct=class extends Fe{component;viewContainerRef;injector;projectableNodes;bindings;constructor(o,t,e,i,r){super(),this.component=o,this.viewContainerRef=t,this.injector=e,this.projectableNodes=i,this.bindings=r||null}},It=class extends Fe{templateRef;viewContainerRef;context;injector;constructor(o,t,e,i){super(),this.templateRef=o,this.viewContainerRef=t,this.context=e,this.injector=i}get origin(){return this.templateRef.elementRef}attach(o,t=this.context){return this.context=t,super.attach(o)}detach(){return this.context=void 0,super.detach()}},yi=class extends Fe{element;constructor(o){super(),this.element=o instanceof w?o.nativeElement:o}},At=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(o){if(o instanceof Ct)return this._attachedPortal=o,this.attachComponentPortal(o);if(o instanceof It)return this._attachedPortal=o,this.attachTemplatePortal(o);if(this.attachDomPortal&&o instanceof yi)return this._attachedPortal=o,this.attachDomPortal(o)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},yn=class extends At{outletElement;_appRef;_defaultInjector;constructor(o,t,e){super(),this.outletElement=o,this._appRef=t,this._defaultInjector=e}attachComponentPortal(o){let t;if(o.viewContainerRef){let e=o.injector||o.viewContainerRef.injector,i=e.get(Ln,null,{optional:!0})||void 0;t=o.viewContainerRef.createComponent(o.component,{index:o.viewContainerRef.length,injector:e,ngModuleRef:i,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,i=o.injector||this._defaultInjector||x.NULL,r=i.get(ie,e.injector);t=Ge(o.component,{elementInjector:i,environmentInjector:r,projectableNodes:o.projectableNodes||void 0,bindings:o.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=o,t}attachTemplatePortal(o){let t=o.viewContainerRef,e=t.createEmbeddedView(o.templateRef,o.context,{injector:o.injector});return e.rootNodes.forEach(i=>this.outletElement.appendChild(i)),e.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(e);i!==-1&&t.remove(i)}),this._attachedPortal=o,e}attachDomPortal=o=>{let t=o.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=o,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(o){return o.hostView.rootNodes[0]}};var Tt=(()=>{class n extends At{_moduleRef=s(Ln,{optional:!0});_document=s(y);_viewContainerRef=s(ht);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new et;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let e=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=e.createComponent(t.component,{index:e.length,injector:t.injector||e.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0});return e!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(i,e),this._getRootNode().appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[C]})}return n})(),Ft=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({})}return n})();var nr=Qe();function ue(n){return new wn(n.get(Ot),n.get(y))}var wn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,t){this._viewportRuler=o,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=F(-this._previousScrollPosition.left),o.style.top=F(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,t=this._document.body,e=o.style,i=t.style,r=e.scrollBehavior||"",a=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),nr&&(e.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),nr&&(e.scrollBehavior=r,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function cr(n,o){return new Cn(n.get(Ce),n.get(I),n.get(Ot),o)}var Cn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,t,e,i){this._scrollDispatcher=o,this._ngZone=t,this._viewportRuler=e,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(bt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Pe=class{enable(){}disable(){}attach(){}};function wi(n,o){return o.some(t=>{let e=n.bottom<t.top,i=n.top>t.bottom,r=n.right<t.left,a=n.left>t.right;return e||i||r||a})}function ir(n,o){return o.some(t=>{let e=n.top<t.top,i=n.bottom>t.bottom,r=n.left<t.left,a=n.right>t.right;return e||i||r||a})}function dr(n,o){return new Dn(n.get(Ce),n.get(Ot),n.get(I),o)}var Dn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,t,e,i){this._scrollDispatcher=o,this._viewportRuler=t,this._ngZone=e,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();wi(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ur=(()=>{class n{_injector=s(x);constructor(){}noop=()=>new Pe;close=t=>cr(this._injector,t);block=()=>ue(this._injector);reposition=t=>dr(this._injector,t);static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pt=class{positionStrategy;scrollStrategy=new Pe;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let t=Object.keys(o);for(let e of t)o[e]!==void 0&&(this[e]=o[e])}}};var xn=class{connectionPair;scrollableViewProperties;constructor(o,t){this.connectionPair=o,this.scrollableViewProperties=t}};var mr=(()=>{class n{_attachedOverlays=[];_document=s(y);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),hr=(()=>{class n extends mr{_ngZone=s(I);_renderer=s(rt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let r=e[i];if(this.canReceiveEvent(r,t,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),fr=(()=>{class n extends mr{_platform=s(A);_ngZone=s(I);_renderer=s(rt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(e,"pointerdown",this._pointerDownListener,i),r.listen(e,"click",this._clickListener,i),r.listen(e,"auxclick",this._clickListener,i),r.listen(e,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=J(t)};_clickListener=t=>{let e=J(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,t,c))){if(or(l.overlayElement,e)||or(l.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>c.next(t)):c.next(t)}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function or(n,o){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=o;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var pr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Rn=(()=>{class n{_platform=s(A);_containerElement;_document=s(y);_styleLoader=s(nt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||mi()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let r=0;r<i.length;r++)i[r].remove()}let e=this._document.createElement("div");e.classList.add(t),mi()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(pr)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ci=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,t,e,i){this._renderer=t,this._ngZone=e,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Di(n){return n&&n.nodeType===1}var de=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new p;_attachments=new p;_detachments=new p;_positionStrategy;_scrollStrategy;_locationChanges=ee.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new p;_outsidePointerEvents=new p;_afterNextRenderRef;constructor(o,t,e,i,r,a,l,c,u,d=!1,m,b){this._portalOutlet=o,this._host=t,this._pane=e,this._config=i,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=m,this._renderer=b,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Z(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=D(D({},this._config),o),this._updateElementSize()}setDirection(o){this._config=Dt(D({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=F(this._config.width),o.height=F(this._config.height),o.minWidth=F(this._config.minWidth),o.minHeight=F(this._config.minHeight),o.maxWidth=F(this._config.maxWidth),o.maxHeight=F(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Di(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Ci(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,t,e){let i=se(t||[]).filter(r=>!!r);i.length&&(e?o.classList.add(...i):o.classList.remove(...i))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=Z(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(t){if(o)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}},rr="cdk-overlay-connected-position-bounding-box",Ua=/([A-Za-z%]+)$/;function gr(n,o){return new kn(o,n.get(Ot),n.get(y),n.get(A),n.get(Rn))}var kn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new p;_resizeSubscription=ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,t,e,i,r){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=r,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(rr),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,r=[],a;for(let l of this._preferredPositions){let c=this._getOriginPoint(o,i,l),u=this._getOverlayPoint(c,t,l),d=this._getOverlayFit(u,t,e,l);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return}if(this._canFitWithFlexibleDimensions(d,u,e)){r.push({position:l,origin:c,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:u,originPoint:c,position:l,overlayRect:t})}if(r.length){let l=null,c=-1;for(let u of r){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>c&&(c=d,l=u)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&qt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(rr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof w?this._origin.nativeElement:Di(this._origin)?this._origin:null}_getOriginPoint(o,t,e){let i;if(e.originX=="center")i=o.left+o.width/2;else{let a=this._isRtl()?o.right:o.left,l=this._isRtl()?o.left:o.right;i=e.originX=="start"?a:l}t.left<0&&(i-=t.left);let r;return e.originY=="center"?r=o.top+o.height/2:r=e.originY=="top"?o.top:o.bottom,t.top<0&&(r-=t.top),{x:i,y:r}}_getOverlayPoint(o,t,e){let i;e.overlayX=="center"?i=-t.width/2:e.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let r;return e.overlayY=="center"?r=-t.height/2:r=e.overlayY=="top"?0:-t.height,{x:o.x+i,y:o.y+r}}_getOverlayFit(o,t,e,i){let r=sr(t),{x:a,y:l}=o,c=this._getOffset(i,"x"),u=this._getOffset(i,"y");c&&(a+=c),u&&(l+=u);let d=0-a,m=a+r.width-e.width,b=0-l,v=l+r.height-e.height,P=this._subtractOverflows(r.width,d,m),T=this._subtractOverflows(r.height,b,v),L=P*T;return{visibleArea:L,isCompletelyWithinViewport:r.width*r.height===L,fitsInViewportVertically:T===r.height,fitsInViewportHorizontally:P==r.width}}_canFitWithFlexibleDimensions(o,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,r=e.right-t.x,a=ar(this._overlayRef.getConfig().minHeight),l=ar(this._overlayRef.getConfig().minWidth),c=o.fitsInViewportVertically||a!=null&&a<=i,u=o.fitsInViewportHorizontally||l!=null&&l<=r;return c&&u}return!1}_pushOverlayOnScreen(o,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let i=sr(t),r=this._viewportRect,a=Math.max(o.x+i.width-r.width,0),l=Math.max(o.y+i.height-r.height,0),c=Math.max(r.top-e.top-o.y,0),u=Math.max(r.left-e.left-o.x,0),d=0,m=0;return i.width<=r.width?d=u||-a:d=o.x<this._getViewportMarginStart()?r.left-e.left-o.x:0,i.height<=r.height?m=c||-l:m=o.y<this._getViewportMarginTop()?r.top-e.top-o.y:0,this._previousPushAmount={x:d,y:m},{x:o.x+d,y:o.y+m}}_applyPosition(o,t){if(this._setTransformOrigin(o),this._setOverlayElementStyles(t,o),this._setBoundingBoxStyles(t,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!Wa(this._lastScrollVisibility,e)){let i=new xn(o,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=o.overlayY;o.overlayX==="center"?e="center":this._isRtl()?e=o.overlayX==="start"?"right":"left":e=o.overlayX==="start"?"left":"right";for(let r=0;r<t.length;r++)t[r].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(o,t){let e=this._viewportRect,i=this._isRtl(),r,a,l;if(t.overlayY==="top")a=o.y,r=e.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")l=e.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=e.height-l+this._getViewportMarginTop();else{let v=Math.min(e.bottom-o.y+e.top,o.y),P=this._lastBoundingBoxSize.height;r=v*2,a=o.y-v,r>P&&!this._isInitialRender&&!this._growAfterOpen&&(a=o.y-P/2)}let c=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,u=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,m,b;if(u)b=e.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=o.x-this._getViewportMarginStart();else if(c)m=o.x,d=e.right-o.x-this._getViewportMarginEnd();else{let v=Math.min(e.right-o.x+e.left,o.x),P=this._lastBoundingBoxSize.width;d=v*2,m=o.x-v,d>P&&!this._isInitialRender&&!this._growAfterOpen&&(m=o.x-P/2)}return{top:a,left:m,bottom:l,right:b,width:d,height:r}}_setBoundingBoxStyles(o,t){let e=this._calculateBoundingBoxRect(o,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=F(e.width),i.height=F(e.height),i.top=F(e.top)||"auto",i.bottom=F(e.bottom)||"auto",i.left=F(e.left)||"auto",i.right=F(e.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",r&&(i.maxHeight=F(r)),a&&(i.maxWidth=F(a))}this._lastBoundingBoxSize=e,qt(this._boundingBox.style,i)}_resetBoundingBoxStyles(){qt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){qt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,t){let e={},i=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();qt(e,this._getExactOverlayY(t,o,d)),qt(e,this._getExactOverlayX(t,o,d))}else e.position="static";let l="",c=this._getOffset(t,"x"),u=this._getOffset(t,"y");c&&(l+=`translateX(${c}px) `),u&&(l+=`translateY(${u}px)`),e.transform=l.trim(),a.maxHeight&&(i?e.maxHeight=F(a.maxHeight):r&&(e.maxHeight="")),a.maxWidth&&(i?e.maxWidth=F(a.maxWidth):r&&(e.maxWidth="")),qt(this._pane.style,e)}_getExactOverlayY(o,t,e){let i={top:"",bottom:""},r=this._getOverlayPoint(t,this._overlayRect,o);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e)),o.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;i.bottom=`${a-(r.y+this._overlayRect.height)}px`}else i.top=F(r.y);return i}_getExactOverlayX(o,t,e){let i={left:"",right:""},r=this._getOverlayPoint(t,this._overlayRect,o);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,e));let a;if(this._isRtl()?a=o.overlayX==="end"?"left":"right":a=o.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;i.right=`${l-(r.x+this._overlayRect.width)}px`}else i.left=F(r.x);return i}_getScrollVisibility(){let o=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ir(o,e),isOriginOutsideView:wi(o,e),isOverlayClipped:ir(t,e),isOverlayOutsideView:wi(t,e)}}_subtractOverflows(o,...t){return t.reduce((e,i)=>e-Math.max(i,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+o-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,t){return t==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&se(o).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof w)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let t=o.width||0,e=o.height||0;return{top:o.y,bottom:o.y+e,left:o.x,right:o.x+t,height:e,width:t}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();o&&(t.style.display="block");let e=t.getBoundingClientRect();return o&&(t.style.display=""),e}};function qt(n,o){for(let t in o)o.hasOwnProperty(t)&&(n[t]=o[t]);return n}function ar(n){if(typeof n!="number"&&n!=null){let[o,t]=n.split(Ua);return!t||t==="px"?parseFloat(o):null}return n||null}function sr(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Wa(n,o){return n===o?!0:n.isOriginClipped===o.isOriginClipped&&n.isOriginOutsideView===o.isOriginOutsideView&&n.isOverlayClipped===o.isOverlayClipped&&n.isOverlayOutsideView===o.isOverlayOutsideView}var lr="cdk-global-overlay-wrapper";function Nt(n){return new Sn}var Sn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(o){let t=o.getConfig();this._overlayRef=o,this._width&&!t.width&&o.updateSize({width:this._width}),this._height&&!t.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(lr),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:i,height:r,maxWidth:a,maxHeight:l}=e,c=(i==="100%"||i==="100vw")&&(!a||a==="100%"||a==="100vw"),u=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),d=this._xPosition,m=this._xOffset,b=this._overlayRef.getConfig().direction==="rtl",v="",P="",T="";c?T="flex-start":d==="center"?(T="center",b?P=m:v=m):b?d==="left"||d==="end"?(T="flex-end",v=m):(d==="right"||d==="start")&&(T="flex-start",P=m):d==="left"||d==="start"?(T="flex-start",v=m):(d==="right"||d==="end")&&(T="flex-end",P=m),o.position=this._cssPosition,o.marginLeft=c?"0":v,o.marginTop=u?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=c?"0":P,t.justifyContent=T,t.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(lr),e.justifyContent=e.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}},_r=(()=>{class n{_injector=s(x);constructor(){}global(){return Nt()}flexibleConnectedTo(t){return gr(this._injector,t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),br=new g("OVERLAY_DEFAULT_CONFIG");function me(n,o){n.get(nt).load(pr);let t=n.get(Rn),e=n.get(y),i=n.get(it),r=n.get(_e),a=n.get(pt),l=n.get(St,null,{optional:!0})||n.get(rt).createRenderer(null,null),c=new Pt(o),u=n.get(br,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in e.body?c.usePopover=o?.usePopover??u:c.usePopover=!1;let d=e.createElement("div"),m=e.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let b=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return Di(b)?b.after(m):b?.type==="parent"?b.element.appendChild(m):t.getContainerElement().appendChild(m),new de(new yn(d,r,n),m,d,c,n.get(I),n.get(hr),e,n.get(to),n.get(fr),o?.disableAnimations??n.get($e,null,{optional:!0})==="NoopAnimations",n.get(ie),l)}var vr=(()=>{class n{scrollStrategies=s(ur);_positionBuilder=s(_r);_injector=s(x);constructor(){}create(t){return me(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var he=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({providers:[vr],imports:[X,Ft,De,De]})}return n})();function Ya(n,o){}var Lt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ki=(()=>{class n extends At{_elementRef=s(w);_focusTrapFactory=s(ai);_config;_interactivityChecker=s(ri);_ngZone=s(I);_focusMonitor=s(Ie);_renderer=s(St);_changeDetectorRef=s(Yt);_injector=s(x);_platform=s(A);_document=s(y);_portalOutlet;_focusTrapped=new p;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(Lt,{optional:!0})||new Lt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}attachDomPortal=t=>{this._portalOutlet.hasAttached();let e=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),e};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{r(),a(),t.removeAttribute("tabindex")},r=this._renderer.listen(t,"blur",i),a=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(t){this._isDestroyed||Z(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=Ee(),r=this._elementRef.nativeElement;(!i||i===this._document.body||i===r||r.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,e=Ee();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ee()))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&Rt(Tt,7),e&2){let r;W(r=Y())&&(i._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&V("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[C],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&ft(0,Ya,0,0,"ng-template",0)},dependencies:[Tt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),Ne=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new p;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,t){this.overlayRef=o,this.config=t,this.disableClose=t.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!hn(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(o,t){if(this._canClose(o)){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(o),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",t=""){return this.overlayRef.updateSize({width:o,height:t}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(o,t,this.componentInstance))}},$a=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(x);return()=>ue(n)}}),Xa=new g("DialogData"),Ga=new g("DefaultDialogConfig");function Za(n){let o=xt(n),t=new et;return{valueSignal:o,get value(){return o()},change:t,ngOnDestroy(){t.complete()}}}var Si=(()=>{class n{_injector=s(x);_defaultOptions=s(Ga,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(Rn);_idGenerator=s(it);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;_ariaHiddenElements=new Map;_scrollStrategy=s($a);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=je(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Bt(void 0)));constructor(){}open(t,e){let i=this._defaultOptions||new Lt;e=D(D({},i),e),e.id=e.id||this._idGenerator.getId("cdk-dialog-"),e.id&&this.getDialogById(e.id);let r=this._getOverlayConfig(e),a=me(this._injector,r),l=new Ne(a,e),c=this._attachContainer(a,l,e);if(l.containerInstance=c,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();c._focusTrapped?c._focusTrapped.pipe(mt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(t,l,c,e),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){xi(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){xi(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),xi(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new Pt({positionStrategy:t.positionStrategy||Nt().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let r=i.injector||i.viewContainerRef?.injector,a=[{provide:Lt,useValue:i},{provide:Ne,useValue:e},{provide:de,useValue:t}],l;i.container?typeof i.container=="function"?l=i.container:(l=i.container.type,a.push(...i.container.providers(i))):l=ki;let c=new Ct(l,i.viewContainerRef,x.create({parent:r||this._injector,providers:a}));return t.attach(c).instance}_attachDialogContent(t,e,i,r){if(t instanceof K){let a=this._createInjector(r,e,i,void 0),l={$implicit:r.data,dialogRef:e};r.templateContext&&(l=D(D({},l),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),i.attachTemplatePortal(new It(t,null,l,a))}else{let a=this._createInjector(r,e,i,this._injector),l=i.attachComponentPortal(new Ct(t,r.viewContainerRef,a));e.componentRef=l,e.componentInstance=l.instance}}_createInjector(t,e,i,r){let a=t.injector||t.viewContainerRef?.injector,l=[{provide:Xa,useValue:t.data},{provide:Ne,useValue:e}];return t.providers&&(typeof t.providers=="function"?l.push(...t.providers(e,t,i)):l.push(...t.providers)),t.direction&&(!a||!a.get(pt,null,{optional:!0}))&&l.push({provide:pt,useValue:Za(t.direction)}),x.create({parent:a||r,providers:l})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,a)=>{r?a.setAttribute("aria-hidden",r):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let r=e[i];r!==t&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&!r.hasAttribute("popover")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xi(n,o){let t=n.length;for(;t--;)o(n[t])}var wr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({providers:[Si],imports:[he,Ft,li,Ft]})}return n})();function Ka(n,o){}var On=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ri="mdc-dialog--open",Cr="mdc-dialog--opening",Dr="mdc-dialog--closing",qa=150,Qa=75,Ja=(()=>{class n extends ki{_animationStateChanged=new et;_animationsEnabled=!_t();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?kr(this._config.enterAnimationDuration)??qa:0;_exitAnimationDuration=this._animationsEnabled?kr(this._config.exitAnimationDuration)??Qa:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(xr,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Cr,Ri)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ri),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ri),this._animationsEnabled?(this._hostElement.style.setProperty(xr,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Dr)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Cr,Dr)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275cmp=_({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(Bn("id",i._config.id),V("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),B("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[C],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(R(0,"div",0)(1,"div",1),ft(2,Ka,0,0,"ng-template",2),E()())},dependencies:[Tt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),xr="--mat-dialog-transition-duration";function kr(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?we(n.substring(0,n.length-2)):n.endsWith("s")?we(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var En=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(En||{}),Qt=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new In(1);_beforeClosed=new In(1);_result;_closeFallbackTimeout;_state=En.OPEN;_closeInteractionType;constructor(o,t,e){this._ref=o,this._config=t,this._containerInstance=e,this.disableClose=t.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(bt(i=>i.state==="opened"),mt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(bt(i=>i.state==="closed"),mt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Li(this.backdropClick(),this.keydownEvents().pipe(bt(i=>i.keyCode===27&&!this.disableClose&&!hn(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),Sr(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){let t=this._config.closePredicate;t&&!t(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(bt(e=>e.state==="closing"),mt(1)).subscribe(e=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=En.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let t=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?t.left(o.left):t.right(o.right):t.centerHorizontally(),o&&(o.top||o.bottom)?o.top?t.top(o.top):t.bottom(o.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",t=""){return this._ref.updateSize(o,t),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=En.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Sr(n,o,t){return n._closeInteractionType=o,n.close(t)}var Ei=new g("MatMdcDialogData"),ts=new g("mat-mdc-dialog-default-options"),es=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(x);return()=>ue(n)}}),Oi=(()=>{class n{_defaultOptions=s(ts,{optional:!0});_scrollStrategy=s(es);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(it);_injector=s(x);_dialog=s(Si);_animationsDisabled=_t();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new p;_afterOpenedAtThisLevel=new p;dialogConfigClass=On;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=je(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Bt(void 0)));constructor(){this._dialogRefConstructor=Qt,this._dialogContainerType=Ja,this._dialogDataToken=Ei}open(t,e){let i;e=D(D({},this._defaultOptions||new On),e),e.id=e.id||this._idGenerator.getId("mat-mdc-dialog-"),e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(t,Dt(D({},e),{positionStrategy:Nt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||e.enterAnimationDuration?.toLocaleString()==="0"||e.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:Lt,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(a,l,c)=>(i=new this._dialogRefConstructor(a,e,c),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=r.componentRef,i.componentInstance=r.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Rr=(()=>{class n{dialogRef=s(Qt,{optional:!0});_elementRef=s(w);_dialog=s(Oi);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Ar(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Sr(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,i){e&1&&Ht("click",function(a){return i._onButtonClick(a)}),e&2&&V("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[vt]})}return n})(),Er=(()=>{class n{_dialogRef=s(Qt,{optional:!0});_elementRef=s(w);_dialog=s(Oi);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Ar(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n})}return n})(),Or=(()=>{class n extends Er{id=s(it).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,i){e&2&&Bn("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[C]})}return n})(),Mr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Xi([Un])]})}return n})(),Ir=(()=>{class n extends Er{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=j(n)))(i||n)}})();static \u0275dir=h({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(e,i){e&2&&B("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[C]})}return n})();function Ar(n,o){let t=n.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?o.find(e=>e.id===t.id):null}var Tr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({providers:[Oi],imports:[wr,he,Ft,X]})}return n})();function is(n,o){if(n&1){let t=Gi();R(0,"div",1)(1,"button",2),Ht("click",function(){Hi(t);let i=yt();return Ui(i.action())}),$(2),E()()}if(n&2){let t=yt();M(2),Wt(" ",t.data.action," ")}}var os=["label"];function rs(n,o){}var as=Math.pow(2,31)-1,Le=class{_overlayRef;instance;containerInstance;_afterDismissed=new p;_afterOpened=new p;_onAction=new p;_durationTimeoutId;_dismissedByAction=!1;constructor(o,t){this._overlayRef=t,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,as))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Fr=new g("MatSnackBarData"),fe=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},ss=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return n})(),ls=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return n})(),cs=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=h({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return n})(),ds=(()=>{class n{snackBarRef=s(Le);data=s(Fr);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(e,i){e&1&&(R(0,"div",0),$(1),E(),at(2,is,3,1,"div",1)),e&2&&(M(),Wt(" ",i.data.message,`
`),M(),st(i.hasAction?2:-1))},dependencies:[bn,ss,ls,cs],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Mi="_mat-snack-bar-enter",Ii="_mat-snack-bar-exit",us=(()=>{class n extends At{_ngZone=s(I);_elementRef=s(w);_changeDetectorRef=s(Yt);_platform=s(A);_animationsDisabled=_t();snackBarConfig=s(fe);_document=s(y);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(x);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new p;_onExit=new p;_onEnter=new p;_animationState="void";_live;_label;_role;_liveElementId=s(it).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){t===Ii?this._completeExit():t===Mi&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Z(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Mi)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Mi)},200)))}exit(){return this._destroyed?q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Z(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ii)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Ii),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(a=>t.classList.add(a)):t.classList.add(e)),this._exposeToModals();let i=this._label.nativeElement,r="mdc-snackbar__label";i.classList.toggle(r,!i.querySelector(`.${r}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<e.length;i++){let r=e[i],a=r.getAttribute("aria-owns");this._trackedModals.add(r),a?a.indexOf(t)===-1&&r.setAttribute("aria-owns",a+" "+t):r.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let i=e.replace(this._liveElementId,"").trim();i.length>0?t.setAttribute("aria-owns",i):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,e=t.querySelector("[aria-hidden]"),i=t.querySelector("[aria-live]");if(e&&i){let r=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(r=document.activeElement),e.removeAttribute("aria-hidden"),i.appendChild(e),r?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,i){if(e&1&&Rt(Tt,7)(os,7),e&2){let r;W(r=Y())&&(i._portalOutlet=r.first),W(r=Y())&&(i._label=r.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(e,i){e&1&&Ht("animationend",function(a){return i.onAnimationEnd(a.animationName)})("animationcancel",function(a){return i.onAnimationEnd(a.animationName)}),e&2&&B("mat-snack-bar-container-enter",i._animationState==="visible")("mat-snack-bar-container-exit",i._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!i._animationsDisabled)},features:[C],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(R(0,"div",1)(1,"div",2,0)(3,"div",3),ft(4,rs,0,0,"ng-template",4),E(),jt(5,"div"),E()()),e&2&&(M(5),V("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[Tt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return n})(),ms=new g("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new fe}),Ph=(()=>{class n{_live=s(si);_injector=s(x);_breakpointObserver=s(Ae);_parentSnackBar=s(n,{optional:!0,skipSelf:!0});_defaultConfig=s(ms);_animationsDisabled=_t();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ds;snackBarContainerComponent=us;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",i){let r=D(D({},this._defaultConfig),i);return r.data={message:t,action:e},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector,r=x.create({parent:i||this._injector,providers:[{provide:fe,useValue:e}]}),a=new Ct(this.snackBarContainerComponent,e.viewContainerRef,r),l=t.attach(a);return l.instance.snackBarConfig=e,l.instance}_attach(t,e){let i=D(D(D({},new fe),this._defaultConfig),e),r=this._createOverlay(i),a=this._attachSnackBarContainer(r,i),l=new Le(a,r);if(t instanceof K){let c=new It(t,null,{$implicit:i.data,snackBarRef:l});l.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(i,l),u=new Ct(t,void 0,c),d=a.attachComponentPortal(u);l.instance=d.instance}return this._breakpointObserver.observe(Lo.HandsetPortrait).pipe(Q(r.detachments())).subscribe(c=>{r.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),i.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(l,i),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let e=new Pt;e.direction=t.direction;let i=Nt(this._injector),r=t.direction==="rtl",a=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!r||t.horizontalPosition==="end"&&r,l=!a&&t.horizontalPosition!=="center";return a?i.left("0"):l?i.right("0"):i.centerHorizontally(),t.verticalPosition==="top"?i.top("0"):i.bottom("0"),e.positionStrategy=i,e.disableAnimations=this._animationsDisabled,me(this._injector,e)}_createInjector(t,e){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector;return x.create({parent:i||this._injector,providers:[{provide:Le,useValue:e},{provide:Fr,useValue:t.data}]})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Jt={production:!0,apiUrl:""};var Mn=class n{http=s(Ze);apiUrl=Jt.apiUrl;getInvoices(){return Jt.production?this.http.get("/stockflow/assets/mock-data.json").pipe(Ve(600),z(o=>o.invoices)):this.http.get(`${this.apiUrl}/invoices`)}getInvoice(o){return Jt.production?this.http.get("/stockflow/assets/mock-data.json").pipe(Ve(600),z(t=>{let e=t.invoices.find(i=>i.id===o);if(!e)throw new Error(`Invoice ${o} not found`);return e})):this.http.get(`${this.apiUrl}/invoices/${o}`)}markAsReviewed(o){return Jt.production?this.getInvoice(o).pipe(z(t=>({success:!0,message:"Invoice marked as reviewed.",updatedInvoice:Dt(D({},t),{status:"reviewed"})}))):this.http.patch(`${this.apiUrl}/invoices/${o}`,{status:"reviewed"}).pipe(z(t=>({success:!0,message:"Invoice marked as reviewed.",updatedInvoice:t})))}commitInvoice(o){return Jt.production?this.getInvoice(o).pipe(Ve(800),z(t=>({success:!0,message:"Invoice committed to stock successfully.",updatedInvoice:Dt(D({},t),{status:"committed"})}))):this.http.patch(`${this.apiUrl}/invoices/${o}`,{status:"committed"}).pipe(z(t=>({success:!0,message:"Invoice committed to stock successfully.",updatedInvoice:t})))}rejectInvoice(o){return Jt.production?this.getInvoice(o).pipe(z(t=>({success:!0,message:"Invoice rejected.",updatedInvoice:Dt(D({},t),{status:"rejected"})}))):this.http.patch(`${this.apiUrl}/invoices/${o}`,{status:"rejected"}).pipe(z(t=>({success:!0,message:"Invoice rejected.",updatedInvoice:t})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=f({token:n,factory:n.\u0275fac,providedIn:"root"})};var Pr=class n{status=Ji.required();badgeClass=jn(()=>({pending:"bg-amber-100 text-amber-800",reviewed:"bg-blue-100 text-blue-800",committed:"bg-green-100 text-green-800",rejected:"bg-red-100 text-red-800"})[this.status()]);label=jn(()=>this.status());static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-status-badge"]],inputs:{status:[1,"status"]},decls:2,vars:3,template:function(t,e){t&1&&(be(0,"span"),$(1),ve()),t&2&&(Et(e.badgeClass()),M(),ye(e.label()))},styles:["span[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:2px 10px;border-radius:9999px;font-size:.75rem;font-weight:600;letter-spacing:.025em;text-transform:capitalize}"],changeDetection:0})};var fs=["determinateSpinner"];function ps(n,o){if(n&1&&(Nn(),R(0,"svg",11),jt(1,"circle",12),E()),n&2){let t=yt();V("viewBox",t._viewBox()),M(),Ut("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),V("r",t._circleRadius())}}var gs=new g("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Nr})}),Nr=100,_s=10,Lr=(()=>{class n{_elementRef=s(w);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=s(gs),e=hi(),i=this._elementRef.nativeElement;this._noopAnimations=e==="di-disabled"&&!!t&&!t._forceAnimations,this.mode=i.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&e==="reduced-motion"&&i.classList.add("mat-progress-spinner-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),t.diameter&&(this.diameter=t.diameter),t.strokeWidth&&(this.strokeWidth=t.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Nr;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-_s)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(e,i){if(e&1&&Rt(fs,5),e&2){let r;W(r=Y())&&(i._determinateCircle=r.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(e,i){e&2&&(V("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),Et("mat-"+i.color),Ut("width",i.diameter,"px")("height",i.diameter,"px")("--mat-progress-spinner-size",i.diameter+"px")("--mat-progress-spinner-active-indicator-width",i.diameter+"px"),B("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",oe],diameter:[2,"diameter","diameter",oe],strokeWidth:[2,"strokeWidth","strokeWidth",oe]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(e,i){if(e&1&&(ft(0,ps,2,8,"ng-template",null,0,Qi),R(2,"div",2,1),Nn(),R(4,"svg",3),jt(5,"circle",4),E()(),Wi(),R(6,"div",5)(7,"div",6)(8,"div",7),H(9,8),E(),R(10,"div",9),H(11,8),E(),R(12,"div",10),H(13,8),E()()()),e&2){let r=Zi(1);M(4),V("viewBox",i._viewBox()),M(),Ut("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),V("r",i._circleRadius()),M(4),zt("ngTemplateOutlet",r),M(2),zt("ngTemplateOutlet",r),M(2),zt("ngTemplateOutlet",r)}},dependencies:[eo],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Br=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=S({type:n});static \u0275inj=k({imports:[X]})}return n})();function vs(n,o){if(n&1&&(R(0,"div",5),$(1),E()),n&2){let t=yt();M(),Wt(" ",t.errorMessage()," ")}}function ys(n,o){n&1&&jt(0,"mat-spinner",9)}function ws(n,o){n&1&&$(0," Confirm Commit ")}var zr=class n{data=s(Ei);dialogRef=s(Qt);invoiceService=s(Mn);isCommitting=xt(!1);errorMessage=xt(null);confirm(){this.isCommitting.set(!0),this.errorMessage.set(null),this.invoiceService.commitInvoice(this.data.invoiceId).subscribe({next:o=>{this.isCommitting.set(!1),o.success?this.dialogRef.close(o.updatedInvoice):this.errorMessage.set(o.message||"Commit failed. Please try again.")},error:()=>{this.isCommitting.set(!1),this.errorMessage.set("An unexpected error occurred. Please try again.")}})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["app-commit-dialog"]],decls:20,vars:9,consts:[["mat-dialog-title","",1,"text-lg","font-semibold"],[1,"text-slate-600","mb-2"],[1,"text-slate-900"],[1,"text-slate-600"],[1,"text-slate-900","text-lg"],[1,"mt-3","p-3","bg-red-50","border","border-red-200","rounded","text-red-700","text-sm"],["align","end"],["mat-stroked-button","",3,"mat-dialog-close","disabled"],["mat-flat-button","","color","primary",1,"ml-2","min-w-[100px]",3,"click","disabled"],["diameter","18",1,"inline-block"]],template:function(t,e){t&1&&(R(0,"h2",0),$(1,"Commit Invoice"),E(),R(2,"mat-dialog-content")(3,"p",1),$(4," Are you sure you want to commit invoice "),R(5,"strong",2),$(6),E(),$(7," to stock? "),E(),R(8,"p",3),$(9," Total amount: "),R(10,"strong",4),$(11),Ki(12,"currency"),E()(),at(13,vs,2,1,"div",5),E(),R(14,"mat-dialog-actions",6)(15,"button",7),$(16," Cancel "),E(),R(17,"button",8),Ht("click",function(){return e.confirm()}),at(18,ys,1,0,"mat-spinner",9)(19,ws,1,0),E()()),t&2&&(M(6),ye(e.data.invoiceNumber),M(5),ye(qi(12,7,e.data.total)),M(2),st(e.errorMessage()?13:-1),M(2),zt("mat-dialog-close",null)("disabled",e.isCommitting()),M(2),zt("disabled",e.isCommitting()),M(),st(e.isCommitting()?18:19))},dependencies:[Tr,Rr,Or,Ir,Mr,vi,bn,Br,Lr,no],encapsulation:2,changeDetection:0})};export{pt as a,A as b,we as c,gt as d,X as e,Ce as f,Hn as g,Il as h,$l as i,Xl as j,Gl as k,Zl as l,Kl as m,ql as n,Ql as o,Jl as p,tc as q,ec as r,nc as s,Ie as t,nt as u,mn as v,ko as w,li as x,hn as y,it as z,fd as A,wd as B,_t as C,Ma as D,bn as E,vi as F,Tu as G,Fu as H,Ct as I,dr as J,gr as K,me as L,he as M,Oi as N,Ph as O,Mn as P,Pr as Q,Lr as R,Br as S,zr as T};
