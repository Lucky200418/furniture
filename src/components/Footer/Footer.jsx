/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <img src="/logo-furniture.png" alt="Logo" className="imageLogo" />
              <h1>C.GEDDES</h1>
            </div>
            <p>
              At C.GEDDES, we are dedicated to transforming your living spaces
              with our exquisite collection of furniture. Our commitment to
              quality and craftsmanship ensures that each piece is not only
              stylish but also built to last. Discover the perfect blend of
              comfort and elegance with us.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <ul class="footer-list">
              <li>
                <h2>My Account</h2>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span class="footer-link-text">Discounts</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span class="footer-link-text">New Arrivals</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span class="footer-link-text">Best Deals</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward-outline"></ion-icon>

                  <span class="footer-link-text">New Products</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <div class="footer-list">
              <h2>Opening Time</h2>

              <table class="footer-table">
                <tbody>
                  <tr class="table-row">
                    <th class="table-head" scope="row">
                      Mon - Tue:
                    </th>

                    <td class="table-data">8AM - 10PM</td>
                  </tr>

                  <tr class="table-row">
                    <th class="table-head" scope="row">
                      Wed:
                    </th>

                    <td class="table-data">8AM - 7PM</td>
                  </tr>

                  <tr class="table-row">
                    <th class="table-head" scope="row">
                      Fri:
                    </th>

                    <td class="table-data">7AM - 12PM</td>
                  </tr>

                  <tr class="table-row">
                    <th class="table-head" scope="row">
                      Sat:
                    </th>

                    <td class="table-data">9AM - 8PM</td>
                  </tr>

                  <tr class="table-row">
                    <th class="table-head" scope="row">
                      Sun:
                    </th>

                    <td class="table-data">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                C.Geddes Design & Finishing 161 scenic park place NW Calgary Ab
              </li>
              <li>Email: c.g.designfinishing@gmail.com</li>
              <li>Phone: 14039660991</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

