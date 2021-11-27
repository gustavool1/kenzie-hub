import { Container, Form, InfoContainer } from "./style"
import { IoCloseOutline } from "react-icons/io5";
import { TextField } from '@mui/material'
import ButtonPrimary from '../ButtonPrimary'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { creatingJobThunk } from "../../store/modules/jobsRequisitions/thunks";

const FormCreatingJob = ({handleModalJob}) => {
    const dispatch = useDispatch()
    const schema = yup.object().shape({
        title:yup.string().required("Nome do trabalho obrigatório"),
        description:yup.string().required("Nome do trabalho obrigatório")
    }) 
    const { register,handleSubmit, formState:{ errors } } = useForm({
        resolver:yupResolver(schema)
    })

    const onSubmitFunction = (data) =>{
        const toApi = {...data, deploy_url:"https://kenziehub.me" }
        dispatch(creatingJobThunk(toApi))
    }
    return(
        <Container>
            <InfoContainer>
                <h4>Cadastrar Trabalho</h4>
                <button onClick={handleModalJob}>
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
                    sx={{width:"100%", marginBottom:2}}
                    placeholder='Escreva sua bio'
                    multiline rows={3}
                    error={!!errors.description}
                    {...register("description")}
                    helperText={errors.description?.message}
                />
                <ButtonPrimary isModal>Cadastrar</ButtonPrimary>
            </Form>
        </Container>
    )
}

export default FormCreatingJob