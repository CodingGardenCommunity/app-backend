#!/bin/bash

NOW_VERSION="14.2.0"
DEVELOPMENT_ALIAS="api-dev.coding.garden"
STAGING_ALIAS="api-staging.coding.garden"
PRODUCTION_ALIAS="api.coding.garden"

function usage() {
    echo "Usage: $(basename "$0") [option...] {development|staging|production}" >&2
    echo
    echo "  Coding Garden Community App API deployment script"
    echo "  Deploys the API to the specified environment on now.sh"
    echo
    echo "   -h, --help                 Show this message"
    echo "   -n, --now-token            Specify the now token. (or set environment variable \$NOW_TOKEN)"
    echo "   -m, --mongo-secret         Specify the mongo secret. (or set environment variable \$MONGO_SECRET)"
    echo

    exit 1
}

### Use enviornment variables as default
now_token="${NOW_TOKEN}"
mongo_secret="${MONGO_SECRET}"

while :
do
  case "$1" in
    -h|--help)
      usage
      exit 0
      ;;
    -n|--now-token)
      # TODO: validate input length and chars
      now_token="$2"
      shift 2
      ;;
    -m|--mongo-secret)
      # TODO: validate input length and chars
      mongo_secret="$2"
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

if [ -z "$mongo_secret" ]; then
  echo "Error: MONGO_SECRET is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

if [ -z "$now_token" ]; then
  echo "Error: NOW_TOKEN is not set via environment variable or as argument"
  echo
  usage
  exit 1
fi

yarn global add now@"$NOW_VERSION"

deployment_url=$(now --token "$now_token" deploy -e MONGO_SECRET="$MONGO_SECRET")

case "$1" in
  development)
    now alias "$deployment_url" "$DEVELOPMENT_URL"
    exit 0
    ;;
  staging)
    now alias "$deployment_url" "$STAGING_URL"
    exit 0
    ;;
  production)
    now alias "$deployment_url" "$PRODUCTION_URL"
    exit 0
    ;;
  *)
    usage
    exit 1
    ;;
esac