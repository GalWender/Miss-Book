import { ReviewAdd } from "../cmps/review-add.jsx"
import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"
const  { Link } = ReactRouterDOM
export class BookDetails extends React.Component {

    state = {
        book: null,
        reviews:[]
    }

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        bookService.getBookById(bookId)
            .then((book) => {
                if (!book) return this.onGoBack()
                this.setState({ book })
            })
    }

    onSubmitReview = (review) => {
        const { bookId } = this.props.match.params
            bookService.addReview(bookId, review)
                .then(() => 
                this.loadBook())
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }


    getPageCount = () => {
        const { book } = this.state
        if (book.pageCount < 100) return `Light Reading of ${book.pageCount} pages`
        else if (book.pageCount > 200) return `Decent Reading of ${book.pageCount} pages`
        else if (book.pageCount > 500) return `Long Reading of ${book.pageCount} pages`
        else { return `${book.pageCount} pages` }
    }

    getPublishDate = () => {
        const { book } = this.state
        const date = new Date().getFullYear()
        if (date - book.publishedDate > 10) return 'Veteran Book'
        else if (date - book.publishedDate < 1) return 'New!'
        else { return `${book.publishedDate} years old!` }
    }

    getClassName = () => {
        const { book } = this.state
        const price = book.listPrice.amount
        if (price > 150) return 'red'
        else if (price < 20) return 'green'
        else { return '' }
    }

    getIsOnSale = () => {
        const { book } = this.state
        const isOnSale = book.listPrice.isOnSale
        if (isOnSale) return 'Is On Sale!'
        else { return '' }
    }



    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>
        const {reviews} = this.state.book
        console.log(book)
        const nextBookId = bookService.getNextBookId(book.id)
        const prevBookId = bookService.getPrevBookId(book.id)

        return <section className="book-details">
            <h3>{book.title}</h3>
            <h4>{book.subtitle}</h4>
            <div>
                <img src={book.thumbnail} alt="" />
            </div>
            <p>{book.description}</p>
            <h4 className={this.getClassName()}>Price: {utilService.getPrice(book.listPrice.currencyCode, book.listPrice.amount)}</h4>
            <h4>{this.getPageCount()}</h4>
            <h4>{this.getPublishDate()}</h4>
            <h4>{this.getIsOnSale()}</h4>
            <ReviewAdd onSubmitReview={this.onSubmitReview} />
            {reviews.map(review => 
            <div key={review.name} className="review-box">
                <h4>Name:{review.name}</h4>
                <h4>Date:{review.date}</h4>
                <h4>Rating:{review.rating}</h4>
                <h4>Message:{review.msg}</h4>
            </div>
                )}
                <div className="pages-btn">
                <Link to={`/book/${prevBookId}`}><button>Previous Book</button></Link>
                <Link to={`/book/${nextBookId}`}><button>Next Book</button></Link>
                </div>
            <button onClick={this.onGoBack}>Go Back!</button>
        </section>
    }
}