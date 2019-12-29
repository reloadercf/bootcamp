# Sugiriendo cambios a través de un PR (Pull Request)

* Tipo: `video`
* Formato: `self-paced`
* Duración: `5min`

***

1. Update local master from upstream:
   `git checkout master && git pull upstream master`
2. Update master on fork: `git push origin master`
3. Create new branch based on upstream/master:
   `git checkout -b feat/some-new-feature` or `git checkout -b fix/some-bug-fix`
4. Make necessary changes.
5. Run tests (linters, unit tests, ...)
6. Add changes to be included in commit: `git add ./path/to/files`
7. Commit changes to new branch:
   `git commit -m "feat(scripts): Adds amazing new script"`
8. Push changes to fork: `git push origin feat/some-new-feature`
9. Create PR: ...

[More info](https://help.github.com/en/articles/about-pull-requests)
