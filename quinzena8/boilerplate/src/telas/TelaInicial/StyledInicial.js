import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e0e0e0;
  height: 70%;
  width: 22%;

  border-radius: 20px;

  padding: 1%;
  box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
`;

export const Photo = styled.div`
  height: 80%;
  width: 100%;
  background: #e0e0e0;
  border-radius: 20px;

  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 14px 14px 28px #bababa, inset -14px -14px 28px #ffffff;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoUser = styled.div`
  padding: 4%;
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);

  color: white;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  z-index: 2;

  h3{
    font-weight: 800;
    
  }
  p {
    font-size: 0.85rem;
    
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-self: center;

  justify-content: space-between;
  padding: 2% 2%;
  height: 10%;
  width: 90%;
  margin-top: 5%;

  button {
    :nth-child(1) {
      display: flex;
      align-self: center;
      border-radius: 50px 50px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: #32c28d;

      :hover {
        content: 'Blaáá';
        color: #2ca87b;
        font-size: 2.2rem;
        transition: 0.3s;
        transform: translatex(-10px);
        filter: drop-shadow(1px 1px 5px lightgreen);
      }
    }

    :nth-child(2) {
      display: flex;
      align-self: center;
      border-radius: 50px 50px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: #b00012;
      :hover {
        color: #ff001a;
        font-size: 2.2rem;
        transition: 0.3s;
        transform: translatey(-10px);
        filter: drop-shadow(1px 1px 5px red);
      }
    }

    :nth-child(3) {
      display: flex;
      align-self: center;
      border-radius: 50px 50px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: orange;
      :hover {
        color: orangered;
        font-size: 2.2rem;
        transition: 0.3s;
        transform: translatey(-10px);
        filter: drop-shadow(1px 1px 5px orange);
      }
    }

    :nth-child(4) {
      display: flex;
      align-self: center;
      border-radius: 50px 50px;
      background-color: transparent;
      border: none;
      font-size: 30px;
      cursor: pointer;
      color: #19b5fe;
      :hover {
        color: #22a7f0;
        font-size: 2.2rem;
        transition: 0.3s;
        transform: translatex(10px);
        filter: drop-shadow(1px 1px 5px #89c4f4);
      }
    }
  }
`;
