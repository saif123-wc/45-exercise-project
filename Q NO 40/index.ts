function make_album(artist_name:string,album_tittle:string, track?:number){
    let album:{artist:string, tittle:string, tracks?:number} ={
        artist: artist_name,
        tittle:album_tittle,
    };
    if (track !== undefined){
        album.tracks = track
    }
    return album;
}
let album1 = make_album("hamza","album tittle 1");
let album2 = make_album("saif","album tittle 2");
let album3 = make_album("saeed","album tittle 3",100)

console.log(album1);
console.log(album2);
console.log(album3);


