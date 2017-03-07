import React, { Component } from 'react';
import './App.css';
import Genre from './components/Genre';
import Tracks from './components/Tracks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      genre: '',
      tracks: []
    }
  }

  roulette() {
    this.setState({tracks:[]});//rensar tracks
    if(this.state.genre === '') {//om man inte väljer en genre
      console.log('Choose a genre')
    } else {
      for(let i = 0; i < 5; i++) {
        const offsetNum = Math.floor(Math.random() * 10000);
        //console.log(offsetNum)
        const spotReq = fetch(`https://api.spotify.com/v1/search?q=${this.state.genre}&type=track&limit=1&offset=${offsetNum}`, {
          method: 'GET'
        });
        spotReq.then((data)=>{
          return data.json()
        }).then((data)=>{
          //console.log(data);
          for(let i = 0, len = data.tracks.items.length; i < len; i++) {
            const artistArray = [];//alla artister
            for(let j = 0, len = data.tracks.items[i].artists.length; j < len; j++ ) {
              artistArray.push(data.tracks.items[i].artists[j].name)//pushar till artistArray
            }
            this.setState({
              tracks: this.state.tracks.concat(//pushar till state
                {
                  songName: data.tracks.items[i].name,
                  previewUrl: data.tracks.items[i].preview_url,//mp3 länk
                  artistName: artistArray.join(', '),//artister
                  trackUri: data.tracks.items[i].uri,
                }
              )
            })
          }//for i
        })//then
      }//for 5
    }//else
  }//roulette

  selectedGenre(val) {//radio button value från genre.js
    this.setState({
      genre: val,
      tracks: []//rensar tracks från duplication när man väljer ny genre
    })
  }

  render() {
    return (
      <div className="App">
        <h3 className="title">Music Roulette</h3>
        <Genre selectedGenre={this.selectedGenre.bind(this)} />
        <div className="rouBtn" onClick={this.roulette.bind(this)}>Roulette</div>
        <p className="tipText">(Click to randomise five tracks)</p>
        <Tracks tracks={this.state.tracks}/>
      </div>
    );
  }
}

export default App;
