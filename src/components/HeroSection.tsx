import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Инженерные решения будущего
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Точность, инновации и безупречное качество в каждом проекте
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollToSection('calculator')}>
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in relative">
            <img 
              src="https://cdn.poehali.dev/projects/6753359d-f7a9-4fba-8849-8e9e37a1b035/files/1dfd1fc7-066c-4608-acf0-749962f260cd.jpg" 
              alt="Современное инженерное оборудование" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <Icon name="Award" size={32} className="mb-2" />
              <div className="font-bold">Сертифицированы</div>
              <div className="text-sm">ISO 9001:2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
