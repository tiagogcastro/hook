import React, { useState, useEffect, useMemo, useRef } from 'react'
import {
   Container,
   ContainerFixed,
   WrapperInput,
   SearchIcon,
   Input,
   Label,
   Users,
   UserTo,
   User,
   UserAvatar,
   Username,
   UsersOn,
   UsersOnWrapper,
   UsersOnBar,
   UserShow,
} from './styles'
interface IUser {
   login: string
}
const SideBar: React.FC = (): JSX.Element => {
   const [users, setUsers] = useState<IUser[]>([])
   const showRef = useRef<HTMLDivElement>(null)
   async function getContent() {
      const response = await fetch('https://api.github.com/users')
      const data = await response.json()

      setUsers(data)
   }
   const names = useMemo(() => users?.map((user) => user.login).join(', '), [
      users,
   ])
   useEffect(() => {
      getContent()
   }, [])
   function userOnClick() {
      showRef.current?.classList.toggle('active')
   }

   return (
      <Container>
         <ContainerFixed>
            <WrapperInput>
               <SearchIcon />
               <form action="">
                  <Input type="text" id="inSearch" required />
                  <Label htmlFor="inSearch">Pesquise</Label>
               </form>
            </WrapperInput>
            <Users>
               <h2>Recomendados</h2>
               <UserTo>
                  <User>
                     <UserAvatar />
                     <Username>Marcos</Username>
                  </User>
                  <User>
                     <UserAvatar />
                     <Username>Pedro</Username>
                  </User>
                  <User>
                     <UserAvatar />
                     <Username>Silvão</Username>
                  </User>
               </UserTo>
            </Users>

            <UsersOn>
               <UsersOnWrapper>
                  <UsersOnBar onClick={userOnClick}>
                     <span>Usuários</span>
                     <span></span>
                  </UsersOnBar>
                  <UserShow ref={showRef}>{names}</UserShow>
               </UsersOnWrapper>
            </UsersOn>
         </ContainerFixed>
      </Container>
   )
}

export default SideBar
