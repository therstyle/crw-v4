module.exports = {
  plugins: [
    require('postcss-image-inliner', { maxFileSize: 10240 }), // Images smaller than 10kb will be inlined
    require('postcss-preset-env')({
      stage: 2, // Set the desired stage (e.g., 2 or 3)
      features: {
        'logical-properties-and-values': false, // Enable logical properties
      },
    }),
    require('postcss-pxtorem'),
    require('cssnano')({
      preset: [
        'default',
        {
          normalizeWhitespace: false,
        },
      ],
    }),
  ],
}
