import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Ebooks = () => {
  const ebooksData = [
    {
      title: "The Puppets of Spelhorst by ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Kate DiCamillo",
      buttonText: "Buy",
    },
    {
      title: "The Puppets of Spelhorst by ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Kate DiCamillo",
      buttonText: "Buy",
    },
    {
      title: "The Puppets of Spelhorst by ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Kate DiCamillo",
      buttonText: "Buy",
    },
    {
      title: "The Puppets of Spelhorst by ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Kate DiCamillo",
      buttonText: "Buy",
    },
    {
      title: "The Puppets of Spelhorst by ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781639730704_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Kate DiCamillo",
      buttonText: "Buy",
    },
  ];
  const navigate = useNavigate();
  const [visibleCardIndexes, setVisibleCardIndexes] = useState([0, 1, 2, 3, 4]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleCardIndexes.map(
      (index) => (index + 1) % ebooksData.length
    );
    setVisibleCardIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleCardIndexes.map(
      (index) => (index - 1 + ebooksData.length) % ebooksData.length
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
      <div className="row d-flex flex-row card mb-3 p-2 border-0">
        <div className="col-8 row g-0 justify-content-center mt-5 position-relative">
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
          className="col-4 d-flex flex-column justify-content-center"
          style={{ borderLeft: "1px solid black", padding: "32px" }}
        >
          <span>
            <strong>NOOK</strong>
          </span>
          <h1>$149.99</h1>
        </div>
      </div>
      <div className="container">
        <div className="d-flex" style={{ paddingLeft: "15px" }}>
          <div className="left-arrow-container" onClick={handlePrevButtonClick}>
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
                  src={ebooksData[index].imageUrl}
                  className="card-img-top w-50 mx-auto cards-img"
                  alt="Book Cover"
                />
                <div className="card-body text-center">
                  <div className="card-title">{ebooksData[index].title}</div>
                  <p className="card-text">
                    by <strong>{ebooksData[index].author}</strong>
                  </p>
                </div>
                {windowWidth >= 1200 && (
                  <button className="quick-add-button">QUICK ADD</button>
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
  );
};

export default Ebooks;
