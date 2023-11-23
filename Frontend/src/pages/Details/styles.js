import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 40px 0;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.PINK};
    }

  }
`;

export const Content = styled.div`
  max-width: 100%;
  padding: 0 124px;
  margin: 0 auto; 

  display: flex;
  flex-direction: column;

  
  > div {
    margin-top: 40px;
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;