## Context
What happens when you have a nested directory you want to deploy i.e
```
./root_dir/
|__sub_dir
|__..
```
## Usage

```bash 
cd root_dir
# Always execute commands in root dir
git subtree push --prefix [sub_dir] heroku master # normal push
git push heroku 'git subtree split --prefix [sub_dir] branch':master --force # force push

```

[Source](http://brettdewoody.com/deploying-a-heroku-app-from-a-subdirectory/)



