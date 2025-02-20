import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-[#10B981] text-[44px] font-bold">MixMaster</h1>
            <nav>
                <Link
                    to="/"
                    className="text-[16px] hover:text-[#10B981] mr-4"
                >
                    Home
                </Link>
                <Link
                    to="/About"
                    className="text-[16px] hover:text-[#10B981] mr-4"
                >
                    About
                </Link>
                <Link
                    to="/Newsletter"
                    className="text-[16px] hover:text-[#10B981]"
                >
                    Newsletter
                </Link>
            </nav>
        </section>
    );
}

export default Header;
