import { Autocomplete, TextField } from '@mui/material';
import { ProductData } from '../data/data-type';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

interface SearchProps {
  searchOptions: ProductData[];
  setSelectedShoes: any;
}

export const Search = ({ searchOptions, setSelectedShoes }: SearchProps) => (
  <Autocomplete
    options={searchOptions}
    getOptionLabel={(option: ProductData) => option.name}
    onChange={(_event: any, newValue: any | null) => {
      setSelectedShoes(newValue !== null ? [newValue] : searchOptions);
    }}
    renderInput={(params) => (
      <TextField {...params} label="Search shoe" margin="normal" />
    )}
    renderOption={(props, option, { inputValue }) => {
      const matches = match(option.name, inputValue);
      const parts = parse(option.name, matches);

      return (
        <li {...props}>
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        </li>
      );
    }}
  />
);
