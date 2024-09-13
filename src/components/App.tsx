import { FC } from "react";

import { Autocomplete } from "./Autocomplete";

export const App: FC = () => {
  return (
    <div>
      <Autocomplete />
    </div>
  )
}

App.displayName = 'App'