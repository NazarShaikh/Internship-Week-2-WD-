
import { Link, useParams } from "react-router-dom";
import { guides } from "../data/guides";
function GuideDetails() {
const { id } = useParams();
const guide = guides.find((item) => String(item.id) === String(id));

if (!guide) {
return (
<main className="flex min-h-screen items-center justify-center bg-[#F6F0DF] px-6 text-[#241323]">
<div className="max-w-xl text-center">
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Guide not found
</p>
<h1 className="mt-5 text-[48px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[64px]">
This guide doesn't exist.
</h1>
<p className="mt-6 text-[18px] leading-8 text-[#51454D]">
The guide you're looking for may have been removed or the link may
be incorrect.
</p>
<Link
to="/guides"
className="mt-8 inline-flex bg-[#241323] px-7 py-4 text-[16px] font-bold text-[#F6F0DF] transition-colors hover:bg-[#6E3045]"
>
← Back to guides
</Link>
</div>
</main>
);
}
const guideDetails = {
1: {
subtitle:
"A practical roadmap to becoming job-ready, preparing for interviews, and landing your first developer role.",
description:
"Finding your first role can feel overwhelming. There are countless resources, conflicting advice, and no obvious starting point. This guide brings everything into one practical path so you can focus on what actually matters.",
contents: [
"Understand what companies actually look for in freshers",
"Build a stronger developer profile",
"Create projects that demonstrate your skills",
"Prepare for common technical interviews",
"Improve your resume and online presence",
"Create a practical job-search strategy",
],
},
2: {
subtitle:
"Prepare for interviews with a practical approach to common questions, communication, confidence, and preparation.",
description:
"Interviews can become much easier when you understand what interviewers are looking for and prepare with a clear strategy. This guide helps you approach the process with greater confidence and structure.",
contents: [
"Understand how interviews are structured",
"Prepare for common interview questions",
"Explain your projects with confidence",
"Improve technical and behavioral preparation",
"Communicate your strengths effectively",
"Develop a practical interview preparation routine",
],
},
3: {
subtitle:
"Build stronger connections through better communication, healthy boundaries, and deeper understanding.",
description:
"Healthy relationships depend on how we communicate, understand one another, and respond to difficult situations. This guide focuses on practical ideas that can help you communicate with greater clarity and awareness.",
contents: [
"Understand the foundations of healthy communication",
"Express your thoughts and feelings clearly",
"Develop healthier boundaries",
"Listen and understand more effectively",
"Handle disagreements with greater awareness",
"Build stronger and more meaningful connections",
],
},
4: {
subtitle:
"Understand repetitive thoughts, reduce mental noise, and respond to your thoughts with greater clarity.",
description:
"Overthinking can make simple situations feel complicated and can keep your attention trapped in past events or future possibilities. This guide explores practical ways to recognize these patterns and respond differently.",
contents: [
"Understand what overthinking looks like",
"Recognize repetitive thought patterns",
"Separate thoughts from facts",
"Reduce unnecessary mental noise",
"Respond to uncertainty with greater clarity",
"Build a calmer approach to everyday situations",
],
},
5: {
subtitle:
"Understand why you delay important tasks and build practical habits that make taking action easier.",
description:
"Procrastination is not simply about being lazy. Understanding why we avoid certain tasks can make it easier to change the pattern. This guide provides practical ideas for moving from intention to action.",
contents: [
"Understand why procrastination happens",
"Identify your personal avoidance patterns",
"Break overwhelming tasks into smaller actions",
"Create an environment that supports action",
"Build consistency without relying on motivation",
"Develop practical anti-procrastination habits",
],
},
6: {
subtitle:
"Create a simple system to organize your time, focus on what matters, and consistently get meaningful work done.",
description:
"Productivity is not about filling every hour with tasks. A useful system should help you understand what matters, organize your responsibilities, and protect your ability to focus.",
contents: [
"Understand what personal productivity actually means",
"Organize tasks and responsibilities effectively",
"Prioritize what deserves your attention",
"Build a practical daily workflow",
"Create systems for focused work",
"Develop a productivity system you can maintain",
],
},
};
const details = guideDetails[guide.id] || {
subtitle: guide.description,
description: guide.description,
contents: [
"Understand the core concepts covered in this guide",
"Learn practical strategies you can apply",
"Build a stronger understanding of the subject",
"Apply the ideas to real situations",
"Develop practical habits and actions",
"Move from information to meaningful action",
],
};
return (
<main className="min-h-screen bg-[#F6F0DF] text-[#241323]">
<div className="border-b border-[#241323]/10 px-6 py-5 lg:px-8">
<div className="mx-auto max-w-7xl">
<Link
to="/guides"
className="text-sm font-medium text-[#6E3045] transition-colors hover:text-[#241323]"
>
← Back to guides
</Link>
</div>
</div>
<section className="px-6 py-14 sm:py-20 lg:px-8 lg:py-24">
<div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
<div className="mx-auto w-full max-w-[460px] lg:mx-0">
<div className="relative aspect-[3/4]">
<div className="absolute left-5 top-5 h-full w-full bg-[#C8D96A]" />
<div
className={`relative h-full w-full ${guide.color} p-6 shadow-xl sm:p-8`}
>
<div className="flex h-full flex-col justify-between border border-[#F6F0DF]/30 p-6 sm:p-8">
<div className="flex items-start justify-between">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8D96A]">
{guide.category}
</span>
<span className="text-sm text-[#F6F0DF]/60">
GUIDE {String(guide.id).padStart(2, "0")}
</span>
</div>
<div>
<p className="mb-4 text-sm uppercase tracking-[0.16em] text-[#F6F0DF]/60">
GuideVault
</p>
<h1 className="text-[44px] font-bold leading-[0.9] tracking-[-0.055em] text-[#F6F0DF] sm:text-[56px]">
{guide.title}
</h1>
<div className="mt-6 h-1 w-20 bg-[#C8D96A]" />
</div>
<div className="flex items-end justify-between">
<span className="text-xs uppercase tracking-[0.15em] text-[#F6F0DF]/55">
Practical knowledge
</span>
<span className="text-3xl text-[#C8D96A]">◆</span>
</div>
</div>
</div>
</div>
</div>
<div>
<div className="flex flex-wrap items-center gap-3">
<span className="bg-[#6E3045] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F6F0DF]">
{guide.category}
</span>
<span className="text-sm text-[#51454D]">
{guide.pages} · PDF
</span>
</div>
<h1 className="mt-7 max-w-3xl text-[52px] font-bold leading-[0.92] tracking-[-0.055em] sm:text-[68px] lg:text-[82px]">
{guide.title}
</h1>
<p className="mt-8 max-w-2xl text-[19px] leading-8 text-[#51454D] sm:text-[21px]">
{details.subtitle}
</p>
<div className="mt-10 flex items-end gap-4">
<span className="text-[42px] font-bold tracking-[-0.04em] text-[#241323]">
{guide.price}
</span>
<span className="pb-2 text-sm text-[#51454D]">
One-time purchase
</span>
</div>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a
href={guide.pdf}
target="_blank"
rel="noopener noreferrer"
className="flex h-14 items-center justify-center bg-[#241323] px-8 text-[16px] font-bold text-[#F6F0DF] transition-colors hover:bg-[#6E3045]"
>
Read PDF →
</a>
<button
type="button"
className={`h-14 ${guide.accent} px-8 text-[16px] font-bold text-[#241323] transition-all duration-300 hover:bg-[#241323] hover:text-[#F6F0DF]`}
>
Get this guide →
</button>
</div>
<div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#51454D]">
<span>✓ Instant access</span>
<span>✓ PDF download</span>
<span>✓ Secure checkout</span>
</div>
</div>
</div>
</section>
<section className="bg-[#241323] px-6 py-20 text-[#F6F0DF] sm:py-24 lg:px-8 lg:py-32">
<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Inside the guide
</p>
<h2 className="mt-5 text-[44px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[56px]">
Less noise.
<br />
More clarity.
</h2>
</div>
<div>
<p className="max-w-2xl text-[18px] leading-8 text-[#C9A8B5] sm:text-[20px]">
{details.description}
</p>
<div className="mt-12 border-t border-[#F6F0DF]/15">
{details.contents.map((item, index) => (
<div
key={index}
className="flex gap-5 border-b border-[#F6F0DF]/15 py-6"
>
<span className="shrink-0 text-sm font-bold text-[#C8D96A]">
{String(index + 1).padStart(2, "0")}
</span>
<p className="text-[16px] leading-7 text-[#F6F0DF]/85 sm:text-[17px]">
{item}
</p>
</div>
))}
</div>
</div>
</div>
</section>
<section className="px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
<div className="mx-auto max-w-7xl">
<div className="bg-[#6E3045] px-7 py-14 text-center text-[#F6F0DF] sm:px-12 sm:py-20">
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Ready to start?
</p>
<h2 className="mx-auto mt-5 max-w-3xl text-[42px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[58px]">
Turn information
<br />
into action.
</h2>
<button
type="button"
className="mt-9 bg-[#C8D96A] px-8 py-4 text-[16px] font-bold text-[#241323] transition-colors hover:bg-[#F6F0DF]"
>
Get the guide — {guide.price}
</button>
</div>
</div>
</section>
</main>
);
}
export default GuideDetails;
