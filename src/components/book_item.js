import Card from 'react-bootstrap/Card';
function Book_Item(props){

    return(
        <div>
            <Card>
                <Card.Header>{props.myBooks.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBooks.thumbnailUrl}></img>
                        <footer className="blockquote-footer">
                            {props.myBooks.authors[0]}            
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Book_Item;