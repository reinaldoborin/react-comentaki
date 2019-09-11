import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({ email: '', pwd: '' })
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if (auth.user !== null) {
        return null
    }

    return (
        <>
            <h3 className="ui dividing header">Criar conta</h3>

            {
                auth.createUser.createUserState.error !== '' &&
                <div className="ui warning message">
                    <i className="close icon"></i>
                    <div className="header">
                        Erro  </div>
                    {auth.createUser.createUserState.error}
                </div>
            }

            <div class="ui form">
                <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                        <div className="field">
                            <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} />
                        </div>
                        <div className="field">
                            <input type='password' placeholder='Sua senha' value={form.pwd} onChange={onChange('pwd')} />
                        </div>
                    </div>
                    <button className="ui positive basic button" onClick={() => {
                        auth.createUser.createUser(form.email, form.pwd)
                    }}>Registrar
        </button>
                    <br />        <br />


                </div>
            </div>

        </>
    )
}

export default CreateUser