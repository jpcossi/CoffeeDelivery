import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 9.4rem auto;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;

  .IntroTitle{
    width: 58.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;

    h1{
      font-family: 'Baloo 2', sans-serif;
      font-size: 4.8rem;
      font-weight: 800;
      line-height: 130%;
      color: ${props => props.theme['gray-900']};
    } 

    p{
      font-size: 2rem;
      color: ${props => props.theme['gray-800']};
    }

    .IntroIcons{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 3.2rem;
      margin-top: 5rem;

      p{
        font-size: 1.6rem;
      }

      :nth-child(n){
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.55rem;
      }

      :nth-child(2){
        margin-left: 0.5rem;
      }
    }
  }
`