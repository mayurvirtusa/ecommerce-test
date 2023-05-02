import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Conatants from "../../../constants/staticText";
import { setCardDetails } from "../../../actions/Auth";
const {
  CARD_NAME,
  CARD_NUMBER,
  EXPIRY_MONTH,
  EXPIRY_YEAR,
  CVV,

  ENTER_CARD_NAME,
  ENTER_CARD_NUMBER,
  ENTER_EXP_MONTH,
  ENTER_EXP_YEAR,
  ENTER_CVV,

  CARD_NAME_REQUIRE,
  CARD_NUMBER_REQUIRE,
  EXPIRY_MONTH_REQUIRE,
  EXPIRY_YEAR_REQUIRE,
  CVV_REQUIRE,

  SAVE,
  ADD_PAYMENT,
} = Conatants;

const AddPayment = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
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
      dispatch(setCardDetails(formData));
      navigate("/ordercompleted");
    }
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handelSubmit}>
        <div>
          <h5>{ADD_PAYMENT}</h5>
          <br />
          <Row md={2} className="mb-3">
            <Form.Group>
              <Form.Label>{CARD_NAME}</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={ENTER_CARD_NAME}
                name="cardName"
                value={formData.cardName}
                onChange={handleAddressChange}
              />
              <Form.Control.Feedback type="invalid">
                {CARD_NAME_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>{CARD_NUMBER}</Form.Label>
              <Form.Control
                required
                maxLength={"19"}
                type="text"
                placeholder={ENTER_CARD_NUMBER}
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleAddressChange}
                pattern="^[0-9]{16,19}$"
              />
              <Form.Control.Feedback type="invalid">
                {CARD_NUMBER_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row md={2} className="mb-3">
            <Form.Group>
              <Form.Label>{EXPIRY_MONTH}</Form.Label>
              <Form.Control
                required
                maxLength={2}
                type="text"
                name="expiryMonth"
                placeholder={ENTER_EXP_MONTH}
                value={formData.expiryMonth}
                onChange={handleAddressChange}
                pattern="^([1-9]|0[1-9]|1[0-2])$"
                />
              <Form.Control.Feedback type="invalid">
                {EXPIRY_MONTH_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>{EXPIRY_YEAR}</Form.Label>
              <Form.Control
                required
                maxLength={4}
                type="text"
                name="expiryYear"
                placeholder={ENTER_EXP_YEAR}
                value={formData.expiryYear}
                onChange={handleAddressChange}
                pattern="^20[2-9][3-9]$"
                />
              <Form.Control.Feedback type="invalid">
                {EXPIRY_YEAR_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row md={2} className="mb-3">
            <Form.Group>
              <Form.Label>{CVV}</Form.Label>
              <Form.Control
                required
                maxLength={3}
                type="text"
                name="cvv"
                placeholder={ENTER_CVV}
                value={formData.cvv}
                onChange={handleAddressChange}
                pattern="^[0-9]{3}$"
              />
              <Form.Control.Feedback type="invalid">
                {CVV_REQUIRE}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
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

export default AddPayment;
