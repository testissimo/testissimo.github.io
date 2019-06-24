# Write your first test

## Navigate to test, or create new one

If you have not created test already, please see [First Repository And Test Set Up](/documentation/tutorials/first-repo).

## Start writing test

(video, example of testing search results, show comments, indent and another editor features)

**Try it yourself**
```
select: input:visible[type="text"][name="q"][value=""][aria-label="Search"]
do write: Testissimo

select: div.UUbT9 input:visible[name="btnK"][type="submit"][value="Google Search"][aria-label="Google Search"]

do click

select: div:visible[data-hveid]:first
assert element(s) text contains: https://testissimo.io
```

## Where to find all available actions, assertions and repeaters ?
Press **Space** or **Ctrl + Space** (Windows), or **Cmd + Space** (OSX) on your keyboard
(video)
