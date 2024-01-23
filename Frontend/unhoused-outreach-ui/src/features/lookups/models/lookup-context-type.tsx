export interface LookupContextType
{
  lookup: Record<number, string>;
  setLookup: React.Dispatch<React.SetStateAction<Record<number, string>>>;
}