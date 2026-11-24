
type Props = {
  title: string
  description: string
}

export default function Placeholder({ title, description }: Props) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-[#182848]">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        {description}
      </p>
    </main>
  )
}
