# Bookmark'd

Bookmark'd is an application that lets users bookmark a website by saving the name and url of the website to a mongoDB database.

### user stories

-user should be able to add a bookmark
-user should be able to edit a bookmark

- user should be able to click on a delete button and delete their bookmark

### react router route table

| path             | action                                |
| ---------------- | ------------------------------------- |
| "/"              | renders the content in the index page |
| "/bookmarks/:id" | renders the content in the show page  |

### CRUD routes

| url             | method | action                                                                        |
| --------------- | ------ | ----------------------------------------------------------------------------- |
| "api url"       | post   | addes a new item to the mongoDB database then renders on the react Index page |
| "api url"       | get    | renders all the all the item in the mongoDB database on the Index page        |
| "api url + id " | put    | updates the item with the matching id in the mongoDB database                 |
| "api url + id"  | delete | deletes the item with the matching id in the mongoDB database                 |

## List of components

- Header
- Main

## Components map

app -> header

app -> main-> index
app -> main -> show

## problems we had?

The problem that we had in the Frontend was that bookmarks could not be updated. Looking back at the code we found that we were missing the id in the update function.
