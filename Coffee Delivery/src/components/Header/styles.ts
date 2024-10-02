import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 3.3rem 16rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .ButtonsHeader{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;    
  }  
`

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0.8rem;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.5s;

  p{
    font-size: 1.4rem;
  }
`

export const ButtonLocation = styled(ButtonContainer)`
  height: 38px;
  
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-700']};

  &:hover{
    background: ${props => props.theme['purple-500']};
  }
`

export const ButtonCheckOut = styled(ButtonContainer)`
  height: 38px;
  width: 38px;

  background: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-500']};

  &:hover{
    background: ${props => props.theme['yellow-300']};
  }
`