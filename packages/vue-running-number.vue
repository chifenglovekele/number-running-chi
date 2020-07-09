<template>
  <div class="cjk-running-component">
    <div
      ref="cjk-running-container"
      :style="`font-size: ${size}px;`"
      class="cjk-running-container">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueRunningNumber',
  components: {},
  props: {
    size: {
      type: Number,
      default: 16
    },
    inNumber: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2000
    },
    widthScale: {
      type: Number,
      default: 1
    },
    isSplit: {
      type: Boolean,
      default: false
    }
  },
  data(){

    return ({
      rootEl: null,
      numLists: [
        '<li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li>',
        '<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li>',
        '<li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li>',
        '<li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li>',
        '<li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li>',
        '<li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>',
        '<li>6</li><li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li>',
        '<li>7</li><li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li>',
        '<li>8</li><li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li>',
        '<li>9</li><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li>',
      ],
      minusNumLists: [
        '<li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li>',
        '<li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li>',
        '<li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li>',
        '<li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li>',
        '<li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li>',
        '<li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li><li>5</li>',
        '<li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li><li>6</li>',
        '<li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li><li>7</li>',
        '<li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li><li>8</li>',
        '<li>9</li><li>8</li><li>7</li><li>6</li><li>5</li><li>4</li><li>3</li><li>2</li><li>1</li><li>0</li><li>9</li>',
      ],
      htmlStr: '',
      hisNumber: 0
    })

  },
  watch: {
    inNumber(v){

      this.startCompute(Number(this.hisNumber), Number(v), this.duration);

    }
  },
  mounted() {

    this.rootEl = this.$refs['cjk-running-container'];
    this.startCompute(Number(this.hisNumber), Number(this.inNumber), this.duration);

  },
  methods: {
    startCompute(start, end, duration){//开始计算

      if (start >= 0 && end >= 0) {

        this.computeRunningArg(start, Number(end), duration);

      } else if (start <= 0 && end <= 0) {

        this.computeRunningArg(start, Number(end), duration, true);

      } else if (start > 0 && end < 0) {

        const dS = Math.ceil(duration * Math.abs(start) / (Math.abs(start) + Math.abs(end)));
        const dE = duration - dS > 10 ? (duration - dS) : 10;
        this.computeRunningArg(start, 0, dS);
        setTimeout(() => {

          this.computeRunningArg(0, Number(end), dE, true);

        }, dS);

      } else if (start < 0 && end > 0) {

        const dS = Math.ceil(duration * Math.abs(start) / (Math.abs(start) + Math.abs(end)));
        const dE = duration - dS > 10 ? (duration - dS) : 10;
        this.computeRunningArg(start, 0, dS, true);
        setTimeout(() => {

          this.computeRunningArg(0, Number(end), dE);

        }, dS);

      }


    },
    computeRunningArg(sNum, eNum, inDuration, isHaveMinus){//计算滚动动画的相关参数

      if (sNum === eNum && eNum === 0) {

        this.$refs['cjk-running-container'].innerHTML = `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box"><ul class="cjk-running-area"><li>0</li></ul></div>`;

      }
      if (sNum === eNum)return;

      const absSnum = Math.abs(sNum);
      const absEnum = Math.abs(eNum);
      const pointObj = {
        index: 0,
        endRemovePointer: absEnum.toString().indexOf('.') === -1 ? true : false
      };
      const rSnum = this.getRelativeNum(absSnum.toString(), absEnum.toString(), pointObj);
      const rEnum = this.getRelativeNum(absEnum.toString(), absSnum.toString());
      const sNumArr = rSnum.split('').reverse();
      const eNumArr = rEnum.split('').reverse();
      const offset = Math.abs(rEnum - rSnum);
      const forTimes = (rEnum > rSnum ? rEnum : rSnum).toString().replace('.', '').length;
      const isDown = eNum - sNum >= 0 ? false : true;
      this.htmlStr = '';
      for (let i = forTimes - 1; i >= 0; i--) {

        const start = sNumArr[i] ? sNumArr[i] : 0;
        const end = eNumArr[i] ? eNumArr[i] : 0;
        const splitTime = Math.floor(inDuration * Math.pow(10, i) / offset) < 10 ? 10 : Math.floor(inDuration * Math.pow(10, i) / offset);
        let duration = splitTime * 10;
        let times = inDuration / duration;
        let endToStartTime = ((end - start + 10) % 10) / 10;
        if ((!isHaveMinus && isDown) || (isHaveMinus && !isDown)) endToStartTime = endToStartTime === 0 ? 0 : 1 - endToStartTime;
        if (times < 0.1) {

          times = endToStartTime;

        } else if (times >= 0.1 && times < 1) {

          times = endToStartTime;
          times = times === 0 ? 1 : times;

        } else {

          times = Math.floor(times);
          times += endToStartTime;

        }
        if (splitTime === 10) {//极限转动速度时

          times = Math.floor(inDuration / duration) + endToStartTime;

        }
        if (inDuration / times > 130 && inDuration / times < 220) {//该区间动画执行很难看

          const t = Math.round(inDuration / 220);
          times = times.toString().split('.')[1] ? Number((t + '.' + times.toString().split('.')[1])) : t;

        }
        duration = inDuration / times;
        const isSplit = (i > pointObj.index + 2) && ((i - pointObj.index) % 3 === 0);
        const isPointer = (i === pointObj.index) && (i != 0) ? true : false;
        this.createRunningHtml(isHaveMinus ? this.minusNumLists : this.numLists, Number(start), Number(end), duration / 1000, times, isDown, this.isSplit && isSplit, isPointer);

      }
      this.startRunning(inDuration, isHaveMinus, pointObj.endRemovePointer);
      this.$nextTick(() => {

        this.hisNumber = this.inNumber;

      })

    },
    getRelativeNum(num, rNum, pointObj){//获取相对大小数字，主要处理小数情况

      const hNum = num.split('.')[0];
      const fNum = num.split('.')[1] ? num.split('.')[1] : '';
      const hRnum = rNum.split('.')[0];
      const fRnum = rNum.split('.')[1] ? rNum.split('.')[1] : '';
      let newHNum = hNum;
      let newFNum = fNum;
      if (fRnum.length > fNum.length) {

        for (let i = 0; i < fRnum.length - fNum.length; i++) {

          newFNum += '0';

        }

      }
      if (hRnum.length > hNum.length) {

        for (let i = 0; i < hRnum.length - hNum.length; i++) {

          newHNum = '0' + newHNum;

        }

      }

      if (pointObj && newFNum) pointObj.index = newFNum.length;
      return newHNum + newFNum;

    },
    startRunning(allDuration, isHaveMinus, endRemovePointer){// 开始运行当前动画

      this.$refs['cjk-running-container'].innerHTML = this.htmlStr;
      if (isHaveMinus) {

        this.addCls(this.$refs['cjk-running-container'], 'cjk-minus');

      } else {

        this.removeCls(this.$refs['cjk-running-container'], 'cjk-minus');

      }
      setTimeout(() => {

        this.endCallBack(endRemovePointer);

      }, allDuration);


    },
    endCallBack(endRemovePointer){//一次总动画执行完后执行该函数，动态移动隐藏数字开头的0

      //const numberCls = Array.from(this.getDomList('cjk-number-box'));
      const numberCls = [];
      let isDelRight = false;
      this.getDomList('cjk-number-box').forEach((el) => {

        numberCls.push(el);
        if (el.getAttribute('class').indexOf('cjk-pointer') !== -1) isDelRight = true;

      });
      this.hiddenZero(numberCls);
      if (isDelRight) this.hiddenZero(numberCls.reverse());
      if (endRemovePointer) this.removeCls(this.getDomList('cjk-pointer')[0], 'cjk-pointer');

    },
    hiddenZero(numberCls){//隐藏左右侧得0

      let isHidden = true;
      numberCls.forEach((el, n) => {

        if (numberCls.length === 1)return;
        if (el.getAttribute('endNum') === '0' && el.getAttribute('class').indexOf('cjk-pointer') === -1) {

          if (isHidden) {

            if (numberCls.length === n + 1) {

              this.removeCls(this.$refs['cjk-running-container'], 'cjk-minus');

            } else {

              el.style.width = '0px';
              el.style.overflow = 'hidden';

            }

          }

        } else {

          isHidden = false;

        }

      })

    },
    addCls(el, cls){//给元素增加class

      if (!el)return;
      const allCls = el.getAttribute('class');
      if (allCls.indexOf(cls) === -1) el.setAttribute('class', `${allCls} ${cls}`);

    },
    removeCls(el, cls){//给元素移除class

      if (!el)return;
      const allCls = el.getAttribute('class');
      if (allCls.indexOf(cls) !== -1) el.setAttribute('class', allCls.replace(cls, ''));

    },
    createRunningHtml(numLists, start, end, duration, times, isDown, isSplit, isPointer){//创建当前位数字的滚动特效所需的html

      const animation = isDown ? 'reverseRunningAnimation' : 'runningAnimation';
      const splitCls = isSplit ? ' cjk-split' : '';
      const pointerCls = isPointer ? ' cjk-pointer' : '';
      if (times === 0) {

        this.htmlStr += `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box${splitCls}${pointerCls}" endNum="${end}">
        <div><ul class="cjk-running-area"><li>${end}</li></ul></div></div>`;
        return;

      } else {

        this.htmlStr += `<div style="width: ${0.55 * this.widthScale}em;" class="cjk-number-box${splitCls}${pointerCls}" endNum="${end}">
        <div>
        <ul class="cjk-running-area" style="animation-name:${animation};animation-duration:${duration}s;animation-iteration-count: ${times};">${numLists[start]}</ul>
        </div>
        </div>`;

      }

    },
    getDomList(cls){

      const elArr = [];
      const clsEls = this.rootEl.getElementsByClassName(cls);
      for (let i = 0; i < clsEls.length; i++) {

        elArr.push(clsEls[i]);

      }
      return elArr;

    }
  }
};
</script>

