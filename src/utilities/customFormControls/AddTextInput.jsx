import React from 'react'
import { useField} from 'formik'
import {Label,FormField } from "semantic-ui-react"

export default function AddTextInput({...props}) {
    //console.log(props)
    //reflect api kullanıyor
    const[field,meta] = useField(props)
    //console.log(field)
  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  )
}
