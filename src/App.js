import React, { useState } from "react";
import './App.css'
import { ListOfGif } from "./Components/ListOFGif/ListOfGif";


function App() {
  const [keyword, setKeyword] = useState('panda')

  const searchGif = (event) => {
    setKeyword(event.target.value)
    console.log(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className="App">
      <h1>Gif searcher</h1>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          onChange={searchGif}
          type='text'
          placeholder="Busca tu GIF"
        />
      </form>
      <section className="gif--grid">
        <ListOfGif keyword={keyword}/>
      </section>
    </div>
  );
}

export { App };
