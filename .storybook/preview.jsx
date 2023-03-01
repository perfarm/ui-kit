import { globalStyles } from '../src/config/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    globalStyles();
    return (
      <div>
        <Story />
      </div>
    );
  },
];
