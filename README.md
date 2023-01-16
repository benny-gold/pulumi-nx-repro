# PulumiNxRepro

1. npm install
2. npx nx serve sample-app
3. Observe output (`Hello` is loaded by [sample-app](apps/sample-app/src/main.ts) from `@repro/constants`)
4. cd into `apps/sample-app-infrastructure`
5. `pulumi up`
6. Observe Error `Cannot find module '@repro/constants'`