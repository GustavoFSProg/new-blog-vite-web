import styled from "styled-components";
import Drawer from "../drawer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background: black;
  padding-top: 15px;
  padding-bottom: 25px;
  color: #808080;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  /* margin-left: -40px; */
  padding-top: 11px;
  padding-bottom: 11px;

  @media screen and (max-width: 850px) {
    /* width: 100%; */
    /* margin-left: -10px; */
  }
`;

const Span = styled.div`
  display: flex;
  font-size: 14px;
  /* letter-spacing: 10px; */
  justify-content: center;
  align-items: center;
  font-weight: none;

  @media screen and (max-width: 850px) {
    font-size: 13px;
  }
`;

export default function Footer() {
  return (
    <Container>
      <TitleContainer>
        <Span>gustavo.prog40@gmail.com</Span>
        <span
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            marginTop: "6px",
          }}
        >
          04/02/2024
        </span>
      </TitleContainer>
    </Container>
  );
}
