import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: "1436px", marginTop: "100px" }}>
      <div className="d-flex border-top mt-5">
        <div className="d-flex footer-list w-75">
          <table className="table d-flex flex-column">
            <th>BOOKSTORE SERVICES</th>
            <td>Affiliate Program</td>
            <td>Publisher & Author Guidelines</td>
            <td>Bulk Order Discounts</td>
            <td>Bookstore Mobile Apps</td>
            <td>Bookstore Membership</td>
            <td>Bookstore Mastercard</td>
            <td>Bookstore Bookfairs</td>
            <td>Bookstore Press</td>
          </table>
          <table className="table d-flex flex-column">
            <th>ABOUT US</th>
            <td>About Bookstore</td>
            <td>Careers at Bookstore</td>
            <td>Bookstore, Inc.</td>
            <td>Bookstore Kitchen</td>
          </table>
          <table className="table d-flex flex-column">
            <th>QUICK HELP</th>
            <td>Help Center</td>
            <td>Covid Safety</td>
            <td>Shipping & Returns</td>
            <td>Store Pickup</td>
            <td>Order Status</td>
            <td>Product Recalls</td>
            <td>Corrections & Updates</td>
            <td>Gift Cards</td>
          </table>
          <table className="table d-flex flex-column">
            <th>SHOP BY CATEGORY</th>
            <td>Books</td>
            <td>Fiction</td>
            <td>Nonfiction</td>
            <td>Kids</td>
            <td>Teens & YA</td>
            <td>eBooks</td>
            <td>Audiobooks</td>
            <td>NOOK Tablets & eReaders</td>
          </table>
        </div>
        <div>
          <span className="footer-list">
            <strong>FOLLOW US</strong>
            <div className="d-flex gap-3" style={{ fontSize: "32px" }}>
              <i className="bi bi-facebook" />
              <i className="bi bi-twitter-x" />
              <i className="bi bi-instagram" />
              <i className="bi bi-pinterest" />
              <i className="bi bi-tiktok" />
              <i className="bi bi-youtube" />
            </div>
          </span>
        </div>
      </div>
      <div className="mt-3 border-top end-footer-list d-flex ">
        <div className="d-flex gap-3 w-75 mt-2">
          <td>Terms Of Use</td>
          <td>Copyright & Trademark</td>
          <td>Privacy</td>
          <td>Do Not Sell My Personal Information</td>
          <td>Accessibility</td>
          <td>Cookie Policy</td>
          <td>Sitemap</td>
        </div>
        <div className="mt-2 d-flex flex-column">
          <span>©1997-2024 Bookstore Booksellers, Inc.</span>
          <span className="mt-1">23 East 7th Street, New York, NY 10023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
