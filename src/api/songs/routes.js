const routes = (handler) => [
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSongHandler, // hanya menerima dan menyimpan "satu" song.
  },
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getSongsHandler, // mengembalikan "banyak" song.
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handler.getSongByIdHandler, // mengembalikan "satu" song.
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handler.putSongByIdHandler, // hanya menerima dan mengubah "satu" song.
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handler.deleteSongByIdHandler, // deletesongByIdHandler hanya menghapus "satu" song.
  },
];

module.exports = routes;
