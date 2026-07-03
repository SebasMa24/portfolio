type CardProps = {
  image: string;
  title: string;
  description: string;
  technology: string;
  frontend: string;
  backend: string;
  github: string;
};

const tags = (str: string) =>
  str.split(" - ").filter(Boolean);

export default function CardLong({
  image,
  title,
  description,
  technology,
  frontend,
  backend,
  github,
}: CardProps) {
  return (
    <article className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
      <div className="md:col-span-2 overflow-hidden rounded-lg border border-line dark:border-line bg-surface dark:bg-surface">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-48 object-cover object-center"
        />
      </div>
      <div className="md:col-span-3">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink dark:text-ink">
          {title}
        </h3>
        <p className="font-body text-sm md:text-base leading-relaxed text-muted mt-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags(technology).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-surface dark:bg-surface border border-line dark:border-line font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {frontend && (
            <a
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-accent/80 transition-colors no-underline"
            >
              Frontend &rarr;
            </a>
          )}
          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-accent/80 transition-colors no-underline"
            >
              Backend &rarr;
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-accent/80 transition-colors no-underline"
            >
              GitHub &rarr;
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
