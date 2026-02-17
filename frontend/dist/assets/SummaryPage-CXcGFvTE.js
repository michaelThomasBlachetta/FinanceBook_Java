import{u as je,a as ie,r as f,b as Ce,c as Oe,d as De,j as o,e as d,f as We,g as Te,R as Ye,h as Le}from"./index-BPsbz2y5.js";import{m as Ee,a as ce,p as de,i as U}from"./types-D4y3Fszm.js";function x(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function j(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}let Fe={};function N(){return Fe}function E(e,t){var l,g,h,m;const n=N(),r=(t==null?void 0:t.weekStartsOn)??((g=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:g.weekStartsOn)??n.weekStartsOn??((m=(h=n.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,a=x(e),s=a.getDay(),c=(s<r?7:0)+s-r;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function I(e){return E(e,{weekStartsOn:1})}function ue(e){const t=x(e),n=t.getFullYear(),r=j(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=I(r),s=j(e,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const c=I(s);return t.getTime()>=a.getTime()?n+1:t.getTime()>=c.getTime()?n:n-1}function Z(e){const t=x(e);return t.setHours(0,0,0,0),t}function K(e){const t=x(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Ie(e,t){const n=Z(e),r=Z(t),a=+n-K(n),s=+r-K(r);return Math.round((a-s)/Ee)}function Ne(e){const t=ue(e),n=j(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),I(n)}function ze(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function qe(e){if(!ze(e)&&typeof e!="number")return!1;const t=x(e);return!isNaN(Number(t))}function Ae(e){const t=x(e),n=j(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const _e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Re=(e,t,n)=>{let r;const a=_e[e];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function _(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const He={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Be={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Qe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Xe={date:_({formats:He,defaultWidth:"full"}),time:_({formats:Be,defaultWidth:"full"}),dateTime:_({formats:Qe,defaultWidth:"full"})},$e={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ve=(e,t,n,r)=>$e[e];function Y(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):c;a=e.formattingValues[l]||e.formattingValues[c]}else{const c=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;a=e.values[l]||e.values[c]}const s=e.argumentCallback?e.argumentCallback(t):t;return a[s]}}const Ge={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Je={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ue={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ze={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ke={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},et={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},tt=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},nt={ordinalNumber:tt,era:Y({values:Ge,defaultWidth:"wide"}),quarter:Y({values:Je,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Y({values:Ue,defaultWidth:"wide"}),day:Y({values:Ze,defaultWidth:"wide"}),dayPeriod:Y({values:Ke,defaultWidth:"wide",formattingValues:et,defaultFormattingWidth:"wide"})};function L(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(a);if(!s)return null;const c=s[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(l)?at(l,b=>b.test(c)):rt(l,b=>b.test(c));let h;h=e.valueCallback?e.valueCallback(g):g,h=n.valueCallback?n.valueCallback(h):h;const m=t.slice(c.length);return{value:h,rest:m}}}function rt(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function at(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function ot(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],s=t.match(e.parsePattern);if(!s)return null;let c=e.valueCallback?e.valueCallback(s[0]):s[0];c=n.valueCallback?n.valueCallback(c):c;const l=t.slice(a.length);return{value:c,rest:l}}}const st=/^(\d+)(th|st|nd|rd)?/i,it=/\d+/i,ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},dt={any:[/^b/i,/^(a|c)/i]},ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},lt={any:[/1/i,/2/i,/3/i,/4/i]},ht={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ft={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},bt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},wt={ordinalNumber:ot({matchPattern:st,parsePattern:it,valueCallback:e=>parseInt(e,10)}),era:L({matchPatterns:ct,defaultMatchWidth:"wide",parsePatterns:dt,defaultParseWidth:"any"}),quarter:L({matchPatterns:ut,defaultMatchWidth:"wide",parsePatterns:lt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:L({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:mt,defaultParseWidth:"any"}),day:L({matchPatterns:ft,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),dayPeriod:L({matchPatterns:bt,defaultMatchWidth:"any",parsePatterns:pt,defaultParseWidth:"any"})},yt={code:"en-US",formatDistance:Re,formatLong:Xe,formatRelative:Ve,localize:nt,match:wt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function xt(e){const t=x(e);return Ie(t,Ae(t))+1}function vt(e){const t=x(e),n=+I(t)-+Ne(t);return Math.round(n/ce)+1}function le(e,t){var m,b,v,k;const n=x(e),r=n.getFullYear(),a=N(),s=(t==null?void 0:t.firstWeekContainsDate)??((b=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(v=a.locale)==null?void 0:v.options)==null?void 0:k.firstWeekContainsDate)??1,c=j(e,0);c.setFullYear(r+1,0,s),c.setHours(0,0,0,0);const l=E(c,t),g=j(e,0);g.setFullYear(r,0,s),g.setHours(0,0,0,0);const h=E(g,t);return n.getTime()>=l.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function kt(e,t){var l,g,h,m;const n=N(),r=(t==null?void 0:t.firstWeekContainsDate)??((g=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:g.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(h=n.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,a=le(e,t),s=j(e,0);return s.setFullYear(a,0,r),s.setHours(0,0,0,0),E(s,t)}function Pt(e,t){const n=x(e),r=+E(n,t)-+kt(n,t);return Math.round(r/ce)+1}function u(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const P={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return u(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):u(n+1,2)},d(e,t){return u(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return u(e.getHours()%12||12,t.length)},H(e,t){return u(e.getHours(),t.length)},m(e,t){return u(e.getMinutes(),t.length)},s(e,t){return u(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return u(a,t.length)}},W={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ee={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P.y(e,t)},Y:function(e,t,n,r){const a=le(e,r),s=a>0?a:1-a;if(t==="YY"){const c=s%100;return u(c,2)}return t==="Yo"?n.ordinalNumber(s,{unit:"year"}):u(s,t.length)},R:function(e,t){const n=ue(e);return u(n,t.length)},u:function(e,t){const n=e.getFullYear();return u(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return u(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return P.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Pt(e,r);return t==="wo"?n.ordinalNumber(a,{unit:"week"}):u(a,t.length)},I:function(e,t,n){const r=vt(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):u(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):P.d(e,t)},D:function(e,t,n){const r=xt(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):u(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return u(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),s=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return u(s,t.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return u(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(r===12?a=W.noon:r===0?a=W.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(r>=17?a=W.evening:r>=12?a=W.afternoon:r>=4?a=W.morning:a=W.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):P.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):P.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):P.s(e,t)},S:function(e,t){return P.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ne(r);case"XXXX":case"XX":return S(r);case"XXXXX":case"XXX":default:return S(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ne(r);case"xxxx":case"xx":return S(r);case"xxxxx":case"xxx":default:return S(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+te(r,":");case"OOOO":default:return"GMT"+S(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+te(r,":");case"zzzz":default:return"GMT"+S(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return u(r,t.length)},T:function(e,t,n){const r=e.getTime();return u(r,t.length)}};function te(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),s=r%60;return s===0?n+String(a):n+String(a)+t+u(s,2)}function ne(e,t){return e%60===0?(e>0?"-":"+")+u(Math.abs(e)/60,2):S(e,t)}function S(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=u(Math.trunc(r/60),2),s=u(r%60,2);return n+a+t+s}const re=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},he=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Mt=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return re(e,t);let s;switch(r){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",re(r,t)).replace("{{time}}",he(a,t))},St={p:he,P:Mt},jt=/^D+$/,Ct=/^Y+$/,Ot=["D","DD","YY","YYYY"];function Dt(e){return jt.test(e)}function Wt(e){return Ct.test(e)}function Tt(e,t,n){const r=Yt(e,t,n);if(console.warn(r),Ot.includes(e))throw new RangeError(r)}function Yt(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ft=/^'([^]*?)'?$/,It=/''/g,Nt=/[a-zA-Z]/;function me(e,t,n){var m,b,v,k;const r=N(),a=r.locale??yt,s=r.firstWeekContainsDate??((b=(m=r.locale)==null?void 0:m.options)==null?void 0:b.firstWeekContainsDate)??1,c=r.weekStartsOn??((k=(v=r.locale)==null?void 0:v.options)==null?void 0:k.weekStartsOn)??0,l=x(e);if(!qe(l))throw new RangeError("Invalid time value");let g=t.match(Et).map(w=>{const p=w[0];if(p==="p"||p==="P"){const M=St[p];return M(w,a.formatLong)}return w}).join("").match(Lt).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const p=w[0];if(p==="'")return{isToken:!1,value:zt(w)};if(ee[p])return{isToken:!0,value:w};if(p.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:w}});a.localize.preprocessor&&(g=a.localize.preprocessor(l,g));const h={firstWeekContainsDate:s,weekStartsOn:c,locale:a};return g.map(w=>{if(!w.isToken)return w.value;const p=w.value;(Wt(p)||Dt(p))&&Tt(p,t,String(e));const M=ee[p[0]];return M(l,p,a.localize,h)}).join("")}function zt(e){const t=e.match(Ft);return t?t[1].replace(It,"'"):e}const qt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3crect%20width='24'%20height='24'%20fill='%232a2a2a'/%3e%3cpath%20d='M10%2020H14V11L18%2011L12%203L6%2011L10%2011V20Z'%20fill='%23666'/%3e%3c/svg%3e",At="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3crect%20width='24'%20height='24'%20fill='%232a2a2a'/%3e%3cpath%20d='M10%204H14V13L18%2013L12%2021L6%2013L10%2013V4Z'%20fill='%23666'/%3e%3c/svg%3e",_t="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%204%20L4%2012%20L12%2020%20L12%2015%20L20%2015%20L20%209%20L12%209%20Z'%20fill='%23007bff'/%3e%3c/svg%3e",Rt="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%204%20L20%2012%20L12%2020%20L12%2015%20L4%2015%20L4%209%20L12%209%20Z'%20fill='%23007bff'/%3e%3c/svg%3e",Ht="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23007bff'%20stroke-width='2.2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M21.5%202v6h-6'/%3e%3cpath%20d='M21.3%208A9%209%200%201%201%2018.4%204.6L21.5%208'/%3e%3c/svg%3e",Bt=d.div`
  display: flex; // Arranges the icons in a row.
  align-items: center; // Vertically centers the icons.
  gap: 0.5rem; // Adds a small space between the icons.
`,ae=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  transition: background-color 0.2s ease-in-out;
  border-radius: var(--radius-sm);
  background-color: ${({$active:e})=>e?"#444":"transparent"};

  img {
    width: 25px; // Sets the width of the icon.
    height: 26px; // Sets the height of the icon.
    cursor: pointer; // Shows a hand cursor, indicating it's clickable.
  }

  // On hover, a background color is added to give feedback to the user.
  &:hover {
    background-color: #444;
  }
`,Qt=d.div`
  padding: 1rem; //  adds some space inside the container.
  margin-bottom: 1rem; //  adds some space below the container.
  background: #2a2a2a; //  sets the background color.
  border-radius: var(--radius-lg); //  rounds the corners of the container.
  border: 1px solid #444; //  adds a border around the container.

  h3 {
    margin: 0 0 1rem 0; //  adds some space below the title.
    font-size: 1rem; //  sets the font size.
    color: #eaeaea; //  sets the text color.
  }
`,Xt=d.div`
  display: flex; //  arranges the items in a row.
  gap: 0.5rem; //  adds some space between the items.
  margin-bottom: 1rem; //  adds some space below the container.
  align-items: center; //  vertically aligns the items in the center.

  select {
    flex: 1; //  makes the dropdown take up as much space as possible.
    padding: 0.5rem; //  adds some space inside the dropdown.
    background-color: #333; //  sets the background color.
    color: #eaeaea; //  sets the text color.
    border: 1px solid #555; //  adds a border around the dropdown.
    border-radius: var(--radius-md); //  rounds the corners of the dropdown.
    font-size: 0.9rem; //  sets the font size.

    // When you click on the dropdown, we highlight it with a green border.
    &:focus {
      outline: none; //  removes the default blue outline.
      border-color: var(--color-positive); //  sets the border color to green.
    }
  }
`,$t=d.button`
  background: var(--color-positive); //  sets the background color to green.
  color: white; //  sets the text color to white.
  border: none; //  removes the button border.
  padding: 0.5rem 1rem; //  adds some space inside the button.
  border-radius: var(--radius-md); //  rounds the corners of the button.
  font-size: 0.9rem; //  sets the font size.
  cursor: pointer; //  shows a hand cursor when you hover over the button.
  white-space: nowrap; //  prevents the text from wrapping to the next line.
  transition: background-color 0.2s ease; //  creates a smooth color change on hover.

  //  makes the button a darker green when you hover over it.
  &:hover {
    background: #059669;
  }

  //  styles the button when it's disabled.
  &:disabled {
    background: #666; //  sets a grey background color.
    cursor: not-allowed; //  shows a "not allowed" cursor.
  }
`,Vt=d.div`
  display: flex; //  arranges the tags in a row.
  flex-wrap: wrap; //  allows the tags to wrap to the next line if there's not enough space.
  gap: 0.5rem; //  adds some space between the tags.
  margin-bottom: 1rem; //  adds some space below the container.
  min-height: 2rem; //  sets a minimum height for the container.
  align-items: flex-start; //  aligns the tags to the top of the container.
`,Gt=d.div`
  background: #444; //  sets the background color.
  color: #eaeaea; //  sets the text color.
  padding: 0.25rem 0.75rem; //  adds some space inside the tag.
  border-radius: var(--radius-md); //  rounds the corners of the tag.
  font-size: 0.8rem; //  sets the font size.
  display: flex; //  arranges the items in a row.
  align-items: center; //  vertically aligns the items in the center.
  gap: 0.5rem; //  adds some space between the items.

  button {
    background: none; //  makes the button background transparent.
    border: none; //  removes the button border.
    color: #aaa; //  sets the text color.
    cursor: pointer; //  shows a hand cursor when you hover over the button.
    padding: 0; //  removes the default padding.
    font-size: 1rem; //  sets the font size.
    line-height: 1; //  sets the line height.

    //  changes the color of the "x" when you hover over it.
    &:hover {
      color: #fff;
    }
  }
`,Jt=d.button`
  background: #666; //  sets the background color.
  color: white; //  sets the text color.
  border: none; //  removes the button border.
  padding: 0.25rem 0.5rem; //  adds some space inside the button.
  border-radius: var(--radius-md); //  rounds the corners of the button.
  font-size: 0.8rem; //  sets the font size.
  cursor: pointer; //  shows a hand cursor when you hover over the button.
  align-self: flex-end; //  aligns the button to the bottom of the container.
  margin-left: auto; //  pushes the button to the right.

  //  changes the background color when you hover over the button.
  &:hover {
    background: #777;
  }
`,Ut=d.div`
  color: #888; //  sets the text color.
  font-size: 0.8rem; //  sets the font size.
  font-style: italic; //  makes the text italic.
`,Zt=d.ul`
  list-style: none; //  removes the default bullet points.
  padding: 0; //  removes the default padding.
  margin: var(--spacing-md) 0; //  adds some space above and below the list.
  display: flex; //  arranges the items in a flexible way.
  flex-direction: column; //  stacks the items vertically.
  gap: var(--spacing-sm); //  adds some space between the items.
`,R=d.li`
  background: #333; //  sets the background color.
  border-radius: var(--radius-lg); //  rounds the corners of the item.
  padding: var(--spacing-md); //  adds some space inside the item.
  display: flex; //  arranges the content of the item in a flexible way.
  align-items: stretch; //  makes the content of the item stretch to fill the height.
  gap: var(--spacing-md); //  adds some space between the content items.
  width: 100%; //  makes the item take up the full width of its container.
  box-sizing: border-box; //  makes sure the padding and border are included in the total width.
  position: relative; //  allows us to position the download link absolutely within the entry.
`,Kt=d.div`
  flex: 0 0 28%; //  makes the icon container take up 25% of the width of the item.
  min-width: 60px; //  sets a minimum width for smaller screens.
  max-width: 120px; //  sets a maximum width for the icon container.
  aspect-ratio: 1 / 1; //  makes the icon container a square.
  border-radius: var(--radius-md); //  rounds the corners of the icon container.
  background-color: #333; //  matches the Entry background color for seamless icon background rendering.
  overflow: hidden; //  hides any part of the icon that goes outside the container.
  display: flex; //  arranges the content of the container in a flexible way.
  align-items: center; //  vertically aligns the content in the center.
  justify-content: center; //  horizontally aligns the content in the center.
  position: relative; //  allows for proper positioning of the icon.

  img {
    width: 67%; //  makes the icon take up 70% of the container width for proper sizing.
    height: 67%; //  makes the icon take up 70% of the container height for proper sizing.
    object-fit: contain; //  preserves the icon's aspect ratio and prevents distortion.
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)); //  adds a subtle shadow for better visibility.
    transition: transform 0.2s ease; //  adds a smooth transition for hover effects.
  }

  // Responsive sizing for different screen sizes
  @media (max-width: 768px) {
    flex: 0 0 20%; // Smaller percentage on mobile devices.
    min-width: 50px; // Smaller minimum width on mobile.
    max-width: 80px; // Smaller maximum width on mobile.
    
    img {
      width: 75%; // Slightly larger icon percentage on smaller screens for better visibility.
      height: 75%;
    }
  }

  @media (min-width: 1200px) {
    max-width: 140px; // Larger maximum width on larger screens.
    
    img {
      width: 65%; // Slightly smaller icon percentage on larger screens for better proportions.
      height: 65%;
    }
  }

`,fe=d.div`
  flex: 1 1 auto; //  makes the container take up as much space as possible.
  display: flex; //  arranges the content of the container in a flexible way.
  flex-direction: column; //  stacks the content vertically.
  justify-content: space-between; //  spreads out the content to fill the available space.
`,ge=d.div`
  display: flex; //  arranges the items in a flexible way.
  flex-direction: column; //  stacks the items vertically.
  gap: var(--spacing-xs); //  adds some space between the items.
`,be=d.span`
  font-size: 0.9rem; //  sets the font size.
  color: var(--color-text-secondary); //  sets the text color.
  margin-bottom: var(--spacing-sm); //  adds some space below the date.
  display: flex; //  keeps date text and periodic icon on the same row.
  align-items: center;
  gap: 0.35rem;
`,oe=d.div`
  font-size: 0.8rem; //  sets the font size.
  color: #bbb; //  sets the text color.
  margin-bottom: var(--spacing-xs); //  adds some space below the container.
  
  .name {
    font-weight: 500; //  makes the font bold.
    color: #ddd; //  sets the text color.
  }
  
  .address {
    font-size: 0.75rem; //  sets the font size.
    color: #999; //  sets the text color.
    margin-top: 2px; //  adds some space above the address.
  }
`,H=d.div`
  margin-left: auto; //  pushes the container to the right.
  text-align: right; //  aligns the text to the right.
  position: relative; //  allows us to position the download link absolutely.
`,en=d.a`
  position: absolute; //  positions the link absolutely within the Entry.
  top: 1rem; //  positions the link at the top of the entry.
  right: 1rem; //  positions the link at the right of the entry.
  color:rgb(6, 116, 233); //  sets the text color to blue.
  font-size: 0.9rem; //  sets the font size slightly bigger.
  text-decoration: none; //  removes the underline.
  cursor: pointer; //  shows a hand cursor when you hover over the link.
  padding: 0.25rem 0.5rem; //  adds some padding for better click area.
  border-radius: var(--radius-sm); //  rounds the corners.
  transition: all 0.2s ease; //  creates a smooth transition on hover.
  //background-color: rgba(0, 123, 255, 0.1);  adds a subtle background.
  z-index: 10; //  ensures the link appears above other elements.

  &:hover {
    // background-color: rgba(0, 123, 255, 0.2);  adds a stronger background on hover.
    text-decoration: underline; //  adds an underline on hover.
    color:rgb(0, 123, 255); //  makes the color darker on hover.
  }
`,tn=d.img`
  width: 16px;
  height: 16px;
  margin-left: 0.4rem;
  vertical-align: middle;
  opacity: 0.85;
`,B=d.span`
  font-size: 1.5rem; //  sets the font size.
  font-weight: bold; //  makes the font bold.
  //  sets the text color to red for expenses and green for incomes.
  color: ${({$negative:e})=>e?"var(--color-negative)":"var(--color-positive)"};
  display: block; //  makes the amount take up its own line.
`,nn=d(R)`
  background: #444; //  sets a different background color for the total row.
  margin-top: var(--spacing-md); //  adds some space above the total row.
  border-top: 1px solid #555; //  adds a line above the total row.
  font-weight: bold; //  makes the font bold.
`,rn=d.div`
    flex: 1 1 auto; //  makes the label take up as much space as possible.
    font-size: 1.2rem; //  sets the font size.
`,an=d.section`
  margin-top: auto;
  margin-bottom: 0;
  background: var(--color-surface);
  border-top: 1px solid #272727;
  border-bottom: 1px solid #272727;
  padding: 0.5rem var(--spacing-md);
  display: flex;
  align-items: center;
  gap: 0.75rem;

  /* Break out of the Content max-width container to span full viewport */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  box-sizing: border-box;
`,se=d.button`
  background: none;
  border: none;
  padding: 0.25rem;
  margin: 0 0.5rem;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?"0.25":"1"};
  transition: opacity 0.2s ease, transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 44px;
    height: 44px;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
    transform: scale(1.15);
  }
`,on=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`,sn=d.span`
  color: #888;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
`,cn=d.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #0056b3;
  }
`,dn=d.button`
  background: transparent;
  color: #aaa;
  border: 1px solid #444;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
    color: #eaeaea;
    border-color: #555;
  }
`,un=d.input`
  width: 50px;
  padding: 0.4rem 0.35rem;
  background-color: #1a1a1a;
  color: #eaeaea;
  border: 1px solid #444;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  text-align: center;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  /* Remove spinner arrows */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`,ln=d.span`
  color: #999;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  
  strong {
    color: #eaeaea;
  }
`,hn=d.span`
  width: 1px;
  height: 1.2rem;
  background: #444;
  flex-shrink: 0;
`,mn=({sortOrder:e,onSortAsc:t,onSortDesc:n})=>o.jsxs(Bt,{children:[o.jsx(ae,{onClick:n,$active:e==="desc",children:o.jsx("img",{id:"sort-desc-icon",src:qt,alt:"Sort descending by date"})}),o.jsx(ae,{onClick:t,$active:e==="asc",children:o.jsx("img",{id:"sort-asc-icon",src:At,alt:"Sort ascending by date"})})]}),wn=()=>{const[e,t]=je(),n=ie(),r=e.get("filter")||"all",a=f.useMemo(()=>e.getAll("categories").map(i=>parseInt(i,10)).filter(i=>!isNaN(i)),[e]),[s,c]=f.useState(""),[l,g]=f.useState("desc"),[h,m]=f.useState(10),[b,v]=f.useState(0),[k,w]=f.useState("10"),{data:p=[],isLoading:M}=Ce(),{data:Q=[]}=Oe();f.useMemo(()=>{var i;return(i=Q.find(y=>y.name==="standard"))==null?void 0:i.id},[Q]);const z=De({expenseOnly:r==="expenses",incomeOnly:r==="incomes",categoryIds:a}),pe=z.data,X=z.isLoading,$=z.error,q=pe??[],T=f.useMemo(()=>r==="fees"?q.filter(i=>(i.transaction_fee||0)>=.01):q,[q,r]),C=f.useMemo(()=>[...T].sort((i,y)=>{const F=new Date(i.date).getTime(),J=new Date(y.date).getTime();return l==="desc"?J-F:F-J}),[T,l]),O=Math.ceil(C.length/h),we=f.useMemo(()=>{const i=b*h,y=i+h;return C.slice(i,y)},[C,b,h]);f.useEffect(()=>{v(0)},[r,a,l]);const V=f.useMemo(()=>r==="fees"?T.reduce((i,y)=>i+(y.transaction_fee||0),0):T.reduce((i,y)=>i+y.amount,0),[T,r]),G=f.useMemo(()=>p.filter(i=>i.name!=="UNCLASSIFIED"&&a.includes(i.id)),[p,a]),D=f.useCallback(i=>{const y=new URLSearchParams(e);y.delete("categories"),i.forEach(F=>y.append("categories",F.toString())),t(y,{replace:!0})},[e,t]),ye=f.useCallback(()=>{s&&!a.includes(s)&&(D([...a,s]),c(""))},[s,a,D]),xe=f.useCallback(i=>{D(a.filter(y=>y!==i))},[a,D]),ve=f.useCallback(()=>{D([])},[D]);f.useCallback(()=>{console.info("Menu clicked")},[]),f.useCallback(()=>{n("/add")},[n]);const A=f.useCallback(()=>{const i=parseInt(k,10);!isNaN(i)&&i>0&&(m(i),v(0))},[k]),ke=f.useCallback(()=>{v(i=>Math.max(0,i-1))},[]),Pe=f.useCallback(()=>{v(i=>Math.min(O-1,i+1))},[O]),Me=f.useCallback(i=>{i.key==="Enter"&&A()},[A]),Se=f.useCallback(()=>{w(C.length.toString())},[C.length]);return $?o.jsxs("p",{children:["Error: ",$.message]}):o.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:"1 1 auto"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",gap:"0.5rem"},children:[o.jsx("h2",{children:"Payments"}),o.jsx(mn,{sortOrder:l,onSortAsc:()=>g("asc"),onSortDesc:()=>g("desc")})]}),r!=="fees"&&o.jsxs(Qt,{children:[o.jsx("h3",{children:"Filter by Categories"}),o.jsxs(Xt,{children:[o.jsxs("select",{value:s,onChange:i=>c(i.target.value===""?"":parseInt(i.target.value,10)),disabled:M,children:[o.jsx("option",{value:"",children:"Select a category..."}),p.filter(i=>i.name!=="UNCLASSIFIED"&&!a.includes(i.id)).map(i=>o.jsx("option",{value:i.id,children:i.name},i.id))]}),o.jsx($t,{onClick:ye,disabled:!s||M,children:"Add Category"})]}),o.jsx(Vt,{children:G.length===0?o.jsx(Ut,{children:"No category filters applied - showing all payments"}):o.jsxs(o.Fragment,{children:[G.map(i=>o.jsxs(Gt,{children:[i.name,o.jsx("button",{onClick:()=>xe(i.id),"aria-label":`Remove ${i.name} filter`,children:"×"})]},i.id)),o.jsx(Jt,{onClick:ve,children:"Reset All"})]})}),M&&o.jsx("p",{children:"Loading categories..."})]}),X?o.jsx("p",{children:"Loading payment items…"}):o.jsxs(Zt,{children:[we.map(i=>r==="fees"?o.jsx(gn,{item:i},i.id):o.jsx(fn,{item:i,allCategories:p},i.id)),o.jsxs(nn,{children:[o.jsx(rn,{children:"SUM"}),o.jsx(H,{children:o.jsxs(B,{$negative:r==="fees"||V<0,children:[V.toFixed(2)," €"]})})]})]}),!X&&C.length>0&&O>1&&o.jsxs(an,{children:[o.jsx(se,{onClick:ke,$disabled:b===0,disabled:b===0,"aria-label":"Previous page",children:o.jsx("img",{src:_t,alt:"Previous"})}),o.jsxs(on,{children:[o.jsx(sn,{children:"Show"}),o.jsx(un,{type:"number",min:"1",value:k,onChange:i=>w(i.target.value),onKeyPress:Me,onFocus:i=>i.target.select(),"aria-label":"Items per page"}),o.jsx(cn,{onClick:A,children:"Apply"}),o.jsx(dn,{onClick:Se,children:"All"}),o.jsx(hn,{}),o.jsxs(ln,{children:["Page ",o.jsx("strong",{children:b+1})," of ",o.jsx("strong",{children:O})]})]}),o.jsx(se,{onClick:Pe,$disabled:b>=O-1,disabled:b>=O-1,"aria-label":"Next page",children:o.jsx("img",{src:Rt,alt:"Next"})})]})]})},fn=({item:e,allCategories:t})=>{const n=ie();e.attachment_url;const{data:r}=We(e.recipient_id??void 0),a=e.recipient??r,{data:s}=Te(e.standard_category_id??void 0),c=Ye.useMemo(()=>{const h=e.standard_category||s;if(h){let m=h;for(;m;){if(m.icon_file)return`/api/download_static/${m.icon_file}`;m=t.find(b=>b.id===(m==null?void 0:m.parent_id))}}return null},[e.standard_category,s,t]),l=()=>{n(`/payment/${e.id}/edit`)},g=async h=>{h.stopPropagation();try{await Le(e.id)}catch(m){console.error("Error downloading invoice:",m)}};return o.jsxs(R,{onDoubleClick:l,children:[e.invoice_path&&o.jsx(en,{onClick:g,children:"download"}),o.jsx(Kt,{children:c?o.jsx("img",{src:c,alt:"Category icon"}):null}),o.jsxs(fe,{children:[o.jsxs(ge,{children:[o.jsxs(be,{children:[me(de(e.date),"PPP, HH:mm"),e.periodic&&o.jsx(tn,{src:Ht,alt:"Periodic",title:"Periodic payment"})]}),e.description&&o.jsx(oe,{children:o.jsx("div",{className:"name",style:{fontStyle:"italic",color:"#ddd"},children:e.description})}),a&&o.jsxs(oe,{children:[o.jsxs("div",{className:"name",children:[" ",U(e)?o.jsx("u",{children:"To:"}):o.jsx("u",{children:"From:"}),"  ",a.name]}),a.address&&o.jsx("div",{className:"address",children:a.address})]})]}),o.jsx(H,{children:o.jsxs(B,{$negative:U(e),children:[e.amount.toFixed(2)," €"]})})]})]})},gn=({item:e})=>{const t=e.transaction_fee||0;return o.jsx(R,{children:o.jsxs(fe,{children:[o.jsx(ge,{children:o.jsx(be,{children:me(de(e.date),"PPP, HH:mm")})}),o.jsx(H,{children:o.jsxs(B,{$negative:!0,children:[t.toFixed(2)," €"]})})]})})};export{wn as default};
