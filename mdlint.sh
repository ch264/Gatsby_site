#!/bin/bash
files=`git ls-files -m`
for x in $files;
do
	if [ ${x: -3} == ".md" ]
	then
		node_modules/.bin/markdownlint $x
	fi
done
