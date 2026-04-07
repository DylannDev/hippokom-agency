"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { PiPlusBold } from "react-icons/pi";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "flex flex-col text-lg sm:text-2xl font-semibold bg-white border border-blue-light text-left rounded-2xl sm:rounded-3xl cursor-pointer",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        className,
        "flex justify-between items-center p-6 sm:p-8 text-left cursor-pointer [&[data-state=open]>div]:rotate-45 w-full transition-all duration-300 ease-in-out"
      )}
      {...props}
    >
      {children}
      <div className="bg-blue-dark rounded-full p-2 sm:p-3 transition-transform duration-300 ml-4 sm:ml-10">
        <PiPlusBold className="text-xl sm:text-3xl text-white" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "max-w-[840px] px-6 sm:px-8 pb-6 sm:pb-8 overflow-hidden text-base sm:text-lg font-medium text-gray data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
