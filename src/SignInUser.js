import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
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
        <div>
        <h3 className="ui dividing header">Conectar</h3>

            {
                auth.signInUser.signInUserState.error !== '' &&
                <div className="ui warning message">
                <i className="close icon"></i>
                <div className="header">
                    Erro  </div>
                    <p>{auth.signInUser.signInUserState.error}</p>
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
        <button className="ui primary basic button" onClick={() => {
        auth.signInUser.signInUser(form.email, form.pwd)
        }}>Entrar
        </button>
    </div>
</div>

        </div>
    )
}

export default SignInUser