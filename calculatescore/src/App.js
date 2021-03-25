import React from 'react';
import {CalculateScore} from './Components/CalculateScore';

function App()
{
  return(
    <div>
      <CalculateScore Name={"jayathi"}
      School={"AP Residential School"}
      total={284}
      goal={3}
      />
    </div>
  )
}
export default App;