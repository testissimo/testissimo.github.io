# Built-in Version Control System (VCS)

## Why Version Control ?

When it comes to testing real apps, not just simple todo lists, there are a lot of tests, many application versions, and more testers. To handle this complexity you need versions, forks, merging, conflicts resolving, commit tagging, refactoring. Whole versioning system like git is built-in.

## Qiuck Start Guide

If you are not familiar with git or another versioning system, this may help you to orientate in common names.

### Checkout (Download) Remote Repository

You will never have access write directly to the remote repository. If you want to make changes in it, you have to download it and make a local copy of remote repository first. Then you can edit your local repository.

![](/documentation/images/vcs_checkout.png)

### Commits (Changes) And Their History

If you are done with editing, you need to push it back to the remote repository. Pushing this bunch of changes means committing changes, so this single action calls a commit. Optional, you can add a short message to commit, e.g. "fixed: panel test". All changes are organized in commits. Commit ID represents a version of a repository and cannot be deleted. If you want to declare a tests version, to be in sync with your app version, just use commits tag. You are free to tag commit as you wish.

![](/documentation/images/vcs_commits.png)

### Local Differences And Revert

To know what was changed in the local repo, go to repo resources list tab and see what is colored (yellow - changed content, green - new, red - deleted). There is a revert (circle arrow) button, this will revert (discard) local content or deletion changes.

![](/documentation/images/vcs_changes.png)

To see content differences, just navigate to resource tab and press "Show Changes" button.

![](/documentation/images/vcs_diff.png)

### Push (Upload) Local Changes

Push changes often, do more small commits, not one big, you will avoid many merge conflicts. **Keep in mind all changes in your local repo is in browser indexedDB, so it is not guaranteed to persist long time period. Clearing browser cache will delete all of it !** Of course, you cannot push new changes before pulling new remote changes - in that case, pull-merge will automatically proceed.

![](/documentation/images/vcs_push.png)

### Pull (Download) And Merge Remote Changes

If someone else pushed change into remote repo, you will be notified in local repo list.

![](/documentation/images/vcs_pull.png)

Applying remote changes to a local copy is called merging. There may be some merge conflicts when merging. It means someone changed the same resource as you and Testissimo cannot decide which version is newer. To finish merge you have to resolve all merge conflicts. If you close the merging tab, merging will be dismissed and no remote changes will be applied do your local copy.

![](/documentation/images/vcs_merge.png)

### Forking

A fork can be done in commits history (see commits history picture). It will create a new remote repository from the selected commit. Then you can check out and edit.
