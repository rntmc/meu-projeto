import styled from "styled-components";

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

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.PINK};
    }
  }

`;

export const Form = styled.form`
  max-width: 1140px;
  margin: 40px 124px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;

    > h1 {
      margin-bottom: 40px;
    }   
  }

  > div {
    display: flex;
    flex-direction: row;
    gap:40px;
    margin-bottom: 40px;
  }

  > h3 {
    font-size: 20px;
    font-weight:400;
    margin-top: 40px;
    margin-bottom: 24px;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }

  > section {
    background-color: ${({theme})=> theme.COLORS.DARK};;
    border-radius: 8px;
    height: 88px;

    .tags {
    display: flex;
    flex-wrap: wrap;
    }
  }

  > footer {
    display: flex;
    flex-direction: row;
    gap:40px;

    > Button:first-child{
      background-color:${({theme})=> theme.COLORS.DARK};
      color: ${({theme})=> theme.COLORS.PINK};
    }
  }
`;