/** Consistent section padding + max width + scroll anchor. */
export default function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
