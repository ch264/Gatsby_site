#!/bin/bash

log=log_file.txt
email=email.txt
 
# create log file or overrite if already present
printf "Log File - " > $log
 
# append git diff to log file
git diff master...branch >> $log 

result=$(grep -n 'name' && '+' "$log")
size=${#result}
 
  if [ $size > 0 ]
  then
  # append data to email file
  printf '%s\n' "${result[@]}" > $email
  # email the file to an email address
	mail -s "H2 changes" "christina.hastenrath@getpostman.com" < $email
  else
    echo no H2 diffs between master and dev
	fi

