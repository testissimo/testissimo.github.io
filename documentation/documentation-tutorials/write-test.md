# Write your first test

## Navigate to test, or create new one
If you have not created test already, please see [First Repository And Test Set Up](/documentation/tutorials/first-repo).

## Start writing test

![VIDEO-529-960](/documentation/videos/write-test.mp4)

**Try it yourself**
```
do navigate to url: https://google.com

select: input:visible[type="text"][name="q"][value=""][aria-label="Search"]

do write: Testissimo

select: div.UUbT9 input:visible[name="btnK"][type="submit"][value="Google Search"][aria-label="Google Search"]

do click

select: cite:visible:text("https://testissimo.io/")

do click

assert url is: https://testissimo.io/
```

## Where to find list of available actions, assertions and repeaters ?

![](/documentation/images/write-test-actions.png)
