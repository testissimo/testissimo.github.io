# SET UP YOUR FIRST TEST

You became a new user of Testissimo app with creating your account quickly and simply. Now is a time for next step: creating a new repository.
REPOSITORIES = REPOS

In Testissimo, repositories are shortly called repos. We will be reffering to them as repos in the rest of the documentation. They follow the logic of git repos, so calling them this way might be easier for you to grasp their concept. You cn find out more about repositories here

1. CREATE NEW REPO
Whenever you start a new testing project, creating a repo is the first step to take. po. It is a first step in setting up a test. 

To do that, you have to first click on Repos. Once the drawer opens, you will see the Local repos and Remote repos list, and a + sign next to them on right. Click on a + sign to create a new one.
The drawer will open and you can here set up a name and choose if you want to make the repo private. After that, simply click + Create new repo. 
Simple as that.

(pic)

2. SAVE A REPO AS LOCAL
By default, Testissimo will set up a new repo in Remote mode. You have to switch it to a Local mode so that you can have it in your Testissimo accont.
You change a mode of a repo from Remote to Local with Download (Checkout button. First click on a Remote list, an then on Download button positioned first to the right in a list of options for a repo you created.
By downloading you are downloading a repo to a Testissimo server and this is how it gets saved to your account. 

(pic)

+ VCS 

# Built-in Version Control System (VCS)

## Why Version Control ?

When it comes to testing real apps, not just simple TODO lists, there are a lot of tests, many application versions, and more testers. To handle this complexity you need versions, forks, merging, conflicts resolving, commit tagging, refactoring. A whole versioning system like git is built-in.

## Qiuck Start Guide

If you are not familiar with git or other versioning system, this may help you to orientate in common names.

### Checkout (Download) Remote Repository

You will never have access write directly to the remote repository. If you want to make changes in it, you have to download it and make a local copy of the remote repository first. Then you can edit your local repository.

![](/documentation/images/vcs_checkout.png)

### Commits (Changes) And Their History

If you are done with editing, you need to push your repository back to the remote repository. Pushing this bunch of changes means committing changes, so this single action is called a commit. Optionally, you can add a short message to commit, e.g. "fixed: panel test". All changes are organized in commits. Commit ID represents a version of a repository and cannot be deleted. To be in sync with your app version, use commits tag if you want to declare a test version. You are free to tag commits as you wish.

![](/documentation/images/vcs_commits.png)

### Local Differences And Revert

To know what was changed in the local repo, go to repo resources list tab and see what is colored (yellow - changed content, green - new, red - deleted). There is a revert (circle arrow) button, this will revert (discard) local content or deletion changes.

![](/documentation/images/vcs_changes.png)

To see content differences, just navigate to resource tab and press "Show Changes" button.

![](/documentation/images/vcs_diff.png)

### Push (Upload) Local Changes

Push changes often, do more small commits instead of huge ones. You will avoid many merge conflicts this way. **Keep in mind that all changes in your local repo are in browser indexedDB, so it is not guaranteed that they persist over long time period. Clearing browser cache will delete all of it !** Of course, you cannot push new changes before pulling new remote changes - in that case, pull-merge will automatically proceed.

![](/documentation/images/vcs_push.png)

### Pull (Download) And Merge Remote Changes

If someone else pushed changes into a remote repo, you will be notified in local repo list.

![](/documentation/images/vcs_pull.png)

Applying remote changes to a local copy is called merging. There may be some merge conflicts when merging. It means someone changed the same resource as you did and Testissimo cannot decide which version is newer and to be accepted. To finish the merge you have to resolve all merge conflicts. If you close the merging tab, merging will be dismissed and no remote changes will be applied do your local copy.

![](/documentation/images/vcs_merge.png)

### Forking

A fork can be done in commits history (see commits history picture). It will create a new remote repository from the selected commit. Then you can check out and edit.


3. SET UP TEST
Ok, so you created your first repo. Now time to set up your first test. 
First navigate to repo resources list. By clicking on Repos => Local on your left, list of your local repos will open. In this list, open your repo by clicking on named file (name of a repo you will write your test in). 

(pic)

Repo layout will open. Finally, you can create your first test. 
Click on the + button next to the Tests on right. The drawer will open, same as it opens when you are creating a repo. Put a name of a test. You can also set up a name of a folder it will be in, but this is only optional. Onc you name it, click on + Create Test on right.

(pic)

