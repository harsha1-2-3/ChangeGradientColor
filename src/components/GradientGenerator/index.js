import {Component} from 'react'
import {BgGradient} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'
import './index.css'
const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionValue: 'top',
    leftColor: '#8ae323',
    rightColor: '#014f7b',
    clickedGenerateBtn: false,
  }

  onClickDirectionBtn = directionId => {
    const findObject = gradientDirectionsList.find(
      each => each.directionId === directionId,
    )
    this.setState({directionValue: findObject.value})
  }

  onChangeLeftColor = event => {
    this.setState({leftColor: event.target.value})
  }

  onChangeRightColor = event => {
    this.setState({rightColor: event.target.value})
  }

  onClickGenerateBtn = () => {
    this.setState({clickedGenerateBtn: true})
  }

  render() {
    const {directionValue, leftColor, rightColor, clickedGenerateBtn} =
      this.state

    return (
      <>
        <BgGradient
          directionValue={directionValue}
          leftColor={leftColor}
          rightColor={rightColor}
          clickedGenerateBtn={clickedGenerateBtn}
          data-testid="gradientGenerator"
        >
          <div className="gradientCont">
            <h1 className="head">Generate a CSS Color Gradient</h1>
            <p className="para">Choose Direction</p>
            <ul className="gradientBtns">
              {gradientDirectionsList.map(eachItem => (
                <GradientDirectionItem
                  clickedBtn={eachItem.value === directionValue}
                  onClickDirectionBtn={this.onClickDirectionBtn}
                  key={eachItem.directionId}
                  directionDetails={eachItem}
                />
              ))}
            </ul>
            <p className="para">Pick the Colors</p>
            <div className="colorInputsCont">
              <div className="colorCont">
                <p className="colorPara">{leftColor}</p>
                <input
                  onChange={this.onChangeLeftColor}
                  value={leftColor}
                  className="colorPicker"
                  type="color"
                />
              </div>
              <div className="colorCont">
                <p className="colorPara">{rightColor}</p>
                <input
                  onChange={this.onChangeRightColor}
                  value={rightColor}
                  className="colorPicker"
                  type="color"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={this.onClickGenerateBtn}
              className="generateBtn"
            >
              Generate
            </button>
          </div>
        </BgGradient>
      </>
    )
  }
}
export default GradientGenerator
