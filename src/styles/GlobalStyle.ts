import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
    border: 0;
		appearance: none;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

	body {
    background-color: ${props => props.theme.colors.primary};
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
