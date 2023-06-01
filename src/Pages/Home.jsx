import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <h2>Popular Titles</h2>
            <div className='container--home'>
                <div className='container--home__series'>
                    <Link to='/series'>
                        <h6>Popular Series</h6>
                    </Link>
                </div>
                <div className='container--home__films'>
                    <Link to='/films'>
                        <h6>Popular Films</h6>
                    </Link>
                </div>  
            </div>

        </>
    )
}

export default Home