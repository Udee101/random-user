# Random-User app
A random user generator app built with Vue Js via [Vue CDN](https://vuejs.org/guide/quick-start.html#without-build-tools).

Try the [Demo](https://udee101.github.io/random-user/)

## About the app
All you have to do is to click the ```Get Random User``` button, then a fetch request will be sent to the [random users API](https://randomuser.me/api/) endpoint
to get back one user at random, whose infomation will be displayed on the card component.
> :memo: **Note:** The user changes any time the button is clicked. 

The User's information that will be displayed are:

- First Name & Last Name
- Email address
- Phone number

By default, the user's name is displayed, while the other information will be displayed when their respective buttons are clicked.

**PS:** The color of the button changes with respect to the `gender` of the fetched user. :wink:
