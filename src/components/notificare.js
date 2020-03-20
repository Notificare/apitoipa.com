import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

class NotificarePushManager extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      notificare: null
    }
  }

  componentDidMount() {

    let notificareScript = document.createElement('script');
    notificareScript.id = 'notificareJSLib';
    notificareScript.type = 'text/javascript';
    notificareScript.src = "https://cdn.notifica.re/libs/html5/v2/latest/notificare.min.js";

    if (!document.getElementById("notificareJSLib")) {
      document.body.appendChild(notificareScript);
      notificareScript.onload = () => {
        this.initNotificare();
      }
    } else {
      this.initNotificare();
    }

  }

  initNotificare = () => {

    let notificare = new window.Notificare({
      "appHost": "https://api2ipa.dev",
      "appVersion": "1.0",
      "appKey": "4fcbb401eae6fe1bc7a7be22a1fd62e902f4e3f078c91d4cfb963ef71e7562b2",
      "appSecret": "cf39b89ef1f6dbb6089dc40d681a02d598677ce8d615d7ad5bdb1a38166739ad",
      "soundsDir": "/sounds/",
      "serviceWorker": "/sw.js",
      "geolocationOptions": {
        "timeout": 60000,
        "enableHighAccuracy": true,
        "maximumAge": 100000
      }
    });

    this.setState({
      notificare: notificare
    });

    notificare.launchWithAutoOnBoarding({
      text: this.props.intl.formatMessage({ id: "notificare.onBoarding.text" }),
      cancelText: this.props.intl.formatMessage({ id: "notificare.onBoarding.cancelText" }),
      acceptText: this.props.intl.formatMessage({ id: "notificare.onBoarding.acceptText" }),
      retryAfterInterval: 24, //in hours, defaults to 24 hours if not present
      showAfterDelay: 1 //in seconds, defaults to immediately if not present
    });

    notificare.didUpdateBadge = (badge) => {

    }

    notificare.didRegisterDevice = () => {

    }

    notificare.didFailToRegisterDevice = (e) => {
      console.log('didFailToRegisterDevice', e);
    }

    notificare.didFailToRegisterForNotifications = (e) => {
      console.log('didFailToRegisterForNotifications', e);
    }

    notificare.didUpdateLocation = (location) => {
      console.log('didUpdateLocation', location);
    }

    notificare.didFailToUpdateLocation = (e) => {
      console.log('didFailToUpdateLocation', e);
    }

    notificare.didReceiveNotification = (notification) => {
      console.log('didReceiveNotification', notification);
    }


    notificare.didReceiveUnknownNotification = (notification) => {
      console.log('didReceiveUnknownNotification', notification);
    }


    notificare.didReceiveWorkerPush = (notification) => {
      console.log('didReceiveWorkerPush', notification);
    }


    notificare.didReceiveSystemNotification = (notification) => {
      console.log('didReceiveSystemNotification', notification);
    }

    notificare.didOpenNotification = (notification) => {
      notificare.presentNotification(notification); //Default UI for automatically handle all types of notifications
    }

    notificare.shouldPerformActionWithURL = (url) => {
      window.location.href = url;
    }


    notificare.onReady = () => {

    }

  }


  render() {

    return null;

  }
}

export default injectIntl(NotificarePushManager)
