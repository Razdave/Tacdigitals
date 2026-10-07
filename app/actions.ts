'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'details', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim().slice(0, 120)
  const email = String(formData.get('email') ?? '').trim().slice(0, 200)
  const details = String(formData.get('details') ?? '').trim().slice(0, 5000)

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.'
  if (details.length < 10) errors.details = 'Tell us a little more about your project.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: `Thanks ${name.split(' ')[0]}! Our team will get back to you within one business day.`,
  }
}
