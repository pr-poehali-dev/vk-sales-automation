import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "consultation",
      icon: "MessageCircle",
      title: "Консультация по VK",
      price: "5 000 ₽",
      duration: "60–90 минут",
      features: [
        "Разбор вашего VK",
        "Анализ конкурентов",
        "Чёткий план действий"
      ],
      badge: "Бесплатная при работе"
    },
    {
      id: "promotion",
      icon: "TrendingUp",
      title: "Продвижение без рекламы",
      price: "25 000 ₽",
      duration: "1 месяц",
      features: [
        "Упаковка сообщества",
        "Отстройка от конкурентов",
        "Контент на месяц (до 15 постов)",
        "Настройка кнопок и рассылок",
        "Простые боты для лидов"
      ]
    },
    {
      id: "advertising",
      icon: "Target",
      title: "Таргетированная реклама",
      price: "25 000 ₽",
      duration: "1 месяц",
      features: [
        "Сбор аудиторий",
        "Настройка и оптимизация",
        "Ежедневный контроль",
        "Бюджет: 20 000–100 000 ₽"
      ]
    },
    {
      id: "turnkey",
      icon: "Zap",
      title: "VK «под ключ»",
      price: "40 000 ₽",
      duration: "1 месяц",
      features: [
        "Контент + реклама + автоматизация",
        "Максимум за 1 месяц",
        "Полное ведение"
      ],
      badge: "Популярное"
    }
  ];

  const problems = [
    { icon: "XCircle", text: "Посты «для активности»" },
    { icon: "XCircle", text: "Хаотичный контент" },
    { icon: "XCircle", text: "Реклама без системы" },
    { icon: "XCircle", text: "Отсутствие обработки заявок" }
  ];

  const solutions = [
    { icon: "CheckCircle2", text: "Упаковываем сообщество под продажи" },
    { icon: "CheckCircle2", text: "Выстраиваем контент под заявки" },
    { icon: "CheckCircle2", text: "Подключаем автоматизацию и ботов" },
    { icon: "CheckCircle2", text: "Запускаем и оптимизируем рекламу" }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      company: "Онлайн-школа английского",
      text: "За месяц получили 47 заявок на бесплатный урок. Стоимость заявки — 320 ₽. Конверсия в оплату 28%.",
      result: "+47 заявок",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий Козлов",
      company: "Студия ремонта",
      text: "Первую заявку получили через 3 дня после запуска. За месяц закрыли 3 объекта. Окупили рекламу в 5 раз.",
      result: "ROI x5",
      avatar: "👨‍💼"
    },
    {
      name: "Елена Волкова",
      company: "Салон красоты",
      text: "Боты обрабатывают 80% обращений. Освободили администратора. Записи выросли на 35%.",
      result: "+35% записей",
      avatar: "👩"
    }
  ];

  const cases = [
    {
      title: "Фитнес-клуб",
      description: "Запуск рекламы абонементов",
      metrics: [
        { label: "Заявок", value: "124" },
        { label: "Стоимость заявки", value: "185 ₽" },
        { label: "Продано абонементов", value: "34" }
      ]
    },
    {
      title: "Стоматология",
      description: "Продвижение услуг имплантации",
      metrics: [
        { label: "Консультаций", value: "67" },
        { label: "Стоимость заявки", value: "420 ₽" },
        { label: "Договоров", value: "11" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg">Badaev Pro</h1>
              <p className="text-xs text-muted-foreground">Маркетинговое агентство</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#cases" className="text-sm hover:text-primary transition-colors">Кейсы</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Консультация
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-white">VK как источник клиентов</Badge>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent">
              Превращаем VK в канал продаж
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Если VK не приводит заявки — значит, он у вас не настроен. Мы делаем из сообщества рабочий инструмент, а не «витрину с постами».
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Наши кейсы
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-destructive/20 animate-slide-up">
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="XCircle" className="text-destructive" size={24} />
                  Что обычно не работает
                </h3>
                <div className="space-y-3">
                  {problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name={problem.icon} className="text-destructive mt-1" size={20} />
                      <span className="text-muted-foreground">{problem.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  Что делаем мы
                </h3>
                <div className="space-y-3">
                  {solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name={solution.icon} className="text-primary mt-1" size={20} />
                      <span>{solution.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Форматы работы</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Услуги и стоимость</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Без воды. По шагам. С понятным результатом.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeService === service.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name={service.icon} className="text-white" size={24} />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary">{service.badge}</Badge>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground">/ {service.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Выбрать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Bot" className="text-primary" size={32} />
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Боты и автоматизация</h3>
                  <p className="text-muted-foreground mb-4">
                    Автоответчики, ответы на частые вопросы. Лид-магнит под ключ — 10 000 ₽ (лендинг + бот + прогрев 5–7 сообщений)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="cases" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Результаты</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Кейсы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Конкретные цифры и результаты работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-bold text-2xl mb-2">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-6">{caseItem.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {caseItem.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">Отзывы</Badge>
            <h2 className="font-heading font-bold text-4xl mb-4">Что говорят клиенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты работы с агентством
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground">{review.text}</p>
                  <Badge className="bg-primary text-white">{review.result}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4">О нас</Badge>
          <h2 className="font-heading font-bold text-4xl mb-6">Badaev Pro</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Мы не работаем без брифа и не «пробуем». Есть задача — есть решение. По итогам — акт выполненных работ.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6">
              <Icon name="Users" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-heading font-bold text-xl mb-2">Системный подход</h3>
              <p className="text-sm text-muted-foreground">Работаем по проверенным методикам</p>
            </div>
            <div className="p-6">
              <Icon name="BarChart3" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-heading font-bold text-xl mb-2">Измеримые результаты</h3>
              <p className="text-sm text-muted-foreground">Считаем заявки, а не клики</p>
            </div>
            <div className="p-6">
              <Icon name="Shield" className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="font-heading font-bold text-xl mb-2">Документы</h3>
              <p className="text-sm text-muted-foreground">Акт выполненных работ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary via-purple-600 to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-heading font-bold text-4xl mb-6">Готовы получить заявки из VK?</h2>
          <p className="text-lg mb-8 opacity-90">
            Начните с бесплатной консультации. Разберём ваш VK и составим план действий.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Записаться на консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="font-heading font-bold">Badaev Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">Маркетинговое агентство</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Консультация</li>
                <li>Продвижение VK</li>
                <li>Реклама VK</li>
                <li>VK под ключ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@badaevpro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Badaev Pro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
