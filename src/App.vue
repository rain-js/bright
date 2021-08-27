<template>
  <div id="app">
    <div class="wrapper">
      <div class="line">按钮</div>
      <b-button>默认按钮</b-button>
      <b-button type="primary">主要按钮</b-button>
      <b-button type="success">成功按钮</b-button>
      <b-button type="info">信息按钮</b-button>
      <b-button type="warning">警告按钮</b-button>
      <b-button type="danger">危险按钮</b-button>
      
      <div class="line"></div>
      <b-button plain>默认按钮</b-button>
      <b-button type="primary" plain>主要按钮</b-button>
      <b-button type="success" plain>成功按钮</b-button>
      <b-button type="info" plain>信息按钮</b-button>
      <b-button type="warning" plain>警告按钮</b-button>
      <b-button type="danger" plain>危险按钮</b-button>
            
      <div class="line"></div>
      <b-button round>默认按钮</b-button>
      <b-button type="primary" round>主要按钮</b-button>
      <b-button type="success" round>成功按钮</b-button>
      <b-button type="info" round>信息按钮</b-button>
      <b-button type="warning" round>警告按钮</b-button>
      <b-button type="danger" round>危险按钮</b-button>

      <div class="line">按钮禁用</div>
      <b-button disabled>默认按钮</b-button>
      <b-button type="primary" disabled>主要按钮</b-button>
      <b-button type="success" disabled>成功按钮</b-button>
      <b-button type="info" disabled>信息按钮</b-button>
      <b-button type="warning" disabled>警告按钮</b-button>
      <b-button type="danger" disabled>危险按钮</b-button>

      <div class="line">图标按钮</div>
      <b-button type="primary" icon="b-icon-edit"></b-button>
      <b-button type="primary" icon="b-icon-addto">添加</b-button>
      <b-button type="primary" icon="b-icon-search">搜索</b-button>
      <b-button type="primary" icon="b-icon-phone">呼叫</b-button>

      <div class="line">图标</div>
      <div v-for="(icon, index) in iconList" :key="index" class="icon-block">
        <b-icon :name="icon" :key="index" class="icon-block-i"></b-icon>
        <div class="icon-block-name">{{icon}}</div>
      </div>
    </div>
  </div>
    
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      iconList: [
        "bluetoothoff",
        "bluetoothon",
        "camera",
        "course",
        "bluetooth_link",
        "addto",
        "child",
        "audio",
        "delete",
        "DND_mode",
        "edit",
        "child1",
        "settings",
        "bluray",
        "cancel",
        "down",
        "brightness",
        "musiclist",
        "home",
        "favoriteslist",
        "loop",
        "nextsong",
        "bottom",
        "guarantee",
        "agreement",
        "prevent",
        "privacy",
        "play",
        "brightness1",
        "privac_open",
        "conversation",
        "information",
        "answer",
        "face",
        "protect",
        "close",
        "nosignal",
        "refuse",
        "selection",
        "previous",
        "Privacy",
        "increase",
        "music",
        "save",
        "singlecycle",
        "prompt",
        "Incoming_call",
        "layered",
        "collection",
        "soundsize",
        "upward",
        "vision",
        "top",
        "history",
        "shopping",
        "turnvoice",
        "locking",
        "restore",
        "night",
        "safety",
        "phone",
        "relationship",
        "next",
        "timeout",
        "video1",
        "refresh",
        "visible",
        "telephone",
        "th_internet",
        "callout",
        "withdraw",
        "call",
        "video1",
        "hangup",
        "mute",
        "eye_protection",
        "distance",
        "voice",
        "nickname",
        "payment",
        "privacy_closed",
        "movie",
        "wifi",
        "random",
        "problem",
        "address",
        "checkmore",
        "bookresource",
        "back",
        "checkmore",
        "addresslist",
        "address",
        "cancelwhite",
        "cancel",
        "close",
        "clock",
        "geniecalling",
        "entertainmentmark",
        "addmeteo",
        "evitaretraffic",
        "evitarepayment",
        "genieclock",
        "highwayfirst",
        "faimlyalbum",
        "genieSEC",
        "info",
        "geniecommunity",
        "housecare",
        "marks",
        "infopersonal",
        "callingrobort",
        "masterctrl",
        "messagewhite",
        "message",
        "lightctrl",
        "mirrorlightctrl",
        "kidslock",
        "evitarehighway",
        "groupctrl",
        "mutemode",
        "search",
        "huoyan",
        "paymentlife",
        "stepback",
        "skintest",
        "scanQR",
        "instruction",
        "respond",
        "maskclock",
        "MTR",
        "suggestion",
        "queenmirror",
        "phonebill",
        "voicememo",
        "scanread",
        "schedule",
        "tipsmoney",
        "voiceshopping",
        "togo",
        "voiceprint",
        "xiamimusic",
        "sleepmode",
        "QA",
        "volume",
        "cart",
        "checksurface",
        "check",
        "birthday",
        "deviceoff",
        "custom",
        "diffuserstoparea",
        "diffuserstop",
        "diffuserplay",
        "connectdevice",
        "cook",
        "diffuserplayarea",
        "deviceon",
        "dinner",
        "donework",
        "dislike",
        "getup",
        "disconnectdevice",
        "getout",
        "guests",
        "feeding",
        "like",
        "mark",
        "goodnight",
        "meeting",
        "housecleaning",
        "gohome",
        "hot",
        "radiobuttonunselect",
        "menu",
        "radiobuttonselect",
        "record",
        "meetingover",
        "microphoneoff",
        "share",
        "singing",
        "seriesfinale",
        "putbabytobed",
        "washingroom",
        "wakeupbaby",
        "watchseries",
        "takeabreak",
        "setting"
    ]
    }
  }
}
</script>

<style lang="scss">
@import './theme/icon.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
  min-width: 980px;

  .wrapper {
    width: 800px;
    margin: 0 auto;
    text-align: left;

    .icon-block {
      display: inline-block;
      width: 120px;
      height: 100px;
      text-align: center;
      font-size: 14px;
      &-i {
        font-size: 32px;
      }
      &-name {
        margin-top: 10px;
        color: rgb(105, 100, 100);
      }
    }
  }
}
.line {
  margin: 10px 0;
}
</style>
