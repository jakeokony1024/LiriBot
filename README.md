# LiriBot

This is a LIRI (Language Interpretation and Recognition Interface) bot, that will give info about songs from Spotify, venue inormation by band name, and movie information on any given search provided int the command line. I am very proud of this, I worked hard to get the logic and functionality working correctly, as well as provide a concise read out for the user styled with some color to make it easier on the eye, versus the stale white and black. 

Below is the sample code to get Spotify to run. 

**All searches must be contained within single quotations. example: node liri.js spotify-this-song 'all the small things'

In the images folder, there are screenshots of the app working, to also give an idea of what to expect when using the app. 

This app does four different tasks for the user, to help them get the most information about any given search, and to also read a text file that can be changed by the user as well. 

Task 1 - The **spotify-this-song** command, helps the user narrow down their search results to determine what album, artist and also a link to the specific song they want. 

Task 2 - The **concert-this** command, helps the user determine what venue their chosen band is playing at, what city and country that venue is in, and also what date that show is on. It also provides a lineup, if there are more than the searched for artist playing at that show. 

Task 3 - The **movie-this** command, give the user the full information read out of whatever the searched for movie is, including the title, year released, actors, IMDB and Rotten Tomatoes ratings, as well as the plot. 

Task 4 - The **do-what-it-says** command, runs the read file function, and will read the text in the random.txt file and run the arguments through the liri bot! The user can change the text within the random.txt file to get liri to do different tasks. 

To run LiriBot, make sure to first run **npm install** before trying to search. Not running the install will result in error codes. No other code is required as all the packages are saved within packages.json folder. 

The ID key, and Secret key for spotify are private, you will have to retrieve your own versions of them. 

***Spotify ID and Secret Instructions***
It's super easy, just go  https://developer.spotify.com/my-applications/#!/, then login to your existing Spotify account or create a new one (a free account is fine).

*Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

*On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

**List of Tech Used**

1. javascript 
2. npm packages including, 
  a.spotify API
  b.omdb API 
  c. bands in town 
  d. colors 
  e. axios 
 3. moment.js
 4. "fs" read and write functions
