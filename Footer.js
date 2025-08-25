import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4 className="fw-bold">JewelLux</h4>
            <p>Luxury jewelry crafted with love and elegance.</p>
          </div>
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/shop" className="text-light">Shop</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <a href="#" className="me-2 text-warning"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-2 text-warning"><i className="fab fa-instagram"></i></a>
            <a href="#" className="me-2 text-warning"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="text-center mt-4">© {new Date().getFullYear()} JewelLux. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
