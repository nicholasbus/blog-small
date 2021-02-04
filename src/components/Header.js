

const Header = () => {
    return (
        <header className="h-16 flex bg-black text-xl text-white p-4 items-center">
            <h1 >Above and Beyond Blog</h1>
            <nav className="ml-5 mr-1 flex-grow flex justify-around">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Sign Up</a>
                <a href="#">Login</a>
            </nav>
        </header>
    )
}

export default Header
