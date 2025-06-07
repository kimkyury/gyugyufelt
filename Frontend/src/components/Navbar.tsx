import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="text-xl; font-bold text-gray-800">
                        규규펠트
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-t items-center">
                        <Link to="/masking" className="hover:text-primary">도안</Link>
                        <Link to="/community" className="hover:text-primary">커뮤니티</Link>
                        <Link to="/mypage" className="hover:text-primary">마이페이지</Link>
                        <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm">로그인</button>
                    </div>

                    {/* Mobile Menu Button, 좁은 영역일 때*/}
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        <Link to="/masking" className="block">도안</Link>
                        <Link to="/community" className="block">커뮤니티</Link>
                        <Link to="/mypage" className="block">마이페이지</Link>
                        <button className="w-full py-2 bg-primary text-white rounded-lg text-sm">로그인</button>

                    </div>
                )}
            </div>
        </nav >




    )

}