<style>
  .cjk-running-component {
    overflow: hidden;
  }

  .cjk-running-container {
    overflow: hidden;
  }

  .cjk-running-container:before {
    content: '-';
    display: block;
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 0;
    height: 1.25em;
    line-height: 1.05em;
    text-align: right;
    transition: width 0.3s;
    overflow: hidden;
  }

  .cjk-running-container.cjk-minus:before {
    width: 0.5em;
  }

  .cjk-number-box {
    float: left;
    position: relative;
    box-sizing: border-box;
    height: 1.25em;
    transition: width 0.3s;
  }

  .cjk-number-box.cjk-split:after {
    content: ',';
    display: block;
    position: absolute;
    right: -0.21em;
    bottom: 0.06em;
    z-index: 3;
  }

  .cjk-number-box.cjk-pointer:after {
    content: '.';
    display: block;
    position: absolute;
    right: -0.21em;
    bottom: 0.06em;
    z-index: 3;
  }

  .cjk-number-box.cjk-split, .cjk-number-box.cjk-pointer{
    margin-right: 0.14em;
  }

  .cjk-number-box > div {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .cjk-running-area {
    list-style: none;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 13.75em;
    left: 0;
    top: 0em;
    visibility: visible;
    /*animation-name: runningAnimation;*/
    /*animation-duration: 3s;*/
    animation-timing-function: linear;
    /*animation-delay: 0s;*/
    /*animation-iteration-count: 3;*/
    animation-fill-mode: forwards;
    animation-play-state: running;
    /*animation-play-state:paused;*/
  }

  .cjk-running-area > li {
    width: 100%;
    height: 1.25em;
    line-height: 1.25em;
    text-align: center;
  }

  @keyframes runningAnimation {
    from {
      top: 0em;
    }
    to {
      top: -12.5em;
    }
  }

  @keyframes reverseRunningAnimation {
    from {
      top: -12.5em;
    }
    to {
      top: 0em;
    }
  }
</style>
