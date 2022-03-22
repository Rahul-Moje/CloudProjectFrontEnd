import './Header.css';
import Button from '@material-ui/core/Button';

function Header() {
    return (

        <header className='protoHeader'>
            <div className='logo-name clickable'>
                <div className='app-name'>Bookaholic</div>
                <Button variant="contained" color="primary">
                    Logout
                </Button>
            </div>

        </header>

    );
}

export default Header;
