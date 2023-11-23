import styled from 'styled-components';


export const Container = styled.section`
  margin: 16px 124px 24px;
  background-color: ${({theme}) => theme.COLORS.BROWN};
  border-radius: 16px;
  padding: 32px;
  height: 224px;

  > h2 {
    line-height: 32px;
    margin-bottom: 8px;

    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }

  > div {
    color: ${({theme})=> theme.COLORS.PINK};
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  > p {
    color: ${({theme})=> theme.COLORS.GRAY_000};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`;