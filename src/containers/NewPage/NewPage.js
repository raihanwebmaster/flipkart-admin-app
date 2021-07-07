import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import NewModal from "../../components/UI/Modal/modal";
import linearCategoryList from "../../helpers/linearCategories";

const NewPage = () => {
  const [createModal, setCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const category = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [desc, setDesc] = useState("");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setCategories(linearCategoryList(category.categories));
  }, [category]);
  const handleBannerImages = (e) => {
    console.log(e);
  };
  const handleProductImages = (e) => {
    console.log(e);
  };
  const renderCreatePageModal = () => {
    return (
      <NewModal
        show={createModal}
        modalTitle={"Create New Page"}
        handleClose={() => setCreateModal(false)}
      >
        <Container>
          <Row>
            <Col>
              <select
                className="form-control form-control-sm"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Page Title"}
                className="form-control-sm"
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder={"Page Description"}
                className="form-control-sm"
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                className="form-control form-control-sm"
                type="file"
                name="banners"
                onChange={handleBannerImages}
              ></input>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                className="form-control form-control-sm"
                type="file"
                name="products"
                onChange={handleProductImages}
              ></input>
            </Col>
          </Row>
        </Container>
      </NewModal>
    );
  };
  return (
    <Layout sidebar>
      {renderCreatePageModal()}
      <button onClick={() => setCreateModal(true)}>Create Page</button>
    </Layout>
  );
};

export default NewPage;
