import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './home.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { getRandomImageURLByTopic } from '../apis/unsplash';

    const MainSection = styled.main`
        background-image: ${(props) => `url(${props.backgroundImgUrl})`};
    `

    const Home = () => {

        let isResgister = false;

        const [url, setUrl] = useState("");
        const [isRegistered, setRegistered] = useState(isResgister);
        useEffect(() => {
            const getImgUrl = async () => {
                const imgUrl = await getRandomImageURLByTopic();
                // console.log(imgUrl);
                setUrl(imgUrl);
            }
            getImgUrl();
    }, []);

        const setRegister = () => {
            
            console.log(isRegistered);
            setRegistered(!isResgister);
            console.log("From Home");
            console.log(isRegistered);
            return isRegistered;
        }
    
    return(
        <MainSection backgroundImgUrl={url} id='main'>
            <Header  />
            <Main setRegister={setRegister} />
            <Footer  />
        </MainSection>
    );
};

export default Home;