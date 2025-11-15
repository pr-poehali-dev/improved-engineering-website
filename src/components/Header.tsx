import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Zap" className="text-primary" size={32} />
          <span className="text-2xl font-bold">ИМО</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
          <button onClick={() => scrollToSection('technologies')} className="hover:text-primary transition-colors">Технологии</button>
          <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Команда</button>
          <button onClick={() => scrollToSection('calculator')} className="hover:text-primary transition-colors">Калькулятор</button>
          <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
        </div>
        <Button onClick={() => scrollToSection('contacts')}>Связаться</Button>
      </nav>
    </header>
  );
};

export default Header;
