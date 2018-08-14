# Writing tests
<br>

## Targeting HTML components

When you write UI automation test, most of your work will be telling your test automation tool how to find HTML elements which you want to interact with. This is no different with Testissimo. In Testissimo you can use full set of CSS selectors and some built-in helpers to always target elements on page with ease.

As CSS selectors are standard feature in web development you will find a lot of resources on the internet dealing with how to write them and how they work. For absolute beginners, we recommend playing this game which can train the basics of CSS selectors at [flukeout](https://flukeout.github.io/). 

As cheat-sheet we like to use this website where there is a full description of CSS selectors capabilities 
[CSS selectors capabilities ](https://www.w3schools.com/cssref/css_selectors.asp) 
Testissimo supports all of css3 selectors and adds custom, extended syntax to fulfill all searching needs.
<br>
### Selector Combinators 

**Standard css combinators:**


<table >
  <thead>
    <tr>
    <th style="text-align:center">Selector combinator</th>
    <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>&quot; &quot;</strong></td>
      <td style="text-align:left">all descendants (has alias “&gt;&gt;”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“&gt;”</strong></td>
      <td style="text-align:left">direct children</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“+”</strong></td>
      <td style="text-align:left">adjanced sibling (first direct next sibling)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“~”</strong></td>
      <td style="text-align:left">general siblings (all next siblings)</td>
    </tr>
  </tbody>
</
  >

<br>


**Extended combinators:**

<table >
  <thead>
    <tr>
      <th style="text-align:center">Extended combinator</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>“&lt;”</strong></td>
      <td style="text-align:left">direct parent (alias for “!&gt;”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“&lt;&lt;”</strong></td>
      <td style="text-align:left">all ancestors include parent up to HTML document (alias for “!”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“^”</strong></td>
      <td style="text-align:left">first direct child (alternative is “&gt; :first”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“!”</strong></td>
      <td style="text-align:left">all ancestors (has alias “&lt;&lt;”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“!&gt;”</strong></td>
      <td style="text-align:left">direct parent (has alias “&lt;”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“!+”</strong></td>
      <td style="text-align:left">previous adjanced sibling (first direct previous sibling)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“!~”</strong></td>
      <td style="text-align:left">previous siblings</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“!^”</strong></td>
      <td style="text-align:left">last direct child (alternative is “&gt; :last”)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>“++”</strong></td>
      <td style="text-align:left">next and previous direct sibling - not implemented yet</td>
    </tr>
    </tbody>
</table>

<br>

### Attributes Matching 

**Extractable** - when drag-dopping component from preview in app into test, some variables from selector definition can be suggested to user, e.g. 
```javascript
input:value({variable}) 
``` 
can be extracted from element and suggested

Same as standard css attribute matching, but allways true if value is missing or empty, e.g. [attribute=""] or [attribute\*=""] is same like **[attribute]**     

<table>
  <thead>
    <tr>
      <th style="text-align:center">Attribute</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>[attribute]</strong></td>
      <td style="text-align:left">has attribute, value is irelevant (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute=value]</strong></td>
      <td style="text-align:left">attribute equals to value (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute~=value]</strong></td>
      <td style="text-align:left">attribute value is in space separated list (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute|=value]</strong></td>
      <td style="text-align:left">attribute value is in hyphen separated list (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute^=value]</strong></td>
      <td style="text-align:left">attribute starts with value (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute$=value]</strong></td>
      <td style="text-align:left">attribute ends with value (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute*=value]</strong></td>
      <td style="text-align:left">attribute contains value (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>[attribute!=value]</strong></td>
      <td style="text-align:left">attribute not equals to</td>
    </tr>
  </tbody>
</table>
<br>

**Extended attribute matching**
For strict selection, e.g. if you want to select element with attribute equals to empty value "", use double "==" syntax

* **[attribute==value]**
* **[attribute\*==value]**
* **[attribute!==value]**, etc…  
<br>

### Extended Pseudo Selectors
<table>
  <thead>
    <tr>
      <th style="text-align:center">Extended Pseudo Selector</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>:first</strong></td>
      <td style="text-align:left">first in selection</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:last</strong></td>
      <td style="text-align:left">last in selection</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:even</strong></td>
      <td style="text-align:left">every even element in current selection</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:odd</strong></td>
      <td style="text-align:left">every odd element in current selection</td>
    </tr>
  </tbody>
</table>


Positional selectors with argument value, for scaffolding reason, if value is empty, it is allways true, e.g. index() or :index will match every element      

<table>
  <thead>
    <tr>
      <th style="text-align:center">Positional selector</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>:index(0…9)</strong></td>
      <td style="text-align:left">zero based position number (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:index(0…9)</strong></td>
      <td style="text-align:left">zero based position number (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:order(1…9)</strong></td>
      <td style="text-align:left">same as :index but starting from one (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:eq(0…9)</strong></td>
      <td style="text-align:left">means equal, it is alias for :index (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:gt(0…9)</strong></td>
      <td style="text-align:left">greater than</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:gte(0…9)</strong></td>
      <td style="text-align:left">greater or equal than</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:lt(0…9)</strong></td>
      <td style="text-align:left">lower than</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:lte(0…9)</strong></td>
      <td style="text-align:left">lower or equal than</td>
    </tr>
  </tbody>
</table>
<br>
Inner text selectors, will select all elements containing text, not only nearest but all ancestors, so it is often used with pseudo <b>:first</b>, <b>:last</b>      

<table >
  <thead>
    <tr>
      <th style="text-align:center">Inner text selector</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center"><strong>:contains(text)</strong></td>
      <td style="text-align:left">contains substring - (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:text(text)</strong></td>
      <td style="text-align:left">equals substring - (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:text-contains(text)</strong></td>
      <td style="text-align:left">alias for :contains - (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:text-begins(text)</strong></td>
      <td style="text-align:left">begins with text (extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:text-ends(text)</strong></td>
      <td style="text-align:left">(extractable)</td>
    </tr>
    <tr>
      <td style="text-align:center"><strong>:text-regex(regextext)</strong></td>
      <td style="text-align:left">(extractable)</td>
    </tr>
    </tbody>
</table>

<br>
Allowed boolean values are false,False,no,No,0 and true,True,yes,Yes,1      
Visibility selections, based on element or ancestors "display:none" style  
<ul>
  <li> <b>:visible</b>, <b>:visible(true/false)</b> - (extractable)  </li>
  <li> <b>:hidden</b>, <b>:hidden(true/false)</b> - (extractable) </li>      
</ul>
<br>
Input state selectors  
<ul>
  <li> <b>:enabled</b>, <b>:enabled(true/false) </b>- (extractable)  </li>
  <li> <b>:disabled</b>, <b>:disabled(true/false) </b>- (extractable)  </li>
  <li> <b>:checked</b>, <b>:checked(true/false) </b>- (extractable)  </li>
  <li> <b>:selected</b>, <b>:selected(true/false) </b>- (extractable) </li>  
  <li> <b>:focused</b>, <b>:focused(true/false)</b> - (extractable) </li> 
</ul>
<br>
Selecting by element value property  
<ul>
  <li> <b>:value(value) </b>- (extractable)  </li>
  <li> <b>:value-contains(value) </b>- (extractable)  </li>
  <li> <b>:value-begins(value) </b>- (extractable) </li>  
  <li> <b>:value-ends(value) </b>- (extractable)  </li>
</ul>
<br>
Location url based filtering - usefull if you have many components, but not all of them are suitable for some pages, it helps to filter them    
<ul>
  <li> <b>:url-contains(text)</b>  </li>
  <li> <b>:url-query-contains(text) </b>- exclude "?"  </li>
  <li> <b>:url-hash-contains(text)</b> - exclude "#"  </li>
  <li> <b>:url-equals(text)</b>  </li>
  <li> <b>:url-query-equals(text) </b>- exclude "?" </li> 
  <li> <b>:url-hash-equals(text) </b>- exclude "#"  </li>
</ul>
<br>
Variable based filtering - usefull if you have multiple comma separated options how to select element, and you have to switch between them, e.g. 
```javascript
input:value({value}):if-var({value}), 
input:index({index}):if-not-var({value})    
```
<ul>
  <li> <b>:if-var({variable})</b> - allways true in suggestiom mode (because variables are not yet defined)  </li>
  <li> <b>:if-not-var({variable})</b> - allways true in suggestiom mode (because variables are not yet defined)</li>
</ul>
