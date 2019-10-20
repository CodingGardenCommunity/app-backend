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
  echo "Running tests inside docker container.."
  docker exec app-backend_dev pwd
  docker exec app-backend_dev yarn run lint
  docker exec app-backend_dev yarn run format
  docker exec app-backend_dev yarn run test
elif [ $SETUP_TYPE == "manual" ]
then
  echo "Running tests on local machine.."
  yarn run lint
  yarn run format
  yarn run test
else
  echo "Err: Oops, we have a problem here. SETUP_TYPE in .env file MUST be 'docker' or 'manual'."
fi
}


runPreCommitHook
