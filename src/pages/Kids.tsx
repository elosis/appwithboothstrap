import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Kids = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);

    setCardNumber(formattedValue);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.slice(0, 3);

    setCVV(formattedValue);
  };

  const handleCloseModal = () => {
    setCardNumber("");
    setCVV("");
    handleClose();
  };

  const handleBuy = () => {
    setCardNumber("");
    setCVV("");
    handleClose();
  };

  const EbooksFinalistData = [
    {
      title: "The Wrath of the Triple Goddess",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368112383_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 5,
      author: "Rick Jordan",
    },
    {
      title: "The Chalice of the Gods",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368099370_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Rick Riordan",
    },
    {
      title: "The Battle of the Labyrinth",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368051460_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 3,
      author: " Rick Riordan",
    },
    {
      title: "The Ligthning Thief (Percy Jackson)",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368051477_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 5,
      author: " Rick Riordan",
    },
    {
      title: "Simon Sort of Says: Award Winner",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368082853_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Erin Bow",
    },
    {
      title: "The Mona Lisa Vanishes",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593643846_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Nicholas Day",
    },
    {
      title: "Eagle Drums",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250750655_p0_v7%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 5,
      author: " Nasuğraq Eainey Hopson",
    },
    {
      title: "Fox Has a Problem",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063277922_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 2,
      author: " Corey R.Tabor",
    },
    {
      title: "Alebrijes",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781646142637_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 3,
      author: "Donna Barba Higuera",
    },
    {
      title: "The Heroes of Olympus",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781368053099_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 3,
      author: " Rick Riordan",
    },
  ];

  const [visibleCardIndexes, setVisibleCardIndexes] = useState([0, 1, 2, 3, 4]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleCardIndexes.map(
      (index) => (index + 1) % EbooksFinalistData.length
    );
    setVisibleCardIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleCardIndexes.map(
      (index) =>
        (index - 1 + EbooksFinalistData.length) % EbooksFinalistData.length
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
            <Modal
              show={showModal}
              onHide={handleCloseModal}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Enter Card Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Form inputs for card information */}
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Joe"
                  />
                </div>
                <div className="form-group">
                  <label>Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doe"
                  />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXX"
                    value={cvv}
                    onChange={handleCVVChange}
                  />
                </div>
                {/* Add more inputs as needed */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleBuy}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
            {windowWidth >= 1200 && (
              <button className="quick-add-button-winner" onClick={handleShow}>
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
                  src={EbooksFinalistData[index].imageUrl}
                  className="card-img-top w-50 mx-auto cards-img"
                  alt="Book Cover"
                />
                <div
                  className="card-body text-center w-50"
                  style={{ fontSize: "12px" }}
                >
                  <div className="card-title">
                    {EbooksFinalistData[index].title} by{" "}
                    <strong>{EbooksFinalistData[index].author}</strong>
                  </div>

                  <div className="d-flex gap-1 justify-content-center">
                    {Array.from({
                      length: EbooksFinalistData[index].stars,
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
            <p className="card-text">
              Our Most Anticipated Kids’ Books February 2024
            </p>
            <div className="d-flex flex-row justify-content-center gap-2">
              <i className="bi bi-book-half" style={{ color: "darkblue" }}></i>
              <span style={{ color: "green" }}>Isabelle McConville</span>
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
            <p className="card-text">
              Our Most Anticipated Kids Books of November/December 2023
            </p>
            <div className="d-flex flex-row justify-content-center gap-2">
              <i className="bi bi-book-half" style={{ color: "darkblue" }}></i>
              <span style={{ color: "green" }}>Brittany Bunzey</span>
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
            <p className="card-text">
              Writing is About Paying Attention: An Exclusive Guest Post from
              Kate DiCamillo, Author of The Puppets of Spelhorst
            </p>
            <div className="d-flex flex-row justify-content-center gap-2">
              <i className="bi bi-book-half" style={{ color: "darkblue" }}></i>
              <span style={{ color: "green" }}>Kate DiCamillo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kids;
