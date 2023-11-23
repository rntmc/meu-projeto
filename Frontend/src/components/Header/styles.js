import styled from 'styled-components'
import{Link} from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;
  
  height: 116px;
  width: 100%;


  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

  display:flex;
  justify-content: space-between;

  padding: 0 124px;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items:center;

  > img {
    width:64px;
    height:64px;
    border-radius:50%
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height:24px;
    margin-right: 12px;

    a {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      text-align: right;
    }

    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    };
  }
`;

export const Brand = styled.div`
  display: flex;
  text-align: center;
  align-items: center;

  color: ${({theme})=> theme.COLORS.PINK};
`;

export const Input = styled.input`
  display:flex;
  align-items: center;
  justify-content:center;

  height: 56px;
  width: 720px;

  margin: 30px 64px;

  border-width: 1px;
  border-style: solid;
  border:none;
  border-radius: 10px;

  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  color: ${({theme})=> theme.COLORS.WHITE};

  padding: 20px 24px;
`;

export const LogoutLink = styled(Link)`
  font-size: 14px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  text-align: right;
  cursor: pointer;
`
