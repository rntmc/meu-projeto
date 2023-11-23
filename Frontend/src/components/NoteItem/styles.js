import styled from "styled-components";

export const Container = styled.div`
  display: flex; 
  align-items: center;

  background: ${({theme}) => theme.COLORS.DARK};
  background-color: ${({theme, isNew}) => isNew ? theme.COLORS.DARK : theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.WHITE}` : 'none'};

  margin: 16px 8px 16px 16px;
  border-radius: 10px;
  padding-right: 16px;

  > button {

    border: none;
    background: none
  }

  .button-decoration {
    display: flex;
    justify-content: center;
    
    color: ${({theme})=> theme.COLORS.PINK};
    font-size: 24px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color:${({theme})=>theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color:${({theme})=>theme.COLORS.GRAY_100};
    }
  }
`;