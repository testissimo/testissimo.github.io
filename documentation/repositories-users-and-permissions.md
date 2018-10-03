# Repositories, Users And Permissions

## Repositories (Repos)

Repository behaves like GitHub repository. It contains components, tests, and test suites - in other worlds whole source of tests. It can be public or private. The only difference is that the public can be read by any user. Private can be read only by a user with reading permission and is not listed in public repos. Every repo is remote. That means that it is stored in testissimo server. Local repos are downloaded remote repos, to make changes and push it back to remote one. For more information about how version control works see: [Built-in VCS](#/built-in-vcs)

TODO: image remote / local repos list

## Users And Permissions

A user is identified by email and nick, therefore it must be unique. Nick is used as the prefix to all repo names e.g. objectify/repo1. 


Every user can have permission to every repo, but its owner must grant it.

TODO: image permissions
