#!/bin/bash

echo "Starting backend"
echo ""
./.venv/bin/python -m flask run --port=5000 --host=127.0.0.1 --reload --debug
if [ $? -ne 0 ]; then
    echo "Failed to start backend"
    exit $?
fi
