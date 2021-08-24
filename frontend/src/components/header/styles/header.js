import styled, {css} from "styled-components/macro"

export const Container = styled.div`
  font-family: "plexina-bold";
  background-image: url("https://www.plex.tv/wp-content/uploads/2020/07/hero-live-tv-homepage-1024x576.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 95%;
  margin: 0 auto;
  height: 750px;
  position: relative;

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

  @media screen and (max-width: 1800px) {
    width: 100%;
  }

  @media screen and (max-width: 1150px) {
    height: 1600px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: relative;
  height: 100%;
  display: block;
`;
export const NavBar = styled.div`
  z-index: 2;
  color: #fff;
  // width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // margin: 1rem;
`;

export const NavBarLeft = styled.div`
  margin-left: 10rem;

  @media screen and (max-width: 1300px) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 1150px) {
    // display: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;
export const NavBarIcon = styled.img`
  width: 100px;
  height: 100px;
`;
export const NavBarMiddle = styled.div`
  display: flex;
  flex-direction: row;  

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
export const Dropdown = styled.div`
  margin: 0 1rem;
`;

export const DropdownTitle = styled.h3`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  &:hover {
    color: #e5a00d;
    cursor: pointer;
  }
`;

export const DropdownContainer = styled.div`
  // display: none;
  position: relative;
  width: 200px;
  // height: 300px;
  background: rgba(33,34,37,1);
  // display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: absolute;
  padding: 1.2rem;

  &:before {
    background: rgba(33,34,37,1);
    z-index: 3;
    content: "";
    top: -25px;
    left: 30px;
    position: absolute;
    width: 30px;
    height: 30px;
    // clip-path: polygon(0 10%, 38% 10%, 50% 0, 62% 10%, 100% 10%, 100% 100%, 0 100%);
    // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 50%, 0 100%, 100% 100%);
  }
`;

export const DropdownLink = styled.a`
  // display: none;
  color: #fff;
  text-decoration: none;
  text-align: center;
  width: 100%;
  // padding: .5rem;

  &:hover {
    color: #e5a00d;
    cursor: pointer;
  }
`;
export const NavBarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
export const RightTitle = styled.a`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #e5a00d;
    cursor: pointer;
  }
`;

export const RightButton = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 2rem;
  border-radius: 1000px;
  padding: 15px 36px 17px;
  color: #fff;
  display: inline-block;
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

  &:hover {
    opacity: 0.9;
  }
`;

export const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroText = styled.h2`
  color: #fff;
  font-size: 3.5rem;
  // margin: 3rem 0 1.5rem 0;
  // width: 800px;
  text-align: center;
`;
export const HeroButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  border-radius: 1000px;
  padding: 15px 36px 17px;
  color: #fff;
  display: inline-block;
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
  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 1150px) {
   margin-bottom: 3rem;
  }
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2rem 0 0 0;
  height: auto;

  @media screen and (max-width: 1150px) {
   flex-direction: column;
   position: relative;
  }
`;
export const BottomBox = styled.div`
  width: 25%;
  background: rgba(40,42,45,.7);
  padding: 1.2rem;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: #fff;
    cursor: pointer;
  }

  &:hover > p, &:hover > h2  {
    color: #282a2d;
  }

  @media screen and (max-width: 1150px) {
   width: auto;
   margin: 5px 1.5rem;

   &:hover {
    transform: scale(1.0);
    background: #282a2d;
    color: #000 !important;
  }

  &:hover > p, &:hover > h2  {
    color: #fff;
  }

  }
`;
export const BottomBoxButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #e5a00d;
  border: 2px solid #e5a00d;
  border-radius: 1000px;
  // border-color:  #e5a00d;
  padding: 15px 36px 17px;
  // color: #fff;
  display: inline-block;
  font-smoothing: antialiased;
  background: transparent;
  outline: 0;
  // border: 0;
  opacity: 1;
  line-height: 1;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }

`;
export const BottomBoxIcon = styled.div`
  color: #e5a00d;
  font-size: 2rem;
`;
export const BottomBoxTitle = styled.h2`
  color: #fff;`;
export const BottomBoxText = styled.p`
  color: rgba(255,255,255,.7);
  font-family: "Plexina";
  line-height: 1.5rem;
  width: 95%;
`;

export const Menu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  left: 40px;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 1150px) {
    display: block;
  }
`;