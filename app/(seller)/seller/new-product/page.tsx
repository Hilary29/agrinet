"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductPost, SalePrice, DeliveryOptionType, SalePriceType, DeliveryOption, PaymentMode, SalePoint } from "@/types/marketplace";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, Trash2 } from 'lucide-react';

export default function NewProductPage() {
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<Partial<ProductPost>>({
    defaultValues: {
      description: "",
      status: "DRAFT",
      quantity: 0,
      lifespan: 30,
      sale_prices: [],
      delivery_prices: [],
      payment_modes: [],
      available_at: [],
    },
  });

  const { fields: salePriceFields, append: appendSalePrice, remove: removeSalePrice } = useFieldArray({
    control: form.control,
    name: "sale_prices",
  });

  const { fields: deliveryFields, append: appendDelivery, remove: removeDelivery } = useFieldArray({
    control: form.control,
    name: "delivery_prices",
  });

  const { fields: paymentFields, append: appendPayment, remove: removePayment } = useFieldArray({
    control: form.control,
    name: "payment_modes",
  });

  const { fields: salePointFields, append: appendSalePoint, remove: removeSalePoint } = useFieldArray({
    control: form.control,
    name: "available_at",
  });

  const onSubmit = async (data: Partial<ProductPost>) => {
    console.log(data);
  };

  return (
    <div className="space-y-[46px]">
      <section>
        <div className="flex flex-col bg-gradient-to-br from-white-50 to-primary-50 w-full px-4 sm:px-6 md:px-8 lg:px-32 py-24 pt-28 md:pt-32">
          <div className="flex flex-col items-center w-full max-w-[1186px] mx-auto">
            <div className="flex flex-col items-center max-w-2xl lg:max-w-3xl text-center">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold font-satoshi text-heading-desktop-h2 text-black-100 mb-4 sm:mb-5 md:mb-6 mx-12">
                Post New Product
              </h1>
              <p className="font-regular font-inter text-paragraph-md text-black-400 mb-6 sm:mb-8 md:mb-10">
                Add description and all about your product
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[1186px] mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                  <div className="lg:col-span-2 space-y-4 lg:space-y-8">
                    {/* General Information */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        General Information
                      </h2>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Description</FormLabel>
                              <FormControl>
                                <Textarea {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Quantity Available</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lifespan"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Lifespan (days)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        Pricing
                      </h2>
                      <div className="space-y-4">
                        {salePriceFields.map((field, index) => (
                          <div key={field.id} className="flex flex-col space-y-2 p-4 border rounded">
                            <FormField
                              control={form.control}
                              name={`sale_prices.${index}.salePriceType`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Price Type</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a price type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {Object.values(SalePriceType).map((type) => (
                                        <SelectItem key={type} value={type}>
                                          {type}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`sale_prices.${index}.value`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Price Value</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`sale_prices.${index}.currency`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Currency</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="button" variant="destructive" onClick={() => removeSalePrice(index)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Remove Price
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => appendSalePrice({ salePriceType: SalePriceType.RETAIL, value: 0, currency: "" } as SalePrice)}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" /> Add Price
                        </Button>
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        Delivery Options
                      </h2>
                      <div className="space-y-4">
                        {deliveryFields.map((field, index) => (
                          <div key={field.id} className="flex flex-col space-y-2 p-4 border rounded">
                            <FormField
                              control={form.control}
                              name={`delivery_prices.${index}.delivery_option`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Delivery Option</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a delivery option" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {Object.values(DeliveryOption).map((option) => (
                                        <SelectItem key={option} value={option}>
                                          {option}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name={`delivery_prices.${index}.delivery_cost`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Delivery Cost</FormLabel>
                                  <FormControl>
                                    <Input type="number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="button" variant="destructive" onClick={() => removeDelivery(index)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Remove Delivery Option
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => appendDelivery({ delivery_option: DeliveryOption.AT_SALE_POINT, delivery_cost: 0 } as DeliveryOptionType)}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" /> Add Delivery Option
                        </Button>
                      </div>
                    </div>

                    {/* Payment Modes */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        Payment Modes
                      </h2>
                      <div className="space-y-4">
                        {paymentFields.map((field, index) => (
                          <div key={field.id} className="flex flex-col space-y-2 p-4 border rounded">
                            <FormField
                              control={form.control}
                              name={`payment_modes.${index}.value`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Payment Mode</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="button" variant="destructive" onClick={() => removePayment(index)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Remove Payment Mode
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => appendPayment({ value: "" } as PaymentMode)}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" /> Add Payment Mode
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 lg:space-y-8">
                    {/* Product Media */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        Product Media
                      </h2>
                      <div className="space-y-4">
                        <FormItem>
                          <FormLabel>Product Images</FormLabel>
                          <FormControl>
                            <Input type="file" multiple accept="image/*" onChange={(e) => {
                              const files = Array.from(e.target.files || []);
                              setImages(files.map(file => URL.createObjectURL(file)));
                            }} />
                          </FormControl>
                        </FormItem>
                        <div className="grid grid-cols-2 gap-2">
                          {images.map((image, index) => (
                            <Image key={index} src={image} alt={`Product ${index + 1}`} className="w-full h-auto object-cover rounded"/>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sale Points */}
                    <div className="bg-white-50 rounded-md p-4 shadow-6dp-v2">
                      <h2 className="text-heading-desktop-h5 font-medium text-secondary-500 pb-4">
                        Sale Points
                      </h2>
                      <div className="space-y-4">
                        {salePointFields.map((field, index) => (
                          <div key={field.id} className="flex flex-col space-y-2 p-4 border rounded">
                            <FormField
                              control={form.control}
                              name={`available_at.${index}.location.address`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="button" variant="destructive" onClick={() => removeSalePoint(index)}>
                              <Trash2 className="mr-2 h-4 w-4" /> Remove Sale Point
                            </Button>
                          </div>
                        ))}
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => appendSalePoint({ location: { address: "" } } as SalePoint)}
                        >
                          <PlusCircle className="mr-2 h-4 w-4" /> Add Sale Point
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button type="submit">Soumettre</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

