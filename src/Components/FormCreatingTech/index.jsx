import { Container, Form, InfoContainer } from "./style"
import { IoCloseOutline } from "react-icons/io5";
import { TextField, MenuItem } from '@mui/material'
import ButtonPrimary from '../ButtonPrimary'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { creatingJobThunk } from "../../store/modules/jobsRequisitions/thunks";
import { useState } from "react";
import { creatingTechsThunk } from "../../store/modules/techsRequistions/thunks";

const FormCreatingTech = ({handleModalTech}) => {
    const dispatch = useDispatch()
    const schema = yup.object().shape({
        title:yup.string().required("Nome do trabalho obrigatório"),
    }) 
    const { register,handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmitFunction = (data) =>{
        const toApi = {...data, status:initialModule }
        dispatch(creatingTechsThunk(toApi))
    }
    const [ initialModule, setInitialModule ] = useState('Iniciante')
    const modules = 
        [
            {
                value:"Iniciante",
                label:'Iniciante'
            },
            {
                value:"Intermediário",
                label:"Intermediário"
            },
            {
                value:"Avançado",
                label:"Avançado"
            }
        ]
    const handleChange = (e) =>{
        setInitialModule(e.target.value)
    }
    return(
        <Container>
            <InfoContainer>
                <h4>Cadastrar Tecnologia</h4>
                <button onClick={handleModalTech}>
                    <IoCloseOutline/>
                </button>
            </InfoContainer>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField
                    label="Nome do trabalho"
                    sx={{width:"100%", marginBottom:2  }}
                    error={!!errors.title}
                    {...register("title")}
                    helperText={errors.title?.message}
                    variant="outlined"
                />
                 <TextField
                    id="outlined-select-currency"
                    select
                    label="Insira seu módulo"
                    value={initialModule}
                    onChange={handleChange}
                    // helperText={errors.course_module?.message}s
                    sx={{ width:"100%", marginBottom:2 }}
                >
                    {modules.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <ButtonPrimary isModal>Cadastrar</ButtonPrimary>
            </Form>
        </Container>
    )
}

export default FormCreatingTech