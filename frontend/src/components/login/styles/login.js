import styled, {css} from "styled-components/macro"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #292A2D;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin: 2rem;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  // width: 50%;
  height: 70%;
  border-radius: 7.5px;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "plexina-bold";
  margin: 2rem;
`;

export const SubTitle = styled.h4`
  margin 0 0 0.4rem 0;
  color: #586063;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 50vw;
  position: relative;
  margin: 0 5rem;
`;

export const Button = styled.a`
  text-decoration: none;
  margin: 0.5rem;
  padding: 10px 3rem;
  width: 400px;
  border-radius: 2px;
  color: #fff;
  font-family: "plexina-bold";
  text-align: center;
  ${props => props.color && css`
      background-color: ${props.color};
  `}

  &:hover {
    opacity: 0.85;
  }

  svg {
    margin: 0 10px;
  }
`;

export const Submit = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem;
  padding: 10px 3rem;
  width: 400px;
  border-radius: 2px;
  color: #fff;
  font-family: "plexina-bold";
  text-align: center;
  ${props => props.color && css`
      background-color: ${props.color};
  `}

  &:hover {
    opacity: 0.85;
  }

`;

export const Splitter = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 7.5px;
    left: 20%;
    width: 150px;
    height: 1px;
    background-color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    top: 7.5px;
    right: 20%;
    width: 150px;
    height: 1px;
    background-color: #000;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #000;
  background-color: #E7F0FE;
  font-family: "plexina";
  &:focus {
    outline: none;
  }
`;

export const InputBox = styled.div`
  width: 70%;
  margin: 0.7rem 0;
`;