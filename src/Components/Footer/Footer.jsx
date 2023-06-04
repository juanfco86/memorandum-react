import { Link } from "react-router-dom"
import { ReactComponent as FacebookLogo } from '../../assets/social/facebook-white.svg'
import { ReactComponent as InstagramLogo } from '../../assets/social/instagram-white.svg'
import { ReactComponent as TwitterLogo } from '../../assets/social/twitter-white.svg'
import { ReactComponent as WindowsStore } from '../../assets/store/windows-store.svg'
import { ReactComponent as PlayStore } from '../../assets/store/play-store.svg'
import { ReactComponent as AppleStore } from '../../assets/store/app-store.svg'

const Footer = () => {
    return (
        <div className="container--footer">
            <div className="container--footer__links">
                <Link className='link--style' to='/'>Home | </Link>
                <Link className='link--style' to='/'>Terms and Conditions | </Link>
                <Link className='link--style' to='/'>Privacy Policy | </Link>
                <Link className='link--style' to='/'>Collection Statement | </Link>
                <Link className='link--style' to='/'>Help | </Link>
                <Link className='link--style' to='/'>Manage Account</Link>
            </div>
            <p className="footer--copyright">Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
            <div className="container--footer__icons">
                <div className="container--footer__logos">
                    <FacebookLogo className="footer--logo" />
                    <TwitterLogo className="footer--logo" />
                    <InstagramLogo className="footer--logo" />
                </div>
                <div className="container--footer__stores">
                    <AppleStore className="footer--store" />
                    <PlayStore className="footer--store" />
                    <WindowsStore className="footer--store" />
                </div>
            </div>
        </div>
    )
}

export default Footer