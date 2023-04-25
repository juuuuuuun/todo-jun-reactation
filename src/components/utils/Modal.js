import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: ${(props) => (props.vh)};
    left: ${(props) => (props.vw)};
    right: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BackgroundLayer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
`

const ModalBlock = styled.div`
    position: absolute;
    top: ${(props) => (props.vh)};
    left: ${(props) => (props.vw)};
    border-radius: 5px;
    padding: 1.5rem;
    background-color: #32819F;
    color: white;
    width: ${(props) => (props.width)};
`

export default ModalBlock;
// const modal = (props) => {
//     return (
//         <>
//             {/* <Container>
//                 <BackgroundLayer>
//                     <ModalBlock width={props.width} vh={props.vh} vw={props.vw}>
//                         {props.value}
//                     </ModalBlock>
//                 </BackgroundLayer>
//             </Container> */}
//                     <ModalBlock width={props.width} vh={props.vh} vw={props.vw}>
//                         {props.value}
//                     </ModalBlock>
//         </>
//     )
// }
// export default modal;