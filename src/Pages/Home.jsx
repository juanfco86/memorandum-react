import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.png'

const Home = () => {
    return (
        <>
            <h2>Popular Titles</h2>
            <div className='container--home'>
                <div className='container--home__series'>
                    <Link className='link--style__home' to='/series'>
                        <div className='card--home'>
                            <img src={ placeholder } alt='placeholder series' />
                            <p>SERIES</p>
                        </div>
                        <h6>Popular Series</h6>
                    </Link>
                </div>
                
                <div className='container--home__films'>
                    <Link className='link--style__home' to='/movies'>
                        <div className='card--home'>
                            <img src={ placeholder } alt='placeholder movies' />
                            <p>MOVIES</p>
                        </div>
                        <h6>Popular Films</h6>
                    </Link>
                </div>  
            </div>

        </>
    )
}

export default Home