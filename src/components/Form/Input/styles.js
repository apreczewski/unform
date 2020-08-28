import styled, { css } from 'styled-components';
// import { device } from '~/styles/device';
import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid ${colors.default};
    /* ${p =>
      p.empty &&
      css`
        border: 2px solid red;
      `} */
    color: ${colors.default};
  }

  span {
    position: absolute;
    bottom: -15px;
    left: 0;

    font-size: 10px;
    color: ${colors.danger};
  }
`;
