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
        <div className="text-center mt-5 word-line">
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
      <div className="text-center mt-5">
        <div className="text-center mt-5 word-line">
          <span>Have You Read Our Book of the Year Winner?</span>
        </div>
        <div className="card mb-3 p-2 border-0">
          <div className="row g-0 justify-content-center mt-5">
            <div className="col-md-4" style={{ width: "150px" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593422946_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="img-fluid rounded w-100"
                alt="..."
              />
            </div>
            <div className="col-md-8" style={{ width: "500px" }}>
              <div className="card-body footer-list">
                <h5
                  className="card-title text-start"
                  style={{ color: "#8d7130", fontSize: "16px" }}
                >
                  The Heaven & Earth Grocery Store (2023 BS Book of the Year)
                  <p className="text-start" style={{ fontSize: "12px" }}>
                    <span style={{ color: "black" }}>by</span>{" "}
                    <span style={{ color: "brown" }}>James McBride</span>
                  </p>
                </h5>
                <br />
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px" }}
                >
                  From the author of Deacon King Kong and National Book Award
                  winner The Good Lord Bird comes the Barnes & Noble 2023 Book
                  of the Year, The Heaven & Earth Grocery Store, a stunning
                  novel about a small town and the bonds of community that are
                  formed between marginalized groups in order to survive.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        {" "}
        <div className="text-center mt-5 word-line">
          <span>Our Fiction Monthly Picks</span>
        </div>
        <div className="d-flex">
          <div>
            <h5>This Month's Pick: Cleopatra and Frankenstein:</h5>
            <p className="mt-4">
              Darkly entertaining, subtly heartbreaking, but nonetheless a joy
              to read, Cleopatra and Frankenstein bandies with themes of
              marriage, mental health and addiction, all on the back of a
              humorous and deeply human narrative voice.
            </p>
          </div>
          <div className="d-flex">
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  Cleopatra and Frankenstein by <strong>Coco Mellors</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781324079538_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  This Other Eden (B&N Exclusive Edition) by{" "}
                  <strong>Paul Harding</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063135154_p0_v6%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  Flight by <strong>Lynn Steger Strong</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781685891015_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  Ladies' Lunch: And Other Stories by{" "}
                  <strong>Lore Segal</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593422366_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  The Old Place <strong>by Bobby Finger</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780062913517_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  Now Is Not the Time to Panic by <strong>Kevin Wilson</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593467879_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  The Rabbit Hutch (BS Discover Prize Winner) by
                  <strong> Tess Gunty</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593724941_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  The Second Ending (BS Exclusive Edition) by
                  <strong> Michelle Hoffman</strong>
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250871442_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              <div className="card-body text-center">
                <p className="card-title footer-list">
                  Notes on Your Sudden Disappearanc: A Novel by
                  <strong> Alison Espach</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiction;
