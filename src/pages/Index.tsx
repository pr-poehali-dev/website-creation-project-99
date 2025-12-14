import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "MessageSquare",
      title: "Чаты и каналы",
      description: "Общайтесь с друзьями, коллегами и подписывайтесь на интересные каналы"
    },
    {
      icon: "Zap",
      title: "Мини-приложения",
      description: "Заказывайте еду, вызывайте такси и оплачивайте услуги прямо в мессенджере"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защита данных и приватность общения на высшем уровне"
    },
    {
      icon: "Smile",
      title: "Стикеры и эмодзи",
      description: "Тысячи стикеров и анимированных эмодзи для выражения эмоций"
    },
    {
      icon: "Users",
      title: "Групповые чаты",
      description: "Создавайте группы до 10 000 участников"
    },
    {
      icon: "Phone",
      title: "Звонки",
      description: "Голосовые и видеозвонки в HD качестве"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="font-display font-bold text-2xl">MAX</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Скачать</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О приложении</a>
            </div>
            <Button className="hidden md:flex">
              Скачать MAX
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-background -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              🚀 Мессенджер нового поколения
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Скачайте приложение
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">MAX</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Общайтесь с близкими, работайте в командах и используйте сотни мини-приложений — всё в одном месте
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg h-14 px-8 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                <Icon name="Apple" className="mr-2" size={24} />
                App Store
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2">
                <Icon name="Smartphone" className="mr-2" size={24} />
                Google Play
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Доступно на iOS, Android и Desktop
            </div>
          </div>

          <div className="mt-20 relative animate-scale-in">
            <div className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-2xl">
              <div className="text-9xl">📱</div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Мини-приложений</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Каналов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-primary mb-4">ВОЗМОЖНОСТИ</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Всё, что нужно для общения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              MAX объединяет лучшее из мира мессенджеров и добавляет уникальные возможности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-6">
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-12 md:p-16 bg-gradient-to-br from-primary to-purple-600 text-white border-0 shadow-2xl animate-scale-in">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Начните использовать MAX прямо сейчас
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Присоединяйтесь к миллионам пользователей по всему миру
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="text-lg h-14 px-10 bg-white text-primary hover:bg-white/90">
                  <Icon name="Apple" className="mr-2" size={24} />
                  Скачать для iOS
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-10 border-2 border-white text-white hover:bg-white/10">
                  <Icon name="Smartphone" className="mr-2" size={24} />
                  Скачать для Android
                </Button>
              </div>

              <div className="flex justify-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Monitor" size={16} />
                  Windows
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Apple" size={16} />
                  macOS
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  Web
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="text-sm font-medium text-primary mb-4">О ПРИЛОЖЕНИИ</div>
              <h2 className="font-display text-4xl font-bold mb-6">MAX — больше, чем мессенджер</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                MAX — это экосистема для общения, работы и развлечений. Мы создали платформу, которая объединяет всё необходимое в одном приложении.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                От простых текстовых сообщений до мини-приложений для заказа еды, бронирования отелей и оплаты услуг — MAX делает вашу цифровую жизнь проще.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground">Полностью бесплатно</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground">Без рекламы</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" className="text-primary" size={18} />
                  </div>
                  <span className="text-foreground">Защита данных</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-9xl backdrop-blur-sm border border-primary/20">
                💬
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <span className="font-display font-bold text-xl">MAX</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Мессенджер нового поколения для общения и бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">iOS приложение</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Android приложение</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Desktop версия</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Web версия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Пресс-центр</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 MAX. Все права защищены.
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
