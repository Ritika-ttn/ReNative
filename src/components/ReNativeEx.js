import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getScaledValue} from 'renative';

class ReNativeEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Focused: false,
      isButton2Focused: false,
      isButton3Focused: false,
      isButton4Focused: false,
      isButton5Focused: false,
    };
    this.actionRef = {};
  }

  render() {
    const {
      isButton1Focused,
      isButton2Focused,
      isButton3Focused,
      isButton4Focused,
      isButton5Focused,
    } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            isButton1Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef['button1'] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton1Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton1Focused: false,
            });
          }}>
          <Text
            style={[
              styles.btnTxt,
              isButton1Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}>
            Button 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton2Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef['button2'] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton2Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton2Focused: false,
            });
          }}>
          <Text
            style={[
              styles.btnTxt,
              isButton2Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}>
            Button 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            isButton3Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef['button3'] = ref;
          }}
          activeOpacity={1.0}
          onFocus={() => {
            this.setState({
              isButton3Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton3Focused: false,
            });
          }}>
          <Text
            style={[
              styles.btnTxt,
              isButton3Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}>
            Button 3
          </Text>
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              isButton4Focused ? styles.activeBtn : styles.inactiveBtn,
            ]}
            ref={(ref) => {
              this.actionRef['button4'] = ref;
            }}
            activeOpacity={1.0}
            onFocus={() => {
              this.setState({
                isButton4Focused: true,
              });
            }}
            onBlur={() => {
              this.setState({
                isButton4Focused: false,
              });
            }}>
            <Text
              style={[
                styles.btnTxt,
                isButton4Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
              ]}>
              Button 4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              isButton5Focused ? styles.activeBtn : styles.inactiveBtn,
            ]}
            ref={(ref) => {
              this.actionRef['button5'] = ref;
            }}
            activeOpacity={1.0}
            onFocus={() => {
              this.setState({
                isButton5Focused: true,
              });
            }}
            onBlur={() => {
              this.setState({
                isButton5Focused: false,
              });
            }}>
            <Text
              style={[
                styles.btnTxt,
                isButton5Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
              ]}>
              Button 5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: '#b80000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 7,
    margin: 15,
  },
  activeBtn: {
    width: 300,
    height: 200,
    borderColor: 'blue',
    padding: 20,
  },
  inactiveBtn: {
    borderColor: 'yellow',
    padding: 20,
  },
  btnTxt: {
    color: '#fff',
  },
  activeBtnTxt: {
    fontSize: getScaledValue(30),
  },
  inactiveBtnTxt: {
    fontSize: getScaledValue(17),
  },
  innerContainer: {
    flexDirection: 'row',
  },
});

export default ReNativeEx;
