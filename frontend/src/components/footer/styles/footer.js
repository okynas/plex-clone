import styled, {css} from "styled-components/macro"

export const Container = styled.div`
  width: 100%;
  background-color: #282521;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Plexina", sans-serif;

  @media screen and (max-width: 1030px) {
    margin-top: 2rem;
  }
`;

export const LeftWrapper = styled.div`
  margin: 2rem 2rem 2rem 7rem;
  width: 25%;
  display: flex;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    margin: 2rem 0 0 0;
    align-items: center;
    justify-content: center;
  }
`;
export const RightWrapper = styled.div`
  margin: 5rem;
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,.1);

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 2rem 2rem 2rem 7rem;

  @media screen and (max-width: 1030px) {
    margin: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;
export const Title = styled.h2`
  cursor: pointer;
  font-weight: bold;
  font-family: "Plexina-bold";
  font-size: 1rem;
  color: #fff;
  margin: 0.6rem 0;
  text-decoration: none;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  outline: 0;
  word-wrap: break-word;

  &:hover {
    color: #e5a00d;
  }
`;

export const Link = styled.a`
  // font-family: plexeina-regular,Helvetica,sans-serif;
  text-decoration: none;
  color: rgba(255,255,255,.5);
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  outline: 0;
  word-wrap: break-word;
  font-size: 0.8rem;
  padding-top: 12px;
  margin-left: 5px;
  
  &:hover {
    color: #e5a00d;
  }
`;

export const BottomSection = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftSection = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: row;
`;
export const RightSection = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1030px) {
   margin: 0 0 2rem 0;
  }
`;

export const Text = styled.p`
  color: rgba(255,255,255,.2);
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  outline: 0;
  word-wrap: break-word;
  font-size: 0.8rem;
  padding-top: 12px;
  margin: 0 7px;
`;

export const Icon = styled.a`
  font-size: 2rem;
  color: rgba(255,255,255,.4);
  text-decoration: none;
  margin: 10px;

  ${props => props.hover && css`
  &:hover {
    color: ${props.hover};
  }
  `};
  
`;