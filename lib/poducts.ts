import { Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha'

export class EndpointProducts extends Construct {
  constructor(parent: Stack, name: string) {
    super(parent, name);

    const getProductsList = new lambda.Function(
      this,
      'GetProductListHandler',
      {
        runtime: lambda.Runtime.NODEJS_18_X, // execution environment
        code: lambda.Code.fromAsset('handlers'), // code loaded from "handlers" directory
        handler: 'get-products-list.handler', // file is "get-producst-list", function is "handler"
      }
    )

    const endpointProducts = new apigw.HttpApi(
      this,
      'ProductApi',
      {
        corsPreflight: {
          allowHeaders: ['*'],
          allowMethods: [apigw.CorsHttpMethod.ANY],
          allowOrigins: ['*']
        }
      }
    )

    endpointProducts.addRoutes({
      integration: new HttpLambdaIntegration
      (
        'GetProductsListIntegration',
        getProductsList
      ),
      path: '/products',
      methods: [apigw.HttpMethod.GET]
    }

    )
  }
}