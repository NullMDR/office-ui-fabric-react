import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

export class SpinButtonBasicDisabledExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div style={{ width: '400px' }}>
        <SpinButton
          defaultValue="25"
          label={'Basic SpinButton:'}
          min={0}
          max={100}
          step={1}
          disabled={true}
          // tslint:disable:jsx-no-lambda
          onFocus={() => console.log('onFocus called')}
          onBlur={() => console.log('onBlur called')}
        />
      </div>
    );
  }
}
