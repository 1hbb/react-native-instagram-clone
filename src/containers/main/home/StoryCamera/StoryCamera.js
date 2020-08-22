import React from 'react';
import {StatusBar, View, Text, StyleSheet, CameraRoll} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function StoryCamera() {
  //StatusBar.setHidden(false);

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };

  return (
    <RNCamera
      style={Styles.cameraContainer}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}>
      {({camera}) => {
        return (
          <View style={Styles.captureCircle}>
            <TouchableOpacity onPress={() => takePicture(camera)}>
              <View style={Styles.captureButton}></View>
            </TouchableOpacity>
          </View>
        );
      }}
    </RNCamera>
  );
}

const Styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
  },
  captureCircle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 60,
    alignItems: 'center',
    borderColor: 'white',
    marginBottom: 30,
  },
  captureButton: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
