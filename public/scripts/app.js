'use strict';

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
		_this.removeSingleoption = _this.removeSingleoption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}
	//lifecycle methods


	_createClass(MainAppRender, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var tempoptions = localStorage.getItem('savedoption');
				var savedoption = JSON.parse(tempoptions);
				if (savedoption) {
					this.setState(function () {
						return { options: savedoption };
					});
				}
			} catch (e) {
				// Exception goes here	
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('savedoption', json);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('component unmount');
		}
	}, {
		key: 'removeAlloption',
		value: function removeAlloption() {
			this.setState(function () {
				return { options: [] };
			});
			/*this.setState(() => {
   	return{
   		options : []
   	};
   })*/
		}
	}, {
		key: 'removeSingleoption',
		value: function removeSingleoption(option) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (opt) {
						return option !== opt;
					})
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var selectedoption = Math.floor(Math.random() * this.state.options.length);
			alert(this.state.options[selectedoption]);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			console.log(option);
			if (!option) {
				return 'Please enter the option value';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'Option already exist';
			}

			this.setState(function (prevState) {
				return { options: prevState.options.concat(option) };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			//const title="App Title";
			var subtitle = "App Sub Title";

			return React.createElement(
				'div',
				null,
				React.createElement(Header, { subtitle: subtitle }),
				React.createElement(Button, {
					hasOption: this.state.options.length > 0,
					pickrandom: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					removealloption: this.removeAlloption,
					removeSingleoption: this.removeSingleoption
				}),
				React.createElement(AddOption, { handleAddOption: this.handleAddOption })
			);
		}
	}]);

	return MainAppRender;
}(React.Component);

MainAppRender.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

var Button = function Button(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.pickrandom, disabled: !props.hasOption },
			'What Should I Do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.removealloption },
			'Remove All Option'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'Please add some item to get started.'
		),
		React.createElement(
			'p',
			null,
			'Here Are your Options'
		),
		props.options.map(function (element) {
			return React.createElement(Option, {
				key: element,
				optionValue: element,
				handleDeleteoption: props.removeSingleoption
			});
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.optionValue,
		React.createElement(
			'button',
			{
				onClick: function onClick(e) {
					props.handleDeleteoption(props.optionValue);
				} },
			'Remove'
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.formSubmit = _this2.formSubmit.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'formSubmit',
		value: function formSubmit(e) {
			e.preventDefault();
			var value = e.target.elements.addtext.value.trim();
			var error = this.props.handleAddOption(value);

			this.setState(function () {
				return { error: error };
			});
			if (!error) {
				e.target.elements.addtext.value = '';
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.formSubmit },
					React.createElement('input', { type: 'text', name: 'addtext' }),
					React.createElement(
						'button',
						{ type: 'submit' },
						'Submit'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

/*const User = (props) => {
	return(
		<div>
			<p>Name : {props.name}</p>
			<p>Age : {props.age}</p>
		</div>
	);
}
<User name="Ilyas" age={26} />*/

ReactDOM.render(React.createElement(MainAppRender, null), document.getElementById('app'));
