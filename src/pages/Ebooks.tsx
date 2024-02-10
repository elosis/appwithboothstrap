import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Ebooks = () => {
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
      <div className=" container text-center mt-5 word-line">
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
            {windowWidth >= 1400 && (
              <button className="quick-add-button-nook">QUICK ADD</button>
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
        <div className="text-center mt-5 word-line">
          <span> 2023 Book of the Year Finalists</span>
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
                  <button className="quick-add-button-finalist">
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
      <div className="container">
        <div className="text-center mt-5 word-line">
          <span> Trending Subjects</span>
        </div>
        <div className="image-grid text-center">
          {imageTrendingData.map((image, index) => (
            <div key={index} className="border">
              <div className="image-text mt-3">{image.text}</div>
              <img
                src={image.imageUrl}
                alt={image.text}
                className="w-50 mt-2 mb-3"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container border mt-5">
        <p>
          Welcome to the NOOK® bookstore, where you'll find a vast selection of
          eBooks to satisfy your love of reading.
        </p>
        <h5>Benefits of eBooks</h5>
        <p>
          There are many benefits to owning and reading an eBook compared to a
          print book. Some of the main benefits are accessibility, portability,
          convenience, personalization, and privacy.
        </p>
        <ul>
          <li>
            Accessibility – you can instantly purchase and download eBooks in
            the palm of your hands.
          </li>
          <li>
            Portability – eBooks can go wherever you go, since they can be read
            on your phone or tablet.
          </li>
          <li>
            Convenience – you can add notes, highlights, bookmarks, and look up
            words directly on your eBook, which is especially great when you’re
            reading a guide, textbook, or workbook.
          </li>
          <li>
            Personalization – You can adjust the brightness of your screen, font
            size, and more.
          </li>
          <li>
            Privacy – You can read without others seeing what book you've chosen
            while commuting or while in public.
          </li>
        </ul>
        <h5>Find Free eBooks</h5>
        <p>
          Another exciting benefit of eBooks is that you can find many free
          books to read! From a great collection of free fiction and non-fiction
          eBooks to free eBooks for toddlers and kids, we have a wide array of
          free books to download. For literary buffs, we have a great collection
          of classic literature from critically acclaimed authors, completely
          free to read. You can find great literary works by writers like George
          Orwell, Oscar Wilde, Charlotte Brontë, Mark Twain, Jane Austen,
          Charles Dickens, and Alexandre Dumas at no cost. There’s also a
          tantalizing selection of series that you can start for free! If you're
          in the mood for light reading, be sure to explore a great collection
          of free magazines. Plus, all of our digital magazines come with a free
          14-day trial!
        </p>
        <h5>eBooks for Kids</h5>
        <p>
          Growing kids can go through more books than parents can keep up with.
          You may want to switch over to eBooks for a convenient and fast
          experience. You won’t have to worry about packing the rights books or
          forgetting the books when going on a trip. eBooks are also great
          because they don’t weigh down your bag. There’s a wide variety of
          children's eBooks to choose from. Browse kid’s fiction eBooks,
          educational workbooks, history eBooks, picture eBooks, read-along
          eBooks, and more. Kids are ingesting new concepts and words at an
          incredible speed when reading, so it’s great to read on an eBook
          because kids can directly look up words, highlight words and phrases
          that they don’t understand or ones that resonate with them, and take
          notes to improve their reading skills. Shop a wide variety of eBooks
          for kids at Barnes & Noble
        </p>
        <h5>Explore a Wide Variety of Genres</h5>
        <p>
          Escape into a classic eBook, find love in digital romance novels, or
          get lost in a different world with some of our popular genres
          including science-fiction & fantasy, manga, Christian fiction,
          mystery, and more. There’s also a unique selection of eBooks that you
          can’t easily find in print books, like books from indie authors,
          self-published authors, and books in a foreign language. You can
          conveniently find these eBooks on your NOOK app or on
          barnesandnoble.com. Discover eBooks for adults, teens, and kids of all
          ages.
        </p>
      </div>
      <p className="mt-5">
        *Digital Audiobook subscriptions and Digital Audiobooks purchased with
        credits excluded.
      </p>
    </div>
  );
};

export default Ebooks;
