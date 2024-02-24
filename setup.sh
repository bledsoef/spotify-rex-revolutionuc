#!/usr/bin/env bash
# Check for correct python version
VERSION=`python3 --version | awk '{print $2}'`
if [ "${VERSION:0:1}" -ne "3" ] || [ "${VERSION:2:1}" -lt "7" ] || [ "${VERSION:2:1}" -gt "9" ]; then
	echo "You are using $VERSION"
    echo "When upgrading, remember to install python3.X-dev and python3.X-venv (and maybe the right pip)"
	#return 1
else
	echo -e "You are using Python $VERSION"
fi

# Create a virtual environment for dependencies
if [ ! -d venv ]
then
  python3 -m venv venv
fi
. venv/bin/activate

# upgrade pip
python3 -m pip install --upgrade pip #added python-m for pip installs (source setup overwrite for venv)

# install requirements
python3 -m pip install -r requirements.txt
# To generate a new requirements.txt file, run "pip freeze > requirements.txt"

echo "-----Setting $(pwd) as your PYTHONPATH. If this is not root cd into your root directory and rerun this script."
current_directory=$(pwd)
export PYTHONPATH="$current_directory"