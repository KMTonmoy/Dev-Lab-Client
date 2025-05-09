import { Code, Palette, Layers, Zap } from "lucide-react"

const features = [
  {
    name: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: Code,
  },
  {
    name: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience.",
    icon: Palette,
  },
  {
    name: "Full-Stack ",
    description: "End-to-end development from database to frontend implementation.",
    icon: Layers,
  },
  {
    name: "Performance Optimization",
    description: "Fast-loading, responsive websites optimized for all devices.",
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Services</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          We offer a comprehensive range of web development and design services.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

