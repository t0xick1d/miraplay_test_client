import { FallingLines } from 'react-loader-spinner';

export default function CircularIndeterminate() {
   return (
      <FallingLines color="#4fa94d" width="100" visible={true} ariaLabel="falling-lines-loading" />
   );
}
