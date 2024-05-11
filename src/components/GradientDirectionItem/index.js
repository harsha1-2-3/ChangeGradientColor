import {ChooseBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onClickDirectionBtn, clickedBtn} = props
  const {directionId, displayText} = directionDetails

  const clickedGenerateBtn = () => {
    onClickDirectionBtn(directionId)
  }

  return (
    <li>
      <ChooseBtn
        clickedBtnActive={clickedBtn}
        type="button"
        onClick={clickedGenerateBtn}
      >
        {displayText}
      </ChooseBtn>
    </li>
  )
}
export default GradientDirectionItem
