import Book_Item from "./book_item";

function Books(props){

    //This code generates a list of Book_Item components for each book in the props.myBooks array with a unique key
    return props.myBooks.map(
        (book)=>{
            return <Book_Item myBooks={book} key={book.ispn}></Book_Item>
        }
    );   
}
export default Books;