import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Conatants from "../../../constants/staticText";
import { setShippingAddress } from "../../../actions/Auth";
const {
  SHIPPING_ADDRESS,
  BILLING_ADDRESS,
  FIRST_NAME,
  LAST_NAME,
  ADDRESS,
  CITY,
  STATE,
  ZIP_CODE,
  COUNTRY,
  ENTER_FNAME,
  ENTER_LNAME,
  ENTER_ADDRESS,
  ENTER_CITY,
  ENTER_STATE,
  ENTER_ZIP,
  ENTER_COUNTRY,
  SAME_ADDRESS,
  SAVE,
  FIRST_NAME_REQUIRE,
  LAST_NAME_REQUIRE,
  ADDRESS_REQUIRE,
  CITY_REQUIRE,
  STATE_REQUIRE,
  ZIP_CODE_REQUIRE,
  COUNTRY_REQUIRE,
} = Conatants;

const ShippingAddress = () => {
const navigate = useNavigate();

  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    firstName1: "",
    lastName1: "",
    address1: "",
    city1: "",
    state1: "",
    zipCode1: "",
    country1: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      dispatch(setShippingAddress(formData))
      navigate("/checkout/ordersummary");
    }
  };

  const onCheck = useCallback(
    (e) => {
      const newFormData = { ...formData }; //JSON.parse(JSON.stringify(formData));

      if (e.target.checked) {
        newFormData.firstName1 = newFormData.firstName;
        newFormData.lastName1 = newFormData.lastName;
        newFormData.address1 = newFormData.address;
        newFormData.state1 = newFormData.state;
        newFormData.zipCode1 = newFormData.zipCode;
        newFormData.city1 = newFormData.city;
        newFormData.country1 = newFormData.country;
      }

      setFormData({
        ...newFormData,
      });
    },
    [formData]
  );

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handelSubmit}>
        <div>
          <h5>{SHIPPING_ADDRESS}</h5>
          <br></br>

          <Row md={2} className="mb-3">
            <Form.Group controlId="formFirstName">
              <Form.Label>{FIRST_NAME}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={ENTER_FNAME}
                name="firstName"
                value={formData.firstName}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {FIRST_NAME_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>{LAST_NAME}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={ENTER_LNAME}
                name="lastName"
                value={formData.lastName}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {LAST_NAME_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="address">
              <Form.Label>{ADDRESS}</Form.Label>
              <Form.Control
                required
                type="text"
                name="address"
                placeholder={ENTER_ADDRESS}
                value={formData.address}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {ADDRESS_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>{CITY}</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                placeholder={ENTER_CITY}
                value={formData.city}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {CITY_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="state">
              <Form.Label>{STATE}</Form.Label>
              <Form.Control
                required
                type="text"
                name="state"
                placeholder={ENTER_STATE}
                value={formData.state}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {STATE_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>{ZIP_CODE}</Form.Label>
              <Form.Control
                required
                type="text"
                name="zipCode"
                placeholder={ENTER_ZIP}
                value={formData.zipCode}
                onChange={handleAddressChange}
                pattern="^[0-9]{6}$"
              />
              <Form.Control.Feedback type="invalid">
                {ZIP_CODE_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="country">
              <Form.Label>{COUNTRY}</Form.Label>
              <Form.Control
                required
                type="text"
                name="country"
                placeholder={ENTER_COUNTRY}
                value={formData.country}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {COUNTRY_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>

        <hr
          style={{
            color: "#5A5A5A",
            marginTop: 20,
            marginBottom: 20,
          }}
        />

        <div>
          <Form.Check
            type={"checkbox"}
            id={`default-checkbox`}
            label={SAME_ADDRESS}
            onChange={onCheck}
          />
          <br></br>
          <h5>{BILLING_ADDRESS}</h5>
          <br></br>

          {/* <Row> */}
          <Row md={2} className="mb-3">
            <Form.Group controlId="formFirstName1">
              <Form.Label>{FIRST_NAME}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={ENTER_FNAME}
                name="firstName1"
                value={formData.firstName1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {FIRST_NAME_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>{LAST_NAME}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={ENTER_LNAME}
                name="lastName1"
                value={formData.lastName1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {LAST_NAME_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="address">
              <Form.Label>{ADDRESS}</Form.Label>
              <Form.Control
                required
                type="text"
                name="address1"
                placeholder={ENTER_ADDRESS}
                value={formData.address1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {ADDRESS_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>{CITY}</Form.Label>
              <Form.Control
                required
                type="text"
                name="city1"
                placeholder={ENTER_CITY}
                value={formData.city1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {CITY_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="state">
              <Form.Label>{STATE}</Form.Label>
              <Form.Control
                required
                type="text"
                name="state1"
                placeholder={ENTER_STATE}
                value={formData.state1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {STATE_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>{ZIP_CODE}</Form.Label>
              <Form.Control
                required
                type="text"
                name="zipCode1"
                placeholder={ENTER_ZIP}
                value={formData.zipCode1}
                onChange={handleAddressChange}
                pattern="^[0-9]{6}$"
              />
              <Form.Control.Feedback type="invalid">
                {ZIP_CODE_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group controlId="country">
              <Form.Label>{COUNTRY}</Form.Label>
              <Form.Control
                required
                type="text"
                name="country1"
                placeholder={ENTER_COUNTRY}
                value={formData.country1}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {COUNTRY_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* </Row> */}
          <div className="d-flex justify-content-center">
            <Button type="submit" variant="success">
              {SAVE}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ShippingAddress;
