import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"
import PigPen from "./PigPen.js"

export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    this.props.alterEnvironment("inhospitable")
    this.relax();
  }

  relax = () => {
    this.setState({
      panicked: false
    })
    setTimeout(() => this.props.alterEnvironment("docile"), 1000)
  }

  exclaim = () => {
    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()

    this.setState({
      panicked: true
    })
  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
