#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CognitoIdpStack, CognitoIdpStackProps } from '../lib/cognito-idp-stack';
import * as fs from 'fs-extra';


const app = new cdk.App();

// For local development, create a copy of config/env.json called config/env-local.json
const localConfigPath = './config/env-local.json';
if (fs.existsSync(localConfigPath)) {

    // Deploy to your 'local' development account

    // tslint:disable-next-line: no-var-requires
    const localStack = new CognitoIdpStack(app, 'CognitoIdp-Local', require('.' + localConfigPath));
}

// tslint:disable-next-line: no-var-requires
const prodStack = new CognitoIdpStack(app, 'CognitoIdp-Prod', require('../config/env-prod.json'));

// Other stacks like test, gamma, etc would be added here


