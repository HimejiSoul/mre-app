import { FormControl } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

// TODO: Fix ts types
export function FormInput({ data, field }: any) {
  return (
    <>
      {['date', 'number', 'text'].includes(data.type) && (
        <InputForm data={data} field={field} />
      )}
      {data.type === 'checkbox' && <CheckboxForm field={field} />}
      {data.type === 'select' && <SelectForm data={data} field={field} />}
    </>
  );
}

function InputForm({ data, field }: any) {
  return (
    <FormControl>
      <Input
        type={data.type}
        placeholder={data.placeholder}
        className={data.styles}
        {...field}
      />
    </FormControl>
  );
}

function CheckboxForm({ field }: any) {
  return (
    <FormControl>
      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
    </FormControl>
  );
}

function SelectForm({ data, field }: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={data.placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {data.options.map((option: any) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
