import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: ${({ gap }) => gap || '0'};
  justify-content: ${({ jc }) => jc || 'center'};
  align-items: ${({ ai }) => ai || 'center'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  background-color: ${({ theme }) => theme.button.backgroundColor};
`;

export default ButtonStyled;
