import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "It's like Replit + GitHub + Copilot in one tab. Game-changer.",
      author: "Arjun M.",
      role: "Backend Dev",
      avatar: "AM",
    },
    {
      quote: "My team now shares internal tools through ZeroSetup. No docs needed.",
      author: "Sneha R.",
      role: "Engineering Manager",
      avatar: "SR",
    },
    {
      quote: "I built and deployed a Python app in a coffee shop using my iPad. Insane.",
      author: "Yusuf I.",
      role: "CS Student",
      avatar: "YI",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What People{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-400 mb-3" />
                  <p className="text-gray-300 text-lg italic">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
