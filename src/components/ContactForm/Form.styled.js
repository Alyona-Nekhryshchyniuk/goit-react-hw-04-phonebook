import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;

  & svg {
    width: 15px;
    height: 15px;
    fill: ${props => props.color};
  }
`;
