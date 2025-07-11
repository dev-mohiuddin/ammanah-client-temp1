"use client";

import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SIZES = [
  { id: "250ml", label: "250ml", price: 0, calories: 200 },
  { id: "500ml", label: "500ml", price: 0.56, calories: 350 },
  { id: "750ml", label: "750ml", price: 1.56, calories: 450 },
];

const INGREDIENTS = [
  { id: "lemon", label: "Lemon", price: 0 },
  { id: "orange-ing", label: "Orange", price: 0.56 },
  { id: "blueberry-ing", label: "Blueberry", price: 1.56 },
];

const ADD_ONS = [
  { id: "lemon-add", label: "Lemon", price: 0 },
  { id: "banana", label: "Banana", price: 0 },
  { id: "orange-add", label: "Orange", price: 0.56 },
  { id: "blueberry-add-1", label: "Blueberry", price: 1.56 },
  { id: "blueberry-add-2", label: "Blueberry", price: 1.56 },
  { id: "blueberry-add-3", label: "Blueberry", price: 1.56 },
  { id: "blueberry-add-4", label: "Blueberry", price: 1.56 },
  { id: "blueberry-add-5", label: "Blueberry", price: 1.56 },
  { id: "extra-olive", label: "Extra Olive", price: 0.8 },
  { id: "mango-add", label: "Mango", price: 1.2 },
];

const MODIFIERS = [
  { id: "hot", label: "Hot" },
  { id: "soucy", label: "Soucy" },
  { id: "thick", label: "Thick" },
  { id: "chili", label: "Chili" },
  { id: "corianer", label: "Oil" },
  { id: "well-done", label: "Well Done/Well Coocked" },
  { id: "garlic", label: "Garlic" },
  { id: "pepper", label: "Pepper" },
  { id: "mild", label: "Mild" },
  { id: "chase", label: "Chase" },
];

