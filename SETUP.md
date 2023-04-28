# Requirements
First you will need to clone this repo and get into it :
```Bash
git clone https://github.com/haksolot/Spotatus
cd Spotatus
```
Then you will need to install required python libraries to get the program working :

```Bash
pip install -r requirements.txt
```

# Getting tokens
Now you need to get the tokens from the services that we are about to use to access their APIs

## Genius
We are going to create an API client token on [Genius dev page](https://genius.com/developers)

![API client]([https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOSfwbbTVS2pkR-bAqTl6l21-pqUGUkwMswVEuh-DW9Ow_RijU6hwUT981ax2SF0Tp43jYQIuvSwJZQxiqmJNy18lswEKg=w1078-h859](https://lh3.googleusercontent.com/u/1/drive-viewer/AFGJ81oqtC7bE9w9Dgo1FIMbcaBrNBIdmk5u-DVT_G37Fa5dMV9Cnze_yE4E7Cuqs8REpU_q0DyaQxcwDFsyUIleg0F7gAZ4Ow=w1920-h965))


Then complete this little form 

![Client creation](https://lh3.google.com/u/1/d/1WloHwjvWZqlWi0eFiXQSpY-DU5e29jgU=w1920-h965-iv1)

And finally we are going to generate an **Access Token** and write it down 

![Generate](https://lh3.google.com/u/1/d/17d6BOqGqFFTXPeAo3QSj_XCHuC6kc2zg=w1920-h965-iv1)

## Spotify
For spotify we are going to get two elements :
- Client ID
- Client Secret
  
First navigate to [Spotify dev page](https://developer.spotify.com/) and go to your Dashboard (you will need to connect to a Spotify account)

![Spotify dev site](https://lh3.google.com/u/1/d/1JL-ZSjr3pf_2yPmYHqxXc7i_bYUYD-1O=w1920-h316-iv1)

Then create an app 

![Create an app](https://lh3.google.com/u/1/d/1fgYypLay1wN5oEh_aA23SZBLX7Da7CbO=w1920-h965-iv1)

Write down the **Client ID** and the **Client Secret**

![Client](https://lh3.google.com/u/1/d/1PnEHLSUUjex6ngHdhyh8UiEYtZciZjer=w1920-h316-iv1)

And finaly **edit settings** and add a **redirect URI** (here I use http://localhost:80 for convenience)

![redirect uri](https://lh3.google.com/u/1/d/1szguF5sd64iciaETJ5TbFXJ1kyciy1H0=w1920-h316-iv1)


# Editing
Now that we have all our tokens you can grab your favourite text editor and open the ```app.py``` file

And simply replace these variables with the tokens and ID's previously written down

(note that the redirect URI must be the same as the one you've setten up)

![code](https://lh3.google.com/u/1/d/1sj3XyPeW4JtYMqEV2rnsfTrNb8SKt7hr=w1920-h316-iv1)

Your all done, to start the program simply type :
```Bash
python app.py
```
And navigate to your compter's IP adress to see the result

Have fun ;)
