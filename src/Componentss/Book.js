import "./Book.css";

function Book(props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                props.book.imageLinks && props.book.imageLinks.thumbnail
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              className="shelf"
              value={props.currentShelf}
              onChange={(e) => {
                props.changeShelf(props.book, e.currentTarget.value);
              }}
            >
              <option value="chooseShelf" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          {props.book.authors && props.book.authors.join(" ")}
        </div>
      </div>
    </li>
  );
}

export default Book;
