import { Container, Form } from "./style"
import { TextField, Select, MenuItem } from '@mui/material'

import Logo from '../../Components/Logo'
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonPrimary from "../../Components/ButtonPrimary"
const Register = () =>{
    const schema = yup.object().shape({
        name: yup.string().required("Nome obrigatório").min(4, 'Seu nome precisa ter no minimo 3 letras').matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'Seu nome só pode ter letras'),
        email: yup.string().required("Email obrigatório").required("Email Obrigatório").email(),
        social: yup.string().required("Linkedin obrigatório"),
        bio: yup.string().required("Bio obrigatória"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/, 'Sua senha precisa conter: no mínimo 8 caracteres. 1 letra maiúscula no mínimo. 1 Número. 1 símbolo &@#*$.'),
        confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password')], 'As senhas não são iguais')
    })
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    })
    const [ moduleInitial, setModuleInitial ] = useState("Primeiro módulo (Introdução ao Frontend)")
    const modules = [
        {
            value:"Primeiro módulo (Introdução ao Frontend)",
            label:"Primeiro módulo"
        },
        {
            value:"Segundo módulo (Frontend Avançado)",
            label:"Segundo módulo"
        },
        {
            value:"Terceiro módulo (Introdução ao Backend)",
            label:"Terceiro módulo"
        },
        {
            value:"Quarto módulo (Backend Avançado)",
            label:"Quarto módulo"
        }

    ]
    const handleChange = (e) =>{
        setModuleInitial(e.target.value)
    }
    const onSubmitFunction = (data) =>{
        console.log(data)
    }
    console.log(errors)
    return(
        <Container>
            <Logo/>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <h2>Cadastro</h2>
                <TextField
                    label="Nome"
                    sx={{width:"95%", marginBottom:2  }}
                    variant="outlined"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                 <TextField
                    label="Email"
                    sx={{width:"95%", marginBottom:2  }}
                    variant="outlined"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    label="Senha"
                    sx={{width:"95%", marginBottom:2  }}
                    variant="outlined"
                    type='password'
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <TextField
                    label="Confirmar senha"
                    sx={{width:"95%", marginBottom:2  }}
                    variant="outlined"
                    type='password'
                    {...register("confirmPassword")}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                 <TextField 
                    sx={{m:2,width:"95%"}}
                    placeholder='Escreva sua bio'
                    multiline rows={3}
                    rowsMax={10}
                    {...register("bio")}
                    error={!!errors.bio}
                    helperText={errors.bio?.message}
                />
                 <TextField
                    label="Linkedin"
                    sx={{width:"95%", marginBottom:2  }}
                    variant="outlined"
                    {...register("social")}
                    error={!!errors.social}
                    helperText={errors.social?.message}
                />
                
              <TextField
                id="outlined-select-currency"
                select
                label="Insira seu módulo"
                value={moduleInitial}
                onChange={handleChange}
                // helperText={errors.course_module?.message}s
                sx={{m:2, width:"95%"}}
            >
                {modules.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <ButtonPrimary>Cadastrar</ButtonPrimary>
            </Form>
        </Container>
    )
}

export default Register