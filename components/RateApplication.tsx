"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import logo from "../public/images/logo.png";
import Image from "next/image";

export default function RateApplication() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    // Ici, vous pouvez ajouter la logique pour envoyer la note et le commentaire au serveur
    console.log(`Application rated: ${rating} stars`);
    console.log(`Comment: ${comment}`);
    setIsOpen(false);
    // Réinitialiser les valeurs après la soumission
    setRating(0);
    setComment("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-[100px] sm:w-auto text-paragraph-xs sm:text-paragraph-md hover:text-primary-500 text-primary-500 border-primary-500 border-2  "
        >
          Like Agrinet ?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <div className="relative h-10 w-10 flex flex-row">
              <p className="pr-4 font-satoshi text-heading-desktop-h6 font-semibold text-secondary-700">
                Rate
              </p>
              <Image
                src={logo}
                alt="Agrinet logo"
                className="w-8 h-[20px] lg:w-10 lg:h-[28px]"
              />
              <p className="font-poppins text-heading-desktop-h5 font-semibold text-secondary-700">
                Agrinet
              </p>
            </div>
          </DialogTitle>
          <DialogDescription>
            <p className="">
              How would you rate your experience with our application?
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex  py-4">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <Star
                key={index}
                className={`h-8 w-8 cursor-pointer transition-colors ${
                  ratingValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => handleRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
                fill={
                  ratingValue <= (hover || rating) ? "currentColor" : "none"
                }
              />
            );
          })}
        </div>
        <p className="text-center text-sm text-gray-500 ">
          {rating > 0 ? `You rated us ${rating} stars` : ""}
        </p>
        <Textarea
          placeholder="Tell us about your experience (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <DialogFooter className="mt-4">
          <Button className="bg-primary-500 hover:bg-primary-600" onClick={handleSubmit} disabled={rating === 0}>
            Submit Rating
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
