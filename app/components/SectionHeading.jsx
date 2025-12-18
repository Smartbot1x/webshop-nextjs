export default function SectionHeading({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/products",
  id,
}) {
  return (
    <div id={id} className="mx-auto max-w-3xl text-center px-4">
      <h2 className="text-[56px] leading-[62px] font-semibold tracking-[-2.4px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-[20px] leading-[28px] text-[#979797] tracking-[-0.4px]">
          {subtitle}
        </p>
      )}
      {ctaLabel && (
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center mt-6 h-[50px] px-8 border border-black text-black hover:bg-black hover:text-white transition"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
