import React, { useState } from "react";

const AddAlbum = (props) => {
  const [state, setState] = useState({
    album_title: "",
    artist: "",
    image: "",
  });
    const [uimage, setUimage] = useState("");

    const handleChangetextField = (name) => (event) => {
      setState({ ...state, [name]: event.target.value });
    };


    const handleChangeFile = (event) => {
      setUimage(event.target.files[0]);
    };

    const uploadImage = async () => {
      const data = new FormData();
      data.append("file", uimage);
      data.append("upload_preset", "vishaldev");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfdxz6jkp/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const file = await res.json();
        setState({ ...state, image: file.secure_url });
    };

    const onSubmit = (e) => {
      e.preventDefault();
      uploadImage();
    };

    return (
      <div style={{ height: "70vh", width: "25%", border: "1px solid green" }}>
        <div>
          {" "}
          <h1>Add Your Album</h1>{" "}
        </div>

        <form action="" className="formdata" onSubmit={onSubmit}>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.album_title}
              name="album_title"
              placeholder="album_title"
              onChange={handleChangetextField("album_title")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="text"
              value={state.artist}
              name="artist"
              placeholder="artist"
              onChange={handleChangetextField("artist")}
            />
          </div>
          <div style={{ margin: "2em" }}>
            <input
              type="file"
              name="upload-file"
              placeholder="upload-cover-pic"
              onChange={handleChangeFile}
            />
          </div>
          <div>
            {" "}
            <input
              type="submit"
              value="Submit"
              onClick={() => props.updateAlbum(state)}
            />
          </div>
        </form>
        <div style={{ color: "blue", width: "220px", height: "200px" }}>
          <img src={state.image} alt="" width="200px" height="190px" />
          {console.log(state.image)}
          <p> album_name: {state.album_title}</p>
          <p>artist: {state.artist}</p>
        </div>
      </div>
    );
};

export default AddAlbum;
