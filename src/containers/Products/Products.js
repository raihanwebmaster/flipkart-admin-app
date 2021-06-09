import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../actions";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import NewModal from "../../components/UI/Modal/modal";
const Products = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);
    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }
    dispatch(addProduct(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const handleProductPicture = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };
  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product) => (
                <tr key={product._id}>
                  <td>2</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.description}</td>
                  <td>--</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };
  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>ADD</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      <NewModal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Product"}
      >
        <Input
          label="Name"
          value={name}
          placeholder={`Product Name `}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          placeholder={`Quantity `}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placeholder={`Product Price `}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {productPictures.length > 0
          ? productPictures.map((pic, index) => (
              <div key={index}>{JSON.stringify(pic.name)}</div>
            ))
          : null}
        <input
          type="file"
          name="productPicture"
          onChange={handleProductPicture}
        />
      </NewModal>
    </Layout>
  );
};

export default Products;
