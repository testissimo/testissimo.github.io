## Page Object pattern and Components

As soon as you have at least one repository and you know the basic set of Testissimo tools and action which are described in chapter 

Build-in tools, However, the test you would produce would be very be of poor quality, minimal code reuse and wouldn’t be very resilient to any UI changes. To produce test of high code reuse and thus test with low maintenance cost Testissimo adapt the Page Object patter and implements it in very intuitive and easy to use way. To understand the idea behind Page object patter we advise you to read following article written by Martin Fowler (https://martinfowler.com/bliki/PageObject.html) and also to read the following chapter: Test maintainability.

Component in Testissimo can by anything from very simple things like button and test fields all the way to complex Grids and component which are very specific to your application. The component is defined by its selector (which can have parameters) and set of method which can be performed on this component. 

### Simple button component


     




![](/cmsimages/r1WYsihz7.png)  

This is an example of button component which is defined by its selector:  
button[class\*=”btn”][@text\*={text}] and which has one method “click”. The component as we see in here is just the definition. It can be executed in development phase for testing purposes but it doesn’t do anything unless you use it in test. To see if the defined component is on current page, you can click the eye button next to the component name and Testissimo will highlight all occurrences of that component

![](/cmsimages/BJhNfnWxM.png)  



You can choose which button you want to act on, choose the method and drag drop the method to the test

![](/cmsimages/rkFuGnZgf.png)  



You will end-up with simple test which click on the “Search” button

![](/cmsimages/BykTf3bgM.png)  



You can execute your test by clicking on “play” button in the right corner. 

By using components rather than writing test using simple action, we can achieve that all CSS selectors are defined just ones so for example if some completely redesign some grid, we also need to only redesign this grids Testissimo component. No matter how many tests are using this component, if they interact with it inly using this component, they will stay unchanged. 

Furthermore, using component we can create sort of DSL specific to our application and Test can written on much higher level of abstraction than if they would just use simple low-level action. This way we can achieve great amount of code reuse and  
nice readability of our test. 

### Complex component and components composition

As soon as we have defined the basic components like button, text fields, combos and so on, we can start defining more complex component which are very specific for our application. Of course, we can use already defined simple component (or any  
component) to implement methods of these higher level component. Let’s look at the following example

![](/cmsimages/S18gXn-xf.png)  



The application we want to test has one grid which show the documents matching the filter criteria. Let’s call it “Document grid”. As the content of this grid are also rather complex component it wouldn’t be good design if we would create all the methods in the “Document Grid”. Let’s create two more components. One which represents the row of this grid and thus one document with name “Grid document”. Second which represents the component for document tags manipulation with name  
“Document tags editor”. 

As “Grid document” always exists in the context of “Document grid”, we don’t need to be too specific in its CSS selector definition, because it should always be used in test as part of “Document grid” component and its selector must be selective  
only within this section. The component definition could look like this:

![](/cmsimages/BJMm7hZgf.png)  



We use document name as the CSS selector parameter so if we want to use it in test we need to specify this name so that the component targets exactly one row. We can also use it to implement method of some different component. For example, let’s implement delete method on “Documents grid” component.

![](/cmsimages/r1V87hblG.png)  



We see that to delete one document, we first need to select the document by checking the checkbox for that document. We can easily use our “Grid document” component to accomplish this task, propagate its method parameters to our caller by simple defining the variable name in {} as the parameter value. Clicking on the delete button is also accomplished using another component which we have already defined. To use this method in test we simply need to call it and provide the document name parameter like this

![](/cmsimages/SyWF72Zez.png)  



Another way how we can use components composition is using the components to narrow the selection scope. Imagine that you want to start working with tags for some document. In order to correctly select the right “Document tag editor” we would  
need to make its CSS selector quite complex to be always able to identify the right tag editor in the whole result set. To avoid this complexity, we can use already defined component to narrow down the selection space. Let’s use component “Documents grid” in test without method just to define section on the webpage. We can better visualize the section be clicking on the eye icon next to the component name.

![](/cmsimages/SyL2Qh-xf.png)  



Let’s further narrow down the scope to single document by using component “Grid Document” with name of some specific document.

![](/cmsimages/rk_RX2-gz.png)  



And now we can start manipulating tags with the “Document tags editor”

![](/cmsimages/SyBbVnWgf.png)  



If we look at the selector definition of “Document tags editor” it is very simple, just div[multiselect-doctags]. If we would use this component outside of “Grid document” component, the selector would need to be much more precise. Using  
component composition we can save quite some complexity in the CSS selector and have one aspect of CSS selection defined just once. 

