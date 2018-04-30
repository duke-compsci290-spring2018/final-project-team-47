# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Tara Nagar, tln11
Kiran Nagar, kan20
Date started: Thursday, April 19
Date completed: Monday, April 30
Hours spent: 60
The two of us only worked together on this project.
Firebase docs, w3 website, package documentation (vue, vue-router, etc).
We used code from class and Piazza, but did not receive help from any TAs.
We were not able to retrieve the Firebase data as we wanted.

To develop this app to a higher level, we would want to do a number of things:
    1) allow it to show multiple league and tournaments

This website must be run on a non-secure Chrome browser because the APIs are being called as http requests rather than https.
An account you can use to log in with is:
    email: email@email.ocm
    password: password

Data: https://api.football-data.org/
    https://api.football-data.org/documentation
    
Our application is useful for soccer fans everywhere. It gives you an appropriately sized overview of the
soccer league. Additionally, to expand this site we want to be able to select through different leagues,
so it will be a good one-stop-shop for fans who want to find out how leagues around the world are doing.

We used Vue and Node.js because we were comfortable with them from class, but it is also super convenient
to install other dependencies to make developing a website easier. We thought about using React because it
uses JSX, but the steep learning curve required to understand it and the relatively short amount of time 
we had to complete the project, it did not make sense to use that. It is also optimized for a lot of
different renders, but we are using a router and don't have as many pages, so we did not choose to use
React.