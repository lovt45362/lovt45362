'use server'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  // Honeypot — bots fill hidden fields; humans don't.
  const honeypot = String(formData.get('company_website') ?? '').trim()
  if (honeypot) {
    return { status: 'success', message: 'Thank you — your enquiry has been received.' }
  }

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.'
  if (message.length < 10)
    errors.message = 'Please provide a little more detail (10+ characters).'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please correct the highlighted fields and try again.',
      errors,
    }
  }

  // No mailbox is connected yet, so we log the enquiry server-side. Connect an
  // email or CRM integration to route these to your inbox.
  console.log('[v0] New enquiry received:', {
    name,
    email,
    phone,
    service: formData.get('service'),
    budget: formData.get('budget'),
    message,
  })

  return {
    status: 'success',
    message:
      'Thank you — your enquiry has been received. A member of our team will be in touch shortly.',
  }
}
