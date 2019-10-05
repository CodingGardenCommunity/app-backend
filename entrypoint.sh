read_var() {
  if [ -z "$1" ]; then
    echo "Environment variable name is required."
    return
  fi

  local ENV_FILE='.env'
  if [ ! -z "$2" ]; then
    ENV_FILE="$2"
  fi

  local VAR=$(grep $1 "$ENV_FILE" | xargs)
  IFS="=" read -ra VAR <<< "$VAR"
  echo ${VAR[1]}
}

runPreCommitHook() {

local SETUP_TYPE=$(read_var NODE_ENV)

if [ $NODE_ENV == "development" ]
then
  yarn run seed && yarn run dev:docker
elif [ $NODE_ENV == "test" ]
then
  yarn install && yarn run lint && yarn run format && yarn run test
  exit $?
else
  echo "Oops, we have a problem here. NODE_ENV in .env must be 'development' or 'test'."
fi
}

runPreCommitHook
