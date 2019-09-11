import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)
    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }
    const save = () => {
        if (newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
        }
    }
    return (
        <div>
            <div class="ui action input">
                <input type="text" value={newDisplayName} onChange={onChange} />
                <button onClick={save} className="ui button">Trocar Apelido</button>
            </div>

        </div>
    )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return null
    }

    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName

    return (
        <>
            <h3 className="ui dividing header">Olá, {dn}</h3>
            <FormDisplayName displayName={dn} user={auth.user} />
            <br/>
            <button className="mini ui center floated negative basic button" onClick={auth.signout}>Sair</button>
        </>
    )
}

export default UserInfo