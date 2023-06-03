import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button } from 'react-bootstrap'
import AddTextInput from '../utilities/customFormControls/AddTextInput'

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 20 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form className='ui form'>
                <AddTextInput name="productName" placeholder="Product Name"></AddTextInput>
                <AddTextInput name="unitPrice" placeholder="Unit Price" />
                <Button color ="green" type="submit">Ekle</Button>
            </Form>

        </Formik>

    );
}
