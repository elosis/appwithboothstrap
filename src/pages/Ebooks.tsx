import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Ebooks = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="mx-auto" style={{ maxWidth: "1436px" }}>
      <div className="mt-4">
        <h3 className="h3 text-center">eBooks & NOOK</h3>
        <p className="text-center mt-3">
          Browse eBooks in your favorite genres (including trending new
          releases) to buy and read immediately with your NOOK or free Barnes &
          Noble NOOK app!
        </p>
      </div>
      <div className="text-center mt-5 word-line">
        <span> The New NOOK 9” Lenovo Tablet</span>
      </div>
      <div className="d-flex flex-row card mb-3 p-2 border-0">
        <div className="row g-0 justify-content-center mt-5 position-relative">
          <div className="col-8 card-content" style={{ width: "160px" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780594261353_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="img-fluid rounded w-100"
              alt="..."
            />
            {windowWidth >= 1200 && (
              <button className="quick-add-button-winner">QUICK ADD</button>
            )}
          </div>
          <div className="col-8" style={{ width: "500px" }}>
            <div className="card-body footer-list">
              <h5
                className="card-title text-start"
                style={{ fontSize: "16px" }}
              >
                QUICK ADD NOOK 9" Lenovo Tablet
                <br />
                <span style={{ color: "black" }}>by</span>{" "}
                <span
                  style={{ color: "brown", cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  BS
                </span>
              </h5>
              <br />
              <p className="card-text text-start" style={{ fontSize: "16px" }}>
                From audiobooks to graphic novels, the ad-free, immersive and
                vivid color display of the new NOOK Lenovo makes reading
                vibrant.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column justify-content-center"
          style={{ borderLeft: "1px solid black", padding: "32px" }}
        >
          <span>
            <strong>NOOK</strong>
          </span>
          <h1>$149.99</h1>
        </div>
      </div>
    </div>
  );
};

export default Ebooks;
