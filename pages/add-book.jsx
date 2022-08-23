import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
export class AddBook extends React.Component {
    state = {
        searches: []
    }

    getBooksApiFrom = (ev) => {
        ev.preventDefault()
        bookService.getBooksFromApi(ev.target[0].value)
            .then(res => {
                this.setState({ searches: res })
            })
    }

    AddBookFromApi = (book) => {
        this.props.onSetAddBook(book)
        showSuccessMsg(`Added Book ${book.title} Successfully`)
    }


    render() {
        const { searches } = this.state
        return <section className="add-book">
            <form className="add-book-form" onSubmit={this.getBooksApiFrom}>
                Add Book: <input type="text" name="search" />
                <ul>
                    {searches.length > 0 && searches.map(search =>
                        <li onClick={() => this.AddBookFromApi(search)} key={search.id}>{search.title}</li>
                    )}
                </ul>
                <button>Submit</button>

            </form>
        </section>
    }
}



