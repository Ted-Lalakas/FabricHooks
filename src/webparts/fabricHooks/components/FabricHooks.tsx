import * as React from 'react';
import styles from './FabricHooks.module.scss';
import { IFabricHooksProps } from './IFabricHooksProps';
import { escape } from '@microsoft/sp-lodash-subset';

import SimpleForm from './SimpleForm/SimpleForm';

export default class FabricHooks extends React.Component<IFabricHooksProps, {}> {
  public render(): React.ReactElement<IFabricHooksProps> {
    return (
      <div className={ styles.fabricHooks }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <SimpleForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
