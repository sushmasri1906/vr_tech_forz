"use client";
import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
	Globe,
	ShoppingCart,
	Building2,
	Layout,
	Smartphone,
	Rocket,
	Plug,
	ShieldCheck,
	Database,
	CreditCard,
	Zap,
	Cloud,
	Puzzle,
	FileText,
} from "lucide-react";

/* ------------------------------- Types ------------------------------- */
type Capability = {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
	blurb: string;
	bullets: string[];
};

/* ---------------------------- Main Section --------------------------- */
export default function CoreCapabilities() {
	const items: Capability[] = [
		{
			icon: Globe,
			title: "Website Design & Development",
			blurb: "Modern, responsive, and SEO-friendly websites",
			bullets: ["Next.js / React", "Tailwind CSS", "SEO Optimization"],
		},
		{
			icon: ShoppingCart,
			title: "E-commerce Solutions",
			blurb: "B2C & B2B stores, payment gateways",
			bullets: ["Stripe / Razorpay", "Custom Checkout"],
		},
		{
			icon: Building2,
			title: "B2B Solutions",
			blurb: "Enterprise portals, dashboards, automation",
			bullets: ["Workflows", "Analytics", "User Management"],
		},
		{
			icon: Layout,
			title: "Custom Web Applications",
			blurb: "Tailored platforms for business operations",
			bullets: ["Next.js", "APIs", "Scalable Backend"],
		},
		{
			icon: Smartphone,
			title: "Mobile App Development",
			blurb: "iOS, Android, and cross-platform apps",
			bullets: ["React Native", "Expo", "Play Store / App Store"],
		},
		{
			icon: Rocket,
			title: "Digital Marketing & SEO",
			blurb: "Boost visibility and conversions",
			bullets: ["Content Strategy", "SEO Audits"],
		},
		{
			icon: Plug,
			title: "API Development & Integration",
			blurb: "REST / GraphQL APIs & third-party systems",
			bullets: ["Auth / SSO", "Webhooks", "Third-party APIs"],
		},
		{
			icon: ShieldCheck,
			title: "Web & Mobile Maintenance",
			blurb: "Updates, optimization, and security patches",
			bullets: ["Bug Fixes", "Performance", "Security Audits"],
		},
		{
			icon: Database,
			title: "Custom CRM",
			blurb: "Business management platforms",
			bullets: ["Lead Tracking", "Automation", "Reports"],
		},
		{
			icon: CreditCard,
			title: "Payment Gateways",
			blurb: "Secure online transactions",
			bullets: ["Razorpay", "UPI Integration"],
		},
		{
			icon: Zap,
			title: "Progressive Web Apps (PWAs)",
			blurb: "Fast, installable, offline-capable web apps",
			bullets: ["Service Workers", "Offline Caching", "App-like UX"],
		},
		{
			icon: Cloud,
			title: "Cloud Storage & Media Management",
			blurb: "Cloudinary, R2, and optimized delivery",
			bullets: ["Image CDN", "Video Processing", "Asset Optimization"],
		},
		{
			icon: Puzzle,
			title: "Custom Plugins & Extensions",
			blurb: "Code-driven extensions and utilities for modern web stacks",
			bullets: [
				"Next.js Components",
				"TypeScript Packages",
				"API Integrations",
			],
		},

		{
			icon: FileText,
			title: "Content Management Solutions",
			blurb: "Headless CMS & structured workflows",
			bullets: ["Sanity / Strapi", "Content APIs", "Collaborative Editing"],
		},
	];

	return (
		<section id="services" className="relative bg-[#030712] py-16 sm:py-24">
			{/* Grid background */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.12]"
				style={{
					backgroundImage:
						"repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 28px)",
					maskImage:
						"radial-gradient(900px 480px at 50% 30%, rgba(0,0,0,0.85), transparent 70%)",
					WebkitMaskImage:
						"radial-gradient(900px 480px at 50% 30%, rgba(0,0,0,0.85), transparent 70%)",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-6">
				<div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/70 backdrop-blur">
						<span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
						Our Services
					</div>
					<h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						What We{" "}
						<span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
							Offer
						</span>
					</h2>
					<p className="mt-3 text-white/70">
						End-to-end digital solutions — from web design to enterprise
						automation.
					</p>
				</div>

				{/* Equal-height, perfectly aligned cards */}
				<div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((cap, i) => (
						<TiltCard key={cap.title} index={i} {...cap} />
					))}
				</div>
			</div>
		</section>
	);
}

/* ------------------------------- Tilt Card ------------------------------- */
function TiltCard({
	icon: Icon,
	title,
	blurb,
	bullets,
	index,
}: Capability & { index: number }) {
	const ref = React.useRef<HTMLDivElement | null>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), {
		stiffness: 200,
		damping: 20,
	});
	const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
		stiffness: 200,
		damping: 20,
	});
	const scale = useSpring(1, { stiffness: 200, damping: 20 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current!.getBoundingClientRect();
		const px = e.clientX - rect.left - rect.width / 2;
		const py = e.clientY - rect.top - rect.height / 2;
		x.set(px / 4);
		y.set(py / 4);
	};

	const handleLeave = () => {
		x.set(0);
		y.set(0);
		scale.set(1);
	};

	const delay = 0.05 * index;

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={handleLeave}
			onMouseEnter={() => scale.set(1.02)}
			style={{
				rotateX,
				rotateY,
				scale,
				transformStyle: "preserve-3d",
				willChange: "transform",
			}}
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.5, delay }}
			className="group relative h-full transform-gpu rounded-2xl p-[1px] [perspective:1000px]">
			{/* Gradient frame */}
			<div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/35 to-emerald-500/35 blur-[1.5px] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

			{/* Card body */}
			<div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_0_24px_rgba(0,255,200,0.05)] backdrop-blur-xl">
				{/* Header (normalized height) */}
				<div className="flex items-start gap-3">
					<div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/25 to-emerald-400/25 ring-1 ring-white/10">
						<div className="absolute inset-0 -z-0 rounded-xl blur-md bg-gradient-to-br from-cyan-400/25 to-emerald-400/25" />
						<Icon className="relative h-5 w-5 text-cyan-300" />
					</div>

					{/* Title + blurb block with fixed minimum to align rows */}
					<div className="min-w-0">
						<h3 className="leading-snug text-[15px] font-semibold text-white">
							{title}
						</h3>
						<p className="text-[12.5px] leading-relaxed text-white/70 min-h-[36px]">
							{blurb}
						</p>
					</div>
				</div>

				{/* Bullets */}
				<ul className="mt-4 flex flex-wrap gap-2">
					{bullets.map((b) => (
						<li
							key={b}
							className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/75">
							{b}
						</li>
					))}
				</ul>

				{/* Spacer to push the glow line to consistent bottom */}
				<div className="flex-1" />

				{/* Bottom glow line */}
				<div className="pointer-events-none h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400/70 to-emerald-400/70 opacity-70" />
			</div>
		</motion.div>
	);
}
