interface HeaderProps {
  className?: string;
  onBook?: () => void;
}

export default function Header({ className, onBook }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Студия массажа MAX</div>
        <nav className="flex gap-8">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <button
            onClick={onBook}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Запись
          </button>
        </nav>
      </div>
    </header>
  );
}
