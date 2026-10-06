
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
{ name: "Home", path: "/" },
{ name: "Guides", path: "/guides" },
{ name: "Categories", path: "/categories" },
{ name: "About", path: "/about" },
{ name: "Contact", path: "/contact" },
];

return (
<header className="sticky top-0 z-50 border-b border-[#241323]/10 bg-[#F6F0DF]/95 backdrop-blur-xl">
<div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-8">
<Link to="/" className="group flex items-center text-[30px] font-bold tracking-[-0.05em]">
<span className="text-[#241323]">Guide</span>
<span className="mx-2.5 text-[#C8D96A] transition-transform duration-300 group-hover:rotate-12">◆</span>
<span className="text-[#241323]">Vault</span>
</Link>

<nav className="hidden items-center gap-10 lg:flex">
{navLinks.map((link) => (
<NavLink
key={link.path}
to={link.path}
className={({ isActive }) =>
`text-[17px] font-medium tracking-wide transition-all duration-300 ${
isActive
? "text-[#6E3045]"
: "text-[#51454D] hover:text-[#241323]"
}`
}
>
{link.name}
</NavLink>
))}
</nav>

<div className="hidden items-center gap-7 lg:flex">
<Link
to="/guides"
className="group flex items-center gap-2 rounded-full bg-[#241323] px-7 py-3.5 text-[16px] font-semibold text-[#F6F0DF] transition-all duration-300 hover:bg-[#6E3045]"
>
Explore Guides
<span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
</Link>
</div>

<button
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
className="rounded-lg p-2 lg:hidden"
aria-label="Toggle navigation menu"
>
<div className="space-y-1.5">
<span className="block h-0.5 w-7 bg-[#241323]" />
<span className="block h-0.5 w-7 bg-[#241323]" />
<span className="block h-0.5 w-7 bg-[#241323]" />
</div>
</button>
</div>

{mobileMenuOpen && (
<div className="border-t border-[#241323]/10 bg-[#F6F0DF] px-6 py-8 lg:hidden">
<nav className="flex flex-col gap-7">
{navLinks.map((link) => (
<NavLink
key={link.path}
to={link.path}
onClick={() => setMobileMenuOpen(false)}
className={({ isActive }) =>
`text-[18px] font-medium ${
isActive
? "text-[#6E3045]"
: "text-[#51454D]"
}`
}
>
{link.name}
</NavLink>
))}

<Link
to="/guides"
onClick={() => setMobileMenuOpen(false)}
className="rounded-full bg-[#241323] px-6 py-4 text-center text-[16px] font-semibold text-[#F6F0DF]"
>
Explore Guides →
</Link>
</nav>
</div>
)}
</header>
);
}

export default Navbar;