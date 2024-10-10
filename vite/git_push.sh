#!/bin/bash

# Step 1: List files that have changed
echo "Changed files:"
git status --porcelain

# Step 2: Ask for adding all files
read -p "Do you want to add all changes? (y/n): " add_all

if [[ "$add_all" == "y" ]]; then
    # Add all files
    git add .
    echo -e "\e[32mAll changes added.\e[0m"
else
    echo "No changes added."
    exit 0
fi

# Step 3: Ask for commit message
echo "Enter your commit message (press Ctrl+D to finish):"
commit_message=$(cat)

# Step 4: Commit with the provided message
git commit -m "$commit_message"

# Step 5: Show colored log while pushing
echo -e "\e[34mPushing to remote...\e[0m"
git log --oneline --color

# Step 6: Push to remote
git push

# Step 7: Show success or error message
if [ $? -eq 0 ]; then
    echo -e "\e[32mPush successful!\e[0m"
else
    echo -e "\e[31mPush failed. Please check the error above.\e[0m"
fi

# Exit with status code
exit $?
