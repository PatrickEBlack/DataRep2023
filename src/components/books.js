import Book_Item from "./book_item";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <Book_Item myBooks={book} key={book.ispn}></Book_Item>
        }
    );   
}
export default Books;