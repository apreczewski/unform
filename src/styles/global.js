import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';
// import 'sweetalert2/src/sweetalert2.scss';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  };

  img{
    max-width: 100%;
  };

  html, body, #root {
    height: 100%;
  };

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
  };

  a {
    &:hover {
      text-decoration: none;
    };

    &[disabled] {
      cursor: not-allowed;
      &:active {
        pointer-events: none;
        box-shadow: none;
      };
    };
  };

  button {
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline:none;
    };
    &[disabled] {
      cursor: not-allowed;
      &:active {
        box-shadow: none;
      };
    };
  };

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  };

  ::placeholder {
    color: ${colors.placeholder};
    font-size: inherit;
  };

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: inherit;
    -webkit-text-fill-color: ${colors.secondary};
    -webkit-box-shadow: 0 0 0px 1000px ${colors.light} inset;
    box-shadow: 0 0 0px 1000px ${colors.light} inset;
    transition: background-color 5000s ease-in-out 0s;
    font-size: inherit;
  };

  /* React Modal  */
  .ReactModal__Body--open {
    overflow: hidden !important; /**don't remove it, it will cause double scroll on modals using lib react-modal */
  };

  /* BootStrap Popover */
  .popover {
    border: 0.3px solid #0000001c;
    box-shadow: 0 0 6px #0000001c;
  };

  .bs-popover-top>.arrow::before {
    border-top-color: #0000001a;
  };

  .bs-popover-right>.arrow::before {
    border-right-color: #0000001a;
  };

  .bs-popover-bottom>.arrow::before {
    border-bottom-color: #0000001a;
  };

  .bs-popover-left>.arrow::before {
    border-left-color: #0000001a;
  };

  /* Sweet Alert2 Styles */
  h2.swal2-title {
    color: ${colors.reverse} !important;
    font-weight: 500 !important;
    word-break: break-word;
  };

  div.swal2-content {
    color: ${colors.reverse} !important;
    /* font-weight: 500 !important; */

    &.pre-wrap {
      white-space: pre-wrap;
    }
  };

  div.swal2-actions {
    margin-bottom: 4%;
    display: flex !important;
    flex-wrap: nowrap ;

    @media (max-width: 400px) {
      flex-wrap: wrap;
    };
  };

  button.swal2-styled.swal2-confirm,
  button.swal2-styled.swal2-cancel {
    border-radius: 26px;
    font-size: 0.875rem;
    font-weight: bold;
    width: 100%;
  }

  button.swal2-styled:focus{
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }

  button.swal2-styled.swal2-confirm {
    background: ${colors.primary} !important;
  }

  button.swal2-styled.swal2-cancel {
    background: ${colors.white} !important;
    border: 1px solid ${colors.secondary} !important;
    color: ${colors.secondary} !important;
  }

`;

export default GlobalStyle;
