import styled from "styled-components";


function Footer() {

    const Footer = styled.footer`
    background-color: #c1c1c1;
    `;
    const FooterContent = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    `;

    return (
        <Footer>
            <FooterContent>
                <p>MKS sistema © Todos os direitos reservados</p>
            </FooterContent>
        </Footer>
    )
}

export default Footer;