"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Textarea } from "@repo/design-system/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/components/ui/select";
import { Label } from "@repo/design-system/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more detail about your project"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Engineering & Product Development",
  "OEM Specialty Printers",
  "Contract Manufacturing",
  "Multiple Services",
  "Other / Not Sure",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-muted/30 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. Our team will review your inquiry and
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="John"
            {...register("firstName")}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Smith"
            {...register("lastName")}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.com"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            placeholder="Acme Corp"
            {...register("company")}
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service of Interest *</Label>
        <Select onValueChange={(value) => setValue("service", value)}>
          <SelectTrigger id="service" aria-invalid={!!errors.service}>
            <SelectValue placeholder="Select a service..." />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
          rows={5}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our privacy policy. We&apos;ll
        never share your information with third parties.
      </p>
    </form>
  );
}
