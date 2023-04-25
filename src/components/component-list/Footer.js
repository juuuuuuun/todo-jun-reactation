import styled from 'styled-components';
import './footer.css';
import React, {useState} from 'react';
import Modal from '../utils/Modal';

const Footer = ({setRegister}) => {
    const [isBottomModalDisplay, setBottomModalDisplay] = useState(false);

    return(
        <div className="footer">
            <div className="footer-options">
                <div className="background-img-info"></div>
                <div className="todo" onMouseOver={() => setBottomModalDisplay(true)}
                            onMouseOut={() => setBottomModalDisplay(false)}>Todo</div>
                {isBottomModalDisplay ? (
                                <Modal width="25vw" value="dd" vw="70vw" vh="85vh"> 
                                    ㅇ
                                </Modal>
                            ) : (
                                <></>
                            )}
            </div>
        </div>
    );
};

export default Footer;