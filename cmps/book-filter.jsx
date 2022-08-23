
export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: ''
        },
    }


    inputRef = React.createRef()

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: value
            }
        }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    goSearch = () => {
        this.inputRef.current.focus()
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const {title,minPrice,maxPrice} = this.state.filterBy
        return <section className="book-filter main-layout">
            <form onSubmit={this.onFilter}>
                <label htmlFor="by-title">Title :</label>
                <input
                    ref={this.inputRef}
                    type="text"
                    placeholder="By Title"
                    id="by-title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                />

                <label htmlFor="by-min-price">Min Price :</label>
                <input
                    type="number"
                    placeholder="By Min Price.."
                    id="by-min-price"
                    name="minPrice"
                    value={minPrice}
                    onChange={this.handleChange}
                />
                <label htmlFor="by-max-price">Max Price :</label>
                <input
                    type="number"
                    placeholder="By Max Price.."
                    id="by-max-price"
                    name="maxPrice"
                    value={maxPrice}
                    onChange={this.handleChange}
                />
            </form>
            <button className="search-btn" onClick={this.goSearch}>Go Search!</button>

        </section>
    }
}