import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/about.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { Home } from './pages/home.jsx'
// import { AddBook } from './pages/add-book.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <Switch>
                <Route path="/book/:bookId" component={BookDetails} />
                {/* <Route path="/add" component={AddBook}/> */}
                <Route path="/book" component={BookApp} />
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>

        </section>
    </Router>
}