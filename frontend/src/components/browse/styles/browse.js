import styled, {css} from "styled-components/macro"

export const Container = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.aside`
  width: 53px;
  background: #1F1E1C;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .active {
    border-left: 5px solid #cc7b19;
  }
`;

export const Link = styled.a`
  position: relative;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;

  &:hover{
    opacity: 0.85;
    background: rgba(255, 255, 255, 0.1);
  }

  &.active:hover {
    width:  45px;
  }
`;

export const Row = styled.div`
  margin: 0 2rem;

  h2 {
    font-size: 0.9rem;
    font-family: "plexina-bold";
    color: hsla(0,0%,100%,.7);

  }
`;

export const Main = styled.main`
font-family: "plexina";
    background-color: #3F4138;
    width: 100%;
    min-height: 91.5vh;
`;

export const Movies = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
`;

export const Overlay = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left:0;
  width: 200px;
  height: 295.156px;
  border: 1px solid #cc7b19;
`;

export const Movie = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 0.9rem;
  font-family: "plexina-bold";
  width: 200px;
  text-decoration: none;
  margin: 10px;

  &:hover ${Overlay} {
    display: flex;
    font-size: 2rem;
`;

export const MovieImg = styled.img`
width: 200px;
  height: auto;
  margin: 0 0 0.5rem 0;
`;