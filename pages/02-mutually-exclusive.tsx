 import type { NextPage } from 'next';

import { DualAlert } from '../src/02-mutually-exclusive/dual-alert';

const MutuallyExclusive: NextPage = () => {
  return (
    <div>
      <h2 className="my-4">Mutually exclusive props</h2>

      {/* Valid */}
      <DualAlert
        message="Can we do mutually exclusive props?"
      /> 

      <DualAlert
        messageId="hello-tsx"
      /> 

      {/* Invalid */}
      {/* 
        <DualAlert /> 
        <DualAlert
          message="Can we do mutually exclusive props?"
          messageId="hello-tsx"
        />  
      */}
    </div>
  );
};

export default MutuallyExclusive;
