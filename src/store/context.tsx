import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

export interface CardsResponse {
  id: number;
  newPrice: number;
  oldPrice: number;
  star: number;
  vote: number;
  title: string;
  imageUrl: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  overview: string;
  type: string;
  quantity: number;
}

export interface CarouselResponse {
  id: number;
  newPrice: number;
  oldPrice: number;
  star: number;
  vote: number;
  title: string;
  imageUrl: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  overview: string;
  type: string;
}

export interface BooksResponse {
  id: number;
  newPrice: number;
  oldPrice: number;
  star: number;
  vote: number;
  title: string;
  imageUrl: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  overview: string;
  type: string;
}

interface BasketProps {
  id: number;
  newPrice: number;
  oldPrice: number;
  star: number;
  vote: number;
  title: string;
  imageUrl: string;
  featureOne: string;
  featureTwo: string;
  featureThree: string;
  featureFour: string;
  overview: string;
  type: string;
  quantity: number;
}

export interface EbooksHistoryItem {
  imageUrl: string;
}

export interface BookStoreData {
  cards: CardsResponse[];
  setCards: React.Dispatch<React.SetStateAction<CardsResponse[]>>;
  showConfirmationModal: boolean;
  setShowConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
  orderNumber: string;
  setOrderNumber: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cvv: string;
  setCVV: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  visibleCardIndexes: number[];
  setVisibleCardIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  windowWidth: number;
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>;
  filteredBooks: BooksResponse[];
  setFilteredBooks: React.Dispatch<React.SetStateAction<BooksResponse[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  books: BooksResponse[];
  setBooks: React.Dispatch<React.SetStateAction<BooksResponse[]>>;
  carousel: CarouselResponse[];
  setCarousel: React.Dispatch<React.SetStateAction<CarouselResponse[]>>;
  basketItems: BasketProps[];
  setBasketItems: React.Dispatch<React.SetStateAction<BasketProps[]>>;
  bookShopData: BasketProps[];
  setBookShopData: React.Dispatch<React.SetStateAction<BasketProps[]>>;
}

export interface ContextValue {
  bookStoreData: BookStoreData;
  EbooksHistoryData: EbooksHistoryItem[];
  handleClose: () => void;
  handleConfirmOrder: () => void;
  handleShow: () => void;
  handleNextButtonClick: () => void;
  handlePrevButtonClick: () => void;
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCVVChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseModal: () => void;
  handleBuy: (bookInfo: CardsResponse) => void;
  loadingCards: () => void;
  loadingBooks: () => void;
  loadingCarousel: () => void;
  addToBasket: (item: BasketProps) => void;
  removeFromBasket: (itemId: number) => void;
}

const defaultValue: BookStoreData = {
  searchQuery: "",
  setSearchQuery: () => {},
  showConfirmationModal: false,
  setShowConfirmationModal: () => {},
  orderNumber: "",
  setOrderNumber: () => {},
  filteredBooks: [],
  setFilteredBooks: () => {},
  carousel: [],
  setCarousel: () => {},
  books: [],
  setBooks: () => {},
  basketItems: [],
  setBasketItems: () => {},
  cards: [],
  setCards: () => {},
  bookShopData: [],
  setBookShopData: () => {},
  loading: true,
  setLoading: () => {},
  error: "",
  setError: () => {},
  cardNumber: "",
  setCardNumber: () => {},
  cvv: "",
  setCVV: () => {},
  showModal: false,
  setShowModal: () => {},
  visibleCardIndexes: [],
  setVisibleCardIndexes: () => {},
  windowWidth: window.innerWidth,
  setWindowWidth: () => {},
};

const BookStoreContext = createContext<ContextValue>({
  bookStoreData: defaultValue,
  handleClose: () => {},
  handleConfirmOrder: () => {},
  handleShow: () => {},
  handleNextButtonClick: () => {},
  handlePrevButtonClick: () => {},
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleCVVChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  handleCloseModal: () => {},
  handleBuy: () => {},
  loadingCards: () => {},
  loadingBooks: () => {},
  loadingCarousel: () => {},
  addToBasket: () => {},
  removeFromBasket: () => {},
  EbooksHistoryData: [],
});

const BookStoreLayer = (props: React.PropsWithChildren<{}>) => {
  const [cards, setCards] = useState<CardsResponse[]>([]);
  const [books, setBooks] = useState<BooksResponse[]>([]);
  const [carousel, setCarousel] = useState<CarouselResponse[]>([]);
  const [basketItems, setBasketItems] = useState<BasketProps[]>([]);
  const [bookShopData, setBookShopData] = useState<BasketProps[]>([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState([0, 1, 2, 3, 4]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BooksResponse[]>([]);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const handleNextButtonClick = () => {
    const nextIndexes = visibleCardIndexes.map(
      (index) => (index + 1) % EbooksHistoryData.length
    );
    setVisibleCardIndexes(nextIndexes);
  };

  const handlePrevButtonClick = () => {
    const prevIndexes = visibleCardIndexes.map(
      (index) =>
        (index - 1 + EbooksHistoryData.length) % EbooksHistoryData.length
    );
    setVisibleCardIndexes(prevIndexes);
  };

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
    setShowModal(false);
  };

  const handleConfirmOrder = () => {
    const randomOrderNumber = generateOrderNumber();
    setOrderNumber(randomOrderNumber);
    setShowModal(false);
    setShowConfirmationModal(true);
  };

  const generateOrderNumber = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 8;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleBuy = (bookInfo: CardsResponse) => {
    addToBasket(bookInfo);
    console.log(basketItems);
  };

  const addToBasket = (item: BasketProps) => {
    setBasketItems([...basketItems, item]);
  };

  const removeFromBasket = (itemId: number) => {
    setBasketItems(basketItems.filter((item) => item.id !== itemId));
  };

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

  const loadingBooks = () => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(
          "https://sfvmzovrujwtnthorsww.supabase.co/rest/v1/Books?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdm16b3ZydWp3dG50aG9yc3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTA2ODQsImV4cCI6MjAyNDM2NjY4NH0.yQr7ifZsyEBxhcAYGkMuP7CnAiOmq1kQ_93ZWqB45jc",
            },
          }
        )
        .then((res) => {
          setBooks(res.data);
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

  const loadingCarousel = () => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(
          "https://sfvmzovrujwtnthorsww.supabase.co/rest/v1/MainPage?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdm16b3ZydWp3dG50aG9yc3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTA2ODQsImV4cCI6MjAyNDM2NjY4NH0.yQr7ifZsyEBxhcAYGkMuP7CnAiOmq1kQ_93ZWqB45jc",
            },
          }
        )
        .then((res) => {
          setCarousel(res.data);
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

  const EbooksHistoryData: EbooksHistoryItem[] = [
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780735224117_p0_v77%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063356979_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780553393989_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780143110637_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316441094_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780671447540_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250257673_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780525575337_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063212916_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
    {
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780671447540_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    },
  ];

  const bookStoreData: BookStoreData = {
    showConfirmationModal,
    setShowConfirmationModal,
    orderNumber,
    setOrderNumber,
    bookShopData,
    setBookShopData,
    basketItems,
    setBasketItems,
    searchQuery,
    setSearchQuery,
    filteredBooks,
    setFilteredBooks,
    carousel,
    setCarousel,
    books,
    setBooks,
    cards,
    setCards,
    loading,
    setLoading,
    error,
    setError,
    cardNumber,
    setCardNumber,
    cvv,
    setCVV,
    showModal,
    setShowModal,
    visibleCardIndexes,
    setVisibleCardIndexes,
    windowWidth,
    setWindowWidth,
  };

  const data: ContextValue = {
    addToBasket,
    removeFromBasket,
    bookStoreData,
    handleClose,
    handleConfirmOrder,
    handleShow,
    handleNextButtonClick,
    handlePrevButtonClick,
    handleCardNumberChange,
    handleCVVChange,
    handleCloseModal,
    handleBuy,
    loadingCards,
    loadingBooks,
    loadingCarousel,
    EbooksHistoryData,
  };

  return (
    <BookStoreContext.Provider value={data}>
      {props.children}
    </BookStoreContext.Provider>
  );
};

export { BookStoreContext, BookStoreLayer, useContext };
