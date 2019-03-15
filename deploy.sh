#! /bin/sh

echo $TRAVIS_BRANCH

if [[ ! $TRAVIS_BRANCH =~ ^develop$|^staging$|^master$ ]]; then
  echo "Nothing to deploy";
  exit 0;
fi

NODE_ENV=development

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  echo "Deploying to dev environment";
  DB_SECRET=@community-app-db-dev;
  DEPLOY_ALIAS=api-dev.coding.garden;
elif [ "$TRAVIS_BRANCH" = "staging" ]; then
  echo "Deploying to staging environment";
  DB_SECRET=@community-app-db-staging;
  DEPLOY_ALIAS=api-staging.coding.garden
elif [ "$TRAVIS_BRANCH" = "master" ]; then
  echo "Deploying to production environment";
  NODE_ENV=production
  DB_SECRET=@community-app-db-prod;
  DEPLOY_ALIAS=api.coding.garden;
fi

now alias --token=$NOW_TOKEN $(now -e NODE_ENV=$NODE_ENV -e MONGO_URI=$DB_SECRET --token=$NOW_TOKEN) $DEPLOY_ALIAS
