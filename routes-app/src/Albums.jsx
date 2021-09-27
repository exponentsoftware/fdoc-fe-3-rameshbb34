import React from "react";
import Album from "./Album";

const Albums = ({
  album_name,
  musician_name,
  album_cover,
  songs,
  handleDelete,
  id,
}) => {
  const styles = {
    float: "left",
    color: "blue",
    margin: "2em",
  };
  return (
    <div style={styles}>
      <Album
        id={id}
        album_name={album_name}
        musician_name={musician_name}
        album_cover={album_cover}
        songs={songs}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Albums;