import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   height: 100%;
   margin: 0 auto;
   max-width: 1280px;
   align-items: center;
   justify-content: space-between;
   display: flex;
`
export const Container = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   z-index: 20;
   height: 54px;
   width: 100%;
   background-color: var(--secondary);
`
export const Navbar = styled.div`
   padding: 5px 20px;
   background-color: rgba(0, 0, 0, 0.2);
   border-radius: 10px;
`
export const NavbarTab = styled.div`
   display: flex;
   list-style: none;
`
export const NavbarTabEl = styled.div`
   font-weight: bold;
   & > a {
      text-decoration: none;
      color: var(--text);
   }
   &.active {
      border-bottom: 2px solid white;
   }
`
const style = css`
   width: 30px;
   height: 30px;
`
export const Align = styled.div`
   display: flex;
   margin: 0 20px;
   padding-bottom: 2px;
   align-items: center;
`
