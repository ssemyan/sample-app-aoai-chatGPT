#!/usr/bin/env python
import json

# class to hold name and value 
class EnvVar:
    def __init__(self, name, value):
        self.name = name
        self.value = value

with open('.env.sample', 'r') as f:
    content = f.readlines()

# create list of name value pairs by splitting each line at the '='
envList = list()
for line in content:
    nameVals = line.strip().split('=')
    envList.append(EnvVar(nameVals[0], nameVals[1]))

print(json.dumps(envList, default=lambda o: o.__dict__, sort_keys=True, indent=4))