import { MapPin, Car, Bus, Train, Navigation, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const HowToGetThere = () => {
  const [selectedMethod, setSelectedMethod] = useState("walk");

  const transportMethods = [
    {
      id: "walk",
      icon: Navigation,
      title: "Пешком",
      description: "Час ходьбы от центра",
      details: [
        "От площади Советской — 4 км",
        "Удобная пешеходная зона вдоль пр-та Я. Купалы",
      ],
    },
    {
      id: "public",
      icon: Bus,
      title: "Общественный транспорт",
      description: "Автобусы и троллейбусы",
      details: [
        "Автобусы: №26, 38, 59, 30, 37, 44, 58",
        "Троллейбусы: №12, 8, 9",
        "Маршрутки: №36, 17",
        "Остановка «ТРК TRINITI» (проспект Янки Купалы)",
        "Интервал движения: 5-15 минут",
      ],
    },
    {
      id: "railway",
      icon: Train,
      title: "От ж/д вокзала",
      description: "6 км, 10 минут на такси",
      details: [
        "Железнодорожный вокзал Гродно — 6 км",
        "На такси: 15 минут",
        "Автобусы №2, 16 от вокзала",
        "Остановка рядом с входом в ТРК",
      ],
    },
    {
      id: "bus_station",
      icon: Bus,
      title: "От автовокзала",
      description: "5 км, 10 минут на такси",
      details: [
        "Автовокзал (ул. Красноармейская, 7а) — 5 км",
        "На такси: 10 минут",
      ],
    },
    {
      id: "car",
      icon: Car,
      title: "На автомобиле",
      description: "Бесплатная парковка",
      details: [
        "С центра — по пр-ту Янки Купалы н",
        "Адрес для навигатора: пр-т Я. Купалы, 87",
        "Большая бесплатная парковка",
        "Удобный въезд с проспекта",
        "25 минут из любой точки города",
      ],
    },
  ];

  const currentMethod = transportMethods.find(m => m.id === selectedMethod) || transportMethods[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(4_90%_58%/0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_65%_60%/0.2),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              КАК ДОБРАТЬСЯ
            </h1>
            <p className="text-xl text-muted-foreground">
              ТРК TRINITI в Гродно — в самом центре событий
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <MapPin className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Адрес</h3>
            </div>
            <p className="text-foreground text-lg mb-4">
              г. Гродно, пр-т Янки Купалы, 87
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                data-testid="button-google-maps"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=53.649866,23.854529', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Google карты
              </Button>
              <Button 
                data-testid="button-yandex-maps"
                variant="secondary"
                onClick={() => window.open('https://yandex.by/maps/?rtext=~53.649866,23.854529', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Яндекс карты
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Transport & Map Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Выберите удобный способ
          </h2>

          <div className="grid lg:grid-cols-[420px_1fr] gap-6">
            {/* Transport Selection */}
            <Card className="bg-gradient-card border-border p-6 h-fit">
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                <div className="space-y-4">
                  {transportMethods.map((method) => (
                    <div key={method.id} className="flex items-start gap-3">
                      <RadioGroupItem 
                        value={method.id} 
                        id={method.id} 
                        className="mt-1"
                        data-testid={`radio-${method.id}`}
                      />
                      <Label 
                        htmlFor={method.id} 
                        className="flex items-start gap-3 cursor-pointer flex-1"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <method.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold mb-1">{method.title}</div>
                          <div className="text-sm text-muted-foreground">{method.description}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>

            {/* Map with Details */}
            <Card className="overflow-hidden border-border bg-card">
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary animate-bounce" />
                </div>
              </div>
              
              <div className="p-6 bg-card border-t border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <currentMethod.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1" data-testid="text-method-title">
                      {currentMethod.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{currentMethod.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {currentMethod.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/90">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  data-testid="button-build-route"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=53.649866,23.854529`, '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </Card>
          </div>

          {/* Parking Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-gradient-card border-border p-6 text-center">
              <Car className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Парковка</h3>
              <p className="text-sm text-muted-foreground">
                Бесплатная парковка для посетителей
              </p>
            </Card>

            <Card className="bg-gradient-card border-border p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Часы работы</h3>
              <p className="text-sm text-muted-foreground">
                Магазины: 10:00 - 22:00<br />
                Кафе: 10:00 - 23:00
              </p>
            </Card>

            <Card className="bg-gradient-card border-border p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Справочная</h3>
              <p className="text-sm text-muted-foreground">
                +375 (152) 66-02-99
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="text-2xl font-bold text-primary mb-2">TRINITI</div>
          <p className="text-sm text-muted-foreground mb-2">
            г. Гродно, пр-т Янки Купалы, 87
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 ТРК TRINITI. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HowToGetThere;
