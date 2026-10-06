
import { Link } from "react-router-dom";

function Categories() {
const categories = [
{
number: "01",
name: "Career",
description:
"Guides for building skills, finding opportunities, preparing for interviews, and growing professionally.",
count: "12 guides",
accent: "bg-[#6E3045]",
text: "text-[#F6F0DF]",
secondary: "text-[#C9A8B5]",
numberColor: "text-[#C8D96A]",
},
{
number: "02",
name: "Technology",
description:
"Practical resources for programming, AI, software development, tools, and technical skills.",
count: "18 guides",
accent: "bg-[#C8D96A]",
text: "text-[#241323]",
secondary: "text-[#51454D]",
numberColor: "text-[#6E3045]",
},
{
number: "03",
name: "Business",
description:
"Learn about ideas, digital products, entrepreneurship, strategy, and building something of your own.",
count: "9 guides",
accent: "bg-[#241323]",
text: "text-[#F6F0DF]",
secondary: "text-[#C9A8B5]",
numberColor: "text-[#C8D96A]",
},
{
number: "04",
name: "Productivity",
description:
"Simple systems for managing attention, time, habits, organization, and meaningful work.",
count: "14 guides",
accent: "bg-[#C9A8B5]",
text: "text-[#241323]",
secondary: "text-[#51454D]",
numberColor: "text-[#6E3045]",
},
{
number: "05",
name: "Personal Development",
description:
"Guides for developing self-awareness, confidence, communication, mindset, and better habits.",
count: "16 guides",
accent: "bg-[#6E3045]",
text: "text-[#F6F0DF]",
secondary: "text-[#C9A8B5]",
numberColor: "text-[#C8D96A]",
},
{
number: "06",
name: "Money & Finance",
description:
"Practical knowledge for understanding money, personal finance, budgeting, and financial decisions.",
count: "8 guides",
accent: "bg-[#C8D96A]",
text: "text-[#241323]",
secondary: "text-[#51454D]",
numberColor: "text-[#6E3045]",
},
];

return (
<main className="min-h-screen bg-[#F6F0DF] text-[#241323]">
<section className="px-6 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
<div className="mx-auto max-w-7xl">
<div className="max-w-5xl">
<div className="mb-6 flex items-center gap-3">
<span className="h-px w-10 bg-[#6E3045]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Explore by category
</span>
</div>
<h1 className="text-[52px] font-bold leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[88px]">
Start with what
<br />
<span className="text-[#6E3045]">matters to you.</span>
</h1>
<p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#51454D] sm:text-[20px]">
Choose an area you're interested in and discover practical guides built to help you learn, solve problems, and take action.
</p>
</div>
</div>
</section>

<section className="px-6 pb-24 sm:pb-28 lg:px-8 lg:pb-36">
<div className="mx-auto max-w-7xl">
<div className="grid gap-5 md:grid-cols-2">
{categories.map((category) => (
<Link
key={category.number}
to={`/guides?category=${encodeURIComponent(category.name)}`}
className={`group relative min-h-[360px] overflow-hidden ${category.accent} p-7 transition-transform duration-500 hover:-translate-y-2 sm:min-h-[390px] sm:p-9 lg:min-h-[430px] lg:p-11`}
>
<span
className={`pointer-events-none absolute -right-4 -top-10 select-none text-[180px] font-bold leading-none tracking-[-0.1em] opacity-[0.08] sm:text-[220px]`}
>
{category.number}
</span>

<div className="relative flex h-full flex-col justify-between">
<div className="flex items-start justify-between">
<span
className={`text-[18px] font-bold tracking-[-0.02em] ${category.numberColor}`}
>
{category.number}
</span>
<span
className={`flex h-12 w-12 items-center justify-center rounded-full border border-current/20 text-xl transition-transform duration-300 group-hover:translate-x-1 ${category.text}`}
>
↗
</span>
</div>

<div className="mt-20">
<h2
className={`max-w-xl text-[38px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[48px] lg:text-[54px] ${category.text}`}
>
{category.name}
</h2>
<p
className={`mt-5 max-w-xl text-[16px] leading-7 sm:text-[17px] ${category.secondary}`}
>
{category.description}
</p>
</div>

<div
className={`mt-10 border-t border-current/15 pt-5 text-sm font-semibold ${category.text}`}
>
{category.count}
</div>
</div>
</Link>
))}
</div>
</div>
</section>

<section className="border-t border-[#241323]/10 px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
<div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Can't decide?
</p>
<h2 className="mt-4 max-w-2xl text-[40px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
Browse everything
<br />
in one place.
</h2>
</div>

<Link
to="/guides"
className="inline-flex h-14 items-center justify-center bg-[#241323] px-8 text-[16px] font-bold text-[#F6F0DF] transition-colors hover:bg-[#6E3045]"
>
Explore all guides →
</Link>
</div>
</section>
</main>
);
}

export default Categories;
