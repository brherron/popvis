"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./PopVis.css");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PopVis(_ref) {
  let {
    src,
    infoLink,
    height = '300px',
    buttonSize = '150px',
    buttonRadius = '100px',
    buttonText = 'More Info'
  } = _ref;
  const vidRef = (0, _react.useRef)(null);
  const [muted, setMuted] = (0, _react.useState)(true);
  const [paused, setPaused] = (0, _react.useState)(false);
  const [showVideo, setShowVideo] = (0, _react.useState)(false);
  const [showButtons, setShowButtons] = (0, _react.useState)(false);
  const [destroyed, setDestroyed] = (0, _react.useState)(false);

  const handlePlayVideo = () => {
    paused ? vidRef.current.play() : vidRef.current.pause();
    setPaused(!paused);
  };

  const handleSkip = amount => {
    vidRef.current.currentTime += amount;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    onMouseEnter: () => setShowButtons(true),
    onMouseLeave: () => setShowButtons(false),
    style: {
      display: destroyed ? 'none' : 'block'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main",
    style: {
      width: showVideo ? 'auto' : buttonSize,
      height: showVideo ? height : buttonSize,
      borderRadius: showVideo ? '5px' : buttonRadius
    }
  }, !destroyed && /*#__PURE__*/_react.default.createElement("video", {
    ref: vidRef,
    height: showVideo ? height : buttonSize,
    style: {
      borderRadius: showVideo ? '5px' : buttonRadius,
      objectFit: 'fill'
    },
    autoPlay: true,
    muted: muted,
    onClick: e => {
      e.preventDefault();

      if (!showVideo) {
        setShowVideo(true);
        setMuted(false);
      }
    },
    onEnded: () => {
      setShowVideo(false);
      setPaused(true);
      setMuted(true);
      setTimeout(() => {
        setDestroyed(true);
      }, 1000);
    }
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: src,
    type: "video/mp4"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-controls",
    style: {
      display: showButtons && showVideo ? 'flex' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-rewind",
    onClick: e => {
      e.preventDefault();
      handleSkip(-11);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClockRotateLeft
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-playpause",
    onClick: e => {
      e.preventDefault();
      handlePlayVideo();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: paused ? _freeSolidSvgIcons.faPlay : _freeSolidSvgIcons.faPause
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-forward",
    onClick: e => {
      e.preventDefault();
      handleSkip(10);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClockRotateLeft,
    style: {
      transform: 'scaleX(-1)'
    }
  }))), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-close",
    onClick: e => {
      e.preventDefault();
      setDestroyed(true);
    },
    style: {
      display: showButtons ? 'block' : 'none',
      fontSize: showVideo ? '26px' : '18px',
      margin: showVideo ? '0.3rem' : '0'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faXmark
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "btn-open",
    href: infoLink,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: showButtons && showVideo ? 'block' : 'none',
      fontSize: showVideo ? '20px' : '14px',
      margin: showVideo ? '0.3rem' : '0'
    }
  }, infoLink && buttonText), /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-size",
    onClick: e => {
      e.preventDefault();
      setMuted(muted && showVideo);
      setShowVideo(!showVideo);
    },
    style: {
      display: showButtons ? 'block' : 'none',
      fontSize: showVideo ? '20px' : '14px',
      margin: showVideo ? '0.3rem' : '0'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: showVideo ? _freeSolidSvgIcons.faDownLeftAndUpRightToCenter : _freeSolidSvgIcons.faUpRightAndDownLeftFromCenter
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-muted",
    onClick: e => {
      e.preventDefault();
      setMuted(!muted);
    },
    style: {
      display: showButtons ? 'block' : 'none',
      fontSize: showVideo ? '22px' : '14px',
      margin: showVideo ? '0.3rem' : '0'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: muted ? _freeSolidSvgIcons.faVolumeLow : _freeSolidSvgIcons.faVolumeMute
  }))));
}

var _default = PopVis;
exports.default = _default;