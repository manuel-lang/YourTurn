import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";

import Tag from "./customTags/Tag";
import styles from "./customTags/styles";

class Tags extends React.Component {
  constructor(props) {
    super(props);

    // props.setTags(props.initialTags);

    this.state = {
      // tags: props.initialTags,
      text: props.initialText
    };
  }

  componentWillReceiveProps(props) {
    const { initialTags = [], initialText = " " } = props;

    // this.props.setTags(initialTags);

    this.setState({
      // tags: initialTags,
      text: initialText
    });
  }

  addTag = text => {

    this.props.setTags(
      this.props.tags.concat(text.trim())
    );

    this.setState(
      {
        // tags: [...this.state.tags, text.trim()],
        text: " "
      },
      () => this.props.onChangeTags && this.props.onChangeTags(this.props.tags)
    );
  };

  onChangeText = text => {
    if (text.length === 0) {
      // `onKeyPress` isn't currently supported on Android; I've placed an extra
      //  space character at the start of `TextInput` which is used to determine if the
      //  user is erasing.
      this.props.setTags(this.props.tags.slice(0, -1));
      this.setState(
        {
          // tags: this.state.tags.slice(0, -1),
          text: this.props.tags.slice(-1)[0] || " "
        },
        () =>
          this.props.onChangeTags && this.props.onChangeTags(this.props.tags)
      );
    } else if (
      text.length > 1 &&
      this.props.createTagOnString.includes(text.slice(-1)) &&
      !(this.props.tags.indexOf(text.slice(0, -1).trim()) > -1)
    ) {
      // console.log(text.slice(0, -1));
      this.addTag(text.slice(0, -1));
    } else {
      this.setState({ text });
      // console.log(text);
    }
  };

  onSubmitEditing = () => {
    if (!this.props.createTagOnReturn) {
      return;
    }

    this.addTag(this.state.text);
  };

  render() {
    const {
      containerStyle,
      style,
      tagContainerStyle,
      tagTextStyle,
      deleteTagOnPress,
      onTagPress,
      readonly,
      maxNumberOfTags,
      inputStyle,
      inputContainerStyle,
      textInputProps,
      renderTag
    } = this.props;

    return (
      <View style={[styles.container, containerStyle, style]}>
        {this.props.tags.map((tag, index) => {
          const tagProps = {
            tag,
            index,
            deleteTagOnPress,
            onPress: e => {
              if (deleteTagOnPress && !readonly) {
                this.props.setTags(
                  this.props.tags.slice(0, index).concat(this.props.tags.slice(index + 1)),
                  () => {
                    this.props.onChangeTags &&
                      this.props.onChangeTags(this.props.tags);
                    onTagPress && onTagPress(index, tag, e, true);
                  }
                );

                // this.setState(
                //   {
                //     tags: [
                //       ...this.state.tags.slice(0, index),
                //       ...this.state.tags.slice(index + 1)
                //     ]
                //   },
                //   () => {
                //     this.props.onChangeTags &&
                //       this.props.onChangeTags(this.state.tags);
                //     onTagPress && onTagPress(index, tag, e, true);
                //   }
                // );
              } else {
                onTagPress && onTagPress(index, tag, e, false);
              }
            },
            tagContainerStyle,
            tagTextStyle
          };

          return renderTag(tagProps);
        })}

        {!readonly && maxNumberOfTags > this.props.tags.length && (
          <View style={[styles.textInputContainer, inputContainerStyle]}>
            <TextInput
              {...textInputProps}
              value={this.state.text}
              style={[styles.textInput, inputStyle]}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEditing}
              underlineColorAndroid="transparent"
            />
          </View>
        )}
      </View>
    );
  }
}

Tags.defaultProps = {
  initialTags: [],
  initialText: " ",
  createTagOnString: [",", " "],
  createTagOnReturn: false,
  readonly: false,
  deleteTagOnPress: true,
  maxNumberOfTags: Number.POSITIVE_INFINITY,
  renderTag: ({ tag, index, ...rest }) => (
    <Tag key={`${tag}-${index}`} label={tag} {...rest} />
  )
};

Tags.propTypes = {
  tags: PropTypes.array,
  setTags: PropTypes.func,
  initialText: PropTypes.string,
  initialTags: PropTypes.arrayOf(PropTypes.string),
  createTagOnString: PropTypes.array,
  createTagOnReturn: PropTypes.bool,
  onChangeTags: PropTypes.func,
  readonly: PropTypes.bool,
  maxNumberOfTags: PropTypes.number,
  deleteTagOnPress: PropTypes.bool,
  renderTag: PropTypes.func,
  /* style props */
  containerStyle: PropTypes.any,
  style: PropTypes.any,
  inputContainerStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  tagContainerStyle: PropTypes.any,
  tagTextStyle: PropTypes.any,
  textInputProps: PropTypes.object
};

export { Tag };
export default Tags;
