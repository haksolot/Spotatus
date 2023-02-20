import json
from flask import Flask, render_template, make_response
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import lyricsgenius

genius = lyricsgenius.Genius("GENIUS-API_TOKEN")

scp ="user-read-playback-state"

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id="CLIENT_ID",
                                               client_secret="CLIENT_SECRET",
                                               redirect_uri="http://localhost:80",
                                               scope=scp))

def get_lyrics(song ,artist):
    genius.remove_section_headers
    song = genius.search_song(song,artist)
    if (song == None):
        return 'No lyrics...'
    return song.lyrics

def playback():

    track = sp.current_user_playing_track()
    if (track == None):
        timing = 0
        progress = 0
        artist = '...'
        title = 'Not Playing'
        uri = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        albumart_uri = 'https://avatars.githubusercontent.com/u/83018259?v=4'
        dict = {'track':str(title), 'artist':str(artist), 'uri':str(uri), 'album_art':str(albumart_uri), 'lyrics':'Nothing to see here !', 'current_time':int(progress), 'total_time':int(timing)}
        return dict
    else:
        timing = track['item']['duration_ms']
        progress =track['progress_ms']
        artist = track['item']['artists'][0]['name']
        title = track['item']['name']

        track_results = sp.search(q="artist:" + artist + " track:" + title, type="track", limit=1, offset=0)

        if track_results['tracks']['total'] != 0:
            track_results = track_results['tracks']['items'][0]  # Find top result
            uri = track_results['uri']
            albumart_uri = track_results['album']['images'][0]['url']
            dict = {'track':str(title), 'artist':str(artist), 'uri':str(uri), 'album_art':str(albumart_uri), 'lyrics':get_lyrics(title, artist), 'current_time':int(progress), 'total_time':int(timing)}
            return dict
        else:
            print("INFO: Spotify track search returned no results")
            uri = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            albumart_uri = 'https://avatars.githubusercontent.com/u/83018259?v=4'
            dict = {'track':str(title), 'artist':str(artist), 'uri':str(uri), 'album_art':str(albumart_uri), 'lyrics':get_lyrics(title, artist), 'current_time':int(progress), 'total_time':int(timing)}
            return dict

    

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/infos')
def infos():
    string = playback()
    jsonstring = json.dumps(string, indent=4)
    jsonstring = make_response(jsonstring, 200)
    jsonstring.mimetype = "application/json"
    return jsonstring

if __name__ == '__main__':
   app.run(host='0.0.0.0', threaded=True, port=80)