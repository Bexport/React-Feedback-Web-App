//mainly functional components in modern days
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' //creates a router to a new page like web.com/nextPage the stuff after the slash
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


function App() {   
    //java script XML (html directly into JS)
    //the handle delete is being implemented by something called "Prop Drilling"
    //** UPDATE: WITH THE USE OF CONTEXT, WE DON'T HAVE TO DO PROP DRILLING BECAUSE IT MANGES ALL THE STATES AND FUNCTIONS GLOBALLY IN ONE FILE**/
    //when creating multiple pages, we can use Routes to determine what page we want to go to given the path
    //the default home page is denoted by the '/', based on the implementation I can name it whatever I want
    return (  //returns JSX elements from our react and can only return one parent
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path ='/' element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        </>
                    }> 
                    </Route>

                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
                
                <AboutIconLink />
            </div> 
        </Router>
        </FeedbackProvider>
    )
}

export default App