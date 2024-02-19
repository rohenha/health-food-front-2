import ShoppingItem from '@components/molecules/shopping-item'

export default function ShoppingList() {
  return (
    <>
      <div className="p-10 pt-16 pb-36">
        <div className="space-y-0.5 mb-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Ma liste de courses
          </h2>
          <p className="text-muted-foreground">
            Voyons voir ce qui te réserve aujourd'hui !
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full mb-16"
        ></div>
        <div className="grid grid-cols-1 divide-y">
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
      </div>
      <div className="fixed bottom-24 py-2 px-6 left-1/2 transform -translate-x-1/2 border rounded-lg bg-background overflow-hidden">
        <p className="flex space-x-16 z-10 relative">
          <span>Progression</span>
          <span>10%</span>
        </p>
        <div className="bg-primary w-1/2 h-full top-0 absolute left-0 z-0"></div>
      </div>
    </>
  )
}
