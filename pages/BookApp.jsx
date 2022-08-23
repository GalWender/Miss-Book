import { BookList } from '../cmps/book-list.jsx'
import { bookService } from '../services/book.service.js'
import { BookFilter } from '../cmps/book-filter.jsx'
import { AddBook } from './add-book.jsx'

const { Link, NavLink, withRouter } = ReactRouterDOM
export class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null,
        // selectedBook:null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filterBy)
            .then((books) => this.setState({ books }))
    }

    // onSelectBook = (bookId) => {
    //     bookService.getBookById(bookId)
    //     .then(book => this.setState({selectedBook:book},()=>{
    //         console.log(this.state.selectedBook)
    //     }))
    // }

    // onUnSelectBook = () => {
    //     this.setState({selectedBook:null})
    // }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => {
            this.loadBooks()
        })
    }

    onSetAddBook = (book) => {
        bookService.addBook(book)
        this.loadBooks()
    }

    render() {
        const { books, selectedBook } = this.state

        return (
            <section className='book-app'>
                {/* {!selectedBook&&<BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />}
                {!selectedBook &&<BookList onSelectBook={this.onSelectBook} books={books} />}
                {selectedBook &&<BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} />} */}
                {/* <Link to="/add"><button>Add Book</button></Link> */}
                <AddBook onSetAddBook={this.onSetAddBook} />
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} />
            </section>
        )
    }
}
