# Built-in Version Control System (VCS)

## Why Version Control ?

When it comes to testing real apps, not just simple todo lists, there are a lot of tests, many application versions, and more testers. To handle this complexity you need versions, forks, merging, conflicts resolving, commit tagging, refactoring. Whole versioning system like git is built-in.

## Guide

If you are not familiar with git or another versioning system, this may help you to orientate in common names.

### Checkout (Download) Remote Repository

You will never have access write directly to remote repository. If you want to make changes in it, you have to download it and make a local copy of remote repository first. Then you can edit your local repository.

![](/documentation/images/vcs_checkout.png)

### Commits (Changes) And Their History

If you are done with editing, you need to push it back to remote repository. Pushing this bunch of changes means commiting changes, so this single action calls a commit. Optional, you can add short message to commit, e.g. "fixed: panel test". All changes are organized in commits. Commit ID represents a version of repository and cannot be deleted. If you want to declare a tests version, to be in sync with your app version, just use commits tag. You are free to tag commit as you wish.

![](/documentation/images/vcs_commits.png)

### Local Differences And Revert

To know what was changed in local repo, go to repo resources list tab and see what is colored (yellow - changed content, green - new, red - deleted). There is revert (circle arrow) button, this will revert (discart) local content or deletion changes.

![](/documentation/images/vcs_changes.png)

To see content differences, just navigate to resource tab and press "Show Changes" button.

![](/documentation/images/vcs_diff.png)

### Push (Upload) Local Changes

Pushing or saving your local changes into remote repository means that all changes made by you will be applied to remote repository. If there are any new changes done by another user in remote repository, which you have not pulled

![](/documentation/images/vcs_push.png)

pozor na indexedDB a persistenciu, treba robit male commity aj kvoli mergovaniu

### Pull (Download) New Remote Changes

If someone esle pushed change into remote repo, you will be notified

### Merge changes

merge changes from one repository to another, usually you do merge between your local and remote repository to synchronize it

## Diff And Revert

