## Pulumi Cloud API PUT permission issue

To reproduce issue:

1. Clone repo locally
2. Restore packages: `npm i`
3. Deploy using `pulumi up` (or `npm run deploy` if using AWS MFA)
4. Change a route path
5. Redeploy using pulumi up
