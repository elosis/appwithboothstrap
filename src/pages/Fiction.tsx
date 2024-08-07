import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/Navbar";
import { fictionData } from "../constants/staticVariables";
import PagesModal from "../modals/PagesModal";
import { BookStoreContext } from "../store/context";
import "../App.css";

const Fiction = () => {
  const { handleShow } = useContext(BookStoreContext);
  const cardsPerPage = 3;
  const [visibleCardIndexes, setVisibleCardIndexes] = useState([0, 1, 2]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleCardIndexes.map(
      (index) => (index + 1) % fictionData.length
    );
    setVisibleCardIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleCardIndexes.map(
      (index) => (index - 1 + fictionData.length) % fictionData.length
    );
    setVisibleCardIndexes(prevIndexes);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-auto" style={{ maxWidth: "1436px" }}>
        <img
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/global/global-nav-banner/2024/01/PROD-28717_RUSH_Global_Nav_Post-Holiday-Sale_01-27_r6.jpg"
          className="w-100"
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

          <div className="d-flex justify-content-center mt-5 position-relative ">
            <div
              className="card card-content"
              style={{ width: "18rem", border: "none" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781982179007_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              {windowWidth >= 1200 && (
                <button
                  className="quick-add-button-select"
                  onClick={handleShow}
                >
                  QUICK ADD
                </button>
              )}
              <div className="card-body text-center">
                <h5 className="card-title responsive-paragraph">
                  None of This is True
                </h5>
                <div className="d-flex gap-1 justify-content-center responsive-paragraph">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
              </div>
            </div>
            <div
              className="card card-content"
              style={{ width: "18rem", border: "none" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250906205_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              {windowWidth >= 1200 && (
                <button
                  className="quick-add-button-select"
                  onClick={handleShow}
                >
                  QUICK ADD
                </button>
              )}
              <div className="card-body text-center">
                <h5 className="card-title responsive-paragraph">
                  The Wolfsong in Nature
                </h5>
                <div className="d-flex gap-1 justify-content-center responsive-paragraph">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
              </div>
            </div>
            <div
              className="card card-content"
              style={{ width: "18rem", border: "none" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593490693_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              {windowWidth >= 1200 && (
                <button
                  className="quick-add-button-select"
                  onClick={handleShow}
                >
                  QUICK ADD
                </button>
              )}
              <div className="card-body text-center">
                <h5 className="card-title responsive-paragraph">
                  Pineapple Street: A Novel
                </h5>
                <div className="d-flex gap-1 justify-content-center responsive-paragraph">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-half" style={{ color: "gold" }}></i>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
              </div>
            </div>
            <div
              className="card card-content"
              style={{ width: "18rem", border: "none" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781957568577_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              {windowWidth >= 1200 && (
                <button
                  className="quick-add-button-select"
                  onClick={handleShow}
                >
                  QUICK ADD
                </button>
              )}
              <div className="card-body text-center">
                <h5 className="card-title responsive-paragraph">
                  Soul of Ash and Blood
                </h5>
                <div className="d-flex gap-1 justify-content-center responsive-paragraph">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
              </div>
            </div>
            <div
              className="card card-content"
              style={{ width: "18rem", border: "none" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593535707_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="card-img-top w-50 mx-auto cards-img"
                alt="..."
              />
              {windowWidth >= 1200 && (
                <button
                  className="quick-add-button-select"
                  onClick={handleShow}
                >
                  QUICK ADD
                </button>
              )}
              <div className="card-body text-center">
                <h5 className="card-title responsive-paragraph">
                  The Rachel Incident{" "}
                </h5>
                <div className="d-flex gap-1 justify-content-center responsive-paragraph">
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
                  <i className="bi bi-star-half" style={{ color: "gold" }}></i>
                  <i className="bi bi-star" style={{ color: "gold" }}></i>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleShow}>
                  Buy
                </button>
                {/* Modal */}
                <PagesModal />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <div className="text-center mt-5 word-line">
            <span>Have You Read Our Book of the Year Winner?</span>
          </div>
          <div className="card mb-3 p-2 border-0">
            <div className="row g-0 justify-content-center mt-5 position-relative">
              <div
                className="col-md-4 card-content"
                style={{ width: "137.16px" }}
              >
                <img
                  src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593422946_p0_v9%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                  className="img-fluid rounded w-100"
                  alt="..."
                />
                {windowWidth >= 1200 && (
                  <button
                    className="quick-add-button-winner"
                    onClick={handleShow}
                  >
                    QUICK ADD
                  </button>
                )}
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
          <div className="d-flex flex-column flex-lg-row mt-5">
            <div
              style={{ borderRight: "1px solid black", paddingRight: "15px" }}
              className="responsive-paragraph"
            >
              <h5 className="responsive-paragraph">
                This Month's Pick: Cleopatra and Frankenstein:
              </h5>
              <p className="mt-4">
                Darkly entertaining, subtly heartbreaking, but nonetheless a joy
                to read, Cleopatra and Frankenstein bandies with themes of
                marriage, mental health and addiction, all on the back of a
                humorous and deeply human narrative voice.
              </p>
            </div>
            <div className="container">
              <div className="d-flex" style={{ paddingLeft: "15px" }}>
                <div
                  className="left-arrow-container"
                  onClick={handlePrevButtonClick}
                >
                  <div className="left-arrow-head"></div>
                </div>
                {visibleCardIndexes.map((index) => (
                  <div
                    key={index}
                    className={`card mx-2 position-relative`}
                    style={{ width: "18rem", border: "none" }}
                  >
                    <div className="card-content">
                      <img
                        src={fictionData[index].imageUrl}
                        className="card-img-top w-50 mx-auto cards-img"
                        alt="Book Cover"
                      />
                      <div className="card-body text-center">
                        <div className="card-title responsive-paragraph">
                          {fictionData[index].title}
                        </div>
                        <p className="card-text responsive-paragraph">
                          by <strong>{fictionData[index].author}</strong>
                        </p>
                      </div>
                      {windowWidth >= 1200 && (
                        <button
                          className="quick-add-button"
                          onClick={handleShow}
                        >
                          QUICK ADD
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div
                  className="right-arrow-container"
                  onClick={handleNextButtonClick}
                >
                  <div className="right-arrow-head"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiction;
