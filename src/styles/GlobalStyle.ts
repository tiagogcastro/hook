import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		appearance: none;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	html, body, #root{
		height: 100%;
		min-width: 260px;
		min-height: 100vh;
		position: fixed;
		overflow: hidden;
	}

	body {
		width: 100%;
		height: 100vh;
	}
`;
