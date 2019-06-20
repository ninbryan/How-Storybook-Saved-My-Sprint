# How Storybook Saved My Sprint

---

## SETUP

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

---

## TALK

---

We are introducing React to the codebase.
We have many teams on different aspects of the website.
My team happens to work on new features for our loyal users.

---

The current project is to introduce a new category of reviewing _certain_ items.
The service & QA testing data, is not yet fully available for the new feature.
It will be ready... but we need to get the ball rolling.
It is in this page that takes several steps:

1. Open Browser to the Home Page
2. Login as a loyal user
3. Navigate to Page that will contain new feature

---

In the current development setting,
We have our local development environment use our QA testing data environment.
_When_
  services,
  API calls,
  or fetching data
fails, we can't reach to certain pages.

And each step uses services, API calls, fetching data.

---

Three Steps to get to the page, and multiple services in relation to each step.
We had login api service fail on separate occasions.
The page will have several APIs that could fail on separate occasions.
And we can't get to that page because you need to be a logged-in loyal USER;

---

After discussing the potential issues, I made a suggestion for the team.
I'm paraphrasing it:
Let's utilize Storybook as part of the sprint work.

---

## why use storybook?

For me, Storybook is an isolated environment for Component-Driven-Development.
Our goal for the feature is to visually demonstrate it when they get to the page.
Also, going through the process step by step takes up time.
We need to make adjustments, and storybook allows that.
Takes a bit of setup, so be sure to read the [docs](https://storybook.js.org)!

---

Let me show an example of Storybook.

demo.

---

Here we have Storybook.

If you go through the quick setup, they put default stories, WELCOME and BUTTON.

It's a great example of what you could get started with.

I did some reconfiguring to have this view of the code on the right.

---

This code view on the right is an addon that Storybook supports.

It's pretty neat.

I also included the addon knobs.

Will get into that in an example.

and then actions for some visual logging of... actions.

Honestly haven't used it yet.

Just gonna click through the button example and there it is~

---

Let's get back to the feature!

We need to make components.

We needed to show basically a list with items.

There's also content and styling, but we'll focus on the most fundamental aspect.

Make a list.

and I did.

---

Example #1

At first the list needed to take in an array an display it.

Did that.

We also had to test the limits of the list!

Looks... ok in 19 items.

---

HOWEVER!?!

What about this?

ZERO.

---

When I first wrote the component, I simply was concerned about displaying items.

We didn't consider what would happen when it was EMPTY!

What do you think I had to do?

Make an empty example.

And I did.

---

Example #2

We got it.

It's empty.

---

And then need to introduce LOADING!

Usually, the website loads with the full page.

The feature takes more time to fetch!

So we introduced loading cues for the list.

and I didn't finish coding that in Example #2.

---

Let me see if I could finish that.

// saving...

Hope that works.

Cool.

---

I realized a lot of interesting capabilities

and we had duplicate a lot of this capability.

We have like 5 data sets to wait for.

---

Example #3

I just did three examples.

Yeah.

It's not pretty.

It was enough.

I wanted to show off this example of grouping knobs.

---

It's loading.

And now it loaded.

and this... an error!

---

## In Summary

In Summary, there was a time we had to go through the process
of getting to the page and integrate the updates.

It wasn't fun when services went down.

---

In our case, we had QA testing data environment.

Maybe for your case, you don't have wifi.

And you need to see results from Firebase or AWS.

I just needed to mock enough of my data.

---

Storybook accomplishes some woes for the team.

It has given me the chance to work on things even though the API isn't ready yet.

When it is ready, we can update accordingly.

Maybe I got the data wrong.

wrong property names.

---

Questions?

---

## what about react-styleguidist?

storybook over react-styleguidist both are great tools.
I haven't used styleguidist myself.
You can write documentation on both.
My preference goes to storybook.
Storybook has first party addons & theming for more configurability.
Storybook has first party support for React, Vue, Svelte, Ember, et cetera.
Storybook can even support regular HTML `document.createElement()`


## LINKS

- Github Repo! https://github.com/ninbryan/How-Storybook-Saved-My-Sprint
- storybook main site https://storybook.js.org/
- tutorial https://www.learnstorybook.com/
