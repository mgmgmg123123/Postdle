const todofukenList = require('static/todofuken.json').todofukenList
export const state = () => ({
  countX: 1,
  countY: 1,
  userNowAnswer: ["", "", "", "", "", "", ""],
  userAnswerHistory: [""],
  userAnswerDistanceHistory: [""],
  clear: false,
  overCount: false,
  answer: "",
  ansewrLocation: "",
  usersAnswer: "",
  tweetText: ""

});
export const mutations = {
  answer: function (state, distance) {
    if (state.countY >= 10) {
      state.overCount = true;
    }
    // クリアしているか答えとユーザーの回答を突合させる
    if (state.answer === state.userNowAnswer.join('') || state.overCount) {
      if (state.answer === state.userNowAnswer.join('')) {
        state.clear = true
      }
      state.userAnswerDistanceHistory[state.countY - 1] = distance
    } else {
      state.userAnswerDistanceHistory[state.countY - 1] = distance
      if (state.countY < 10) {
        state.countY++;
      }
      state.countX = 1;
      state.userNowAnswer = ["", "", "", "", "", "", ""]
      state.userAnswerHistory.push("")
    }
  },
  insert: function (state, insertedNumber) {
    if (state.countX > 7) {
      return
    }
    if (state.countX <= 7) {
      state.userNowAnswer[state.countX - 1] = insertedNumber
    }
    // 最新の状況を反映
    state.userAnswerHistory[state.countY - 1] = state.userNowAnswer
    state.countX++
    state.userNowAnswer.splice();
    state.userAnswerHistory.splice();
  },
  reset: function (state) {
    const item = document.querySelectorAll("[id^='historyItem']");
    if (item == false) {
      return;
    }

    for (let i = 0; i < item.length; i++) {
      if (item[i] !== false) {
        item[i].classList.remove("number-place-correct");
        item[i].classList.remove("number-correct");
        item[i].classList.remove("number-nothing");
      }
    }
    // 初期化する
    state.countX = 1;
    state.countY = 1;
    state.answer = "";
    state.clear = false;
    state.overCount = false;
    state.tweetText = "";
    state.ansewrLocation = "";
    state.userAnswerDistanceHistory = [""];
    state.userNowAnswer = ["", "", "", "", "", "", ""];
    state.userAnswerHistory = [""];
    state.userNowAnswer.splice();
    state.userAnswerHistory.splice();
    state.userAnswerHistory.splice();
  },
  answerSettings: function (state, location) {
    state.answer = location.postal;
    state.ansewrLocation = location;
  },
  deleteNumber: function (state) {
    if (state.countX <= 1) {
      return
    }
    state.userNowAnswer[state.countX - 2] = ""
    state.userAnswerHistory[state.countY - 1][state.countX - 2] = ""

    state.userNowAnswer.splice()
    state.userAnswerHistory.splice()
    if (state.countX > 1) {
      state.countX = state.countX - 1
    } else {
      state.countX = 1
    }

  },
  tweetCreate: function (state) {
    // ツイート内容を作成する
    state.tweetText = "Postdle" + "　" + state.countY + "\/10 \u000D\u000A"
    for (let i = 1; i <= state.countY; i++) {
      state.tweetText = state.tweetText + "〒"
      for (let j = 1; j <= 7; j++) {
        const element = document.querySelector("#historyItem" + i + "-" + j);
        if (!element) {
          continue
        }
        if (element.classList.contains("number-correct")) {
          state.tweetText = state.tweetText + "🟨"
        } else if (element.classList.contains("number-place-correct")) {
          state.tweetText = state.tweetText + "🟩"
        } else if (element.classList.contains("number-nothing")) {
          state.tweetText = state.tweetText + "⬛"
        }
        if (j === 3) {
          state.tweetText = state.tweetText + "-"
        }
      }
      state.tweetText = state.tweetText + "\u000D\u000A"
    }
    state.tweetText = state.tweetText + "正解は" + state.ansewrLocation.prefecture + state.ansewrLocation.city + state.ansewrLocation.town + "の郵便番号でした。"
    state.tweetText = "http://twitter.com/share?url=https://postdle.netlify.app/&text=" + encodeURI(state.tweetText) + "&hashtags=Postdle";
    window.open(state.tweetText, '_blank');
  }
};
export const actions = {
  answer({ commit, state }) {
    let distance = ""
    let usersAnswer = state.userNowAnswer.join('');
    const geolib = require('geolib');
    const axios = require("axios");
    const getCityFromPostalUrl = "https://geoapi.heartrails.com/api/json?method=searchByPostal"
    axios.get(getCityFromPostalUrl, {
      params: {
        postal: usersAnswer
      }
    }).then((res) => {
      if (res.data.response.error !== undefined) {
        distance = "該当郵便番号なし"
      } else {
        distance =
          geolib.getDistance(
            { latitude: res.data.response.location[0].x, longitude: res.data.response.location[0].y },
            { latitude: state.ansewrLocation.x, longitude: state.ansewrLocation.y, }
          );
        distance = (distance / 1000).toPrecision([2]) + "km"
      }
      commit("answer", distance);

    }).catch((e) => {
      console.log(e);
    });

  },
  insert({ commit }, number) {
    commit("insert", number);
  },
  reset({ commit }) {
    commit("reset");
  },
  answerSettings({ commit }) {
    const axios = require("axios");
    const getCityListUrl = "https://geoapi.heartrails.com/api/json?method=getTowns"

    const cityIndex = Math.floor(Math.random() * 47);
    axios.get(getCityListUrl, {
      params: {
        prefecture: todofukenList[cityIndex],
      }
    }).then((res) => {
      if (res.status == 200 && res.data.response.error === undefined) {
        let postalIndex;
        if (res.data.response.location.length == 1) {
          postalIndex = 0;
        }
        if (res.data.response.location.length > 1) {
          const min = 0;
          const max = res.data.response.location.length - 1;
          postalIndex = Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        const answerLocation = res.data.response.location[postalIndex]
        commit("answerSettings", answerLocation);
      }
    }).catch((e) => {
      console.log(e);
    });
  },
  deleteNumber({ commit }) {
    commit("deleteNumber");
  },
  tweetCreate({ commit }) {
    commit("tweetCreate");
  }
};
