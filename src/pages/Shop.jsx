import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Spinner } from "reactstrap";

import "../styles/shop.css";
import ProductList from "../components/UI/ProductList";
import useGetData from "../custom-hooks/useGetData";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const handleSort = (e) => {
    const sortValue = e.target.value;
    const sortedProducts = [...productsData].sort((a, b) => {
      if (sortValue === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortOrder(sortValue);
    setProductsData(sortedProducts);
  };

  const handleFilter = (e) => {
    setSortOrder(null);
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter((item) => item.category === "sofa");

      setProductsData(filterProducts);
    }

    if (filterValue === "chair") {
      const filterProducts = products.filter((item) => item.category === "chair");

      setProductsData(filterProducts);
    }

    if (filterValue === "mobile") {
      const filterProducts = products.filter((item) => item.category === "mobile");

      setProductsData(filterProducts);
    }

    if (filterValue === "watch") {
      const filterProducts = products.filter((item) => item.category === "watch");

      setProductsData(filterProducts);
    }

    if (filterValue === "wireless") {
      const filterProducts = products.filter((item) => item.category === "wireless");

      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter} value={sortOrder || ""}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select onChange={handleSort} value={sortOrder || ""}>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Search...." onChange={handleSearch} />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>{loading ? <Spinner className="m-auto mt-5">Loading...</Spinner> : productsData.length === 0 ? <h1 className="text-center fs-4">No products are found!</h1> : <ProductList data={productsData} />}</Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
