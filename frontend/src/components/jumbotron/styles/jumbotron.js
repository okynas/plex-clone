import styled, { css } from "styled-components/macro"

export const Container = styled.div`
  display: block;
  padding: 80px 180px 50px;
  text-align: center;
  font-family: plexeina-regular,Helvetica,sans-serif;

  background: #F9F9F9;

  @media screen and (max-width: 1440px) {
    padding: 60px 80px;
  }
`;

export const Items = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin-bottom: 30px;
  width: 33.33333%;
`;

export const Title = styled.h2`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-size: 2.5em;
`;

export const Subtitle = styled.h3`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-size: 1.17em;
  color: #282a2d;
`;

export const Text = styled.p`
  font-family: plexeina-bold,Helvetica,sans-serif;
  font-size: 0.9em;
  color: #3f4245;
`;

export const Image = styled.img`
  max-width: 150px;
  padding-bottom: 5px;
`;

export const Link = styled.a`
  color: #e5a00d;
  text-decoration: none;
  margin: 0 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.dir && css`
    flex-direction: ${props.dir};
  `}
  


`;