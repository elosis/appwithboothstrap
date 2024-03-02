import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Book {
  id: number;
  title: string;
}

interface SearchResultsProps {
  filteredBooks: Book[];
  handleBookClick: (bookId: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  filteredBooks,
  handleBookClick,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Filtered books:", filteredBooks);
  }, [filteredBooks]);

  return (
    <div className="dropdown-menu show mt-1">
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          className="dropdown-item"
          onClick={() => {
            handleBookClick(book.id);
            navigate(`/detailedPages/${book.id}`); //
          }}
        >
          {book.title}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
