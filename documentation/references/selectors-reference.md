# Selector Combinators 

### Standard CSS Combinators

<table>
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
            <td style="text-align:center"><strong>“&gt;&gt;”</strong></td>
            <td style="text-align:left">all descendants (has alias “ ”)</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“&lt;”</strong></td>
            <td style="text-align:left">direct parent</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“&lt;&lt;”</strong></td>
            <td style="text-align:left">all ancestors include parent up to HTML document</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“&lt;+”</strong></td>
            <td style="text-align:left">previous adjacent sibling (first direct previous sibling)</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“&lt;~”</strong></td>
            <td style="text-align:left">previous siblings</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“+”</strong></td>
            <td style="text-align:left">adjacent sibling (first direct next sibling)</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“++”</strong></td>
            <td style="text-align:left">next and previous direct sibling</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>“~”</strong></td>
            <td style="text-align:left">general siblings (all next siblings)</td>
        </tr>
    </tbody>
</table>

<br>

### Attributes Matching 

**Extractable** - when selecting component in visual mode, some variables from selector definition can be suggested to user, e.g. 
```javascript
input:value({variable}) 
``` 
can be extracted from element and suggested.

Same as standard CSS attribute matching, but always true if value is missing or empty, e.g. [attribute=""] or [attribute\*=""] is same like **[attribute]**     

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
            <td style="text-align:center"><strong>:first-child</strong></td>
            <td style="text-align:left">first child of element in selection</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:last</strong></td>
            <td style="text-align:left">last in selection</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:last-child</strong></td>
            <td style="text-align:left">last child of element in selection</td>
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


Positional selectors with argument value, for scaffolding reason, if value is empty, it is always true, e.g. index() or :index will match every element      

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
            <td style="text-align:center"><strong>:index-gt(0…9)</strong></td>
            <td style="text-align:left">zero based position number greater than</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:index-gte(0…9)</strong></td>
            <td style="text-align:left">zero based position number greater or equal to </td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:index-lt(0…9)</strong></td>
            <td style="text-align:left">zero based position number less than </td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:index-lte(0…9)</strong></td>
            <td style="text-align:left">zero based position number less or equal to</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:order(1…9)</strong></td>
            <td style="text-align:left">same as :index but starting from one (extractable)</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:order-gt(1…9)</strong></td>
            <td style="text-align:left">same as :index but starting from one and greater than </td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:order-gte(1…9)</strong></td>
            <td style="text-align:left">same as :index but starting from one and greater or equal to</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:order-lt(1…9)</strong></td>
            <td style="text-align:left">same as :index but starting from one and less than</td>
        </tr>
        <tr>
            <td style="text-align:center"><strong>:order-lte(1…9)</strong></td>
            <td style="text-align:left">same as :index but starting from one and less or equal to</td>
        </tr>
    </tbody>
</table>

Inner text selectors, will select all elements containing text, not only nearest but all ancestors, so it is often used with pseudo <b>:first</b>, <b>:last</b>      

<table>
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

Pseudo-selectors with results-limiting subselectors:
<ul>
    <li> <b>:has(subselector)</b> -  selects elements that match the subselector</li>
    <li> <b>:not(subselector)</b> - selects elements that don't match the subselector</li>
    <li> <b>:from(subselector)</b> - starts the selection of elements from the first element that matches the subselector (includes the first matched element)</li>
    <li> <b>:from-exclude(subselector)</b> - starts the selection of elements from the first element that matches the subselector (excludes the first matched element)</li>
    <li> <b>:to(subselector)</b> - ends the selection of elements at the first element that matches the subselector (includes the first matched element)</li>
    <li> <b>:to-exclude(subselector)</b> - ends the selection of elements at the first element that matches the subselector (excludes the first matched element)</li>
</ul>

Allowed boolean values are false, False, no, No, 0 and true, True, yes, Yes, 1      
Visibility selections, based on element or ancestors "display: none" style  
<ul>
    <li> <b>:visible</b>, <b>:visible(true/false)</b> - (extractable)  </li>
    <li> <b>:hidden</b>, <b>:hidden(true/false)</b> - (extractable) </li>      
    <li> <b>:accessible</b>, <b>:accessible(true/false)</b> - (extractable)</li>      
</ul>

Input state selectors  
<ul>
    <li> <b>:enabled</b>, <b>:enabled(true/false) </b>- (extractable)  </li>
    <li> <b>:disabled</b>, <b>:disabled(true/false) </b>- (extractable)  </li>
    <li> <b>:checked</b>, <b>:checked(true/false) </b>- (extractable)  </li>
    <li> <b>:selected</b>, <b>:selected(true/false) </b>- (extractable) </li>  
</ul>

Selecting by element value property  
<ul>
    <li> <b>:value(value) </b>- (extractable)  </li>
    <li> <b>:value-equals(value) </b>- (extractable)  </li>
    <li> <b>:value-contains(value) </b>- (extractable)  </li>
    <li> <b>:value-begins(value) </b>- (extractable) </li>  
    <li> <b>:value-ends(value) </b>- (extractable)  </li>
</ul>

<!-- Location url based filtering - useful if you have many components, but not all of them are suitable for some pages, it helps to filter them    
<ul>
    <li> <b>:url-contains(text)</b>  </li>
    <li> <b>:url-query-contains(text) </b>- exclude "?"  </li>
    <li> <b>:url-hash-contains(text)</b> - exclude "#"  </li>
    <li> <b>:url-equals(text)</b>  </li>
    <li> <b>:url-query-equals(text) </b>- exclude "?" </li> 
    <li> <b>:url-hash-equals(text) </b>- exclude "#"  </li>
</ul> -->

Variable based filtering - useful if you have multiple comma separated options how to select an element, and you have to switch between them, e.g. 
```javascript
input:value({value}):if-var({value}), input:index({index}):if-not-var({value})    
```
<ul>
    <li> <b>:if-var({variable})</b> - allways true in suggestiom mode (because variables are not yet defined) - (extractable) </li>
    <li> <b>:if-not-var({variable})</b> - allways true in suggestiom mode (because variables are not yet defined) - (extractable)</li>
</ul>
