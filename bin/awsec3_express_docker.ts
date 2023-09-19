#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Awsec3ExpressDockerStack } from '../lib/awsec3_express_docker-stack';

const app = new cdk.App();
const envUSA = { account: '347694139041', region: 'us-east-1' };

new Awsec3ExpressDockerStack(app, 'Awsec3ExpressDockerStack',{env: envUSA} );
app.synth();
