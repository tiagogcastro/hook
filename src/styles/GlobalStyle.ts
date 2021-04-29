import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
    border: 0;
		appearance: none;
		box-sizing: border-box;
    font-weight: 500;
		font-family: 'Heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      scrollbar-color:
      ${props => `
      ${props.theme.colors.scrollbar.secondary}
      ${props.theme.colors.scrollbar.primary}
      `}
      ;
	}
  *::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.colors.scrollbar.primary};
  }
  *::-webkit-scrollbar-thumb {
    border-radius: 50rem;
    border-left: 2px solid ${props => props.theme.colors.scrollbar.primary};
    border-right: 2px solid ${props => props.theme.colors.scrollbar.primary};
    background-color: ${props => props.theme.colors.scrollbar.secondary};
  }
	html, body, #root{
		height: 100%;
		min-width: 260px;
		min-height: 100vh;
		position: fixed;
		overflow: hidden;

	}
  input {
    background-color: ${props => props.theme.colors.inputs.primary};
  }
  a, input, button {
    font-weight: bold;
    color: ${props => props.theme.colors.texts.primary};
  }
  a {
    display: block;
    text-decoration: none;
  }
  button {
    background-color: transparent;
    * {
      pointer-events: none;
    }
  }
	body {
    background-color: ${props => props.theme.colors.background.primary};
		width: 100%;
		height: 100vh;
	}
  button {
    background-color: transparent;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }

`;
