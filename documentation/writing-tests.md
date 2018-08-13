# Writing tests
<br>
## Targeting HTML components

When you write UI automation test, most of your work will be telling your test automation tool how to find HTML elements which you want to interact with. This is no different with Testissimo. In Testissimo you can use full set of CSS selectors and some built-in helpers to always target elements on page with ease.

As CSS selectors are standard feature in web development you will find a lot of resources on the internet dealing with how to write them and how they work. For absolute beginners, we recommend playing this game which can train the basics of CSS selectors: [https://flukeout.github.io/](https://flukeout.github.io/). 

As cheat-sheet we like to use this website where there is a full description of CSS selectors capabilities 
[https://www.w3schools.com/cssref/css_selectors.asp.](https://www.w3schools.com/cssref/css_selectors.asp) 
Testissimo supports all of css3 selectors and adds custom, extended syntax to fulfill all searching needs.
<br>
### Selector Combinators 

**Standard css combinators:**
* " " all descendants (has alias ">>")  
* ">" direct children  
* "+" adjanced sibling (first direct next sibling)  
* "~" general siblings (all next siblings)  
<br>
**Extended combinators:**
* "<" direct parent (alias for "!>")  
* "<<" all ancestors include parent up to HTML document (alias for "!")  
* "^" first direct child (alternative is "> :first")  
* "!" all ancestors (has alias "<<")  
* "!>" direct parent (has alias "<")  
* "!+" previous adjanced sibling (first direct previous sibling)  
* "!~" previous siblings  
* "!^" last direct child (alternative is "> :last")  
* "~~" all next and previous siblings - not implemented yet  
* "++" next and previous direct sibling - not implemented yet  
<br>
### Attributes Matching 

**Extractable** - when drag-dopping component from preview in app into test, some variables from selector definition can be suggested to user, e.g. 
```javascript
input:value({variable}) 
``` 
can be extracted from element and suggested

Same as standard css attribute matching, but allways true if value is missing or empty, e.g. [attribute=""] or [attribute\*=""] is same like **[attribute]**     

* **[attribute]** - has attribute, value is irelevant (extractable)  
* **[attribute=value]** - attribute equals to value (extractable)  
* **[attribute~=value]** - attribute value is in space separated list (extractable)  
* **[attribute|=value]** - attribute value is in hyphen separated list (extractable)  
* **[attribute^=value]** - attribute starts with value (extractable)  
* **[attribute$=value]** - attribute ends with value (extractable)  
* **[attribute\*=value]** - attribute contains value (extractable)  
<br>
**Extended attribute matching**

[attribute!=value] - attribute not equals to

For strict selection, e.g. if you want to select element with attribute equals to empty value "", use double "==" syntax

* [attribute==value]
* [attribute\*==value]
* [attribute!==value], etc…  
<br>
### Extended Pseudo Selectors
 * :first - first in selection  
 * :last - last in selection  
 * :even - every even element in current selection  
 * :odd - every odd element in current selection  


Positional selectors with argument value, for scaffolding reason, if value is empty, it is allways true, e.g. index() or :index will match every element      
<ul>
  <li> :index(0…9) - zero based position number (extractable) </li>
  <li> :index(0…9) - zero based position number (extractable)  </li>
  <li> :order(1…9) - same as :index but starting from one (extractable) </li>
  <li> :eq(0…9) - means equal, it is alias for :index (extractable) </li>
  <li> :gt(0…9) - greater than </li>
  <li> :gte(0…9) - greater or equal than </li>
  <li> :lt(0…9) - lower than </li>
  <li> :lte(0…9) - lower or equal than </li>      
</ul>
<br>
Inner text selectors, will select all elements containing text, not only nearest but all ancestors, so it is often used with pseudo :first, :last      
<ul>
  <li> :contains(text) - contains substring - (extractable) </li>
  <li> :text(text) - equals substring - (extractable) </li>
  <li> :text-contains(text) - alias for :contains - (extractable)  </li>
  <li> :text-begins(text) - begins with text (extractable) </li>
  </li> :text-ends(text) - (extractable) </li>
  <li> :text-regex(regextext) - (extractable) </li>
<br>
Allowed boolean values are false,False,no,No,0 and true,True,yes,Yes,1      
Visibility selections, based on element or ancestors "display:none" style  
<ul>
  <li> :visible, :visible(true/false) - (extractable)  </li>
  <li :hidden, :hidden(true/false) - (extractable) </li>      
</ul>
<br>
Input state selectors  
<ul>
  <li> :enabled, :enabled(true/false) - (extractable)  </li>
  <li> :disabled, :disabled(true/false) - (extractable)  </li>
  <li>:checked, :checked(true/false) - (extractable)  </li>
  <li> :selected, :selected(true/false) - (extractable) </li>  
  <li> :focused, :focused(true/false) - (extractable) </li> 
</ul>
<br>
Selecting by element value property  
<ul>
  <li> :value(value) - (extractable)  </li>
  <li> :value-contains(value) - (extractable)  </li>
  <li> :value-begins(value) - (extractable) </li>  
  <li> :value-ends(value) - (extractable)  </li>
</ul>
<br>
Location url based filtering - usefull if you have many components, but not all of them are suitable for some pages, it helps to filter them    
<ul>
  <li> :url-contains(text)  
  <li> :url-query-contains(text) - exclude "?"  </li>
  <li> :url-hash-contains(text) - exclude "#"  </li>
  <li> :url-equals(text)  </li>
  <li> :url-query-equals(text) - exclude "?" </li> 
  <li> :url-hash-equals(text) - exclude "#"  </li>
</ul>
<br>
Variable based filtering - usefull if you have multiple comma separated options how to select element, and you have to switch between them, e.g. input:value({value}):if-var({value}), input:index({index}):if-not-var({value})    
<ul>
  <li> :if-var({variable}) - allways true in suggestiom mode (because variables are not yet defined)  </li>
  <li> :if-not-var({variable}) - allways true in suggestiom mode (because variables are not yet defined)</li>
</ul
