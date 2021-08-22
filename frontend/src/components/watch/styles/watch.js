import styled, { css } from "styled-components/macro"

export const Container = styled.div`
 cursor: pointer;
 position: relative;
`;

export const Video = styled.video`
  width: 100%;
  position: fixed;
  object-fit: fill;
  bottom: 0;
`;

export const BackButton = styled.a`
position: absolute;
width: 50px;
height: 50px;
z-index: 3 !important;
top: 20px;
left: 20px;
color: #fff;
svg {
  z-index: 3 !important;
  width: 20px;
  height: 20px;
  &:hover {
    opacity: 0.7;
  }
}

`;