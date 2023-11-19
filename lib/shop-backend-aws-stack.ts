import { Stack, StackProps } from 'aws-cdk-lib';

import { Construct } from 'constructs';
import { EndpointProducts } from './poducts';

export class ShopBackendAwsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new EndpointProducts(this, 'EndpointProducts');
  }
}
