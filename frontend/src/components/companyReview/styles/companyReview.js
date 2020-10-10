import styled from "styled-components/macro"

export const Container = styled.div`
  display: block;
  text-align: center;
  font-family: plexeina-regular,Helvetica,sans-serif;
  // width: 100vw;
`;

export const Section = styled.div`
  background-color: #F9F9F9;
  padding: 20px 180px 50px;
  @media screen and (max-width: 1440px) {
    padding: 30px 80px 60px;
  }
`;

export const PremiumReview = styled.div`
  width: 100%;
  position: relative;
  // height: 100px;
  background-color: #E5A00D;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  padding: 3rem 0;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: flex-start;
    // padding: 50px;
  }
`;

export const SectionLogo = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-family: 'plexeina-bold', Helvetica, sans-serif;
  color: #575B61;
  padding: 2rem 2rem 5rem 2rem;
  font-size: 1.5rem;
  width: 70%;
  margin: 0 auto 1.5rem auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Column = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1030px) {
    width: 80%;
    margin: 20px auto;
    padding: 50px;
  }

  &:not(:nth-of-type(4)) {
    @media screen and (max-width: 1030px) {
      background-color: #E8AA26;
    }
  }
  
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;
export const Subtitle = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  color: rgba(255,255,255,.7);
  margin: 0.5rem 0;
`;
export const Rating = styled.p`
  margin: 0.5rem 0;
`;

export const NumRating = styled.p`
  font-weight: 700;
  font-style: normal;
  font-smoothing: antialiased;
  padding-right: 10px;
  line-height: 1;
  font-size: 4rem;
  margin: 0.5rem 0;
`;
export const Ticket = styled.div`
  font-size: 5rem;

`;
export const PremiumText = styled.h4`
  font-size: 1.6em;
  letter-spacing: -.5px;
  width: 300px;
  margin: 0.2rem 0 1rem 0;
`;
export const Button = styled.button`
  color: #e5a00d;
  background: #fff;
  margin-top: 30px;
  border-radius: 1000px;
  padding: 15px 36px 17px;
  display: inline-block;
  font-smoothing: antialiased;
  outline: 0;
  border: 0;
  opacity: 1;
  line-height: 1;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  transition: all .3s ease;
  cursor: pointer;
  width: 200px;
`;