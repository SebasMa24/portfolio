export default function SectionDivider() {
  return (
    <div className="flex items-center gap-3 max-w-6xl mx-auto px-6">
      <span className="w-2 h-2 rounded-full border-2 border-accent shrink-0" />
      <span className="h-px flex-1 bg-line dark:bg-line" />
    </div>
  );
}
