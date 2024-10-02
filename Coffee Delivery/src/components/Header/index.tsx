import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { ButtonCheckOut, ButtonLocation, HeaderContainer } from "./styles";

import LogoCoffeeDelivery from "../../assets/Logo.svg"

export function Header(){
  return(
     <HeaderContainer>
      <NavLink to='/' title="Home">
        <img src={LogoCoffeeDelivery} alt="Logo CoffeeDelivery" />
      </NavLink>
      <div className="ButtonsHeader">
        <ButtonLocation>
          <MapPin size={22}/>
          <p>Brasília, DF</p>
        </ButtonLocation>
        <NavLink to='/checkout'>
          <ButtonCheckOut>
            <ShoppingCart size={22}/>
          </ButtonCheckOut>
        </NavLink>
      </div>

    </HeaderContainer>
    
  )
}