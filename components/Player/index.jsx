import React, {
    useEffect,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import PropTypes from "prop-types";
  
  // static flag to only load the Kaltura embedPlaykitJS script only once across many instances of the player
  // note that it assumes that this component will only be used against one account and uiConf ID across a given app
  // if more than one account or player uiConf are to be used, this should change to an array of URLs.
  let scriptLoadedGlobally = false;
  const DEFAULT_KALTURA_URL = "https://cdnapisec.kaltura.com";
  
  /**
   * Player component for loading and interacting with the Kaltura Player v7 (aka [kaltura-player-js](https://github.com/kaltura/kaltura-player-js))
   *
   * @param {Object} props - The props object.
   * @param {React.Ref} ref - A ref to allow parent component to access player methods such as play/pause.
   * @returns {React.Element} - Rendered component.
   */
  const Player = forwardRef((props, ref) => {
    const playerContainerRef = useRef(null);
    const [playerInstance] = useState(null);
  
    useEffect(() => {
      if (playerInstance) {
        if (props.isPlaying) {
          playerInstance.play();
        } else {
          playerInstance.pause();
        }
  
        if (props.seekTo !== null) {
          playerInstance.currentTime = props.seekTo;
        }
      }
    }, [props.isPlaying, props.seekTo, playerInstance]);
  
    /**
     * expose methods for parent components
     */
    useImperativeHandle(ref, () =>
      ref
        ? {
            /**
             * Play the Kaltura player.
             *
             * @param {number} seekTo - The position to seek to in seconds.
             */
            playKalturaPlayer: (seekTo = null) => {
              if (playerInstance) {
                if (seekTo !== null) {
                  playerInstance.currentTime = seekTo;
                }
                playerInstance.play();
              }
            },
  
            /**
             * Pause the Kaltura player.
             */
            pauseKalturaPlayer: () => {
              if (playerInstance) {
                playerInstance.pause();
              }
            },
          }
        : {}
    );
  
    /**
     * Load Kaltura Player script and set it up.
     */
    useEffect(() => {
      const kalturaServiceUrl =
        props.kalturaServiceUrl || props.kalturaServiceUrl === ""
          ? DEFAULT_KALTURA_URL
          : props.kalturaServiceUrl;
  
      const scriptUrl = `${kalturaServiceUrl}/p/${props.partnerId}/embedIframeJs/uiconf_id/${props.uiConfId}`;
  
      if (scriptLoadedGlobally) {
        if (window.kWidget && playerContainerRef.current) {
          if (playerInstance) {
            playerInstance.destroy();
          }
    
          // const uiComponentsArr = setupUIComponents(props);
  
          console.log('player', window.kWidget);  
  
          window.kWidget.embed({
              targetId: props.playerId,
              wid: "_2645261",
              uiconf_id: 52176612,
              flashvars: {},
              cache_st: 1686684721,
              entry_id: "1_aeuvpi05"
              });
        }
      } else {
        const script = document.createElement("script");
        script.onerror = (e) => {
          console.error("Failed to load Kaltura player script: ", e);
        };
        script.src = scriptUrl;
        console.log(scriptUrl);
        script.onload = () => {
          console.log('loaded');
          scriptLoadedGlobally = true;
          if (window.kWidget && playerContainerRef.current) {
            if (playerInstance) {
              playerInstance.destroy();
            }
      
            // const uiComponentsArr = setupUIComponents(props);
    
            console.log('player', window.kWidget);  
    
            window.kWidget.embed({
                targetId: props.playerId,
                wid: "_2645261",
                uiconf_id: 52176612,
                flashvars: {},
                cache_st: 1686684721,
                entry_id: "1_aeuvpi05"
                });
            }
        };
        document.body.appendChild(script);
      }
    }, [props.partnerId, props.uiConfId, props.kalturaServiceUrl, props.playerId, playerInstance]);
  
    /**
     * Load media when the entryId prop changes.
     */
    useEffect(() => {
      if (playerInstance !== null) {
        playerInstance.loadMedia({ entryId: props.entryId });
      }
    }, [props.entryId, playerInstance]);
  
    /**
     * Cleanup function to destroy player on component unmount.
     */
    useEffect(() => {
      return () => {
        if (playerInstance) {
          playerInstance.destroy();
        }
      };
    }, [playerInstance]);
  
  
    /**
     * Render the player.
     */
    return (
      <div
        className="react_kaltura_player_container"
        style={{
          width: props.width,
          height: props.height,
          position: "relative",
        }}
      >
        <div
          className="kaltura-player-container"
          id={props.playerId}
          data-index={props.index}
          data-uniqueguiid={props.uniqueGuiId}
          ref={playerContainerRef}
          style={{ width: props.width, height: props.height }}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        ></div>
      </div>
    );
  });
  
  Player.propTypes = {
    kalturaServiceUrl: PropTypes.string, // the URL to access the Kaltura service on, defaults to: https://cdnapi-ev.kaltura.com
    partnerId: PropTypes.number.isRequired, // the Kaltura account id (KMC>Integration Settings>Partner ID)
    uniqueGuiId: PropTypes.string, // this is to ensure a unique identifier in the gui for better handling of lists and galleries
    uiConfId: PropTypes.number.isRequired, // the Kaltura Player instance id (KMC>Studio)
    ks: PropTypes.string.isRequired, // the Kaltura Session to pass when rendering the Kaltura Video Players
    entryId: PropTypes.string.isRequired, // the id of the KalturaEntry to load
    playerId: PropTypes.string.isRequired, // the id of the Kaltura Player instance that will be created (the id of the div that will be passed to KalturaPlayer.setup)
    autoPlay: PropTypes.bool, // should the video start playing immediately?
    preLoad: PropTypes.string, // should the video start loading immediately?
    startingVolume: PropTypes.number, // initial volume for the video player
    hideLoadingSpinner: PropTypes.bool, // should the loading spinner be hidden?
    hideBigPlayButton: PropTypes.bool, // should the big play button be hidden?
    onError: PropTypes.func, // function to call when there's an error
    onMouseEnter: PropTypes.func, // function to call when mouse enters the player
    onMouseLeave: PropTypes.func, // function to call when mouse leaves the player
    startTime: PropTypes.number, // starting time for the video
    posterImg: PropTypes.string, // URL of the image to show before the video starts
    width: PropTypes.string, // width of the player
    height: PropTypes.string, // height of the player
    index: PropTypes.number, // index of the player (integer, used to ease management of players within a sequence gallery)
    isPlaying: PropTypes.bool, // should the player be playing? alternative way is to use playKalturaPlayer/pauseKalturaPlayer hooks
    seekTo: PropTypes.number, // integer, seek the player to this time (changes currentTime), alternative way is to use playKalturaPlayer hook
  };
  
  Player.defaultProps = {
    kalturaServiceUrl: "https://cdnapi-ev.kaltura.com",
    uniqueGuiId: null,
    autoPlay: false,
    preLoad: "auto",
    startingVolume: 1,
    hideLoadingSpinner: false,
    hideBigPlayButton: false,
    onError: null,
    onMouseEnter: null,
    onMouseLeave: null,
    startTime: 0,
    posterImg: "",
    width: "100%",
    height: "100%",
  };
  
  export default Player;