const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const resultList = document.getElementById("results-list");
const cover = document.getElementById("cover");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const audioPlayer = document.getElementById("audio-player");

searchButton.addEventListener("click", searchMusic);

async function searchMusic() {
  const search = searchInput.value;
  if (search.trim() === "") {
    alert("Write a valid name");
    return;
  }
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(search)}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '46e465d427mshb64e4066e24a068p11641fjsnd084e02ffab7',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  displaySongs(data.data);
  console.log(data);
}

function displaySongs(songs) {
  resultList.innerHTML = "";
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
      <img src="${song.album.cover_medium}">
      <div class="song-info">
        <h3>${song.title}</h3>
        <p>${song.artist.name}</p>
      </div>
    `;

    songCard.addEventListener("click", function () {
      playSong(song);
    });

    resultList.appendChild(songCard);
    console.log(song);
  }
}

function playSong(song) {
  cover.src = song.album.cover_medium;
  songTitle.textContent = song.title;
  artistName.textContent = song.artist.name;
  audioPlayer.src = song.preview;
  audioPlayer.play();
}
