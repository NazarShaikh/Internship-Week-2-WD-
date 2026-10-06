
import { Link } from "react-router-dom";
function Home() {
return (
<main className="bg-[#F6F0DF] text-[#191419]">
{/* HERO */}
<section className="relative min-h-[calc(100vh-88px)] overflow-hidden">
{/* Decorative shapes */}
<div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#C8D96A]/40 blur-3xl" />
<div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#C9A8B5]/30 blur-3xl" />
<div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
{/* LEFT */}
<div className="relative z-10">
{/* Eyebrow */}
<div className="mb-8 flex items-center gap-3">
<span className="h-px w-10 bg-[#6E3045]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Practical guides for real problems
</span>
</div>
{/* Main heading */}
<h1 className="max-w-4xl text-[58px] font-bold leading-[0.94] tracking-[-0.055em] sm:text-[68px] lg:text-[82px] xl:text-[94px]">
Solve
<br />
<span className="text-[#6E3045]">
better.
</span>
<br />
Learn
<br />
<span className="relative inline-block">
smarter
<span className="absolute -bottom-1 left-0 h-3 w-full -rotate-1 bg-[#C8D96A] -z-0" />
<span className="relative z-10">
.
</span>
</span>
</h1>
{/* Description */}
<p className="mt-9 max-w-xl text-[18px] leading-8 text-[#51454D] sm:text-[20px]">
Practical digital guides designed to help you understand
problems, learn what matters, and take meaningful action.
</p>
{/* Actions */}
<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<Link
to="/guides"
className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#241323] px-8 py-4 text-[16px] font-semibold text-[#F6F0DF] transition-all duration-300 hover:bg-[#6E3045]"
>
Explore Guides
<span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
→
</span>
</Link>
<Link
to="/about"
className="inline-flex items-center justify-center rounded-full border border-[#241323]/20 px-8 py-4 text-[16px] font-semibold text-[#241323] transition-all duration-300 hover:border-[#6E3045] hover:text-[#6E3045]"
>
How It Works
</Link>
</div>
{/* Small trust statement */}
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-2">
<span className="h-9 w-9 rounded-full border-2 border-[#F6F0DF] bg-[#6E3045]" />
<span className="h-9 w-9 rounded-full border-2 border-[#F6F0DF] bg-[#C8D96A]" />
<span className="h-9 w-9 rounded-full border-2 border-[#F6F0DF] bg-[#C9A8B5]" />
</div>
<p className="text-sm text-[#51454D]">
Practical knowledge.
<br />
<span className="font-semibold text-[#241323]">
Designed for action.
</span>
</p>
</div>
</div>
{/* RIGHT — GUIDE VISUAL */}
<div className="relative hidden min-h-[600px] lg:block">
{/* Large number */}
<span className="absolute right-0 top-0 text-[180px] font-bold leading-none tracking-[-0.08em] text-[#241323]/5">
01
</span>
{/* Back guide */}
<div className="absolute right-16 top-20 h-[470px] w-[310px] rotate-[8deg] bg-[#6E3045] p-7 shadow-2xl">
<div className="flex h-full flex-col justify-between border border-[#F6F0DF]/30 p-6">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F6F0DF]/70">
Career
</p>
<div className="mt-16">
<h3 className="text-4xl font-bold leading-[0.95] tracking-tight text-[#F6F0DF]">
LAND
<br />
YOUR
<br />
FIRST
<br />
ROLE
</h3>
</div>
</div>
<div className="flex justify-between text-xs text-[#F6F0DF]/70">
<span>GUIDE 01</span>
<span>GUIDEVAULT</span>
</div>
</div>
</div>
{/* Front guide */}
<div className="absolute left-8 top-36 h-[470px] w-[310px] -rotate-[7deg] bg-[#241323] p-7 shadow-2xl">
<div className="flex h-full flex-col justify-between border border-[#C8D96A]/40 p-6">
<div>
<div className="flex items-center justify-between">
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8D96A]">
Technology
</p>
<span className="text-xs text-[#F6F0DF]/50">
02
</span>
</div>
<div className="mt-16">
<p className="mb-3 text-sm text-[#C9A8B5]">
A practical roadmap
</p>
<h3 className="text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-[#F6F0DF]">
PYTHON
<br />
FROM
<br />
ZERO
</h3>
</div>
</div>
<div className="flex items-end justify-between">
<span className="text-xs text-[#F6F0DF]/50">
GUIDEVAULT
</span>
<span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8D96A] text-xl text-[#241323]">
→
</span>
</div>
</div>
</div>
{/* Floating category label */}
<div className="absolute bottom-14 right-0 rotate-[-4deg] bg-[#C8D96A] px-6 py-4 shadow-lg">
<p className="text-xs font-bold uppercase tracking-[0.15em] text-[#241323]">
Knowledge → Action
</p>
</div>
</div>
</div>
{/* Bottom edge */}
<div className="absolute bottom-0 left-0 h-px w-full bg-[#241323]/10" />
</section>
{/* FEATURED GUIDES */}
{/* PROBLEM / CATEGORY SECTION */}
<section className="bg-[#241323] px-6 py-24 text-[#F6F0DF] lg:px-8 lg:py-32">
<div className="mx-auto max-w-7xl">
{/* Header */}
<div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
<div>
<div className="mb-6 flex items-center gap-3">
<span className="h-px w-10 bg-[#C8D96A]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Find your direction
</span>
</div>
<h2 className="max-w-4xl text-[48px] font-bold leading-[0.94] tracking-[-0.055em] sm:text-[60px] lg:text-[76px]">
What are you
<br />
trying to
<br />
<span className="text-[#C9A8B5]">solve?</span>
</h2>
</div>
<p className="max-w-md text-[18px] leading-8 text-[#C9A8B5] lg:pb-2">
Start with the problem you're facing. We'll help you find
practical knowledge designed to move you forward.
</p>
</div>
{/* Categories */}
<div className="mt-20 grid gap-4 md:grid-cols-2">
{/* Career */}
<Link
to="/categories/career"
className="group relative min-h-[300px] overflow-hidden bg-[#F6F0DF] p-8 text-[#241323] transition-all duration-500 hover:-translate-y-1 sm:p-10"
>
<span className="absolute -right-4 -top-10 text-[150px] font-bold leading-none text-[#6E3045]/10">
01
</span>
<div className="relative flex h-full flex-col justify-between">
<div>
<span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6E3045]">
Career
</span>
<h3 className="mt-8 text-[38px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[44px]">
Build the
<br />
career you want.
</h3>
</div>
<div className="mt-12 flex items-center justify-between">
<p className="max-w-xs text-[15px] leading-6 text-[#51454D]">
Interviews, resumes, career planning and professional growth.
</p>
<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#241323] text-xl text-[#F6F0DF] transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</div>
</div>
</Link>
{/* Technology */}
<Link
to="/categories/technology"
className="group relative min-h-[300px] overflow-hidden bg-[#C8D96A] p-8 text-[#241323] transition-all duration-500 hover:-translate-y-1 sm:p-10"
>
<span className="absolute -right-4 -top-10 text-[150px] font-bold leading-none text-[#241323]/10">
02
</span>
<div className="relative flex h-full flex-col justify-between">
<div>
<span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6E3045]">
Technology
</span>
<h3 className="mt-8 text-[38px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[44px]">
Learn the
<br />
tools that matter.
</h3>
</div>
<div className="mt-12 flex items-center justify-between">
<p className="max-w-xs text-[15px] leading-6 text-[#241323]/70">
Programming, AI, web development and technology roadmaps.
</p>
<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#241323] text-xl text-[#F6F0DF] transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</div>
</div>
</Link>
{/* Business */}
<Link
to="/categories/business"
className="group relative min-h-[300px] overflow-hidden bg-[#6E3045] p-8 text-[#F6F0DF] transition-all duration-500 hover:-translate-y-1 sm:p-10"
>
<span className="absolute -right-4 -top-10 text-[150px] font-bold leading-none text-[#F6F0DF]/5">
03
</span>
<div className="relative flex h-full flex-col justify-between">
<div>
<span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#C8D96A]">
Business
</span>
<h3 className="mt-8 text-[38px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[44px]">
Turn ideas
<br />
into action.
</h3>
</div>
<div className="mt-12 flex items-center justify-between">
<p className="max-w-xs text-[15px] leading-6 text-[#C9A8B5]">
Starting, growing and managing a modern business.
</p>
<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8D96A] text-xl text-[#241323] transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</div>
</div>
</Link>
{/* Productivity */}
<Link
to="/categories/productivity"
className="group relative min-h-[300px] overflow-hidden bg-[#C9A8B5] p-8 text-[#241323] transition-all duration-500 hover:-translate-y-1 sm:p-10"
>
<span className="absolute -right-4 -top-10 text-[150px] font-bold leading-none text-[#241323]/10">
04
</span>
<div className="relative flex h-full flex-col justify-between">
<div>
<span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6E3045]">
Productivity
</span>
<h3 className="mt-8 text-[38px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[44px]">
Do more
<br />
with less noise.
</h3>
</div>
<div className="mt-12 flex items-center justify-between">
<p className="max-w-xs text-[15px] leading-6 text-[#241323]/70">
Focus, habits, time management and better daily systems.
</p>
<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#241323] text-xl text-[#F6F0DF] transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</div>
</div>
</Link>
</div>
{/* Personal Development */}
<Link
to="/categories/personal-development"
className="group relative mt-4 flex min-h-[260px] flex-col justify-between overflow-hidden bg-[#F6F0DF] p-8 text-[#241323] transition-all duration-500 hover:-translate-y-1 sm:p-10 md:flex-row md:items-end"
>
<span className="absolute -right-5 -top-16 text-[190px] font-bold leading-none text-[#6E3045]/10">
05
</span>
<div className="relative">
<span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6E3045]">
Personal Development
</span>
<h3 className="mt-6 text-[40px] font-bold leading-[0.95] tracking-[-0.04em] sm:text-[52px]">
Become better
<br />
at being you.
</h3>
</div>
<div className="relative mt-8 flex items-end justify-between gap-8 md:max-w-md">
<p className="text-[15px] leading-6 text-[#51454D]">
Mindset, confidence, self-awareness and practical personal growth.
</p>
<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#241323] text-xl text-[#F6F0DF] transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</div>
</Link>
</div>
</section>
{/* PROBLEM → KNOWLEDGE → ACTION */}
<section className="bg-[#F6F0DF] px-6 py-24 lg:px-8 lg:py-36">
<div className="mx-auto max-w-7xl">
{/* Header */}
<div className="max-w-4xl">
<div className="mb-6 flex items-center gap-3">
<span className="h-px w-10 bg-[#6E3045]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Why GuideVault exists
</span>
</div>
<h2 className="text-[48px] font-bold leading-[0.94] tracking-[-0.055em] text-[#241323] sm:text-[62px] lg:text-[78px]">
Knowledge should
<br />
lead to
<span className="relative ml-3 inline-block">
action.
<span className="absolute bottom-0 left-0 -z-0 h-3 w-full -rotate-1 bg-[#C8D96A]" />
</span>
</h2>
<p className="mt-8 max-w-2xl text-[18px] leading-8 text-[#51454D] sm:text-[20px]">
The internet has endless information. The difficult part is
knowing what matters, what to ignore, and what to actually do.
</p>
</div>
{/* Journey */}
<div className="relative mt-20">
{/* Connecting line */}
<div className="absolute left-8 top-12 hidden h-px w-[calc(100%-64px)] bg-[#241323]/15 lg:block" />
<div className="grid gap-6 lg:grid-cols-3">
{/* Step 01 */}
<div className="relative bg-[#241323] p-8 text-[#F6F0DF] sm:p-10">
<div className="flex items-center justify-between">
<span className="text-sm font-bold tracking-wider text-[#C8D96A]">
01
</span>
<span className="text-sm uppercase tracking-[0.15em] text-[#C9A8B5]">
The problem
</span>
</div>
<div className="mt-20">
<p className="text-[14px] uppercase tracking-wider text-[#C9A8B5]">
You think
</p>
<h3 className="mt-4 text-[32px] font-bold leading-[1] tracking-[-0.035em] sm:text-[38px]">
"I don't know
<br />
where to start."
</h3>
</div>
<p className="mt-8 text-[16px] leading-7 text-[#C9A8B5]">
Too much information. Too many opinions. No clear path.
</p>
</div>
{/* Step 02 */}
<div className="relative bg-[#C8D96A] p-8 text-[#241323] sm:p-10">
<div className="flex items-center justify-between">
<span className="text-sm font-bold tracking-wider text-[#6E3045]">
02
</span>
<span className="text-sm uppercase tracking-[0.15em] text-[#6E3045]">
The guide
</span>
</div>
<div className="mt-20">
<p className="text-[14px] uppercase tracking-wider text-[#6E3045]">
GuideVault gives you
</p>
<h3 className="mt-4 text-[32px] font-bold leading-[1] tracking-[-0.035em] sm:text-[38px]">
A clear path
<br />
forward.
</h3>
</div>
<p className="mt-8 text-[16px] leading-7 text-[#241323]/70">
Practical information organized around one specific problem.
</p>
</div>
{/* Step 03 */}
<div className="relative bg-[#6E3045] p-8 text-[#F6F0DF] sm:p-10">
<div className="flex items-center justify-between">
<span className="text-sm font-bold tracking-wider text-[#C8D96A]">
03
</span>
<span className="text-sm uppercase tracking-[0.15em] text-[#C9A8B5]">
The result
</span>
</div>
<div className="mt-20">
<p className="text-[14px] uppercase tracking-wider text-[#C9A8B5]">
You leave with
</p>
<h3 className="mt-4 text-[32px] font-bold leading-[1] tracking-[-0.035em] sm:text-[38px]">
"Now I know
<br />
what to do."
</h3>
</div>
<p className="mt-8 text-[16px] leading-7 text-[#C9A8B5]">
Less confusion. More clarity. A practical next step.
</p>
</div>
</div>
</div>
{/* Bottom statement */}
<div className="mt-16 flex flex-col justify-between gap-8 border-t border-[#241323]/15 pt-8 sm:flex-row sm:items-center">
<p className="max-w-xl text-[16px] leading-7 text-[#51454D]">
We don't want to give you more information.
We want to help you make better use of it.
</p>
<Link
to="/guides"
className="group flex items-center gap-3 text-[16px] font-bold text-[#6E3045]"
>
Find a guide
<span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
→
</span>
</Link>
</div>
</div>
</section>
</main>
);
}
export default Home;
