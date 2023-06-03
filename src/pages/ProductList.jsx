import React, { useState, useEffect} from 'react'
import { Table,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductService from '../services/productService'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

export default function ProductList() {

  const dispatch = useDispatch()//Dispatch bir aksiyon çağırmak için bir fonksiyondur
  //destructer
  const [products, setProducts] = useState([])
  //products'dan bize data gelecek

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data))
    //başarılı olursa gelecek sonuç için 
  })

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    toast.success(`${product.productName} Sepete Eklendi`)
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th>Ürün Adı</th>
            <th>Birim Fiyatı</th>
            <th>Stok Adedi</th>
            <th>Açıklama</th>
            <th>Kategori</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          { // ürünleri map et bu yapının içine at
            products.map((product) => (
              <tr key={product.id}>
                <td><Link to={`/products/${product.productName}`}>{product.productName}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.unitInStock}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.category.categoryName}</td>
                <td><Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></td>
              </tr>

            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
