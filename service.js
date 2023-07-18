const playlistDAL = require("./dataAccess");

class PlaylistService {
  addSong(song) {
    playlistDAL.addSong(song);
  }

  playSong(songId) {
    return playlistDAL.incrementPlayCount(songId);
  }

  getSortedSongs() {
    return playlistDAL.getSortedSongsByPlayCount();
  }
}

module.exports = new PlaylistService();
