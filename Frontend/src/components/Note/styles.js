import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK};
  border: none;
  border-radius:10px;


  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
    background-color: ${({theme}) => theme.COLORS.PINK};
  }
`;

