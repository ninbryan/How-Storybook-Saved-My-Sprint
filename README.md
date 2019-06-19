# How Storybook Saved My Sprint

## setting

At Choice Hotels, we develop in a large revenue-generating website.
We are introducing React to the codebase.
We have developed a way to apply React components on AngularJS pages.

---

We have our local development environment use our QA testing data environment.
When services, API calls, fetching data fails, we can't reach to certain pages.

---

I'm working in a team introducing new features to the website.
The service, QA testing data, isn't available yet for the new feature.
It is in this page that takes several steps:

1. Open Browser to the website
2. Login
3. Navigate to Page

---

Three Steps to get to the page, and multiple services in relation to each step.
We had login api service fail on separate occasions.
The page we are will have several APIs that could fail on separate occasions.
And we can't get to that page because you need to be a logged-in USER;

---

After discussing the potential issues, I made a suggestion for the team.
I'm paraphrasing it:
Let's utilize Storybook as part of the sprint work.

---

## why use storybook?

Let me show an example of a storybook app.

For me, Storybook is an isolated environment for Component-Driven-Development.
You make sure the component works as expected.
And there are these addons, knobs, or inputs that you can adjust.
And storybook updates how the component would display certain information.
That is initially what it was at first.

---



---




## storybook over react-styleguidist?

##






```sh
# did not use yarn. if you do, should update all the things in environment.
nvm alias default 12.4.0
nvm use default
npm i -g create-react-app
create-react-app $ultimate_app
cd $ultimate_app
# https://storybook.js.org/docs/guides/guide-react/#automatic-setup
npx -p @storybook/cli sb init --type react

# need to specify environment
NODE_ENV=development; npm run storybook
```
