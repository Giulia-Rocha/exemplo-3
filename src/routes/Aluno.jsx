import {Dados} from '../components/Dados'
const Aluno = ()=>{

    const{nome,email,idade}= Dados

    return(
        <>
        <h1>PÁGINA ALUNO</h1>
        <p>Nome do aluno:{nome} </p>
        <p>E-mail do aluno: {email}</p>
        <p>Idade do aluno:{idade} </p>
        </>
    )
}

export default Aluno