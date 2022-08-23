const { Link, NavLink, withRouter } = ReactRouterDOM
import { UserMsg } from './user-msg.jsx';
function _AppHeader(props) {
    return <header className="main-layout">
        <div className="app-header flex align-center clean-list">
            <h3 onClick={() => { props.history.push("/") }}>Wender's Books</h3>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book" activeClassName="my-active">Our Books</NavLink>
            </nav>
        </div>
            <UserMsg />
    </header>
}
export const AppHeader = withRouter(_AppHeader)