import React, { useState } from 'react';
import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import './productoMuestra.css';

 
  const productoMuestra = () => {
    const [cart, setCart] = useState([]);
    const [bought, setBought] = useState(false);
  
    const handleAddToCart = (product) => {
      setCart([...cart, product]);
      setBought(false);
    };
  
    const handleCheckout = () => {
      if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
      }
      const confirmPurchase = window.confirm('¿Está seguro de que desea realizar la compra?');
      if (confirmPurchase) {
        setBought(true);
        alert('Compra exitosa');
        setCart([]);
      }
    };


  const products = [
    {
      id: 1,
      name: 'Producto hogar 1 CUBRE 1 PERSONAS',
      image: 'https://images.unsplash.com/photo-1496664444929-8c75efb9546f?w=500&auto=format&fit=crop&q=60',
      description:
        'Este producto cubre consultas de ofimática nivel 1, como tareas rutinarias, instalación de aplicaciones y uso general. Ideal para personas mayores o con poco conocimiento técnico.',
    },
    { id: 2, name: "Producto hogar 2 CUBRE 2 PERSONAS", image: "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?w=500&auto=format&fit=crop&q=60", description: "Este producto es ideal para consultas nivel 2, incluyendo soporte técnico especializado, solución de problemas avanzados y configuraciones más complejas." },
    { id: 3, name: "Producto hogar 3 PENSADO PARA TODA LA FAMILIA", image: "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?w=500&auto=format&fit=crop&q=60", description: "Este producto está diseñado para usuarios avanzados que requieren soporte técnico de nivel 3, como análisis profundo de sistemas, mantenimiento de infraestructura y resolución de problemas críticos." },
    { id: 4, name: "Producto profesionales 1 JUNIOR", image: "https://plus.unsplash.com/premium_photo-1669380425685-612e263486ee?w=500&auto=format&fit=crop&q=60", description: "Este producto está diseñado para profesionales que necesitan soporte técnico nivel 1, como ayuda con herramientas ofimáticas, configuraciones iniciales y consultas básicas sobre aplicaciones comunes." },
    { id: 5, name: "Producto profesionales 2 SEMI SENIOR", image: "https://plus.unsplash.com/premium_photo-1669380425685-612e263486ee?w=500&auto=format&fit=crop&q=60", description: "Este producto se enfoca en soporte técnico nivel 2, ideal para profesionales que enfrentan problemas más avanzados, como configuración de redes, solución de errores de software y asistencia en sistemas empresariales." },
    { id: 6, name: "Producto profesionales 3 SENIOR", image: "https://plus.unsplash.com/premium_photo-1669380425685-612e263486ee?w=500&auto=format&fit=crop&q=60", description: "Este producto cubre soporte técnico nivel 3, ofreciendo soluciones avanzadas para profesionales, incluyendo mantenimiento de servidores, optimización de infraestructura y diagnóstico detallado de problemas críticos." },
    { id: 7, name: "Producto emprendedores 1 PYME-CHICA", image: "https://plus.unsplash.com/premium_photo-1683141503794-83a4f69a0ff4?w=500&auto=format&fit=crop&q=60", description: "Este producto cubre necesidades básicas de soporte técnico nivel 1 para emprendedores, como configuración de herramientas de productividad, soporte con correos electrónicos y consultas sobre aplicaciones esenciales." },
    { id: 8, name: "Producto emprendedores 2 PYME-MEDIANA", image: "https://plus.unsplash.com/premium_photo-1683141503794-83a4f69a0ff4?w=500&auto=format&fit=crop&q=60", description: "Diseñado para emprendedores que requieren soporte técnico nivel 2, este producto aborda configuraciones de sistemas, resolución de problemas técnicos y soporte en aplicaciones empresariales avanzadas." },
    { id: 9, name: "Producto emprendedores 3 PYME-GRANDE", image: "https://plus.unsplash.com/premium_photo-1683141503794-83a4f69a0ff4?w=500&auto=format&fit=crop&q=60", description: "Este producto ofrece soporte técnico nivel 3 para emprendedores, incluyendo soluciones personalizadas para infraestructura tecnológica, integración de sistemas y resolución de problemas críticos que afectan el crecimiento del negocio." }
  ];


    
    return (
      <div className="producto-conteiner py-4">
        <h2 className="text-center mb-4">Productos</h2>
  
        
  
       
        <div className="row g-4 product-grid ">
          {products.map((product) => (
            <div key={product.id} >
              <div className="card product-card h-100">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => handleAddToCart(product)}
                  >
                   
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default productoMuestra;
