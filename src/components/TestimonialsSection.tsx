import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "До Рем Офиса мы работали только по сарафану. Теперь в месяц приходит 15–20 заявок только с сайта и Авито. Загрузка на 2 месяца вперёд!",
    name: "Алексей К.",
    role: "Бригадир, Москва",
  },
  {
    quote:
      "Нам сделали красивый сайт, оформили все соцсети и запустили рекламу. Раньше я сам отвечал на звонки прямо во время работы. Теперь всё берут на себя — это бесценно.",
    name: "Дмитрий П.",
    role: "Мастер-отделочник, Санкт-Петербург",
  },
  {
    quote:
      "Отзывы на Яндексе и Профи.ру — это реально работает. Клиенты сами пишут: 'видели ваши отзывы, хотим с вами'. Репутация решает всё.",
    name: "Сергей В.",
    role: "Бригадир, Екатеринбург",
  },
  {
    quote:
      "Смета, которую они составляют — это просто огонь. Клиенты перестали торговаться, потому что всё прозрачно расписано. Конверсия в договор выросла вдвое.",
    name: "Иван М.",
    role: "Руководитель бригады, Казань",
  },
  {
    quote:
      "Было несколько клиентов, которые молчали после замера неделями. Рем Офис их 'дожал' — двое в итоге подписали договор на крупный ремонт. Деньги из воздуха!",
    name: "Роман Т.",
    role: "Отделочник, Новосибирск",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные отзывы бригадиров, которые уже работают с Рем Офис и получают стабильный поток заказов.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
