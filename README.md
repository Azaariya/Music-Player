# 🎵 Music Player

A web-based music search and preview application built with **HTML, CSS, and JavaScript**. Search for songs, explore album artwork, view artist information, and listen to song previews directly in your browser.

## ✨ Features

* 🔍 **Search Music** — Search for songs using the Deezer API.
* 🖼️ **Album Artwork** — Display album covers for search results.
* 🎤 **Artist Information** — View the title and artist of each song.
* ▶️ **Song Previews** — Click a search result to play its available audio preview.
* 🎧 **Now Playing** — Display the selected song's cover, title, and artist.
* ⚡ **Dynamic Results** — Generate clickable song cards using JavaScript and DOM manipulation.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Deezer API through RapidAPI
* Fetch API for asynchronous HTTP requests

## 🚀 Getting Started

### Prerequisites

* A modern web browser
* A RapidAPI account with access to the Deezer API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Azaariya/Music-Player.git
   ```

2. Open the project folder in your code editor.

3. Configure the API integration with your own securely managed API credentials.

4. Open `index.html` in your browser, preferably using the VS Code Live Server extension.

5. Enter a song or artist name in the search field and click the search button.

6. Select a song from the results to play its available preview.

## 📂 Project Structure

```text
Music-Player/
├── index.html
├── style.css
├── script.js
└── README.md
```

* `index.html` — Defines the application interface.
* `style.css` — Controls the visual design and layout.
* `script.js` — Handles music searches, result rendering, and audio playback.
* `README.md` — Documents the project and setup instructions.

## 🔐 API Configuration

This application uses the Deezer API through RapidAPI to retrieve music search results and preview information.

**Security note:** Never publish a private API key in client-side JavaScript or commit it to a public repository. Rotate any key that has already been exposed, and use a server-side proxy to protect credentials when the API requires a secret key.

## 🎓 What I Learned

* Manipulating the DOM to render search results dynamically.
* Handling user input and browser events.
* Making asynchronous API requests using `async`/`await` and `fetch()`.
* Working with JSON responses from an external API.
* Updating the interface based on the selected song.
* Playing audio previews with the HTML audio element.

## 🔮 Future Improvements

* Add loading indicators and clearer error messages.
* Support searching by song title, artist, and album.
* Add previous and next track controls.
* Implement a playback progress bar and volume control.
* Improve responsive design for mobile devices.
* Add a favorites feature and persistent playlists.

---

**Built by Azariya**
