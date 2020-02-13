var keys = require("./keys.js");

var axios = require("axios");

var Spotify = require('node-spotify-api');

var moment = require('moment');

var getMeShows = function(bandName){


axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp").then(
    function (response) {
        
        

        for (var i = 0; i < response.data.length; i++){
            response.data[i].datetime = moment(response.data[i].datetime).format("MM/DD/YYYY")
            console.log("Venue Name: " + response.data[i].venue.name);
            console.log("Venue City: " + response.data[i].venue.city);
            console.log("Venue Country: " + response.data[i].venue.country);
            console.log("Date of Show: " + response.data[i].datetime);
            console.log("Full Line Up: " + response.data[i].lineup);
            console.log("-----------------------------------")
        }
    })
}

// var spotify = new Spotify({
//     id: keys.spotifyKeys.id,
//     secret: keys.spotifyKeys.secret
// });

// var getMeArtists = function(artists){
//     return artists.name;
// }

// var getMeSpotify = function (songName) {
//     spotify.search({
//         type: 'track',
//         query: "all the small things"
//     }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
//         console.log(data.tracks.items[0])
//         var songs = data.tracks.items;
//         for (var i = 0; i < songs.length; i++){
//             console.log(i)
//             console.log("artist(s): " + data.songs[i].artists.map(getMeArtists));
//             console.log("song name: " + data.songs[i].name);
//             console.log("preview song: " + data.songs[i].external_urls.spotify);
//             console.log("album: " + data.songs[i].album.name);
//             console.log("-----------------------------------------------------");
//         }
//     });
// }

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getMeShows(functionData);
            break;
        default:
            console.log("LIRI doesn't know that.")
    }
}

var runApp = function(argOne, Argtwo){
    pick(argOne, Argtwo);
}

runApp(process.argv[2], process.argv[3]);

