//Wed Jul 03 2024 08:35:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
GXRZ = "Tom 9.26更新";
const $ = Env("弟弟果园");
$.idx = ($.idx = ($.getval("ddgySuffix") || "1") - 1) > 0 ? $.idx + 1 + "" : "";
const notify = $.isNode() ? require("./sendNotify") : "",
  COOKIE = $.isNode() ? require("./ddgyCOOKIE") : "",
  logs = 0;
notifyttt = 1;
notifyInterval = 2;
Minutes = 10;
K = "";
$.message = "";
DATA = "";
XH = "0";
COOKIES_SPLIT = "";
sign = "";
let ddgyheaderArr = [],
  ddgyheaderVal = "",
  ddgyurlArr = [],
  ddgyurlVal = "",
  middleddgyHEADER = [],
  middleddgyURL = [];
console.log(GXRZ + "\n");
$.message += GXRZ + "\n";
if ($.isNode() && process.env.ddgy_ddgyHEADER) {
  XH = process.env.ddgy_XH || "0";
  TXTX = process.env.ddgy_TXTX || "0";
  SC = process.env.ddgy_SC || "0";
  notifyttt = process.env.ddgy_notifyttt || "1";
  notifyInterval = process.env.ddgy_notifyInterval || "2";
  Minutes = process.env.ddgy_Minutes || "10";
  COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
  console.log("============ cookies分隔符为：" + JSON.stringify(COOKIES_SPLIT) + " =============\n");
  process.env.ddgy_ddgyHEADER && process.env.ddgy_ddgyHEADER.indexOf(COOKIES_SPLIT) > -1 ? middleddgyHEADER = process.env.ddgy_ddgyHEADER.split(COOKIES_SPLIT) : middleddgyHEADER = process.env.ddgy_ddgyHEADER.split();
  Object.keys(middleddgyHEADER).forEach(_0x5c9a39 => {
    middleddgyHEADER[_0x5c9a39] && ddgyheaderArr.push(middleddgyHEADER[_0x5c9a39]);
  });
  process.env.ddgy_ddgyURL && process.env.ddgy_ddgyURL.indexOf(COOKIES_SPLIT) > -1 ? middleddgyURL = process.env.ddgy_ddgyURL.split(COOKIES_SPLIT) : middleddgyURL = process.env.ddgy_ddgyURL.split();
  Object.keys(middleddgyURL).forEach(_0x30e2c4 => {
    middleddgyURL[_0x30e2c4] && ddgyurlArr.push(middleddgyURL[_0x30e2c4]);
  });
} else {
  if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val) {
    console.log("============ cookie方式为：boxjs复制会话 =============\n");
    XH = COOKIE.settings.find(_0x210bf3 => _0x210bf3.id === "ddgyXH").val || "0";
    TXTX = COOKIE.settings.find(_0x406a19 => _0x406a19.id === "ddgyTXTX").val || "0";
    SC = COOKIE.settings.find(_0x251630 => _0x251630.id === "ddgySC").val || "0";
    notifyttt = COOKIE.settings.find(_0x5054e3 => _0x5054e3.id === "ddgynotifyttt").val || "1";
    notifyInterval = COOKIE.settings.find(_0x344cb9 => _0x344cb9.id === "ddgynotifyInterval").val || "2";
    Minutes = COOKIE.settings.find(_0x1d7633 => _0x1d7633.id === "ddgyMinutes").val || "10";
    ddgyCount = COOKIE.settings.find(_0xbdb52e => _0xbdb52e.id === "ddgyCount").val || "1";
    for (let i = 1; i <= ddgyCount; i++) {
      i == 1 ? op = "" : op = i;
      COOKIE.datas.find(_0x474744 => _0x474744.key === "ddgyheader" + op).val && (ddgyheaderArr.push(COOKIE.datas.find(_0x4406cc => _0x4406cc.key === "ddgyheader" + op).val), ddgyurlArr.push(COOKIE.datas.find(_0x19d6d1 => _0x19d6d1.key === "ddgyurl" + op).val));
    }
  } else {
    "ddgyXH" && (XH = $.getval("ddgyXH") || "0");
    "ddgyTXTX" && (TXTX = $.getval("ddgyTXTX") || "0");
    "ddgySC" && (SC = $.getval("ddgySC") || "0");
    "ddgynotifyttt" && (notifyttt = $.getval("ddgynotifyttt") || "1");
    "ddgynotifyInterval" && (notifyInterval = $.getval("ddgynotifyInterval") || "1");
    "ddgyMinutes" && (Minutes = $.getval("ddgyMinutes") || "10");
    let ddgyCount = ($.getval("ddgyCount") || "1") - 0;
    for (let i = 1; i <= ddgyCount; i++) {
      i == 1 ? op = "" : op = i;
      $.getdata("ddgyheader" + op) && (ddgyheaderArr.push($.getdata("ddgyheader" + op)), ddgyurlArr.push($.getdata("ddgyurl" + op)));
    }
  }
}
function GetCookie() {
  if ($request.url.indexOf("plant") > -1 && $request.url.indexOf("queryWeather?") > -1 && $request.url.indexOf("wsgsig=") > -1) {
    const _0x17b3be = $request.url.split("wsgsig=")[1],
      _0x439a58 = $request.headers,
      _0x4ef76c = _0x439a58.split("D-Header-T")[1];
    if (_0x4ef76c) {
      if (XH == 1) {
        _0x4b24d2();
        function _0x4b24d2() {
          bodys = $.getdata("ddgyheader" + $.idx);
          if (bodys) {
            bodys != _0x4ef76c ? ($.idx == "" ? $.idx = 2 : $.idx = Number($.idx) + 1, _0x4b24d2()) : ($.setdata(_0x4ef76c, "ddgyheader" + $.idx), $.setdata(_0x17b3be, "ddgyurl" + $.idx), $.log("[" + ($.name + $.idx) + "] 更新浇水url✅: 成功,ddgyurlVal:" + _0x17b3be + "\n" + _0x4ef76c + "\n"), $.msg($.name + $.idx, "更新浇水url✅: 成功, " + _0x17b3be + "\n" + _0x4ef76c + "\n"), $.done());
          } else {
            $.setdata(_0x4ef76c, "ddgyheader" + $.idx);
            $.setdata(_0x17b3be, "ddgyurl" + $.idx);
            $.log("[" + ($.name + $.idx) + "] 新增浇水url✅: 成功,ddgyurlVal:" + _0x17b3be + "\n" + _0x4ef76c + "\n");
            $.msg($.name + $.idx, "新增浇水url✅: 成功, " + _0x17b3be + "\n" + _0x4ef76c + "\n");
            $.done();
          }
        }
      } else {
        $.setdata(_0x4ef76c, "ddgyheader" + $.idx);
        $.setdata(_0x17b3be, "ddgyurl" + $.idx);
        $.log("[" + ($.name + $.idx) + "] 获取浇水url✅: 成功,ddgyurlVal:" + _0x17b3be + "\n" + _0x4ef76c + "\n");
        $.msg($.name + $.idx, "获取浇水url✅: 成功, " + _0x17b3be + "\n" + _0x4ef76c + "\n");
        $.done();
      }
    }
  }
}
console.log("================== 脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " =====================\n");
console.log("============ 共 " + ddgyheaderArr.length + " 个" + $.name + "账号=============\n");
nowTimes = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
Y = nowTimes.getFullYear() + "-";
M = (nowTimes.getMonth() + 1 < 10 ? "0" + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + "-";
D = nowTimes.getDate() < 10 ? "0" + nowTimes.getDate() : nowTimes.getDate();
ddtime = Y + M + D;
function ts(_0x389d00) {
  if ($.isNode()) {
    TS = Math.round((new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
  } else {
    TS = Math.round((new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000) / 1000).toString();
  }
  return TS;
}
function daytime(_0x3696bf) {
  DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
  return DAYTIME;
}
function time(_0x251580) {
  var _0x45c629 = new Date(_0x251580);
  Y = _0x45c629.getFullYear() + "-";
  M = (_0x45c629.getMonth() + 1 < 10 ? "0" + (_0x45c629.getMonth() + 1) : _0x45c629.getMonth() + 1) + "-";
  D = _0x45c629.getDate() + " ";
  h = _0x45c629.getHours() + ":";
  m = _0x45c629.getMinutes() + ":";
  s = _0x45c629.getSeconds();
  return Y + M + D + h + m + s;
}
function timecs(_0x3df85c) {
  _0x3df85c.indexOf(" ") >= 0 && (_0x3df85c = _0x3df85c.replace(" ", "T"));
  var _0x517fec = new Date(_0x3df85c).getTime();
  return _0x517fec;
}
function udid() {
  var _0x30c7d6 = [],
    _0x169a3a = "0123456789ABCDEF";
  for (var _0x5ba4d4 = 0; _0x5ba4d4 < 36; _0x5ba4d4++) {
    _0x30c7d6[_0x5ba4d4] = _0x169a3a.substr(Math.floor(Math.random() * 16), 1);
  }
  _0x30c7d6[14] = "4";
  _0x30c7d6[19] = _0x169a3a.substr(_0x30c7d6[19] & 3 | 8, 1);
  _0x30c7d6[8] = _0x30c7d6[13] = _0x30c7d6[18] = _0x30c7d6[23] = "-";
  var _0x396796 = _0x30c7d6.join("");
  return _0x396796;
}
function udid2() {
  function _0x2568fa() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x2568fa() + _0x2568fa() + "-" + _0x2568fa() + "-" + _0x2568fa() + "-" + _0x2568fa() + "-" + _0x2568fa() + _0x2568fa() + _0x2568fa();
}
function encodeUnicode(_0x3b5346) {
  var _0x11edf1 = [];
  for (var _0x3b38a2 = 0; _0x3b38a2 < _0x3b5346.length; _0x3b38a2++) {
    _0x11edf1[_0x3b38a2] = ("00" + _0x3b5346.charCodeAt(_0x3b38a2).toString(16)).slice(-4);
  }
  return "\\u" + _0x11edf1.join("\\u");
}
function decodeUnicode(_0x5d514e) {
  _0x5d514e = _0x5d514e.replace(/\\u/g, "%u");
  return unescape(_0x5d514e);
}
function format(_0x326e3e) {
  logs == 2 && (_0x326e3e = JSON.stringify(_0x326e3e).replace(/,/g, ",\n").replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/\\/g, "").replace(/\\\\/g, "\\"));
  logs == 3 && (_0x326e3e = decodeUnicode(JSON.stringify(_0x326e3e)).replace(/,/g, ",\n").replace(/{/g, "{\n").replace(/}/g, "\n}").replace(/\\/g, ""));
  return _0x326e3e;
}
function RT(_0xc045fc, _0x4717b7) {
  do rt = Math.floor(Math.random() * _0x4717b7); while (rt < _0xc045fc);
  return rt;
}
let isGetCookie = typeof $request !== "undefined";
isGetCookie ? (GetCookie(), $.done()) : !(async () => {
  if (ddgyheaderArr.length == 0) {
    $.msg($.name, time(Number(Date.now())) + "⚠️未获取COOKIE\n请点击前往获取 https://www.quqi.tv/m/index.html\n", "https://www.quqi.tv/m/index.html", {
      "open-url": "https://www.quqi.tv/m/index.html"
    });
    return;
  } else {
    await all();
  }
})().catch(_0x56d752 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x56d752 + "!", "");
}).finally(() => {
  $.done();
});
async function all() {
  for (let _0x6e089f = 0; _0x6e089f < ddgyheaderArr.length; _0x6e089f++) {
    ddgyheaderVal = ddgyheaderArr[_0x6e089f];
    ddgyurlVal = ddgyurlArr[_0x6e089f];
    $.index = _0x6e089f + 1;
    O = $.name + $.index + "🔔";
    $.isLogin = true;
    if (ddgyheaderVal) {
      console.log("-----------🔔开始运行【" + ($.name + $.index) + "】🔔-----------");
      taskheader = {
        "Content-Type": "application/json;charset=utf-8",
        "D-Header-T": "" + ddgyheaderVal
      };
      K = "用户信息🚩";
      if (K == "用户信息🚩") {
        taskurl = "https://game.xiaojukeji.com/api/game/plant/enter?wsgsig=" + ddgyurlVal;
        taskbody = "{\"assist_type\":0,\"encode_uid\":\"\",\"is_old_player\":true,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}";
        await taskpost();
        $.user = DATA;
        $.user.errno == 0 ? (nickname = $.user.data.lam_uid, console.log("\n" + O + "\n========== " + nickname + " ==========\n"), $.message += "\n" + O + "\n========== 【" + nickname + "】 ==========\n", await js()) : $.isLogin = false;
        if (!$.isLogin) {
          $.msg(O, time(Number(Date.now())) + "⚠️COOKIE失效\n请点击前往获取 https://www.quqi.tv/m/index.html", "https://www.quqi.tv/m/index.html", {
            "open-url": "https://www.quqi.tv/m/index.html"
          });
          $.isNode() && (await notify.sendNotify(O, time(Number(Date.now())) + "⚠️COOKIE失效\n请点击前往获取https://www.quqi.tv/m/index.html"));
          continue;
        }
      }
    }
  }
}
taskheader = {
  "Content-Type": "application/json;charset=utf-8",
  "D-Header-T": "" + ddgyheaderVal
};
async function js() {
  K = "浇水🚩";
  K == "浇水🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/watering?wsgsig=" + ddgyurlVal, taskbody = "{\"is_fast\":false,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.js = DATA, $.js.errno != 0 && (console.log("浇水：失败   " + $.js.errmsg + " \n"), await $.wait(2000), await kbx()), $.js.errno == 0 && (console.log("浇水：成功   剩余水滴：" + $.js.data.pack_water + " \n"), await $.wait(2000), await js()));
}
async function kbx() {
  K = "开宝箱🚩";
  K == "开宝箱🚩" && (taskurl = "https://game.xiaojukeji.com/api/game/plant/recCommonBox?wsgsig=" + ddgyurlVal, taskbody = "{\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.kbx = DATA, $.kbx.errno != 0 && (console.log("开宝箱：失败   " + $.kbx.errmsg + " \n"), await $.wait(2000), await ssd()), $.kbx.errno == 0 && (console.log("开宝箱：成功\n"), await $.wait(2000), await kbx()));
}
async function ssd() {
  K = "收水滴🚩";
  K == "收水滴🚩" && (taskurl = "https://game.xiaojukeji.com/api/game/plant/recBucketWater?wsgsig=" + ddgyurlVal, taskbody = "{\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.ssd = DATA, $.ssd.errno != 0 && (console.log("收水滴：失败   " + $.ssd.errmsg + " \n"), await $.wait(2000), await sf()), $.ssd.errno == 0 && (console.log("收水滴：成功   获得水滴：" + $.ssd.data.rec_water + " \n"), await $.wait(2000), await ssd()));
}
async function sf() {
  K = "施肥🚩";
  K == "施肥🚩" && (taskurl = "https://game.xiaojukeji.com/api/game/plant/fertilizer?wsgsig=" + ddgyurlVal, taskbody = "{\"count\":1,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.sf = DATA, $.sf.errno != 0 && (console.log("施肥：失败   " + $.sf.errmsg + " \n"), await $.wait(2000), await jss()), $.sf.errno == 0 && (console.log("施肥：成功\n"), await $.wait(2000), await sf()));
}
async function jss() {
  K = "浇水🚩";
  K == "浇水🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/watering?wsgsig=" + ddgyurlVal, taskbody = "{\"is_fast\":false,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.jss = DATA, $.jss.errno != 0 && $.jss.errmsg == "果实已成熟" && (console.log($.jss.errmsg + " \n"), $.msg($.name + $.index + " " + $.jss.errmsg + " \n"), $.done()), $.jss.errno != 0 && (console.log("浇水：失败   " + $.jss.errmsg + " \n"), await $.wait(2000), await qd(), await $.wait(10000), await jl()), $.jss.errno == 0 && (console.log("浇水：成功   剩余水滴：" + $.jss.data.pack_water + " \n"), await $.wait(2000), await jss()));
}
async function qd() {
  K = "领取隔天水滴🚩";
  K == "领取隔天水滴🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/recExtWater?wsgsig=" + ddgyurlVal, taskbody = "{\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.detsd = DATA, $.detsd.errno == 0 && (console.log("领取隔天水滴：成功   获得水滴：" + $.detsd.data.rec_water + " \n"), await $.wait(2000)));
  $.detsd.errno == 0 && (console.log("即将执行每日任务！"), K = "签到🚩", K == "签到🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/sign?wsgsig=" + ddgyurlVal, taskbody = "{\"selected\":10,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.qd = DATA, $.qd.errno == 0 && (console.log("签到：成功   获得：" + $.qd.data.rewards.num + " " + $.qd.data.rewards.icon + "\n"), await $.wait(2000))), K = "除蚂蚱🚩", K == "除蚂蚱🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/killWorm?wsgsig=" + ddgyurlVal, taskbody = "{\"friend_id\":null,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.cmz = DATA, $.cmz.errno == 0 && (console.log("除蚂蚱：成功\n"), await $.wait(2000))), K = "除蚂蚱2🚩", K == "除蚂蚱2🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/killWorm?wsgsig=" + ddgyurlVal, taskbody = "{\"friend_id\":null,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.cmz2 = DATA, $.cmz2.errno == 0 && (console.log("除蚂蚱2：成功\n"), await $.wait(2000))), K = "领取除蚂蚱奖励🚩", K == "领取除蚂蚱奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":15,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lmzjl = DATA, $.lmzjl.errno == 0 && (console.log("领取除蚂蚱奖励：成功   获得： " + $.lmzjl.data.reward.count + " " + $.lmzjl.data.reward.name + "\n"), await $.wait(2000))), K = "固定入口进游戏🚩", K == "固定入口进游戏🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/update?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":255,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.gdrk = DATA, $.gdrk.errno == 0 && (console.log("固定入口进游戏：成功\n"), await $.wait(2000))), K = "完成固定入口进游戏🚩", K == "完成固定入口进游戏🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":255,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.wcgdrk = DATA, $.wcgdrk.errno == 0 && (console.log("领取奖励固定入口进游戏奖励：成功   获得：" + $.wcgdrk.data.reward.count + " " + $.wcgdrk.data.reward.name + "\n"), await $.wait(2000))), K = "访问公交页面🚩", K == "访问公交页面🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/update?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":256,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.fwgjym = DATA, $.fwgjym.errno == 0 && (console.log("访问公交页面：成功\n"), await $.wait(2000))), K = "领访问公交页面奖励🚩", K == "领访问公交页面奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":256,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lfwgjymjl = DATA, $.lfwgjymjl.errno == 0 && (console.log("领访问公交页面奖励：成功   获得：" + $.lfwgjymjl.data.reward.count + " " + $.lfwgjymjl.data.reward.name + "\n"), await $.wait(2000))), K = "访问积分商城页面🚩", K == "访问积分商城页面🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/update?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":257,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.fwjfscym = DATA, $.fwjfscym.errno == 0 && (console.log("访问积分商城页面：成功\n"), await $.wait(2000))), K = "领访问积分商城页面奖励🚩", K == "领访问积分商城页面奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":257,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lfwjfscymjl = DATA, $.lfwjfscymjl.errno == 0 && (console.log("领访问积分商城页面奖励：成功   获得：" + $.lfwjfscymjl.data.reward.count + " " + $.lfwjfscymjl.data.reward.name + "\n"), await $.wait(2000))), K = "访问橙长会员主页🚩", K == "访问橙长会员主页🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/update?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":258,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.fwczhyzy = DATA, $.fwczhyzy.errno == 0 && (console.log("访问橙长会员主页：成功\n"), await $.wait(2000))), K = "领访问橙长会员主页奖励🚩", K == "领访问橙长会员主页奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":258,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lfwczhyzyjl = DATA, $.lfwczhyzyjl.errno == 0 && (console.log("领取访问橙长会员主页奖励：成功   获得：" + $.lfwczhyzyjl.data.reward.count + " " + $.lfwczhyzyjl.data.reward.name + "\n"), await $.wait(2000))), K = "浏览走路赚钱🚩", K == "浏览走路赚钱🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/update?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":259,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.llzlzq = DATA, $.llzlzq.errno == 0 && (console.log("浏览走路赚钱：成功\n"), await $.wait(2000))), K = "领浏览走路赚钱奖励🚩", K == "领浏览走路赚钱奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/mission/award?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":259,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lllzlzqjl = DATA, $.lllzlzqjl.errno == 0 && (console.log("领取浏览走路赚钱奖励：成功   获得：" + $.lllzlzqjl.data.reward.count + " " + $.lllzlzqjl.data.reward.name + "\n"), await $.wait(2000))));
}
async function jl() {
  K = "领浇水奖励🚩";
  K == "领浇水奖励🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/recExtWater?wsgsig=" + ddgyurlVal, taskbody = "{\"\"mission_id\":100,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.ljsjl = DATA, $.ljsjl.errno == 0 && (console.log("浇水100g奖励：成功   获得水滴：20  \n"), await $.wait(2000)));
  K = "领浇水奖励2🚩";
  K == "领浇水奖励2🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/recExtWater?wsgsig=" + ddgyurlVal, taskbody = "{\"\"mission_id\":101,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.ljsjl2 = DATA, $.ljsjl2.errno == 0 && (console.log("领浇水奖励2：成功   获得水滴：20  \n"), await $.wait(2000)));
  K = "领化肥1🚩";
  K == "领化肥1🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/recExtWater?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":100,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lhf1 = DATA, $.lhf1.errno == 0 && (console.log("领化肥1：成功   获得化肥：1 包 \n"), await $.wait(2000)));
  K = "领化肥2🚩";
  K == "领化肥2🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/recExtWater?wsgsig=" + ddgyurlVal, taskbody = "{\"mission_id\":101,\"game_id\":23,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lhf2 = DATA, $.lhf2.errno == 0 && (console.log("领化肥2：成功   获得化肥：2 包 \n"), await $.wait(2000)));
  K = "用户信息1🚩";
  K == "用户信息1🚩" && (taskurl = "https://game.xiaojukeji.com/api/game/plant/enter?wsgsig=" + ddgyurlVal, taskbody = "{\"assist_type\":0,\"encode_uid\":\"\",\"is_old_player\":true,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.user = DATA, $.user.errno == 0 && ($.message += "【当前果树进度】：" + $.user.data.tree_info.tree_progress + "\n", msgShow(), K = "领螃蟹次数🚩", K == "领螃蟹次数🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/crabRecDailyChance?wsgsig=" + ddgyurlVal, taskbody = "{\"assist_type\":0,\"encode_uid\":\"\",\"is_old_player\":true,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.lpxcs = DATA, $.lpxcs.errno == 0 && (console.log("领取螃蟹猜拳次数：成功   获得次数：" + $.lpxcs.data.guess_times + " \n"), await $.wait(2000))), await px()));
}
async function px() {
  K = "螃蟹猜拳🚩";
  K == "螃蟹猜拳🚩" && (await $.wait(1000), taskurl = "https://game.xiaojukeji.com/api/game/plant/crabGuess?wsgsig=" + ddgyurlVal, taskbody = "{\"assist_type\":0,\"encode_uid\":\"\",\"is_old_player\":true,\"platform\":1,\"token\":\"" + ddgyheaderVal + "\"}", await taskpost(), $.pxcq = DATA, $.pxcq.errno == 0 && (console.log("螃蟹猜拳：成功    \n"), await $.wait(2000), await px()));
}
function msgShow() {
  return new Promise(async _0x22f0ef => {
    notifyInterval != 1 && console.log($.name + "\n" + $.message);
    notifyInterval == 1 && $.msg($.name, "", $.message);
    notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes && $.msg($.name, "", $.message);
    notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes && $.msg($.name, "", $.message);
    if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= Minutes) {
      await notify.sendNotify($.name, $.message);
    }
    _0x22f0ef();
  });
}
function taskpost() {
  return new Promise(async _0x21ef3b => {
    let _0x23ed1e = {
      url: taskurl,
      headers: taskheader,
      body: taskbody
    };
    $.post(_0x23ed1e, (_0x285b5a, _0x234474, _0x20d890) => {
      try {
        if (_0x285b5a) {
          console.log("" + JSON.stringify(_0x285b5a));
          console.log(O + " " + K + "API请求失败，请检查网络重试");
        } else {
          if (_0x20d890) {
            DATA = JSON.parse(_0x20d890);
          } else {
            console.log("服务器返回数据为空");
          }
        }
      } catch (_0x563cba) {
        $.logErr(_0x563cba, _0x234474);
      } finally {
        _0x21ef3b();
      }
    });
  });
}
function taskget() {
  return new Promise(async _0x208e97 => {
    let _0x497381 = {
      url: taskurl,
      headers: taskheader
    };
    $.get(_0x497381, (_0x4e139, _0x4c283c, _0x121b53) => {
      try {
        if (_0x4e139) {
          console.log("" + JSON.stringify(_0x4e139));
          console.log(O + " " + K + "API请求失败，请检查网络重试");
        } else {
          if (_0x121b53) {
            DATA = JSON.parse(_0x121b53);
          } else {
            console.log("服务器返回数据为空");
          }
        }
      } catch (_0x531c47) {
        $.logErr(_0x531c47, _0x4c283c);
      } finally {
        _0x208e97();
      }
    });
  });
}
function Env(_0x1ae55a, _0x1006dd) {
  class _0x4ba1ca {
    constructor(_0x43d24e) {
      this.env = _0x43d24e;
    }
    send(_0x529ed9, _0x1b6637 = "GET") {
      _0x529ed9 = typeof _0x529ed9 === "string" ? {
        url: _0x529ed9
      } : _0x529ed9;
      let _0x4215ec = this.get;
      _0x1b6637 === "POST" && (_0x4215ec = this.post);
      return new Promise((_0x13a711, _0x885a13) => {
        _0x4215ec.call(this, _0x529ed9, (_0x4cb44d, _0x19eec1, _0x4c992d) => {
          if (_0x4cb44d) {
            _0x885a13(_0x4cb44d);
          } else {
            _0x13a711(_0x19eec1);
          }
        });
      });
    }
    get(_0x2cc14a) {
      return this.send.call(this.env, _0x2cc14a);
    }
    post(_0x7fad49) {
      return this.send.call(this.env, _0x7fad49, "POST");
    }
  }
  return new class {
    constructor(_0x5bd317, _0x135cac) {
      this.name = _0x5bd317;
      this.http = new _0x4ba1ca(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x135cac);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x2e7f64, _0x1bc792 = null) {
      try {
        return JSON.parse(_0x2e7f64);
      } catch {
        return _0x1bc792;
      }
    }
    toStr(_0x2bc68f, _0x550bd0 = null) {
      try {
        return JSON.stringify(_0x2bc68f);
      } catch {
        return _0x550bd0;
      }
    }
    getjson(_0x3878e2, _0x4a6deb) {
      let _0x503abd = _0x4a6deb;
      const _0x4ecb99 = this.getdata(_0x3878e2);
      if (_0x4ecb99) {
        try {
          _0x503abd = JSON.parse(this.getdata(_0x3878e2));
        } catch {}
      }
      return _0x503abd;
    }
    setjson(_0x1edfa4, _0x3ddcae) {
      try {
        return this.setdata(JSON.stringify(_0x1edfa4), _0x3ddcae);
      } catch {
        return false;
      }
    }
    getScript(_0x4b2f8f) {
      return new Promise(_0x16e546 => {
        this.get({
          url: _0x4b2f8f
        }, (_0x207d5c, _0x17ee95, _0x5767d4) => _0x16e546(_0x5767d4));
      });
    }
    runScript(_0x534048, _0x50c20e) {
      return new Promise(_0xa56f9b => {
        let _0x432ca4 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x432ca4 = _0x432ca4 ? _0x432ca4.replace(/\n/g, "").trim() : _0x432ca4;
        let _0x454f18 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x454f18 = _0x454f18 ? _0x454f18 * 1 : 20;
        _0x454f18 = _0x50c20e && _0x50c20e.timeout ? _0x50c20e.timeout : _0x454f18;
        const [_0xb83135, _0x541f8] = _0x432ca4.split("@"),
          _0xdcd409 = {
            url: "http://" + _0x541f8 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x534048,
              mock_type: "cron",
              timeout: _0x454f18
            },
            headers: {
              "X-Key": _0xb83135,
              Accept: "*/*"
            }
          };
        this.post(_0xdcd409, (_0x5c8e7f, _0x88443c, _0x5b754a) => _0xa56f9b(_0x5b754a));
      }).catch(_0x2b9c4e => this.logErr(_0x2b9c4e));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x40fae7 = this.path.resolve(this.dataFile),
          _0x52efea = this.path.resolve(process.cwd(), this.dataFile),
          _0xc50f2b = this.fs.existsSync(_0x40fae7),
          _0x559c30 = !_0xc50f2b && this.fs.existsSync(_0x52efea);
        if (_0xc50f2b || _0x559c30) {
          const _0x5ce053 = _0xc50f2b ? _0x40fae7 : _0x52efea;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5ce053));
          } catch (_0x56a3af) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x483b9c = this.path.resolve(this.dataFile),
          _0x35db6f = this.path.resolve(process.cwd(), this.dataFile),
          _0x18c132 = this.fs.existsSync(_0x483b9c),
          _0x3d8705 = !_0x18c132 && this.fs.existsSync(_0x35db6f),
          _0x107138 = JSON.stringify(this.data);
        if (_0x18c132) {
          this.fs.writeFileSync(_0x483b9c, _0x107138);
        } else {
          _0x3d8705 ? this.fs.writeFileSync(_0x35db6f, _0x107138) : this.fs.writeFileSync(_0x483b9c, _0x107138);
        }
      }
    }
    lodash_get(_0x352d49, _0x559b22, _0x2bbbf8 = undefined) {
      const _0x4e7b41 = _0x559b22.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x39ca43 = _0x352d49;
      for (const _0x56436f of _0x4e7b41) {
        _0x39ca43 = Object(_0x39ca43)[_0x56436f];
        if (_0x39ca43 === undefined) {
          return _0x2bbbf8;
        }
      }
      return _0x39ca43;
    }
    lodash_set(_0x38298b, _0x1093e4, _0x59ba53) {
      if (Object(_0x38298b) !== _0x38298b) {
        return _0x38298b;
      }
      if (!Array.isArray(_0x1093e4)) {
        _0x1093e4 = _0x1093e4.toString().match(/[^.[\]]+/g) || [];
      }
      _0x1093e4.slice(0, -1).reduce((_0x135a47, _0x2f2c45, _0x1919a6) => Object(_0x135a47[_0x2f2c45]) === _0x135a47[_0x2f2c45] ? _0x135a47[_0x2f2c45] : _0x135a47[_0x2f2c45] = Math.abs(_0x1093e4[_0x1919a6 + 1]) >> 0 === +_0x1093e4[_0x1919a6 + 1] ? [] : {}, _0x38298b)[_0x1093e4[_0x1093e4.length - 1]] = _0x59ba53;
      return _0x38298b;
    }
    getdata(_0x3c201c) {
      let _0x86092 = this.getval(_0x3c201c);
      if (/^@/.test(_0x3c201c)) {
        const [, _0x3e7b1c, _0x12557e] = /^@(.*?)\.(.*?)$/.exec(_0x3c201c),
          _0x525d2f = _0x3e7b1c ? this.getval(_0x3e7b1c) : "";
        if (_0x525d2f) {
          try {
            const _0xbf8ce7 = JSON.parse(_0x525d2f);
            _0x86092 = _0xbf8ce7 ? this.lodash_get(_0xbf8ce7, _0x12557e, "") : _0x86092;
          } catch (_0xa472e0) {
            _0x86092 = "";
          }
        }
      }
      return _0x86092;
    }
    setdata(_0x3c13d3, _0x78aad1) {
      let _0x9a3259 = false;
      if (/^@/.test(_0x78aad1)) {
        const [, _0x2223de, _0x2b665d] = /^@(.*?)\.(.*?)$/.exec(_0x78aad1),
          _0xf5abba = this.getval(_0x2223de),
          _0x252afa = _0x2223de ? _0xf5abba === "null" ? null : _0xf5abba || "{}" : "{}";
        try {
          const _0x3078c5 = JSON.parse(_0x252afa);
          this.lodash_set(_0x3078c5, _0x2b665d, _0x3c13d3);
          _0x9a3259 = this.setval(JSON.stringify(_0x3078c5), _0x2223de);
        } catch (_0x46de36) {
          const _0xc1645d = {};
          this.lodash_set(_0xc1645d, _0x2b665d, _0x3c13d3);
          _0x9a3259 = this.setval(JSON.stringify(_0xc1645d), _0x2223de);
        }
      } else {
        _0x9a3259 = this.setval(_0x3c13d3, _0x78aad1);
      }
      return _0x9a3259;
    }
    getval(_0x558c1f) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x558c1f);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x558c1f);
        } else {
          return this.isNode() ? (this.data = this.loaddata(), this.data[_0x558c1f]) : this.data && this.data[_0x558c1f] || null;
        }
      }
    }
    setval(_0x232693, _0x3f2900) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x232693, _0x3f2900);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x232693, _0x3f2900);
        } else {
          return this.isNode() ? (this.data = this.loaddata(), this.data[_0x3f2900] = _0x232693, this.writedata(), true) : this.data && this.data[_0x3f2900] || null;
        }
      }
    }
    initGotEnv(_0x506139) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x506139 && (_0x506139.headers = _0x506139.headers ? _0x506139.headers : {}, undefined === _0x506139.headers.Cookie && undefined === _0x506139.cookieJar && (_0x506139.cookieJar = this.ckjar));
    }
    get(_0x1a0cdc, _0x1086af = () => {}) {
      _0x1a0cdc.headers && (delete _0x1a0cdc.headers["Content-Type"], delete _0x1a0cdc.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1a0cdc.headers = _0x1a0cdc.headers || {}, Object.assign(_0x1a0cdc.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.get(_0x1a0cdc, (_0x4c73b5, _0x5b48cd, _0x466b86) => {
          !_0x4c73b5 && _0x5b48cd && (_0x5b48cd.body = _0x466b86, _0x5b48cd.statusCode = _0x5b48cd.status);
          _0x1086af(_0x4c73b5, _0x5b48cd, _0x466b86);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (_0x1a0cdc.opts = _0x1a0cdc.opts || {}, Object.assign(_0x1a0cdc.opts, {
            hints: false
          }));
          $task.fetch(_0x1a0cdc).then(_0x141b64 => {
            const {
              statusCode: _0x38d05f,
              statusCode: _0x580eaf,
              headers: _0x4e4370,
              body: _0x3de20f
            } = _0x141b64;
            _0x1086af(null, {
              status: _0x38d05f,
              statusCode: _0x580eaf,
              headers: _0x4e4370,
              body: _0x3de20f
            }, _0x3de20f);
          }, _0x3a9d92 => _0x1086af(_0x3a9d92));
        } else {
          this.isNode() && (this.initGotEnv(_0x1a0cdc), this.got(_0x1a0cdc).on("redirect", (_0x7e6464, _0x24d841) => {
            try {
              if (_0x7e6464.headers["set-cookie"]) {
                const _0x385138 = _0x7e6464.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x385138 && this.ckjar.setCookieSync(_0x385138, null);
                _0x24d841.cookieJar = this.ckjar;
              }
            } catch (_0x3cd1d1) {
              this.logErr(_0x3cd1d1);
            }
          }).then(_0xf2826f => {
            const {
              statusCode: _0x4a44ce,
              statusCode: _0x369f4f,
              headers: _0x5c3576,
              body: _0x2ce1f6
            } = _0xf2826f;
            _0x1086af(null, {
              status: _0x4a44ce,
              statusCode: _0x369f4f,
              headers: _0x5c3576,
              body: _0x2ce1f6
            }, _0x2ce1f6);
          }, _0x106b4f => {
            const {
              message: _0x20852e,
              response: _0x43b0ad
            } = _0x106b4f;
            _0x1086af(_0x20852e, _0x43b0ad, _0x43b0ad && _0x43b0ad.body);
          }));
        }
      }
    }
    post(_0xa78a1d, _0x761d8e = () => {}) {
      const _0x48725a = _0xa78a1d.method ? _0xa78a1d.method.toLocaleLowerCase() : "post";
      _0xa78a1d.body && _0xa78a1d.headers && !_0xa78a1d.headers["Content-Type"] && (_0xa78a1d.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (_0xa78a1d.headers) {
        delete _0xa78a1d.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xa78a1d.headers = _0xa78a1d.headers || {}, Object.assign(_0xa78a1d.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient[_0x48725a](_0xa78a1d, (_0x307c30, _0x413c25, _0x479a2e) => {
          !_0x307c30 && _0x413c25 && (_0x413c25.body = _0x479a2e, _0x413c25.statusCode = _0x413c25.status);
          _0x761d8e(_0x307c30, _0x413c25, _0x479a2e);
        });
      } else {
        if (this.isQuanX()) {
          _0xa78a1d.method = _0x48725a;
          this.isNeedRewrite && (_0xa78a1d.opts = _0xa78a1d.opts || {}, Object.assign(_0xa78a1d.opts, {
            hints: false
          }));
          $task.fetch(_0xa78a1d).then(_0x38ec32 => {
            const {
              statusCode: _0x357d2a,
              statusCode: _0xf1ab95,
              headers: _0x4e20fc,
              body: _0x59c088
            } = _0x38ec32;
            _0x761d8e(null, {
              status: _0x357d2a,
              statusCode: _0xf1ab95,
              headers: _0x4e20fc,
              body: _0x59c088
            }, _0x59c088);
          }, _0xe4b48f => _0x761d8e(_0xe4b48f));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xa78a1d);
            const {
              url: _0x2fe0fc,
              ..._0x9931ba
            } = _0xa78a1d;
            this.got[_0x48725a](_0x2fe0fc, _0x9931ba).then(_0x1d9704 => {
              const {
                statusCode: _0x16bc5c,
                statusCode: _0x3b1a6b,
                headers: _0x43e54f,
                body: _0x3346f6
              } = _0x1d9704;
              _0x761d8e(null, {
                status: _0x16bc5c,
                statusCode: _0x3b1a6b,
                headers: _0x43e54f,
                body: _0x3346f6
              }, _0x3346f6);
            }, _0x524c53 => {
              const {
                message: _0x4d8671,
                response: _0x3c4e41
              } = _0x524c53;
              _0x761d8e(_0x4d8671, _0x3c4e41, _0x3c4e41 && _0x3c4e41.body);
            });
          }
        }
      }
    }
    time(_0x4dcb41, _0x30bb33 = null) {
      const _0x7b56c3 = _0x30bb33 ? new Date(_0x30bb33) : new Date();
      let _0x1ee67c = {
        "M+": _0x7b56c3.getMonth() + 1,
        "d+": _0x7b56c3.getDate(),
        "H+": _0x7b56c3.getHours(),
        "m+": _0x7b56c3.getMinutes(),
        "s+": _0x7b56c3.getSeconds(),
        "q+": Math.floor((_0x7b56c3.getMonth() + 3) / 3),
        S: _0x7b56c3.getMilliseconds()
      };
      if (/(y+)/.test(_0x4dcb41)) {
        _0x4dcb41 = _0x4dcb41.replace(RegExp.$1, (_0x7b56c3.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x5457b5 in _0x1ee67c) if (new RegExp("(" + _0x5457b5 + ")").test(_0x4dcb41)) {
        _0x4dcb41 = _0x4dcb41.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x1ee67c[_0x5457b5] : ("00" + _0x1ee67c[_0x5457b5]).substr(("" + _0x1ee67c[_0x5457b5]).length));
      }
      return _0x4dcb41;
    }
    msg(_0x255069 = _0x1ae55a, _0xf9a867 = "", _0x3942e8 = "", _0x5e83d9) {
      const _0x42d116 = _0x19b825 => {
        if (!_0x19b825) {
          return _0x19b825;
        }
        if (typeof _0x19b825 === "string") {
          if (this.isLoon()) {
            return _0x19b825;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x19b825
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x19b825
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x19b825 === "object") {
            if (this.isLoon()) {
              let _0x2c2565 = _0x19b825.openUrl || _0x19b825.url || _0x19b825["open-url"],
                _0x25259d = _0x19b825.mediaUrl || _0x19b825["media-url"];
              return {
                openUrl: _0x2c2565,
                mediaUrl: _0x25259d
              };
            } else {
              if (this.isQuanX()) {
                let _0xc37850 = _0x19b825["open-url"] || _0x19b825.url || _0x19b825.openUrl,
                  _0x3fe047 = _0x19b825["media-url"] || _0x19b825.mediaUrl;
                return {
                  "open-url": _0xc37850,
                  "media-url": _0x3fe047
                };
              } else {
                if (this.isSurge()) {
                  let _0x13a1bd = _0x19b825.url || _0x19b825.openUrl || _0x19b825["open-url"];
                  return {
                    url: _0x13a1bd
                  };
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x255069, _0xf9a867, _0x3942e8, _0x42d116(_0x5e83d9));
        } else {
          this.isQuanX() && $notify(_0x255069, _0xf9a867, _0x3942e8, _0x42d116(_0x5e83d9));
        }
      }
      if (!this.isMuteLog) {
        let _0x433762 = ["", "==============📣系统通知📣=============="];
        _0x433762.push(_0x255069);
        _0xf9a867 ? _0x433762.push(_0xf9a867) : "";
        _0x3942e8 ? _0x433762.push(_0x3942e8) : "";
        console.log(_0x433762.join("\n"));
        this.logs = this.logs.concat(_0x433762);
      }
    }
    log(..._0x4cd44b) {
      _0x4cd44b.length > 0 && (this.logs = [...this.logs, ..._0x4cd44b]);
      console.log(_0x4cd44b.join(this.logSeparator));
    }
    logErr(_0x47ba06, _0x45f871) {
      const _0x23ff59 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !_0x23ff59 ? this.log("", "❗️" + this.name + ", 错误!", _0x47ba06) : this.log("", "❗️" + this.name + ", 错误!", _0x47ba06.stack);
    }
    wait(_0x496aaf) {
      return new Promise(_0x4ef8bf => setTimeout(_0x4ef8bf, _0x496aaf));
    }
    done(_0x396120 = {}) {
      const _0x1f802e = new Date().getTime(),
        _0x3258c3 = (_0x1f802e - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3258c3 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x396120);
    }
  }(_0x1ae55a, _0x1006dd);
}