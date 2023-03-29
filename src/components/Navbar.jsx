import { NavLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Context from "../context/Context"
import React, {  useEffect, useContext } from 'react';
export default function Navigation() {

 
  const option={
    style: 'decimal',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  };

  const {total, setTotal,seleccionadas} = useContext(Context);

  function calcularTotal() {

    const totalCalculado = seleccionadas.reduce(
      (acc, item) => acc + (parseFloat(item.price) ?? 0) * (parseInt(item.cantidad) ?? 0),
      0
    );
    setTotal(totalCalculado);
  };

  useEffect(() => {
    calcularTotal();
  });

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "mi-clase");

  return (
    <>
      <Navbar className="navbarfondo">
        <Container className="justify-content-start">
          <Nav className="me-auto">
          <NavLink to="/"className={setActiveClass} >
          🍕 Pizzería Mamma Mía!
            </NavLink>
          </Nav>
          <Nav className="justify-content">
            <NavLink to="/carrito"  className={setActiveClass} >
            🛒 Tú Compra: ${total.toLocaleString('es-CL', option)}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
