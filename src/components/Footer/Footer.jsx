/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row row1">
          <Col md={3} sm={5} className="box row1-box1">
            <div className="logo">
              <img
                src="/logo-furniture.png"
                alt="Logo"
                className="imageLogoFooter"
              />
              <h1>C.GEDDES</h1>
            </div>
            <p>
              C.Geddes Design & Finishing is a family owned and operated general
              contracting firm with more than 15 years of experience in building
              construction. The owners of the business are very active in daily
              operations, with principals being involved at every level, from
              management to field supervision to actual field construction. We
              offer reliability and accountability.
            </p>
          </Col>

          <Col md={3} sm={5} className="row1-box1">
            <p>
              CGDF is a full service general contractor, providing both
              pre-construction and construction management services. We maintain
              a permanent and highly skilled workforce and traditionally perform
              a high percentage of work with our own crews, including selective
              demolition, site, concrete, masonry and carpentry. Our in-house
              construction capacity allows us to be responsive to the needs of
              our clients on projects of any size and complexity. We pride
              ourselves on our reputation for quality craftsmanship.
            </p>
          </Col>

          <Col md={3} sm={5} className="row1-box1">
            <p>
              CGDF brings a pro-active, team oriented approach to our projects,
              which is clearly evident in the large number of negotiated
              contracts we have completed. Not only do we look to identify
              potential conflicts and problems before they arise, we also work
              on providing timely, practical and cost effective solutions. We
              are confident that the many clients we have performed work for,
              many on a repeat basis, would attest to our commitment and
              professionalism, as well as to the high level of
              quality of our work
            </p>
          </Col>
        </Row>
        <Row className="footer-row">
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

