# How Storybook Saved My Sprint

- setting
- why do I use storybook?

```sh
# did not use yarn. if you do, should be up to date.
nvm alias default 12.4.0
nvm use default
npm i -g create-react-app
create-react-app $ultimate_app
cd $ultimate_app
# https://storybook.js.org/docs/guides/guide-react/#automatic-setup
npx -p @storybook/cli sb init --type react

# need to specify environment
NODE_ENV=development;npm run storybook
```
