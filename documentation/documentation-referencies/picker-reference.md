# Picker Algorithm
 
The Picker uses classes, element order and HTML attributes (both global and pseudo) to determine the shortest possible selector.
 
Attributes contribute to the specificity of a selector differently for each element.  In Testissimo, we sort attributes by their contribution to the element's specificity and use the most contributing ones (if these attributes are present in the of course). 

Also, combining these attributes with pseudo-classes and pseudo-selectors such as _**visible**_ or _**disabled**_ helps with selector construction. 

To understand this process better, check the list below: 

- **A** - href, text
- **ABBR** - title, text
- **ADDRESS** - text
- **AREA** - href
- **AUDIO** - src
- **EM** - text
- **STRONG** - text
- **BASE** - href text
- **BDI** - text
- **BDO** - text
- **BLOCKQUOTE** - text
- **BUTTON** - name, text, form
- **CAPTION** - text
- **CITE** - text
- **SAMP** - text
- **KBD** - text
- **COL** - span
- **COLGROUP** - span
- **DATA** - value, text
- **INPUT** - type, name, value, placeholder, form
- **DD** - text
- **DT** - text
- **DL** - text
- **DEL** - text
- **DFN** - text
- **EM** - text
- **STRONG** - text
- **EMBED** - src
- **FIELDSET** - name, form, disabled
- **FORM** - name
- **H1** - text
- **H2** - text
- **H3** - text
- **H4** - text
- **H5** - text
- **H6** - text
- **I** - text
- **IFRAME** - src, srcdoc, name
- **IMG** - src, alt
- **INS** - text
- **LABEL** - for, text, form
- **LEGEND** - text
- **LI** - text, value
- **LEGEND** - name
- **MARK** - text
- **METER** - value, form, text
- **OBJECT** - data, type, form
- **OPTGROUP** - disabled, label, text
- **OPTION** - value, disabled, text
- **SELECT** - multiple, name, form
- **OUTPUT** - name, for, form, text
- **P** - text
- **PRE** - text
- **PROGRESS** - value
- **Q** - text
- **RB** - text
- **RP** - text
- **RT** - text
- **RTC** - text
- **S** - text
- **SMALL** - text
- **VIDEO** - src
- **SOURCE** - src
- **STRONG** - text
- **SPAN** - text
- **SUB** - text
- **SUP** - text
- **SUMMARY** - text
- **PARAM** - name, value
- **TD** - headers, rowspan, colspan, text
- **TEXTAREA** - name, form, placeholder, text
- **TH** - text
- **TIME** - datetime, text
- **TRACK** - src, srclang, label, kind
- **U** - text
- **VAR** - text