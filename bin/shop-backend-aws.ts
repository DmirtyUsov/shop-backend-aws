#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ShopBackendAwsStack } from '../lib/shop-backend-aws-stack';

const app = new cdk.App();
new ShopBackendAwsStack(app, 'ShopBackendAwsStack');
