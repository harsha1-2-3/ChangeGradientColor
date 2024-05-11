import styled from 'styled-components'

export const ChooseBtn = styled.button`

    color: #334155;
    height: 40px;
    width: 150px;
    border-radius: 6px;
    background-color: #ffffff;
    font-weight: bold;
    border: 0px;
    transition: all 0.20s linear;
    cursor: pointer;
    outline: none;
    opacity: ${props => (props.clickedBtnActive ? '1' : '0.5')};
    margin: 5px;

@media (min-width:768px) {
        font-size: 15px;
        width: 130px;
}
`
