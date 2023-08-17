import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React,{useRef,useState} from 'react'
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
const Camera = () => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [playVideoAd, setPlayVideoAd] = useState(false);
  const [isError, setIsError] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const _onError = e => {
    setIsLoading(false);
    setPlayVideoAd(false);
    setIsError(true);
  };
  const onPlaying = event => {
    console.log('onPlayingVideo----->', event);
  };

  const videoUrl = 'rtsp://admin:admin12345@183.83.177.119:554/cam/realmonitor?channel=1&subtype=0'

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
        <VLCPlayer
                ref={videoRef}
                videoAspectRatio="16:9"
                autoAspectRatio={true}
                source={{
                  uri: videoUrl,
                  initOptions: [
                    '--rtsp-tcp',
                    '--network-caching=150',
                    '--rtsp-caching=150',
                    '--no-stats',
                    '--tcp-caching=150',
                    '--realrtsp-caching=150',
                  ],
                  initType: 2,
                }}
                paused={paused}
                muted={muted}
 
                style={{
                 height:300,
                  width: '300%',
                }}
                onError={_onError}
                onStopped={_onError}
                onPlaying={onPlaying.bind(this)}
                isLive={true}
                autoReloadLive={true}
              />
    </View>
  )
}

export default Camera
const styles = StyleSheet.create({
  // video:{
  //   height: 240, width: 32
  // }
})