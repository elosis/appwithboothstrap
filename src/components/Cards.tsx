import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export interface CardsResponse {
  id: number;
  Title: string;
  Star: number;
  imageURL: string;
}

const Cards = () => {
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
            <a href="#" className="btn btn-primary">
              Buy
            </a>
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
                <div className="text-center">
                  <a
                    href="#"
                    className="btn btn-primary mt-3 d-inline-block mb-4"
                  >
                    Buy
                  </a>
                </div>
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
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/12/29/28406_Quote_B3_YABook-Club_AFragileEnchantment_12-29.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
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
      <div className="container mt-5">
        <img
          src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/12/26/28405_BB-B_AfterHoliday_12-26.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Cards;
