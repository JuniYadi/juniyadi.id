# Jekyll Blog

## Installation Ubuntu
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

## Running Jekyll Locally
```bash
bundle exec jekyll serve --draft
```

#### So how do we do spoilers?

```html
<span class="spoiler">My hidden paragraph here.</span>
```

## Ref :
* [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)
* [https://help.github.com/en/articles/testing-your-github-pages-site-locally-with-jekyll](https://help.github.com/en/articles/testing-your-github-pages-site-locally-with-jekyll)
