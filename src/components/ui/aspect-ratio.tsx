import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { cn } from "@/lib/utils"; // same cn utility as before

interface AspectRatioProps
  extends React.ComponentProps<typeof AspectRatioPrimitive.Root> {
  className?: string;
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn("relative w-full", className)}
    {...props}
  />
));

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
