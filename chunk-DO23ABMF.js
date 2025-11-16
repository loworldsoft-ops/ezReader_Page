import{$ as w}from"./chunk-5MJKAG7Y.js";var s=class{static validateCoordinate(t,e=0){if(typeof t=="number"&&!isNaN(t))return t;if(typeof t=="string"){let o=parseFloat(t);if(!isNaN(o))return o}return e}static convertToSvgY(t,e,o=1,n=!1){if(!isFinite(t)||!isFinite(e)||e<=0)return console.warn(`\u26A0\uFE0F \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uC88C\uD45C: pdfY=${t}, height=${e}`),Math.max(0,e/2);let c=t/o;if(c>e*1.5){let g=e*.9/c,d=c*g,i=e-d;return n&&console.log(`\u{1F4D0} \uB300\uD615 PDF \uC88C\uD45C \uCD94\uAC00 \uC2A4\uCF00\uC77C\uB9C1:
          \uC6D0\uBCF8 PDF Y: ${t.toFixed(2)}
          1\uCC28 \uC2A4\uCF00\uC77C (/${o.toFixed(3)}): ${c.toFixed(2)}
          \uCD94\uAC00 \uC2A4\uCF00\uC77C (*${g.toFixed(3)}): ${d.toFixed(2)}
          \uCD5C\uC885 SVG Y: ${i.toFixed(2)}
          \uCE94\uBC84\uC2A4 \uB192\uC774: ${e}`),Math.max(0,Math.min(e,i))}let a=e-c;if(a<0){let g=Math.max(0,e*.05);return n&&console.warn(`\u26A0\uFE0F \uC74C\uC218 SVG Y \uC88C\uD45C \uBCF4\uC815:
          \uC6D0\uBCF8 PDF Y: ${t.toFixed(2)}
          \uC2A4\uCF00\uC77C \uD6C4: ${c.toFixed(2)}
          \uACC4\uC0B0\uB41C SVG Y: ${a.toFixed(2)} \u2192 \uBCF4\uC815: ${g.toFixed(2)}
          (scaleFactor: ${o.toFixed(3)}, height: ${e})`),g}if(a>e){let g=e*.95;return n&&console.warn(`\u26A0\uFE0F \uBC94\uC704 \uCD08\uACFC SVG Y \uC88C\uD45C \uBCF4\uC815:
          \uC6D0\uBCF8 PDF Y: ${t.toFixed(2)}
          \uC2A4\uCF00\uC77C \uD6C4: ${c.toFixed(2)}
          \uACC4\uC0B0\uB41C SVG Y: ${a.toFixed(2)} \u2192 \uBCF4\uC815: ${g.toFixed(2)}
          (scaleFactor: ${o.toFixed(3)}, height: ${e})`),g}return n&&Math.random()<.01&&console.log(`\u2713 \uC815\uC0C1 \uBCC0\uD658: PDF Y ${t.toFixed(2)} \u2192 SVG Y ${a.toFixed(2)} (scale: ${o.toFixed(3)})`),a}static convertToSvgX(t,e,o=1){if(!isFinite(t)||!isFinite(e)||e<=0)return console.warn(`\u26A0\uFE0F \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 X \uC88C\uD45C: pdfX=${t}, width=${e}`),Math.max(0,e/2);let n=t/o;return n<0?(console.warn(`\u26A0\uFE0F \uC74C\uC218 X \uC88C\uD45C \uBCF4\uC815: ${n} -> 0`),0):n>e?(console.warn(`\u26A0\uFE0F X \uC88C\uD45C \uBC94\uC704 \uCD08\uACFC \uBCF4\uC815: ${n} -> ${e}`),e):n}static convertPointToSvg(t,e,o=1,n=!1){return{x:this.convertToSvgX(t.x,e.width,o),y:this.convertToSvgY(t.y,e.height,o,n)}}static applyTransform(t,e){if(!e||e.length<6)return t;let[o,n,c,a,g,d]=e;return{x:o*t.x+c*t.y+g,y:n*t.x+a*t.y+d}}static analyzeCoordinateRange(t,e){let o=1/0,n=-1/0,c=1/0,a=-1/0;t.forEach(l=>{l.coordinates&&(typeof l.coordinates.x=="number"&&(o=Math.min(o,l.coordinates.x),n=Math.max(n,l.coordinates.x)),typeof l.coordinates.y=="number"&&(c=Math.min(c,l.coordinates.y),a=Math.max(a,l.coordinates.y))),Array.isArray(l.args)&&l.args.forEach(m=>{typeof m=="number"&&m>=0&&m<=2e3&&(o=Math.min(o,m),n=Math.max(n,m),c=Math.min(c,m),a=Math.max(a,m))})}),isFinite(o)||(o=0),isFinite(n)||(n=e.width),isFinite(c)||(c=0),isFinite(a)||(a=e.height);let g=n>e.width*1.2||o<-e.width*.2,d=a>e.height*1.2||c<-e.height*.2,i=g||d,r=1;if(i){let l=n>e.width?n/(e.width*.9):1,m=a>e.height?a/(e.height*.9):1;r=Math.max(l,m),console.log("\u{1F50D} \uC2A4\uCF00\uC77C \uACC4\uC0B0 \uC0C1\uC138:",{maxX:n,maxY:a,"dimensions.width":e.width,"dimensions.height":e.height,xScale:isFinite(l)?l.toFixed(3):String(l),yScale:isFinite(m)?m.toFixed(3):String(m),finalScaleFactor:isFinite(r)?r.toFixed(3):String(r)})}return console.log("\u{1F4CA} \uC88C\uD45C \uBC94\uC704 \uBD84\uC11D:",{xRange:{min:o,max:n},yRange:{min:c,max:a},needsScaling:i,scaleFactor:isFinite(r)?r.toFixed(3):String(r)}),{xRange:{min:o,max:n},yRange:{min:c,max:a},needsScaling:i,scaleFactor:r}}static convertToPdfY(t,e,o=1){return!isFinite(t)||!isFinite(e)||e<=0?(console.warn(`\u26A0\uFE0F \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 SVG Y \uC88C\uD45C: svgY=${t}, height=${e}`),0):(e-t)*o}static convertToPdfX(t,e=1){return isFinite(t)?t*e:(console.warn(`\u26A0\uFE0F \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 SVG X \uC88C\uD45C: svgX=${t}`),0)}static convertPointToPdf(t,e,o=1){return{x:this.convertToPdfX(t.x,o),y:this.convertToPdfY(t.y,e,o)}}};var G=class S{constructor(){console.log("\u{1F3A8} VectorSvgGeneratorService \uCD08\uAE30\uD654")}generateSvgFromOperations(t,e){let c=.6722689075630253,a=565/842,g=[],d="",i=!1;for(let r of t.operations)try{switch(r.type){case"moveTo":d&&i&&g.push(d),d=`<path d="M ${r.x*c} ${r.y*a}`,i=!0;break;case"lineTo":i&&(d+=` L ${r.x*c} ${r.y*a}`);break;case"curveTo":i&&(d+=` C ${r.cp1x*c} ${r.cp1y*a}, ${r.cp2x*c} ${r.cp2y*a}, ${r.x*c} ${r.y*a}`);break;case"closePath":if(i){d+=' Z"';let b=r.fill||"none",v=r.stroke||"#000000",$=(r.strokeWidth||1)*Math.min(c,a);d+=` fill="${b}" stroke="${v}" stroke-width="${$}" />`,g.push(d),d="",i=!1}break;case"rect":let l=r.x*c,m=r.y*a,x=r.width*c,u=r.height*a,k=r.fill||"none",f=r.stroke||"#000000";g.push(`<rect x="${l}" y="${m}" width="${x}" height="${u}" fill="${k}" stroke="${f}" />`);break}}catch(l){console.warn("\u26A0\uFE0F Operation \uCC98\uB9AC \uC624\uB958:",r,l)}return d&&i&&(d+='" fill="none" stroke="#000000" />',g.push(d)),`
      <svg xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 400 565" 
           width="100%" 
           height="100%"
           style="background: #ffffff; border: 1px solid #e2e8f0;">
        
        <!-- \uBC30\uACBD -->
        <rect width="100%" height="100%" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
        
        <!-- \uADF8\uB9AC\uB4DC -->
        <defs>
          <pattern id="grid-${e}" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-${e})" />
        
        <!-- \uBCA1\uD130 \uACBD\uB85C\uB4E4 -->
        ${g.join(`
        `)}
        
        <!-- \uD398\uC774\uC9C0 \uC815\uBCF4 -->
        <text x="10" y="20" font-family="Arial" font-size="12" fill="#64748b" font-weight="600">
          Page ${e}
        </text>
        <text x="10" y="35" font-family="Arial" font-size="10" fill="#94a3b8">
          ${t.operations.length} operations
        </text>
      </svg>
    `}generateSvgFromVectorOperations(t,e,o){console.log(`\u{1F3A8} SVG \uC0DD\uC131 \uC2DC\uC791 - \uC5F0\uC0B0 ${t.length}\uAC1C, \uD06C\uAE30 ${e}x${o}`);let n=(f,b=1)=>{let v=typeof f=="number"?f:parseFloat(f);return isFinite(v)?v.toFixed(b):String(f)},c,a,g,d=s.analyzeCoordinateRange(t,{width:e,height:o}),i=d.scaleFactor;console.log("\u{1F4CA} \uC88C\uD45C \uBC94\uC704 \uBD84\uC11D \uACB0\uACFC:",d);let r=[],l=0,m="",x=0,u=0;for(let f of t)try{switch(f.type){case"M":let b=f.args||[];x=s.convertToSvgX(s.validateCoordinate(b[0],0),e,i),u=s.convertToSvgY(s.validateCoordinate(b[1],0),o,i),m+=` M${n(x)},${n(u)}`,l++;break;case"L":{let v=f.args||[],$=s.convertToSvgX(s.validateCoordinate(v[0],x),e,i),p=s.convertToSvgY(s.validateCoordinate(v[1],u),o,i);m+=` L${n($)},${n(p)}`,x=$,u=p,l++}break;case"C":{let v=f.args||[],$=s.convertToSvgX(s.validateCoordinate(v[0]),e,i),p=s.convertToSvgY(s.validateCoordinate(v[1]),o,i),h=s.convertToSvgX(s.validateCoordinate(v[2]),e,i),y=s.convertToSvgY(s.validateCoordinate(v[3]),o,i);x=s.convertToSvgX(s.validateCoordinate(v[4]),e,i),u=s.convertToSvgY(s.validateCoordinate(v[5]),o,i),m+=` C${n($)},${n(p)} ${n(h)},${n(y)} ${n(x)},${n(u)}`,l++}break;case"re":{let v=f.args||[],$=s.convertToSvgX(s.validateCoordinate(v[0],0),e,i),p=s.validateCoordinate(v[1],0),h=Math.abs(s.validateCoordinate(v[2],50))/i,y=Math.abs(s.validateCoordinate(v[3],50))/i,F=s.convertToSvgY(p+y*i,o,i);m+=` M${n($)},${n(F)} L${n($+h)},${n(F)} L${n($+h)},${n(F+y)} L${n($)},${n(F+y)} Z`,l++}break;case"h":m+=" Z",l++;break;case"S":case"f":case"B":{if(m.trim()){let v=f.fillColor||(f.type==="S"?"none":"#000000"),$=f.strokeColor||(f.type==="f"?"none":"#000000"),p=f.strokeWidth||1;r.push(`<path d="${m.trim()}" fill="${v}" stroke="${$}" stroke-width="${p}" />`),m=""}l++}break;case"Do":{if(c=f.transformMatrix?.[4]||f.coordinates?.x||0,a=f.transformMatrix?.[5]||f.coordinates?.y||0,g=typeof c=="number"&&typeof a=="number"&&isFinite(c)&&isFinite(a),g){let v=s.convertToSvgX(s.validateCoordinate(f.transformMatrix[4]),e,i),$=s.convertToSvgY(s.validateCoordinate(f.transformMatrix[5]),o,i)}else{let v=s.convertToSvgX(s.validateCoordinate(f.coordinates.x),e,i),$=s.convertToSvgY(s.validateCoordinate(f.coordinates.y),o,i)}l++}break;default:console.log(`\u26A0\uFE0F \uBBF8\uCC98\uB9AC \uC5F0\uC0B0 \uD0C0\uC785: ${f.type}`)}}catch(b){console.warn("\u274C \uC5F0\uC0B0 \uCC98\uB9AC \uC624\uB958:",f,b)}return m.trim()&&r.push(`<path d="${m.trim()}" fill="none" stroke="#000000" stroke-width="1" />`),console.log(`\u{1F4CA} SVG \uC0DD\uC131 \uACB0\uACFC: ${l}\uAC1C \uC5F0\uC0B0 \uCC98\uB9AC, ${r.length}\uAC1C SVG \uC694\uC18C \uC0DD\uC131`),`
      <svg xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 ${e} ${o}" 
           width="100%" 
           height="100%"
           style="background: #ffffff;">
        <g>
          ${r.join(`
          `)}
        </g>
      </svg>
    `}downloadLogData(t,e,o=!1){try{if(console.log("\u{1F4CA} SVG \uC0DD\uC131 \uD1B5\uACC4:",{\uCC98\uB9AC\uC2DC\uAC04:`${t.svgGeneration.statistics.processingTime.toFixed(2)}ms`,\uCD1D\uC5F0\uC0B0\uC218:t.svgGeneration.totalOperations,\uCC98\uB9AC\uB41C\uC5F0\uC0B0:t.svgGeneration.processedOperations.filter(r=>r.processed).length,SVG\uC694\uC18C\uC0DD\uC131:t.svgGeneration.statistics.elementsGenerated,\uC5F0\uC0B0\uD0C0\uC785\uD1B5\uACC4:t.svgGeneration.statistics.byOperationType}),!o){console.log("\u2139\uFE0F SVG \uB514\uBC84\uADF8 \uB85C\uADF8 \uB2E4\uC6B4\uB85C\uB4DC \uBE44\uD65C\uC131\uD654 (\uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C\uB9CC \uD65C\uC131\uD654)");return}let n=t.svgGeneration.finalSvg||"",c=r=>r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),a=`
<!--
=== SVG \uC0DD\uC131 \uB514\uBC84\uAE45 \uC815\uBCF4 ===
\uC0DD\uC131 \uC2DC\uAC01: ${t.timestamp}
\uCC98\uB9AC \uC2DC\uAC04: ${t.svgGeneration.statistics.processingTime.toFixed(2)}ms
\uCD1D \uC5F0\uC0B0 \uC218: ${t.svgGeneration.totalOperations}
\uCC98\uB9AC\uB41C \uC5F0\uC0B0: ${t.svgGeneration.processedOperations.filter(r=>r.processed).length}
SVG \uC694\uC18C \uC0DD\uC131: ${t.svgGeneration.statistics.elementsGenerated}
\uCE94\uBC84\uC2A4 \uD06C\uAE30: ${t.svgGeneration.dimensions.width}x${t.svgGeneration.dimensions.height}

\uC5F0\uC0B0 \uD0C0\uC785\uBCC4 \uD1B5\uACC4:
${Object.entries(t.svgGeneration.statistics.byOperationType).map(([r,l])=>`  ${r}: ${l}\uAC1C`).join(`
`)}
-->
`;n.includes("<svg")&&(n=n.replace("<svg",a+`
<svg`));let g=new Blob([n],{type:"image/svg+xml"}),d=URL.createObjectURL(g),i=document.createElement("a");i.href=d,i.download=e,i.click(),URL.revokeObjectURL(d),console.log(`\u2705 SVG \uB85C\uADF8 \uB2E4\uC6B4\uB85C\uB4DC \uC644\uB8CC: ${e}`)}catch(n){console.error("\u274C SVG \uB85C\uADF8 \uB2E4\uC6B4\uB85C\uB4DC \uC2E4\uD328:",n)}}static \u0275fac=function(e){return new(e||S)};static \u0275prov=w({token:S,factory:S.\u0275fac,providedIn:"root"})};export{s as a,G as b};
