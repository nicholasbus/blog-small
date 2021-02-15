

const Header = () => {
    return (
        <header className="h-16 flex shadow-2xl bg-black text-xl text-white p-4 items-center">
            <h1 >Above and Beyond Blog</h1>
            <nav className="ml-5 mr-1 flex-grow flex justify-end">
                <a href="#" 
                    className="w-32 h-8 bg-gray-50 text-black text-center rounded-xl m-4">
                    Sign Up
                </a>
                <a href="#" 
                    className="w-32 h-8 bg-gray-50 text-black text-center rounded-xl m-4">
                    Login
                </a>
            </nav>
        </header>
    )
}

export default Header
