import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" size={24} />
              <span className="font-bold text-xl">ИМО</span>
            </div>
            <p className="text-sm opacity-80">
              Инженерно-Монтажное Общество — ваш надежный партнер в создании современных инженерных систем
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Электромонтаж</li>
              <li>Вентиляция</li>
              <li>Водоснабжение</li>
              <li>Автоматизация</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>О нас</li>
              <li>Технологии</li>
              <li>Команда</li>
              <li>Карьера</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+7 (495) 123-45-67</li>
              <li>info@imo-company.ru</li>
              <li>г. Москва, ул. Инженерная, д. 15</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 ИМО. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
