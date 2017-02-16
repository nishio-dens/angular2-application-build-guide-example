#!/bin/bash

ROOT_DIR=$(cd $(dirname $0);pwd)

# Simple Crud Example

cd $ROOT_DIR
cd frontend/simple-crud-example
yarn
ng build --prod

# Simple Auth Example
cd $ROOT_DIR
cd frontend/simple-auth-example
yarn
ng build --prod
