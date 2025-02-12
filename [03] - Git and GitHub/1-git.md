# Git

1. Check the git version

```bash
git --version
```

2. Configure Git

- Configure the username

```bash
git config --global user.name [username]
git config user.name
```

- Configure email

```bash
git config --global user.email "email"
git config user.email
```

3. Initialize a Repository

```bash
git init
```

4. Legends

- U : Untracked
- A : Added
- M : Modified

## Git Three Stage Architecture

1. Check the status of all files and folders.

```bash
git status
```

2. Add modified files to the staging area.

```bash
# Add all the modified files.
git add .

# Add a specific file
git add [destination_path]
```

3. Create a commit

```bash
git commit -m "[commit_message]"
```
