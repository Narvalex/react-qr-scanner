"use strict";(self.webpackChunk_yudiel_react_qr_scanner=self.webpackChunk_yudiel_react_qr_scanner||[]).push([[836],{"./stories/MediaDevice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ListDevices:()=>ListDevices,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Template(){const state=(0,_src__WEBPACK_IMPORTED_MODULE_1__.w)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre",{children:JSON.stringify(state,null,2)})}Template.displayName="Template";const ListDevices=Template.bind({}),__WEBPACK_DEFAULT_EXPORT__={title:"Media Device"},__namedExportsOrder=["ListDevices"]},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>QrScanner,w:()=>useMediaDevices});var react=__webpack_require__("./node_modules/react/index.js");var defaultConstraints=__webpack_require__("./src/misc/defaultConstraints.ts");const useMediaDevices="undefined"!=typeof navigator&&navigator.mediaDevices?constraints=>{const[state,setState]=(0,react.useState)([]);return(0,react.useEffect)((()=>{let mediaStream,mounted=!0,newConstraints={audio:!1,video:constraints??defaultConstraints.i};const onChange=()=>{navigator.mediaDevices.getUserMedia(newConstraints).then((stream=>{let settings=[];mediaStream=stream,stream.getVideoTracks().forEach((track=>{settings.push(track.getSettings())})),setState(settings)})).catch((error=>console.log(error)))};return function on(obj,...args){obj&&obj.addEventListener&&obj.addEventListener(...args)}(navigator.mediaDevices,"devicechange",onChange),onChange(),()=>{mounted=!1,function off(obj,...args){obj&&obj.removeEventListener&&obj.removeEventListener(...args)}(navigator.mediaDevices,"devicechange",onChange),void 0!==mediaStream&&mediaStream.getVideoTracks().forEach((track=>{track.stop()}))}}),[]),state}:()=>[];var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tracker=props=>{const{result,video,constraints,deviceId,scanDelay}=props,canvasRef=(0,react.useRef)(null),devices=useMediaDevices(constraints);return(0,react.useEffect)((()=>{if(void 0===result||null===canvasRef.current||null===video||11!==result.getBarcodeFormat())return;let device=devices[0];if(void 0!==deviceId&&devices.length>1){let value=devices.find((d=>d.deviceId===deviceId));void 0!==value&&(device=value)}if(void 0===device||void 0===device.width)return;const scaleFactor=device.width/video.clientWidth,canvas=canvasRef.current,ctx=canvas.getContext("2d");if(null===ctx)return;const timer=setTimeout((()=>{ctx.clearRect(0,0,canvas.width,canvas.height)}),scanDelay);ctx.strokeStyle="rgba(0, 255, 0, 0.5)",ctx.lineWidth=4;const point0=result.getResultPoints()[0];ctx.beginPath(),ctx.arc(point0.getX()/scaleFactor,point0.getY()/scaleFactor,point0.estimatedModuleSize,0,2*Math.PI),ctx.stroke(),ctx.closePath();const point1=result.getResultPoints()[1];ctx.beginPath(),ctx.arc(point1.getX()/scaleFactor,point1.getY()/scaleFactor,point1.estimatedModuleSize,0,2*Math.PI),ctx.stroke(),ctx.closePath();const point2=result.getResultPoints()[2];if(ctx.beginPath(),ctx.arc(point2.getX()/scaleFactor,point2.getY()/scaleFactor,point2.estimatedModuleSize,0,2*Math.PI),ctx.stroke(),ctx.closePath(),result.getResultPoints().length>=4){const point3=result.getResultPoints()[3];ctx.beginPath(),ctx.arc(point3.getX()/scaleFactor,point3.getY()/scaleFactor,point3.estimatedModuleSize,0,2*Math.PI),ctx.stroke(),ctx.closePath()}return()=>clearTimeout(timer)})),(0,jsx_runtime.jsx)("canvas",{ref:canvasRef,width:video?.clientWidth??0,height:video?.clientHeight??0,style:{position:"absolute",top:0,zIndex:2}})};Tracker.displayName="Tracker";const components_Tracker=Tracker;try{Tracker.displayName="Tracker",Tracker.__docgenInfo={description:"",displayName:"Tracker",props:{result:{defaultValue:null,description:"",name:"result",required:!1,type:{name:"Result"}},video:{defaultValue:null,description:"",name:"video",required:!0,type:{name:"HTMLVideoElement | null"}},constraints:{defaultValue:null,description:"",name:"constraints",required:!1,type:{name:"MediaTrackConstraints"}},deviceId:{defaultValue:null,description:"",name:"deviceId",required:!1,type:{name:"string"}},scanDelay:{defaultValue:null,description:"",name:"scanDelay",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tracker.tsx#Tracker"]={docgenInfo:Tracker.__docgenInfo,name:"Tracker",path:"src/components/Tracker.tsx#Tracker"})}catch(__react_docgen_typescript_loader_error){}const styles={count:{bottom:0,right:5,fontSize:30,color:"#fff",position:"absolute",zIndex:1}},Counter=props=>{const{scanCount}=props;return(0,jsx_runtime.jsx)("div",{style:styles.count,children:scanCount})};Counter.displayName="Counter";const components_Counter=Counter;try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{scanCount:{defaultValue:null,description:"",name:"scanCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"src/components/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}const Finder=props=>{const{scanCount,hideCount,tracker,border=80,result,video,constraints,deviceId,scanDelay}=props,[color,setColor]=(0,react.useState)("rgba(255, 0, 0, 0.5)");return(0,react.useEffect)((()=>{if(11==result?.getBarcodeFormat()&&tracker)return void setColor("rgba(255, 0, 0, 0.5)");setColor("rgba(0, 255, 0, 0.5)");let timer=setTimeout((()=>{setColor("rgba(255, 0, 0, 0.5)")}),scanDelay);return()=>{clearTimeout(timer)}}),[scanCount]),(0,jsx_runtime.jsxs)(react.Fragment,{children:[!hideCount&&(0,jsx_runtime.jsx)(components_Counter,{scanCount}),tracker&&(0,jsx_runtime.jsx)(components_Tracker,{video,result,constraints,deviceId,scanDelay}),(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 100 100",style:{top:0,left:0,zIndex:1,boxSizing:"border-box",border:`${border}px solid rgba(0, 0, 0, 0.1)`,position:"absolute",width:"100%",height:"100%"},children:[(0,jsx_runtime.jsx)("path",{fill:"none",d:"M23,0 L0,0 L0,23",stroke:color,strokeWidth:"5"}),(0,jsx_runtime.jsx)("path",{fill:"none",d:"M0,77 L0,100 L23,100",stroke:color,strokeWidth:"5"}),(0,jsx_runtime.jsx)("path",{fill:"none",d:"M77,100 L100,100 L100,77",stroke:color,strokeWidth:"5"}),(0,jsx_runtime.jsx)("path",{fill:"none",d:"M100,23 L100,0 77,0",stroke:color,strokeWidth:"5"})]})]})};Finder.displayName="Finder";try{Finder.displayName="Finder",Finder.__docgenInfo={description:"",displayName:"Finder",props:{scanCount:{defaultValue:null,description:"",name:"scanCount",required:!0,type:{name:"number"}},hideCount:{defaultValue:null,description:"",name:"hideCount",required:!0,type:{name:"boolean"}},tracker:{defaultValue:null,description:"",name:"tracker",required:!0,type:{name:"boolean"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"number"}},result:{defaultValue:null,description:"",name:"result",required:!1,type:{name:"Result"}},video:{defaultValue:null,description:"",name:"video",required:!0,type:{name:"HTMLVideoElement | null"}},constraints:{defaultValue:null,description:"",name:"constraints",required:!1,type:{name:"MediaTrackConstraints"}},deviceId:{defaultValue:null,description:"",name:"deviceId",required:!1,type:{name:"string"}},scanDelay:{defaultValue:null,description:"",name:"scanDelay",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Finder.tsx#Finder"]={docgenInfo:Finder.__docgenInfo,name:"Finder",path:"src/components/Finder.tsx#Finder"})}catch(__react_docgen_typescript_loader_error){}var esm=__webpack_require__("./node_modules/@zxing/library/esm/index.js");const isDateObject=value=>value instanceof Date,isNullOrUndefined=value=>null==value,isObjectType=value=>"object"==typeof value,isObject=value=>!isNullOrUndefined(value)&&!Array.isArray(value)&&isObjectType(value)&&!isDateObject(value),isPrimitive=value=>isNullOrUndefined(value)||!isObjectType(value);function deepEqual(object1,object2){if(isPrimitive(object1)||isPrimitive(object2))return object1===object2;if(isDateObject(object1)&&isDateObject(object2))return object1.getTime()===object2.getTime();const keys1=Object.keys(object1),keys2=Object.keys(object2);if(keys1.length!==keys2.length)return!1;for(const key of keys1){const val1=object1[key];if(!keys2.includes(key))return!1;if("ref"!==key){const val2=object2[key];if(isDateObject(val1)&&isDateObject(val2)||isObject(val1)&&isObject(val2)||Array.isArray(val1)&&Array.isArray(val2)?!deepEqual(val1,val2):val1!==val2)return!1}}return!0}const useQrScanner=props=>{const{onResult,onError,scanDelay,hints,deviceId,stopDecoding}=props,isMounted=(0,react.useRef)(!1),onResultRef=(0,react.useRef)(onResult),onErrorRef=(0,react.useRef)(onError),videoRef=(0,react.useRef)(null),[constraints,setConstraints]=(0,react.useState)(props.constraints),reader=(0,react.useMemo)((()=>new esm.BrowserMultiFormatReader(hints,scanDelay)),[]),onDecode=(0,react.useCallback)(((result,error)=>{result&&onResultRef.current(result),!error||error instanceof esm.NotFoundException||onErrorRef.current(error)}),[]),readerReset=(0,react.useCallback)((()=>{reader.reset()}),[reader]),readerStop=(0,react.useCallback)((()=>{reader.stopAsyncDecode()}),[reader]),readerStart=(0,react.useCallback)((async()=>{if(videoRef.current)try{if(deviceId)await reader.decodeFromVideoDevice(deviceId,videoRef.current,onDecode);else{let newConstraints={audio:!1,video:constraints};await reader.decodeFromConstraints(newConstraints,videoRef.current,onDecode)}}catch(error){onErrorRef.current(error)}}),[reader,deviceId,constraints,onDecode]);return(0,react.useEffect)((()=>{if(isMounted.current=!0,!stopDecoding)return(async()=>{await readerStart(),isMounted.current||readerReset()})(),()=>{isMounted.current=!1,readerReset()};readerStop()}),[readerStart,readerReset,stopDecoding]),(0,react.useEffect)((()=>{deepEqual(props.constraints,constraints)||setConstraints(props.constraints)}),[props.constraints]),(0,react.useEffect)((()=>{onResultRef.current=onResult}),[onResult]),(0,react.useEffect)((()=>{onErrorRef.current=onError}),[onError]),{ref:videoRef,start:readerStart,stop:stopDecoding}},QrScanner_styles_container={width:"100%",paddingTop:"100%",overflow:"hidden",position:"relative"},QrScanner_styles_video={top:0,left:0,width:"100%",height:"100%",display:"block",overflow:"hidden",position:"absolute"},QrScanner=props=>{const{containerStyle,videoStyle,constraints=defaultConstraints.i,onResult,onDecode,viewFinder:ViewFinder,hideCount=!0,tracker=!1,viewFinderBorder,deviceId,scanDelay=100,...rest}=props,[scanCount,setScanCount]=(0,react.useState)(0),[result,setResult]=(0,react.useState)(),{ref}=useQrScanner({onResult:result=>{setResult(result),onResult&&onResult(result),onDecode&&onDecode(result.getText()),setScanCount((count=>count+1))},constraints,deviceId,scanDelay,...rest});return(0,jsx_runtime.jsxs)("div",{style:{...QrScanner_styles_container,...containerStyle},children:[ViewFinder?(0,jsx_runtime.jsx)(ViewFinder,{}):(0,jsx_runtime.jsx)(Finder,{video:ref.current,result,scanCount,hideCount,tracker,border:viewFinderBorder,constraints,deviceId,scanDelay}),(0,jsx_runtime.jsx)("video",{ref,muted:!0,playsInline:!0,style:{...QrScanner_styles_video,...videoStyle}})]})};QrScanner.displayName="QrScanner";try{QrScanner.displayName="QrScanner",QrScanner.__docgenInfo={description:"",displayName:"QrScanner",props:{onError:{defaultValue:null,description:"",name:"onError",required:!0,type:{name:"OnErrorFunction"}},onResult:{defaultValue:null,description:"",name:"onResult",required:!1,type:{name:"OnResultFunction"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},videoStyle:{defaultValue:null,description:"",name:"videoStyle",required:!1,type:{name:"CSSProperties"}},onDecode:{defaultValue:null,description:"",name:"onDecode",required:!1,type:{name:"((result: string) => void)"}},viewFinder:{defaultValue:null,description:"",name:"viewFinder",required:!1,type:{name:"((props: any) => ReactElement<any, string | JSXElementConstructor<any>> | null)"}},hideCount:{defaultValue:null,description:"",name:"hideCount",required:!1,type:{name:"boolean"}},tracker:{defaultValue:null,description:"",name:"tracker",required:!1,type:{name:"boolean"}},viewFinderBorder:{defaultValue:null,description:"",name:"viewFinderBorder",required:!1,type:{name:"number"}},constraints:{defaultValue:null,description:"",name:"constraints",required:!1,type:{name:"MediaTrackConstraints"}},scanDelay:{defaultValue:null,description:"",name:"scanDelay",required:!1,type:{name:"number"}},deviceId:{defaultValue:null,description:"",name:"deviceId",required:!1,type:{name:"string"}},hints:{defaultValue:null,description:"",name:"hints",required:!1,type:{name:"Map<DecodeHintType, any>"}},stopDecoding:{defaultValue:null,description:"",name:"stopDecoding",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/QrScanner.tsx#QrScanner"]={docgenInfo:QrScanner.__docgenInfo,name:"QrScanner",path:"src/components/QrScanner.tsx#QrScanner"})}catch(__react_docgen_typescript_loader_error){}},"./src/misc/defaultConstraints.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>defaultConstraints});const defaultConstraints={facingMode:"environment",width:{min:640,ideal:720,max:1920},height:{min:640,ideal:720,max:1080}}}}]);