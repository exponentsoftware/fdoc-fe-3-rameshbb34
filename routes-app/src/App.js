import React, { useState } from "react";
import "./App.css";
import Albums from "./Albums";
import AddAlbum from "./AddAlbum";


function App() {
  //`id`, `artist`, `album_title`, `album_cover`, `songs`

  const db = {
    albums: [
      {
        id: "01",
        artist: "Manisharma",
        album_title: "Style",
        album_cover: "https://c.saavncdn.com/393/Style-Telugu-2013-500x500.jpg",
        songs: [
          "Style style",
          "Edola Edo",
          "Rock&Roll",
          "Chiru Cheyyesthe",
        ],
      },
      {
        id: "02",
        artist: "Pritam",
        album_title: "Yeh Jawaani Hai Deewani",
        album_cover: "https://c.saavncdn.com/440/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg",
        songs: ["Badtameez Dil", "Balam Pichkari", "Kabira", "Ghagra"],
      },
      {
        id: "03",
        artist: "Manisharma",
        album_title: "Sridevi Soda Center",
        album_cover: "https://c.saavncdn.com/334/Sridevi-Soda-Center-Telugu-2021-20210825145336-500x500.jpg",
        songs: [
          "Naalone Unna",
          "Manduloda",
          "Chukkala Melam",
          "Naalo Innalluga",
        ],
      },
      {
        id: "04",
        artist: "Pawan Ch",
        album_title: "Love Story",
        album_cover: "https://c.saavncdn.com/582/Love-Story-Telugu-2020-20210923220520-500x500.jpg",
        songs: ["AyPilla", "Nee Chitram Choosi", "Saranga Dariya", "Evo Evo Kalale"],
      },
    ],
  };

const [search, setSearch] = useState("")
  const [state, setState] = useState(db.albums);
  const updateAlbum = (data) => {
    const addItem = {
      id: "05",
      artist: data.artist,
      album_title: data.album_title,
      album_cover: data.image,
      songs: ["", "", ""],
    };
    setState([...state, addItem]);
    console.log("updateditem",state);
  };

  const handleDelete = (id) => {
    alert("are you sure want to delete");
    const data = state.filter((item) => item.id !== id);
    console.log(data, id);
    setState(data);
  };

  console.log("updated", state);
  console.log("search",search);
  return (
    <>
      <div className="searchbar">
        <input
          placeholder="Seach album name..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <AddAlbum updateAlbum={updateAlbum} />

      <div className="App">
        {state
          .filter((val, index) => {
            if (search == "") {
              return val;
            } else if (
              val.album_title.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return (
              <Albums
                key={index}
                id={item.id}
                album_name={item.album_title}
                musician_name={item.artist}
                album_cover={item.album_cover}
                songs={item.songs}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
