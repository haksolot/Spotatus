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

![API client](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOSfwbbTVS2pkR-bAqTl6l21-pqUGUkwMswVEuh-DW9Ow_RijU6hwUT981ax2SF0Tp43jYQIuvSwJZQxiqmJNy18lswEKg=w1078-h859)

Then complete this little form 

![Client creation](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOSFeQTXLMtsKf0Qn35As-2X4b1KwqzLRF-A5IPuS4poUMgfjDDuk65b_M0aiN-IaXLnqX98QOWLVLkCLMHl23vcfGiR=w1078-h859)

And finally we are going to generate an **Access Token** and write it down 

![Generate](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOQTmg5mVkUHhjrRRHXz4RIeHvwWh6zUTLk9J3fQCdxoeZFckaUFO9bhhcW69SbTNezIZBKRrSCKWjXJzivavoN1XsWvGQ=w1078-h859)

## Spotify
For spotify we are going to get two elements :
- Client ID
- Client Secret
  
First navigate to [Spotify dev page](https://developer.spotify.com/) and go to your Dashboard (you will need to connect to a Spotify account)

![Spotify dev site](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOSApsfopevo11H3dEUIGgcS8aLTc9LunGbTSQ_PHNvwnY25iLyBCachE8HfVpCqtuuWACS5zM9dgYAGYXrl70cB3ma2uw=w1078-h859)

Then create an app 

![Create an app](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOSE_1ihhDbPcgXx4Xa0ALcD6UbIweLdAyb3btWvoMbU94Uo5ecaXWv7gTN1an2kgGUfA0RY5IP4mCW2uZwrKz8MQWxg=w1078-h859)

Write down the **Client ID** and the **Client Secret**

![Client](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEORZPRno6sJji2I8-qOTpQzVToSx1C4fLaXZvp7N3SNBYqjm4ncLbssBjfmtuzL1J8uti9f45izNLIJ7d_FsleLhX9bS1w=w1078-h859)

And finaly **edit settings** and add a **redirect URI** (here I use http://localhost:80 for convenience)

![redirect uri](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOQcGXZZJ40Xpp2vcbOWOTFUW6mrluHHXUQawPlJpC2t38B5XuXs_sQmz3psJ2kD1JaN4bJddM9Oob6LS4LRB5ZbgQ_Q=w1078-h859)


# Editing
Now that we have all our tokens you can grab your favourite text editor and open the ```app.py``` file

And simply replace these variables with the tokens and ID's previously written down

(note that the redirect URI must be the same as the one you've setten up)

![code](https://lh3.googleusercontent.com/u/1/drive-viewer/AAOQEOTC1iVYEU0QCPMv_idrqlMQ1iBcG09trl3qMDm7UMM_KPheXOwB4905qcpVlmPvB__ai49Y4vRLNwHmx8bWrij0EAAWNw=w1078-h859)

Your all done, to start the program simply type :
```Bash
python app.py
```
And navigate to your compter's IP adress to see the result

Have fun ;)
