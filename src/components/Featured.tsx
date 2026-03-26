interface FeaturedProps {
  onBook?: () => void;
}

export default function Featured({ onBook }: FeaturedProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/eb51fb4b-5aed-4eb0-a45f-422c478b4756/files/21c09693-9ae4-44b7-80a7-18dfb4800f90.jpg"
          alt="Интерьер массажного кабинета"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="services">Наши преимущества</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Классический, спортивный, антицеллюлитный и расслабляющий массаж — подберём технику под ваше тело и цель.
          Опытные мастера, атмосфера покоя и результат с первого сеанса.
        </p>
        <button
          onClick={onBook}
          className="inline-block bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Записаться
        </button>
      </div>
    </div>
  );
}