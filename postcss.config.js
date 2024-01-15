module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-preset-env",
    [
      "postcss-normalize",
      {
        allowDuplicates: false,
      },
    ],

    "autoprefixer",
  ],
};
