import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Fiction = () => {
  return (
    <div>
      <img
        src="https://dispatch.barnesandnoble.com/content/dam/ccr/global/global-nav-banner/2024/01/PROD-28717_RUSH_Global_Nav_Post-Holiday-Sale_01-27_r6.jpg"
        alt=""
      ></img>

      <div className="mt-4">
        <h3 className="h3 text-center">Fiction Books</h3>
        <p className="text-center mt-3">
          Browse a variety of fiction genres including general fiction,
          literature, romance and many more.
        </p>
      </div>
      <div>
        <div className="h4 text-center mt-5 word-line">
          <span> 50% Off Select Books</span>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781982179007_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="card-img-top w-50 mx-auto cards-img"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">An Education in Malice</h5>
              <div className="d-flex gap-1 justify-content-center">
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star" style={{ color: "gold" }}></i>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250906205_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="card-img-top w-50 mx-auto cards-img"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">An Education in Malice</h5>
              <div className="d-flex gap-1 justify-content-center">
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star" style={{ color: "gold" }}></i>
                <i className="bi bi-star" style={{ color: "gold" }}></i>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593490693_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="card-img-top w-50 mx-auto cards-img"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">An Education in Malice</h5>
              <div className="d-flex gap-1 justify-content-center">
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-half" style={{ color: "gold" }}></i>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781957568577_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="card-img-top w-50 mx-auto cards-img"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">An Education in Malice</h5>
              <div className="d-flex gap-1 justify-content-center">
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Buy
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593535707_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="card-img-top w-50 mx-auto cards-img"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">An Education in Malice</h5>
              <div className="d-flex gap-1 justify-content-center">
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                <i className="bi bi-star-half" style={{ color: "gold" }}></i>
                <i className="bi bi-star" style={{ color: "gold" }}></i>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiction;
