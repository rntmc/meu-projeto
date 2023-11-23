import styled from 'styled-components';
import{Link} from 'react-router-dom'


export const Container = styled(Link)`
  background: none;
  color: ${({theme})=> theme.COLORS.PINK};

  border: none;
  font-size: 16px;

  display: flex;
  flex-direction:row;
  align-items:center;
  align-self:initial;

  gap:5px;
  margin-bottom: 24px;

`;