import { FocusEventHandler } from 'react';

export interface GenericFieldType<V, T = HTMLInputElement> {
  onChange?: (value: V) => void;
  onBlur?: FocusEventHandler<T>;
  value?: V;
  error?: string | boolean;
}

export type GenericOptionType<T = string | number> = {
  value: T;
  label: string;
};
