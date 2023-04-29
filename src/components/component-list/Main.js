import styled from 'styled-components';
import './main.css';
import {commonState, displayTime} from '../utils/common';
import React, {useEffect, useRef, useState} from 'react';
import Header from './Header';

let userInfo = {
    userName: "",
    userEmail: "",
    userPw: ""
};

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Main = ({setRegister}) => {
    // const [userInfo, setUserInfo] = useState("");
    const [isRegistered, setRegistered] = useState(false);
    const [isDisplay, setDisplay] = useState(true);
    const [isEmailDisplay, setEmailDisplay] = useState(false);
    const [isPwDisplay, setPwDisplay] = useState(false);
    const [isBtnDisplay, setBtnDisplay] = useState(false);
    const [userValue, setUserValue] = useState("");
    const [askSection, setAskSection] = useState("Hello, what's your name?");
    const [currentType, setCurrentType] = useState("name");
    const [time, setTime] = useState("");

    const timeElement = useRef();



    useEffect(() => {
        //왜 이런식으로 해야하는지 아래 주석으로는 실행이 안되네요.
        // const id = setInterval(() => {
        //     console.log("Interval");
        //     setTime(displayTime());
        // },1000);
        // // setInterval(()  => setTime(displayTime()), 1000);
        // return (() => {
        //     console.log("Clear: ", id);
        //     clearInterval(id);
        // })
        console.log("Effect");
        if(timeElement.current){
        const id = setInterval(() => {
            console.log("Interval", timeElement);
            
                timeElement.current.innerHTML = displayTime();
        },1000);
        // setInterval(()  => setTime(displayTime()), 1000);
        return (() => {
            console.log("Clear: ", id);
            clearInterval(id);
        })
        }
    }, [isRegistered]);
    
    const onClickHandler = (e) => {
        e.preventDefault();

        setUserValue("");
        console.log(e);
        if(currentType === 'name'){
            userInfo.userName = userValue;
            if(userInfo.userName !== ""){
                setAskSection(`What's your email, ${userInfo.userName}`);
                setCurrentType('email');
                setDisplay(!isDisplay);
                setEmailDisplay(!isEmailDisplay);
            }else{
                setAskSection('Please type your name');
            }
        }else if(currentType === 'email'){
            if(userValue.match(validRegex)){
                setAskSection('Please type your password');
                userInfo.userEmail = userValue;
                setCurrentType('pw');
                setEmailDisplay(!isEmailDisplay);
                setPwDisplay(!isPwDisplay);
            }else {
                setAskSection('Please type your email');
            }
        }else if(currentType === 'pw'){
            userInfo.userPw = userValue;
            setRegistered(true);
            // let trueOrfalse = false;
            // trueOrfalse = setRegister();
            // setRegistered(trueOrfalse);
            commonState.userName = userInfo.userName;
            commonState.userEmail = userInfo.userEmail;
            commonState.userPw = userInfo.userPw;
            
        }
        console.log(userInfo);
    };

    const clickedBack = () => {
        if(currentType === "email"){
            setAskSection("Hello, what's your name?");
            setCurrentType('name');
            setDisplay(!isDisplay);
            setEmailDisplay(!isEmailDisplay);
            setBtnDisplay(false);
            setUserValue("");
        }else if(currentType === "pw"){
            setAskSection(`What's your email, ${userInfo.userName}`);
            setCurrentType('email');
            setEmailDisplay(!isEmailDisplay);
            setPwDisplay(!isPwDisplay);
            setUserValue("");
        }
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        if(e.target.value !== ""){
            setBtnDisplay(true);
        }else{
            setBtnDisplay(false);
        }
        setUserValue(e.target.value);
    };
    console.log("Registered?: ", isRegistered);
    return(
        <div className="main">
            {isRegistered ? (
                <>
                    {/* <div className="time">{time}</div> */}
                    <div className="time" ref={timeElement}></div>
                </>
            ) : (
                <>
                        {/* {setRegister()} */}
                    <div className="ask-name">
                        {askSection}
                    </div>
                    <form onSubmit={onClickHandler} className="type-your-name-form" action="#" >
                        {isDisplay ? (
                                <>
                                    <input onChange={onChangeHandler} className="input-your-name" type="text" name="user-name" id="user-name" value={userValue} />
                                    {isBtnDisplay ? (
                                        <button className="continue-btn" type="submit" onClick={onClickHandler}> Continue </button>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            ) : (
                                <>
                                </>
                            )
                        }
                        {isEmailDisplay ? (
                            <>
                                <input onChange={onChangeHandler} className="input-your-email input-your-name" type="email" name="user-email" id="user-email" value={userValue} />
                                <button className="button-novisible continue-btn" type="submit" onClick={onClickHandler}></button>
                                <button className="continue-btn" type="button" onClick={clickedBack}>{'<  '}Name</button>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        {isPwDisplay ? (
                                <>
                                    <input onChange={onChangeHandler} className="input-your-name input-your-pw" type="password" name="user-pw" id="user-pw" />
                                    <button className="button-novisible continue-btn" type="submit" onClick={onClickHandler}></button>
                                    <button className="continue-btn" type="button" onClick={clickedBack}>{'<  '}Email</button>
                                </>
                            ) : (
                                <></>
                            )
                        }
                        
                    </form>
                </>
            )}
        </div>
    );
};

export default Main;