'use client';
import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react';
import { urbanist } from '@/components/fonts';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Minus, Plus } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useState } from 'react';

type TitleSectionProps = {
  title: string;
  subtitle?: string;
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
  | 'toggle-group'
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
  suffix?: string;
  name: Path<TFieldValues>;
  form: UseFormReturn<TFieldValues>;
}) {
  const [showPassword, setShowPassword] = useState(false);
  if (props.type === 'checkbox') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem
            className={cn(
              'col-span-3 flex flex-col items-center justify-evenly',
              props.className,
            )}
          >
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
  } else if (props.type === 'date') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          if (typeof field.value === 'string') {
            (field as { value: Date }).value = new Date(field.value);
          }
          // Convert date data from object to just "yyyy-MM-dd"
          if (typeof field.value === 'object') {
            // Convert date data from object to just "yyyy-MM-dd"
            field.value = field.value.toISOString().split('T')[0];
          }
          return (
            <FormItem className={cn('col-span-3', props.className)}>
              <FormLabel>{props.label}</FormLabel>
              <FormControl>
                <Input type="date" {...props} {...field} />
              </FormControl>
              {props.description && (
                <FormDescription>{props.description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          );
        }}
      />
    );
  } else if (props.type === 'datetime-local') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          if (typeof field.value === 'object') {
            // Convert date data from object to just ""yyyy-MM-ddThh:mm""
            field.value = field.value.toISOString().slice(0, 16);
          }
          return (
            <FormItem className={cn('col-span-3', props.className)}>
              <FormLabel>{props.label}</FormLabel>
              <FormControl>
                <Input type="datetime" {...props} {...field} />
              </FormControl>
              {props.description && (
                <FormDescription>{props.description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          );
        }}
      />
    );
  } else if (props.type === 'radio') {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex h-10 items-center space-x-2"
              >
                {data && data.length > 0 ? (
                  data.map((item) => (
                    <FormItem key={item.value}>
                      <FormControl>
                        <RadioGroupItem value={item.value} />
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormControl>
                    </FormItem>
                  ))
                ) : (
                  <>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Iya</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Tidak</FormLabel>
                    </FormItem>
                  </>
                )}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  } else if (props.type === 'password') {
    const togglePasswordVisibility = () => {
      setShowPassword((prev): any => !prev);
    };

    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('relative col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <Input
                {...props}
                {...field}
                type={showPassword ? 'text' : 'password'}
              />
            </FormControl>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute end-1 top-3.5 rounded-e-md px-2 py-5"
            >
              <svg
                className="size-3.5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showPassword ? (
                  <>
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </>
                ) : (
                  <>
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </>
                )}
              </svg>
            </button>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  } else if (props.type === 'toggle-group') {
    // TODO: Perbaiki ToogleGroupItem pada map agar icon bisa berubah sesuai input user
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn('col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>
            <FormControl>
              <ToggleGroup
                variant={'outline'}
                type="single"
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="w-fit"
              >
                {data && data.length > 0 ? (
                  data.map((item) => (
                    <FormItem key={item.value}>
                      <FormControl>
                        <ToggleGroupItem
                          value={item.value}
                          className=" data-[state=on]:border-blue-600 data-[state=on]:text-blue-600"
                        >
                          {item.label}
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  ))
                ) : (
                  <>
                    <FormItem>
                      <FormControl>
                        <ToggleGroupItem
                          value="+"
                          className=" data-[state=on]:border-blue-600 data-[state=on]:text-blue-600"
                        >
                          <Plus className="h-4 w-4" />
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <ToggleGroupItem
                          value="-"
                          className=" data-[state=on]:border-blue-600 data-[state=on]:text-blue-600"
                        >
                          <Minus className="h-4 w-4" />
                        </ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  </>
                )}
              </ToggleGroup>
            </FormControl>
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
          <FormItem className={cn('relative col-span-3', props.className)}>
            <FormLabel>{props.label}</FormLabel>

            <FormControl>
              <div className="bg-background text-foreground flex w-full max-w-md items-center rounded-lg border">
                {props.prefix && (
                  <div className="text-muted-foreground flex items-center px-3">
                    <span className="text-sm text-black/50">
                      {props.prefix}
                    </span>
                  </div>
                )}
                <Input {...props} {...field} />
                {props.suffix && (
                  <div className="text-muted-foreground flex items-center px-3">
                    <span className="text-sm text-black/50">
                      {props.suffix}
                    </span>
                  </div>
                )}
              </div>
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
