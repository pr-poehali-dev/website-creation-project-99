import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const skills = [
    { name: "React", level: 90, icon: "Code2" },
    { name: "TypeScript", level: 85, icon: "FileCode" },
    { name: "Node.js", level: 80, icon: "Server" },
    { name: "UI/UX Design", level: 75, icon: "Palette" },
    { name: "SQL", level: 70, icon: "Database" },
    { name: "Python", level: 65, icon: "Terminal" }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современная платформа для онлайн-торговли с интеграцией платежей и системой управления заказами",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "🛍️"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами и проектами с real-time синхронизацией",
      tech: ["TypeScript", "WebSocket", "Redis"],
      image: "✅"
    },
    {
      title: "Analytics Dashboard",
      description: "Интерактивная панель аналитики с визуализацией данных и отчётами",
      tech: ["React", "D3.js", "Python"],
      image: "📊"
    },
    {
      title: "Social Media App",
      description: "Социальная сеть с лентой новостей, чатом и системой уведомлений",
      tech: ["React Native", "GraphQL", "MongoDB"],
      image: "💬"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-display font-bold text-2xl">Portfolio</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О себе</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Навыки</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Проекты</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Добро пожаловать в моё портфолио
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создаю современные
              <br />
              <span className="text-primary">цифровые продукты</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Fullstack разработчик с опытом создания высоконагруженных веб-приложений и интерактивных интерфейсов
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg h-12 px-8">
                Смотреть проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-12 px-8">
                Скачать резюме
                <Icon name="Download" className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Удовлетворённость</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="text-sm font-medium text-primary mb-4">О СЕБЕ</div>
              <h2 className="font-display text-4xl font-bold mb-6">Превращаю идеи в реальность</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Занимаюсь разработкой более 5 лет. Специализируюсь на создании масштабируемых веб-приложений с современным стеком технологий.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мой подход — это сочетание технической экспертизы и внимания к деталям UI/UX. Я верю, что качественный продукт должен быть не только функциональным, но и приятным в использовании.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-9xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-primary mb-4">НАВЫКИ</div>
            <h2 className="font-display text-4xl font-bold mb-4">Технологии и инструменты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Работаю с современным стеком технологий для создания надёжных и производительных решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={skill.icon as any} className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">{skill.level}%</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-primary mb-4">ПОРТФОЛИО</div>
            <h2 className="font-display text-4xl font-bold mb-4">Избранные проекты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подборка моих последних работ — от стартапов до корпоративных решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="gap-2 group-hover:gap-4 transition-all">
                    Подробнее
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="text-sm font-medium text-primary mb-4">СВЯЗАТЬСЯ</div>
            <h2 className="font-display text-4xl font-bold mb-4">Давайте обсудим ваш проект</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Открыт к новым проектам и интересным предложениям
            </p>
          </div>

          <Card className="p-8 md:p-12 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-lg">
                Отправить сообщение
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Mail" className="text-primary" size={20} />
              </div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-muted-foreground">hello@example.com</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="Phone" className="text-primary" size={20} />
              </div>
              <div className="font-medium">Телефон</div>
              <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name="MapPin" className="text-primary" size={20} />
              </div>
              <div className="font-medium">Локация</div>
              <div className="text-sm text-muted-foreground">Москва, Россия</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Portfolio. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
