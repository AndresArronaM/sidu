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
SyntaxHighlighter.brushes.Xml=function(){function e(e,t){var n=SyntaxHighlighter.Match,s=e[0],l=new XRegExp("(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)","xg").exec(s),g=[];if(null!=e.attributes){var i,x=new XRegExp("(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> \".*?\"|'.*?'|\\w+)","xg");while(null!=(i=x.exec(s)))g.push(new n(i.name,e.index+i.index,"color1")),g.push(new n(i.value,e.index+i.index+i[0].indexOf(i.value),"string"))}return null!=l&&g.push(new n(l.name,e.index+l[0].indexOf(l.name),"keyword")),g}this.regexList=[{regex:new XRegExp("(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)","gm"),css:"color2"},{regex:new XRegExp("(\\&lt;|<)!--\\s*.*?\\s*--(\\&gt;|>)","gm"),css:"comments"},{regex:new XRegExp("(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)","sg"),func:e}]},SyntaxHighlighter.brushes.Xml.prototype=new SyntaxHighlighter.Highlighter,SyntaxHighlighter.brushes.Xml.aliases=["xml","xhtml","xslt","html","xhtml"];