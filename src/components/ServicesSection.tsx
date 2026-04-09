import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Globe",
    title: "Упаковка бизнеса",
    description:
      "Создадим продающий сайт с вашими услугами, оформим профессиональные соцсети, будем вести контент и сделаем привлекательное оформление на Авито — чтобы клиент сразу доверял.",
  },
  {
    icon: "Star",
    title: "Управление репутацией",
    description:
      "Собираем и публикуем отзывы на Авито, Яндекс Услугах и Профи.ру. Формируем положительный образ вашей бригады, чтобы клиенты выбирали именно вас.",
  },
  {
    icon: "TrendingUp",
    title: "Профессиональная реклама",
    description:
      "Настраиваем таргетированную и контекстную рекламу с экономией бюджета. Приводим только целевые заявки от людей, которым действительно нужен ремонт.",
  },
  {
    icon: "PhoneCall",
    title: "Ответы на звонки и заявки",
    description:
      "Берём на себя все входящие звонки и сообщения. Записываем клиентов на замер, отвечаем быстро и профессионально — вы занимаетесь работой, мы занимаемся общением.",
  },
  {
    icon: "FileText",
    title: "Составление сметы",
    description:
      "Формируем полную детальную смету с перечнем всех работ и материалов. Клиент видит прозрачное ценообразование и принимает решение быстрее.",
  },
  {
    icon: "MessageSquare",
    title: "Дожим после замера",
    description:
      "Если клиент молчит после замера и получения сметы — мы мягко напоминаем, отвечаем на возражения и доводим до подписания договора. Не теряем ни одну заявку.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для роста вашей <span className="text-primary">бригады</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Мы берём на себя всё — от создания образа до закрытия сделки. Вы занимаетесь ремонтом, мы приводим клиентов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Star" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