function AddProductModal({ product, isOpen, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState("250ml");
  const [selectedIngredientIds, setSelectedIngredientIds] = useState(["lemon"]);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([
    "lemon-add",
    "banana",
  ]);
  const [selectedAllergenId, setSelectedAllergenId] = useState("sf");

  const selectedSize = SIZES.find((s) => s.id === selectedSizeId);
  const selectedIngredients = INGREDIENTS.filter((i) =>
    selectedIngredientIds.includes(i.id)
  );
  const selectedAddOns = ADD_ONS.filter((a) => selectedAddOnIds.includes(a.id));
  const selectedAllergen = MODIFIERS.find((a) => a.id === selectedAllergenId);

  const totalPrice = useMemo(() => {
    let total = product.basePrice;
    if (selectedSize) total += selectedSize.price;
    selectedIngredients.forEach((i) => (total += i.price));
    selectedAddOns.forEach((a) => (total += a.price));
    return total * quantity;
  }, [
    quantity,
    selectedSize,
    selectedIngredients,
    selectedAddOns,
    product.basePrice,
  ]);

  const resetSelections = () => {
    setQuantity(1);
    setSelectedSizeId("250ml");
    setSelectedIngredientIds(["lemon"]);
    setSelectedAddOnIds(["lemon-add", "banana"]);
    setSelectedAllergenId("sf");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <ScrollArea>
        <DialogContent className="sm:max-w-[1025px] h-[80vh]">
          <div className="flex gap-8">
            <div className="w-full  flex flex-col ">
              <header className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{product.name}</h2>
              </header>

              <ScrollArea className="h-[calc(80vh-90px)] px-2">
                <div className="flex gap-6 mb-4">
                  <div className="relative w-1/3 h-36">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="font-semibold text-lg">Item Info</h3>
                    <p className="text-sm ">{product.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-muted px-3 py-1 rounded text-sm">
                    Out 23.56
                  </span>
                  <span className="bg-muted px-3 py-1 rounded text-sm">
                    IN 13.56
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["V", "VG", "GF", "HOT", "MEDIUM", "VERY HOT", "MILD"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-col gap-6">
                  {/* Quantity */}
                  <div>
                    <h4 className="font-semibold mb-2">Quantity</h4>
                    <div className="flex items-center gap-4 bg-muted w-fit rounded">
                      <Button
                        variant="ghost"
                        size="sm"
                        className=""
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        -
                      </Button>
                      <span>{quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Size Variant */}
                  <div>
                    <h4 className="font-semibold mb-2">Size variant</h4>
                    <ToggleGroup
                      type="single"
                      value={selectedSizeId}
                      onValueChange={(value) =>
                        value && setSelectedSizeId(value)
                      }
                      className="justify-start gap-4 relative"
                    >
                      {SIZES.map((size) => (
                        <ToggleGroupItem
                          key={size.id}
                          value={size.id}
                          className="h-auto relative flex p-1 px-4 data-[state=on]:bg-primary/20 data-[state=on]:border-primary border-1 "
                        >
                          <span>{size.label}</span>
                          <span className="text-xs ">
                            {size.price > 0 ? `+${size.price.toFixed(2)}` : ""}
                          </span>
                          <span className="text-xs ">{size.calories} kcal</span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-semibold mb-2">Ingredients</h4>
                    <ToggleGroup
                      type="multiple"
                      value={selectedIngredientIds}
                      onValueChange={setSelectedIngredientIds}
                      className="justify-start gap-4"
                    >
                      {INGREDIENTS.map((ing) => (
                        <ToggleGroupItem
                          key={ing.id}
                          value={ing.id}
                          className="h-auto relative flex p-1 px-4 data-[state=on]:bg-primary/20 data-[state=on]:border-primary border-1 "
                        >
                          <span>{ing.label}</span>
                          <span className="text-xs ">
                            {ing.price > 0 ? `+${ing.price.toFixed(2)}` : ""}
                          </span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Add-ons</h4>
                    <ToggleGroup
                      type="multiple"
                      value={selectedAddOnIds}
                      onValueChange={setSelectedAddOnIds}
                      className="grid grid-cols-4 gap-4"
                    >
                      {ADD_ONS.slice(0, 8).map((addon) => (
                        <ToggleGroupItem
                          key={addon.id}
                          value={addon.id}
                          aria-label={addon.label}
                          className="h-auto relative flex p-1 px-4 data-[state=on]:bg-primary/20 data-[state=on]:border-primary border-1 "
                        >
                          <span>{addon.label}</span>
                          <span className="text-xs ">
                            {addon.price > 0
                              ? `+${addon.price.toFixed(2)}`
                              : ""}
                          </span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  {/* Allergen */}
                  <div>
                    <h4 className="font-semibold mb-2">Modifier</h4>
                    <ToggleGroup
                      type="multiple"
                      value={selectedAllergenId}
                      onValueChange={(value) =>
                        value && setSelectedAllergenId(value)
                      }
                      className="grid grid-cols-3 gap-4"
                    >
                      {MODIFIERS.map((modifire) => (
                        <ToggleGroupItem
                          key={modifire.id}
                          value={modifire.id}
                          className="h-auto relative flex p-1 px-4 data-[state=on]:bg-primary/20 data-[state=on]:border-primary border-1 "
                        >
                          <span>{modifire.label}</span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Button className="flex-1 text-white bg-red-600 hover:bg-red-700">
                      No
                    </Button>
                    <Button className="flex-1 text-white bg-blue-600 hover:bg-blue-700">
                      Less
                    </Button>
                    <Button className="flex-1 text-white bg-blue-500 hover:bg-blue-600">
                      More
                    </Button>
                    <Button className="flex-1 text-white bg-purple-600 hover:bg-purple-700">
                      Extra
                    </Button>
                    <Button
                      onClick={resetSelections}
                      className="flex-1 text-white bg-teal-500 hover:bg-teal-600"
                    >
                      Clear All
                    </Button>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary text-black font-bold text-lg py-6">
                    Add to cart - £ {totalPrice.toFixed(2)}
                  </Button>
                </div>
              </ScrollArea>
            </div>

            {/* Right Panel: Summary */}
            <div className="w-1/3 mt-14">
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <h4 className="text-primary font-bold mb-1">Size Variant</h4>
                  <p>
                    {selectedSize?.label} ({selectedSize?.calories}kcal)
                  </p>
                </div>
                <Separator className="" />

                {selectedIngredients.length > 0 && (
                  <div>
                    <h4 className="text-primary font-bold mb-1">Ingredients</h4>
                    {selectedIngredients.map((ing) => (
                      <div key={ing.id} className="flex justify-between">
                        <span>*Add- {ing.label}</span>
                        {ing.price > 0 && <span>+ {ing.price.toFixed(2)}</span>}
                      </div>
                    ))}
                  </div>
                )}
                <Separator className="" />

                {selectedAddOns.length > 0 && (
                  <div>
                    <h4 className="text-primary font-bold mb-1">Add-ons</h4>
                    {selectedAddOns.map((addon) => (
                      <div key={addon.id} className="flex justify-between">
                        <span>*Add- {addon.label}</span>
                        {addon.price > 0 && (
                          <span>+ {addon.price.toFixed(2)}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                <Separator className="" />

                <div>
                  <h4 className="text-primary font-bold mb-1">Allergen</h4>
                  <p>{selectedAllergen?.label.match(/\(([^)]+)\)/)[1]}</p>{" "}
                  {/* Extracts SF/VG */}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </ScrollArea>
    </Dialog>
  );
}

export default AddProductModal;
