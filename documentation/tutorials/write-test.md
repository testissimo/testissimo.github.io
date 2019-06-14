# Write your first test

**In this tutorial you will learn to:**
> - Find and open test you created
> - Navigate through basic testing layout
> - Start writing tests
> - Interact between writing a test and tested app 
> - Use a few shortcuts

## Test Container
In order to start writing your first test, you first have to **open test container** where you will write code that will enable you to test your applications.

Since you already created your first **Repo** and then **Test** inside that Repo, simply go to your **Repos list**, and then select a Repo in which you saved the Test you will use to test your application. Once selected Repo opens, it should show you listed **Tests**, **Components**, and **Test Suites**.

You will have to click on **Tests [1]**, and when list of all the Tests created in that Repo shows, select the **Test** you want to use. We already created Test named ***new test***, so let's select that one **[2]**:

(writeTest1)

As you can see, the test will open by opening a new container. Here is a short **overview of a test container** and its functions:

(writeTest0)

Before we show you how to test your applications with Testissimo, let's first give you one very **handy hint**:
> By clicking anywhere in write area, if you press **Ctrl + Space** (Windows) on your keyboard, a list of all the main **actions, assertions, and repeaters** will open. This will be your **cheatsheet** while writing tests, to help you figure out the next step

> (writeTest2)


## Start writing tests
Testissimo makes writing tests quite easy. You will see that code is simple, and follows a logic of you actions and assertions. First, just to give you a short insight into how Testissimo testing actually works:

Inside the application, Testissimo container will be on the left side by default. On the right side, there will be a website opened, depending on url that is put in **url tab**. Here ***you can copy-paste the url*** of your application. 

> While on a website, you can *click* on a **Testissimo browser add on icon** - Testissimo app will activate and open, with that same website as main url.

Now, let's see how to **write a test**. Let's say we want to test a part of Testissimo Demo Tutorial and if the input tab succesfully writes in and then erases input:

(writeTest3)

You can see previously described layout here. Following the nature of this task, you will first have to choose a part of application you want to test. In code, *write* **"select" [1]**. Now, you can *click* on **Pick [2]** if  you are going to manualy pick the part of application. We will pick a **text tab** by *clicking* on it **[3]**. Options for the **Pick element** will open - we will *click* on **arrow sign** to *confirm* our selected *div* **[4]**.
Notice that the full *div* name will be written on the top.

By confirming selected *div*, Testissimo writes it in a code autamatically with its full name:

(writeTest4)

The next step would be to do some action with selected *div*. We want to see if it writes in some text, so we can type in do and then select or type further **write** **[1]**. Next to it we can type in whatever text we want **[2]**: 

(writeTest5)

Let's type in **"hello"**. Now, let's **run** the test nd see what happens:

(writeTest6)

As you can see, test run succesfully, and **"hello"** got written into a text tab.

We can now choose some different action ar assertion. Let's check if it will erase the written text if we *write* in code **do** and then select or write **clear** **[1]**. Let's run a test again **[2]**:

(writeTest7)

As we can see, the test run sucessfully and the text tab cleared.

Now you have all the basic information and skills needed and you can start testing your applications.

**Example's Code:**
```
select: #test-input:visible
do write: hello
do clear
```

**HINTS:**
> Choose **Ctrl + Space** (Windows) on your keyboard to open shortcut for list of Actions, Assertions, and Repeaters

> Click on the **Testissimo browser add on icon** and activate the app with current website

