#!/bin/bash

function usage() {
    echo "Usage: $(basename "$0") [option...] {development|staging|production}" >&2
    echo
    echo "  Coding Garden Community App API deployment script"
    echo "  Deploys the API to the specified environment on now.sh"
    echo
    echo "   -h, --help                 Show this message"
    echo "   -n, --now-token            Specify the now token. (or set environment variable \$NOW_TOKEN)"
    echo "   -e, --node-env             Specify the node environemt. (or set environment variable \$NODE_ENV)"
    echo "   -m, --mongo-uri            Specify the mongo uri. (or set environment variable \$MONGO_URI)"
    echo "   -a, --alias                Specify the deploy alias. (or set environment variable \$DEPLOY_ALIAS)"
    echo

    exit 1
}

while :
do
  case "$1" in
    -h|--help)
      usage
      exit 0
      ;;
    -n|--now-token)
      # TODO: validate input length and chars
      NOW_TOKEN="$2"
      shift 2
      ;;
    -m|--mongo-uri)
      # TODO: validate input length and chars
      MONGO_URI="$2"
      shift 2
      ;;
    -e|--node-env)
      # TODO: validate input length and chars
      NODE_ENV="$2"
      shift 2
      ;;
    -a|--alias)
      # TODO: validate input length and chars
      DEPLOY_ALIAS="$2"
      shift 2
      ;;
    --)
      shift
      break
      ;;
    -*)
      echo "Error: Unknown option: $1" >&2
      echo
      usage
      exit 1
      ;;
    *)
      break
      ;;
  esac
done

if [ -z "$NOW_TOKEN" ]; then
  echo "Error: NOW_TOKEN is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

if [ "$1" ]; then
  env=$1
elif [ -n "$TRAVIS_BRANCH" ]; then
  case "$TRAVIS_BRANCH" in
    develop)
      env=development
      ;;
    staging)
      env=staging
      ;;
    master)
      env=production
      ;;
    *)
      echo "Missing or invalid environment."
      usage
      exit 1
      ;;
  esac
fi

case "$env" in
  development)
    if [ -z "$NODE_ENV" ]; then
      NODE_ENV=development
    fi
    if [ -z "$DEPLOY_ALIAS" ]; then
      DEPLOY_ALIAS=api-dev.coding.garden
    fi
    if [ -z "$MONGO_URI" ]; then
      MONGO_URI=@community-app-db-dev
    fi
    ;;
  staging)
    if [ -z "$NODE_ENV" ]; then
      NODE_ENV=development
    fi
    if [ -z "$DEPLOY_ALIAS" ]; then
      DEPLOY_ALIAS=api-staging.coding.garden
    fi
    if [ -z "$MONGO_URI" ]; then
      MONGO_URI=@community-app-db-staging
    fi
    ;;
  production)
    if [ -z "$NODE_ENV" ]; then
      NODE_ENV=production
    fi
    if [ -z "$DEPLOY_ALIAS" ]; then
      DEPLOY_ALIAS=api.coding.garden
    fi
    if [ -z "$MONGO_URI" ]; then
      MONGO_URI=@community-app-db-prod
    fi
    ;;
  *)
    echo "Missing or invalid environment."
    usage
    exit 1
    ;;
esac

if [ -z "$MONGO_URI" ]; then
  echo "Error: MONGO_URI is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

if [ -z "$NOW_TOKEN" ]; then
  echo "Error: NOW_TOKEN is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

echo "Deploying to $env environment with alias $DEPLOY_ALIAS"

DEPLOYMENT_URL=$(npx now --token "$NOW_TOKEN" deploy -e NODE_ENV="$NODE_ENV" -e MONGO_URI="$MONGO_URI -e ADMIN_SECRET=@community-api-admin-secret")
npx now --token "$NOW_TOKEN" alias $DEPLOYMENT_URL $DEPLOY_ALIAS