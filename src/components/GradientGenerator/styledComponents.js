import styled from 'styled-components'

export const BgGradient = styled.div`
    background-image: linear-gradient(
    to ${props =>
      props.clickedGenerateBtn ? `${props.directionValue}` : 'top'}, 
    ${props => (props.clickedGenerateBtn ? `${props.leftColor}` : '#8ae323')}, 
    ${props => (props.clickedGenerateBtn ? `${props.rightColor}` : '#014f7b')}
    );
    background-size: cover;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        `
