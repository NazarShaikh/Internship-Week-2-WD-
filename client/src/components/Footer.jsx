
import { Link } from "react-router-dom";

function Footer() {
return (
<footer className="bg-[#241323] text-[#F6F0DF]">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
<div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
<div>
<Link
to="/"
className="inline-flex items-center text-[32px] font-bold tracking-[-0.05em]"
>
<span>Guide</span>
<span className="mx-2.5 text-[#C8D96A]">◆</span>
<span>Vault</span>
</Link>

<h2 className="mt-10 max-w-3xl text-[48px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[60px] lg:text-[72px]">
Better knowledge.
<br />
<span className="text-[#C8D96A]">Better action.</span>
</h2>

<p className="mt-8 max-w-xl text-[17px] leading-8 text-[#C9A8B5]">
Practical digital guides designed to help you understand real problems, learn what matters, and move forward with clarity.
</p>
</div>

<div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pt-4">
<div>
<p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Explore
</p>
<nav className="flex flex-col gap-4">
<Link
to="/guides"
className="text-[16px] text-[#F6F0DF]/75 transition-colors hover:text-[#C8D96A]"
>
Guides
</Link>
<Link
to="/categories"
className="text-[16px] text-[#F6F0DF]/75 transition-colors hover:text-[#C8D96A]"
>
Categories
</Link>
</nav>
</div>

<div>
<p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Company
</p>
<nav className="flex flex-col gap-4">
<Link
to="/about"
className="text-[16px] text-[#F6F0DF]/75 transition-colors hover:text-[#C8D96A]"
>
About
</Link>
<Link
to="/contact"
className="text-[16px] text-[#F6F0DF]/75 transition-colors hover:text-[#C8D96A]"
>
Contact
</Link>
</nav>
</div>

<div>
<p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Account
</p>
<nav className="flex flex-col gap-4">

<Link
to="/register"
className="text-[16px] text-[#F6F0DF]/75 transition-colors hover:text-[#C8D96A]"
>
Create Account
</Link>
</nav>
</div>
</div>
</div>
</div>

<div className="border-t border-[#F6F0DF]/15">
<div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 text-sm text-[#C9A8B5] sm:flex-row sm:items-center sm:justify-between lg:px-8">
<p>© 2026 GuideVault. All rights reserved.</p>
<div className="flex gap-6">
<Link
to="/privacy"
className="transition-colors hover:text-[#F6F0DF]"
>
Privacy
</Link>
<Link
to="/terms"
className="transition-colors hover:text-[#F6F0DF]"
>
Terms
</Link>
</div>
</div>
</div>
</footer>
);
}

export default Footer;
