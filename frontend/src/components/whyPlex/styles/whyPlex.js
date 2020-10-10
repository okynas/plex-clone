import styled, { css } from "styled-components/macro"

export const Title = styled.h2`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #282a2d;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  line-height: 1.4em;
  font-weight: bold;
  font-size: 2.5rem;
`
export const Text = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 400;
  font-style: normal;
  color: #3f4245;
  opacity: 0.8;
  margin-right: 5rem;
`;

export const Image = styled.img` 
  width: 90%;
  margin-left: 4rem;
`;

export const Section = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.a`
  border-radius: 1000px;
  padding: 15px 36px 17px;
  color: #fff;
  display: inline-block;
  text-decoration: none;
  font-smoothing: antialiased;
  background: #e5a00d;
  outline: 0;
  border: 0;
  opacity: 1;
  line-height: 1;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  cursor: pointer;
`;

export const Container = styled.div`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-weight: lighter;
  
  padding: 80px 180px 50px;

  @media screen and (max-width: 1440px) {
    padding: 60px 80px 0;
  }

`;

export const Wrapper = styled.div`
  ${props => props.width && css`
  width: ${props.width};
  `}
`;

export const IconWrapper = styled.a`
  width: 70%;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  @media screen and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 60px;
  text-align: center;
  color: #b3bac1;
  padding: 0 40px;
  border-right: solid 1px #b3bac1;
`;