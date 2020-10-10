import styled, { css } from "styled-components/macro"

export const Container = styled.div`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-weight: lighter;
  
  padding: 80px 180px 50px;

  @media screen and (max-width: 1440px) {
    padding: 60px 80px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 2.5em;
  color: #282a2d;
`;
export const BlogBox = styled.a`
  position: relative;
  text-decoration: none;
  width: 350px;
  height: 350px;
  border-radius: 2px;
  ${props => props.background && css`
    background-image: url(${props.background});
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
  `}
  
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.div`
  position: absolute;
  color: rgba(255,255,255,.7);
  z-index: 2;
  left: 50px;
  bottom: 110px;
`;

export const Subtitle = styled.h3`
  position: absolute;
  color: #fff;
  z-index: 2;
  bottom: 40px;
  font-size: 1.7rem;
  font-weight: 700;
  left: 50px;
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(40,42,45,.7);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const Button = styled.button`
  position: absolute;
  z-index: 2;
  display: none;
`;