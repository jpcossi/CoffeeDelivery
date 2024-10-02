import { HomeContainer, IntroContainer } from "./styles";
import IntroImage from "../../assets/IntroImage.svg"
import IconShop from "../../assets/Icon1.svg"
import IconClock from "../../assets/Icon2.svg"
import IconBook from "../../assets/Icon3.svg"
import IconCoffee from "../../assets/Icon4.svg"

export function Home(){
  return(
    <HomeContainer>
      <IntroContainer>
        <div className="IntroTitle">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className="IntroIcons">
            <div>
              <img src={IconShop} alt="Icone de compra" />
              <p>Compra simples e segura</p>
            </div>
            <div>
              <img src={IconBook} alt="Icone de compra" />
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <img src={IconClock} alt="Icone de compra" />
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <img src={IconCoffee} alt="Icone de compra" />
              <p>O café chega fresquinho até voce</p>
            </div>
            
          </div>
        </div>
        <img src={IntroImage} alt="Imagem da Introdução do site" />
      </IntroContainer>

      
    </HomeContainer>
  )
}