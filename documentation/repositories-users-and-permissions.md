# Repositories, Users And Permissions

# Repositories (Repos)

Repository behave like github repository. It contains components, tests, and test suites - in other worlds whole source of tests. It can be public or private. Only difference is that public can be read by any user. Private can be read only by user with read permission, and is not listed in public repos. Every repo is remote. That means that it is stored in testissimo server. Local repos are downloaded remote repos, to make changes and push it back to remote one.

TODO: image remote / local repos list

# Users And Permissions

User is identified by email and nick, therefore it must be unique. Nick is used like prefix to all repo names e.g. objectify/repo1. 


Every user can have permission to every repo, but its owner must grant it.

TODO: image permissions