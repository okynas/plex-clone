import styled, {css} from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #1F2326;
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;
export const RightSection = styled.div``;

export const Image = styled.img`
  width: 50px;
  height: auto;
  margin: 0.5rem;
`;

export const Icon = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
  &:hover {
    opacity: 0.85;
  }
`;

export const Search = styled.input`
  flex-grow: 1;
  height: 100%;
  outline: 0;
  border: none;
  background: #313437;
  font-size: 13px;
  font-family: Open Sans Semibold,Helvetica Neue,Helvetica,Arial,sans-serif;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  padding: 4px;
  height: 40px;
  border-radius: 4px;
  color: #eee;
  transition: background-color .2s,color .2s;
  width: 350px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #313437;
  border-radius: 4px;
`;