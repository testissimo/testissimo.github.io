# Built-in Version Control System (VCS)

In this article, the basics of VCS implemented into Testissimo are explained.  

### Checkout (Download) Remote Repository

You will never have access to write directly to a remote repository. In order to make changes in a remote repository, the repository has to be downloaded. 

A downloaded (checked-out) repository is a local copy of the remote repository. 

Once a repository is downloaded, the repository can be edited and changed in any way.

![](/documentation/images/vcs_checkout.png)

### Commits (Changes), Commit History and Pushing

A set of meaningful changes in a repository form a **commit**.

A set of commits should be uploaded to the remote repository for other users (with access permissions) to use. In VCS this is called **pushing**.

Optionally, you can add a short message to commit, e.g. "fixed: panel test". 

All changes are organized in commits. Commit ID represents a version of a repository and cannot be deleted. To be in sync with your app version, use commits tag if you want to declare a test version. You are free to tag commits however you wish.

![](/documentation/images/vcs_commits.png)

Downloading changes from a remote repository is called **pulling**.



### Local Differences And Revert

In the **Local** tab of **Repository container**, the following is displayed next to each repository:
- number with a yellow triangle with ! inside - displays the number of warnings in a repository
- number with a grey circle with ! inside - displays the number of errors in a repository
- number with an up-arrow - displays the number of uncommitted changes (clicking it will attempt a **Push**)
- number with a down-arrow - displays the number of changes in the remote repository (clicking it will attempt a **Pull**)

<br>To preview what has changed in a local repository, check the changes in the **Repos** tab. Colors will indicate what kind of change occurred:
- green - new content added,
- red - content deleted,
- yellow - changed the content. 

<br>There is also a revert (circle-arrow) button, this will revert (discard) changes made to the selected repository.

![](/documentation/images/vcs_changes.png)

To preview content differences, just navigate to the **Resource tab** and click the **Show Changes** button.

![](/documentation/images/vcs_diff.png)


### Forking

In Testissimo's own VCS, creating a new remote repository from a selected commit is called **forking**.
<br>Forks can be created in commits history. 
<br>Once a fork has been created and checked out, changes can be made to a newly created repository.

![](/documentation/images/vcs_commits.png)

### Additional information and recommendations

#### Push (Upload) Local Changes

Push changes often, do more small commits instead of huge ones. You will avoid many merge conflicts this way. 

**Keep in mind that all changes in your local repository are in the browser indexedDB. Hence, it is not guaranteed that they persist over a long time period. Clearing browser cache will delete them all!** 

Of course, you can not push new changes before pulling new remote changes - in that case, pull-merge will automatically proceed.

![](/documentation/images/vcs_push.png)

#### Pull (Download) And Merge Remote Changes

If changes are pushed into a remote repo, Testissimo will notify you about these changes in the **Local** tab of **Repo** container.

![](/documentation/images/vcs_pull.png)

Applying remote changes to a local copy is called **merging**. 
Differences between a pulled and local version of a repository are called **merge conflicts**. 

Usually, as with most VCS, Testissimo can decide which version should be accepted. However, sometimes merge conflicts need to be reviewed manually.
<br>To finish the merge with merge conflicts, all merge conflicts need to be resolved. 

If you close the merging tab, merging will be dismissed and no remote changes will be applied to your local copy.

![](/documentation/images/vcs_merge.png)

