import React, { useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
            {JSON.stringify(auth.createUser)}
            <button onClick={() => {
                auth.createUser.createUser('msndoikky@hotmail.com', 'abc123')
            }}>Botão</button>
        </>
    )
}

export default CreateUser