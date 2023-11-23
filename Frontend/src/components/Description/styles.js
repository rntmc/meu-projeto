import styled from 'styled-components';


export const Container = styled.section`

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;

    > span {
      color: ${({theme})=> theme.COLORS.PINK};
    }
  };

  div {
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=> theme.COLORS.WHITE};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    > img {
      height: 16px;
      width: 16px;
      border-radius: 50%;
    }
  }
`;