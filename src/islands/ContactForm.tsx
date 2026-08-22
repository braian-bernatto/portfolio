import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import type { ContactFormStrings } from '../i18n/ui';

interface Props {
  email: string;
  strings: ContactFormStrings;
}

const fieldBase =
  'w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/40';

export default function ContactForm({ email, strings }: Props): JSX.Element {
  const schema = z.object({
    name: z.string().min(2, strings.errors.name),
    email: z.email(strings.errors.email),
    message: z.string().min(10, strings.errors.message),
  });
  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: 'onBlur' });

  const onSubmit = async (values: FormValues) => {
    const subject = encodeURIComponent(`Portfolio contact — ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    await new Promise((r) => setTimeout(r, 600));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="glass-strong flex flex-col gap-4 rounded-2xl p-6 sm:p-7"
    >
      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">
        {strings.heading}
      </span>

      <Field label={strings.name} error={errors.name?.message}>
        <input
          type="text"
          autoComplete="name"
          placeholder={strings.placeholders.name}
          className={`${fieldBase} ${errors.name ? 'border-red-400/50' : 'border-white/10'}`}
          {...register('name')}
        />
      </Field>

      <Field label={strings.email} error={errors.email?.message}>
        <input
          type="email"
          autoComplete="email"
          placeholder={strings.placeholders.email}
          className={`${fieldBase} ${errors.email ? 'border-red-400/50' : 'border-white/10'}`}
          {...register('email')}
        />
      </Field>

      <Field label={strings.message} error={errors.message?.message}>
        <textarea
          rows={5}
          placeholder={strings.placeholders.message}
          className={`${fieldBase} resize-none ${errors.message ? 'border-red-400/50' : 'border-white/10'}`}
          {...register('message')}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-void transition-all duration-200 hover:bg-brand-bright hover:shadow-[0_0_28px_-6px] hover:shadow-brand/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-void/30 border-t-void" />
            {strings.opening}
          </>
        ) : (
          <>
            {strings.send}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </>
        )}
      </button>

      <p className="text-center text-xs text-faint">{strings.privacy}</p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-faint">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
