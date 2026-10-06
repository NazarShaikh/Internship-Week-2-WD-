
import { useState } from "react";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({
...prev,
[name]: value,
}));
};

const handleSubmit = (e) => {
e.preventDefault();
console.log("Contact form submitted:", formData);
};

return (
<main className="min-h-screen bg-[#F6F0DF] text-[#241323]">
<section className="px-6 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
<div className="mx-auto max-w-7xl">
<div className="max-w-5xl">
<div className="mb-6 flex items-center gap-3">
<span className="h-px w-10 bg-[#6E3045]" />
<span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Get in touch
</span>
</div>
<h1 className="text-[52px] font-bold leading-[0.92] tracking-[-0.06em] sm:text-[70px] lg:text-[94px]">
Have a question?
<br />
<span className="text-[#6E3045]">Let's talk.</span>
</h1>
<p className="mt-9 max-w-2xl text-[18px] leading-8 text-[#51454D] sm:text-[21px]">
Whether you have a question about a guide, your account, or something else, send us a message and we'll get back to you.
</p>
</div>
</div>
</section>

<section className="px-6 pb-24 sm:pb-28 lg:px-8 lg:pb-36">
<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
<div className="bg-[#241323] p-8 text-[#F6F0DF] sm:p-10 lg:p-12">
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C8D96A]">
Contact information
</p>
<h2 className="mt-6 text-[36px] font-bold leading-[0.95] tracking-[-0.045em] sm:text-[44px]">
We're here
<br />
to help.
</h2>
<p className="mt-7 text-[16px] leading-7 text-[#C9A8B5]">
Send us your question and we'll do our best to point you in the right direction.
</p>

<div className="mt-14 border-t border-[#F6F0DF]/15 pt-7">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8D96A]">
Email
</p>
<a
href="mailto:support@guidevault.com"
className="mt-3 inline-block text-[17px] text-[#F6F0DF] transition-colors hover:text-[#C8D96A]"
>
support@guidevault.com
</a>
</div>

<div className="mt-8 border-t border-[#F6F0DF]/15 pt-7">
<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C8D96A]">
Response time
</p>
<p className="mt-3 text-[17px] text-[#F6F0DF]">
Usually within 1–2 business days
</p>
</div>

<div className="mt-14 bg-[#6E3045] p-6">
<p className="text-sm leading-6 text-[#F6F0DF]">
For questions about a purchase, please include your order details so we can help you faster.
</p>
</div>
</div>

<div className="border border-[#241323]/15 bg-[#F6F0DF] p-7 sm:p-10 lg:p-12">
<div className="mb-10">
<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6E3045]">
Send a message
</p>
<h2 className="mt-4 text-[36px] font-bold tracking-[-0.04em] sm:text-[44px]">
How can we help?
</h2>
</div>

<form onSubmit={handleSubmit} className="space-y-7">
<div className="grid gap-7 sm:grid-cols-2">
<div>
<label
htmlFor="name"
className="mb-2 block text-sm font-semibold text-[#241323]"
>
Your name
</label>
<input
id="name"
name="name"
type="text"
value={formData.name}
onChange={handleChange}
placeholder="Enter your name"
required
className="h-14 w-full border border-[#241323]/20 bg-transparent px-4 text-[16px] outline-none transition-colors placeholder:text-[#51454D]/50 focus:border-[#6E3045]"
/>
</div>

<div>
<label
htmlFor="email"
className="mb-2 block text-sm font-semibold text-[#241323]"
>
Email address
</label>
<input
id="email"
name="email"
type="email"
value={formData.email}
onChange={handleChange}
placeholder="you@example.com"
required
className="h-14 w-full border border-[#241323]/20 bg-transparent px-4 text-[16px] outline-none transition-colors placeholder:text-[#51454D]/50 focus:border-[#6E3045]"
/>
</div>
</div>

<div>
<label
htmlFor="subject"
className="mb-2 block text-sm font-semibold text-[#241323]"
>
Subject
</label>
<input
id="subject"
name="subject"
type="text"
value={formData.subject}
onChange={handleChange}
placeholder="What can we help you with?"
required
className="h-14 w-full border border-[#241323]/20 bg-transparent px-4 text-[16px] outline-none transition-colors placeholder:text-[#51454D]/50 focus:border-[#6E3045]"
/>
</div>

<div>
<label
htmlFor="message"
className="mb-2 block text-sm font-semibold text-[#241323]"
>
Message
</label>
<textarea
id="message"
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Tell us what's on your mind..."
rows={7}
required
className="w-full resize-none border border-[#241323]/20 bg-transparent px-4 py-4 text-[16px] leading-7 outline-none transition-colors placeholder:text-[#51454D]/50 focus:border-[#6E3045]"
/>
</div>

<div className="pt-2">
<button
type="submit"
className="inline-flex h-14 w-full items-center justify-center bg-[#241323] px-8 text-[16px] font-bold text-[#F6F0DF] transition-colors hover:bg-[#6E3045] sm:w-auto"
>
Send message →
</button>
</div>
</form>
</div>
</div>
</section>

<section className="border-t border-[#241323]/10 bg-[#C8D96A] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
<div>
<p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6E3045]">
Before you message us
</p>
<h2 className="mt-5 text-[40px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
Looking for
<br />
something specific?
</h2>
</div>

<div className="divide-y divide-[#241323]/15">
<div className="py-6 first:pt-0">
<h3 className="text-[20px] font-bold">
Having trouble accessing a guide?
</h3>
<p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#51454D]">
Include the email address associated with your account and any purchase information in your message.
</p>
</div>

<div className="py-6">
<h3 className="text-[20px] font-bold">
Have a question about a purchase?
</h3>
<p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#51454D]">
Tell us which guide you're referring to and we'll help you with the issue.
</p>
</div>

<div className="py-6 last:pb-0">
<h3 className="text-[20px] font-bold">
Want to suggest a guide topic?
</h3>
<p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#51454D]">
We'd love to hear what problems you'd like GuideVault to create resources for.
</p>
</div>
</div>
</div>
</section>
</main>
);
}

export default Contact;
