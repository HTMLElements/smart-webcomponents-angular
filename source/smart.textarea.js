
/* Smart UI v14.4.4 (2022-09-29) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart("smart-text-area",class extends Smart.Input{template(){return'<div id="inputContainer" role="presentation"><textarea class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\'  name=\'[[name]]\' value=\'{{value::keyup}}\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]"></textarea><span class="smart-hidden smart-hint" inner-h-t-m-l="[[hint]]" id="span"></span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}render(){super.render(),this.classList.add("smart-input")}});