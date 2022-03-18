/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.0.296 (March 01 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/licenses/>.
 */
var dp={SyntaxHighlighter:{}};dp.SyntaxHighlighter={parseParams:function(e,t,r,l,n,u){function a(e,t){for(var r=new XRegExp("^"+t+"\\[(?<value>\\w+)\\]$","gi"),l=null,n=0;n<e.length;n++)if(null!=(l=r.exec(e[n])))return l.value;return null}function i(e,t){return null!=e?e:t}function s(e){return null!=e?e.toString():null}var g=e.split(":"),f=g[0],o={},h={true:"true"};for(var c in reverse={true:"false"},result=null,defaults=SyntaxHighlighter.defaults,g)o[g[c]]="true";return t=s(i(t,defaults.gutter)),r=s(i(r,defaults.toolbar)),l=s(i(l,defaults.collapse)),u=s(i(u,defaults.ruler)),n=s(i(n,defaults["first-line"])),result={brush:f,gutter:i(reverse[o.nogutter],t),toolbar:i(reverse[o.nocontrols],r),collapse:i(h[o.collapse],l),ruler:i(h[o.showcolumns],u),"first-line":i(a(g,"firstline"),n)},result},HighlightAll:function(e,t,r,l,n,u){function a(){for(var e=arguments,t=0;t<e.length;t++)if(null!==e[t]){if("string"==typeof e[t]&&""!=e[t])return e[t]+"";if("object"==typeof e[t]&&""!=e[t].value)return e[t].value+""}return null}function i(e,t,r){for(var l=document.getElementsByTagName(r),n=0;n<l.length;n++)l[n].getAttribute("name")==t&&e.push(l[n])}var s=[];if(i(s,e,"pre"),i(s,e,"textarea"),0!==s.length)for(var g=0;g<s.length;g++){var f=s[g],o=a(f.attributes["class"],f.className,f.attributes["language"],f.language);null!==o&&(o=dp.SyntaxHighlighter.parseParams(o,t,r,l,n,u),SyntaxHighlighter.highlight(o,f))}}};