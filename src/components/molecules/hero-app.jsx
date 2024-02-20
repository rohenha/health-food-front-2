export default function HeroApp({ title, subtitle }) {
  return (
    <header>
      <div className="space-y-0.5 mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full mb-16"
      ></div>
    </header>
  )
}
