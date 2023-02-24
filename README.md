# Perfarm UI Kit

## Installation

```
$ npm i @perfarm/ui-kit
```

## Scripts

### Running

```
$ npm run storybook
```

## Branch and commit naming convention

### Branch

**<category/reference/description>**

**category**:

- feature: adding, refactoring or removing a feature
- bugfix: fixing a bug
- hotfix: changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
- test: experimenting outside of an issue/ticket

**reference**: task id  
**description**: task description

Examples:

- feature/issue-42/new-button-component
- bugfix/issue-342/button-overlap-form-on-mobile
- hotfix/no-ref/registration-form-not-working
- test/no-ref/refactor-components-with-atomic-design

### Commit

**<category: description>**

**category:**

- feat: adding a new feature
- fix: fixing a bug
- refactor: changing code for peformance or convenience purpose
- chore: is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)

**description**: commit description

Examples:

- feat: add new button component
- fix: add the stop directive to button component to prevent propagation
- refactor: rewrite button component in TypeScript
- chore: write button documentation
