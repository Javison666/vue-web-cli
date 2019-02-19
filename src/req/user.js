import http from '@/utils/http'
import httpApi from '@/apis/httpApi'

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
