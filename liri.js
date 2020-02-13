var keys = require('./keys.js');

var axios = require('axios');

var Spotify = require('node-spotify-api');

var moment = require('moment');

var Spotify = require('node-spotify-api');

var colors = require('colors');

var getMeShows = function (bandName) {


    axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp").then(
        function (response) {



            for (var i = 0; i < response.data.length; i++) {
                response.data[i].datetime = moment(response.data[i].datetime).format("MM/DD/YYYY")
                console.log("Venue Name: " + response.data[i].venue.name.green);
                console.log("Venue City: " + response.data[i].venue.city.red);
                console.log("Venue Country: " + response.data[i].venue.country.blue);
                console.log("Date of Show: " + response.data[i].datetime.green);
                console.log("Full Line Up: " + response.data[i].lineup);
                console.log("-------------------------------------------------------------------")
            }
        })
}

var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
});

var getMeArtists = function (artists) {
    return artists.name;
}


var getMeSpotify = function (songName) {
    spotify.search({
        type: 'track',
        query: songName
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
          
        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            
            console.log("Artist(s): " + songs[i].artists.map(getMeArtists));
            console.log("Song Name: " + songs[i].name.brightRed);
            console.log("Song Link: " + songs[i].external_urls.spotify.cyan);
            console.log("Album: " + songs[i].album.name.brightRed);
            console.log("-----------------------------------------------------".brightGreen);
        } 
        
    })
}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getMeShows(functionData);
            break;
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;
        case "movie-this":
            getMeMovies(functionData);
            break;
        default:
            console.log("LIRI doesn't know that.")
    }
}

var runApp = function (argOne, Argtwo) {
    pick(argOne, Argtwo);
}

runApp(process.argv[2], process.argv[3]);