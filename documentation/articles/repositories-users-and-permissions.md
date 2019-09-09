# Repositories, Users And Permissions

## Repositories (Repos)

Repositories in **Testissimo** behave like a git repository. A repository contains components, tests, and test suites - in other words the whole source of tests. 

Repositories can be **public** or **private** and **remote** or **local**. 
- **Public** repositories - readable by any user,
- **Private** repositories - readable only by a user with reading permission and is not listed in public repositories. 

Every repository is **remote**. That means that it is stored in the Testissimo server. 

**Local** repositories are downloaded remote repositories. You can make changes and push the repository back to the remote one. For more information about how Version Control works see: [Built-in VCS](#/documentation/articles/built-in-vcs)

## Users And Permissions

A user is identified by email and nick, therefore both must be unique. Nick is used as the prefix to all repository names e.g. user/repo1. 

Every user can have permission to any repository, but its owner must grant it.

![](/documentation/images/permissions.png)

Admin's role adds permission to remove a repository. 