import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  "Классический массаж",
  "Спортивный массаж",
  "Расслабляющий массаж",
  "Антицеллюлитный массаж",
  "Массаж спины и шеи",
];

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00",
];

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Запись на массаж\n👤 ${name}\n📞 ${phone}\n💆 ${service}\n📅 ${date} в ${time}`
    );
    window.open(`https://wa.me/79040540384?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName(""); setPhone(""); setService(""); setDate(""); setTime("");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-lg font-bold uppercase tracking-wide">Запись на сеанс</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-black transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-green-500" />
            <p className="text-lg font-medium">Отправляем в WhatsApp...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Ваше имя</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как вас зовут?"
                className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Телефон</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Вид массажа</label>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white appearance-none cursor-pointer"
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wide text-neutral-500 mb-1 block">Дата</label>
              <input
                type="date"
                required
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wide text-neutral-500 mb-2 block">Время</label>
              <div className="grid grid-cols-4 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`py-2 text-sm border transition-colors ${
                      time === t
                        ? "bg-black text-white border-black"
                        : "border-neutral-200 hover:border-black"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!time}
              className="mt-2 w-full bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Записаться через WhatsApp
            </button>

            <p className="text-xs text-neutral-400 text-center">
              Мастер MAX подтвердит запись в WhatsApp
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
