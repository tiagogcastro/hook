import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		outline: 0;
		appearance: none;
		box-sizing: border-box; 
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root{
		--selection: #fff;
		--primary: #2c2e3e;
		--secondary: #474a5f;
		--text : #fff; 
		--text-secondary: #8d99ae; 
		--rgba-0: #2f9d;
	}

	*::-webkit-scrollbar{
		width: 10px;
		height: 5px;
  }
	*::-webkit-scrollbar-thumb{
		border-radius: 50rem;
		background-color: var(--rgba-0);
	}
	* {
		scrollbar-color:var(--rgba-0) transparent;
		@media (max-width: 768px) {
			scrollbar-width: thin;
		}
	}
	html, body, #root{
		height: 100%;
		min-width: 260px;
		min-height: 100vh;
	}
	::selection{
		background-color: var(--rgba-0);
		color: var(--selection);
	}

	#app{
		width: 100%;
		height: 100vh;
		position: fixed;
		overflow: hidden;
		background-color: var(--primary); 
		color: var(--text); 
	}

	body {
		width: 100%;
		height: 100vh;
	}
`
