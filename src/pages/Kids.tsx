import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../components/Navbar";
import { EbooksKidsFinalistData } from "../constants/staticVariables";
import { BookStoreContext } from "../store/context";
import PagesModal from "../modals/PagesModal";

const Kids = () => {
  const { handleShow } = useContext(BookStoreContext);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState([0, 1, 2, 3, 4]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleCardIndexes.map(
      (index) => (index + 1) % EbooksKidsFinalistData.length
    );
    setVisibleCardIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleCardIndexes.map(
      (index) =>
        (index - 1 + EbooksKidsFinalistData.length) %
        EbooksKidsFinalistData.length
    );
    setVisibleCardIndexes(prevIndexes);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 463) {
        setVisibleCardIndexes([0]);
      } else if (window.innerWidth < 768) {
        setVisibleCardIndexes(visibleCardIndexes.slice(0, 2));
      } else if (window.innerWidth < 1200) {
        setVisibleCardIndexes(visibleCardIndexes.slice(0, 3));
      } else {
        setVisibleCardIndexes([0, 1, 2, 3, 4]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
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
            <div
              className="col-md-4 card-content"
              style={{ width: "137.16px" }}
            >
              <img
                src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593904749_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
                className="img-fluid rounded w-100"
                alt="..."
              />
              <PagesModal />
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
                  Impossible Creatures (BS Exclusive Edition)
                  <p className="text-start" style={{ fontSize: "12px" }}>
                    <span style={{ color: "black" }}>by</span>{" "}
                    <span style={{ color: "green" }}>Katherine Rundell</span>
                  </p>
                </h5>
                <br />
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px" }}
                >
                  Impossible Creatures brings all your favorite mythical
                  creatures into one deeply moving portal fantasy. It's an
                  unparalleled adventure through a magical world where even a
                  couple of kids can save the world and all those they hold
                  dear. On sale September 10th, pre-order now.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" container text-center mt-5 word-line">
          <span> Buy One, Get One 50% Off Kids' Books</span>
        </div>
        <div className="image-grid align-items-center text-center border-bottom">
          <div className="border-end ">
            <div className="mt-3 kid-text">
              <div>Buy One, Get One 50% Off: Board</div>
              <div>Books for Little Hands</div>
            </div>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780694003617_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              alt=" Buy One, Get One 50% Off: Board Books for Little Hands"
              className="mb-5 w-75 "
              style={{ marginTop: "34px" }}
            />
          </div>
          <div className="border-end ">
            <div className="mt-3 kid-text">
              <div>Buy One, Get One 50% Off:</div>
              <div>Picture Books</div>
            </div>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780062467768_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              alt=" Buy One, Get One 50% Off: Board Books for Little Hands"
              className="mb-5 w-50"
              style={{ marginTop: "42px" }}
            />
          </div>
          <div className="border-end ">
            <div className="mt-3 kid-text">
              <div>Buy One, Get One 50% Off:</div>
              <div>Books for Ages 6 - 8</div>
            </div>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781338741063_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              alt=" Buy One, Get One 50% Off: Board Books for Little Hands"
              className="mt-1 mb-5 w-50"
            />
          </div>
          <div>
            <div className="mt-3 kid-text">
              <div>Buy One, Get One 50% Off:</div>
              <div>Books for Ages 9 - 12</div>
            </div>
            <img
              src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781338596700_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
              alt=" Buy One, Get One 50% Off: Board Books for Little Hands"
              className="mb-5 w-50"
              style={{ marginTop: "2.5px" }}
            />
          </div>
        </div>
        <div className="container">
          <div className="text-center mt-5 word-line">
            <span> Sweet Stories for Your Littlest Valentine</span>
          </div>
          <div className="d-flex mt-5" style={{ paddingLeft: "15px" }}>
            <div
              className="left-arrow-container"
              onClick={handlePrevButtonClick}
              style={{ marginRight: "100px" }}
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
                    src={EbooksKidsFinalistData[index].imageUrl}
                    className="card-img-top w-50 mx-auto cards-img"
                    alt="Book Cover"
                  />
                  <div
                    className="card-body text-center w-50"
                    style={{ fontSize: "12px" }}
                  >
                    <div className="card-title responsive-text">
                      {EbooksKidsFinalistData[index].title} by{" "}
                      <strong>{EbooksKidsFinalistData[index].author}</strong>
                    </div>

                    <div className="d-flex gap-1 justify-content-center">
                      {Array.from({
                        length: EbooksKidsFinalistData[index].stars,
                      }).map((_, starIndex) => (
                        <i
                          key={starIndex}
                          className="bi bi-star-fill"
                          style={{ color: "gold" }}
                        ></i>
                      ))}
                    </div>
                  </div>
                  {windowWidth >= 1400 && (
                    <button
                      className="quick-add-button-finalist"
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
        <div className=" container text-center mt-5 word-line">
          <span> BS Reads</span>
        </div>
        <div
          className="d-flex justify-content-center mt-5"
          style={{ gap: "50px" }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://www.barnesandnoble.com/blog/wp-content/uploads/2024/01/PROD-28613_FebMostAnticipatedKids_0122-1.jpg?w=340&h=195&crop=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text responsive-paragraph">
                Our Most Anticipated Kids’ Books February 2024
              </p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <i
                  className="bi bi-book-half"
                  style={{ color: "darkblue" }}
                ></i>
                <span
                  className="responsive-paragraph"
                  style={{ color: "green" }}
                >
                  Isabelle McConville
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://www.barnesandnoble.com/blog/wp-content/uploads/2023/10/PROD-27732_MostAnticipated_Kids_Blog_1025.jpg?w=340&h=195&crop=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text responsive-paragraph">
                Our Most Anticipated Kids Books of November/December 2023
              </p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <i
                  className="bi bi-book-half"
                  style={{ color: "darkblue" }}
                ></i>
                <span
                  className="responsive-paragraph"
                  style={{ color: "green" }}
                >
                  Brittany Bunzey
                </span>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://www.barnesandnoble.com/blog/wp-content/uploads/2023/10/PROD-27710_KateDiCamillo_GuestPost_Blog_1010_1488x852.jpg?w=340&h=195&crop=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text responsive-paragraph">
                Writing is About Paying Attention: An Exclusive Guest Post from
                Kate DiCamillo, Author of The Puppets of Spelhorst
              </p>
              <div className="d-flex flex-row justify-content-center gap-2">
                <i
                  className="bi bi-book-half"
                  style={{ color: "darkblue" }}
                ></i>
                <span
                  className="responsive-paragraph"
                  style={{ color: "green" }}
                >
                  Kate DiCamillo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kids;
