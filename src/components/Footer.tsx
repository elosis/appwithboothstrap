import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  const [isReadMoreVisible, setReadMoreVisible] = useState(false);

  const toggleReadMore = () => {
    setReadMoreVisible(!isReadMoreVisible);
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "1436px", marginTop: "100px" }}>
      <h2 className="h-2">
        <em>Get to Know Bookstore</em>
      </h2>
      <div className="mx-auto mt-4" style={{ maxWidth: "800px" }}>
        <h5 className="h-5">
          Buy Books Online at bookstore.com, America’s Favorite Bookstore
        </h5>
        <p className="text-center">
          No matter what you’re a fan of, from Fiction to Biography, Sci-Fi,
          Mystery, YA, Manga, and more, Barnes & Noble has the perfect book for
          you. Shop bestselling books from the NY Times Bestsellers list, or get
          personalized recommendations to find something new and unique!
          Discover kids books for children of all ages including classics like
          Dr. Seuss to modern favorites like the Dog Man series.
        </p>
      </div>
      <div className="accordion" id="accordionExample">
        <div>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse${
              isReadMoreVisible ? " show" : ""
            }`}
            data-bs-parent="#accordionExample"
            style={{ transition: "height 0.5s ease" }}
          >
            <div className="accordion-body ">
              <h5>Find a Bookstore Near Me</h5>
              <p>
                Bookstore has over 600 stores throughout the United States. Find
                a bookstore near you using our store locator. You can also find
                information on curbside pickup, store events (and virtual
                events), store hours, Bookstore Café menus and more.
              </p>
            </div>
            <div className="accordion-body border-top">
              <h5>
                eBooks Delivered Straight to your NOOK Device or Mobile NOOK
                App.
              </h5>{" "}
              <p>
                Reading on the go has never been easier with our convenient NOOK
                eReaders and tablets. Download eBooks and read them on our free
                NOOK app for both Apple and Android devices. Browse millions of
                titles to read anywhere, anytime. Shop eBooks on a budget in our
                eBooks Under $2.99 collection or current best sellers in our Top
                100 eBooks collection. We also have a large selection of books
                by indie authors. Buy the NOOK GlowLight 4 for seamless
                day-to-night reading, or the latest NOOK tablet for endless
                options at your fingertips.
              </p>
            </div>
            <div className="accordion-body border-top">
              <h5>
                Buy Audiobooks and Listen Anytime, Anywhere with our Bookstore
                NOOK App.
              </h5>{" "}
              <p>
                Listening to audiobooks has never been better with B&N
                Audiobooks. Subscribe today and get started with your free
                audiobook or purchase books anytime without a subscription.
                Browse over 300,000 new releases, bestsellers, classics and
                more! Discover the best audiobooks to listen to now, while
                you’re driving, walking, or for your next family road trip.
                Listen to audiobooks read by your favorite authors or popular
                celebrity narrators anytime, anywhere on the free Bookstore NOOK
                App.
              </p>
            </div>
            <div className="accordion-body border-top">
              <h5>Your Destination for Movies, Music, Toys and More!</h5>{" "}
              <p>
                We’re more than just a bookstore; find all of the best toys,
                puzzles, music, movies and collectibles at Barnes & Noble. From
                popular LEGO sets to the latest board games, we carry a wide
                selection of toys for the entire family. Music fans can enjoy
                our vinyl store including best-selling records, turntables, and
                B&N exclusive vinyl, while movie and TV fans can find all their
                favorites including boxed sets of the latest TV series, classics
                and new releases on Blu-Ray, or a variety of the greatest movies
                from around the world in the Criterion collection
              </p>
            </div>
            <div className="accordion-body border-top">
              <h5>
                Become a Bookstore Member for Exclusive Deals and Free Shipping
                Online.
              </h5>{" "}
              <p>
                You love reading? We do too! Sign up to become a Bookstore
                member for exclusive in-store discounts, free shipping, and
                more.
              </p>
            </div>
          </div>
          <h2 className="accordion-header w-25 mx-auto">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded={isReadMoreVisible ? "true" : "false"}
              aria-controls="collapseOne"
              style={{ backgroundColor: "white" }}
              onClick={toggleReadMore}
            >
              <span className="mx-auto text-center">
                {isReadMoreVisible ? "Read Less" : "Read More"}
              </span>
            </button>
          </h2>
        </div>
      </div>
      <div className="d-flex border-top mt-5">
        <div className="d-flex footer-list w-75">
          <table className="table d-flex flex-column">
            <th>BOOKSTORE SERVICES</th>
            <td>Affiliate Program</td>
            <td>Publisher & Author Guidelines</td>
            <td>Bulk Order Discounts</td>
            <td>Bookstore Mobile Apps</td>
            <td>Bookstore Membership</td>
            <td>Bookstore Mastercard</td>
            <td>Bookstore Bookfairs</td>
            <td>Bookstore Press</td>
          </table>
          <table className="table d-flex flex-column">
            <th>ABOUT US</th>
            <td>About Bookstore</td>
            <td>Careers at Bookstore</td>
            <td>Bookstore, Inc.</td>
            <td>Bookstore Kitchen</td>
          </table>
          <table className="table d-flex flex-column">
            <th>QUICK HELP</th>
            <td>Help Center</td>
            <td>Covid Safety</td>
            <td>Shipping & Returns</td>
            <td>Store Pickup</td>
            <td>Order Status</td>
            <td>Product Recalls</td>
            <td>Corrections & Updates</td>
            <td>Gift Cards</td>
          </table>
          <table className="table d-flex flex-column">
            <th>SHOP BY CATEGORY</th>
            <td>Books</td>
            <td>Fiction</td>
            <td>Nonfiction</td>
            <td>Kids</td>
            <td>Teens & YA</td>
            <td>eBooks</td>
            <td>Audiobooks</td>
            <td>NOOK Tablets & eReaders</td>
          </table>
        </div>
        <div>
          <span className="footer-list">
            <strong>FOLLOW US</strong>
            <div className="d-flex gap-3" style={{ fontSize: "32px" }}>
              <i className="bi bi-facebook" />
              <i className="bi bi-twitter-x" />
              <i className="bi bi-instagram" />
              <i className="bi bi-pinterest" />
              <i className="bi bi-tiktok" />
              <i className="bi bi-youtube" />
            </div>
          </span>
        </div>
      </div>
      <div className="mt-3 border-top end-footer-list d-flex ">
        <div className="d-flex gap-3 w-75 mt-2">
          <td>Terms Of Use</td>
          <td>Copyright & Trademark</td>
          <td>Privacy</td>
          <td>Do Not Sell My Personal Information</td>
          <td>Accessibility</td>
          <td>Cookie Policy</td>
          <td>Sitemap</td>
        </div>
        <div className="mt-2 d-flex flex-column">
          <span>©1997-2024 Bookstore Booksellers, Inc.</span>
          <span className="mt-1">23 East 7th Street, New York, NY 10023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
