import {Link, withRouter} from "react-router-dom";
import React from "react";
import './Header.css'
import {ReactComponent as Burger} from '../assets/burger.svg'
import {ReactComponent as Cancel} from '../assets/cancel.svg'


const Header = props => {

    const [showMenu, setShowMenu] = React.useState(false)

    return (
        <div>
            <div className="nav">
                <h1 className={"logo"} onClick={() => props.history.push("/")}>DeinAdmin</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/donate">Donate</Link>
                </div>
                <div className="burger">
                    <Burger onClick={() => setShowMenu(true)} />
                </div>
            </div>
            <div className="top"/>
            {
                showMenu ? (
                    <Cancel onClick={() => setShowMenu(false)} className="cancel" />
                ) : null
            }
            {
                showMenu ? (
                    <div className="header__modal">
                        <Link onClick={() => setShowMenu(false)} to="/">Home</Link>
                        <Link onClick={() => setShowMenu(false)} to="/projects">Projects</Link>
                        <Link onClick={() => setShowMenu(false)} to="/donate">Donate</Link>
                    </div>
                ) : null
            }
        </div>
    )
}

export default withRouter(Header)