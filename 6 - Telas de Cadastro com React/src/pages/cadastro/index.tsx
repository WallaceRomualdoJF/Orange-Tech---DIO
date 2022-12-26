import { useNavigate  } from "react-router-dom";
import { MdAddAPhoto, MdEmail, MdLock, MdOutlinePeopleOutline, MdPeople, MdPeopleAlt, MdPeopleOutline, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { IFormData } from './types'

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleCadastro, SubtitleCadastro, SubText, CriarText, Row, Wrapper, CriarText2 } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm<IFormData>({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData : IFormData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                    {errors.nameFull && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.password && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <SubText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubText>
                </Row>
                <Row>
                    <CriarText>Já tenho conta.</CriarText>
                      <CriarText2 onClick={handleClickSignIn}>Fazer login</CriarText2>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }