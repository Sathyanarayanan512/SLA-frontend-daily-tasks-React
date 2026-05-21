import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import UsersPage from './UsersPage';

function Links(){
    return (
        <>
            <nav>
                <Link to={'/'}>HOME</Link>{' | '}
                <Link to={'/about'}>ABOUT</Link>{' | '}
                <Link to={'/users/1/Sathya'}>USERS</Link>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/users/:id/:name' element={<UsersPage/>}/>
            </Routes>
        </>
    )
}

export default Links;