import React, { Component } from 'react';
import './Tracks.css';

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({songs:[]})//rensar song[]
    nextProps.tracks.map((item)=>{//går igenom all data från app.js
      return this.setState({
        songs: this.state.songs.concat({
          songName: item.songName,
          artistName: item.artistName,
          previewUrl: item.previewUrl,
          trackUri: item.trackUri,
        })
      })
    })
  }

  playMusic(e) {//music player
    let music = e.target.parentElement.parentElement.querySelector('.music'),
          audioPlayer = e.target.parentElement,
          leftPause = e.target.parentElement.querySelector('.left'),
          rightPause = e.target.parentElement.querySelector('.right');
    //om man klickar på pilarna o inte "knappen"
    if(e.target.className === 'arrow left' || e.target.className === 'arrow right' || e.target.className === 'arrow left leftPause' || e.target.className === 'arrow right rightPause' || e.target.className === 'arrow left leftPlay' || e.target.className === 'arrow right rightPlay') {
      music = e.target.parentElement.parentElement.parentElement.querySelector('.music');
      audioPlayer = e.target.parentElement.parentElement;
      leftPause = e.target.parentElement.parentElement.querySelector('.left');
      rightPause = e.target.parentElement.parentElement.querySelector('.right');
    }
    if(music.paused) {
      music.play();
      audioPlayer.classList.add('onPlay');//grön effekt
      leftPause.classList.add('leftPause');//pilar pause animation
      rightPause.classList.add('rightPause');//pilar pause animation
      leftPause.classList.remove('leftPlay');//pilar play animation
      rightPause.classList.remove('rightPlay');//pilar play animation
    } else {
      music.pause();
      audioPlayer.classList.remove('onPlay');
      leftPause.classList.remove('leftPause');
      rightPause.classList.remove('rightPause');
      leftPause.classList.add('leftPlay');
      rightPause.classList.add('rightPlay');
    }
  }

  componentDidUpdate() {
    const audPlay = document.querySelectorAll('.audioBox');
    for(let i = 0; i < audPlay.length; i++) {
      audPlay[i].classList.add('hejsan')
    }
  }

  render() {
    return(
      <div className="Tracks">
        {this.state.songs.map((item, index) => {
          return (
            <div className="audioBox" key={index}>
              <audio className='music' controls>
                <source src={item.previewUrl} type="audio/mpeg" />
              </audio>
              <div className="audioPlayer">
                <div className="playBtn" onClick={this.playMusic.bind(this)}>
                  <div className="arrow left"></div>
                  <div className="arrow right"></div>
                </div>
              </div>
              <div className="songInfo">
                <p>Track: {item.songName}</p>
                <p>Artist: {item.artistName}</p>
              </div>
              <div className="btnBox">
                <a href={item.trackUri}>Open in Spotify</a>
              </div>
              <div className="btnBox">
                <p>Recommend</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Tracks;
