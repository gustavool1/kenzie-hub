import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import ButtonPrimary from '../../Components/ButtonPrimary'
import ButtonSecondary from '../../Components/ButtonSecondary/index.jsx'
import Logo from '../../Components/Logo'
import { Container, Form } from './style'
import './style.js'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { settingTokenThunk } from '../../store/modules/thunk'
const Login = () =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const schema = yup.object().shape({
        email:yup.string().required("Email obrigatório").email("Insira um email válido"),
        password:yup.string().required("Senha obrigatória")
    })
    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) =>{
        dispatch(settingTokenThunk(data))
    }
    const { token } = useSelector(store=>store)
    useEffect(()=>{
       
        if(token!== "null")  console.log(token)
    },[token])
    return(
        <Container>
            <Logo/>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField
                    error={!!errors.email}
                    label="Email"
                    sx={{width:"95%", marginBottom:2  }}
                    {...register("email")}
                    helperText={errors.email?.message}
                    variant="outlined"

                />
                <TextField
                    error={!!errors.password}
                    label="Senha"
                    sx={{width:"95%", marginBottom:2, color:"red"}}
                    type="password"
                    {...register("password")}
                    helperText={errors.password?.message}


                />
                <ButtonPrimary>Logar</ButtonPrimary>
                <p>Crie uma Página para mostrar suas habilidades, metas e progresso</p>
                <ButtonSecondary onClick={()=> history.push("/register")}>Cadastrar</ButtonSecondary>
            </Form>
            
        </Container>
    )
}

export default Login