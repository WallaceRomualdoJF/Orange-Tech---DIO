import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo.svg'
import { IHeader } from './types'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado} : IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" width="90px" />
                {autenticado ? (<>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>) : null}
            </Row>
            <Row>
            {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
            ) : (<>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </>)}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }