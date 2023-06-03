import React from 'react'
import { Dropdown, DropdownButton, Image } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
export default function SignedIn({signOut}) {
    return (
        <div>
            <DropdownItem>
                <DropdownButton

                    pointing="top left"
                    className="m-3"
                    variant="outline-secondary"
                    title="Kullanıcı"
                >
                    <Image avatar spaced="right" src="https://www.pngegg.com/tr/png-zpcep"></Image>
                    <Dropdown.Item href="#">Bilgilerim</Dropdown.Item>
                    <Dropdown.Item onClick={signOut}>Çıkış yap</Dropdown.Item>
                </DropdownButton>
            </DropdownItem>
        </div>
    )
}
