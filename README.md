## Take a look: [📺Live Now](https://pratikkarbhal.github.io/Web-IPTV/) 
Only for educational purposes, Make your own...

For Android/Smart TVs:
1. Go to github playlist
2. Copy **raw-file url(i.e. just add ' ?raw=true ' in the end of browser url)**
3. Paste it in IPTV Player.

For your own Github Repo: 
1. Fork the repository
2. Edit your .m3u playlist
3. Change raw-file url i.e playlistURL in script.js (line no.4 in script.js)
4. Enable github-pages [(see steps)](https://docs.github.com/en/pages/quickstart) 
5. Done. Now use your github io URL to use.


This is IPTV Concept made by me.
Some channels may not work due to CORS policy.


## Screenshots:
1. Desktop

![Desktop](https://github.com/pratikkarbhal/Web-IPTV/blob/main/desktop.gif)

2. Mobile

![Mobile](https://github.com/pratikkarbhal/Web-IPTV/blob/main/mobile.gif)


#

# Technologies Used:
HTML,CSS: Used for structuring and Styling of the webpage.

JavaScript: Used for fetching data, handling events, and dynamically updating the webpage content.

Bootstrap: Utilized for responsive design and layout components.

Clappr.js: A JavaScript library for building media players, used for playing IPTV streams.

Fetch API: Used for making HTTP requests to fetch the IPTV playlist data.

CORS Proxy: A proxy URL used to bypass CORS policy restrictions when fetching the IPTV playlist data.

JSON: Used for parsing the fetched IPTV playlist data.

Responsive Design: Implemented to ensure the webpage adapts well to various screen sizes and devices.

Free2air Channel stream sources.


#

# Overview:

IPTV is a new method of delivering and viewing television programs using an IP network and high speed broadband technology. It is fast becoming a popular value added service in many countries. 
However in India, IPTV is yet to be a big thing.

As per TRAI Regulations,
New Delhi, 4th January, 2008 – Telecom Regulatory Authority of India (TRAI) releases the recommendation on provisioning of IPTV services. 

IPTV is legal in India but it not yet provisioned by government.

So, I am making a concept of IPTV service.
Collecting some m3u8 sources of free 2 air TV Channels.
Creating a basic Bootstrap based Web page that handles the URLs from the m3u Playlist And Chromecast based addon player to play those livestreams in browser.
