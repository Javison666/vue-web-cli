
//--语音播报---------------------------------------------------------------------
class Audio {
    constructor() { }
    /**
     * 播放音频
     * @param {音频地址} url 
     */
    playUrl(url, fn) {
        let audio = document.createElement('audio') //生成一个audio元素 
        audio.controls = true //这样控件才能显示出来 
        audio.hidden = true
        audio.src = url //音乐的路径 
        document.body.append(audio)
        audio.play();   //播放音频
        audio.onended = function () {
            audio.remove()
            if (typeof fn === "function") {
                fn()
            }
        }
    }
    loopPlay(url, id) {
        let audio = document.createElement('audio') //生成一个audio元素 
        audio.id = id ? `audio-${id}` : `audio-jj`
        audio.controls = true //这样控件才能显示出来 
        audio.hidden = true
        audio.loop = true
        audio.src = url //音乐的路径 
        document.body.append(audio)
        return audio.play();   //播放音频
    }
    switchPlay(id, state) {
        let domId = id ? `audio-${id}` : `audio-jj`
        let audio = document.getElementById(domId)
        if (!audio) return
        if (state) {
            audio.play()
        } else {
            audio.pause()
        }
    }
}

export default new Audio()