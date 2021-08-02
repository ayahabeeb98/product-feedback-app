import {createContext} from "react";
import {DATA} from '../db/data';

export const SuggestionsContext = createContext({
    suggestions : DATA.productRequests,
    category: 'All',
    updateSuggestions:  () => {},
});