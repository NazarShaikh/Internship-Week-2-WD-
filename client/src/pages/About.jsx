
import { Link } from "react-router-dom";

function About() {
return (
<main className="min-h-screen bg-[#F6F0DF] text-[#241323]">
<section className="px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
<div className="mx-auto max-w-7xl">
<div className="max-w-5xl">
<div className="mb-6 flex items-center gap-3">
<span className="h-px w-10 bg-[#6E3045]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
About GuideVault
</span>
</div>
<h1 className="text-[52px] font-bold leading-[0.92] tracking-[-0.06em] sm:text-[70px] lg:text-[94px]">
Information is
<br />
everywhere.
<br />
<span className="text-[#6E3045]">Clarity isn't.</span>
</h1>
<p className="mt-10 max-w-2xl text-[18px] leading-8 text-[#51454D] sm:text-[21px]">
GuideVault exists to make useful knowledge easier to understand, easier to access, and easier to put into action.
</p>
</div>
</div>
</section>

<section className="bg-[#241323] px-6 py-20 text-[#F6F0DF] sm:py-28 lg:px-8 lg:py-36">
<div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Our idea
</p>
</div>
<div>
<h2 className="max-w-4xl text-[40px] font-bold leading-[1] tracking-[-0.045em] sm:text-[54px] lg:text-[64px]">
You shouldn't need to spend hours searching through hundreds of pages just to understand what to do next.
</h2>
<div className="mt-12 grid gap-8 border-t border-[#F6F0DF]/15 pt-10 sm:grid-cols-2">
<div>
<p className="text-[17px] leading-8 text-[#C9A8B5]">
The internet gave us access to more information than ever before. But more information doesn't automatically create better decisions.
</p>
</div>
<div>
<p className="text-[17px] leading-8 text-[#C9A8B5]">
We believe good guides should remove the noise, organize what matters, and give you a practical path forward.
</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 sm:py-28 lg:px-8 lg:py-36">
<div className="mx-auto max-w-7xl">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
What we create
</p>
<h2 className="mt-5 text-[44px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[58px]">
Guides built around
<br />
real questions.
</h2>
</div>

<div className="mt-16 grid gap-px bg-[#241323]/15 md:grid-cols-3">
<div className="bg-[#F6F0DF] p-8 sm:p-10 lg:p-12">
<span className="text-[48px] font-bold leading-none tracking-[-0.05em] text-[#6E3045]">
01
</span>
<h3 className="mt-16 text-[28px] font-bold tracking-[-0.035em]">
Practical
</h3>
<p className="mt-5 text-[16px] leading-7 text-[#51454D]">
Our guides focus on useful information you can understand and apply rather than unnecessary theory.
</p>
</div>

<div className="bg-[#C8D96A] p-8 sm:p-10 lg:p-12">
<span className="text-[48px] font-bold leading-none tracking-[-0.05em] text-[#6E3045]">
02
</span>
<h3 className="mt-16 text-[28px] font-bold tracking-[-0.035em]">
Focused
</h3>
<p className="mt-5 text-[16px] leading-7 text-[#51454D]">
Each guide is built around a specific problem, question, skill, or goal.
</p>
</div>

<div className="bg-[#6E3045] p-8 text-[#F6F0DF] sm:p-10 lg:p-12">
<span className="text-[48px] font-bold leading-none tracking-[-0.05em] text-[#C8D96A]">
03
</span>
<h3 className="mt-16 text-[28px] font-bold tracking-[-0.035em]">
Actionable
</h3>
<p className="mt-5 text-[16px] leading-7 text-[#C9A8B5]">
The goal isn't simply to finish reading. It's to leave knowing what you can do next.
</p>
</div>
</div>
</div>
</section>

<section className="border-y border-[#241323]/10 px-6 py-20 sm:py-28 lg:px-8 lg:py-36">
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
<div>
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Our philosophy
</p>
<h2 className="mt-5 text-[42px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[54px]">
Learn less.
<br />
Understand more.
</h2>
</div>
<div className="space-y-8 text-[17px] leading-8 text-[#51454D]">
<p>
We don't believe people need more information simply for the sake of having more information.
</p>
<p>
They need the right information, presented at the right level, in a way that makes sense.
</p>
<p>
That's what GuideVault is designed around: turning complex topics into structured resources that help people move from confusion to clarity.
</p>
</div>
</div>
</section>

<section className="px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
<div className="mx-auto max-w-7xl">
<div className="bg-[#C8D96A] px-7 py-14 sm:px-12 sm:py-20 lg:px-16">
<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6E3045]">
Start exploring
</p>
<div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
<h2 className="max-w-3xl text-[42px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[58px]">
Find something useful.
<br />
Put it to work.
</h2>
<Link
to="/guides"
className="inline-flex h-14 shrink-0 items-center justify-center bg-[#241323] px-8 text-[16px] font-bold text-[#F6F0DF] transition-colors hover:bg-[#6E3045]"
>
Explore guides →
</Link>
</div>
</div>
</div>
</section>
</main>
);
}

export default About;
