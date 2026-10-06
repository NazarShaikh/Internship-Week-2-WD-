
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { guides } from "../data/guides";
function Guides() {
const categories = ["All", "Career", "Technology", "Business", "Productivity", "Personal Development"];
const [searchParams, setSearchParams] = useSearchParams();
const [activeCategory, setActiveCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");
useEffect(() => {
const categoryFromUrl = searchParams.get("category");
if (categoryFromUrl && categories.some(category => category.toLowerCase() === categoryFromUrl.toLowerCase())) {
const matchedCategory = categories.find(category => category.toLowerCase() === categoryFromUrl.toLowerCase());
setActiveCategory(matchedCategory);
} else {
setActiveCategory("All");
}
}, [searchParams]);
const handleCategoryChange = category => {
setActiveCategory(category);
if (category === "All") {
setSearchParams({});
} else {
setSearchParams({ category });
}
};
const filteredGuides = guides.filter(guide => {
const search = searchTerm.trim().toLowerCase();
const matchesCategory = activeCategory === "All" || guide.category.toLowerCase() === activeCategory.toLowerCase();
const matchesSearch = search === "" || guide.title.toLowerCase().includes(search) || guide.description.toLowerCase().includes(search) || guide.category.toLowerCase().includes(search);
return matchesCategory && matchesSearch;
});
return (
<main className="min-h-screen bg-[#F6F0DF] text-[#191419]">
<section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
<div className="mx-auto max-w-7xl">
<div className="mb-14 flex flex-wrap gap-3">
{categories.map(category => (
<button key={category} type="button" onClick={() => handleCategoryChange(category)} className={`border px-5 py-3 text-[15px] font-semibold transition-all duration-300 ${activeCategory === category ? "border-[#241323] bg-[#241323] text-[#F6F0DF]" : "border-[#241323]/15 text-[#51454D] hover:border-[#6E3045] hover:text-[#6E3045]"}`}>
{category}
</button>
))}
</div>
<div className="mb-10 border-b border-[#241323]/15 pb-6">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6E3045]">Explore</p>
<h2 className="mt-2 text-[32px] font-bold tracking-[-0.035em] text-[#241323] sm:text-[40px]">
{activeCategory === "All" ? "All guides" : `${activeCategory} guides`}
</h2>
</div>
<div className="w-full lg:w-[550px]">
<div className="flex h-12 w-full items-center border border-[#241323]/20 bg-[#F6F0DF] px-4 transition-colors focus-within:border-[#6E3045]">
<span className="mr-3 text-lg text-[#6E3045]">⌕</span>
<input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search guides..." className="w-full bg-transparent text-[15px] text-[#241323] outline-none placeholder:text-[#51454D]/60" />
{searchTerm && (
<button type="button" onClick={() => setSearchTerm("")} className="ml-2 text-xl text-[#6E3045] transition-colors hover:text-[#241323]" aria-label="Clear search">
×
</button>
)}
</div>
</div>
</div>
<div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<p className="text-[15px] text-[#51454D]">
{filteredGuides.length} {filteredGuides.length === 1 ? "practical guide" : "practical guides"}
</p>
{searchTerm && <p className="text-[14px] text-[#6E3045]">Results for "{searchTerm}"</p>}
</div>
</div>
{filteredGuides.length > 0 ? (
<div className="grid gap-x-7 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
{filteredGuides.map(guide => (
<Link key={guide.id} to={`/guides/${guide.id}`} className="group block">
<div className="relative aspect-[3/4] overflow-hidden">
<div className={`relative h-full w-full ${guide.color} p-6 transition-transform duration-500 group-hover:-translate-y-2 sm:p-8`}>
<div className="flex h-full flex-col justify-between border border-[#F6F0DF]/30 p-5 sm:p-6">
<div className="flex items-start justify-between">
<span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F6F0DF]/75">{guide.category}</span>
<span className="text-sm text-[#F6F0DF]/60">{String(guide.id).padStart(2, "0")}</span>
</div>
<div>
<p className="mb-3 text-sm text-[#F6F0DF]/65">A practical guide</p>
<h3 className="max-w-xs text-[34px] font-bold leading-[0.92] tracking-[-0.045em] text-[#F6F0DF] sm:text-[40px]">{guide.title}</h3>
</div>
<div className="flex items-end justify-between">
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#F6F0DF]/55">GUIDEvault</span>
<span className={`flex h-11 w-11 items-center justify-center rounded-full ${guide.accent} text-xl text-[#241323] transition-transform duration-300 group-hover:translate-x-1`}>→</span>
</div>
</div>
</div>
</div>
<div className="pt-6">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6E3045]">{guide.category}</p>
<h3 className="mt-2 text-[24px] font-bold leading-tight tracking-[-0.025em] text-[#241323]">{guide.title}</h3>
</div>
<span className="shrink-0 text-[20px] font-bold text-[#241323]">{guide.price}</span>
</div>
<p className="mt-4 text-[16px] leading-7 text-[#51454D]">{guide.description}</p>
<div className="mt-5 flex items-center justify-between border-t border-[#241323]/10 pt-4">
<span className="text-sm text-[#51454D]">{guide.pages}</span>
<span className="text-sm font-bold text-[#6E3045] transition-transform duration-300 group-hover:translate-x-1">View guide →</span>
</div>
</div>
</Link>
))}
</div>
) : (
<div className="border border-[#241323]/15 px-6 py-20 text-center sm:px-10">
<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6E3045] text-2xl text-[#F6F0DF]">?</div>
<h2 className="mt-7 text-[32px] font-bold tracking-[-0.04em] text-[#241323] sm:text-[40px]">No guides found</h2>
<p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-[#51454D]">
We couldn't find any guides {searchTerm ? ` matching "${searchTerm}"` : " in this category"}. Try searching for something else or explore all available guides.
</p>
<div className="mt-8 flex flex-wrap justify-center gap-3">
{searchTerm && (
<button type="button" onClick={() => setSearchTerm("")} className="border border-[#241323] bg-[#241323] px-6 py-3 text-sm font-semibold text-[#F6F0DF] transition-colors hover:bg-[#6E3045]">
Clear search
</button>
)}
{activeCategory !== "All" && (
<button type="button" onClick={() => handleCategoryChange("All")} className="border border-[#241323]/20 px-6 py-3 text-sm font-semibold text-[#241323] transition-colors hover:border-[#6E3045] hover:text-[#6E3045]">
View all guides
</button>
)}
</div>
</div>
)}
</div>
</section>
</main>
);
}
export default Guides;
