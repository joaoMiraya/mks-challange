import { styled } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Products from '../utils/Products';
import SideBar from '../bar/SideBar';


const queryClient = new QueryClient()

function Home() {



    const Container = styled.main`
    display: flex;
    `;
    const MainContent = styled.div`
    display: flex;
    padding: 1rem 12rem;
    `;

    return (

        <Container>
            <MainContent>
                <QueryClientProvider client={queryClient}>
                    <SideBar />
                    <Products />

                </QueryClientProvider>

            </MainContent>
        </Container>
    );

}

export default Home;