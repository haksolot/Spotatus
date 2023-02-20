function whichOrientation(){
    if(window.innerHeight > window.innerWidth){
        return 3
    }
    else if(window.innerHeight < window.innerWidth){
        return 2
    }
}

function toggleLyrics(){
    if(whichOrientation() == 3){
        if (document.getElementById('lyrics-holder').style.height == '0%') {
            document.getElementById('lyrics-holder').style.height='100%';
            document.getElementById('lyrics-holder').style.width='100%';


        } else {
            document.getElementById('lyrics-holder').style.height='0%';
            document.getElementById('lyrics-holder').style.width='100%';
        }
    }
    else if(whichOrientation() == 2){
        if (document.getElementById('lyrics-holder').style.width == '0%') {
            document.getElementById('lyrics-holder').style.width='100%';
            document.getElementById('lyrics-holder').style.height='100%';

        } else {
            document.getElementById('lyrics-holder').style.width='0%';
            document.getElementById('lyrics-holder').style.height='100%';
        }
    }

}

let portrait = window.matchMedia("(orientation: portrait)");
let landscape = window.matchMedia("(orientation: landscape)");

portrait.addEventListener("change", function(e) {
    if(e.matches) {
        document.getElementById('lyrics-holder').style.height='0%';
        document.getElementById('lyrics-holder').style.width = '100%';
    }
})

landscape.addEventListener("change", function(e) {
    if(e.matches) {
        document.getElementById('lyrics-holder').style.height='100%';
        document.getElementById('lyrics-holder').style.width = '0%';
    }
})

let jsonResponse = 0
let url = "http://"+location.host.toString()+"/infos";

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    jsonResponse = data;
    return data;
  }

function refreshInfos()
{
    fetchAsync(url);
    refreshTitle(jsonResponse.track);
    refreshArtist(jsonResponse.artist);
    refreshUri(jsonResponse.uri);
    refreshAlbumArt(jsonResponse.album_art);
    refreshLyrics(jsonResponse.lyrics);
    refreshTotalTime(jsonResponse.total_time);
    refreshCurrentTime(jsonResponse.current_time, jsonResponse.total_time);
}

function refreshTitle(track)
{
    if (document.getElementById("title").innerHTML != track)
    {
        document.getElementById("title").textContent = track;
    }
}

function refreshArtist(artist)
{
    if (document.getElementById("artist").innerHTML != artist)
    {
        document.getElementById("artist").textContent = artist;
    }
}

function refreshUri(uri)
{
    if (document.getElementById("uri").getAttribute('href') != uri)
    {
        document.getElementById("uri").setAttribute('href', uri);
    }
}

function refreshAlbumArt(album_art)
{  
    if (document.getElementById("cover").getAttribute('src') != album_art)
    {
        document.getElementById("cover").setAttribute('src', album_art);
        document.getElementById("background").setAttribute('src', album_art);
    }
}

function refreshLyrics(lyrics)
{
    var lyricsArray = lyrics.split("\n");
    var finalLyrics = lyricsArray.join("<br>");
    if (document.getElementById("lyrics").innerHTML != finalLyrics)
    {
        document.getElementById("lyrics").innerHTML = finalLyrics;
    }
}

function refreshTotalTime(total_time)
{
    var time;
    var m = ((total_time * 0.001)/60) >> 0; 
    var s = parseInt((((total_time * 0.001)/60)-m) * 60);
    if (s.toString().length == 1)
    {
        time = m+':0'+s;
    }
    else
    {
        time = m+':'+s;
    }
    document.getElementById("total_time_portrait").textContent = time;
    document.getElementById("total_time_landscape").textContent = time;
}

function refreshCurrentTime(current_time, total_time)
{
    percent = (100/total_time)*current_time;
    document.getElementById("time-slider_portrait").setAttribute('style', "width :"+percent+"%");
    document.getElementById("time-slider_landscape").setAttribute('style', "width :"+percent+"%");
   
    var time;
    var m = ((current_time * 0.001)/60) >> 0; 
    var s = parseInt((((current_time * 0.001)/60)-m) * 60);
    if (s.toString().length == 1)
    {
        time = m+':0'+s;
    }
    else
    {
        time = m+':'+s;
    }
    document.getElementById("current_time_portrait").textContent = time;
    document.getElementById("current_time_landscape").textContent = time;

}

window.onload = function(){setInterval(refreshInfos, 1000);};
window.onunload = function(){window.clearInterval(refreshInfos);};
