import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium variants for Florybal
        gold: "bg-accent text-accent-foreground font-semibold shadow-gold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700",
        hero: "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-chocolate-950 font-bold text-base px-8 py-4 rounded-full shadow-gold hover:shadow-[0_0_30px_hsl(38_70%_50%/0.5)] hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-500 animate-[pulse_3s_ease-in-out_infinite]",
        heroOutline: "border-2 border-gold-400/60 text-gold-200 font-semibold text-base px-8 py-4 rounded-full backdrop-blur-sm hover:bg-gold-400/20 hover:border-gold-300 hover:text-gold-100 hover:shadow-[0_0_20px_hsl(38_70%_50%/0.3)] transition-all relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-gold-400/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700",
        cta: "bg-primary text-primary-foreground font-semibold text-lg px-10 py-5 rounded-full shadow-elevated hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700",
        ctaGold: "bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-chocolate-950 font-bold text-lg px-10 py-5 rounded-full shadow-gold hover:shadow-[0_0_35px_hsl(38_70%_50%/0.5)] hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
