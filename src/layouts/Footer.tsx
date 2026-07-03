export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Sebasti&aacute;n Mart&iacute;nez
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/luis-sebastian-martinez-guerrero-85b085161/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SebasMa24"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors no-underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
