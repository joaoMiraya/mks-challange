import styled from "styled-components";


function ProductsPlaceholder() {

    const ProductsCard = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #c1c1c1;
    min-height: 18rem;
    max-width: 13rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 20px #00000020;
    margin-top: 3rem;
   
    `;
    const PlaceholderContainer = styled.div`
    display: flex;
    gap: 2rem;
   height: 100vh;
    `;
    return (
        <>
            <PlaceholderContainer>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
                <ProductsCard></ProductsCard>
            </PlaceholderContainer>

        </>
    )
}

export default ProductsPlaceholder;