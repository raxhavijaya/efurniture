import React from "react";

import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="4" className="mb-3" key={item.id}>
      <div className="product__item">
      <Link to={`/shop/${item.id}`}>
      <div className="product__img">
          <motion.img  whileHover={{scale:0.9}}  src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">{item.productName}
            
          </h3>
          <span className="text-capitalize">{item.category}</span>
        </div>
      </Link>
        
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
