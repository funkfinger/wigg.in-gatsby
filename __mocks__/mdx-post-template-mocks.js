export const img = {
  base64: 'data:image/png;base64,blah',
  aspectRatio: 6.142578125,
  src: '/static/d2a5cc5044b07c0a9c90e84b76c26f68/c6a2b/wodstar-logo.png',
  srcSet:
    // eslint-disable-next-line max-len
    '/static/1.png 75w,\n/static/2.png 150w,\n/static/3.png 300w,\n/static/4.png 450w,\n/static/5.png 600w,\n/static/6.png 3145w',

  sizes: '(max-width: 300px) 100vw, 300px',
};

export const bodyMock =
  // eslint-disable-next-line max-len
  'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; } function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; } /* @jsx mdx */ var _frontmatter = { "title": "Test Post 3", "date": "2020-02-10T22:13:39.000Z", "heroImage": "../images/web-hero.png" }; var makeShortcode = function makeShortcode(name) { return function MDXDefaultShortcode(props) { console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope"); return mdx("div", props); }; }; var layoutProps = { _frontmatter: _frontmatter }; var MDXLayout = "wrapper"; return function MDXContent(_ref) { var components = _ref.components, props = _objectWithoutProperties(_ref, ["components"]); return mdx(MDXLayout, _extends({}, layoutProps, props, { components: components, mdxType: "MDXLayout" }), mdx("p", null, "test post 3.")); } ; MDXContent.isMDXComponent = true;';
