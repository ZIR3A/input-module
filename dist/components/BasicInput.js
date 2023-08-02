"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["name", "onChange", "label", "value", "error", "type", "disabled", "placeholder", "className", "min", "onFocus", "autoComplete", "required", "tooltip", "ref"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const BasicInput = props => {
  let {
      name,
      onChange,
      label,
      value,
      error,
      type,
      disabled,
      placeholder,
      className,
      min,
      onFocus,
      autoComplete,
      required,
      tooltip,
      ref
    } = props,
    others = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className ? className : 'form-group mb-4')
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: name
  }, label, " ", required && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-danger"
  }, "*")), tooltip, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "form-control ".concat(className ? 'p-0' : '', " ").concat(error && 'is-invalid'),
    name: name,
    min: min,
    onFocus: onFocus,
    value: value,
    type: type ? type : 'text',
    onChange: onChange,
    id: name,
    required: required,
    disabled: disabled,
    autoComplete: autoComplete,
    placeholder: placeholder,
    ref: ref
  }, others)), /*#__PURE__*/_react.default.createElement("div", {
    id: "invalidBox",
    "data-testid": "invalidBox",
    className: "invalidBox",
    style: {
      minHeight: '24px',
      position: 'absolute'
    }
  }, error && /*#__PURE__*/_react.default.createElement("small", {
    className: "text-danger"
  }, error))));
};
BasicInput.propTypes = {
  name: _propTypes.default.string,
  value: _propTypes.default.any,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func.isRequired,
  error: _propTypes.default.any.isRequired,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  className: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  autoComplete: _propTypes.default.string,
  min: _propTypes.default.number,
  required: _propTypes.default.bool,
  tooltip: _propTypes.default.any,
  ref: _propTypes.default.any
};
var _default = BasicInput;
exports.default = _default;