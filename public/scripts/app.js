"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainAppRender = function (_React$Component) {
	_inherits(MainAppRender, _React$Component);

	function MainAppRender(props) {
		_classCallCheck(this, MainAppRender);

		var _this = _possibleConstructorReturn(this, (MainAppRender.__proto__ || Object.getPrototypeOf(MainAppRender)).call(this, props));

		_this.removeAlloption = _this.removeAlloption.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(MainAppRender, [{
		key: "removeAlloption",
		value: function removeAlloption() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: "handlePick",
		value: function handlePick() {
			var selectedoption = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[selectedoption]);
		}
	}, {
		key: "handleAddOption",
		value: function handleAddOption(option) {
			console.log(option);
			if (!option) {
				return "Please enter the option value";
			} else if (this.state.options.indexOf(option) > -1) {
				return "Option already exist";
			}

			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			var title = "App Title";
			var subtitle = "App Sub Title";

			return React.createElement(
				"div",
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Button, {
					hasOption: this.state.options.length > 0,
					pickrandom: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					removealloption: this.removeAlloption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return MainAppRender;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					this.props.title
				),
				React.createElement(
					"h2",
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Button = function (_React$Component3) {
	_inherits(Button, _React$Component3);

	function Button() {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	}

	_createClass(Button, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.props.pickrandom, disabled: !this.props.hasOption },
					"What Shpuld I Do?"
				)
			);
		}
	}]);

	return Button;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options(props) {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
	}

	_createClass(Options, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"button",
					{ onClick: this.props.removealloption },
					"Remove All Option"
				),
				React.createElement(
					"p",
					null,
					"Here Are your Options"
				),
				this.props.options.map(function (element) {
					return React.createElement(Option, { key: element, optionValue: element });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.props.optionValue
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.formSubmit = _this6.formSubmit.bind(_this6);
		_this6.state = {
			error: undefined
		};
		return _this6;
	}

	_createClass(AddOption, [{
		key: "formSubmit",
		value: function formSubmit(e) {
			e.preventDefault();
			var value = e.target.elements.addtext.value;
			var error = this.props.handleAddOption(value);

			this.setState(function () {
				return {
					error: error
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					null,
					this.state.error
				),
				React.createElement(
					"form",
					{ onSubmit: this.formSubmit },
					React.createElement("input", { type: "text", name: "addtext" }),
					React.createElement(
						"button",
						{ type: "submit" },
						"Submit"
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(MainAppRender, null), document.getElementById('app'));
