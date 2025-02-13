# GitHub

## Create a Remote Repository

1. GitHub
2. Click the **New Button**,
3. Create a repository in GitHub.

   - Add the name of the repository
   - Status: Public or Private
   - Click: Create Repository

4. Create the connection between local and remote repository.

```bash
git remote add origin [repository-URL]
```

5. Rename the master branch to main.

```bash
git branch -M main
```

6. Push commits to the remote repository for the first time.

```bash
git push -u origin main
```

7. Next commits:

```bash
git push
```
