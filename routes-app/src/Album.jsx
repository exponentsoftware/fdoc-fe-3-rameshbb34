import React from "react";
import "./album.css";

const Album = ({
  id,
  album_name,
  musician_name,
  album_cover,
  songs,
  handleDelete,
}) => {
  console.log(songs);

  return (
    <div>
      <div className="poster">
        <img src={album_cover} alt="" height="200" width="200" />
      </div>
      <div className="album_name">{album_name}</div>
      <div className="musician_name">{musician_name}</div>

      <div class="dropdown">
        <button class="dropbtn"> Hover to see Songs</button>
        <button className="delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <div class="dropdown-content">
          {songs.map((item, index) => {
            return <a href="#">{item}</a>;
          })}
        </div>
      </div>
    </div>
  );
};


export default Album;