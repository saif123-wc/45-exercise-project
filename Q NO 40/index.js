function make_album(artist_name, album_tittle, track) {
    var album = {
        artist: artist_name,
        tittle: album_tittle,
    };
    if (track !== undefined) {
        album.tracks = track;
    }
    return album;
}
var album1 = make_album("hamza", "album tittle 1");
var album2 = make_album("saif", "album tittle 2");
var album3 = make_album("saeed", "album tittle 3", 100);
console.log(album1);
console.log(album2);
console.log(album3);
