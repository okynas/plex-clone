import styled, { css } from "styled-components/macro"

export const Container = styled.div`
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
`;

export const InfoLeft = styled.div`
  margin: 0 1rem;
`;

export const InfoRight = styled.div`
  margin: 0 2rem;
  color: #fff;
`;

export const Image = styled.img`
  width: 300px;
  margin: 0;
`;
export const MovieTitle = styled.h2`

  font-size: 1.4rem !important;

`;
export const SubTitle = styled.h3`
  font-size: .9rem !important;
`;
export const Text = styled.p`
  padding: 0 12px 0 0;
`;
export const Duration = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rating = styled.p`
`;

export const ButtonSection = styled.div`
`;
export const Button = styled.button`
  color: #000;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 5px;
  min-width: 50px;
  min-height: 20px;

  svg {
    width: 10px;
  }

  &:hover {
    opacity: 0.85;
  }

`;
export const Link = styled.a`
  min-height: 35px;
  button {
    background-color: hsla(41, 100%, 40%, 1);
  }
`;
export const Description = styled.p`
`;
export const DirectedBy = styled.p`
`;
export const Cast = styled.div`
  display: flex;
  flex-direction: column;

  p:first-of-type {
    color: #fff;
    margin: 15px;
    font-weight: 700;
  }
`;
export const SimilarTitles = styled.div`

  p {
    color: #fff;
    font-weight: 700;
    margin: 20px 15px;
  }
`;

export const ExtraVideos = styled.div`
`;

export const CastImage = styled.img`
  margin: auto;
  border-radius: 50%;
  width: 150px;
`;
export const CastName = styled.p`
  text-align: center;
  color: #fff;
  margin: 2px;
  font-weight: 100 !important;
`;
export const CastRole = styled.p`
  text-align: center;
  color: #fff7;
  margin: 2px;
`;
export const Person = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SimilarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CastWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;