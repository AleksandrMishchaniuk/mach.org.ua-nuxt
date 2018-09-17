#!/usr/bin/env bash

if [ -z $1 ]; then
    echo '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    echo 'You must pass a version of build as parameter'
    echo '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
    exit;
fi

function execCommand {
  echo '--------------------'
  echo $1
  $1
  echo '--------------------'
}

execCommand 'npm run generate'
execCommand "docker build -t machorgua/site:$1 ."
execCommand "docker push machorgua/site:$1"

