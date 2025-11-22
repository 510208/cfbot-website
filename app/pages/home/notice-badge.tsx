export default function NoticeBadge({
  link,
  children,
  ...props
}: {
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={link ? String(link) : undefined}
      rel="noopener noreferrer"
      {...props}
    >
      <div className="bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2 mb-2">
        {children}
      </div>
    </a>
  );
}
