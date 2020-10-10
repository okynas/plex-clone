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
  text-decoration: none;
  width: 350px;
  height: 350px;
  border-radius: 2px;
  margin: 1rem;
  position: relative;

  ${props => props.background && css`
    background-image: url(${props.background});
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;

    &::before {
      content: "";
      position: absolute;
      background-color: rgba(40,42,45,.7);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
    }
  `}

  @media screen and (max-width: 1030px) {
    width: 100%;
  }
  
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
    // padding: 50px;
  }
`;

export const Date = styled.p`
  color: rgba(255,255,255,.7);
  z-index: 2;
`;

export const Subtitle = styled.h3`
  color: #fff;
  z-index: 2;
  bottom: 40px;
  font-size: 1.7rem;
  font-weight: 700;
  margin: 1rem 0;
`;

export const Overlay = styled.div`
  position: relative;
  // margin: 14rem 3rem 0 3rem; 
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-end;
  // text-align: center;
  width: 80%;
  margin: 4rem auto 0 auto;
  transition: all .6s;
  transition-timing-function: cubic-bezier(1,.8,.5,1);

  &:hover Button {
    // display: block;
    transform: rotate(0deg);
    opacity: 1;
  }

  &:hover {
    margin: 0rem auto 0 auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 2em;
  position: absolute !important;
  left: 0;
  bottom: 50px;
  transform: rotate(-90deg);
  transition: all .6s;
  transition-timing-function: cubic-bezier(1,.8,.5,1);
  opacity: 0;
  border: 2px solid #e5a00d;
  color: #e5a00d;
  border-radius: 100%;
  background: transparent;
  z-index: 3;
`;