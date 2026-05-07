"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Input } from "@repo/design-system/components/ui/input";
import { Label } from "@repo/design-system/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system/components/ui/select";
import { Textarea } from "@repo/design-system/components/ui/textarea";
import type { ActionResult } from "@repo/next-config/action-result";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/actions/contact";

const services = [
  "Engineering & Product Development",
  "OEM Specialty Printers",
  "Contract Manufacturing",
  "Multiple Services",
  "Other / Not Sure",
];

type ContactActionData = {
  message: string;
};

const initialState: ActionResult<ContactActionData> | null = null;
const hasData = (
  state: ActionResult<ContactActionData> | null
): state is { data: ContactActionData } => Boolean(state && "data" in state);
const hasError = (
  state: ActionResult<ContactActionData> | null
): state is { error: string; fieldErrors?: Record<string, string[] | undefined> } =>
  Boolean(state && "error" in state);

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
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
  );
};

export function ContactForm({ locale }: { locale: string }) {
  const [selectedService, setSelectedService] = useState("");
  const [state, formAction] = useActionState(submitContact, initialState);

  const errorState = hasError(state) ? state : null;
  const fieldErrors = errorState?.fieldErrors;

  if (hasData(state)) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-muted/30 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="size-7 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          {state.data.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="service" value={selectedService} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="John"
            aria-invalid={Boolean(fieldErrors?.firstName?.length)}
          />
          {fieldErrors?.firstName?.[0] && (
            <p className="text-xs text-destructive">{fieldErrors.firstName[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Smith"
            aria-invalid={Boolean(fieldErrors?.lastName?.length)}
          />
          {fieldErrors?.lastName?.[0] && (
            <p className="text-xs text-destructive">{fieldErrors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@company.com"
          aria-invalid={Boolean(fieldErrors?.email?.length)}
        />
        {fieldErrors?.email?.[0] && (
          <p className="text-xs text-destructive">{fieldErrors.email[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company *</Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Corp"
            aria-invalid={Boolean(fieldErrors?.company?.length)}
          />
          {fieldErrors?.company?.[0] && (
            <p className="text-xs text-destructive">{fieldErrors.company[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service of Interest *</Label>
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger
            id="service"
            className="w-full"
            aria-invalid={Boolean(fieldErrors?.service?.length)}
          >
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
        {fieldErrors?.service?.[0] && (
          <p className="text-xs text-destructive">{fieldErrors.service[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
          rows={5}
          aria-invalid={Boolean(fieldErrors?.message?.length)}
        />
        {fieldErrors?.message?.[0] && (
          <p className="text-xs text-destructive">{fieldErrors.message[0]}</p>
        )}
      </div>

      {errorState?.error ? (
        <p className="text-sm text-destructive">{errorState.error}</p>
      ) : null}

      <SubmitButton />

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our privacy policy. We&apos;ll
        never share your information with third parties.
      </p>
    </form>
  );
}
