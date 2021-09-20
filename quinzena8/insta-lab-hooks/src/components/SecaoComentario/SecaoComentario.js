import React, {useState} from 'react'
import styled from "styled-components"
import {FcPlus} from 'react-icons/fc'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

	button{
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border:none;
		cursor:pointer;
	}
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
	const [inputValor, setInputValor] = useState("");


	const onChangeComentario = (event) => {
		setInputValor(event.target.value, inputValor)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValor}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(inputValor)}}><FcPlus size={20}/></button>
		</CommentContainer>
	)
}


export default SecaoComentario