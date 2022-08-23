import { utilService } from "../services/util.service.js"
const {Link} = ReactRouterDOM
export function BookPreview({ book }) {
    
    return <Link to={"/book/"+ book.id}>
    <article className="book-preview, main-layout">
        <h3>{book.title}</h3>
        <div className="img-container">
            <img src={book.thumbnail} alt="" />
        </div>
        {/* <h4>Price: {utilService.getPrice(book.listPrice.currencyCode,book.listPrice.amount)}</h4> */}
    </article>
    </Link>
}