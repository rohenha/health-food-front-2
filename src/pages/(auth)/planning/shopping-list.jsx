import ShoppingItem from '@components/molecules/shopping-item'
import HeroApp from '@components/molecules/hero-app'

export default function ShoppingList() {
  return (
    <>
      <HeroApp
        title="Ma liste de courses"
        subtitle="Voyons voir ce qui te réserve aujourd'hui !"
      />
      <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
        <div className="grid grid-cols-1 divide-y lg:col-start-1 lg:col-end-3">
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Bananes"
            id="banana"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
          <ShoppingItem
            name="Emmental"
            id="emmental"
            cover="https://github.com/shadcn.png"
            quantity="200g"
          />
        </div>
        <div className="fixed bottom-24 py-2 px-6 left-1/2 transform -translate-x-1/2 border rounded-lg bg-background overflow-hidden lg:bottom-0 lg:left-0 lg:translate-x-0 lg:sticky lg:top-20">
          <p className="flex space-x-16 z-10 relative">
            <span>Progression</span>
            <span>10%</span>
          </p>
          <div className="bg-primary w-1/2 h-full top-0 absolute left-0 z-0"></div>
        </div>
      </div>
    </>
  )
}
