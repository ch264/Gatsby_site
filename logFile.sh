#!/bin/bash

log=log_file.txt

 
# create log file or overrite if already present
printf "Log File - " > $log
 
# append git diff to log file
git diff master...branch >> $log 

  result=$(grep -n 'name' "$log")
  if "$result" = true
  then
		mail -s "H2 changes were found" "christina.hastenrath@getpostman.com" < "$result"
  else
    echo no H2 changes
	fi

