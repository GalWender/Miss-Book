
import { utilService } from "../services/util.service.js"
export class ReviewAdd extends React.Component {

    state = {
        review: {
            date: null,
            name: null,
            rating: null,
            msg: ''
        }
    }

    componentDidMount() {
        if(this.state.review.date===null){
            this.setState((prevState) => ({
                review: { ...prevState.review, date: this.dateSubmit() }
            }))
        }
    }

    inputRef = React.createRef()

    dateSubmit = () => {
        const date = new Date()
        return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    submit = (ev) => {
        ev.preventDefault()
        this.props.onSubmitReview(this.state.review)
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            review: { ...prevState.review, [field]: value }
        }))
    }

    render() {
        return <section className="review-add">
            <form className="review-form" onSubmit={this.submit}>
                <input onChange={this.handleChange} placeholder='Name...' type="text" name='name' />
                <div className="star-rating">
                    <div className="star-input">
                        <input onChange={this.handleChange} type="radio" value={5} name="rating" id="rating-5" />
                        <label htmlFor="rating-5" className="fas fa-star"></label>
                        <input onChange={this.handleChange} type="radio" value={4} name="rating" id="rating-4" />
                        <label htmlFor="rating-4" className="fas fa-star"></label>
                        <input onChange={this.handleChange} type="radio" value={3} name="rating" id="rating-3" />
                        <label htmlFor="rating-3" className="fas fa-star"></label>
                        <input onChange={this.handleChange} type="radio" value={2} name="rating" id="rating-2" />
                        <label htmlFor="rating-2" className="fas fa-star"></label>
                        <input onChange={this.handleChange} type="radio" value={1} name="rating" id="rating-1" />
                        <label htmlFor="rating-1" className="fas fa-star"></label>
                    </div>
                </div>
                <textarea name="msg" onChange={this.handleChange} rows="4" cols="50" />
                <button className="submit-rating">Submit</button>
            </form>
        </section>
    }
}