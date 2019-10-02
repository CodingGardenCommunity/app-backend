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

local SETUP_TYPE=$(read_var SETUP_TYPE)

if [ $SETUP_TYPE == "docker" ]
then
  docker-compose -f docker-compose-test.yml up --force-recreate
elif [ $SETUP_TYPE == "manual" ]
then
  yarn run lint && yarn run format && yarn run test
else
  echo "Oops, we have a problem here. SETUP_TYPE in .env must be 'docker' or 'manual'."
fi
}


runPreCommitHook
