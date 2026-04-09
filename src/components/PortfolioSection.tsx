import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const cases = [
  {
    title: "Бригада «МастерПро», Москва",
    category: "Упаковка + Реклама",
    result: "С 0 до 18 заявок в месяц за 3 недели",
    description:
      "Бригада работала по сарафану 4 года без сайта и соцсетей. Мы сделали сайт, оформили Авито, запустили рекламу — и уже через 3 недели пошли первые заявки с рекламы.",
    tags: ["Сайт", "Авито", "Яндекс Директ", "Отзывы"],
    icon: "Home",
    stat: "18",
    statLabel: "заявок / мес",
  },
  {
    title: "ИП Сергеев, Екатеринбург",
    category: "Репутация + Сметы",
    result: "Конверсия в договор выросла с 20% до 55%",
    description:
      "Клиенты приходили, но не закрывались на договор. Мы подключили составление детальных смет и дожим после замера — конверсия выросла почти втрое.",
    tags: ["Сметы", "Дожим", "Профи.ру", "Яндекс Услуги"],
    icon: "TrendingUp",
    stat: "55%",
    statLabel: "конверсия",
  },
  {
    title: "Бригада «Чистовой», Казань",
    category: "Полный пакет",
    result: "Загрузка на 2 месяца вперёд",
    description:
      "Подключили полный пакет: сайт, соцсети, реклама, ответы на звонки, сметы и дожим. Теперь бригадир занимается только работой, остальное делаем мы.",
    tags: ["Под ключ", "CRM", "Реклама", "Колл-центр"],
    icon: "Users",
    stat: "60+",
    statLabel: "дней загрузка",
  },
  {
    title: "Отделочная бригада, Санкт-Петербург",
    category: "Авито + ВКонтакте",
    result: "x3 заявки при том же рекламном бюджете",
    description:
      "Оптимизировали рекламный бюджет на Авито и запустили таргет ВКонтакте. Количество заявок утроилось без увеличения расходов на рекламу.",
    tags: ["Авито", "ВКонтакте", "Оптимизация", "Таргет"],
    icon: "Megaphone",
    stat: "x3",
    statLabel: "рост заявок",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные результаты отделочных бригад, которые доверились Рем Офис. Цифры говорят сами за себя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border hover:border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon name={item.icon} className="h-6 w-6" fallback="Star" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{item.stat}</div>
                    <div className="text-xs text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm font-medium text-muted-foreground mb-3 italic">"{item.result}"</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
