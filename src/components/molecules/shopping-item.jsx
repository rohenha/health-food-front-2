import { Checkbox } from '@components/ui/checkbox'

export default function ShoppingItem({ name, id, cover, quantity = '' }) {
  return (
    <div className="flex items-center space-x-4">
      <label
        htmlFor={id}
        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full py-5 flex items-center space-x-4"
      >
        <img
          src={cover}
          alt="@shadcn"
          className="w-14 h-14 rounded-full aspect-square "
        />
        <span className="flex flex-col">
          <span className="text-lg font-medium">{name}</span>
          <span className="text-sm text-slate-500">{quantity}</span>
        </span>
      </label>
      <Checkbox id={id} className="h-8 w-8" />
    </div>
  )
}
