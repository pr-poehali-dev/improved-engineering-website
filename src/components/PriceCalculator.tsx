import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const PriceCalculator = () => {
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

  return (
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
  );
};

export default PriceCalculator;
