import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [serviceType, setServiceType] = useState('');
  const [projectArea, setProjectArea] = useState([100]);
  const [complexity, setComplexity] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    let basePrice = 0;
    
    switch (serviceType) {
      case 'electrical':
        basePrice = 5000;
        break;
      case 'hvac':
        basePrice = 7000;
        break;
      case 'plumbing':
        basePrice = 4500;
        break;
      case 'automation':
        basePrice = 10000;
        break;
      default:
        basePrice = 0;
    }

    let complexityMultiplier = 1;
    switch (complexity) {
      case 'simple':
        complexityMultiplier = 1;
        break;
      case 'medium':
        complexityMultiplier = 1.5;
        break;
      case 'complex':
        complexityMultiplier = 2.2;
        break;
    }

    const total = basePrice * complexityMultiplier * (projectArea[0] / 100);
    setCalculatedPrice(Math.round(total));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные инженерные решения для любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Zap" className="text-primary mb-4" size={48} />
                <CardTitle>Электромонтаж</CardTitle>
                <CardDescription>Проектирование и монтаж электрических систем любой сложности</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Wind" className="text-primary mb-4" size={48} />
                <CardTitle>Вентиляция и кондиционирование</CardTitle>
                <CardDescription>Современные системы климат-контроля для комфорта</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Droplet" className="text-primary mb-4" size={48} />
                <CardTitle>Водоснабжение и канализация</CardTitle>
                <CardDescription>Надежные системы водопровода и водоотведения</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <Icon name="Cpu" className="text-primary mb-4" size={48} />
                <CardTitle>Автоматизация зданий</CardTitle>
                <CardDescription>Умные системы управления инженерными сетями</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/6753359d-f7a9-4fba-8849-8e9e37a1b035/files/760e901b-8ac3-4979-843a-33dae150e495.jpg" 
                alt="Команда инженеров" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Инженерно-Монтажное Общество — это команда профессионалов с 15-летним опытом в области 
                проектирования и монтажа инженерных систем.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на комплексном оснащении промышленных, коммерческих и жилых объектов 
                современными инженерными коммуникациями.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Профессионализм</div>
                    <div className="text-muted-foreground">Сертифицированные специалисты с многолетним опытом</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Качество</div>
                    <div className="text-muted-foreground">Используем только проверенное оборудование</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Гарантия</div>
                    <div className="text-muted-foreground">Полная гарантия на все выполненные работы</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии и инновации</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Применяем передовые технологии для достижения лучших результатов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Layers" className="text-accent mb-4" size={48} />
                <CardTitle>BIM-проектирование</CardTitle>
                <CardDescription>
                  Используем технологию информационного моделирования зданий для точного планирования всех систем
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Smartphone" className="text-accent mb-4" size={48} />
                <CardTitle>IoT и умные системы</CardTitle>
                <CardDescription>
                  Интеграция интернета вещей для автоматизации и удаленного управления инженерными сетями
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Activity" className="text-accent mb-4" size={48} />
                <CardTitle>Энергоэффективность</CardTitle>
                <CardDescription>
                  Внедряем энергосберегающие решения и возобновляемые источники энергии
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты, готовые решать задачи любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={48} />
                </div>
                <CardTitle>Алексей Петров</CardTitle>
                <CardDescription>Главный инженер</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={48} />
                </div>
                <CardTitle>Мария Сидорова</CardTitle>
                <CardDescription>Руководитель проектов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={48} />
                </div>
                <CardTitle>Дмитрий Иванов</CardTitle>
                <CardDescription>Ведущий электрик</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-primary" size={48} />
                </div>
                <CardTitle>Елена Васильева</CardTitle>
                <CardDescription>Специалист по автоматизации</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl opacity-90">
              Рассчитайте примерную стоимость вашего проекта
            </p>
          </div>
          <Card className="bg-background text-foreground">
            <CardHeader>
              <CardTitle>Параметры проекта</CardTitle>
              <CardDescription>Заполните данные для расчета стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service-type">Тип услуги</Label>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger id="service-type">
                    <SelectValue placeholder="Выберите тип услуги" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrical">Электромонтаж</SelectItem>
                    <SelectItem value="hvac">Вентиляция и кондиционирование</SelectItem>
                    <SelectItem value="plumbing">Водоснабжение и канализация</SelectItem>
                    <SelectItem value="automation">Автоматизация зданий</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Площадь объекта: {projectArea[0]} м²</Label>
                <Slider 
                  value={projectArea} 
                  onValueChange={setProjectArea}
                  min={50}
                  max={5000}
                  step={50}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="complexity">Сложность проекта</Label>
                <Select value={complexity} onValueChange={setComplexity}>
                  <SelectTrigger id="complexity">
                    <SelectValue placeholder="Выберите сложность" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simple">Простой</SelectItem>
                    <SelectItem value="medium">Средний</SelectItem>
                    <SelectItem value="complex">Сложный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={calculatePrice}
                disabled={!serviceType || !complexity}
              >
                Рассчитать стоимость
              </Button>

              {calculatedPrice > 0 && (
                <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center animate-scale-in">
                  <div className="text-sm text-muted-foreground mb-2">Примерная стоимость проекта</div>
                  <div className="text-4xl font-bold text-primary">
                    {calculatedPrice.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Точная стоимость определяется после выезда специалиста
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@imo-company.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Инженерная, д. 15</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Отправить запрос</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full">Отправить запрос</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
