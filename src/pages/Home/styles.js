import styled from 'styled-components';
import Input from '../../components/Form/Input';
import { device } from '../../styles/device';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  pointer-events: 'all';
  padding: 20px;
  height: fit-content;
`;

export const Body = styled.div`
  max-height: 550px;
  min-height: 550px;
  padding: 6px;
  overflow: auto;

  @media ${device.maxXXL} {
    max-height: 300px;
    min-height: 300px;
  }

  @media ${device.maxMD} {
    max-height: 269px;
    min-height: 269px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.boxShadow};
  }
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Question = styled(Input)`
  border: none;
  border-bottom: 2px solid ${colors.default};
  font-size: 25px;
  padding: 5px 0;
  color: ${colors.default};
`;

export const Option = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.default};
  position: relative;
  width: 100%;
  z-index: 300;
  padding: 3px 9px;

  :hover {
    padding: 3px 9px;
    box-shadow: 0px 0px 6px #0000001c;
  }

  :focus {
    padding: 3px 9px;
    box-shadow: 0px 0px 6px #0000001c;
  }

  input {
    border: none;
    color: ${colors.default};
    margin-right: 10px;
    font-size: 15px;
    width: 100%;
    max-width: 100%;
    border-bottom: 2px solid transparent;

    :focus {
      border-bottom: 2px solid ${colors.primary};
    }
  }
`;

export const Checked = styled.div`
  margin-right: 10px;
  color: ${colors.secondary};
  font-size: 20px;
`;

export const Remove = styled.button`
  /* background: ${colors.default}; */
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  color: ${colors.default};
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;

  :hover:not(:disabled) {
    width: 20px;
    height: 20px;
    padding: 5px;
    color: ${colors.white};
    background: ${colors.danger};
  }
  &:disabled {
    cursor: progress !important;
  }
`;

export const Button = styled.button`
  background: ${colors.secondary};
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  color: ${colors.white};
`;

export const WrapperAddOption = styled.li`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.default};
  position: relative;
  width: 100%;
  z-index: 300;
  padding: 3px 9px;

  cursor: pointer;
`;

export const CreateNewOption = styled.span`
  text-decoration-line: underline;
  color: ${colors.default};
  font-size: 15px;
`;

export const ButtonSpinImport = styled.button`
  border: 1px solid #333;
  width: 50%;

  @media ${device.maxSM} {
    height: 40px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  > button {
    max-width: 70%;
  }

  @media ${device.sm} {
    > button {
      max-width: 50%;
    }
  }
`;
