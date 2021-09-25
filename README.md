# Day 8

## Spotify: Route and Search

From the previous exercise ( Day 7 ) You have created `AddAlbum` component which adds the album in an albums array in the `App` state and `Albums` component which renders the `Album`'s.
These two components were rendered in the wrapper component called `App`.
Now lets perform some simple routing for our application.
The first thing you want to do is add React Router and set up the following RESTful routes.
1. Create a navigation ( top or side ) which lists two items **Add Album** and **Albums**. When user clicks on any of these nav items redirect to the following routes respectively
    - `/addalbum` - renders the `AddAlbum` component
    - `/albums` - renders the `Albums` component
> Add the functionality same as previous exercise i.e when user add the album from `Add Album` components, the album will be rendered in the `Albums` component

2. Create a Search input field in the `Albums` component where user enters any keyword match it with either `album_title` or `artist` and render them in the list
