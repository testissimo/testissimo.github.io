# Repositories, Users And Permissions

## Repositories (Repos)

Repository behaves like a git repository. It contains components, tests, and test suites - in other words the whole source of tests. Repositories can be public or private. The only difference is that the public ones can be read by any user. Private repositories can be read only by a user with reading permission and is not listed in public repos. Every repo is remote. That means that it is stored in the Testissimo server. Local repos are downloaded remote repos. You can make changes and push the repo back to remote one. For more information about how Version Control works see: [Built-in VCS](#/built-in-vcs)

## Users And Permissions

A user is identified by email and nick, therefore both must be unique. Nick is used as the prefix to all repo names e.g. objectify/repo1. 

Every user can have permission to any repo, but its owner must grant it.

![](/documentation/images/permissions.png)
