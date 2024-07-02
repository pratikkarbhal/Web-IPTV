document.addEventListener('DOMContentLoaded', function () {
    // Proxy URL to bypass CORS policy
    const proxyURL = 'https://api.allorigins.win/get?url=';
    const playlistURL = 'https://github.com/pratikkarbhal/Web-IPTV/blob/main/Sample.m3u?raw=true';
    const proxyPlaylistURL = proxyURL + encodeURIComponent(playlistURL);

    fetch(proxyPlaylistURL)
        .then(response => response.json())
        .then(data => {
            const playlistContent = data.contents;
            const playlist = document.getElementById('playlist');
            const lines = playlistContent.split('\n');
            let firstStreamUrl = null;
            lines.forEach((line, index) => {
                if (line.startsWith('#EXTINF')) {
                    const title = line.split(',')[1];
                    const url = lines[index + 1].trim();
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.innerHTML = `<a href="#" data-url="${url}">${title}</a>`;
                    playlist.appendChild(listItem);
                    
                    // Set the first stream URL
                    if (firstStreamUrl === null) {
                        firstStreamUrl = url;
                    }
                }
            });

            // Play the first stream by default
            if (firstStreamUrl !== null) {
                playStream(firstStreamUrl);
            }

            playlist.addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target && event.target.nodeName === 'A') {
                    const streamUrl = event.target.getAttribute('data-url');
                    playStream(streamUrl);
                }
            });

            // Hide the loading screen after at least 1 second
            setTimeout(function () {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 1800); // 1800 milliseconds = 1 second
        })
        .catch(error => console.error('Error fetching the playlist:', error));

    // Create a single instance of the player
    const playerElement = document.getElementById('player');
    const player = new Clappr.Player({
        parentId: "#player",
        width: '100%',
        height: '100%',
        autoPlay: true,
        mediacontrol: {seekbar: "#bb86fc", buttons: "#e0e0e0"},
        mute: false,
    });

    function playStream(url) {
        player.load(url);
    }
});
