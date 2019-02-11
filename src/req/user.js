import http from '@/utils/http'
import httpApi from '@/apis/httpApi'
// 判断是否登录
export const isLogin=()=>{
    let res={
        data:0
    }
    return new Promise((resolve)=>{
        let timeout=setTimeout(()=>{
            resolve(res)
        },1800)
        http.post({
            url:httpApi.user.isLogin
        }).then(result=>{
            clearTimeout(timeout)
            res=result
            resolve(res)
        })
        
    })
}
// 登出
export const logout=async ()=>{
    let res=await http.post({
        url:httpApi.user.logout
    })
    if(res.code==200 && window.App){
        window.App.$store.dispatch('global/actionSetAuth',0)
        window.App.$router.push({
            path:'/'
        })
    }
}

// 判断是否登录
export const getUserInfo=()=>{
    return http.post({
        url:httpApi.user.getInfo
    })
}
