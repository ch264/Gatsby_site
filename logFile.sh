#!/bin/bash

log=log_file.txt
email=email.txt
 
# create log file or overrite if already present
printf "Log File - " > $log
 
# append git diff to log file
git diff branch >> $log 
# git diff master...branch >> $log 

# find H2 tag in diff
result=$(grep -n 'name' "$log")
size=${#result}
  if [ $size > 0 ]
  then
    # append data to email
    printf '%s\n' "${result[@]}" > $email
    # send mail to email address
    mail -s "H2 changes have been made" "christina.hastenrath@getpostman.com" < $email
  else
    echo no data
  fi
