/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import Men from "../../../../asset/images/homebook2.jpg";
import Women from "../../../../asset/images/homebook1.jpg";
import "./showcase.css";

const Showcase = () => {
  return (
    <>
      <section className="showcase-section">
        <div className="grid grid-cols-2 md:py-8 py-4">
          <div className="box-content">
            <h2 className="showcase-heading">Best Books <br /> Recomended by Users</h2>
            <Link className="btn-showcase" to="/products">
              View More
            </Link>
          </div>
          <div className="box-image image-right">
            <img src={Men} className="img" alt="Image For Men" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:py-8 py-4">
          <div className="box-image image-left">
            <img src={Women} className="img" alt="Image For Women" />
          </div>
          <div className="box-content">
            <h2 className="showcase-heading">Best Sellers <br /></h2>
            <Link className="btn-showcase" to="/products">
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
