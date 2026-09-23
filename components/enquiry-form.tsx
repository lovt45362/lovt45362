'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitEnquiry, type EnquiryState } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { serviceOptions, budgetRanges } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const initialState: EnquiryState = { status: 'idle', message: '' }

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full bg-brand font-semibold text-brand-foreground hover:bg-brand/90 sm:w-auto"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending…
        </>
      ) : (
        label
      )}
    </Button>
  )
}

export function EnquiryForm({
  variant = 'quote',
  submitLabel = 'Send enquiry',
}: {
  variant?: 'quote' | 'contact'
  submitLabel?: string
}) {
  const [state, formAction] = useActionState(submitEnquiry, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-brand/30 bg-brand/5 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-brand" />
        <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  const err = state.errors ?? {}

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot field, hidden from users */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full name <span className="text-brand">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            aria-invalid={!!err.name}
            className={cn(err.name && 'border-destructive')}
          />
          {err.name && (
            <p className="text-xs text-destructive">{err.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-brand">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!err.email}
            className={cn(err.email && 'border-destructive')}
          />
          {err.email && (
            <p className="text-xs text-destructive">{err.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
        {variant === 'quote' && (
          <div className="space-y-2">
            <Label htmlFor="service">Service required</Label>
            <Select name="service">
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {variant === 'quote' && (
        <div className="space-y-2 sm:max-w-[calc(50%-0.75rem)]">
          <Label htmlFor="budget">Approximate budget</Label>
          <Select name="budget">
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">
          {variant === 'quote'
            ? 'Project details'
            : 'How can we help?'}{' '}
          <span className="text-brand">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={
            variant === 'quote'
              ? 'Tell us about your project — location, scope, timescales and any specific requirements.'
              : 'Let us know how we can help.'
          }
          aria-invalid={!!err.message}
          className={cn(err.message && 'border-destructive')}
        />
        {err.message && (
          <p className="text-xs text-destructive">{err.message}</p>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton label={submitLabel} />
    </form>
  )
}
