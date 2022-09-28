const make_album = (a_name, title, noOfTracks = 0) => {
    return {
        artist_name: a_name,
        album_title: title,
        num_of_tracks: noOfTracks
    };
}

console.log(make_album("Weeknd", "Melancholy"));
console.log(make_album("Weeknd", "Afterhours"));
console.log(make_album("Weeknd", "Starboy", 10));
