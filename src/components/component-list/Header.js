import styled from 'styled-components';
import './header.css';
import { useState, useEffect, useCallback } from 'react';
import { commonState } from '../utils/common';
import { getWeatherInfo } from '../apis/openweather';
import Modal from '../utils/Modal';
// import { useMemo } from 'react';

const WeatherIcon = styled.div`
        background-image: ${(props) => `url(${props.backgroundImgUrl})`};
    `

const Header = () => {

    const [weatherInfo, setWeatherInfo] = useState({});
    
    const getWeather = useCallback( async () => {
        const weather = await getWeatherInfo();
        setWeatherInfo(weather);
    }, []);

    useEffect(() => {

    }, [getWeather]);

    const [isDisplay, setHeaderDisplay] = useState(false);
    const [isModalDisplay, setModalDisplay] = useState(false);
    const [isRightModalDisplay, setRightModalDisplay] = useState(false);

    const setDisplayHeader = () => {
        setHeaderDisplay(true);
    }
    if(commonState.userPw !== ""){
        setDisplayHeader();
    }
    // getWeatherInfo();
    // console.log(getWeatherInfo());
    return(
        
        <div className="header">
            <div id="logo" href="/">
            </div>
                    <div className="header-menu">
                        <div className="left-side-menu" onMouseOver={() => setModalDisplay(true)}
                            onMouseOut={() => setModalDisplay(false)}>
                            <button className="link-button" >Links</button>
                            <div className="search-menu">
                                <div className="search-icon">🔍</div>
                                <input className="search-bar" type="text" name="search-bar" id="search-bar"/>
                            </div>
                            {isModalDisplay ? (
                                <Modal width="25vw" vw="2vw" vh="21vh">
                                    ㅇㅇ
                                </Modal>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="right-side-menu" onMouseOver={() => setRightModalDisplay(true)}
                            onMouseOut={() => setRightModalDisplay(false)}>
                            <div className="weather">
                                <div className="project"></div>
                                <WeatherIcon className="weather-icon" backgroundImgUrl={weatherInfo.backgroundImage} />
                                <div className="weather-text-info">
                                    <div className="weather-temp">  {weatherInfo.temp} °C
                                    </div>
                                    <div className="weather-city">
                                        {weatherInfo.city}
                                    </div>
                                </div>
                            </div>
                            {isRightModalDisplay ? (
                                <Modal width="25vw" value="dd" vw="55vw" vh="21vh">
                                    ㅇㅇ
                                </Modal>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
        </div>
    );
};

export default Header;