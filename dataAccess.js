class PlaylistDAL {
  constructor() {
    this.playlist = [];
  }

  addSong(song) {
    this.playlist.push(song);
  }

  getSongById(songId) {
    return this.playlist.find((song) => song.id === songId);
  }

  getAllSongs() {
    return this.playlist;
  }

  incrementPlayCount(songId) {
    const song = this.getSongById(songId);
    if (song) {
      song.playCount += 1;
    }
    return song;
  }

  getSortedSongsByPlayCount() {
    return this.playlist.sort((a, b) => b.playCount - a.playCount);
  }
}

module.exports = new PlaylistDAL();
