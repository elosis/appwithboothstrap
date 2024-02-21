import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export interface CardsResponse {
  id: number;
  Title: string;
  Star: number;
  imageURL: string;
}

const Cards = () => {
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
      title: "The Puppets of Spelhorst",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781536234251_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 5,
      author: "Kate DiCamillo",
      buttonText: "Buy",
    },
    {
      title: "The Wager:A Tale of Shipwreck",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780385534277_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " David Grann",
      buttonText: "Buy",
    },
    {
      title: "The Story of Art Without Men",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780393881875_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Katy Hessel",
      buttonText: "Buy",
    },
    {
      title: "Yellowface: the Eyes from Earth",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063250840_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " R.F.Kuang",
      buttonText: "Buy",
    },
    {
      title: "The Berry Pickers ",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781646221967_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Amanda Peters",
      buttonText: "Buy",
    },
    {
      title: "An Ocean Apart: in Reel Life",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781529086829_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 2,
      author: " Sarah Lee",
      buttonText: "Buy",
    },
    {
      title: "The Creative Act: A Way of Being",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593653425_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Rick Rubin",
      buttonText: "Buy",
    },
    {
      title: "Let Us Descend",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781982104511_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 4,
      author: " Jesmyn Ward",
      buttonText: "Buy",
    },
    {
      title: "Fourth Wing with Birds",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781649374080_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 5,
      author: " Rebecca Yarros",
      buttonText: "Buy",
    },
    {
      title: "The Christmas Postcards",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781529084269_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      stars: 3,
      author: " Karen Swan",
      buttonText: "Buy",
    },
  ];

  const imageTrendingData = [
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781668003121_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Dirty Thirty",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593331354_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Three-Inch Teeth",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780369719300_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "The Summer Book Club",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/2940167280465_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "The Ruthless King",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/2940179414742_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Highlander's Reward",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250178657_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "The Women",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593550410_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Bride",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250289704_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Mind Games",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593725818_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "In Too Deep",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316458238_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Everybody Knows",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593098790_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Dane's Mark",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780061753459_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      text: "Sad Cypress",
    },
  ];

  const navigate = useNavigate();
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

  const [cards, setCards] = useState<CardsResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadingCards = () => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(
          "https://bnorchtyjikvrlcfldnp.supabase.co/rest/v1/Cards?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJub3JjaHR5amlrdnJsY2ZsZG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNzc4MjEsImV4cCI6MjAyMzg1MzgyMX0.7m_uH4BBZTxbYLOhezZiXghClgO6M4kyUtS2nGsfGTI",
            },
          }
        )
        .then((res) => {
          setCards(res.data);
          console.log(res);
        })
        .catch((err) => {
          const error =
            err.response && err.response.status === 404 ? "error" : "no error";
          setError(error);
        });
    };
    getData();
    setLoading(false);
  };

  useEffect(() => {
    loadingCards();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="mt-5">
      <h2 className="h2 text-center">Build your library !</h2>
      <div className="mt-3 mx-auto d-flex gap-5" style={{ maxWidth: "1436px" }}>
        <div className="card " style={{ width: "18rem", border: "none" }}>
          <img
            src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250334206_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
            className="card-img-top w-100"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Gothikana</h5>
            <div className="d-flex gap-1">
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i>
            </div>

            <p className="card-text mt-2">
              The eternal romance of Beauty and the Beast meets the gothic
              suspense of Dracula in this mysterious story centered around a
              love that blossoms in the unlikeliest of places.
            </p>
            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={handleShow}>
                Buy
              </button>
            </div>
          </div>
        </div>
        <div className="container text-center d-flex flex-column gap-4">
          <div className="row">
            {cards?.map((data, i) => (
              <div
                className="card "
                key={i}
                style={{ width: "18rem", border: "none" }}
              >
                <img
                  src={data?.imageURL}
                  alt={data?.Title}
                  className="card-img-top w-50 mx-auto cards-img"
                />
                <div
                  className="card-body"
                  style={{ padding: "12px 12px 0px 12px" }}
                >
                  <h5 className="card-title ">{data?.Title}</h5>
                </div>
                <div className="d-flex gap-1 justify-content-center">
                  {Array.from(
                    { length: Math.floor(data?.Star) },
                    (_, index) => (
                      <i
                        key={`full-${index}`}
                        className="bi bi-star-fill"
                        style={{ color: "gold" }}
                      ></i>
                    )
                  )}
                  {data?.Star % 1 !== 0 && (
                    <i
                      className="bi bi-star-half"
                      style={{ color: "gold" }}
                    ></i>
                  )}
                </div>
                <div className="text-center mb-5  ">
                  <button className="btn btn-primary mt-3" onClick={handleShow}>
                    Buy
                  </button>
                </div>
                {/* Modal */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner mt-5">
          <div className="carousel-item active">
            <img
              src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2024/01/09/28480_Quote_B2_Leigh_Bardugo_01-09.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
              onClick={() => navigate("slidebooksone")}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/12/29/28406_Quote_B3_YABook-Club_AFragileEnchantment_12-29.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
              onClick={() => navigate("slidebookstwo")}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div className="text-center " style={{ marginTop: "100px" }}>
          <h4>For the History Buff</h4>
        </div>
        <div
          className="d-flex justify-content-center mt-5"
          style={{ paddingLeft: "15px" }}
        >
          <div
            className="left-arrow-container"
            onClick={handlePrevButtonClick}
            style={{ marginRight: "85px" }}
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
                  <button className="quick-add-button-cards">QUICK ADD</button>
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

export default Cards;
