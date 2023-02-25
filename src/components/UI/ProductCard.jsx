import React from "react";

import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );

    toast.success("Product added succesfully");
  };

  return (
    <Col lg="3" md="4" className="mb-3">
      <div className="product__item">
        <Link to={`/shop/${item.id}`}>
          <div className="product__img">
            <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
          </div>
          <div className="p-2 product__info">
            <h3 className="product__name">{item.productName}</h3>
            <span className="text-capitalize">{item.category}</span>
          </div>
        </Link>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
