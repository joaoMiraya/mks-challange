import { BsCart2 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { setShowBar } from '../../services/redux/appSlice';


function Header() {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart);

    const handleOpenMenu = () => {
        dispatch(setShowBar());
    };

    const HeaderComp = styled.header`
    background-color: #0F52BA;
    color: white;
    padding: 1rem;
    `;

    const HeaderContainer = styled.nav`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    `;

    const LogoContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    `;

    const Logo = styled.h1`
    font-size: 3rem;
    `;

    const LogoText = styled.p`
      font-weight: lighter;
      font-size: 1.3rem;
    `;

    const CartButton = styled.button`
    padding:  6px 16px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    &:hover {
         transform: scale(1.1);  
      }
    `;
    const CartItems = styled.span`
  position: absolute;
  top: -1rem;
  right: -.3rem;
    color: white;
  background-color: #FF6347;
  padding: 4px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
     `;

    return (
        <HeaderComp>
            <HeaderContainer>

                <LogoContainer>
                    <Logo>MKS</Logo>
                    <LogoText>Sistemas</LogoText>
                </LogoContainer>

                <span>
                    <CartButton onClick={() => handleOpenMenu()}>
                        <BsCart2 size={25} />
                        <CartItems>
                            {cartItems.length}
                        </CartItems>
                    </CartButton>
                </span>

            </HeaderContainer>
        </HeaderComp>
    )
}

export default Header;