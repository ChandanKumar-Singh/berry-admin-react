# add all files and commit 
git add .


# store commits in a variable
commits=$(git log --oneline)

# check if there are any commits
if [ -z "$commits" ]; then
    echo "No changes to commit"
    exit 0
fi

# commit with message
git commit -m "update"

# push to remote
git push

# check if push was successful
if [ $? -eq 0 ]; then
    echo "Push successful"
else
    echo "Push failed"
fi

# exit with status code

exit $?

# end of script
