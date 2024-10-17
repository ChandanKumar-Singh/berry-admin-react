#!/bin/bash

# Step 1: List files that have changed
echo "Changed files:"
git status --porcelain

# Step 2: Ask for adding all files
read -p "Do you want to add all changes? (y/n, default is y): " add_all

# Default to 'y' if the user presses Enter
if [[ -z "$add_all" ]]; then
    add_all="y"
fi

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
echo -e "\n\nPushing to remote...\n\n"
git log --oneline --color÷

# Step 6: Push to remote
git push

# Step 7: Show success or error message
if [ $? -eq 0 ]; then
    echo -e "\n\nPush successful!"
else
    echo -e "\n\nPush failed. Please check the error above.\n\n"
fi

# Exit with status code
exit $?
