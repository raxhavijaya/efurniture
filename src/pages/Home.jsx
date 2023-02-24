import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair");

    const filteredBestSalesProducts = products.filter((item) => item.category === "sofa");

    const filteredMobileProducts = products.filter((item) => item.category === "mobile");

    const filteredWirelessProducts = products.filter((item) => item.category === "wireless");

    const filteredPopularProducts = products.filter((item) => item.category === "watch");

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalist & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed animi temporibus. Enim laborum sed consectetur sint recusandae aliquam! Dolorem doloremque maxime at provident,
                  corrupti consequatur facere molestias dignissimos iure!
                </p>
                <Link to="/shop">
                  <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                    SHOP NOW
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-2">Quality Armchair</h3>
              </div>
              <Clock />
              <Link to="/shop">
                {" "}
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn store__btn">
                  Visit Store
                </motion.button>
              </Link>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <motion.img whileHover={{ scale: 1.1 }} src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2">
              <h2 className="section__title">Popular Products</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
