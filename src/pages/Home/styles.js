import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 125px auto;
  grid-template-areas:
  "header"
  "top"
  "down";


  > div {
    grid-area: top;
    padding: 0 124px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;


    > h1 {
      font-weight: 400;
    }
  }
`;

  export const Content = styled.main`
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.PINK};
    }

    
`;