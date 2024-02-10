import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Kids = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className="mx-auto" style={{ maxWidth: "1436px" }}>
      <div className="mt-4">
        <h3 className="h3 text-center">Kids’ Books</h3>
        <p className="text-center mt-3">
          Discover the best children's books for kids of all ages including
          board books, picture books, book series, and chapter books.
        </p>
      </div>
      <div className=" container text-center mt-5 word-line">
        <span> New from Mo Willems</span>
      </div>
      <div className="card mb-3 p-2 border-0">
        <div className="row g-0 justify-content-center mt-5 position-relative gap-5">
          <div className="col-md-4 card-content" style={{ width: "137.16px" }}>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593904749_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              className="img-fluid rounded w-100"
              alt="..."
            />
            {windowWidth >= 1200 && (
              <button className="quick-add-button-winner">QUICK ADD</button>
            )}
          </div>
          <div className="col-md-8" style={{ width: "500px" }}>
            <div className="card-body footer-list">
              <h5
                className="card-title text-start"
                style={{ color: "#8d7130", fontSize: "16px" }}
              >
                Impossible Creatures (BS Exclusive Edition)
                <p className="text-start" style={{ fontSize: "12px" }}>
                  <span style={{ color: "black" }}>by</span>{" "}
                  <span style={{ color: "green" }}>Katherine Rundell</span>
                </p>
              </h5>
              <br />
              <p className="card-text text-start" style={{ fontSize: "16px" }}>
                Impossible Creatures brings all your favorite mythical creatures
                into one deeply moving portal fantasy. It's an unparalleled
                adventure through a magical world where even a couple of kids
                can save the world and all those they hold dear. On sale
                September 10th, pre-order now.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kids;
