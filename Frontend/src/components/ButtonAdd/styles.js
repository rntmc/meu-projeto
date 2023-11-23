import styled from 'styled-components';
import{Link} from 'react-router-dom'

export const Container = styled(Link)`

  background-color: ${({theme})=> theme.COLORS.PINK};
  color: ${({theme})=> theme.COLORS.BACKGROUND_800};

  border: none;
  padding:14px 32px;
  border-radius: 8px;
  font-size: 16px;

  display: flex;
  flex-direction:row;
  align-items:center;

  gap:5px;
`;