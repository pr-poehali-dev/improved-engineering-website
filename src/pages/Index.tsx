import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PriceCalculator from '@/components/PriceCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header scrollToSection={scrollToSection} />
      
      <HeroSection scrollToSection={scrollToSection} />

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

      <PriceCalculator />

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

      <Footer />
    </div>
  );
};

export default Index;
