import { useState } from "react";
import { Container } from "../shared/Container";
import logo from '../../assets/logo.png';
import { NavItem } from "../shared/NavItem";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "/#", text: "Home", type: "section" },
  { href: "/#services", text: "Services", type: "section" },
  { href: "/#about-us", text: "About Us", type: "section" },
  { href: "/projects", text: "Projects", type: "link" },
  { href: "/contact", text: "Contact Us", type: "link" },
] as const;

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <header className="relative flex z-50 py-4 bg-body">
            <Container>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <img src={logo} alt="Portfolio Website" className="w-32 h-auto object-cover" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex gap-6 items-center">
                        <ul className="flex gap-4 text-lg text-heading-2 items-center">
                            {navItems.map((item, key) => (
                                <li key={key}>
                                    <NavItem href={item.href} text={item.text} type={item.type} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hamburger button (visible on mobile) */}
                    <div className="flex items-center gap-3">
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-[#685FB1]/50 text-heading-2">
                            {theme === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            )}
                        </button>

                        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 focus:outline-none lg:hidden">
                            <svg className="w-6 h-6" fill="white" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                {isMobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Nav Sidebar */}
                     <div onClick={() => setIsMobileOpen(false)}
                        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-body z-40 transition-transform duration-300 ease-in-out transform ${isMobileOpen ? "translate-x-0" : "translate-x-full" } flex flex-col items-right justify-right shadow-lg lg:hidden`}>
                        <ul className="flex flex-col items-right gap-3 text-xl text-heading-2 mx-5 my-5">
                            {navItems.map((item, key) => (
                                <li key={key}>
                                    <NavItem href={item.href} text={item.text} type={item.type} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Backdrop */}
                    {isMobileOpen && (
                        <div
                            className="fixed bg-body bg-opacity-10 z-30 lg:hidden"
                            onClick={() => setIsMobileOpen(false)}
                        />
                    )}
                </nav>
            </Container>
        </header>
    );
};
