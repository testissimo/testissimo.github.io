## Test maintainability 

 

The biggest issue in software testing is tests maintainability. The less effort takes to fix tests if tested application change, the happier development team, and software development speed is.

Let’s assume you have simple book search web application. There is only search input and books result list. How will be logical steps of simple search test looks like?

1.  Do search “some book”
2.  Assert book result list – it should contain only relevant results with no data missing
<br>
Now, imagine pseudo code of this test:

1.  Select search input by id=”books-search”
2.  Select book result list container by id=”result-list”
3.  Select all result items inside result list containers
4.  For each item in result list, do:
5.  Select field name by some selector
6.  Assert field name value
7.  Etc.
<br>
Now, let’s do some changes in tested app, and see how would our test handle it:

Redesign of search, now it has another id, and search suggestions, so it acts more like drop down, and has input wrapped by another element, which are generated, input has no more id attribute

Removed some book fields, added new, with conditionally hiding/showing behavior

Tests pseudo code must be changed entirely, but logical steps doesn’t. In real world, there are no few and simple tests, but hundreds or thousands, robust tests with similar and repeated behaviors, like search in categories, tags, search in  
authors, search by ISBN, etc. Rewriting it entirely is very time consuming.
<br>
### Maintainability with component based approach

In Testissimo, maintainability is provided by reusable components and their methods. Best practice is to follow logical steps. So, in our book search example, it would look like:

We will create component “Search-Input” with methods

* “doSearch” with parameter “searchPhrase”, with actions:
* action 1: select search input inside search drop down
* action 2: keyboard write text {searchPhrase} into search input
* action 3: assert search input value, it should be equal to {searchPhrase}
* action 4: select start search button, or keyboard keypress enter
<br>
And Search-Result-List component with method

* “assertResults”, with actions
* action 1: …
* action 2: …
<br>
Now, we can write test like this:

1.  Search-Input.doSearch ( searchPhrase = “some book” )
2.  Search-Result-List.assertResults
<br>
If we redesign web app, we need to do changes only in tests components, in one place, not in tests. Therefore, components are crucial for tests maintainability.
<br>
### Maintenance using macros

If you are repeating some application flow in tests, like login, or fill user profile, or add product to cart, etc. where this flow span more than one component, it is better to use macros. Macros are reusable test part with parameters. Imagine,  
you are testing ecommerce cart, with several payment and delivery options, physical products, goods, localized offers, etc. You don’t want to rewrite all tests because of someone added cart confirmation step. You just need to update one macro “make order”. 
