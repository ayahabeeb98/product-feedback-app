import React from "react";
import  {SuggestionsContext} from "./SuggestionsContext";

export default function useSuggestions() {
    const context = React.useContext(SuggestionsContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}