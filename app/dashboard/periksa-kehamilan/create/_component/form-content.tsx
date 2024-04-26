import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react';
import { urbanist } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

export function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      <h1 className={`${urbanist.className} text-xl font-bold`}>{title}</h1>
      <p className="text-sm font-medium text-[#597395]">{subtitle}</p>
    </div>
  );
}

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <section className="w-full space-y-4 rounded-md bg-white p-6">
      {children}
    </section>
  );
}

type RowProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Row({ children, className, ...rest }: RowProps) {
  return (
    <div className={cn('grid grid-cols-12 gap-4', className)} {...rest}>
      {children}
    </div>
  );
}

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form'>;

type DataProps = {
  label: string | number;
  value: string;
};

type InputType =
  | 'button'
  | 'checkbox'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'textarea'
  | 'select';

export function InputField<TFieldValues extends FieldValues = FieldValues>({
  form,
  name,
  data,
  ...props
}: InputProps & {
  type?: InputType;
  label?: string;
  data?: DataProps[] | [];
  description?: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
}) {
  if (props.type === 'checkbox') {
    return (
      // TODO: Still messed up 🥹
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3 flex flex-col', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            {props.description && (
              <FormDescription>{props.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  } else if (props.type === 'select') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {data && data.length > 0 ? (
                  data.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="-" disabled>
                    No data
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            {props.description && (
              <FormDescription>{props.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  } else if (props.type === 'textarea') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Textarea placeholder={props.placeholder} {...field} />
            </FormControl>
            {props.description && (
              <FormDescription>{props.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  } else {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input {...props} {...field} />
            </FormControl>
            {props.description && (
              <FormDescription>{props.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
}
