import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'


export default function SignedOut({signIn}) {
  return (
    <div>
      <Dropdown.Item>
        <Button  onClick={signIn} style={{marginLeft:"3em"} }>Giriş yap</Button>
        <Button style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </Dropdown.Item>

    </div>
  )
}
