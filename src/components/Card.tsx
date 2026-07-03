type CardProps = {
  image: string;
  title: string;
};

export default function Card({ image, title }: CardProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface dark:bg-surface border border-line dark:border-line text-ink dark:text-ink font-mono text-xs">
      <img src={image} alt={title} className="w-4 h-4 object-contain shrink-0" />
      {title}
    </span>
  );
}
