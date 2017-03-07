import React, { Component } from 'react';
import './Genre.css';

class Genre extends Component {
  selectorValue(e) {
    this.props.selectedGenre(e.target.value)//radio button value to app.js
  }

  render() {
    return(
      <div className="Genre">
        <p>Genres</p>

        <div className="radioBox">
          <input type="radio" name="selector" value="pop" onClick={this.selectorValue.bind(this)} id="pop"/>
          <label htmlFor="pop">Pop</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="dance" onClick={this.selectorValue.bind(this)} id="dance"/>
          <label htmlFor="dance">EDM/Dance</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="workout" onClick={this.selectorValue.bind(this)} id="workout"/>
          <label htmlFor="workout">Workout</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="party" onClick={this.selectorValue.bind(this)} id="party"/>
          <label htmlFor="party">Party</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="hiphop" onClick={this.selectorValue.bind(this)} id="hiphop"/>
          <label htmlFor="hiphop">Hiphop</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="rock" onClick={this.selectorValue.bind(this)} id="rock"/>
          <label htmlFor="rock">Rock</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="metal" onClick={this.selectorValue.bind(this)} id="metal"/>
          <label htmlFor="metal">Metal</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="indie" onClick={this.selectorValue.bind(this)} id="indie"/>
          <label htmlFor="indie">Indie</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="r&b" onClick={this.selectorValue.bind(this)} id="rb"/>
          <label htmlFor="rb">R&B</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="country" onClick={this.selectorValue.bind(this)} id="country"/>
          <label htmlFor="country">Country</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="soul" onClick={this.selectorValue.bind(this)} id="soul"/>
          <label htmlFor="soul">Soul</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="classic" onClick={this.selectorValue.bind(this)} id="classic"/>
          <label htmlFor="classic">Classic</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="jazz" onClick={this.selectorValue.bind(this)} id="jazz"/>
          <label htmlFor="jazz">Jazz</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="blues" onClick={this.selectorValue.bind(this)} id="blues"/>
          <label htmlFor="blues">Blues</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="reggae" onClick={this.selectorValue.bind(this)} id="reggae"/>
          <label htmlFor="reggae">Reggae</label>
        </div>

        <div className="radioBox">
          <input type="radio" name="selector" value="romantic" onClick={this.selectorValue.bind(this)} id="romantic"/>
          <label htmlFor="romantic">Romantic</label>
        </div>
      </div>
    )
  }
}

export default Genre;
