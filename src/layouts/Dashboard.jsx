import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Row, Col } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Row>
        <Col xs={8} md={2}>
          <Categories />
        </Col>
        <Col xs={16} md={8}>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/products/:name" element={<ProductDetail />} />
            <Route exact path="/cart" element={<CartDetail />} />
            <Route path="/product/add" element={<ProductAdd />} />
          </Routes>

        </Col>
      </Row>
    </div>
  );
}
